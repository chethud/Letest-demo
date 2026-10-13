"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Search } from "lucide-react";
import styles from "./CraftSection.module.css";
// Technical Monograph silk craft stages
import { CRAFT_STAGES } from "@/data/craft";

const ATTRIBUTE_SUBTEXTS: Record<string, [string, string, string]> = {
  "01": [
    "Grown in ideal climatic conditions",
    "Certified farmer networks",
    "Exceptionally pure filament output",
  ],
  "02": [
    "Cauvery basin soft water treatment",
    "Softens natural protective protein",
    "Gathered unbroken filament strands",
  ],
  "03": [
    "2,000 to 2,400 turns per meter",
    "Characteristic pebble texture",
    "Resilient drape and recovery",
  ],
  "04": [
    "Certified metal-free formulations",
    "Boiling vat dye penetration",
    "Generations of vibrant colorfastness",
  ],
  "05": [
    "Intricate dobby & Jacquard mechanisms",
    "Century-old Swiss precision power looms",
    "Controlled humidity weave tension",
  ],
  "06": [
    "0.65% authentic 24K electroplate",
    "65.0% pure hallmarked silver ribbon",
    "Natural mulberry silk core filament",
  ],
  "07": [
    "Intellectual property office granted",
    "Micro-embroidered pallu serial track",
    "100% natural pure silk certification",
  ],
};

export const CraftSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stage = CRAFT_STAGES[activeStep];
  const subtexts = ATTRIBUTE_SUBTEXTS[stage.step] || [
    "High purity standard",
    "Master weaver oversight",
    "State certified quality",
  ];

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < CRAFT_STAGES.length - 1 ? prev + 1 : prev));
  };

  return (
    <section
      className={styles.craftSection}
      id="craft"
      aria-label="Technical Monograph — From Cocoon to Silk"
    >
      <div className={styles.container}>
        {/* ── 01. Compact Section Header ── */}
        <div className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowDiamond} aria-hidden="true">❖</span>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>TECHNICAL MONOGRAPH</span>
          </div>

          <h2 className={styles.headline}>
            FROM COCOON TO <span className={styles.burgundyWord}>SILK.</span>
          </h2>
        </div>

        {/* ── 02. Single Horizontal Row: Seven Stage Navigation Pills + Arrows ── */}
        <div className={styles.stageNavBar}>
          <div className={styles.stagePillsRow} role="tablist" aria-label="Silk Production Stages">
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
                  <span className={styles.pillStepName}>{s.name}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.navControlsRight}>
            <span className={styles.cycleCounter}>
              STAGE {activeStep + 1} OF 07 · THE COMPLETE CYCLE
            </span>
            <div className={styles.arrowGroup}>
              <button
                type="button"
                className={styles.roundArrowBtn}
                onClick={handlePrev}
                disabled={activeStep === 0}
                aria-label="Previous production stage"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className={`${styles.roundArrowBtn} ${styles.roundArrowBtnPrimary}`}
                onClick={handleNext}
                disabled={activeStep === CRAFT_STAGES.length - 1}
                aria-label="Next production stage"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ── 03. Main Two-Column Content Grid ── */}
        <div className={styles.mainContentGrid}>
          {/* Left Column: Vertical Thumbnails Strip + Large Main Image Gallery */}
          <div className={styles.galleryColumn}>
            {/* Vertical Thumbnails */}
            <div className={styles.thumbnailsStrip} role="tablist" aria-label="Stage thumbnails">
              {CRAFT_STAGES.map((s, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={s.step}
                    type="button"
                    className={`${styles.thumbnailBtn} ${isActive ? styles.thumbnailBtnActive : ""}`}
                    onClick={() => setActiveStep(idx)}
                    aria-label={`Select stage ${s.step}: ${s.name}`}
                  >
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={64}
                      height={48}
                      className={styles.thumbnailImg}
                    />
                  </button>
                );
              })}
            </div>

            {/* Main Stage Image Frame with Gold Outer Framing */}
            <div className={styles.mainImageFrame}>
              {/* Corner flourishes */}
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

              <div className={styles.imageInner}>
                <Image
                  src={stage.image}
                  alt={`${stage.name} — ${stage.title}`}
                  fill
                  sizes="(max-width: 960px) 100vw, 55vw"
                  className={styles.stageMainImg}
                  priority={activeStep === 0}
                />

                {/* Bottom-left discreet badge */}
                <div className={styles.imageBadge}>
                  <span className={styles.badgeLine}>—</span>
                  <span>STAGE {stage.step} / 07 · {stage.name}</span>
                </div>

                {/* Bottom-right expand icon */}
                <button
                  type="button"
                  className={styles.zoomBtn}
                  aria-label="View full resolution image"
                  onClick={() => window.open(stage.image, "_blank")}
                >
                  <Search size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Stage Information & Technical Specs */}
          <div className={styles.infoColumn}>
            {/* Background Watermark Number */}
            <div className={styles.watermarkNumber} aria-hidden="true">
              {stage.step}
            </div>

            {/* Stage Label */}
            <div className={styles.stageTag}>
              <span>{stage.step}</span>
              <span className={styles.tagDash}>—</span>
              <span>{stage.name}</span>
              <span className={styles.tagDash}>—</span>
            </div>

            {/* Main Title */}
            <h3 className={styles.stageTitle}>{stage.title}</h3>

            {/* Supporting line in burgundy italic */}
            <p className={styles.stageSummary}>{stage.summary}</p>

            {/* Full Technical Narrative */}
            <p className={styles.stageDescription}>{stage.details}</p>

            {/* Three Technical Benefit Tiles in One Row */}
            <div className={styles.benefitTilesRow}>
              {stage.attributes.map((attr, i) => (
                <div key={attr} className={styles.benefitTile}>
                  <div className={styles.benefitIconWrap}>
                    {i === 0 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B58A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 20 4c1 9-3 16-9 16z" />
                        <path d="M4 20l7-7" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B58A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <ellipse cx="12" cy="12" rx="7" ry="9" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B58A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
                      </svg>
                    )}
                  </div>
                  <span className={styles.benefitTitle}>{attr}</span>
                  <span className={styles.benefitSubtitle}>{subtexts[i]}</span>
                </div>
              ))}
            </div>

            {/* Technical Specification Panel */}
            <div className={styles.specPanel}>
              <span className={styles.specPanelLabel}>TECHNICAL SPECIFICATION</span>
              <span className={styles.specPanelValue}>{stage.technicalSpec}</span>
            </div>

            {/* Bottom Actions Row */}
            <div className={styles.bottomActionsRow}>
              <div className={styles.stageNavBtns}>
                <button
                  type="button"
                  className={styles.prevStageBtn}
                  onClick={handlePrev}
                  disabled={activeStep === 0}
                  aria-label="Previous production stage"
                >
                  <ChevronLeft size={14} />
                  <span>PREVIOUS</span>
                </button>

                <button
                  type="button"
                  className={styles.nextStageBtn}
                  onClick={handleNext}
                  disabled={activeStep === CRAFT_STAGES.length - 1}
                  aria-label="Next production stage"
                >
                  <span>NEXT STAGE</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              <Link href="/craft" className={styles.exploreLink}>
                <span>EXPLORE TECHNICAL MONOGRAPH</span>
                <ArrowRight size={14} className={styles.linkArrow} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
