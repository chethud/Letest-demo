import React from "react";
import CollectionShop from "@/components/collection/CollectionShop";
import { BESTSELLERS } from "@/data/collections";

export const metadata = {
  title: "Bestsellers · The Collection | KSIC",
  description: "The most sought-after Mysore Silk sarees from Karnataka Silk Industries Corporation.",
};

export default function BestsellersPage() {
  return (
    <CollectionShop
      products={BESTSELLERS}
      title="Best"
      titleAccent="Sellers."
      breadcrumbLabel="Bestsellers"
      description="Explore our most loved Mysore Silk sarees — signature weaves favoured by generations for ceremony, festivity, and everyday elegance."
      heroImage="/assets/heritage/hero-new-arrivals.png"
      heroAlt="Crimson Mysore silk with gold zari"
    />
  );
}
