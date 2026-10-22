import React from "react";
import CollectionShop from "@/components/collection/CollectionShop";
import { ShopSubnav } from "@/components/shop/ShopSubnav";
import { KSIC_PRODUCTS } from "@/data/collections";
import styles from "../shop-segment.module.css";

export const metadata = {
  title: "The Collection · Curated Master Catalogue | KSIC",
  description:
    "Official catalogue from Karnataka Silk Industries Corporation. Authentic Mysore Silk Sarees, Zari Crepe, Temple Border, and ceremonial weaves.",
};

export default function CollectionPage() {
  return (
    <div className={styles.shell}>
      <ShopSubnav activeHref="/collection" />
      <CollectionShop
        products={KSIC_PRODUCTS}
        title="The"
        titleAccent="Collection."
        breadcrumbLabel="Collections"
        description="Browse the official KSIC master catalogue of authentic Mysore Silk sarees: pure mulberry silk, certified zari, and heritage weaves."
        heroImage="/assets/heritage/hero-new-arrivals.png"
        heroAlt="Crimson Mysore silk with gold zari"
        readCategoryFromUrl
        omitHeaderOffset
      />
    </div>
  );
}
