"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Award, History, Building2 } from "lucide-react";
import styles from "./TimelineSection.module.css";
import { HERITAGE_MILESTONES } from "@/data/heritage";
import { useLanguage } from "@/context/LanguageContext";

export const TimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang, t } = useLanguage();
  const isKn = lang === "kn";

  const current = HERITAGE_MILESTONES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < HERITAGE_MILESTONES.length - 1 ? prev + 1 : prev));
  };

  const displayTitle = isKn && current.kannadaTitle ? current.kannadaTitle : current.title;
  const displayDesc = isKn && current.kannadaDescription ? current.kannadaDescription : current.description;
  const displaySignificance = isKn && current.kannadaSignificance ? current.kannadaSignificance : current.significance;
  const displayStatLabel = isKn && current.statLabelKn ? current.statLabelKn : current.statLabel;
  const displayProvenance = isKn && current.provenanceKn ? current.provenanceKn : current.provenance;

  // Active progress rail percentage
  const progressPercent = (activeIndex / (HERITAGE_MILESTONES.length - 1)) * 100;

  return (
    <section
      className={styles.timelineSection}
      id="timeline"
      aria-label="Century of Stewardship — The Chronology of Mysore Silk"
    >
      <div className={styles.container}>
        {/* 01. Editorial Header */}
        <div className={styles.timelineHeader}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowRule} />
            <span className={styles.eyebrowText}>
              {isKn ? "ಶತಮಾನದ ಸಾಂಸ್ಥಿಕ ಪಯಣ" : "CENTURY OF STEWARDSHIP"}
            </span>
            <span className={styles.eyebrowRuleRight} />
          </div>

          <h2 className={styles.sectionTitle}>
            {isKn ? "ಮೈಸೂರು ರೇಷ್ಮೆಯ ಶತಮಾನದ ಕಾಲಕ್ರಮ" : "The Chronology of Mysore Silk"}
          </h2>

          <p className={styles.subtitle}>
            {isKn
              ? "೧೯೧೨ ರಲ್ಲಿ ಮಹಾರಾಜ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರಿಂದ ಆರಂಭವಾದ ರಾಜಮನೆತನದ ನೇಯ್ಗೆಯಿಂದ ಇಂದಿನವರೆಗಿನ ಅಖಂಡ ಸಾಂಸ್ಥಿಕ ಹೆಜ್ಜೆಗುರುತುಗಳು."
              : "From the royal founding in 1912 by Maharaja Nalvadi Krishnaraja Wadiyar to the present day, explore over a century of unbroken textile sovereignty."}
          </p>
        </div>

        {/* 02. Interactive Timeline Rail */}
        <div className={styles.timelineRailWrapper} aria-label="Chronological era selector">
          <div className={styles.railLineBackground} aria-hidden="true" />
          <div
            className={styles.railLineActive}
            style={{ width: `${progressPercent}%` }}
            aria-hidden="true"
          />

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

        {/* 03. Grand Epoch Editorial Display Card */}
        <article className={styles.editorialCard} aria-live="polite">
          {/* Archival Year Watermark */}
          <div className={styles.cardYearWatermark} aria-hidden="true">
            {current.year}
          </div>

          {/* Left Column: Narrative & Significance */}
          <div className={styles.cardContent}>
            <div className={styles.epochKicker}>
              <History size={13} style={{ color: "#B79A65" }} />
              <span>{current.epoch}</span>
            </div>

            <h3 className={styles.cardTitle}>{displayTitle}</h3>

            <p className={styles.cardDescription}>{displayDesc}</p>

            <div className={styles.significanceBox}>
              <div className={styles.significanceText}>
                <strong>{isKn ? "ಸಾಂಸ್ಥಿಕ ಮಹತ್ವ: " : "Institutional Significance: "}</strong>
                {displaySignificance}
              </div>
            </div>

            {/* Archival Stats & Provenance */}
            <div className={styles.metaRow}>
              {current.statNumber && (
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>{current.statNumber}</span>
                  <span className={styles.statLabel}>{displayStatLabel}</span>
                </div>
              )}

              {displayProvenance && (
                <div className={styles.provenanceText}>
                  Provenance: {displayProvenance}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Archival Media */}
          <div className={styles.mediaFrame}>
            {current.image && (
              <Image
                src={current.image}
                alt={`${current.year} - ${displayTitle}`}
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                className={styles.cardImage}
                priority={false}
              />
            )}
            <div className={styles.mediaSealBadge}>
              <Award size={12} />
              <span>ARCHIVAL RECORD · {current.year}</span>
            </div>
          </div>
        </article>

        {/* 04. Bottom Navigation Controls & Action Row */}
        <div className={styles.controlsRow}>
          <div className={styles.stepCounter}>
            {isKn
              ? `ಹಂತ ${activeIndex + 1} / ${HERITAGE_MILESTONES.length} · ${current.year}`
              : `EPOCH ${activeIndex + 1} OF ${HERITAGE_MILESTONES.length} · ${current.year}`}
          </div>

          <div className={styles.navButtonGroup}>
            <button
              type="button"
              className={styles.curvedNavBtn}
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous milestone epoch"
            >
              <ChevronLeft size={16} />
              <span>{isKn ? "ಹಿಂದಿನ ಕಾಲಘಟ್ಟ" : "PREVIOUS EPOCH"}</span>
            </button>

            <button
              type="button"
              className={styles.curvedNavBtn}
              onClick={handleNext}
              disabled={activeIndex === HERITAGE_MILESTONES.length - 1}
              aria-label="Next milestone epoch"
            >
              <span>{isKn ? "ಮುಂದಿನ ಕಾಲಘಟ್ಟ" : "NEXT EPOCH"}</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <Link href="/heritage" className={styles.curvedMonographBtn}>
            <span>{isKn ? "ಸಂಪೂರ್ಣ ಐತಿಹಾಸಿಕ ಗ್ರಂಥ ವೀಕ್ಷಿಸಿ" : "EXPLORE ARCHIVAL MONOGRAPH"}</span>
            <ArrowRight size={15} className={styles.monographArrow} />
          </Link>
        </div>
      </div>
    </section>
  );
};
