/**
 * Online booking flag.
 * When BOOKING_TEMPORARILY_UNAVAILABLE is true, booking stays off for everyone
 * (admin toggle removed). Set to false later to restore Admin → Settings control.
 */

/** Pause online booking site-wide for now. */
export const BOOKING_TEMPORARILY_UNAVAILABLE = true;

export const BOOKING_OVERRIDE_KEY = "ksic-booking-override-v1";
export const BOOKING_COOKIE = "ksic_booking_on";
export const BOOKING_CHANGE_EVENT = "ksic-booking-change";

export type BookingFlags = {
  bookingEnabled: boolean;
  inventoryValidationConfigured: boolean;
  paymentConfigured: boolean;
};

export type BookingPersistResult = { ok: true } | { ok: false; error: string };

export const bookingConfig: BookingFlags = {
  bookingEnabled: false,
  inventoryValidationConfigured: false,
  paymentConfigured: false,
};

type Listener = () => void;

let memoryEnabled: boolean | null = null;
const listeners = new Set<Listener>();

function flagsFromEnabled(enabled: boolean): BookingFlags {
  return {
    bookingEnabled: enabled,
    inventoryValidationConfigured: enabled,
    paymentConfigured: enabled,
  };
}

function readCookie(): boolean | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${BOOKING_COOKIE}=(1|0)(?:;|$)`),
  );
  if (!match) return null;
  return match[1] === "1";
}

function writeCookie(enabled: boolean) {
  if (typeof document === "undefined") return;
  document.cookie = `${BOOKING_COOKIE}=${enabled ? "1" : "0"}; path=/; max-age=31536000; SameSite=Lax`;
}

function readStoreFlag(storage: Storage): boolean | null {
  try {
    const raw = storage.getItem(BOOKING_OVERRIDE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<BookingFlags>;
    if (typeof parsed.bookingEnabled === "boolean") return parsed.bookingEnabled;
  } catch {
    /* ignore */
  }
  return null;
}

function writeStoreFlag(storage: Storage, raw: string): boolean {
  try {
    storage.setItem(BOOKING_OVERRIDE_KEY, raw);
    return true;
  } catch {
    try {
      // Drop a stale value so cookie can win on the next read.
      storage.removeItem(BOOKING_OVERRIDE_KEY);
    } catch {
      /* ignore */
    }
    return false;
  }
}

function readCachedFlag(): boolean | null {
  if (typeof window === "undefined") return null;
  const fromLocal = readStoreFlag(window.localStorage);
  if (fromLocal !== null) return fromLocal;
  return readStoreFlag(window.sessionStorage);
}

function healCaches(enabled: boolean) {
  if (typeof window === "undefined") return;
  const raw = JSON.stringify(flagsFromEnabled(enabled));
  writeStoreFlag(window.localStorage, raw);
  writeStoreFlag(window.sessionStorage, raw);
}

function readStorageEnabled(): boolean | null {
  if (typeof window === "undefined") return null;

  const fromCookie = readCookie();
  const fromCache = readCachedFlag();

  // Cookie always writes successfully — prefer it when sources disagree.
  if (fromCookie !== null) {
    if (fromCache !== fromCookie) healCaches(fromCookie);
    return fromCookie;
  }
  if (fromCache !== null) {
    writeCookie(fromCache);
    return fromCache;
  }
  return null;
}

function persistEnabled(enabled: boolean): BookingPersistResult {
  if (typeof window === "undefined") {
    return { ok: false, error: "Booking can only be changed in the browser." };
  }

  writeCookie(enabled);
  const raw = JSON.stringify(flagsFromEnabled(enabled));

  const localOk = writeStoreFlag(window.localStorage, raw);
  const sessionOk = writeStoreFlag(window.sessionStorage, raw);

  // Cookie alone is enough for cross-page sync.
  if (!localOk && !sessionOk && readCookie() === null) {
    return {
      ok: false,
      error:
        "Could not save booking setting. Clear site data (CMS uploads may have filled storage) and try again.",
    };
  }

  return { ok: true };
}

function emit() {
  listeners.forEach((listener) => listener());
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(BOOKING_CHANGE_EVENT));
    try {
      window.localStorage.setItem(`${BOOKING_OVERRIDE_KEY}:ping`, String(Date.now()));
    } catch {
      /* ignore */
    }
  }
}

/** Call on client boot and whenever storage may have changed. */
export function hydrateBookingFromStorage() {
  if (BOOKING_TEMPORARILY_UNAVAILABLE) {
    memoryEnabled = false;
    // Clear any leftover “on” flag from earlier demos.
    try {
      persistEnabled(false);
    } catch {
      /* ignore */
    }
    emit();
    return false;
  }
  const stored = readStorageEnabled();
  memoryEnabled = stored === null ? false : stored;
  emit();
  return memoryEnabled;
}

export function getBookingSnapshot() {
  if (BOOKING_TEMPORARILY_UNAVAILABLE) {
    memoryEnabled = false;
    return false;
  }
  if (typeof window === "undefined") return false;
  // Always re-read storage so a stale in-memory `false` (from an early paint
  // before cookie/LS agreed) cannot keep the storefront closed.
  const stored = readStorageEnabled() ?? false;
  memoryEnabled = stored;
  return stored;
}

export function getBookingServerSnapshot() {
  return false;
}

export function subscribeBooking(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function isOnlineBookingActive() {
  return getBookingSnapshot() === true;
}

export function readBookingOverride(): BookingFlags | null {
  const stored = readStorageEnabled();
  if (stored === null && memoryEnabled === null) return null;
  return flagsFromEnabled(memoryEnabled ?? stored ?? false);
}

export function getEffectiveBookingFlags(): BookingFlags {
  return flagsFromEnabled(isOnlineBookingActive());
}

export function enableOnlineBooking(): BookingPersistResult {
  if (BOOKING_TEMPORARILY_UNAVAILABLE) {
    memoryEnabled = false;
    emit();
    return {
      ok: false,
      error: "Online booking is temporarily unavailable.",
    };
  }
  const result = persistEnabled(true);
  if (!result.ok) return result;
  memoryEnabled = true;
  emit();
  return result;
}

export function disableOnlineBooking(): BookingPersistResult {
  const result = persistEnabled(false);
  if (!result.ok) return result;
  memoryEnabled = false;
  emit();
  return result;
}

export function writeBookingOverride(flags: BookingFlags): BookingPersistResult {
  return flags.bookingEnabled ? enableOnlineBooking() : disableOnlineBooking();
}

export function clearBookingOverride(): BookingPersistResult {
  return disableOnlineBooking();
}
