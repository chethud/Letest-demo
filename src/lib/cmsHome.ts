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

export const UNIQUE_PILLAR_IDS = [
  "wrinkle-resistant",
  "fluid-drape",
  "pure-zari",
  "unique-code",
] as const;

export type UniquePillarId = (typeof UNIQUE_PILLAR_IDS)[number];

export const DEFAULT_UNIQUE_PILLAR_IMAGES: Record<UniquePillarId, string> = {
  "wrinkle-resistant": "/assets/craft/unique-01-wrinkle-resistant.jpg",
  "fluid-drape": "/assets/craft/unique-02-fluid-drape.jpg",
  "pure-zari": "/assets/craft/unique-03-pure-zari.jpg",
  "unique-code": "/assets/craft/unique-04-unique-code.jpg",
};

export const DEFAULT_FACTORY = {
  videoUrl: "/films/mysore-silk-story.mp4?v=2",
  eyebrow: "The Art of Mysore Silk",
  headlineLine1: "More than a saree.",
  headlineLine2: "A living tradition.",
  body: "Mysuru silk has flourished through centuries, symbolising regality, craftsmanship and exclusivity. Each piece carries a history, a heritage and a promise to last for generations.",
} as const;

export const DEFAULT_UNIQUE = {
  eyebrow: "The Essence of Mysore Silk",
  title: "Why Mysuru Silk is Special",
  intro:
    "Mysore Silk is naturally wrinkle-resistant, fluid to the touch, and light enough to drape in comfort — crafted from fine raw silk, with a specialised high-twist weave and certified pure gold zari.",
} as const;

export const DEFAULT_GENERATIONS = {
  image: "/assets/heritage/three-generation-portrait.png",
  eyebrow: "Heritage",
  title: "Silk for generations",
  lead: "You can buy the saree.\nThe years that follow are yours alone.",
} as const;

export type CmsTestimonial = {
  id: string;
  quote: string;
  name: string;
  place: string;
};

export const DEFAULT_TESTIMONIALS: CmsTestimonial[] = [
  {
    id: "1",
    quote: "My mother wore hers for thirty years. Mine already feels like it will do the same.",
    name: "Ananya Rao",
    place: "Bengaluru",
  },
  {
    id: "2",
    quote: "The zari still catches light the way it did on my wedding day. That is enough.",
    name: "Meera Krishnan",
    place: "Mysuru",
  },
  {
    id: "3",
    quote: "We bought one saree for the family. It has now been worn by three of us.",
    name: "Lakshmi Hegde",
    place: "Mangaluru",
  },
  {
    id: "4",
    quote: "Soft, honest silk. No loud claims needed when the cloth speaks for itself.",
    name: "Priya Natarajan",
    place: "Chennai",
  },
  {
    id: "5",
    quote: "I keep returning for gifts. People remember the saree long after the occasion.",
    name: "Sneha Desai",
    place: "Mumbai",
  },
  {
    id: "6",
    quote: "Simple drape, lasting weight. Exactly what I hoped Mysore silk would feel like.",
    name: "Kavitha Reddy",
    place: "Hyderabad",
  },
];

export type CmsUniquePillarCopy = {
  title: string;
  short: string;
};

export type CmsHomeSettings = {
  heroSlide1Image: string;
  heroSlide2Image: string;
  collectionImages: Partial<Record<CollectionTileId, string>>;
  factoryVideoUrl: string;
  factoryEyebrow: string;
  factoryHeadline1: string;
  factoryHeadline2: string;
  factoryBody: string;
  uniqueEyebrow: string;
  uniqueTitle: string;
  uniqueIntro: string;
  uniquePillarImages: Partial<Record<UniquePillarId, string>>;
  uniquePillarCopy: Partial<Record<UniquePillarId, CmsUniquePillarCopy>>;
  generationsImage: string;
  generationsEyebrow: string;
  generationsTitle: string;
  generationsLead: string;
  testimonials: CmsTestimonial[];
};

export const DEFAULT_CMS_HOME: CmsHomeSettings = {
  heroSlide1Image: "",
  heroSlide2Image: "",
  collectionImages: {},
  factoryVideoUrl: "",
  factoryEyebrow: "",
  factoryHeadline1: "",
  factoryHeadline2: "",
  factoryBody: "",
  uniqueEyebrow: "",
  uniqueTitle: "",
  uniqueIntro: "",
  uniquePillarImages: {},
  uniquePillarCopy: {},
  generationsImage: "",
  generationsEyebrow: "",
  generationsTitle: "",
  generationsLead: "",
  testimonials: DEFAULT_TESTIMONIALS.map((item) => ({ ...item })),
};

function pickText(value: string | undefined, fallback: string) {
  const trimmed = (value ?? "").trim();
  return trimmed || fallback;
}

function emptyCmsHome(): CmsHomeSettings {
  return {
    ...DEFAULT_CMS_HOME,
    collectionImages: {},
    uniquePillarImages: {},
    uniquePillarCopy: {},
    testimonials: DEFAULT_TESTIMONIALS.map((item) => ({ ...item })),
  };
}

export function readCmsHome(): CmsHomeSettings {
  if (typeof window === "undefined") return emptyCmsHome();
  try {
    const raw = window.localStorage.getItem(CMS_HOME_KEY);
    if (!raw) return emptyCmsHome();
    const parsed = JSON.parse(raw) as Partial<CmsHomeSettings>;
    const testimonials =
      Array.isArray(parsed.testimonials) && parsed.testimonials.length > 0
        ? parsed.testimonials.map((item, index) => ({
            id: String(item.id || index + 1),
            quote: String(item.quote ?? ""),
            name: String(item.name ?? ""),
            place: String(item.place ?? ""),
          }))
        : DEFAULT_TESTIMONIALS.map((item) => ({ ...item }));

    const uniquePillarCopy: Partial<Record<UniquePillarId, CmsUniquePillarCopy>> = {};
    for (const id of UNIQUE_PILLAR_IDS) {
      const copy = parsed.uniquePillarCopy?.[id];
      if (copy) {
        uniquePillarCopy[id] = {
          title: String(copy.title ?? ""),
          short: String(copy.short ?? ""),
        };
      }
    }

    return {
      ...DEFAULT_CMS_HOME,
      ...parsed,
      collectionImages: { ...(parsed.collectionImages ?? {}) },
      uniquePillarImages: { ...(parsed.uniquePillarImages ?? {}) },
      uniquePillarCopy,
      testimonials,
    };
  } catch {
    return emptyCmsHome();
  }
}

export function writeCmsHome(next: CmsHomeSettings) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CMS_HOME_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(CMS_HOME_CHANGE));
}

export function resetCmsHome() {
  writeCmsHome(emptyCmsHome());
}

export function resolveHeroImages(settings: CmsHomeSettings = readCmsHome()): [string, string] {
  return [
    settings.heroSlide1Image.trim() || DEFAULT_HERO_IMAGES[0],
    settings.heroSlide2Image.trim() || DEFAULT_HERO_IMAGES[1],
  ];
}

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

export function resolveFactoryContent(settings: CmsHomeSettings = readCmsHome()) {
  return {
    videoUrl: pickText(settings.factoryVideoUrl, DEFAULT_FACTORY.videoUrl),
    eyebrow: pickText(settings.factoryEyebrow, DEFAULT_FACTORY.eyebrow),
    headlineLine1: pickText(settings.factoryHeadline1, DEFAULT_FACTORY.headlineLine1),
    headlineLine2: pickText(settings.factoryHeadline2, DEFAULT_FACTORY.headlineLine2),
    body: pickText(settings.factoryBody, DEFAULT_FACTORY.body),
  };
}

export const DEFAULT_UNIQUE_PILLAR_COPY: Record<
  UniquePillarId,
  CmsUniquePillarCopy
> = {
  "wrinkle-resistant": {
    title: "Wrinkle-Resistant",
    short:
      "Naturally easy to care for, with soft creases that ease as you wear and hang it.",
  },
  "fluid-drape": {
    title: "Fluid Drape & Lightness",
    short: "A graceful drape that feels light and comfortable throughout the day.",
  },
  "pure-zari": {
    title: "Pure Gold & Silver Zari",
    short: "Intricate zari craftsmanship brings traditional silk weaving to life.",
  },
  "unique-code": {
    title: "Unique Code",
    short:
      "Every authentic saree carries a unique identification code and hologram for verification.",
  },
};

export function resolveUniqueContent(settings: CmsHomeSettings = readCmsHome()) {
  return {
    eyebrow: pickText(settings.uniqueEyebrow, DEFAULT_UNIQUE.eyebrow),
    title: pickText(settings.uniqueTitle, DEFAULT_UNIQUE.title),
    intro: pickText(settings.uniqueIntro, DEFAULT_UNIQUE.intro),
    pillarImages: UNIQUE_PILLAR_IDS.reduce(
      (acc, id) => {
        acc[id] =
          settings.uniquePillarImages?.[id]?.trim() || DEFAULT_UNIQUE_PILLAR_IMAGES[id];
        return acc;
      },
      {} as Record<UniquePillarId, string>,
    ),
    pillarCopy: UNIQUE_PILLAR_IDS.reduce(
      (acc, id) => {
        const override = settings.uniquePillarCopy?.[id];
        const defaults = DEFAULT_UNIQUE_PILLAR_COPY[id];
        acc[id] = {
          title: pickText(override?.title, defaults.title),
          short: pickText(override?.short, defaults.short),
        };
        return acc;
      },
      {} as Record<UniquePillarId, CmsUniquePillarCopy>,
    ),
  };
}

export function resolveGenerationsContent(settings: CmsHomeSettings = readCmsHome()) {
  return {
    image: pickText(settings.generationsImage, DEFAULT_GENERATIONS.image),
    eyebrow: pickText(settings.generationsEyebrow, DEFAULT_GENERATIONS.eyebrow),
    title: pickText(settings.generationsTitle, DEFAULT_GENERATIONS.title),
    lead: pickText(settings.generationsLead, DEFAULT_GENERATIONS.lead),
  };
}

export function resolveTestimonials(settings: CmsHomeSettings = readCmsHome()): CmsTestimonial[] {
  if (!settings.testimonials?.length) {
    return DEFAULT_TESTIMONIALS.map((item) => ({ ...item }));
  }
  return settings.testimonials.map((item, index) => ({
    id: item.id || String(index + 1),
    quote: item.quote.trim() || DEFAULT_TESTIMONIALS[index % DEFAULT_TESTIMONIALS.length].quote,
    name: item.name.trim() || DEFAULT_TESTIMONIALS[index % DEFAULT_TESTIMONIALS.length].name,
    place: item.place.trim() || DEFAULT_TESTIMONIALS[index % DEFAULT_TESTIMONIALS.length].place,
  }));
}
