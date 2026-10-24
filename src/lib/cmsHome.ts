export const CMS_HOME_KEY = "ksic-cms-home-v1";
export const CMS_HOME_CHANGE = "ksic-cms-home-change";

export const DEFAULT_HERO_IMAGES = [
  "/assets/heritage/rose-pink-silk-temple.png",
  "/assets/heritage/hero-new-arrivals.png",
] as const;

export type CmsHomeSettings = {
  /** Override for home hero slide 1 (legacy craftsmanship). Empty = default asset. */
  heroSlide1Image: string;
  /** Override for home hero slide 2 (new arrivals). Empty = default asset. */
  heroSlide2Image: string;
};

export const DEFAULT_CMS_HOME: CmsHomeSettings = {
  heroSlide1Image: "",
  heroSlide2Image: "",
};

export function readCmsHome(): CmsHomeSettings {
  if (typeof window === "undefined") return { ...DEFAULT_CMS_HOME };
  try {
    const raw = window.localStorage.getItem(CMS_HOME_KEY);
    if (!raw) return { ...DEFAULT_CMS_HOME };
    return { ...DEFAULT_CMS_HOME, ...(JSON.parse(raw) as Partial<CmsHomeSettings>) };
  } catch {
    return { ...DEFAULT_CMS_HOME };
  }
}

export function writeCmsHome(next: CmsHomeSettings) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CMS_HOME_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(CMS_HOME_CHANGE));
}

export function resetCmsHome() {
  writeCmsHome({ ...DEFAULT_CMS_HOME });
}

/** Resolved image URLs for the two home hero slides. */
export function resolveHeroImages(settings: CmsHomeSettings = readCmsHome()): [string, string] {
  return [
    settings.heroSlide1Image.trim() || DEFAULT_HERO_IMAGES[0],
    settings.heroSlide2Image.trim() || DEFAULT_HERO_IMAGES[1],
  ];
}
