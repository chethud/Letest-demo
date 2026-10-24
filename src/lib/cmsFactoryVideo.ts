const DB_NAME = "ksic-cms-media-v1";
const DB_VERSION = 1;
const STORE = "blobs";
const FACTORY_VIDEO_KEY = "factory-video";

/** Stored in cmsHome.factoryVideoUrl when the film is an uploaded file. */
export const FACTORY_VIDEO_IDB_REF = "idb:factory-video";

export const MAX_VIDEO_UPLOAD_BYTES = 25 * 1024 * 1024;

export function isFactoryVideoIdbRef(url: string) {
  return url.trim() === FACTORY_VIDEO_IDB_REF;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(new Error("Could not open media storage."));
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE);
      }
    };
  });
}

function idbRequest<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Storage request failed."));
  });
}

export async function saveFactoryVideoFile(file: File): Promise<string> {
  if (!file.type.startsWith("video/")) {
    throw new Error("Please choose a video file (MP4, WebM, or similar).");
  }
  if (file.size > MAX_VIDEO_UPLOAD_BYTES) {
    throw new Error("Please choose a video under 25 MB for this demo.");
  }

  const db = await openDb();
  try {
    const tx = db.transaction(STORE, "readwrite");
    await idbRequest(tx.objectStore(STORE).put(file, FACTORY_VIDEO_KEY));
  } finally {
    db.close();
  }
  return FACTORY_VIDEO_IDB_REF;
}

export async function clearFactoryVideoFile(): Promise<void> {
  if (typeof indexedDB === "undefined") return;
  const db = await openDb();
  try {
    const tx = db.transaction(STORE, "readwrite");
    await idbRequest(tx.objectStore(STORE).delete(FACTORY_VIDEO_KEY));
  } finally {
    db.close();
  }
}

export async function getFactoryVideoObjectUrl(): Promise<string | null> {
  if (typeof indexedDB === "undefined") return null;
  const db = await openDb();
  try {
    const tx = db.transaction(STORE, "readonly");
    const blob = await idbRequest(tx.objectStore(STORE).get(FACTORY_VIDEO_KEY));
    if (!blob || !(blob instanceof Blob)) return null;
    return URL.createObjectURL(blob);
  } finally {
    db.close();
  }
}
