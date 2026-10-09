"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "kn";

export interface Translations {
  // Top Banner
  topBannerGovt: string;
  topBannerState: string;
  topBannerCities: string;

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
    topBannerGovt: "A Government of Karnataka Enterprise · Estd. 1912 · GI-11 Certified",
    topBannerState: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
    topBannerCities: "Mysuru · Bengaluru",

    navHeritage: "HERITAGE",
    navCraft: "CRAFT",
    navCollection: "COLLECTION",
    navInstitution: "INSTITUTION",
    navStores: "STORES",
    navContact: "CONTACT",

    heroKickerEn: "A ROYAL HERITAGE · SINCE 1912",
    heroKickerKn: "ಕರ್ನಾಟಕ ಮೈಸೂರು ಸಿಲ್ಕ್ · ರಾಜಪರಂಪರೆಯ ಅಮರ ನೇಯ್ಗೆ",
    heroTitleMain: "MYSORE SILK",
    heroPoetic1: "Pure silk.",
    heroPoetic2: "Woven in Mysore.",
    heroPoetic3: "For generations.",
    heroExploreBtn: "EXPLORE COLLECTION",
    gandaberundaTitle: "GANDA BERUNDA",
    gandaberundaSubtitle: "A SYMBOL OF ROYALTY",

    heritageKicker: "OUR HERITAGE",
    heritageTitle: "THE BEGINNING OF A LIVING LEGACY.",
    heritageText1: "The Mysore Silk Weaving Factory was established in Mysuru in 1912 under Sri Nalvadi Krishnaraja Wadiyar, the Maharaja of Mysore province. Initially, the fabrics were crafted exclusively to meet the ceremonial requirements of the royal family and ornamental silk regalia for the state armed forces.",
    heritageQuote: "Started with 10 Swiss looms imported under royal patronage, the factory introduced modern machine-woven crepe de chine to the subcontinent—pioneering an unadulterated combination of pure mulberry silk and electroplated gold zari that endures today.",
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
    factoryDesc: "Established in 1912 by Maharaja Sri Nalvadi Krishnaraja Wadiyar, the Mysore Silk Weaving Factory is the oldest operating machine-weaving unit in India. Century-old Swiss-built Jacquard power looms continue to run on Mananthody Road, preserving unbroken textile heritage for the nation.",
    factoryBtn: "ABOUT FACTORY HERITAGE",

    authKicker: "LEGAL GEOGRAPHICAL INDICATION",
    authBadge: "GEOGRAPHICAL INDICATION OF GOODS ACT, 1999 · PARLIAMENT OF INDIA",
    authProprietorLabel: "SOLE REGISTERED PROPRIETOR",
    authTitle: "MYSORE SILK GI PROTECTED.",
    authDesc: "Authentic Mysore Silk is legally protected against adulteration and imitation under the Geographical Indications Registry. Every saree woven by KSIC contains uncompromised benchmarks that distinguish it from private synthetic textiles.",
    authPillar1Title: "Pure Gold Zari Standard",
    authPillar1Desc: "65% Pure Silver ribbon electroplated with 0.65% authentic 24-carat Gold wrapped over pure mulberry silk core. Will not tarnish over generations.",
    authPillar2Title: "100% Natural Mulberry Silk",
    authPillar2Desc: "Both warp and weft spun from 26–28 Denier natural Karnataka silk yarns with high-speed twist density, passing the standard silk burning purity test.",
    authPillar3Title: "Traceable Serial Embroidered Code",
    authPillar3Desc: "Every individual pallu is stamped with a unique alphanumeric serial number, year of weave, and optical hologram for lifetime provenance verification.",
    authBtn: "AUTHENTICATION PROTOCOLS",
    authSealTag: "GOVT. OF KARNATAKA · AUTHENTICITY CERTIFIED",

    collectionKicker: "AUTHENTIC ARCHIVE & WEAVES",
    collectionTitle: "THE COLLECTION",
    collectionSubtitle: "A selection from the house of KSIC.",
    collectionExploreAll: "VIEW COMPLETE CATALOGUE",
    collectionDetailsBtn: "VIEW MONOGRAPH",

    colPageKicker: "INFORMATIONAL ARCHIVE & CATALOGUE",
    colPageTitle: "THE HOUSE OF KSIC.",
    colPageSubtitle: "A curated representation of registered articles woven at the Mysore Silk Weaving Factory. Each article is crafted in unadulterated natural mulberry silk and electroplated pure gold zari.",
    colPageCatLabel: "OFFICIAL CATEGORIES:",
    colPageAllCategories: "ALL ARTICLES",
    colPageMaterial: "Material:",
    colPageZari: "Zari:",
    colPageCert: "Certification:",
    colPageExamineBtn: "EXAMINE ARTICLE",
    colPageEnquireBtn: "ENQUIRE IN SHOWROOM",
    colPagePolicyKicker: "POLICY NOTE",
    colPagePolicyTitle: "AUTHENTICITY OVER ECOMMERCE",
    colPagePolicyDesc: "As a Government of Karnataka institution, KSIC maintains direct physical verification across our network of verified state showrooms. Because every genuine saree possesses a unique laser-embroidered serial number and weight certificate, we invite patrons to experience and inspect the textile in person.",
    colPageLocateBtn: "LOCATE YOUR NEAREST KSIC SHOWROOM",

    footerEnterpriseTitle: "Karnataka Silk Industries Corporation Limited",
    footerEnterpriseSub: "A Government of Karnataka Enterprise · Estd. 1912",
    footerHqLabel: "Registered Corporate Headquarters",
    footerHqAddress: "3rd & 4th Floor, Public Utility Building, M.G. Road, Bengaluru, Karnataka 560001",
    footerFactoryLabel: "Heritage Silk Weaving Factory",
    footerFactoryAddress: "Mananthody Road, Mysuru, Karnataka 570008",
    footerNavTitle: "Institutional Navigation",
    footerCertTitle: "Authenticity & Governance",
    footerCopyright: "© 2026 Karnataka Silk Industries Corporation Limited (KSIC). Government of Karnataka Undertaking.",
  },

  kn: {
    topBannerGovt: "ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಉದ್ಯಮ · ಸ್ಥಾಪನೆ 1912 · ಜಿಐ-11 ಮಾನ್ಯತೆ",
    topBannerState: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
    topBannerCities: "ಮೈಸೂರು · ಬೆಂಗಳೂರು",

    navHeritage: "ಪರಂಪರೆ",
    navCraft: "ಕಲೆ & ನೇಯ್ಗೆ",
    navCollection: "ಸಂಗ್ರಹ",
    navInstitution: "ಸಂಸ್ಥೆ",
    navStores: "ಮಳಿಗೆಗಳು",
    navContact: "ಸಂಪರ್ಕ",

    heroKickerEn: "ರಾಜಪರಂಪರೆ · 1912 ರಿಂದ",
    heroKickerKn: "ಕರ್ನಾಟಕ ಮೈಸೂರು ಸಿಲ್ಕ್ · ರಾಜಪರಂಪರೆಯ ಅಮರ ನೇಯ್ಗೆ",
    heroTitleMain: "ಮೈಸೂರು ಸಿಲ್ಕ್",
    heroPoetic1: "ಶುದ್ಧ ನೈಸರ್ಗಿಕ ರೇಷ್ಮೆ.",
    heroPoetic2: "ಮೈಸೂರಿನಲ್ಲಿ ನೇಯ್ದದ್ದು.",
    heroPoetic3: "ತಲೆಮಾರುಗಳ ಪರಂಪರೆ.",
    heroExploreBtn: "ಸಂಗ್ರಹ ವೀಕ್ಷಿಸಿ",
    gandaberundaTitle: "ಗಂಡಭೇರುಂಡ",
    gandaberundaSubtitle: "ರಾಜಪರಂಪರೆಯ ಅಮರ ಲಾಂಛನ",

    heritageKicker: "ನಮ್ಮ ಪರಂಪರೆ",
    heritageTitle: "ರಾಜಪರಂಪರೆಯ ಅಮರ ಆರಂಭ.",
    heritageText1: "ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆಯನ್ನು 1912 ರಲ್ಲಿ ಮೈಸೂರು ಪ್ರಾಂತ್ಯದ ಮಹಾರಾಜರಾದ ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರು ಸ್ಥಾಪಿಸಿದರು. ಆರಂಭದಲ್ಲಿ, ಈ ವಸ್ತ್ರಗಳು ರಾಜಮನೆತನದ ಧಾರ್ಮಿಕ ವಿಧಿವಿಧಾನಗಳಿಗೆ ಹಾಗೂ ರಾಜ್ಯ ಸಶಸ್ತ್ರ ಪಡೆಗಳ ರೇಷ್ಮೆ ಸಮವಸ್ತ್ರಗಳಿಗಾಗಿ ಮಾತ್ರ ನೇಯಲ್ಪಡುತ್ತಿದ್ದವು.",
    heritageQuote: "ರಾಜಾಶ್ರಯದಲ್ಲಿ ಸ್ವಿಟ್ಜರ್ಲೆಂಡ್‌ನಿಂದ ತರಿಸಲಾದ 10 ಲೂಮ್‌ಗಳೊಂದಿಗೆ ಆರಂಭವಾದ ಈ ಕಾರ್ಖಾನೆ, ಉಪಖಂಡಕ್ಕೆ ಆಧುನಿಕ ಯಂತ್ರ-ನೇಯ್ಗೆಯ ಕ್ರೇಪ್ ಡಿ ಚಿನ್ ರೇಷ್ಮೆಯನ್ನು ಪರಿಚಯಿಸಿತು—ಶುದ್ಧ ಮಲ್ಬರಿ ರೇಷ್ಮೆ ಮತ್ತು 24 ಕ್ಯಾರೆಟ್ ಬಂಗಾರದ ಜರಿಯ ಅಪರೂಪದ ಸಂಯೋಜನೆ ಇಂದಿಗೂ ಮುಂದುವರಿದಿದೆ.",
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
    factoryDesc: "1912 ರಲ್ಲಿ ಮಹಾರಾಜ ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟ ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಕಾರ್ಖಾನೆಯು ಭಾರತದ ಅತ್ಯಂತ ಪುರಾತನ ಯಂತ್ರ-ನೇಯ್ಗೆ ಘಟಕವಾಗಿದೆ. ಶತಮಾನದಷ್ಟು ಹಳೆಯದಾದ ಸ್ವಿಸ್-ನಿರ್ಮಿತ ಜಾಕ್ವಾರ್ಡ್ ಲೂಮ್‌ಗಳು ಇಂದಿಗೂ ಮಾನಂದವಾಡಿ ರಸ್ತೆಯಲ್ಲಿ ನಿರಂತರವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿವೆ.",
    factoryBtn: "ಕಾರ್ಖಾನೆಯ ಇತಿಹಾಸ",

    authKicker: "ಕಾನೂನುಬದ್ಧ ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ",
    authBadge: "ಭೌಗೋಳಿಕ ಸರಕುಗಳ ಕಾಯಿದೆ, 1999 · ಭಾರತೀಯ ಸಂಸತ್ತು",
    authProprietorLabel: "ಏಕೈಕ ನೋಂದಾಯಿತ ಮಾಲೀಕರು",
    authTitle: "ಮೈಸೂರು ಸಿಲ್ಕ್ ಜಿಐ ಮಾನ್ಯತೆ ಪಡೆದ ಪವಿತ್ರತೆ.",
    authDesc: "ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ (GI-11) ಅಡಿಯಲ್ಲಿ ಮೈಸೂರು ಸಿಲ್ಕ್ ಕಾನೂನುಬದ್ಧವಾಗಿ ರಕ್ಷಿಸಲ್ಪಟ್ಟಿದೆ. ಕೆ.ಎಸ್.ಐ.ಸಿ ನೇಯುವ ಪ್ರತಿಯೊಂದು ಸೀರೆಯೂ ನಕಲು ಮತ್ತು ಕಲಬೆರಕೆಯಿಲ್ಲದ ನೈಜ ಮಾನದಂಡಗಳನ್ನು ಹೊಂದಿದೆ.",
    authPillar1Title: "ಶುದ್ಧ ಬಂಗಾರದ ಜರಿಯ ಮಾನದಂಡ",
    authPillar1Desc: "65% ಶುದ್ಧ ಬೆಳ್ಳಿ ಪಟ್ಟಿಗೆ 0.65% ನೈಜ 24-ಕ್ಯಾರೆಟ್ ಚಿನ್ನವನ್ನು ಲೇಪಿಸಿ ರೇಷ್ಮೆ ನೂಲಿನ ಮೇಲೆ ಸುತ್ತಲಾಗುತ್ತದೆ. ತಲೆಮಾರುಗಳ ಕಾಲ ಕಪ್ಪಾಗುವುದಿಲ್ಲ.",
    authPillar2Title: "100% ಶುದ್ಧ ಮಲ್ಬರಿ ರೇಷ್ಮೆ",
    authPillar2Desc: "26–28 ಡೆನಿಯರ್ ನೈಸರ್ಗಿಕ ಕರ್ನಾಟಕ ರೇಷ್ಮೆ ನೂಲಿನಿಂದ ನೇಯ್ದದ್ದು, ರೇಷ್ಮೆ ಶುದ್ಧತೆಯ ಅಗ್ನಿ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಸಂಪೂರ್ಣ ಉತ್ತೀರ್ಣವಾಗುತ್ತದೆ.",
    authPillar3Title: "ಪತ್ತೆಹಚ್ಚಬಹುದಾದ ಎಂಬ್ರಾಯ್ಡರಿ ಸೀರಿಯಲ್ ಕೋಡ್",
    authPillar3Desc: "ಪ್ರತಿಯೊಂದು ಪಲ್ಲುವಿನಲ್ಲೂ ವಿಶಿಷ್ಟ ಅಕ್ಷರ-ಸಂಖ್ಯೆಯ ಸೀರಿಯಲ್ ಕೋಡ್, ನೇಯ್ಗೆ ವರ್ಷ ಮತ್ತು ಆಪ್ಟಿಕಲ್ ಹೊಲೊಗ್ರಾಮ್ ಮುದ್ರಿಸಲಾಗಿರುತ್ತದೆ.",
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
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ksic_language") as Language;
      if (saved === "en" || saved === "kn") {
        setLangState(saved);
      }
    } catch {
      // localStorage unavailable (SSR)
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("ksic_language", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "kn" : "en");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
