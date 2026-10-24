export const CMS_HOME_KEY = "ksic-cms-home-v1";
export const CMS_HOME_CHANGE = "ksic-cms-home-change";

export const DEFAULT_HERO_IMAGES = [
  "/assets/heritage/rose-pink-silk-temple.png",
  "/assets/heritage/hero-new-arrivals.png",
] as const;

export const COLLECTION_TILE_IDS = [
  "sarees",
  "festive",
  "wedding",
  "menswear",
  "gifts",
] as const;

export type CollectionTileId = (typeof COLLECTION_TILE_IDS)[number];

export const DEFAULT_COLLECTION_IMAGES: Record<CollectionTileId, string> = {
  sarees: "/assets/collection/editorial-sarees.jpg",
  festive: "/assets/collection/editorial-festive.jpg",
  wedding: "/assets/collection/editorial-wedding.jpg",
  menswear: "/assets/collection/editorial-menswear.jpg",
  gifts: "/assets/collection/editorial-gifts.jpg",
};

export type CmsHomeSettings = {
  /** Override for home hero slide 1 (legacy craftsmanship). Empty = default asset. */
  heroSlide1Image: string;
  /** Override for home hero slide 2 (new arrivals). Empty = default asset. */
  heroSlide2Image: string;
  /** Overrides for Master Collection mosaic tiles. Empty = default asset. */
  collectionImages: Partial<Record<CollectionTileId, string>>;
};

export const DEFAULT_CMS_HOME: CmsHomeSettings = {
  heroSlide1Image: "",
  heroSlide2Image: "",
  collectionImages: {},
};

export function readCmsHome(): CmsHomeSettings {
  if (typeof window === "undefined") return { ...DEFAULT_CMS_HOME, collectionImages: {} };
  try {
    const raw = window.localStorage.getItem(CMS_HOME_KEY);
    if (!raw) return { ...DEFAULT_CMS_HOME, collectionImages: {} };
    const parsed = JSON.parse(raw) as Partial<CmsHomeSettings>;
    return {
      ...DEFAULT_CMS_HOME,
      ...parsed,
      collectionImages: { ...(parsed.collectionImages ?? {}) },
    };
  } catch {
    return { ...DEFAULT_CMS_HOME, collectionImages: {} };
  }
}

export function writeCmsHome(next: CmsHomeSettings) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CMS_HOME_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(CMS_HOME_CHANGE));
}

export function resetCmsHome() {
  writeCmsHome({ ...DEFAULT_CMS_HOME, collectionImages: {} });
}

/** Resolved image URLs for the two home hero slides. */
export function resolveHeroImages(settings: CmsHomeSettings = readCmsHome()): [string, string] {
  return [
    settings.heroSlide1Image.trim() || DEFAULT_HERO_IMAGES[0],
    settings.heroSlide2Image.trim() || DEFAULT_HERO_IMAGES[1],
  ];
}

/** Resolved image for one Master Collection tile. */
export function resolveCollectionImage(
  id: CollectionTileId,
  settings: CmsHomeSettings = readCmsHome(),
): string {
  const override = settings.collectionImages?.[id]?.trim() ?? "";
  return override || DEFAULT_COLLECTION_IMAGES[id];
}

export function resolveCollectionImages(
  settings: CmsHomeSettings = readCmsHome(),
): Record<CollectionTileId, string> {
  return {
    sarees: resolveCollectionImage("sarees", settings),
    festive: resolveCollectionImage("festive", settings),
    wedding: resolveCollectionImage("wedding", settings),
    menswear: resolveCollectionImage("menswear", settings),
    gifts: resolveCollectionImage("gifts", settings),
  };
}
