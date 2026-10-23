/**
 * Quality checkpoints along the KSIC silk process, as supplied.
 */

export type QualityCheckpoint = {
  stage: string;
  check: string;
  detail: string;
};

export const QUALITY_CHECKPOINTS: QualityCheckpoint[] = [
  {
    stage: "Purchase · Ramanagara",
    check: "Colour and size",
    detail: "Cocoons assessed at Asia’s largest cocoon market before purchase.",
  },
  {
    stage: "After reeling",
    check: "Tensile strength",
    detail: "Yarn checked for tensile strength after filature reeling.",
  },
  {
    stage: "After weaving",
    check: "Cloth integrity",
    detail: "Loose ends, discoloration, tears, and similar faults reviewed.",
  },
  {
    stage: "After dyeing · final",
    check: "Full product review",
    detail: "Finished saree reviewed as a whole before it moves on.",
  },
];
