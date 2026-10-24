export interface HeritageMilestone {
  year: string;
  epoch: string;
  title: string;
  kannadaTitle?: string;
  description: string;
  kannadaDescription?: string;
  significance: string;
  kannadaSignificance?: string;
  image?: string;
  statNumber?: string;
  statLabel?: string;
  statLabelKn?: string;
  provenance?: string;
  provenanceKn?: string;
}

export const HERITAGE_MILESTONES: HeritageMilestone[] = [
  {
    year: "18th c.",
    epoch: "EARLY SERICULTURE",
    title: "Silk rearing at Channapatna",
    description: "Mysore’s silk history can be traced to the eighteenth century, when Tippu Sultan established a silk-rearing unit in Channapatna and introduced multivoltine silkworm rearing.",
    significance: "After his death in 1799 the industry faced a long period of decline.",
    image: "/assets/heritage/heritage-18th-channapatna.jpg",
  },
  {
    year: "1866",
    epoch: "FILATURE",
    title: "A silk filature at Kengeri",
    description: "In 1866 the Italian entrepreneur Signor de Vecchi established a silk filature unit in Kengeri.",
    significance: "An early industrial step in the region’s silk production, long before KSIC.",
    image: "/assets/heritage/heritage-1866-kengeri.jpg",
  },
  {
    year: "1896",
    epoch: "TRAINING",
    title: "Tata Silk Farm, Basavanagudi",
    description: "The Tata Silk Farm was established in Basavanagudi to provide training in sericulture and mulberry cultivation.",
    significance: "Together with the Kengeri filature, it strengthened silk production and technical skill in the region.",
    image: "/assets/heritage/heritage-1896-basavanagudi.jpg",
  },
  {
    year: "1912",
    epoch: "ROYAL PATRONAGE",
    title: "Palace looms become a factory",
    kannadaTitle: "ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆಯ ಸ್ಥಾಪನೆ",
    description:
      "After seeing Swiss silk in Europe, Maharaja Nalvadi Krishnaraja Wadiyar IV began a weaving unit inside the Mysore Palace and gathered artisans there. That royal initiative grew into the Mysore Silk Weaving Factory of 1912, making cloth for the royal household and the state armed forces.",
    kannadaDescription: "ಮೈಸೂರು ಪ್ರಾಂತ್ಯದ ಮಹಾರಾಜರಾದ ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರಿಂದ ರಾಜಮನೆತನದ ಧಾರ್ಮಿಕ ವಸ್ತ್ರಗಳು ಮತ್ತು ರಾಜ್ಯ ಸಶಸ್ತ್ರ ಪಡೆಗಳ ರೇಷ್ಮೆ ಸಮವಸ್ತ್ರಗಳಿಗಾಗಿ ಸ್ಥಾಪನೆಗೊಂಡಿತು.",
    significance:
      "The factory became the industrial heart of Mysore Silk. Mysuru, Ramanagara, and Bengaluru later emerged as major silk centres supplying yarn across the country.",
    kannadaSignificance: "ಅರಮನೆಯಲ್ಲಿನ ನೇಯ್ಗೆ ಘಟಕವು 1912ರ ಕಾರ್ಖಾನೆಯಾಗಿ ಬೆಳೆದು ರಾಜಮನೆತನ ಮತ್ತು ಸಶಸ್ತ್ರ ಪಡೆಗಳಿಗೆ ರೇಷ್ಮೆ ಒದಗಿಸಿತು.",
    image: "/assets/heritage/ksic-1912-foundation.jpg",
    statNumber: "1912",
    statLabel: "Factory established under royal patronage",
    statLabelKn: "ಸ್ವಿಟ್ಜರ್ಲೆಂಡ್‌ನಿಂದ ಆಮದು",
    provenance: "Mananthody Road Royal Weaving Estate, Mysuru",
    provenanceKn: "ಮಾನಂದವಾಡಿ ರಸ್ತೆ ರಾಜ ನೇಯ್ಗೆ ಕೇಂದ್ರ, ಮೈಸೂರು",
  },
  {
    year: "1930-32",
    epoch: "FACTORY EXPANSION",
    title: "Expansion, then commercial production",
    kannadaTitle: "ವಿದ್ಯುತ್ ನೇಯ್ಗೆ ವಿಸ್ತರಣೆ ಮತ್ತು ಸ್ವಿಸ್ ಜಾಕ್ವಾರ್ಡ್",
    description:
      "Factory operations expanded from 1930, and commercial production followed after 1932. Swiss looms and preparatory machines made the Mysuru works a modern weaving centre.",
    kannadaDescription: "1930 ರಿಂದ ಕಾರ್ಖಾನೆ ವಿಸ್ತರಣೆ ಮತ್ತು 1932 ರ ನಂತರ ವಾಣಿಜ್ಯ ಉತ್ಪಾದನೆ ಆರಂಭವಾಯಿತು.",
    significance: "The expansion fixed Mysore Silk as an industrial product as well as a court textile.",
    kannadaSignificance: "ವಿಸ್ತರಣೆಯು ಮೈಸೂರು ರೇಷ್ಮೆಯನ್ನು ಕೈಗಾರಿಕಾ ಉತ್ಪನ್ನವಾಗಿ ಸ್ಥಿರಪಡಿಸಿತು.",
    image: "/assets/heritage/ksic-1932-jacquard.jpg",
    statNumber: "After 1932",
    statLabel: "Commercial production begins",
    statLabelKn: "ವಾಣಿಜ್ಯ ಉತ್ಪಾದನೆ",
    provenance: "Mysuru weaving works",
    provenanceKn: "ಮೈಸೂರು ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆ",
  },
  {
    year: "1980",
    epoch: "SOVEREIGN STEWARDSHIP",
    title: "Karnataka Silk Industries Corporation Incorporated",
    kannadaTitle: "ಕರ್ನಾಟಕ ರೇಷ್ಮೆ ಕೈಗಾರಿಕಾ ನಿಗಮ (KSIC) ರಚನೆ",
    description:
      "KSIC was established in 1980 under the Companies Act. In the same year the Mysore Silk Weaving Factory and the other listed silk units passed into its care, with modernisation linked to World Bank support.",
    kannadaDescription:
      "ಮೈಸೂರಿನ ಐತಿಹಾಸಿಕ ರೇಷ್ಮೆ ಕಾರ್ಖಾನೆ ಮತ್ತು ಟಿ. ನರಸೀಪುರದ ರೇಷ್ಮೆ ನೂಲು ಘಟಕವನ್ನು ಸರ್ಕಾರದ ಸುಪರ್ದಿಗೆ ತರಲು ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ಕೆ.ಎಸ್.ಐ.ಸಿ ನಿಗಮವನ್ನು ಸ್ಥಾಪಿಸಿತು.",
    significance:
      "Between 1982 and 1986 the works received imported reeling and weaving machinery associated with Korea and Japan.",
    kannadaSignificance:
      "1982 ರಿಂದ 1986 ರ ನಡುವೆ ಕೊರಿಯಾ ಮತ್ತು ಜಪಾನ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಆಮದು ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಸ್ಥಾಪಿಸಲಾಯಿತು.",
    image: "/assets/heritage/ksic-1980-incorporation.jpg",
    statNumber: "1980",
    statLabel: "KSIC established under the Companies Act",
    statLabelKn: "ಕಂಪನಿ ಕಾಯ್ದೆಯಡಿ ಸ್ಥಾಪನೆ",
    provenance: "Government of Karnataka",
    provenanceKn: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
  },
  {
    year: "2005",
    epoch: "INTELLECTUAL PROPERTY",
    title: "Geographical Indication recorded as GIR-11",
    kannadaTitle: "ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ (GI-11) ಕಾನೂನುಬದ್ಧ ಮಾನ್ಯತೆ",
    description:
      "Mysore Silk was entered in the Geographical Indications register in November 2005 under the Geographical Indications of Goods (Registration and Protection) Act, 1999, as GIR-11. KSIC holds the GI for the name.",
    kannadaDescription:
      "ನವೆಂಬರ್ 2005 ರಲ್ಲಿ ನೋಂದಣಿ ಸಂಖ್ಯೆ GIR-11 ರೊಂದಿಗೆ ಮೈಸೂರು ರೇಷ್ಮೆ ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ ಪಡೆಯಿತು.",
    significance:
      "Each finished saree carries a unique identification number and a hologram so its authenticity can be checked.",
    kannadaSignificance:
      "ಪ್ರತಿ ಸೀರೆಯೂ ವಿಶಿಷ್ಟ ಗುರುತು ಸಂಖ್ಯೆ ಮತ್ತು ಹೊಲೊಗ್ರಾಮ್ ಹೊಂದಿದೆ.",
    image: "/assets/heritage/ksic-2005-gi-certificate.jpg",
    statNumber: "GIR-11",
    statLabel: "GI registration, November 2005",
    statLabelKn: "ನವೆಂಬರ್ 2005 ಜಿಐ ನೋಂದಣಿ",
    provenance: "GI Registry of India",
    provenanceKn: "ಭಾರತದ ಜಿಐ ನೋಂದಣಿ",
  },
  {
    year: "TODAY",
    epoch: "LIVING ROYAL LEGACY",
    title: "An Unbroken Royal Tradition",
    kannadaTitle: "ಇಂದಿಗೂ ಜೀವಂತ ರಾಜಪರಂಪರೆ",
    description:
      "Zari is specified as 65% pure silver and 0.65% gold on pure mulberry silk. The cloth remains light, smooth, and lustrous. A Mysore Silk ensemble was worn by Deepika Padukone at the 75th Cannes Film Festival.",
    kannadaDescription:
      "ಜರಿಯನ್ನು 65% ಶುದ್ಧ ಬೆಳ್ಳಿ ಮತ್ತು 0.65% ಚಿನ್ನ ಎಂದು ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿದೆ. 75ನೇ ಕಾನ್ ಚಲನಚಿತ್ರೋತ್ಸವದಲ್ಲಿ ದೀಪಿಕಾ ಪಡುಕೋಣೆ ಧರಿಸಿದ ಮೈಸೂರು ರೇಷ್ಮೆ ವೇಷವನ್ನು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
    significance:
      "Mysore Silk still belongs in wedding trousseaus, designer collections, and everyday wardrobes.",
    kannadaSignificance: "ಮದುವೆ ವಸ್ತ್ರಸಂಚಯ, ವಿನ್ಯಾಸಕ ಸಂಗ್ರಹ ಮತ್ತು ಇಂದಿನ ಬಳಕೆಯಲ್ಲಿ ಈ ಬಟ್ಟೆಯನ್ನು ಇರಿಸಲಾಗಿದೆ.",
    image: "/assets/heritage/ksic-today-master-weaver.jpg",
    statNumber: "0.65%",
    statLabel: "Gold in the zari, with 65% pure silver",
    statLabelKn: "ಜರಿಯಲ್ಲಿ ಚಿನ್ನ; 65% ಶುದ್ಧ ಬೆಳ್ಳಿ",
    provenance: "Active KSIC Weaving Mills, Karnataka",
    provenanceKn: "ಸಕ್ರಿಯ ಕೆ.ಎಸ್.ಐ.ಸಿ ರೇಷ್ಮೆ ಗಿರಣಿಗಳು, ಕರ್ನಾಟಕ",
  },
];

export const HERITAGE_NARRATIVE = {
  kicker: "A HERITAGE OF MYSURU",
  foundingYear: "1912",
  founder: "Sri Nalvadi Krishnaraja Wadiyar",
  founderTitle: "The Maharaja of Mysore",
  factoryLocation: "Mananthody Road, Mysuru, Karnataka",
  statement:
    "Inspired by Swiss silk seen in Europe, Sri Nalvadi Krishnaraja Wadiyar began weaving inside the Mysore Palace; that work became the Mysore Silk Weaving Factory of 1912. KSIC, the corporation, dates from 1980.",
};
