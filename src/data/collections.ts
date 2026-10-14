export interface KSICProduct {
  id: string;
  slug: string;
  articleNumber: string;
  name: string;
  kannadaName?: string;
  category: string;
  collection: string;
  tagline: string;
  description: string;
  material: string;
  zari: string;
  dimensions: string;
  weightGrams?: number;
  weaveType: string;
  borderMotif: string;
  primaryColor: string;
  authenticity: {
    giTag: string;
    serialCodePattern: string;
    hologramType: string;
    silkPurityMark: string;
  };
  availability: string;
  showroomAvailability: string[];
  status: "archived" | "in_production" | "heritage_reserve";
  images: {
    hero: string;
    detail?: string;
    pallu?: string;
    texture?: string;
  };
  featured: boolean;
}

export interface CollectionCategory {
  id: string;
  slug: string;
  name: string;
  kannadaName: string;
  headline: string;
  description: string;
  image: string;
  articleCountNote: string;
}

export const COLLECTION_CATEGORIES: CollectionCategory[] = [
  {
    id: "mysore-silk-sarees",
    slug: "mysore-silk-sarees",
    name: "Mysore Silk Sarees",
    kannadaName: "ಮೈಸೂರು ಸಿಲ್ಕ್ ಸೀರೆಗಳು",
    headline: "The Hallmark of Royal Karnataka Drape",
    description: "Crepe and georgette in pure mulberry silk. Zari is specified as 65% pure silver and 0.65% gold, not as a 24-carat electroplate guarantee.",
    image: "/assets/collection/ksic-mysore-silk-sarees.jpg",
    articleCountNote: "Over 80 distinct registered article numbers",
  },
  {
    id: "zari-crepe-sarees",
    slug: "zari-crepe-sarees",
    name: "Zari Crepe Sarees",
    kannadaName: "ಜರಿ ಕ್ರೇಪ್ ಸೀರೆಗಳು",
    headline: "Fine Grain Pebble Crepe with Pure Gold Zari",
    description: "The warp uses 26/28-denier untwisted yarn, the weft uses two-ply twisted yarn, and the crepe texture is 2,200 twists per metre.",
    image: "/assets/collection/ksic-classic-zari-crepe-red.jpg",
    articleCountNote: "Solid single-tone and contrast unicolour varieties",
  },
  {
    id: "temple-border-series",
    slug: "temple-border-series",
    name: "Temple Border & Butta",
    kannadaName: "ದೇವಾಲಯ ಬಾರ್ಡರ್ & ಬುಟ್ಟಾ",
    headline: "Sacred Architectural Motifs in Pure Zari",
    description: "Intricately woven geometric temple spires (gopuram) and mango buttas, honoring traditional South Indian royal motifs.",
    image: "/assets/collection/ksic-temple-border-cream.jpg",
    articleCountNote: "Classic heritage design series",
  },
  {
    id: "heritage-bridal-series",
    slug: "heritage-bridal-series",
    name: "Royal Heritage & Bridal",
    kannadaName: "ರಾಜಮನೆತನದ ಹೆರಿಟೇಜ್ & ಬ್ರೈಡಲ್ ಸೀರೆಗಳು",
    headline: "Regal Archival Weaves with Architectural Gopuram & Shrine Borders",
    description: "Masterwork Mysore silk crepe sarees rendered in emerald, ivory, and auspicious rose, woven with heavy temple shrines and gold zari borders.",
    image: "/assets/collection/ksic-bridal-heritage.jpg",
    articleCountNote: "Registered heritage bridal archive articles",
  },
];

export const KSIC_PRODUCTS: KSICProduct[] = [
  {
    id: "art-550-6-gandaberunda",
    slug: "article-550-6-gandaberunda",
    articleNumber: "Article 550/6 (Gandaberunda)",
    name: "Gandaberunda Royal Crepe Saree",
    kannadaName: "ಗಂಡಭೇರುಂಡ ರಾಯಲ್ ಕ್ರೇಪ್ ಸೀರೆ",
    category: "Mysore Silk Sarees",
    collection: "State Heritage Reserve",
    tagline: "The two-headed Gandaberunda of Mysore, woven with genuine gold and silver zari.",
    description: "An archival tribute to the Gandaberunda emblem of Karnataka, with dense pallu detailing. Weaving is described on dobby and jacquard looms; one loom type is not assigned to every design.",
    material: "Pure mulberry silk. Warp 26/28-denier untwisted; weft two-ply twisted; crepe at 2,200 twists per metre.",
    zari: "Certified Pure Zari: 65% pure silver and 0.65% gold",
    dimensions: "5.5 meters length + 0.8 meter matching blouse piece · 45 inches width",
    weightGrams: 580,
    weaveType: "High-density Pebble Crepe de Chine",
    borderMotif: "Twin Gandaberunda crest and geometric temple frieze",
    primaryColor: "Deep Royal Vermilion with Golden Luster",
    authenticity: {
      giTag: "GI-11 (Registered Proprietor: KSIC Ltd)",
      serialCodePattern: "Embroidered unique alphanumeric code on pallu reverse",
      hologramType: "Tamper-evident KSIC Optical Hologram",
      silkPurityMark: "100% Pure Silk Guaranteed by Government of Karnataka",
    },
    availability: "Informational Catalogue · Available via showroom enquiry",
    showroomAvailability: ["Mananthody Road Mysore Factory", "Jubilee Showroom M.G. Road Bengaluru", "Visveshwaraiah Bhavan Mysore", "Kalalokha T2 BLR Airport"],
    status: "heritage_reserve",
    images: {
      hero: "/assets/collection/ksic-gandaberunda-royal.jpg",
      detail: "/assets/collection/gandaberunda-detail.jpg",
      pallu: "/assets/collection/gandaberunda-pallu.jpg",
      texture: "/assets/collection/gandaberunda-texture.jpg",
    },
    featured: true,
  },
  {
    id: "art-550-4g-classic-red",
    slug: "article-550-4g-classic-red",
    articleNumber: "Article 550/4G 1018",
    name: "Classic Zari Crepe Saree in Deep Crimson",
    kannadaName: "ಕ್ಲಾಸಿಕ್ ಜರಿ ಕ್ರೇಪ್ ಕೆಂಪು ಸೀರೆ",
    category: "Zari Crepe Sarees",
    collection: "Permanent Master Collection",
    tagline: "The definitive Mysore Silk silhouette recognized worldwide for over a century.",
    description: "The signature flagship product of Karnataka Silk Industries Corporation. Renowned for its subtle grainy drape that clings gently without stiffness, illuminated by a solid gold zari border and rhythmic pallu stripes.",
    material: "100% Pure Natural Silk Yarn",
    zari: "Authentic Gold Zari (65% pure silver, 0.65% gold)",
    dimensions: "6.3 meters total length (inclusive of unstitched blouse piece)",
    weightGrams: 520,
    weaveType: "Crepe de Chine warp & weft",
    borderMotif: "Solid Zari Ribbon with micro-crenellation",
    primaryColor: "Crimson Red (Kumkum)",
    authenticity: {
      giTag: "GI-11",
      serialCodePattern: "Pallu-embroidered registration ID with production year",
      hologramType: "State Enterprise Security Hologram",
      silkPurityMark: "Pure Silk Certificate included with presentation box",
    },
    availability: "Permanent Production Line",
    showroomAvailability: ["All Official KSIC Karnataka Showrooms"],
    status: "in_production",
    images: {
      hero: "/assets/collection/ksic-classic-zari-crepe-red.jpg",
      detail: "/assets/heritage/ksic-heritage-pallu.jpg",
      texture: "/assets/collection/ksic-occasion-drape.jpg",
    },
    featured: true,
  },
  {
    id: "art-temple-border-cream",
    slug: "article-temple-border-cream",
    articleNumber: "Article 560/2 UNI",
    name: "Temple Border Mysore Silk in Ivory & Muted Gold",
    kannadaName: "ದೇವಾಲಯ ಬಾರ್ಡರ್ ಐವರಿ ರೇಷ್ಮೆ ಸೀರೆ",
    category: "Temple Border & Butta",
    collection: "Ceremonial Heritage",
    tagline: "Unbleached natural silk sheen paired with geometric temple motifs.",
    description: "An understated, deeply dignified weave celebrating the natural color of degummed Karnataka mulberry silk. The border features the iconic triangular 'Thazhamboo' temple motif rendered in unadulterated gold thread.",
    material: "100% Pure Mulberry Silk",
    zari: "65% pure silver and 0.65% gold, as specified",
    dimensions: "6.3 meters with blouse piece",
    weightGrams: 510,
    weaveType: "Smooth Grain Crepe",
    borderMotif: "Stepped Gopuram Temple Triangles",
    primaryColor: "Natural Ivory / Sandalwood Cream",
    authenticity: {
      giTag: "GI-11",
      serialCodePattern: "Unique identification number and hologram, as described. This site does not check them.",
      hologramType: "Govt. of Karnataka Enterprise Seal",
      silkPurityMark: "100% Pure Silk Mark",
    },
    availability: "Available across major KSIC retail centers",
    showroomAvailability: ["Bengaluru Jubilee", "Mysuru Factory", "Jayanagar Bengaluru", "Ameerpet Hyderabad"],
    status: "in_production",
    images: {
      hero: "/assets/collection/ksic-temple-border-cream.jpg",
      detail: "/assets/collection/ksic-bridal-heritage.jpg",
    },
    featured: true,
  },
  {
    id: "art-butta-emerald-green",
    slug: "article-butta-emerald-green",
    articleNumber: "Article 550/6 K2 UNI",
    name: "Peacock & Floral Butta Saree in Royal Green",
    kannadaName: "ರಾಯಲ್ ಹಸಿರು ಬುಟ್ಟಾ ರೇಷ್ಮೆ ಸೀರೆ",
    category: "Mysore Silk Sarees",
    collection: "Royal Motif Series",
    tagline: "Dispersed gold coin buttas across an expanse of deep forest crepe.",
    description: "The emerald body is sprinkled with delicate miniature gold motifs, woven individually with supplementary weft attachments. Finished with a grand contrast zari pallu showcasing floral creeper borders.",
    material: "100% Pure Silk",
    zari: "65% Silver, 0.65% Gold Zari",
    dimensions: "6.3 meters with blouse piece",
    weightGrams: 540,
    weaveType: "High-twist crepe",
    borderMotif: "Floral Creeper (Kodi) with solid zari edge",
    primaryColor: "Emerald Forest Green",
    authenticity: {
      giTag: "GI-11",
      serialCodePattern: "Discrete serial verification number",
      hologramType: "KSIC Security Foil",
      silkPurityMark: "Pure Mulberry Silk",
    },
    availability: "Showroom Allocation",
    showroomAvailability: ["All Karnataka Showrooms"],
    status: "in_production",
    images: {
      hero: "/assets/collection/ksic-butta-collection-green.jpg",
    },
    featured: true,
  },
  {
    id: "art-checks-stripes-purple",
    slug: "article-checks-stripes-purple",
    articleNumber: "Article 550/8K8 UNI",
    name: "Geometric Checks & Zari Ribbons in Jamun Purple",
    kannadaName: "ನೇರಳೆ ಚೆಕ್ಸ್ ಮತ್ತು ಜರಿ ರೇಷ್ಮೆ ಸೀರೆ",
    category: "Zari Crepe Sarees",
    collection: "Contemporary Heritage",
    tagline: "Fine micro-checks woven into the body for structural dimensionality.",
    description: "A masterclass in loom tension. The checks are created directly on the power loom by alternating fine color warp threads with subtle zari weft bands, creating a subtle iridescent interplay under light.",
    material: "100% Pure Silk",
    zari: "Pure Gold & Silver Zari",
    dimensions: "6.3 meters with blouse piece",
    weightGrams: 530,
    weaveType: "Structured Checks Crepe",
    borderMotif: "Parallel Zari Bands",
    primaryColor: "Deep Jamun Purple",
    authenticity: {
      giTag: "GI-11",
      serialCodePattern: "Embroidered pallu code",
      hologramType: "KSIC Seal",
      silkPurityMark: "Official Certification",
    },
    availability: "Available via showroom enquiry",
    showroomAvailability: ["Bengaluru", "Mysuru", "Davanagere"],
    status: "in_production",
    images: {
      hero: "/assets/collection/ksic-checks-stripes-purple.jpg",
      detail: "/assets/collection/ksic-mysore-silk-sarees.jpg",
    },
    featured: false,
  },
  {
    id: "art-pure-georgette-zari",
    slug: "article-2550-2g-georgette",
    articleNumber: "Article 2550/2G 1018",
    name: "Mysore Pure Georgette Zari Saree in Peacock Blue",
    kannadaName: "ಮೈಸೂರು ಪ್ಯೂರ್ ಜಾರ್ಜೆಟ್ ಮಯೂರ ನೀಲಿ ಸೀರೆ",
    category: "Mysore Silk Sarees",
    collection: "Fine Drape Archive",
    tagline: "Lightweight, sheer-textured pure silk georgette in royal peacock blue with rich gold zari.",
    description: "Crafted using highly twisted silk yarns in both warp and weft, Mysore Georgette offers a fluid silhouette in royal peacock blue while retaining the unadulterated weight of pure silver-and-gold zari borders.",
    material: "100% Pure Mulberry Silk Georgette",
    zari: "Genuine gold and silver zari, as described by Madhurya",
    dimensions: "6.3 meters",
    weightGrams: 470,
    weaveType: "Bouncy Georgette Weave",
    borderMotif: "Classic narrow gold ribbon border",
    primaryColor: "Peacock Blue (Mayura Neeli)",
    authenticity: {
      giTag: "GI-11",
      serialCodePattern: "Embroidered serial code",
      hologramType: "KSIC Hologram",
      silkPurityMark: "Govt of Karnataka Authenticated",
    },
    availability: "Select Showrooms",
    showroomAvailability: ["Bengaluru Jubilee", "Mysuru Factory", "Zoo Complex Mysore"],
    status: "in_production",
    images: {
      hero: "/assets/collection/ksic-pure-georgette.jpg",
      detail: "/assets/collection/ksic-kasuti-embroidery.jpg",
    },
    featured: false,
  },
  {
    id: "art-royal-bridal-emerald",
    slug: "article-royal-bridal-emerald",
    articleNumber: "Article 550/BRIDAL 108",
    name: "Royal Emerald Temple Shrine Saree",
    kannadaName: "ರಾಜಮನೆತನದ ಹಸಿರು ದೇವಾಲಯ ಗೋಪುರ ಸೀರೆ",
    category: "Royal Heritage & Bridal",
    collection: "State Royal Heritage Reserve",
    tagline: "Temple-shrine borders in gold zari on emerald crepe. The cloth is also described as predominantly machine-woven; Madhurya uses the language of hand-weaving.",
    description: "An extraordinary archival masterpiece featuring repeated temple shrines (Gopuram) with sacred sanctum columns woven along the border in certified pure gold zari. Woven on calibrated Jacquard looms using unadulterated high-twist mulberry silk.",
    material: "100% Pure Natural Mulberry Silk",
    zari: "65% pure silver and 0.65% gold, as specified",
    dimensions: "6.3 meters with unstitched blouse piece",
    weightGrams: 590,
    weaveType: "Heavy Crepe de Chine with Jacquard Temple Border",
    borderMotif: "Architectural Temple Gopuram and Sanctum Arch",
    primaryColor: "Deep Forest Emerald Green",
    authenticity: {
      giTag: "GI-11",
      serialCodePattern: "Embroidered unique alphanumeric code on pallu reverse",
      hologramType: "KSIC Master Heritage Hologram",
      silkPurityMark: "100% Pure Silk Guaranteed by Government of Karnataka",
    },
    availability: "Informational Catalogue · Available via showroom enquiry",
    showroomAvailability: ["Mananthody Road Mysore Factory", "Jubilee Showroom M.G. Road Bengaluru", "Visveshwaraiah Bhavan Mysore"],
    status: "heritage_reserve",
    images: {
      hero: "/assets/collection/ksic-bridal-heritage.jpg",
      detail: "/assets/collection/ksic-temple-border-cream.jpg",
    },
    featured: true,
  },
  {
    id: "art-brocade-festive-ivory",
    slug: "article-brocade-festive-ivory",
    articleNumber: "Article 550/BROCADE 401",
    name: "Imperial Ivory Gold Filigree Brocade Saree",
    kannadaName: "ಐವರಿ ಗೋಲ್ಡ್ ಫಿಲಿಗ್ರೀ ಬ್ರೊಕೇಡ್ ಸೀರೆ",
    category: "Mysore Silk Sarees",
    collection: "State Heritage Reserve",
    tagline: "Pure natural silk brocade adorned with all-over intricate gold zari arabesque filigree.",
    description: "Woven on specialized royal Jacquard looms, featuring an all-over intricate pure gold zari arabesque weave across unbleached ivory silk, creating a luminous jewel-like drape.",
    material: "100% Pure Natural Mulberry Silk",
    zari: "Gold and silver zari, as described in the supplied sources",
    dimensions: "6.3 meters with matching brocade blouse piece",
    weightGrams: 640,
    weaveType: "Royal Jacquard Silk Brocade",
    borderMotif: "All-over Gold Filigree & Rhythmic Scallop Edging",
    primaryColor: "Imperial Ivory / Chandana",
    authenticity: {
      giTag: "GI-11",
      serialCodePattern: "Unique identification number and hologram, as described. This site does not check them.",
      hologramType: "State Enterprise Security Hologram",
      silkPurityMark: "100% Pure Silk Mark",
    },
    availability: "Select Showrooms",
    showroomAvailability: ["Bengaluru Jubilee", "Mysuru Factory Showroom", "Zoo Complex Mysore"],
    status: "heritage_reserve",
    images: {
      hero: "/assets/collection/ksic-festive-folded.jpg",
      detail: "/assets/collection/ksic-gandaberunda-royal.jpg",
    },
    featured: true,
  },
];
