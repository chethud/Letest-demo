export interface CraftStage {
  step: string;
  name: string;
  kannadaName?: string;
  title: string;
  summary: string;
  details: string;
  technicalSpec: string;
  image: string;
}

export const CRAFT_STAGES: CraftStage[] = [
  {
    step: "01",
    name: "COCOON",
    kannadaName: "ಗೂಡು",
    title: "Mulberry Cocoons from Karnataka Sericulture",
    summary: "Reared exclusively by certified sericulture farmers across the old Mysore tract.",
    details: "Karnataka produces the world's finest multivoltine-bivoltine hybrid mulberry silkworm cocoons. Sourced from sericulture clusters in Ramanagara, Kolar, and Mandya, these cocoons yield filaments of exceptional tensile purity and natural ivory sheen.",
    technicalSpec: "Bivoltine & Multivoltine hybrids · 100% natural Bombyx mori filament",
    image: "/assets/craft/01-silkworm-cocoons.jpg",
  },
  {
    step: "02",
    name: "REELING",
    kannadaName: "ಎಳೆ ತೆಗೆಯುವಿಕೆ",
    title: "Filature Reeling at T. Narasipura",
    summary: "Gentle boiling and filament extraction on the banks of the Cauvery river.",
    details: "At KSIC's historical filature unit at T. Narasipura, cocoons are immersed in temperature-regulated water to soften the natural sericin protein. Multiple continuous filaments are gathered and reeled into single composite raw silk strands without synthetic lubricants.",
    technicalSpec: "Multi-end filature basin · Cauvery basin soft water treatment",
    image: "/assets/craft/02-silk-reeling.jpg",
  },
  {
    step: "03",
    name: "SILK YARN",
    kannadaName: "ರೇಷ್ಮೆ ನೂಲು",
    title: "High-Speed Twisting & Winding",
    summary: "26 to 28 Denier yarn with specialized high-speed S & Z twists.",
    details: "Mysore Silk derives its characteristic drape, weight, and pebble-crepe finish from a specialized high-speed twist. Raw silk filaments are wound onto bobbins and twisted up to 2,000 to 2,400 turns per meter before weaving, creating the natural elasticity of pure crepe.",
    technicalSpec: "26–28 Denier warp & weft · 2,000–2,400 TPM twist density",
    image: "/assets/craft/03-silk-yarn.jpg",
  },
  {
    step: "04",
    name: "DYEING",
    kannadaName: "ಬಣ್ಣ ಹಾಕುವಿಕೆ",
    title: "Eco-Friendly Precision Color Formulation",
    summary: "Permanent penetration of heritage hues in pressurized open jiggers.",
    details: "Yarn bundles are degummed to remove residual sericin, revealing silk's luminous crystalline core. Colorists formulate timeless royal pigments—from Deep Vermilion and Rani Pink to Peacock Blue and Mysore Sandal—using certified metal-free dyes that withstand generations of gentle care.",
    technicalSpec: "Pure degummed core · Boiling temperature dye vat immersion · Zero bleeding",
    image: "/assets/craft/04-silk-dyeing.jpg",
  },
  {
    step: "05",
    name: "WEAVING",
    kannadaName: "ನೇಯ್ಗೆ",
    title: "Swiss Loom Jacquard Precision",
    summary: "138 specialized looms operating continuously since the royal era.",
    details: "At the Mysore Silk Weaving Factory on Mananthody Road, warp yarns are dressed across century-old Swiss-built power looms. The synchronized shuttle throws weft threads under controlled humidity, creating the tight, durable, and supple weave unique to KSIC.",
    technicalSpec: "138 Swiss-engineered looms · Dobby and Jacquard shedding mechanisms",
    image: "/assets/craft/05-loom-weaving.jpg",
  },
  {
    step: "06",
    name: "ZARI",
    kannadaName: "ಬಂಗಾರದ ಜರಿ",
    title: "Pure Gold & Silver Zari",
    summary: "65% pure silver with 0.65% pure 24-carat electroplated gold.",
    details: "Unlike market sarees that use synthetic metallic plastic (tested as copper or polyester), genuine KSIC zari contains a silk core wrapped in a flattened ribbon of 65% pure silver, electroplated with 0.65% authentic 24-carat gold. It never oxidizes to black and maintains its quiet royal glimmer across decades.",
    technicalSpec: "65% Fine Silver · 0.65% 24K Gold electroplate · Pure silk core filament",
    image: "/assets/craft/06-gold-zari.jpg",
  },
  {
    step: "07",
    name: "FINISHED SILK",
    kannadaName: "ಸಿದ್ಧ ರೇಷ್ಮೆ",
    title: "Laser Authentication & Unique Pallu Code",
    summary: "Every authentic saree receives an embroidered code and GI-11 hologram.",
    details: "Each completed length undergoes stringent physical inspection for weight, thread count, and zari purity. Upon clearing examination, a discrete unique serial identification number is embroidered directly into the pallu seam alongside the KSIC optical hologram and GI-11 certification mark.",
    technicalSpec: "GI-11 Certified · Unique embroidered serial code · 100% Mulberry Guarantee",
    image: "/assets/craft/07-finished-mysore-silk.jpg",
  },
];
