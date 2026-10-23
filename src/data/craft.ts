export interface CraftStage {
  step: string;
  name: string;
  kannadaName?: string;
  title: string;
  summary?: string;
  details: string;
  technicalSpec: string;
  image: string;
  attributes: string[];
}

/** Compact name + image only: subprocesses after re-reeling (no long copy). */
export type CraftProcessStill = {
  name: string;
  image: string;
  alt: string;
};

export const YARN_PREP_STILLS: CraftProcessStill[] = [
  {
    name: "Soak",
    image: "/assets/craft/process-soak-modern.jpg",
    alt: "Raw silk soaking in a modern factory vessel",
  },
  {
    name: "On the rods",
    image: "/assets/craft/process-racks-modern.jpg",
    alt: "Rows of raw silk yarn hanging in a modern factory hall",
  },
];

/** Compact name + image only: wind through warp / wift prep. */
export const YARN_LINE_STILLS: CraftProcessStill[] = [
  {
    name: "Wind",
    image: "/assets/craft/process-winding.jpg",
    alt: "Soaked and dried silk wound onto small rolls",
  },
  {
    name: "Double",
    image: "/assets/craft/process-doubling.jpg",
    alt: "Silk yarn doubled on modern bobbin machinery",
  },
  {
    name: "Twist · wift",
    image: "/assets/craft/process-twisting.jpg",
    alt: "Twisted silk wound onto cones for wift",
  },
  {
    name: "Warp",
    image: "/assets/craft/process-warping.jpg",
    alt: "Untwisted warp silk on creels and cylindrical beams",
  },
];

export const CRAFT_STAGES: CraftStage[] = [
  {
    step: "01",
    name: "COCOON",
    kannadaName: "ಗೂಡು",
    title: "Purchase, storage, and despatch to the filature",
    details:
      "Cocoons purchased at Ramanagara are held in store, then taken to the raw silk unit at Tirumakudalu Narasipura (T. Narasipura).",
    technicalSpec:
      "Asia’s largest cocoon market at Ramanagara\nSourced from Ramanagara, Kanakapura, Kollegal, and Sidlaghatta\nPurchase check · colour and size of the cocoon",
    image: "/assets/craft/01-mulberry-cocoons.jpg",
    attributes: ["RAMANAGARA MARKET", "HELD IN STORE", "T. NARASIPURA"],
  },
  {
    step: "02",
    name: "REELING",
    kannadaName: "ಎಳೆ ತೆಗೆಯುವಿಕೆ",
    title: "Filature reeling at T. Narasipura",
    summary: "Cocoons are soaked and boiled, then reeled into raw silk yarn.",
    details:
      "At the raw silk unit, cocoons are soaked and boiled, then reeled into raw silk yarn. Nine cocoons become one silk yarn. After reeling, the yarn is sent to the respective factories, where it is re-reeled for softness. Yarn is also checked here for tensile strength.",
    technicalSpec:
      "Soak and boil · Reel into raw silk\nNine cocoons · one silk yarn\nRe-reel for softness · Tensile-strength check",
    image: "/assets/craft/02-filature-reeling.jpg",
    attributes: ["SOAK · BOIL · REEL", "NINE COCOONS · ONE YARN", "RE-REEL"],
  },
  {
    step: "03",
    name: "SILK YARN",
    kannadaName: "ರೇಷ್ಮೆ ನೂಲು",
    title: "Soak, wind, double, twist, and warp",
    summary: "After soak and dry: wind onto small rolls, double, then twist for wift or leave untwisted for warp.",
    details:
      "Soaked and dried silk is wound onto small rolls, then doubled. Twisted yarn is taken onto a cone for wift, the breadth of the saree. Untwisted yarn goes to warping on large cylindrical rods, carrying silk up to about 900 metres in length for the warp, the length of the saree. Both warp and wift are used on the weaving machines.",
    technicalSpec:
      "Wind · Double · Twist\nTwisted · cone · wift (breadth)\nUntwisted · warp beam · up to ~900 m (length)",
    image: "/assets/craft/03-yarn-twisting.jpg",
    attributes: ["WIND · DOUBLE", "WIFT · TWISTED CONE", "WARP · ~900 M"],
  },
  {
    step: "04",
    name: "WEAVING",
    kannadaName: "ನೇಯ್ಗೆ",
    title: "Dobby, jacquard, and later machinery",
    summary: "Warp and wift meet on the Mysuru looms.",
    details:
      "Sarees are woven on dobby, jacquard, and e-jacquard looms fitted with prepared patterns. After weaving, the cloth is checked for loose ends, discoloration, tears, and similar faults.",
    technicalSpec: "Dobby and jacquard · Electric looms and e-jacquard\nPost-weave check · loose ends, discoloration, tears",
    image: "/assets/craft/05-swiss-jacquard-weaving.jpg",
    attributes: ["DOBBY", "JACQUARD", "CLOTH CHECK"],
  },
  {
    step: "05",
    name: "DEGUMMING",
    kannadaName: "ಡಿಗಮ್ಮಿಂಗ್",
    title: "Washing after weaving",
    summary: "Degumming prepares the woven saree for colour.",
    details:
      "More than 200 sarees are soaked in boiling soap and soda ash, rinsed in warm water, then hydro-extracted.",
    technicalSpec: "Soap chips and soda ash · Warm-water rinse · Hydro extraction",
    image: "/assets/craft/04-precision-dyeing.jpg",
    attributes: ["AFTER WEAVING", "SOAP AND SODA", "HYDRO EXTRACTION"],
  },
  {
    step: "06",
    name: "DYEING",
    kannadaName: "ಬಣ್ಣ",
    title: "Colour after degumming",
    summary: "Colour is taken up after washing.",
    details:
      "Winch machines turn the sarees in hot water linked to a colour tank. A faulty dyeing is bleached, dyed again, and washed. After dyeing, the finished saree receives a full product review.",
    technicalSpec:
      "Winch and colour tank · Bleach and re-dye where a fault is found\nFinal check after dyeing",
    image: "/assets/craft/04-silk-dyeing.jpg",
    attributes: ["WINCH DYEING", "EVEN COLOUR", "FINAL REVIEW"],
  },
  {
    step: "07",
    name: "FINISHED SILK",
    kannadaName: "ಸಿದ್ಧ ರೇಷ್ಮೆ",
    title: "Finishing, code, and dispatch",
    summary: "Steam ironing, cutting, a unique code, then dispatch.",
    details:
      "Sarees are steam-ironed, cut to length, marked with a code and hologram, checked, then packed for the showrooms.",
    technicalSpec: "Clip stentering · Unique identification code · Hologram",
    image: "/assets/craft/07-laser-authentication-pallu.jpg",
    attributes: ["UNIQUE CODE", "HOLOGRAM", "DISPATCHED"],
  },
];
