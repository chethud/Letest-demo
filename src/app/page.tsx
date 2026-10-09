import React from "react";
import { Hero } from "@/components/home/Hero";
import { HeritageSection } from "@/components/home/HeritageSection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { CraftSection } from "@/components/home/CraftSection";
import { FactorySection } from "@/components/home/FactorySection";
import { CollectionSection } from "@/components/home/CollectionSection";
import { AuthenticitySection } from "@/components/home/AuthenticitySection";
import { KarnatakaMapSection } from "@/components/home/KarnatakaMapSection";
import { InstitutionSection } from "@/components/home/InstitutionSection";
import { ShowroomsSection } from "@/components/home/ShowroomsSection";

export default function HomePage() {
  return (
    <>
      {/* 01 HERO */}
      <Hero />

      {/* 02 HERITAGE */}
      <HeritageSection />

      {/* 03 TIMELINE */}
      <TimelineSection />

      {/* 04 CRAFT */}
      <CraftSection />

      {/* 05 FACTORY */}
      <FactorySection />

      {/* 06 COLLECTION */}
      <CollectionSection />

      {/* 07 AUTHENTICITY */}
      <AuthenticitySection />

      {/* 08 KARNATAKA GEOGRAPHICAL ROOTS */}
      <KarnatakaMapSection />

      {/* 09 INSTITUTION */}
      <InstitutionSection />

      {/* 10 STORES */}
      <ShowroomsSection />
    </>
  );
}
