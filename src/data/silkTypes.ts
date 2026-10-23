/**
 * Historical notes on mulberry silk varieties: names, colour, and background only.
 * Do not claim which lines KSIC currently combines on the loom unless supplied later.
 */

export type SilkVarietyId = "multivoltine" | "bivoltine";

export interface SilkVariety {
  id: SilkVarietyId;
  label: string;
  era: string;
  colour: string;
  summary: string;
  details: string;
}

export const SILK_VARIETIES: SilkVariety[] = [
  {
    id: "multivoltine",
    label: "Multivoltine",
    era: "Traditional · classic",
    colour: "Yellow",
    summary: "The older, traditional line of Karnataka sericulture.",
    details:
      "Multivoltine silk is the classic regional line, historically the traditional way of rearing. Its natural colour is yellow.",
  },
  {
    id: "bivoltine",
    label: "Bivoltine",
    era: "Later breeding · higher yield",
    colour: "White",
    summary: "A later silkworm line bred for yield and resilience.",
    details:
      "Bivoltine silk comes from a cross between the Chinese male silkworm and the Indian female silkworm. It is associated with higher yield, greater resistance, and easier scaling. Its natural colour is white.",
  },
];

export const SILK_VARIETY_INTRO =
  "Two names recur in the history of Karnataka mulberry silk, multivoltine and bivoltine, each with its own background and natural colour.";
