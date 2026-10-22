import React from "react";
import {
  GandaberundaArt,
  type GandaberundaSize,
  type GandaberundaVariant,
} from "./GandaberundaArt";

type Placement = "end" | "start" | "center";

type Props = {
  placement?: Placement;
  size?: GandaberundaSize;
  /** Kept for callers; ink uses outline, light uses dotted. */
  tone?: "ink" | "light";
  variant?: GandaberundaVariant;
  className?: string;
};

/**
 * Subtle Gandaberunda design accent - outline / dotted art only
 * (never the photographic gold seal).
 */
export function GandaberundaMark({
  placement = "end",
  size = "md",
  tone = "ink",
  variant,
  className,
}: Props) {
  return (
    <GandaberundaArt
      variant={variant ?? (tone === "light" ? "dotted" : "outline")}
      role="watermark"
      size={size}
      placement={placement}
      className={className}
    />
  );
}

export {
  GANDABERUNDA_OUTLINE_SRC as GANDABERUNDA_WEAVE_SRC,
} from "./GandaberundaArt";
