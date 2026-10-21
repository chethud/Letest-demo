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
