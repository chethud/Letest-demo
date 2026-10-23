/**
 * Institutional practice notes supplied for the KSIC site.
 * Keep claims close to the source wording; extend this file as new snippets arrive.
 */

export const KSIC_SCALE =
  "KSIC is among India’s largest silk producers.";

export const KSIC_IN_HOUSE =
  "From start to finish, the full process is done in house; nothing is outsourced.";

export const KSIC_ZERO_WASTE =
  "Nothing from the silk goes to waste. Material left after cutting and finishing becomes by-products such as silk carpets and related goods.";

export const KSIC_WARTIME_PARACHUTE =
  "In its early days the Mysuru works also produced parachute silk for the Second World War.";

export const KSIC_INTEGRATED_WORKS = `${KSIC_SCALE} ${KSIC_IN_HOUSE} KSIC commands the gamut of silk production, from reeling cocoons to weaving pure silk fabric of various shades and designs, under one roof.`;

/** Cocoon belts named for KSIC sourcing, then reeled at T. Narasipura. */
export const KSIC_COCOON_BELTS = [
  "Ramanagara",
  "Kanakapura",
  "Kollegal",
  "Sidlaghatta",
] as const;

export const KSIC_COCOON_SOURCING = `Cocoons are sourced from the ${KSIC_COCOON_BELTS.join(", ")} belts and transported to the raw silk unit at T. Narasipura.`;

export const KSIC_RAMANAGARA_MARKET =
  "The Ramanagara cocoon market is one of Asia’s largest cocoon markets.";
