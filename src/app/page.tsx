import React from "react";
import { Hero } from "@/components/home/Hero";
import { HeritageStrip } from "@/components/home/HeritageStrip";
import { FactorySection } from "@/components/home/FactorySection";
import { CollectionSection } from "@/components/home/CollectionSection";
import { RoyalZariVerificationLab } from "@/components/home/RoyalZariVerificationLab";
import { GenerationsHeritage } from "@/components/layout/GenerationsHeritage";

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

      {/* 05 ROYAL ZARI AUTHENTICITY & GI TAG VERIFICATION LAB */}
      <RoyalZariVerificationLab />

      <GenerationsHeritage />
    </>
  );
}
