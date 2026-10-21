import React from "react";
import NewArrivalsShop from "@/components/collection/NewArrivalsShop";
import { NEW_ARRIVALS } from "@/data/collections";

export const metadata = {
  title: "New Arrivals · The Collection | KSIC",
  description: "Newly woven Mysore Silk articles currently in production at the KSIC weaving factory.",
};

export default function NewArrivalsPage() {
  return <NewArrivalsShop products={NEW_ARRIVALS} />;
}
