"use client";

import { KSICProduct } from "@/data/collections";
import CollectionShop from "./CollectionShop";

type NewArrivalsShopProps = {
  products: KSICProduct[];
};

export default function NewArrivalsShop({ products }: NewArrivalsShopProps) {
  return (
    <CollectionShop
      products={products}
      title="New"
      titleAccent="Arrivals."
      breadcrumbLabel="New Arrivals"
      description="Discover our latest collection of authentic Mysore Silk sarees, where timeless heritage meets contemporary elegance."
      heroImage="/assets/heritage/hero-new-arrivals.png"
      heroAlt="Crimson Mysore silk with gold zari for new arrivals"
    />
  );
}
