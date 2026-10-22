import React from "react";
import Image from "next/image";
import styles from "./GandaberundaArt.module.css";

export const GANDABERUNDA_OUTLINE_SRC =
  "/assets/brand/gandaberunda-outline-art.jpg";
export const GANDABERUNDA_DOTTED_SRC =
  "/assets/brand/gandaberunda-dotted-art.jpg";

export type GandaberundaVariant = "outline" | "dotted";
export type GandaberundaRole = "watermark" | "motif" | "divider" | "inline";
export type GandaberundaSize = "sm" | "md" | "lg" | "xl";

type Props = {
  variant?: GandaberundaVariant;
  role?: GandaberundaRole;
  size?: GandaberundaSize;
  placement?: "end" | "start" | "center" | "static";
  className?: string;
};

const SIZE_PX: Record<GandaberundaSize, number> = {
  sm: 96,
  md: 168,
  lg: 260,
  xl: 420,
};

/**
 * Hand-derived Gandaberunda line / dotted art for KSIC surfaces.
 * Never use the photographic gold seal here - outline and dotted only.
 */
export function GandaberundaArt({
  variant = "outline",
  role = "watermark",
  size = "md",
  placement = "end",
  className,
}: Props) {
  const px = SIZE_PX[size];
  const src =
    variant === "dotted" ? GANDABERUNDA_DOTTED_SRC : GANDABERUNDA_OUTLINE_SRC;

  return (
    <div
      className={[
        styles.art,
        styles[`role_${role}`],
        styles[`size_${size}`],
        placement !== "static" ? styles[`place_${placement}`] : styles.place_static,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        width={Math.round(px * 1.6)}
        height={px}
        className={styles.img}
        sizes={`${Math.round(px * 1.6)}px`}
      />
    </div>
  );
}
