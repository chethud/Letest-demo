import React from "react";
import NewArrivalsShop from "@/components/collection/NewArrivalsShop";
import { ShopSubnav } from "@/components/shop/ShopSubnav";
import { NEW_ARRIVALS } from "@/data/collections";
import styles from "../shop-segment.module.css";

export const metadata = {
  title: "New Arrivals · The Collection | KSIC",
  description: "Newly woven Mysore Silk articles currently in production at the KSIC weaving factory.",
};

export default function NewArrivalsPage() {
  return (
    <div className={styles.shell}>
      <ShopSubnav activeHref="/new-arrivals" />
      <NewArrivalsShop products={NEW_ARRIVALS} omitHeaderOffset />
    </div>
  );
}
