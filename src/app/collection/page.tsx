import React from "react";
import CollectionShop from "@/components/collection/CollectionShop";
import { KSIC_PRODUCTS } from "@/data/collections";

export const metadata = {
  title: "The Collection · Curated Master Catalogue | KSIC",
  description:
    "Official catalogue from Karnataka Silk Industries Corporation. Authentic Mysore Silk Sarees, Zari Crepe, Temple Border, and ceremonial weaves.",
};

export default function CollectionPage() {
  return (
    <CollectionShop
      products={KSIC_PRODUCTS}
      title="The"
      titleAccent="Collection."
      breadcrumbLabel="Collections"
      description="Browse the official KSIC master catalogue of authentic Mysore Silk sarees — pure mulberry silk, certified zari, and heritage weaves."
      heroImage="/assets/heritage/hero-new-arrivals.png"
      heroAlt="Crimson Mysore silk with gold zari"
      readCategoryFromUrl
    />
  );
}
