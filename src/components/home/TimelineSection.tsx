"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import styles from "./TimelineSection.module.css";
import { HERITAGE_MILESTONES } from "@/data/heritage";
import { useLanguage } from "@/context/LanguageContext";

export const TimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang, t } = useLanguage();
  const current = HERITAGE_MILESTONES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < HERITAGE_MILESTONES.length - 1 ? prev + 1 : prev));
  };

  const displayTitle = lang === "kn" && current.kannadaTitle ? current.kannadaTitle : current.title;
  const displayDesc = lang === "kn" && current.kannadaDescription ? current.kannadaDescription : current.description;
  const displaySignificance = lang === "kn" && current.kannadaSignificance ? current.kannadaSignificance : current.significance;

  return (
    <section className={`section-spacing ${styles.timelineSection}`} id="timeline" aria-label="Heritage Milestones Timeline">
      <div className="container-institutional">
        <div className={`${styles.timelineHeader} reveal-up`}>
          <div className={styles.titleArea}>
            <span className="editorial-label">{t.timelineKicker}</span>
            <h2 className={styles.sectionTitle}>
              {t.timelineTitle}
            </h2>
          </div>
          <div>
            <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", letterSpacing: "0.1em" }}>
              {lang === "kn"
                ? `ಹಂತ ${activeIndex + 1} / ${HERITAGE_MILESTONES.length}`
                : `STEP ${activeIndex + 1} OF ${HERITAGE_MILESTONES.length}`}
            </span>
          </div>
        </div>

        {/* Horizontal Year Selector */}
        <div className={`${styles.yearsNav} reveal-up`} role="tablist" aria-label="Timeline Years">
          {HERITAGE_MILESTONES.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.year}
                role="tab"
                aria-selected={isActive}
                className={`${styles.yearButton} ${isActive ? styles.yearButtonActive : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                {item.year}
              </button>
            );
          })}
        </div>

        {/* Active Milestone Card Display */}
        <div className={`${styles.cardDisplay} reveal-scale`}>
          <div className={styles.cardContent}>
            <div className={styles.cardYearWatermark}>{current.year}</div>
            <h3 className={styles.cardTitle}>{displayTitle}</h3>
            <p className={styles.cardDescription}>{displayDesc}</p>
            <div className={styles.cardSignificance}>
              <strong>{lang === "kn" ? "ಸಾಂಸ್ಥಿಕ ಮಹತ್ವ: " : "Institutional Significance: "}</strong>
              {displaySignificance}
            </div>
          </div>

          <div className={styles.cardMedia}>
            {current.image && (
              <Image
                src={current.image}
                alt={`${current.year} - ${displayTitle}`}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.cardImage}
              />
            )}
          </div>
        </div>

        {/* Step Controls */}
        <div className={styles.navControls}>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous milestone"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={handleNext}
            disabled={activeIndex === HERITAGE_MILESTONES.length - 1}
            aria-label="Next milestone"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
