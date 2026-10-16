import React from "react";
import CollectionCatalogueClient from "@/components/collection/CollectionCatalogueClient";
import { BESTSELLERS } from "@/data/collections";

export const metadata = {
  title: "Bestsellers · The Collection | KSIC",
  description: "The most sought-after Mysore Silk sarees from Karnataka Silk Industries Corporation.",
};

export default function BestsellersPage() {
  return (
    <CollectionCatalogueClient
      products={BESTSELLERS}
      title="Best"
      titleAccent="Sellers."
    />
  );
}
