"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";
import { useLanguage } from "@/context/LanguageContext";

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section
      id="hero-section"
      className={styles.heroSection}
      style={{ position: "relative", overflow: "hidden" }}
      aria-label="Official Karnataka Mysore Silk Heritage"
    >
      {/* Full-bleed still: ivory silk saree with a red and gold zari border */}
      <div className={styles.heroBackground} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Image
          src="/assets/heritage/hero-saree.png"
          alt="Ivory Mysore silk saree with a deep red and gold zari border, draped on stone in warm light"
          fill
          priority
          sizes="(max-width: 900px) 1px, 100vw"
          className={styles.heroBackgroundImageDesktop}
        />
        <Image
          src="/assets/heritage/hero-saree.png"
          alt="Ivory Mysore silk saree with a deep red and gold zari border, draped on stone in warm light"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 1px"
          className={styles.heroBackgroundImageMobile}
        />
        {/* Ambient luminous scrim behind left editorial text for pristine legibility */}
        <div className={styles.heroTextBackdropScrim} aria-hidden="true" />
        {/* Soft bottom transition into parchment section */}
        <div className={styles.bottomTransitionFade} aria-hidden="true" />
      </div>

      <div className={styles.gandaMark}>
        <Image
          src="/assets/brand/ganda-berunda.png"
          alt="Ganda Berunda, the two-headed royal bird of Mysore"
          width={1024}
          height={1024}
          className={styles.gandaEmblem}
        />
      </div>

      {/* 3. Main Hero Editorial Content Overlay */}
      <div className={styles.heroInnerContainer}>
        {/* Left Editorial Narrative Block */}
        <div className={styles.leftEditorialBlock}>
          {/* Top Heritage Kicker */}
          <div className={styles.kickerGroup}>
            <span className={styles.kickerEnglish}>{t.heroKickerEn}</span>
          </div>

          <h1 className={styles.editorialTitle}>
            <span className={styles.titleLine}>{t.heroTitleMain}</span>
            <span className={styles.titleLine}>{t.heroPoetic1}</span>
          </h1>

          <div className={styles.actionContainer}>
            <Link href="/collection" className={styles.exploreLink}>
              <span className={styles.exploreText}>{t.heroExploreBtn}</span>
              <ArrowRight size={15} className={styles.exploreArrow} />
            </Link>
          </div>
        </div>

        <div className={styles.mobileCampaign}>
          <p className={styles.mobileEyebrow}>{t.heroKickerEn}</p>
          <h1 className={styles.mobileHeadline}>
            <span>{t.heroTitleMain}</span>
            <span>{t.heroPoetic1}</span>
          </h1>
          <Link href="/collection" className={styles.mobileCta}>
            <span>{t.heroExploreBtn}</span>
            <ArrowRight size={14} className={styles.mobileCtaArrow} />
          </Link>
        </div>
      </div>

      <div className={styles.mobileScroll} aria-hidden="true">
        <span className={styles.mobileScrollLine} />
        <span className={styles.mobileScrollDot} />
        <span className={styles.mobileScrollLabel}>
          {lang === "kn" ? "ರೇಷ್ಮೆಯ ಕಲೆ" : "Art of Silk"}
        </span>
      </div>
    </section>
  );
};
