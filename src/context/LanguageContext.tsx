"use client";

import React, { createContext, useContext, useEffect } from "react";

export type Language = "en" | "kn";

export interface Translations {
  // Header Nav
  navHeritage: string;
  navCraft: string;
  navCollection: string;
  navInstitution: string;
  navStores: string;
  navContact: string;

  // Hero Section
  heroKickerEn: string;
  heroKickerKn: string;
  heroTitleMain: string;
  heroPoetic1: string;
  heroPoetic2: string;
  heroPoetic3: string;
  heroExploreBtn: string;
  gandaberundaTitle: string;
  gandaberundaSubtitle: string;

  // Heritage Section
  heritageKicker: string;
  heritageTitle: string;
  heritageText1: string;
  heritageQuote: string;
  heritageFounderLabel: string;
  heritageFounderCity: string;
  heritageExploreBtn: string;
  heritageTimelineBtn: string;

  // Timeline Section
  timelineKicker: string;
  timelineTitle: string;

  // Craft Section
  craftKicker: string;
  craftTitle: string;
  craftSubtitle: string;

  // Factory Section
  factoryKicker: string;
  factoryTitle: string;
  factoryDesc: string;
  factoryBtn: string;

  // Authenticity Section
  authKicker: string;
  authBadge: string;
  authProprietorLabel: string;
  authTitle: string;
  authDesc: string;
  authPillar1Title: string;
  authPillar1Desc: string;
  authPillar2Title: string;
  authPillar2Desc: string;
  authPillar3Title: string;
  authPillar3Desc: string;
  authBtn: string;
  authSealTag: string;

  // Collection Section
  collectionKicker: string;
  collectionTitle: string;
  collectionSubtitle: string;
  collectionExploreAll: string;
  collectionDetailsBtn: string;

  // Collection Page (/collection)
  colPageKicker: string;
  colPageTitle: string;
  colPageSubtitle: string;
  colPageCatLabel: string;
  colPageAllCategories: string;
  colPageMaterial: string;
  colPageZari: string;
  colPageCert: string;
  colPageExamineBtn: string;
  colPageEnquireBtn: string;
  colPagePolicyKicker: string;
  colPagePolicyTitle: string;
  colPagePolicyDesc: string;
  colPageLocateBtn: string;

  // Footer
  footerEnterpriseTitle: string;
  footerEnterpriseSub: string;
  footerHqLabel: string;
  footerHqAddress: string;
  footerFactoryLabel: string;
  footerFactoryAddress: string;
  footerNavTitle: string;
  footerCertTitle: string;
  footerCopyright: string;
}

const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    navHeritage: "OUR STORY",
    navCraft: "HOW IT'S MADE",
    navCollection: "COLLECTION",
    navInstitution: "ABOUT KSIC",
    navStores: "OUR STORES",
    navContact: "CONTACT US",

    heroKickerEn: "A LEGACY OF INDIAN CRAFTSMANSHIP",
    heroKickerKn: "ಭಾರತೀಯ ಕರಕುಶಲದ ಪರಂಪರೆ",
    heroTitleMain: "Woven in Gold.",
    heroPoetic1: "Rooted in Royalty.",
    heroPoetic2: "A timeless expression of silk, artistry and heritage.",
    heroPoetic3: "",
    heroExploreBtn: "DISCOVER THE COLLECTION",
    gandaberundaTitle: "GANDA BERUNDA",
    gandaberundaSubtitle: "A SYMBOL OF ROYALTY",

    heritageKicker: "OUR HERITAGE",
    heritageTitle: "THE BEGINNING OF A LIVING LEGACY.",
    heritageText1: "The Mysore Silk Weaving Factory was established in Mysuru in 1912 under Sri Nalvadi Krishnaraja Wadiyar, the Maharaja of Mysore province. Initially, the fabrics were crafted exclusively to meet the ceremonial requirements of the royal family and ornamental silk regalia for the state armed forces.",
    heritageQuote: "The 1912 factory produced premium silk for the royal family and the armed forces. Madhurya separately describes the Maharaja’s interest in Swiss silk. Those accounts are not combined into one story.",
    heritageFounderLabel: "Royal Founder · Nalvadi Krishnaraja Wadiyar",
    heritageFounderCity: "Mysuru · 1912",
    heritageExploreBtn: "EXPLORE OUR HISTORY",
    heritageTimelineBtn: "VIEW 100+ YEAR TIMELINE",

    timelineKicker: "CENTURY OF STEWARDSHIP",
    timelineTitle: "THE CHRONOLOGY OF MYSORE SILK",

    craftKicker: "INTEGRATED SERICULTURE & WEAVING",
    craftTitle: "FROM COCOON TO SILK",
    craftSubtitle: "A journey of precision under one roof.",

    factoryKicker: "THE SILK WEAVING FACTORY · MANANTHODY ROAD, MYSURU",
    factoryTitle: "WHERE THE LEGACY IS STILL BEING WOVEN.",
    factoryDesc: "The Mysore Silk Weaving Factory was established in 1912 under Maharaja Sri Nalvadi Krishnaraja Wadiyar. KSIC, the corporation, was established later, in 1980, under the Companies Act. The two dates are not the same event.",
    factoryBtn: "ABOUT FACTORY HERITAGE",

    authKicker: "LEGAL GEOGRAPHICAL INDICATION",
    authBadge: "GEOGRAPHICAL INDICATION OF GOODS ACT, 1999 · PARLIAMENT OF INDIA",
    authProprietorLabel: "REGISTRATION NUMBER GIR-11",
    authTitle: "MYSORE SILK AND THE GI REGISTER.",
    authDesc: "The KSIC note records registration number GIR-11 in November 2005. Another account also refers to GI-11 and to 2017. This site does not treat those dates as one settled fact, and it cannot validate a saree serial number.",
    authPillar1Title: "Zari composition",
    authPillar1Desc: "Zari is specified as 65% pure silver and 0.65% gold. Madhurya describes genuine gold and silver zari on pure mulberry silk. Those figures are not extended into a claim about every current batch.",
    authPillar2Title: "Yarn, as documented",
    authPillar2Desc: "Pure silk yarn is specified with 2,200 twists per metre for the crepe texture, 26/28-denier untwisted raw silk for the warp, and two-ply twisted yarn for the weft.",
    authPillar3Title: "Identification markers",
    authPillar3Desc: "Each saree is described as carrying a unique identification number and a hologram. This website does not check those numbers.",
    authBtn: "AUTHENTICATION PROTOCOLS",
    authSealTag: "GOVT. OF KARNATAKA · AUTHENTICITY CERTIFIED",

    collectionKicker: "AUTHENTIC ARCHIVE & WEAVES",
    collectionTitle: "THE COLLECTION",
    collectionSubtitle: "A selection from the house of KSIC.",
    collectionExploreAll: "VIEW COMPLETE CATALOGUE",
    collectionDetailsBtn: "VIEW MONOGRAPH",

    colPageKicker: "INFORMATIONAL ARCHIVE & CATALOGUE",
    colPageTitle: "THE HOUSE OF KSIC.",
    colPageSubtitle: "A catalogue of articles associated with the Mysore Silk Weaving Factory. The fabric is described as predominantly machine-woven, while Madhurya also uses the language of hand-weaving. Those descriptions are not treated as the same process.",
    colPageCatLabel: "OFFICIAL CATEGORIES:",
    colPageAllCategories: "ALL ARTICLES",
    colPageMaterial: "Material:",
    colPageZari: "Zari:",
    colPageCert: "Certification:",
    colPageExamineBtn: "EXAMINE ARTICLE",
    colPageEnquireBtn: "ENQUIRE IN SHOWROOM",
    colPagePolicyKicker: "POLICY NOTE",
    colPagePolicyTitle: "AUTHENTICITY OVER ECOMMERCE",
    colPagePolicyDesc: "Each saree is described as carrying a unique identification number and a hologram. This website does not check those numbers.",
    colPageLocateBtn: "LOCATE YOUR NEAREST KSIC SHOWROOM",

    footerEnterpriseTitle: "Karnataka Silk Industries Corporation Limited",
    footerEnterpriseSub: "A Government of Karnataka Enterprise · Weaving factory 1912 · Corporation 1980",
    footerHqLabel: "Registered Corporate Headquarters",
    footerHqAddress: "3rd & 4th Floor, Public Utility Building, M.G. Road, Bengaluru, Karnataka 560001",
    footerFactoryLabel: "Heritage Silk Weaving Factory",
    footerFactoryAddress: "Mananthody Road, Mysuru, Karnataka 570008",
    footerNavTitle: "Institutional Navigation",
    footerCertTitle: "Authenticity & Governance",
    footerCopyright: "© 2026 Karnataka Silk Industries Corporation Limited (KSIC). Government of Karnataka Undertaking.",
  },

  kn: {
    navHeritage: "ಪರಂಪರೆ",
    navCraft: "ಕಲೆ & ನೇಯ್ಗೆ",
    navCollection: "ಸಂಗ್ರಹ",
    navInstitution: "ಸಂಸ್ಥೆ",
    navStores: "ಮಳಿಗೆಗಳು",
    navContact: "ಸಂಪರ್ಕ",

    heroKickerEn: "ಭಾರತೀಯ ಕರಕುಶಲದ ಪರಂಪರೆ",
    heroKickerKn: "ಭಾರತೀಯ ಕರಕುಶಲದ ಪರಂಪರೆ",
    heroTitleMain: "ಚಿನ್ನದಲ್ಲಿ ನೇಯಲ್ಪಟ್ಟದ್ದು.",
    heroPoetic1: "ರಾಜಪರಂಪರೆಯಲ್ಲಿ ಬೇರೂರಿದ್ದು.",
    heroPoetic2: "ರೇಷ್ಮೆ, ಕಲೆ ಮತ್ತು ಪರಂಪರೆಯ ಕಾಲಾತೀತ ಅಭಿವ್ಯಕ್ತಿ.",
    heroPoetic3: "",
    heroExploreBtn: "ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ",
    gandaberundaTitle: "ಗಂಡಭೇರುಂಡ",
    gandaberundaSubtitle: "ರಾಜಪರಂಪರೆಯ ಅಮರ ಲಾಂಛನ",

    heritageKicker: "ನಮ್ಮ ಪರಂಪರೆ",
    heritageTitle: "ರಾಜಪರಂಪರೆಯ ಅಮರ ಆರಂಭ.",
    heritageText1: "ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆಯನ್ನು 1912 ರಲ್ಲಿ ಮೈಸೂರು ಪ್ರಾಂತ್ಯದ ಮಹಾರಾಜರಾದ ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರು ಸ್ಥಾಪಿಸಿದರು. ಆರಂಭದಲ್ಲಿ, ಈ ವಸ್ತ್ರಗಳು ರಾಜಮನೆತನದ ಧಾರ್ಮಿಕ ವಿಧಿವಿಧಾನಗಳಿಗೆ ಹಾಗೂ ರಾಜ್ಯ ಸಶಸ್ತ್ರ ಪಡೆಗಳ ರೇಷ್ಮೆ ಸಮವಸ್ತ್ರಗಳಿಗಾಗಿ ಮಾತ್ರ ನೇಯಲ್ಪಡುತ್ತಿದ್ದವು.",
    heritageQuote: "1912 ರ ಕಾರ್ಖಾನೆ ರಾಜಮನೆತನ ಮತ್ತು ಸಶಸ್ತ್ರ ಪಡೆಗಳಿಗೆ ರೇಷ್ಮೆ ತಯಾರಿಸಲು ಸ್ಥಾಪಿತವಾಯಿತು ಎಂದು ಒಂದು ಖಾತೆ ಹೇಳುತ್ತದೆ. ಸ್ವಿಸ್ ರೇಷ್ಮೆಯ ಬಗ್ಗೆ ಮಹಾರಾಜರ ಆಸಕ್ತಿಯನ್ನು ಮಾಧುರ್ಯ ಲೇಖನ ಪ್ರತ್ಯೇಕವಾಗಿ ವರ್ಣಿಸುತ್ತದೆ.",
    heritageFounderLabel: "ರಾಜ ಸಂಸ್ಥಾಪಕರು · ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್",
    heritageFounderCity: "ಮೈಸೂರು · 1912",
    heritageExploreBtn: "ನಮ್ಮ ಇತಿಹಾಸ ತಿಳಿಯಿರಿ",
    heritageTimelineBtn: "100+ ವರ್ಷಗಳ ಕಾಲಕ್ರಮ ನೋಡಿ",

    timelineKicker: "ಶತಮಾನದ ಸಂರಕ್ಷಣೆ",
    timelineTitle: "ಮೈಸೂರು ರೇಷ್ಮೆಯ ಶತಮಾನದ ಕಾಲಕ್ರಮ",

    craftKicker: "ಸಮಗ್ರ ರೇಷ್ಮೆ ಕೃಷಿ ಮತ್ತು ನೇಯ್ಗೆ",
    craftTitle: "ಗೂಡಿನಿಂದ ರೇಷ್ಮೆಯವರೆಗೆ",
    craftSubtitle: "ಒಂದೇ ಸೂರಿನಡಿ ನಿಖರತೆಯ ಪಯಣ.",

    factoryKicker: "ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆ · ಮಾನಂದವಾಡಿ ರಸ್ತೆ, ಮೈಸೂರು",
    factoryTitle: "ಪರಂಪರೆ ಇಂದಿಗೂ ಜೀವಂತವಾಗಿ ನೇಯಲ್ಪಡುತ್ತಿರುವ ಸ್ಥಳ.",
    factoryDesc: "ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆ 1912 ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾಯಿತು. ಕೆ.ಎಸ್.ಐ.ಸಿ ನಿಗಮ 1980 ರಲ್ಲಿ ಕಂಪನಿ ಕಾಯ್ದೆಯಡಿ ಸ್ಥಾಪಿತವಾಯಿತು. ಈ ಎರಡು ದಿನಾಂಕಗಳು ಒಂದೇ ಘಟನೆಯಲ್ಲ.",
    factoryBtn: "ಕಾರ್ಖಾನೆಯ ಇತಿಹಾಸ",

    authKicker: "ಕಾನೂನುಬದ್ಧ ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ",
    authBadge: "ಭೌಗೋಳಿಕ ಸರಕುಗಳ ಕಾಯಿದೆ, 1999 · ಭಾರತೀಯ ಸಂಸತ್ತು",
    authProprietorLabel: "ನೋಂದಣಿ ಸಂಖ್ಯೆ GIR-11",
    authTitle: "ಮೈಸೂರು ಸಿಲ್ಕ್ ಜಿಐ ಮಾನ್ಯತೆ ಪಡೆದ ಪವಿತ್ರತೆ.",
    authDesc: "ಕೆ.ಎಸ್.ಐ.ಸಿ ಟಿಪ್ಪಣಿ ನವೆಂಬರ್ 2005 ರಲ್ಲಿ GIR-11 ಎಂದು ದಾಖಲಿಸುತ್ತದೆ. ಇನ್ನೊಂದು ಖಾತೆ 2017 ಅನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ. ಆ ದಿನಾಂಕಗಳನ್ನು ಒಂದೇ ಅಂತಿಮ ಸತ್ಯವಾಗಿ ಬರೆಯಲಾಗಿಲ್ಲ.",
    authPillar1Title: "ಶುದ್ಧ ಬಂಗಾರದ ಜರಿಯ ಮಾನದಂಡ",
    authPillar1Desc: "ಮೂಲ ಖಾತೆ ಜರಿಯನ್ನು 65% ಶುದ್ಧ ಬೆಳ್ಳಿ ಮತ್ತು 0.65% ಚಿನ್ನ ಎಂದು ನಿರ್ದಿಷ್ಟಪಡಿಸುತ್ತದೆ. ಇದನ್ನು ಪ್ರತಿ ಪ್ರಸ್ತುತ ಬ್ಯಾಚ್‌ಗೂ ಅನ್ವಯಿಸುವ ಹೆಚ್ಚುವರಿ ಹಕ್ಕಾಗಿ ವಿಸ್ತರಿಸಲಾಗಿಲ್ಲ.",
    authPillar2Title: "ದಾಖಲಿತ ನೂಲು",
    authPillar2Desc: "ಹಾಸಿಗೆ 26/28 ಡೆನಿಯರ್ ತಿರುಗಿಸದ ಕಚ್ಚಾ ರೇಷ್ಮೆ, ಹೊಕ್ಕಿಗೆ ಎರಡು ಪದರದ ತಿರುಗಿಸಿದ ನೂಲು, ಮತ್ತು ಕ್ರೇಪ್ ವಿನ್ಯಾಸಕ್ಕೆ ಮೀಟರಿಗೆ 2,200 ತಿರುವುಗಳು ಎಂದು ಖಾತೆ ನಿರ್ದಿಷ್ಟಪಡಿಸುತ್ತದೆ.",
    authPillar3Title: "ವಿಶಿಷ್ಟ ಗುರುತು ಸಂಖ್ಯೆ ಮತ್ತು ಹೊಲೊಗ್ರಾಮ್",
    authPillar3Desc: "ಪ್ರತಿ ಸೀರೆಯೂ ವಿಶಿಷ್ಟ ಗುರುತು ಸಂಖ್ಯೆ ಮತ್ತು ಹೊಲೊಗ್ರಾಮ್ ಹೊಂದಿದೆ ಎಂದು ಖಾತೆ ಹೇಳುತ್ತದೆ. ಈ ಜಾಲತಾಣವು ಆ ಸಂಖ್ಯೆಯನ್ನು ಪರಿಶೀಲಿಸುವುದಿಲ್ಲ.",
    authBtn: "ದೃಢೀಕರಣ ಪ್ರಕ್ರಿಯೆಗಳು",
    authSealTag: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ · ಅಧಿಕೃತ ಪ್ರಮಾಣೀಕೃತ",

    collectionKicker: "ಅಧಿಕೃತ ಆರ್ಕೈವ್ ಮತ್ತು ರೇಷ್ಮೆ ನೇಯ್ಗೆಗಳು",
    collectionTitle: "ಕೆ.ಎಸ್.ಐ.ಸಿ ಸಂಗ್ರಹ",
    collectionSubtitle: "ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಮಾಸ್ಟರ್ ಸಂಗ್ರಹ.",
    collectionExploreAll: "ಸಂಪೂರ್ಣ ಕ್ಯಾಟಲಾಗ್ ನೋಡಿ",
    collectionDetailsBtn: "ವಿವರಣೆ ನೋಡಿ",

    colPageKicker: "ಮಾಹಿತಿ ಆರ್ಕೈವ್ ಮತ್ತು ಕ್ಯಾಟಲಾಗ್",
    colPageTitle: "ಕೆ.ಎಸ್.ಐ.ಸಿ ರೇಷ್ಮೆ ಮನೆತನ.",
    colPageSubtitle: "ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆಯಲ್ಲಿ ನೇಯ್ದ ನೋಂದಾಯಿತ ಮಾದರಿಗಳ ಅಧಿಕೃತ ಪ್ರದರ್ಶನ. ಪ್ರತಿಯೊಂದು ಸೀರೆಯೂ 100% ಶುದ್ಧ ನೈಸರ್ಗಿಕ ರೇಷ್ಮೆ ಮತ್ತು 24 ಕ್ಯಾರೆಟ್ ಬಂಗಾರದ ಜರಿಯಿಂದ ಕೂಡಿದೆ.",
    colPageCatLabel: "ಅಧಿಕೃತ ವಿಭಾಗಗಳು:",
    colPageAllCategories: "ಎಲ್ಲಾ ಲೇಖನಗಳು",
    colPageMaterial: "ವಸ್ತು:",
    colPageZari: "ಜರಿ:",
    colPageCert: "ಪ್ರಮಾಣೀಕರಣ:",
    colPageExamineBtn: "ವಿವರಣೆ ನೋಡಿ",
    colPageEnquireBtn: "ಮಳಿಗೆಯಲ್ಲಿ ವಿಚಾರಿಸಿ",
    colPagePolicyKicker: "ನೀತಿ ಪ್ರಕಟಣೆ",
    colPagePolicyTitle: "ಅಧಿಕೃತತೆಗೆ ಮೊದಲ ಆದ್ಯತೆ",
    colPagePolicyDesc: "ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಉದ್ಯಮವಾಗಿ, ಕೆ.ಎಸ್.ಐ.ಸಿ ತನ್ನ ಅಧಿಕೃತ ರಾಜ್ಯ ಮಳಿಗೆಗಳ ಮೂಲಕ ನೇರ ಪರಿಶೀಲನೆಯನ್ನು ಕಾಯ್ದುಕೊಳ್ಳುತ್ತದೆ. ಪ್ರತಿಯೊಂದು ನೈಜ ಸೀರೆಯೂ ವಿಶಿಷ್ಟ ಲೇಸರ್-ಎಂಬ್ರಾಯ್ಡರಿ ಸೀರಿಯಲ್ ಕೋಡ್ ಮತ್ತು ತೂಕದ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಹೊಂದಿರುವುದರಿಂದ, ಗ್ರಾಹಕರು ವೈಯಕ್ತಿಕವಾಗಿ ವೀಕ್ಷಿಸಿ ಖರೀದಿಸಲು ಆಹ್ವಾನಿಸುತ್ತೇವೆ.",
    colPageLocateBtn: "ನಿಮ್ಮ ಸಮೀಪದ ಕೆ.ಎಸ್.ಐ.ಸಿ ಮಳಿಗೆಯನ್ನು ನೋಡಿ",

    footerEnterpriseTitle: "ಕರ್ನಾಟಕ ರೇಷ್ಮೆ ಕೈಗಾರಿಕಾ ನಿಗಮ ನಿಯಮಿತ",
    footerEnterpriseSub: "ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಉದ್ಯಮ · ಸ್ಥಾಪನೆ 1912",
    footerHqLabel: "ನೋಂದಾಯಿತ ಪ್ರಧಾನ ಕಛೇರಿ",
    footerHqAddress: "3 ಮತ್ತು 4 ನೇ ಮಹಡಿ, ಪಬ್ಲಿಕ್ ಯುಟಿಲಿಟಿ ಬಿಲ್ಡಿಂಗ್, ಎಂ.ಜಿ. ರಸ್ತೆ, ಬೆಂಗಳೂರು 560001",
    footerFactoryLabel: "ಐತಿಹಾಸಿಕ ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆ",
    footerFactoryAddress: "ಮಾನಂದವಾಡಿ ರಸ್ತೆ, ಮೈಸೂರು, ಕರ್ನಾಟಕ 570008",
    footerNavTitle: "ಸಂಸ್ಥೆಯ ಪುಟಗಳು",
    footerCertTitle: "ದೃಢೀಕರಣ & ಆಡಳಿತ",
    footerCopyright: "© 2026 ಕರ್ನಾಟಕ ರೇಷ್ಮೆ ಕೈಗಾರಿಕಾ ನಿಗಮ ನಿಯಮಿತ (KSIC). ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಉದ್ಯಮ.",
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: TRANSLATIONS.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lang: Language = "en";

  useEffect(() => {
    try {
      localStorage.setItem("ksic_language", "en");
      document.documentElement.lang = "en";
    } catch {
      // localStorage unavailable (SSR)
    }
  }, []);

  const setLang = (_newLang: Language) => {
    try {
      localStorage.setItem("ksic_language", "en");
      document.documentElement.lang = "en";
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang("en");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
