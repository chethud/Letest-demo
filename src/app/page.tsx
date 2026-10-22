import React from "react";
import { Hero } from "@/components/home/Hero";
import { HeritageStrip } from "@/components/home/HeritageStrip";
import { CollectionSection } from "@/components/home/CollectionSection";
import { FactorySection } from "@/components/home/FactorySection";
import { MysoreSilkUniqueSection } from "@/components/home/MysoreSilkUniqueSection";
import { GenerationsHeritage } from "@/components/layout/GenerationsHeritage";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeritageStrip />
      <CollectionSection />
      <FactorySection />
      <MysoreSilkUniqueSection />
      <GenerationsHeritage />
      <TestimonialsSection />
    </>
  );
}
