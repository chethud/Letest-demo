"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./HeritageSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export const HeritageSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={`section-spacing ${styles.heritageSection}`} id="heritage" aria-label="KSIC Heritage">
      <div className="container-institutional">
        <div className={styles.heritageGrid}>
          {/* Left: Archival Frame */}
          <div className={`${styles.archivalFrame} reveal-scale`}>
            <div className={styles.archivalImageWrap}>
              <Image
                src="/assets/heritage/nalvadi-krishnaraja-wadiyar.jpg"
                alt="Sri Nalvadi Krishnaraja Wadiyar, Maharaja of Mysore, founder of Mysore Silk Weaving Factory in 1912"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                className={styles.archivalImage}
              />
            </div>
            <div className={styles.archivalCaption}>
              <span>{t.heritageFounderLabel}</span>
              <strong>{t.heritageFounderCity}</strong>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className={`${styles.contentCol} reveal-up`}>
            <span className="editorial-label">{t.heritageKicker}</span>
            <div className={styles.yearDisplay}>1912</div>
            <h2 className={styles.headline}>
              {t.heritageTitle}
            </h2>
            <p className={styles.paragraph}>
              {t.heritageText1}
            </p>
            <p className={styles.paragraphHighlight}>
              &ldquo;{t.heritageQuote}&rdquo;
            </p>

            <div className={styles.actionsRow}>
              <Link href="/heritage" className="action-editorial action-editorial-burgundy">
                <span>{t.heritageExploreBtn}</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/heritage#timeline" className="action-link">
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
