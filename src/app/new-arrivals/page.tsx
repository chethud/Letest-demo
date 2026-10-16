import React from "react";
import CollectionCatalogueClient from "@/components/collection/CollectionCatalogueClient";
import { NEW_ARRIVALS } from "@/data/collections";

export const metadata = {
  title: "New Arrivals · The Collection | KSIC",
  description: "Newly woven Mysore Silk articles currently in production at the KSIC weaving factory.",
};

export default function NewArrivalsPage() {
  return (
    <CollectionCatalogueClient
      products={NEW_ARRIVALS}
      title="New"
      titleAccent="Arrivals."
    />
  );
}
