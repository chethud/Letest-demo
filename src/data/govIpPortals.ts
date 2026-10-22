export type GovIpPortalLink = {
  id: string;
  label: string;
  labelKn: string;
  href: string;
};

/** Official Government of India IP public-search portals for consumers. */
export const GOV_IP_PORTALS: GovIpPortalLink[] = [
  {
    id: "gi-11",
    label: "GI Tag #11",
    labelKn: "ಜಿಐ ಟ್ಯಾಗ್ #೧೧",
    href: "https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/11",
  },
];

export const MYSORE_SILK_GI_DETAILS_URL =
  "https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/11";

/** Snapshot of GI Application #11 as published on the IP India public search. */
export const MYSORE_SILK_GI_APPLICATION = {
  title: "Application Details",
  geographicalIndication: "Mysore Silk",
  status: "Registered",
  fields: [
    { label: "Application Number", value: "11" },
    { label: "Geographical Indications", value: "Mysore Silk" },
    { label: "Status", value: "Registered" },
    {
      label: "Applicant Name",
      value: "Karnataka Silk Industries Corporation Limited",
    },
    {
      label: "Applicant Address",
      value:
        "Karnataka Silk Industries Corporation Limited, (A Government of Karnataka Enterprise), III & IV Floor, Public Utility Building, M.G. Road, Bangalore - 560 001, Karnataka, India.",
    },
    { label: "Date of Filing", value: "22-07-2004" },
    { label: "Class", value: "23, 24 & 25" },
    { label: "Goods", value: "Handicraft" },
    { label: "Geographical Area", value: "Karnataka" },
    { label: "Priority Country", value: "India" },
    { label: "Journal Number", value: "3" },
    { label: "Availability Date", value: "22-11-2004" },
    { label: "Certificate Number", value: "14" },
    { label: "Certificate Date", value: "28-11-2005" },
    { label: "Registration Valid Upto", value: "21-07-2034" },
  ],
} as const;

/**
 * Zari metal-testing claim recorded in the Mysore Silk GI uniqueness statement:
 * 65% silver & 0.65% gold lace zari tested at National Test House, Chennai.
 */
export const MYSORE_SILK_NTH_ZARI_TEST = {
  title: "Zari Metal Testing",
  laboratory: "National Test House, Chennai",
  fields: [
    { label: "Testing body", value: "National Test House (NTH), Chennai" },
    {
      label: "Authority",
      value: "Government of India laboratory for materials testing and certification",
    },
    { label: "Material tested", value: "Gold and silver lace zari (thread / embroidery metal)" },
    { label: "Silver content", value: "65% pure silver" },
    { label: "Gold content", value: "0.65% gold" },
    {
      label: "Test method family",
      value:
        "Determination of gold and silver in gold and silver thread and embroidery materials (IS 9925 series)",
    },
    {
      label: "Recorded in",
      value:
        "Mysore Silk Geographical Indication uniqueness statement filed by Karnataka Silk Industries Corporation Limited",
    },
  ],
} as const;
