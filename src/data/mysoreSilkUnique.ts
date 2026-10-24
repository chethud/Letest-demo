export type UniquePillar = {
  id: string;
  number: string;
  title: string;
  short: string;
  detail: string;
  image: string;
  alt: string;
};

export type UniqueIconPillar = {
  id: string;
  title: string;
  detail: string;
};

/** Shared lead for the Distinctly Mysore Silk homepage band. */
export const MYSORE_SILK_UNIQUE_INTRO =
  "Mysore Silk is naturally wrinkle-resistant, fluid to the touch, and light enough to drape in comfort — crafted from fine raw silk, with a specialised high-twist weave and certified pure gold zari.";

/** Lead for the About Us icon-grid section. */
export const MYSORE_SILK_UNIQUE_ABOUT_INTRO =
  "What makes Mysore Silk special is how it behaves on the body: it resists wrinkles, glides when moisture touches it, and drapes lightly, wrapping close, never weighing you down.";

/** Homepage arched pillars (Distinctly Mysore Silk). */
export const MYSORE_SILK_UNIQUE_PILLARS: UniquePillar[] = [
  {
    id: "wrinkle-resistant",
    number: "01",
    title: "Wrinkle-Resistant",
    short:
      "Naturally easy to care for, with soft creases that ease as you wear and hang it.",
    detail:
      "The high-twist weave gives the yarn a gentle spring, so shallow folds release with body heat and hanging. Day to day, many wearers simply hang the saree and let gentle crinkles fall out.",
    image: "/assets/craft/unique-01-wrinkle-resistant.jpg",
    alt: "Close-up of flowing ivory Mysore Silk with a subtle gold border",
  },
  {
    id: "fluid-drape",
    number: "02",
    title: "Fluid Drape & Lightness",
    short:
      "A fluid, graceful drape that feels light and comfortable throughout the day.",
    detail:
      "Mysore Silk has a buttery, liquid-like hand: moisture tends to bead and glide rather than cling, and the cloth drapes as if wrapped around you, exceptionally light and easy to wear.",
    image: "/assets/craft/unique-02-fluid-drape.jpg",
    alt: "Soft blush-pink Mysore Silk draped with a fluid, light fall",
  },
  {
    id: "pure-zari",
    number: "03",
    title: "Pure Gold & Silver Zari",
    short:
      "Intricate zari craftsmanship creates a lustrous finish that celebrates traditional silk weaving.",
    detail:
      "KSIC zari is specified as 0.65% pure 24K gold with 65% pure silver. The border keeps a mellow lustre over years of use.",
    image: "/assets/craft/unique-03-pure-zari.jpg",
    alt: "Rich burgundy Mysore Silk with an intricate gold zari border",
  },
  {
    id: "unique-code",
    number: "04",
    title: "Unique Code",
    short:
      "Every authentic saree carries a unique identification code and hologram for verification.",
    detail:
      "Each KSIC zari saree is marked with a unique code number and hologram so its authenticity can be verified.",
    image: "/assets/craft/unique-04-unique-code.jpg",
    alt: "Authentic Mysore Silk border with unique identification marking",
  },
];

/** About Us four-column icon grid (What Makes Mysore Silk Unique?). */
export const MYSORE_SILK_UNIQUE_ICON_PILLARS: UniqueIconPillar[] = [
  {
    id: "wrinkle-resistant",
    title: "Wrinkle-Resistant",
    detail:
      "Naturally, you don’t have to keep ironing it. Soft creases ease as you wear and hang it.",
  },
  {
    id: "fluid-drape",
    title: "Fluid, Light & Comfortable",
    detail:
      "Spills tend to glide away; the silk wraps close to the body, light and comfortable all day.",
  },
  {
    id: "gold-zari",
    title: "100% Pure Gold Zari",
    detail: "Will never tarnish and looks fresh even after years of use.",
  },
  {
    id: "code-hologram",
    title: "Unique Code & Hologram",
    detail:
      "Each zari saree is stamped with a unique code number and hologram for authenticity.",
  },
];
