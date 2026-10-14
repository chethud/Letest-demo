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
      {/* Full-bleed still life: rose silk, jasmine, and a lotus diya */}
      <div className={styles.heroBackground} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Image
          src="/assets/heritage/rose-silk-saree-jasmine.png"
          alt="Rose Mysore silk saree with a gold zari border, jasmine blossoms, and a lotus diya in warm ivory light"
          fill
          priority
          sizes="(max-width: 900px) 1px, 100vw"
          className={styles.heroBackgroundImageDesktop}
        />
        <Image
          src="/assets/heritage/rose-silk-saree-jasmine.png"
          alt="Rose Mysore silk saree with a gold zari border, jasmine blossoms, and a lotus diya in warm ivory light"
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

          <p className={styles.supportLine}>{t.heroPoetic2}</p>

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
          <p className={styles.mobileSupport}>{t.heroPoetic2}</p>
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
