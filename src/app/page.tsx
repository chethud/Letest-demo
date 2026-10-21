import React from "react";
import { Hero } from "@/components/home/Hero";
import { HeritageStrip } from "@/components/home/HeritageStrip";
import { FactorySection } from "@/components/home/FactorySection";
import { CollectionSection } from "@/components/home/CollectionSection";
import { GenerationsHeritage } from "@/components/layout/GenerationsHeritage";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      {/* 01 HERO */}
      <Hero />
      <HeritageStrip />

      {/* 03 COLLECTION */}
      <CollectionSection />

      {/* 04 FACTORY */}
      <FactorySection />

      <GenerationsHeritage />
      <TestimonialsSection />
    </>
  );
}
