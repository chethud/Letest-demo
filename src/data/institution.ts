export interface InstitutionalFact {
  label: string;
  value: string;
  detail: string;
}

export const INSTITUTIONAL_OVERVIEW = {
  legalName: "Karnataka Silk Industries Corporation Limited",
  kannadaName: "ಕರ್ನಾಟಕ ರೇಷ್ಮೆ ಕೈಗಾರಿಕಾ ನಿಗಮ ನಿಯಮಿತ",
  shortName: "KSIC",
  entityType: "A Government of Karnataka Enterprise",
  incorporationYear: 1980,
  ancestryYear: 1912,
  corporateId: "U17111KA1980SGC003730",
  headOffice: {
    building: "3rd & 4th Floor, Public Utility Building",
    street: "M.G. Road, Mayo Hall",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    phone1: "+91 80 25586402",
    phone2: "+91 80 25586550",
    email: "info@ksicsilk.com",
    website: "https://www.ksicsilk.com",
  },
  keyUnits: [
    {
      unit: "Silk Weaving Factory",
      location: "Mananthody Road, Mysuru - 570008",
      activity: "Swiss power loom weaving, Jacquard drafting, dyeing & finishing",
      capacity: "138 calibrated looms · Over 100 years of continuous service",
    },
    {
      unit: "Silk Filature Division",
      location: "T. Narasipura, Mysuru District",
      activity: "Cocoon procurement from Karnataka farmers & multi-end raw silk reeling",
      capacity: "Primary raw silk feedstock provider ensuring 100% natural mulberry purity",
    },
    {
      unit: "Spun Silk Mills",
      location: "Channapatna, Ramanagara District",
      activity: "Processing silk waste into fine lustrous spun yarn and noil yarn",
      capacity: "Historic mill infrastructure along the state highway",
    },
  ],
  certifications: [
    {
      code: "GI-11",
      title: "Geographical Indication Registry",
      authority: "Government of India (Geographical Indications of Goods Act, 1999)",
      validity: "Valid until July 21, 2034 · Sole Registered Proprietor",
    },
    {
      code: "ISO 9001:2015",
      title: "Quality Management System",
      authority: "Certified by TÜV Rheinland",
      validity: "Standardized quality control across reeling, weaving, and distribution",
    },
    {
      code: "EMS 14001:2015",
      title: "Environmental Management System",
      authority: "Certified by TÜV Rheinland",
      validity: "Eco-friendly natural degumming and safe water management",
    },
    {
      code: "CM Ratna Award",
      title: "Chief Minister's Ratna Award",
      authority: "Government of Karnataka",
      validity: "Conferred for excellence in state enterprise marketing and brand preservation",
    },
  ],
  keyMetrics: [
    { value: "1912", label: "YEAR ESTABLISHED", kannadaLabel: "ಸ್ಥಾಪನೆ ವರ್ಷ", detail: "By Maharaja Sri Nalvadi Krishnaraja Wadiyar", kannadaDetail: "ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರಿಂದ" },
    { value: "138", label: "SWISS POWER LOOMS", kannadaLabel: "ಸ್ವಿಸ್ ಪವರ್ ಲೂಮ್‌ಗಳು", detail: "Calibrated precision weaving machinery", kannadaDetail: "ನಿಖರವಾದ ಯಾಂತ್ರಿಕ ನೇಯ್ಗೆ ವ್ಯವಸ್ಥೆ" },
    { value: "100%", label: "PURE NATURAL SILK", kannadaLabel: "ಶುದ್ಧ ನೈಸರ್ಗಿಕ ರೇಷ್ಮೆ", detail: "Warp and weft mulberry filament guarantee", kannadaDetail: "100% ಶುದ್ಧ ಮಲ್ಬರಿ ರೇಷ್ಮೆ ಭರವಸೆ" },
    { value: "0.65%", label: "24K GOLD ZARI", kannadaLabel: "24K ಬಂಗಾರದ ಜರಿ", detail: "Electroplated over 65% pure silver ribbon", kannadaDetail: "65% ಬೆಳ್ಳಿ ಮೇಲೆ ಚಿನ್ನದ ಲೇಪನ" },
  ],
  mandate: "To protect and advance the centuries-old art of Mysore Silk weaving, provide guaranteed remunerative demand for Karnataka's sericulture farmers, maintain uncompromising zero-adulteration standards in pure silk and precious zari, and represent the dignity of Karnataka craftsmanship globally.",
};
