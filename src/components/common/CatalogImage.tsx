"use client";

import React from "react";
import Image, { type ImageProps } from "next/image";

type CatalogImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/** Supports local asset paths and demo data-URL uploads from admin CMS. */
export function CatalogImage({ src, alt, unoptimized, ...rest }: CatalogImageProps) {
  const uploaded = src.startsWith("data:") || src.startsWith("blob:");
  return <Image src={src} alt={alt} {...rest} unoptimized={uploaded || Boolean(unoptimized)} />;
}
