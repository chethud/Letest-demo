export interface CraftStage {
  step: string;
  name: string;
  kannadaName?: string;
  title: string;
  summary: string;
  details: string;
  technicalSpec: string;
  image: string;
  attributes: string[];
}

export const CRAFT_STAGES: CraftStage[] = [
  {
    step: "01",
    name: "COCOON",
    kannadaName: "ಗೂಡು",
    title: "Mulberry Cocoons from Karnataka Sericulture",
    summary: "Cocoons described as coming from Ramanagara, then moving to T. Narasipura.",
    details: "Cocoons are bought at the Ramanagara silk market and taken to the raw silk unit at Tirumakudalu Narasipura.",
    technicalSpec: "Ramanagara market \u00b7 T. Narasipura raw silk unit \u00b7 Market purchase, as stated in the KSIC note",
    image: "/assets/craft/01-mulberry-cocoons.jpg",
    attributes: ["NATURAL MULBERRY", "PREMIUM SERICULTURE", "IVORY SHEEN"],
  },
  {
    step: "02",
    name: "REELING",
    kannadaName: "ಎಳೆ ತೆಗೆಯುವಿಕೆ",
    title: "Filature Reeling at T. Narasipura",
    summary: "Cocoons are soaked and boiled, then reeled into raw silk yarn.",
    details: "Cocoons are soaked and boiled, then reeled into raw silk yarn on imported reeling machinery.",
    technicalSpec: "Soak and boil \u00b7 Reel into raw silk \u00b7 Imported reeling machinery, as recorded in the note",
    image: "/assets/craft/02-filature-reeling.jpg",
    attributes: ["SOFT WATER REELING", "NATURAL SERICIN", "CONTINUOUS FILAMENT"],
  },
  {
    step: "03",
    name: "SILK YARN",
    kannadaName: "ರೇಷ್ಮೆ ನೂಲು",
    title: "High-Speed Twisting & Winding",
    summary: "Twisted for the crepe texture, then sent to Mysore.",
    details: "Yarn is twisted 2,200 times per metre for the crepe texture, with 26/28-denier warp and two-ply weft, then sent to Mysore.",
    technicalSpec: "2,200 twists per metre \u00b7 26/28-denier untwisted warp \u00b7 Two-ply twisted weft",
    image: "/assets/craft/03-yarn-twisting.jpg",
    attributes: ["HIGH TWIST YARN", "PURE CREPE FINISH", "NATURAL ELASTICITY"],
  },
  {
    step: "04",
    name: "WEAVING",
    kannadaName: "ನೇಯ್ಗೆ",
    title: "Dobby, jacquard, and later machinery",
    summary: "Patterned silk at the Mysore weaving factory. Not described as one process for every saree.",
    details: "Sarees are woven on dobby, jacquard, and e-jacquard looms fitted with prepared patterns.",
    technicalSpec: "Dobby and jacquard \u00b7 Electric looms and e-jacquard",
    image: "/assets/craft/05-swiss-jacquard-weaving.jpg",
    attributes: ["DOBBY", "JACQUARD", "E-JACQUARD NOTED"],
  },
  {
    step: "05",
    name: "DEGUMMING",
    kannadaName: "ಡಿಗಮ್ಮಿಂಗ್",
    title: "Washing after weaving",
    summary: "Degumming is described for woven sarees, not as a step that every dyeing fault repeats.",
    details: "More than 200 sarees are soaked in boiling soap and soda ash, rinsed in warm water, then hydro-extracted.",
    technicalSpec: "Soap chips and soda ash \u00b7 Warm-water rinse \u00b7 Hydro extraction",
    image: "/assets/craft/04-precision-dyeing.jpg",
    attributes: ["AFTER WEAVING", "SOAP AND SODA", "HYDRO EXTRACTION"],
  },
  {
    step: "06",
    name: "DYEING",
    kannadaName: "ಬಣ್ಣ",
    title: "Colour after degumming",
    summary: "Even dyeing is described. Bleaching is described only where a dyeing fault occurs.",
    details: "Winch machines turn the sarees in hot water linked to a colour tank. A faulty dyeing is bleached, dyed again, and washed.",
    technicalSpec: "Winch and colour tank \u00b7 Bleach and re-dye only where a fault is described",
    image: "/assets/craft/04-silk-dyeing.jpg",
    attributes: ["WINCH DYEING", "EVEN COLOUR", "RE-DYE IF NEEDED"],
  },
  {
    step: "07",
    name: "FINISHED SILK",
    kannadaName: "ಸಿದ್ಧ ರೇಷ್ಮೆ",
    title: "Finishing, code, and dispatch",
    summary: "Steam ironing, cutting, a unique code, checks, then dispatch.",
    details: "Sarees are steam-ironed, cut to length, marked with a code and hologram, checked, then packed for the showrooms.",
    technicalSpec: "Clip stentering \u00b7 Unique identification code \u00b7 Hologram, as described",
    image: "/assets/craft/07-laser-authentication-pallu.jpg",
    attributes: ["UNIQUE CODE", "HOLOGRAM", "DISPATCHED"],
  },
];
