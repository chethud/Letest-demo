"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GandaberundaArt } from "@/components/brand/GandaberundaArt";
import styles from "./HeritageSection.module.css";

export const HeritageSection: React.FC = () => {
  return (
    <section
      className={styles.heritageSection}
      id="heritage"
      aria-label="Our Heritage, 1912: The Beginning of a Living Legacy"
    >
      <div className={styles.heritageWatermark} aria-hidden="true">
        <GandaberundaArt
          variant="outline"
          role="inline"
          size="xl"
          placement="static"
          className={styles.watermarkImg}
        />
      </div>

      <div className="container-institutional">
        <div className={styles.heritageGrid}>
          {/* Left Column: Historical Portrait in Museum Archival Ivory Frame */}
          <div className={styles.portraitColumn}>
            <div className={styles.archivalFrame}>
              <div className={styles.archivalImageWrap}>
                <Image
                  src="/assets/heritage/nalvadi-krishnaraja-wadiyar.jpg"
                  alt="Sri Nalvadi Krishnaraja Wadiyar, Maharaja of Mysore province and Founder of Mysore Silk Weaving Factory in 1912"
                  fill
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className={styles.archivalImage}
                  priority={false}
                />
                
                {/* Founder Overlay Badge */}
                <div className={styles.founderBadge}>
                  <svg
                    className={styles.badgeCrownIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" />
                    <line x1="5" y1="20" x2="19" y2="20" />
                  </svg>
                  <span>FOUNDER · 1912</span>
                </div>
              </div>

              {/* Compact Caption Row */}
              <div className={styles.archivalCaption}>
                <span className={styles.captionFounder}>
                  ROYAL FOUNDER · NALVADI KRISHNARAJA WADIYAR
                </span>
                <span className={styles.captionDivider} aria-hidden="true" />
                <span className={styles.captionOrigin}>
                  MYSURU · 1912
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Heritage Narrative */}
          <div className={styles.narrativeColumn}>
            {/* Eyebrow */}
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowText}>OUR HERITAGE</span>
            </div>

            {/* Historical Year and Patronage Label */}
            <div className={styles.yearRow}>
              <div className={styles.yearDisplay}>1912</div>
              <div className={styles.yearSubtitle}>
                ROYAL COURT PATRONAGE
              </div>
            </div>

            {/* Main Editorial Heading */}
            <h2 className={styles.headline}>
              THE BEGINNING OF A LIVING LEGACY.
            </h2>

            {/* Historical Narrative Description */}
            <p className={styles.description}>
              The Mysore Silk Weaving Factory was established in Mysuru in 1912 under Sri Nalvadi Krishnaraja Wadiyar, the Maharaja of Mysore province. Initially, the fabrics were crafted exclusively to meet the ceremonial requirements of the royal family and ornamental silk regalia for the state armed forces.
            </p>

            {/* Historical Quotation Panel */}
            <div className={styles.quotePanel}>
              <p className={styles.quoteText}>
                The factory produced premium silk for the royal family and the armed forces. Madhurya separately describes an interest in Swiss silk. The two accounts are not merged into one quotation.
              </p>
            </div>

            {/* Heritage Statistics (Three Aligned Informational Items) */}
            <div className={styles.statsRow}>
              {/* Stat 1: Swiss Power Looms */}
              <div className={styles.statItem}>
                <div className={styles.statHeader}>
                  <div className={styles.statIcon} aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="1.5" />
                      <line x1="7" y1="4" x2="7" y2="20" />
                      <line x1="17" y1="4" x2="17" y2="20" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="3" y1="15" x2="21" y2="15" />
                    </svg>
                  </div>
                  <span className={styles.statNumber}>1912</span>
                </div>
                <div className={styles.statLabel}>WEAVING FACTORY</div>
                <div className={styles.statSubtext}>
                  ROYAL FAMILY AND<br />ARMED FORCES
                </div>
              </div>

              <div className={styles.statDivider} aria-hidden="true" />

              {/* Stat 2: Years of Sovereign Weave */}
              <div className={styles.statItem}>
                <div className={styles.statHeader}>
                  <div className={styles.statIcon} aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-9 4.5 9 4.5 9-4.5-9-4.5Z" />
                      <path d="m3 12 9 4.5 9-4.5" />
                      <path d="m3 16.5 9 4.5 9-4.5" />
                    </svg>
                  </div>
                  <span className={styles.statNumber}>100+</span>
                </div>
                <div className={styles.statLabel}>YEARS OF SOVEREIGN WEAVE</div>
                <div className={styles.statSubtext}>
                  A CONTINUING<br />LEGACY OF EXCELLENCE
                </div>
              </div>

              <div className={styles.statDivider} aria-hidden="true" />

              {/* Stat 3: Govt. Protected Origin */}
              <div className={styles.statItem}>
                <div className={styles.statHeader}>
                  <div className={styles.statIcon} aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4.5 8-11.5V5.5l-8-3-8 3v5C4 17.5 12 22 12 22Z" />
                      <circle cx="12" cy="11.5" r="2.5" />
                      <path d="m9.5 14 5-5" />
                    </svg>
                  </div>
                  <span className={styles.statNumber}>GI-11</span>
                </div>
                <div className={styles.statLabel}>GOVT. PROTECTED ORIGIN</div>
                <div className={styles.statSubtext}>
                  RECOGNIZED HERITAGE<br />OF MYSORE SILK
                </div>
              </div>
            </div>

            {/* Calls to Action */}
            <div className={styles.ctaRow}>
              <Link href="#patronage" className={styles.primaryCtaBtn}>
                <span>EXPLORE OUR HISTORY</span>
                <ArrowRight size={15} className={styles.ctaArrow} aria-hidden="true" />
              </Link>
              <Link href="#timeline" className={styles.secondaryCtaBtn}>
                <span>VIEW 100+ YEAR TIMELINE</span>
                <ArrowRight size={14} className={styles.ctaArrow} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
