import React from "react";
import { Hero } from "@/components/home/Hero";
import { HeritageStrip } from "@/components/home/HeritageStrip";
import { FactorySection } from "@/components/home/FactorySection";
import { GenerationsHeritage } from "@/components/layout/GenerationsHeritage";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeritageStrip />
      <FactorySection />
      <GenerationsHeritage />
      <TestimonialsSection />
    </>
  );
}
