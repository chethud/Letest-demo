import React, { Suspense } from "react";
import CollectionShop from "@/components/collection/CollectionShop";
import { KSIC_PRODUCTS } from "@/data/collections";
import styles from "../shop-segment.module.css";

export const metadata = {
  title: "Shop · Mysore Silk Catalogue | KSIC",
  description:
    "Shop authentic KSIC Mysore Silk sarees. Filter by category, colour, and bestsellers. Newest weaves appear first.",
};

export default function CollectionPage() {
  return (
    <div className={styles.shell}>
      <Suspense fallback={null}>
        <CollectionShop products={KSIC_PRODUCTS} omitHeaderOffset />
      </Suspense>
    </div>
  );
}
