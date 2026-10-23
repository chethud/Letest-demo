"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import styles from "./TimelineSection.module.css";
import { HERITAGE_MILESTONES } from "@/data/heritage";

export const TimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = HERITAGE_MILESTONES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < HERITAGE_MILESTONES.length - 1 ? prev + 1 : prev));
  };

  return (
    <section
      className={styles.timelineSection}
      id="timeline"
      aria-label="Century of Stewardship: The Chronology of Mysore Silk"
    >
      <div className={styles.container}>
        {/* 01. Sophisticated Section Introduction */}
        <div className={styles.timelineHeader}>
          <div className={styles.eyebrowText}>
            CENTURY OF STEWARDSHIP
          </div>

          <h2 className={styles.sectionTitle}>
            The Chronology of <span className={styles.burgundyWord}>Mysore Silk</span>
          </h2>

          <p className={styles.subtitle}>
            From eighteenth-century sericulture at Channapatna, through the 1912 weaving factory, to the corporation established in 1980.
          </p>
        </div>

        {/* 02. Minimalist Horizontal Timeline Navigation */}
        <div className={styles.timelineRailWrapper} aria-label="Chronological era selector">
          <div className={styles.railLineBackground} aria-hidden="true" />

          <div className={styles.yearsNav} role="tablist">
            {HERITAGE_MILESTONES.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.year}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.yearNode} ${isActive ? styles.yearNodeActive : ""}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className={styles.yearNodeDot} />
                  <span className={styles.yearNodeText}>{item.year}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 03. Main Historical Content Panel (Two Columns) */}
        <article className={styles.editorialCard} aria-live="polite">
          {/* Subtle gold corner filigree flourishes */}
          <svg className={`${styles.cornerFlourish} ${styles.cornerTl}`} viewBox="0 0 16 16" aria-hidden="true">
            <path d="M1 15 V4 C1 2.34 2.34 1 4 1 H15" stroke="#C5A059" strokeWidth="1.2" fill="none" />
            <circle cx="4" cy="4" r="1.5" fill="#C5A059" />
          </svg>
          <svg className={`${styles.cornerFlourish} ${styles.cornerTr}`} viewBox="0 0 16 16" aria-hidden="true">
            <path d="M15 15 V4 C15 2.34 13.66 1 12 1 H1" stroke="#C5A059" strokeWidth="1.2" fill="none" />
            <circle cx="12" cy="4" r="1.5" fill="#C5A059" />
          </svg>
          <svg className={`${styles.cornerFlourish} ${styles.cornerBl}`} viewBox="0 0 16 16" aria-hidden="true">
            <path d="M1 1 V12 C1 13.66 2.34 15 4 15 H15" stroke="#C5A059" strokeWidth="1.2" fill="none" />
            <circle cx="4" cy="12" r="1.5" fill="#C5A059" />
          </svg>
          <svg className={`${styles.cornerFlourish} ${styles.cornerBr}`} viewBox="0 0 16 16" aria-hidden="true">
            <path d="M15 1 V12 C15 13.66 13.66 15 12 15 H1" stroke="#C5A059" strokeWidth="1.2" fill="none" />
            <circle cx="12" cy="12" r="1.5" fill="#C5A059" />
          </svg>

          {/* Left Column: Historical Information */}
          <div className={styles.cardContent}>
            <div className={styles.epochKicker}>
              <span className={styles.kickerDiamond}>❖</span>
              <span>{current.epoch}</span>
            </div>

            <h3 className={styles.cardTitle}>{current.title}</h3>

            <p className={styles.cardDescription}>{current.description}</p>

            <div className={styles.significanceBox}>
              <div className={styles.significanceText}>
                <strong className={styles.significancePrefix}>Institutional Significance: </strong>
                {current.significance}
              </div>
            </div>

            {/* Archival Stats & Provenance */}
            <div className={styles.metaRow}>
              {current.statNumber && (
                <div className={styles.statItem}>
                  <div className={styles.statIconWrap}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#861B26"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16v3H4zM4 17h16v3H4zM6 7v10M10 7v10M14 7v10M18 7v10M2 12h20" />
                    </svg>
                  </div>
                  <div className={styles.statTextWrap}>
                    <span className={styles.statNumber}>{current.statNumber}</span>
                    <span className={styles.statLabel}>{current.statLabel}</span>
                  </div>
                </div>
              )}

              {current.provenance && (
                <div className={styles.provenanceBox}>
                  <span className={styles.provenanceLabel}>Provenance: </span>
                  <span className={styles.provenanceText}>{current.provenance}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Archival Photograph */}
          <div className={styles.mediaFrame}>
            {current.image && (
              <Image
                src={current.image}
                alt={`${current.year} - ${current.title}`}
                fill
                sizes="(max-width: 960px) 100vw, 52vw"
                className={styles.cardImage}
                priority
              />
            )}
            <div className={styles.mediaSealBadge}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#861B26"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
              </svg>
              <span>ARCHIVAL RECORD · {current.year}</span>
            </div>
          </div>
        </article>

        {/* 04. Bottom Navigation and Actions */}
        <div className={styles.controlsRow}>
          <div className={styles.stepCounter}>
            EPOCH {activeIndex + 1} OF {HERITAGE_MILESTONES.length} · {current.year}
          </div>

          <div className={styles.navButtonGroup}>
            <button
              type="button"
              className={styles.epochNavBtn}
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous"
            >
              <ChevronLeft size={15} />
              <span>Previous</span>
            </button>

            <button
              type="button"
              className={styles.epochNavBtn}
              onClick={handleNext}
              disabled={activeIndex === HERITAGE_MILESTONES.length - 1}
              aria-label="Next"
            >
              <span>Next</span>
              <ChevronRight size={15} />
            </button>
          </div>

          <Link href="/heritage" className={styles.monographBtn}>
            <span>EXPLORE ARCHIVAL MONOGRAPH</span>
            <ArrowRight size={14} className={styles.monographArrow} />
          </Link>
        </div>
      </div>
    </section>
  );
};
