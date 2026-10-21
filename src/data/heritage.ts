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
];

export const HERITAGE_NARRATIVE = {
  kicker: "A HERITAGE OF MYSURU",
  foundingYear: "1912",
  founder: "Sri Nalvadi Krishnaraja Wadiyar",
  founderTitle: "The Maharaja of Mysore",
  factoryLocation: "Mananthody Road, Mysuru, Karnataka",
  statement: "The Mysore Silk Weaving Factory was established in 1912 under Sri Nalvadi Krishnaraja Wadiyar, to produce premium silk for the royal family and the armed forces. KSIC, the corporation, dates from 1980.",
};
