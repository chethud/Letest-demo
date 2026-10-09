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
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      aria-label="Official Karnataka Mysore Silk Heritage"
    >
      {/* 1. Full-Bleed Responsive Background Images (Turmeric Gold Mysore Silk Saree Overlooking Mysore Palace) */}
      <div className={styles.heroBackground} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {/* Desktop Landscape (16:9) */}
        <Image
          src="/assets/heritage/ksic-royal-turmeric-hero.jpg"
          alt="Royal turmeric gold pure crepe Mysore Silk saree with authentic gold zari paisley border draped on travertine stone plinth overlooking Mysore Palace"
          fill
          priority
          sizes="(max-width: 768px) 1px, 100vw"
          className={styles.heroBackgroundImageDesktop}
        />
        {/* Dedicated Mobile Portrait (9:16) - Tailored for smartphones to showcase the pure silk saree, 24k gold zari, and jasmine blossoms */}
        <Image
          src="/assets/heritage/ksic-royal-turmeric-hero-mobile.jpg"
          alt="Royal turmeric gold pure crepe Mysore Silk saree with authentic gold zari paisley border draped on travertine stone plinth overlooking Mysore Palace"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1px"
          className={styles.heroBackgroundImageMobile}
        />
        {/* Ambient luminous scrim behind left editorial text for pristine legibility */}
        <div className={styles.heroTextBackdropScrim} aria-hidden="true" />
        {/* Soft bottom transition into parchment section */}
        <div className={styles.bottomTransitionFade} aria-hidden="true" />
      </div>

      {/* 2. Left Edge Traditional Indian Filigree Motif */}
      <aside className={styles.leftMarginOrnament} aria-hidden="true">
        {/* Top Paisley Motif */}
        <div className={styles.paisleyMotifWrap}>
          <svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 2 C20 12 26 22 26 32 C26 42 21 50 14 50 C7 50 2 42 2 32 C2 22 8 12 14 2 Z"
              stroke="#A88B58"
              strokeWidth="1.1"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M14 9 C18 16 21 24 21 32 C21 38 18 43 14 43 C10 43 7 38 7 32 C7 24 10 16 14 9 Z"
              stroke="#A88B58"
              strokeWidth="0.8"
              fill="none"
              opacity="0.65"
            />
            <circle cx="14" cy="32" r="2.5" fill="#A88B58" opacity="0.85" />
            <circle cx="14" cy="2" r="1.5" fill="#A88B58" />
            <circle cx="14" cy="50" r="1.5" fill="#A88B58" />
          </svg>
        </div>

        {/* Vertical Dotted Hairline with delicate node rings */}
        <div className={styles.filigreeConnector}>
          <span className={styles.filigreeDot} />
          <span className={styles.filigreeDot} />
          <span className={styles.filigreeDot} />
        </div>

        {/* Bottom Paisley Motif */}
        <div className={styles.paisleyMotifWrap}>
          <svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 50 C20 40 26 30 26 20 C26 10 21 2 14 2 C7 2 2 10 2 20 C2 30 8 40 14 50 Z"
              stroke="#A88B58"
              strokeWidth="1.1"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M14 43 C18 36 21 28 21 20 C21 14 18 9 14 9 C10 9 7 14 7 20 C7 28 10 36 14 43 Z"
              stroke="#A88B58"
              strokeWidth="0.8"
              fill="none"
              opacity="0.65"
            />
            <circle cx="14" cy="20" r="2.5" fill="#A88B58" opacity="0.85" />
            <circle cx="14" cy="50" r="1.5" fill="#A88B58" />
            <circle cx="14" cy="2" r="1.5" fill="#A88B58" />
          </svg>
        </div>

        {/* Vertical Accent Needle Node */}
        <div className={styles.filigreeDottedLine} />
      </aside>

      {/* 3. Bottom Pinned "SCROLL TO EXPLORE" Prompt (Separated at bottom, zero text overlap) */}
      <div className={styles.scrollExploreBlock} aria-hidden="true">
        <span className={styles.scrollExploreLine}>SCROLL</span>
        <span className={styles.scrollExploreLine}>TO EXPLORE</span>
        <div className={styles.scrollNeedleWrap}>
          <span className={styles.needleNodeCircle} />
          <span className={styles.needleLine} />
          <span className={styles.needleNodeCircle} />
        </div>
      </div>

      {/* 3. Main Hero Editorial Content Overlay */}
      <div className={styles.heroInnerContainer}>
        {/* Left Editorial Narrative Block */}
        <div className={styles.leftEditorialBlock}>
          {/* Top Heritage Kicker */}
          <div className={styles.kickerGroup}>
            <span className={styles.kickerEnglish}>
              {lang === "kn" ? "ರಾಜಪರಂಪರೆ · 1912 ರಿಂದ" : t.heroKickerEn}
            </span>
            <div className={styles.kickerUnderline} aria-hidden="true" />
            <span className={styles.kickerKannada}>{t.heroKickerKn}</span>
          </div>

          {/* Stately High-Fashion Display Headline: MYSORE SILK */}
          <h1 className={styles.editorialTitle}>
            {lang === "kn" ? (
              <span className={styles.titleLine}>ಮೈಸೂರು ಸಿಲ್ಕ್</span>
            ) : (
              <>
                <span className={styles.titleLine}>MYSORE</span>
                <span className={styles.titleLine}>SILK</span>
              </>
            )}
          </h1>

          {/* 3-Beat Poetic Editorial Stanza Matching Reference Mockup */}
          <div className={styles.poeticStanza}>
            <p className={styles.poeticLine}>{lang === "kn" ? "ಶುದ್ಧ ರೇಷ್ಮೆ." : "Pure silk."}</p>
            <p className={styles.poeticLine}>{lang === "kn" ? "ಮೈಸೂರಿನಲ್ಲಿ ನೇಯ್ದದ್ದು." : "Woven in Mysuru."}</p>
            <p className={styles.poeticLine}>{lang === "kn" ? "ಪೀಳಿಗೆಗಳಿಂದ." : "For generations."}</p>
          </div>

          {/* Understated Quiet-Luxury Action Link With Full Underline */}
          <div className={styles.actionContainer}>
            <Link href="/collection" className={styles.exploreLink}>
              <span className={styles.exploreText}>
                {lang === "kn" ? "ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ" : "EXPLORE COLLECTION"}
              </span>
              <ArrowRight size={15} className={styles.exploreArrow} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
