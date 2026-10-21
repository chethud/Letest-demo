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
    significance: "The same account states that the industry experienced challenges after his death in 1799.",
    image: "/assets/heritage/heritage-18th-channapatna.jpg",
  },
  {
    year: "1866",
    epoch: "FILATURE",
    title: "A silk filature at Kengeri",
    description: "In 1866 the Italian entrepreneur Signor de Vecchi established a silk filature unit in Kengeri.",
    significance: "This is recorded as a step in the region’s silk production, not as a KSIC unit.",
    image: "/assets/heritage/heritage-1866-kengeri.jpg",
  },
  {
    year: "1896",
    epoch: "TRAINING",
    title: "Tata Silk Farm, Basavanagudi",
    description: "The Tata Silk Farm was established in Basavanagudi to provide training in sericulture and mulberry cultivation.",
    significance: "Together with the Kengeri filature, this is described as contributing to silk production and technical expertise in the region.",
    image: "/assets/heritage/heritage-1896-basavanagudi.jpg",
  },
  {
    year: "1912",
    epoch: "ROYAL PATRONAGE",
    title: "Mysore Silk Weaving Factory Established",
    kannadaTitle: "ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆಯ ಸ್ಥಾಪನೆ",
    description: "The Mysore Silk Weaving Factory was established in 1912 under Maharaja Nalvadi Krishnaraja Wadiyar, producing premium silk fabrics for the royal family and the armed forces.",
    kannadaDescription: "ಮೈಸೂರು ಪ್ರಾಂತ್ಯದ ಮಹಾರಾಜರಾದ ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರಿಂದ ರಾಜಮನೆತನದ ಧಾರ್ಮಿಕ ವಸ್ತ್ರಗಳು ಮತ್ತು ರಾಜ್ಯ ಸಶಸ್ತ್ರ ಪಡೆಗಳ ರೇಷ್ಮೆ ಸಮವಸ್ತ್ರಗಳಿಗಾಗಿ ಸ್ಥಾಪನೆಗೊಂಡಿತು.",
    significance: "A separate account, Madhurya, describes the Maharaja’s interest in Swiss silk and a European-inspired development of weaving associated with the Mysore Palace. That narrative is kept as Madhurya’s own account.",
    kannadaSignificance: "ಮಧುರ್ಯ ಲೇಖನವು ಮಹಾರಾಜರ ಸ್ವಿಸ್ ರೇಷ್ಮೆಯ ಆಸಕ್ತಿ ಮತ್ತು ಅರಮನೆಗೆ ಸಂಬಂಧಿಸಿದ ನೇಯ್ಗೆಯನ್ನು ಬೇರೆ ಕಥೆಯಾಗಿ ಹೇಳುತ್ತದೆ.",
    image: "/assets/heritage/ksic-1912-foundation.jpg",
    statNumber: "1912",
    statLabel: "Factory established under royal patronage",
    statLabelKn: "ಸ್ವಿಟ್ಜರ್ಲೆಂಡ್‌ನಿಂದ ಆಮದು",
    provenance: "Mananthody Road Royal Weaving Estate, Mysuru",
    provenanceKn: "ಮಾನಂದವಾಡಿ ರಸ್ತೆ ರಾಜ ನೇಯ್ಗೆ ಕೇಂದ್ರ, ಮೈಸೂರು",
  },
  {
    year: "1930–32",
    epoch: "FACTORY EXPANSION",
    title: "Expansion, then commercial production",
    kannadaTitle: "ವಿದ್ಯುತ್ ನೇಯ್ಗೆ ವಿಸ್ತರಣೆ ಮತ್ತು ಸ್ವಿಸ್ ಜಾಕ್ವಾರ್ಡ್",
    description: "The KSIC note says factory operations were expanded from 1930, and that commercial production was brought into operation after 1932. These two statements are kept in the order the note gives them.",
    kannadaDescription: "ಕೆ.ಎಸ್.ಐ.ಸಿ ಟಿಪ್ಪಣಿ 1930 ರಿಂದ ಕಾರ್ಖಾನೆ ವಿಸ್ತರಣೆ ಮತ್ತು 1932 ರ ನಂತರ ವಾಣಿಜ್ಯ ಉತ್ಪಾದನೆ ಎಂದು ಹೇಳುತ್ತದೆ.",
    significance: "Loom counts and other operating figures from the note are not published on this public page.",
    kannadaSignificance: "ಲೂಮ್ ಸಂಖ್ಯೆಗಳನ್ನು ಈ ಸಾರ್ವಜನಿಕ ಪುಟದಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗಿಲ್ಲ.",
    image: "/assets/heritage/ksic-1932-jacquard.jpg",
    statNumber: "After 1932",
    statLabel: "Commercial production, as recorded in the KSIC note",
    statLabelKn: "ಕ್ಯಾಲಿಬ್ರೇಟ್ ಮಾಡಿದ ಸ್ವಿಸ್ ವಿದ್ಯುತ್ ಸಾಮರ್ಥ್ಯ",
    provenance: "KSIC institutional note",
    provenanceKn: "ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯ ಕೈಗಾರಿಕಾ ದಾಖಲೆಗಳು",
  },
  {
    year: "1980",
    epoch: "EPOCH 03 · SOVEREIGN STEWARDSHIP",
    title: "Karnataka Silk Industries Corporation Incorporated",
    kannadaTitle: "ಕರ್ನಾಟಕ ರೇಷ್ಮೆ ಕೈಗಾರಿಕಾ ನಿಗಮ (KSIC) ರಚನೆ",
    description:
      "The KSIC note records that the corporation was established in 1980 under the Companies Act, and associates the transition with modernisation supported by the World Bank. In the same year, the Mysore Silk Weaving Factory and the other listed silk units were transferred to KSIC.",
    kannadaDescription:
      "ಮೈಸೂರಿನ ಐತಿಹಾಸಿಕ ರೇಷ್ಮೆ ಕಾರ್ಖಾನೆ ಮತ್ತು ಟಿ. ನರಸೀಪುರದ ರೇಷ್ಮೆ ನೂಲು ಘಟಕವನ್ನು ಸರ್ಕಾರದ ಸುಪರ್ದಿಗೆ ತರಲು ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ಕೆ.ಎಸ್.ಐ.ಸಿ ನಿಗಮವನ್ನು ಸ್ಥಾಪಿಸಿತು.",
    significance:
      "The note records installation, between 1982 and 1986, of imported reeling and weaving machinery associated with Korea and Japan. It does not say that every machine now in use has that origin.",
    kannadaSignificance:
      "1982 ರಿಂದ 1986 ರ ನಡುವೆ ಕೊರಿಯಾ ಮತ್ತು ಜಪಾನ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಆಮದು ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಟಿಪ್ಪಣಿ ದಾಖಲಿಸುತ್ತದೆ. ಪ್ರತಿ ಯಂತ್ರವೂ ಅದೇ ಮೂಲದ್ದು ಎಂದು ಹೇಳುವುದಿಲ್ಲ.",
    image: "/assets/heritage/ksic-1980-incorporation.jpg",
    statNumber: "1980",
    statLabel: "KSIC established under the Companies Act",
    statLabelKn: "ಕಂಪನಿ ಕಾಯ್ದೆಯಡಿ ಸ್ಥಾಪನೆ",
    provenance: "KSIC institutional note",
    provenanceKn: "ಕೆ.ಎಸ್.ಐ.ಸಿ ಸಾಂಸ್ಥಿಕ ಟಿಪ್ಪಣಿ",
  },
  {
    year: "2005",
    epoch: "EPOCH 04 · INTELLECTUAL PROPERTY",
    title: "Geographical Indication recorded as GIR-11",
    kannadaTitle: "ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ (GI-11) ಕಾನೂನುಬದ್ಧ ಮಾನ್ಯತೆ",
    description:
      "The KSIC note states that Mysore Silk was entered in the Geographical Indications register in November 2005 under the Geographical Indications of Goods (Registration and Protection) Act, 1999, with registration number GIR-11. Another account also refers to GI-11 and to 2017. Those dates are not treated here as one settled fact.",
    kannadaDescription:
      "ಕೆ.ಎಸ್.ಐ.ಸಿ ಟಿಪ್ಪಣಿ ನವೆಂಬರ್ 2005 ರಲ್ಲಿ ನೋಂದಣಿ ಸಂಖ್ಯೆ GIR-11 ಎಂದು ದಾಖಲಿಸುತ್ತದೆ. ಮತ್ತೊಂದು ಖಾತೆ 2017 ಅನ್ನು ಸಹ ಉಲ್ಲೇಖಿಸುತ್ತದೆ. ಈ ದಿನಾಂಕವನ್ನು ಒಂದೇ ಅಂತಿಮ ಸಂಗತಿಯಾಗಿ ಇಲ್ಲಿ ಬರೆಯಲಾಗಿಲ್ಲ.",
    significance:
      "Each saree is described as carrying a unique identification number and a hologram. That is separate from the unsettled registration date.",
    kannadaSignificance:
      "ಪ್ರತಿ ಸೀರೆಯೂ ವಿಶಿಷ್ಟ ಗುರುತು ಸಂಖ್ಯೆ ಮತ್ತು ಹೊಲೊಗ್ರಾಮ್ ಹೊಂದಿದೆ ಎಂದು ಖಾತೆ ಹೇಳುತ್ತದೆ. ಇದು ನೋಂದಣಿ ದಿನಾಂಕದಿಂದ ಬೇರೆ.",
    image: "/assets/heritage/ksic-2005-gi-certificate.jpg",
    statNumber: "GIR-11",
    statLabel: "November 2005 in the KSIC note; 2017 also appears",
    statLabelKn: "ನವೆಂಬರ್ 2005 ಮತ್ತು 2017 ಎರಡೂ ಮೂಲಗಳಲ್ಲಿ",
    provenance: "KSIC note",
    provenanceKn: "ಕೆ.ಎಸ್.ಐ.ಸಿ ಟಿಪ್ಪಣಿ",
  },
  {
    year: "TODAY",
    epoch: "EPOCH 06 · LIVING ROYAL LEGACY",
    title: "An Unbroken Royal Tradition",
    kannadaTitle: "ಇಂದಿಗೂ ಜೀವಂತ ರಾಜಪರಂಪರೆ",
    description:
      "Zari is specified as 65% pure silver and 0.65% gold. A Mysore Silk ensemble was worn by Deepika Padukone at the 75th Cannes Film Festival. Madhurya describes the sarees as pure mulberry silk with genuine gold and silver zari, and places the textile in wedding trousseaus, designer collections, and contemporary wardrobes.",
    kannadaDescription:
      "ಜರಿಯನ್ನು 65% ಶುದ್ಧ ಬೆಳ್ಳಿ ಮತ್ತು 0.65% ಚಿನ್ನ ಎಂದು ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿದೆ. ಮಧುರ್ಯ ಲೇಖನವು ಶುದ್ಧ ಮಲ್ಬರಿ ರೇಷ್ಮೆ ಮತ್ತು ನಿಜವಾದ ಚಿನ್ನ-ಬೆಳ್ಳಿ ಜರಿ ಎಂದು ಹೇಳುತ್ತದೆ. 75ನೇ ಕಾನ್ ಚಲನಚಿತ್ರೋತ್ಸವದಲ್ಲಿ ದೀಪಿಕಾ ಪಡುಕೋಣೆ ಧರಿಸಿದ ಮೈಸೂರು ರೇಷ್ಮೆ ವೇಷವನ್ನು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
    significance:
      "Madhurya places the textile in wedding trousseaus, designer collections, and contemporary wardrobes.",
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
  statement: "The Mysore Silk Weaving Factory was established in 1912 under Sri Nalvadi Krishnaraja Wadiyar, to produce premium silk for the royal family and the armed forces. KSIC, the corporation, dates from 1980.",
};
