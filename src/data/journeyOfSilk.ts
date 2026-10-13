export interface JourneyStage {
  step: string;
  name: string;
  nameKn: string;
  headline: string;
  headlineKn: string;
  description: string;
  descriptionKn: string;
  image: string;
  detailBadge: string;
  detailBadgeKn: string;
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: "01",
    name: "The Origin",
    nameKn: "ಮೂಲ",
    headline: "Every thread has an origin.",
    headlineKn: "ಪ್ರತಿಯೊಂದು ಎಳೆಗೂ ಒಂದು ಪವಿತ್ರ ಮೂಲವಿದೆ.",
    description: "It begins with nature’s finest silk cocoons, nurtured with care and tradition.",
    descriptionKn: "ಕಾಳಜಿ ಮತ್ತು ಪರಂಪರೆಯೊಂದಿಗೆ ಪೋಷಿಸಲ್ಪಟ್ಟ ಪ್ರಕೃತಿಯ ಶ್ರೇಷ್ಠ ರೇಷ್ಮೆ ಗೂಡುಗಳಿಂದ ಇದು ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.",
    image: "/assets/craft/journey-stage-1.jpg",
    detailBadge: "100% Pure Mulberry Silk",
    detailBadgeKn: "೧೦೦% ಶುದ್ಧ ಹಿಪ್ಪುನೇರಳೆ ರೇಷ್ಮೆ",
  },
  {
    step: "02",
    name: "The Transformation",
    nameKn: "ರೂಪಾಂತರ",
    headline: "Nature becomes possibility.",
    headlineKn: "ಪ್ರಕೃತಿಯು ಅಪಾರ ಸಾಧ್ಯತೆಯಾಗಿ ಬದಲಾಗುತ್ತದೆ.",
    description: "The delicate filament is carefully drawn, refined and prepared for its next form.",
    descriptionKn: "ಸೂಕ್ಷ್ಮ ರೇಷ್ಮೆ ಎಳೆಗಳನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಎಳೆದು, ಶುದ್ಧೀಕರಿಸಿ ಮುಂದಿನ ರೂಪಕ್ಕೆ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ.",
    image: "/assets/craft/journey-stage-2.jpg",
    detailBadge: "Continuous Filaments",
    detailBadgeKn: "ನಿರಂತರ ಅಖಂಡ ರೇಷ್ಮೆ ಎಳೆಗಳು",
  },
  {
    step: "03",
    name: "The Golden Thread",
    nameKn: "ಚಿನ್ನದ ಎಳೆ",
    headline: "Gold, woven with precision and tradition.",
    headlineKn: "ಪರಂಪರೆ ಮತ್ತು ನಿಖರತೆಯಿಂದ ನೇಯ್ದ ಶುದ್ಧ ಚಿನ್ನ.",
    description: "Pure gold zari is intricately woven, adding a legacy of royalty to every thread.",
    descriptionKn: "ಶುದ್ಧ ಚಿನ್ನದ ಜರಿಯನ್ನು ಸಂಕೀರ್ಣವಾಗಿ ನೇಯ್ದು, ಪ್ರತಿ ಎಳೆಗೂ ರಾಜವಂಶದ ಪರಂಪರೆಯನ್ನು ನೀಡಲಾಗುತ್ತದೆ.",
    image: "/assets/craft/journey-stage-3.jpg",
    detailBadge: "0.65% Gold · 65% Silver Zari",
    detailBadgeKn: "೦.೬೫% ಚಿನ್ನ · ೬೫% ಬೆಳ್ಳಿ ಜರಿ",
  },
  {
    step: "04",
    name: "The Heirloom",
    nameKn: "ಪಾರಂಪರಿಕ ಸೀರೆ",
    headline: "Crafted to become heirloom.",
    headlineKn: "ಪೀಳಿಗೆಗಳ ಪಾರಂಪರಿಕ ಸಂಕೇತವಾಗಿ ರೂಪುಗೊಂಡ ಕಲೆ.",
    description: "The result is an exquisite Mysore Silk saree, a timeless expression of artistry and heritage.",
    descriptionKn: "ಅಂತಿಮ ಫಲಿತಾಂಶವೇ ಅದ್ಭುತ ಮೈಸೂರು ರೇಷ್ಮೆ ಸೀರೆ—ಕಲೆಗಾರಿಕೆ ಮತ್ತು ಪರಂಪರೆಯ ಕಾಲಾತೀತ ಅಭಿವ್ಯಕ್ತಿ.",
    image: "/assets/craft/journey-stage-4.jpg",
    detailBadge: "Centenary Royal Weave",
    detailBadgeKn: "ಶತಮಾನದ ರಾಜವಂಶದ ನೇಯ್ಗೆ",
  },
];
