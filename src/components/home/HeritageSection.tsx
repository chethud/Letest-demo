"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, History, Sparkles } from "lucide-react";
import styles from "./HeritageSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export const HeritageSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const isKn = lang === "kn";

  return (
    <section
      className={styles.heritageSection}
      id="heritage"
      aria-label="KSIC Royal Heritage — The Beginning of a Living Legacy"
    >
      <div className="container-institutional">
        <div className={styles.heritageGrid}>
          {/* Left: Museum Archival Frame */}
          <div className={`${styles.archivalFrame} reveal-scale`}>
            <div className={styles.archivalImageWrap}>
              <Image
                src="/assets/heritage/nalvadi-krishnaraja-wadiyar.jpg"
                alt="Sri Nalvadi Krishnaraja Wadiyar, Maharaja of Mysore, founder of Mysore Silk Weaving Factory in 1912"
                fill
                sizes="(max-width: 960px) 100vw, 45vw"
                className={styles.archivalImage}
                priority={false}
              />
              <div className={styles.founderSealBadge}>
                <Award size={13} />
                <span>{isKn ? "ಸಂಸ್ಥಾಪಕರು · ೧೯೧೨" : "FOUNDER · 1912"}</span>
              </div>
            </div>

            <div className={styles.archivalCaption}>
              <span>{t.heritageFounderLabel}</span>
              <strong>{t.heritageFounderCity}</strong>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className={`${styles.contentCol} reveal-up`}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowRule} />
              <span className={styles.eyebrowText}>{t.heritageKicker}</span>
            </div>

            <div className={styles.yearDisplayRow}>
              <div className={styles.yearDisplay}>1912</div>
              <div className={styles.yearSubtitle}>
                {isKn ? "ರಾಜಮನೆತನದ ಸಾಂಸ್ಥಿಕ ನೇಯ್ಗೆ" : "ROYAL COURT PATRONAGE"}
              </div>
            </div>

            <h2 className={styles.headline}>
              {t.heritageTitle}
            </h2>

            <p className={styles.paragraph}>
              {t.heritageText1}
            </p>

            <div className={styles.quoteBox}>
              <p className={styles.quoteText}>
                &ldquo;{t.heritageQuote}&rdquo;
              </p>
            </div>

            {/* Provenance Highlights Row */}
            <div className={styles.highlightsRow}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>10</span>
                <span className={styles.highlightLabel}>
                  {isKn ? "ಸ್ವಿಸ್ ಯಾಂತ್ರಿಕ ಲೂಮ್‌ಗಳು" : "SWISS POWER LOOMS"}
                </span>
              </div>

              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>100+</span>
                <span className={styles.highlightLabel}>
                  {isKn ? "ನಿರಂತರ ವರ್ಷಗಳ ಪರಂಪರೆ" : "YEARS OF SOVEREIGN WEAVE"}
                </span>
              </div>

              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>GI-11</span>
                <span className={styles.highlightLabel}>
                  {isKn ? "ಭಾರತ ಸರ್ಕಾರ ರಕ್ಷಿತ ಮೂಲ" : "GOVT. PROTECTED ORIGIN"}
                </span>
              </div>
            </div>

            {/* Curved Action Buttons */}
            <div className={styles.actionsRow}>
              <Link href="/heritage" className={styles.curvedBurgundyBtn}>
                <span>{t.heritageExploreBtn}</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/heritage#timeline" className={styles.curvedOutlineBtn}>
                <span>{t.heritageTimelineBtn}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

