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
      activity: "Weaving factory named in the KSIC note. Weaving is described on dobby and jacquard looms; the note also records electric looms and e-jacquard machinery.",
      capacity: "Operating counts are not published on this page.",
    },
    {
      unit: "Silk Filature Division",
      location: "T. Narasipura, Mysuru District",
      activity:
        "Raw silk unit. Cocoons from the Ramanagara, Kanakapura, Kollegal, and Sidlaghatta belts are brought here to be reeled. Ramanagara’s cocoon market is one of Asia’s largest.",
      capacity: "Market purchase from the named belts, as supplied.",
    },
    {
      unit: "Silk Weaving Unit",
      location: "Channapatna",
      activity: "Named in the KSIC note as a silk weaving unit. No further process is added here.",
      capacity: "Operating counts are not published on this page.",
    },
  ],
  certifications: [
    {
      code: "GI-11",
      title: "Geographical Indication Registry",
      authority: "Government of India (Geographical Indications of Goods Act, 1999)",
      validity: "The note gives November 2005 and number GIR-11. Another supplied account refers to 2017. The date is not published as settled. ISO designations in the note are not published here.",
    },
  ],
  keyMetrics: [
    { value: "1912", label: "YEAR ESTABLISHED", kannadaLabel: "ಸ್ಥಾಪನೆ ವರ್ಷ", detail: "By Maharaja Sri Nalvadi Krishnaraja Wadiyar", kannadaDetail: "ಶ್ರೀ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರಿಂದ" },
    { value: "1980", label: "KSIC INCORPORATED", kannadaLabel: "ಕೆ.ಎಸ್.ಐ.ಸಿ ಸ್ಥಾಪನೆ", detail: "Companies Act. The note also mentions World Bank-supported modernisation.", kannadaDetail: "ಕಂಪನಿ ಕಾಯ್ದೆ. ಟಿಪ್ಪಣಿ ವಿಶ್ವ ಬ್ಯಾಂಕ್ ಬೆಂಬಲವನ್ನು ಸಹ ಉಲ್ಲೇಖಿಸುತ್ತದೆ." },
    { value: "65%", label: "PURE SILVER IN ZARI", kannadaLabel: "ಜರಿಯಲ್ಲಿ ಶುದ್ಧ ಬೆಳ್ಳಿ", detail: "65% pure silver, with 0.65% gold.", kannadaDetail: "ಖಾತೆಯಲ್ಲಿ 0.65% ಚಿನ್ನದೊಂದಿಗೆ ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿದೆ." },
    { value: "0.65%", label: "GOLD IN THE ZARI", kannadaLabel: "ಜರಿಯಲ್ಲಿ ಚಿನ್ನ", detail: "Not extended into a 24-carat electroplate or a no-tarnish guarantee.", kannadaDetail: "24 ಕ್ಯಾರೆಟ್ ಲೇಪನ ಅಥವಾ ಬಣ್ಣ ಕೆಡದ ಖಾತರಿಯಾಗಿ ವಿಸ್ತರಿಸಲಾಗಿಲ್ಲ." },
  ],
  mandate: "To protect and advance the centuries-old art of Mysore Silk weaving, provide guaranteed remunerative demand for Karnataka's sericulture farmers, maintain uncompromising zero-adulteration standards in pure silk and precious zari, and represent the dignity of Karnataka craftsmanship globally.",
};

export type BoardDirector = {
  name: string;
  role: string;
  addressLines: string[];
  /** Optional official portrait path under /public. Circular crop via DirectorAvatar. */
  imageSrc?: string;
};

/** Official board listing for the About Us page. */
export const BOARD_OF_DIRECTORS: BoardDirector[] = [
  {
    name: "Smt. Kaneez Fatima, M.L.A.",
    role: "Chairman, KSIC",
    addressLines: [
      "III Floor, Public Utility Building",
      "M.G. Road",
      "Bengaluru 560 001",
    ],
  },
  {
    name: "Sri Gangadhar S",
    role: "Vice Chairman, KSIC",
    addressLines: [
      "III Floor, Public Utility Building",
      "M.G. Road",
      "Bengaluru 560 001",
    ],
  },
  {
    name: "Sri Nishchith. V.D",
    role: "Managing Director, KSIC",
    addressLines: [
      "III Floor, Public Utility Building",
      "M.G. Road",
      "Bengaluru 560 001",
    ],
  },
  {
    name: "Sri. Girish, R., IAS",
    role: "Director, KSIC and Secretary to Govt., Horticulture Department",
    addressLines: [
      "M.S. Building",
      "Dr. B.R. Ambedkar Veedhi",
      "Bengaluru 560 001",
    ],
  },
  {
    name: "Sri Lingaraja. S. S., IFS",
    role: "Director, KSIC and Commissioner for Sericulture Development & Director of Sericulture",
    addressLines: [
      "M.S. Building",
      "Dr. B.R. Ambedkar Veedhi",
      "Bengaluru 560 001",
    ],
  },
  {
    name: "Sri D. Gopal Krishna. B., IAS",
    role: "Director, KSIC and Deputy Secretary to Govt. (Budget & Resources), Finance Department",
    addressLines: ["Vidhana Soudha", "Bengaluru 560 001"],
  },
  {
    name: "Sri Basavaraju. A. B., IAS",
    role: "Director, KSIC and Commissioner for Textiles & Director for Handlooms & Textiles",
    addressLines: [
      "No. 9, 4th Main Road",
      "Opposite to I.T. Park, Industrial Estate",
      "West of Chord Road, Rajajinagar",
      "Bengaluru 560 010",
    ],
  },
  {
    name: "Sri P. Shivakumar, IFS",
    role: "Director, KSIC and Member Secretary, Central Silk Board",
    addressLines: [
      "CSB Complex",
      "BTM Layout, Madiwala",
      "Bengaluru 560 068",
    ],
  },
  {
    name: "Sri Venugopal. V",
    role: "Independent Director, KSIC",
    addressLines: [
      "No. 135, 4th Floor, 12th ‘B’ Main",
      "6th Block, Rajaji Nagar",
      "Bengaluru 560 010",
    ],
  },
  {
    name: "Sri Srivathsa",
    role: "Independent Director, KSIC",
    addressLines: [
      "No. 275, 3rd ‘A’ Main, 7th Cross",
      "AMS Layout, Vidyaranyapura",
      "Bengaluru 560 097",
    ],
  },
];

export type Shareholder = {
  name: string;
  role: string;
  addressLines: string[];
  holding: string;
};

/** Official shareholding listing for KSIC. */
export const SHAREHOLDERS: Shareholder[] = [
  {
    name: "Sri Girish, R., IAS",
    role: "Shareholder of KSIC and Secretary to Govt., Horticulture Department",
    addressLines: [
      "M.S. Building",
      "Dr. B.R. Ambedkar Veedhi",
      "Bengaluru 560 001",
    ],
    holding: "One Share",
  },
  {
    name: "Sri Basavaraju. A. B., IAS",
    role: "Shareholder of KSIC and Commissioner for Textiles & Director for Handlooms & Textiles",
    addressLines: [
      "No. 9, 4th Main Road",
      "Opposite to I.T. Park, Industrial Estate",
      "West of Chord Road, Rajajinagar",
      "Bengaluru 560 010",
    ],
    holding: "One Share",
  },
  {
    name: "Smt. Shilpa Nag, C. T., IAS",
    role: "Shareholder of KSIC and Commissioner for Sericulture & Director of Sericulture",
    addressLines: [
      "M.S. Building",
      "Dr. Ambedkar Veedhi",
      "Bengaluru 560 001",
    ],
    holding: "One Share",
  },
  {
    name: "His Excellency the Governor of Karnataka",
    role: "For and on behalf of the Government of Karnataka",
    addressLines: [],
    holding: "3,60,041 Equity Shares",
  },
  {
    name: "Sri Nishchith. V.D",
    role: "Shareholder of KSIC and Managing Director, KSIC",
    addressLines: [
      "III Floor, Public Utility Building",
      "M.G. Road",
      "Bengaluru 560 001",
    ],
    holding: "One Share",
  },
  {
    name: "Sri Gopal Krishna. B., IAS",
    role: "Shareholder of KSIC and Deputy Secretary, Finance Department (Budget & Resources)",
    addressLines: ["Vidhana Soudha", "Bengaluru 560 001"],
    holding: "One Share",
  },
  {
    name: "Smt. Rajeshwari N.A",
    role: "Shareholder of KSIC and Deputy Secretary to Govt. (Silk), Horticulture Department",
    addressLines: [
      "Vikasa Soudha",
      "Dr. B.R. Ambedkar Veedhi",
      "Bengaluru 560 001",
    ],
    holding: "One Share",
  },
];
