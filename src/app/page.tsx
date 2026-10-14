import React from "react";
import { Hero } from "@/components/home/Hero";
import { JourneyOfSilkSection } from "@/components/home/JourneyOfSilkSection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { FactorySection } from "@/components/home/FactorySection";
import { CollectionSection } from "@/components/home/CollectionSection";
import { RoyalZariVerificationLab } from "@/components/home/RoyalZariVerificationLab";

export default function HomePage() {
  return (
    <>
      {/* 01 HERO */}
      <Hero />

      {/* 02 THE JOURNEY OF SILK */}
      <JourneyOfSilkSection />

      {/* 03 COLLECTION */}
      <CollectionSection />

      {/* 04 FACTORY */}
      <FactorySection />

      {/* 05 ROYAL ZARI AUTHENTICITY & GI TAG VERIFICATION LAB */}
      <RoyalZariVerificationLab />

      {/* 06 TIMELINE */}
      <TimelineSection />
    </>
  );
}
