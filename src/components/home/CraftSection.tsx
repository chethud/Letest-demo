"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Shield, Sparkles } from "lucide-react";
import styles from "./CraftSection.module.css";
import { CRAFT_STAGES } from "@/data/craft";

export const CraftSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stage = CRAFT_STAGES[activeStep];

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < CRAFT_STAGES.length - 1 ? prev + 1 : prev));
  };

  /* Simple attribute icon mapping by index */
  const attrIcons = [
    <Leaf key="leaf" size={16} strokeWidth={1.5} />,
    <Shield key="shield" size={16} strokeWidth={1.5} />,
    <Sparkles key="sparkles" size={16} strokeWidth={1.5} />,
  ];

  return (
    <section
      className={styles.craftSection}
      id="craft"
      aria-label="Technical Monograph — From Cocoon to Silk"
    >
      <div className="container-institutional">
        {/* ── Section Header ── */}
        <div className={`${styles.headerRow} reveal-up`}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowDiamond} aria-hidden="true">✦</span>
              <span className={styles.eyebrowRule} />
              <span className={styles.eyebrowText}>TECHNICAL MONOGRAPH</span>
            </div>

            <h2 className={styles.headline}>
              FROM COCOON{"\n"}TO SILK.
            </h2>

            <p className={styles.subheading}>
              Seven calibrated stages of unbroken state mastery — from pure
              mulberry sericulture in Ramanagara to Swiss Jacquard weaving in
              Mysuru.
            </p>
          </div>

          <div className={styles.headerRight}>
            <span className={styles.counterBadge}>
              STAGE {activeStep + 1} OF 07 · THE COMPLETE CYCLE
            </span>
            <div className={styles.headerArrows}>
              <button
                type="button"
                className={styles.arrowBtn}
                onClick={handlePrev}
                disabled={activeStep === 0}
                aria-label="Previous stage"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className={`${styles.arrowBtn} ${styles.arrowBtnNext}`}
                onClick={handleNext}
                disabled={activeStep === CRAFT_STAGES.length - 1}
                aria-label="Next stage"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Seven-Stage Navigation Pills ── */}
        <div
          className={`${styles.stepPills} reveal-up`}
          role="tablist"
          aria-label="Craft Stages"
        >
          {CRAFT_STAGES.map((s, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={s.step}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.pillBtn} ${isActive ? styles.pillBtnActive : ""}`}
                onClick={() => setActiveStep(idx)}
              >
                <span className={styles.pillStepNumber}>{s.step}</span>
                <span>{s.name}</span>
              </button>
            );
          })}
        </div>

        {/* ── Gold Divider ── */}
        <div className={styles.goldDivider} aria-hidden="true" />

        {/* ── Main Two-Column Content Panel ── */}
        <div className={styles.craftInteractiveGrid}>
          {/* Left Column: Primary Image */}
          <div className={`${styles.textureFrame} reveal-scale`}>
            <Image
              src={stage.image}
              alt={`${stage.name} — ${stage.title}`}
              fill
              sizes="(max-width: 960px) 100vw, 52vw"
              className={styles.textureImage}
              priority={activeStep === 0}
            />
            <div className={styles.textureBadge}>
              <span className={styles.textureBadgeIcon}>◈</span>
              STAGE {stage.step} / 07 · {stage.name}
            </div>
            <button
              type="button"
              className={styles.expandBtn}
              aria-label="View full image"
              onClick={() => window.open(stage.image, "_blank")}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 2h4v4M6 14H2v-4M14 2L9.5 6.5M2 14l4.5-4.5" />
              </svg>
            </button>
          </div>

          {/* Right Column: Technical Information */}
          <div className={`${styles.detailCol} reveal-up`}>
            {/* Decorative background number */}
            <div className={styles.cardWatermark} aria-hidden="true">
              {stage.step}
            </div>

            {/* Stage label */}
            <div className={styles.stageLabel}>
              {stage.step} — {stage.name}
            </div>

            {/* Main Heading */}
            <h3 className={styles.stageTitle}>{stage.title}</h3>

            {/* Editorial Subheading */}
            <p className={styles.stageSummary}>{stage.summary}</p>

            {/* Description */}
            <p className={styles.stageDetails}>{stage.details}</p>

            {/* Technical Attributes Strip */}
            <div className={styles.attributeStrip}>
              {stage.attributes.map((attr, i) => (
                <div key={attr} className={styles.attributeItem}>
                  <span className={styles.attributeIcon}>{attrIcons[i]}</span>
                  <span className={styles.attributeText}>{attr}</span>
                </div>
              ))}
            </div>

            {/* Technical Specification Panel */}
            <div className={styles.specBox}>
              <span className={styles.specLabel}>TECHNICAL SPECIFICATION</span>
              <span className={styles.specValue}>{stage.technicalSpec}</span>
            </div>

            {/* Stage Controls */}
            <div className={styles.controlsRow}>
              <div className={styles.controlsLeft}>
                <button
                  type="button"
                  className={styles.curvedNavBtn}
                  onClick={handlePrev}
                  disabled={activeStep === 0}
                  aria-label="Previous craft step"
                >
                  <ChevronLeft size={14} />
                  <span>PREVIOUS</span>
                </button>

                <button
                  type="button"
                  className={`${styles.curvedNavBtn} ${styles.curvedNavBtnPrimary}`}
                  onClick={handleNext}
                  disabled={activeStep === CRAFT_STAGES.length - 1}
                  aria-label="Next craft step"
                >
                  <span>NEXT STAGE</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              <Link href="/craft" className={styles.curvedMonographBtn}>
                <span>EXPLORE TECHNICAL MONOGRAPH</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
