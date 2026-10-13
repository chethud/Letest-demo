"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Layers } from "lucide-react";
import styles from "./CraftSection.module.css";
import { CRAFT_STAGES } from "@/data/craft";
import { useLanguage } from "@/context/LanguageContext";

export const CraftSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { lang, t } = useLanguage();
  const isKn = lang === "kn";
  const stage = CRAFT_STAGES[activeStep];

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < CRAFT_STAGES.length - 1 ? prev + 1 : prev));
  };

  const stageDisplayName = isKn && stage.kannadaName ? stage.kannadaName : stage.name;

  return (
    <section
      className={styles.craftSection}
      id="craft"
      aria-label="Technical Monograph — From Cocoon to Silk"
    >
      <div className="container-institutional">
        {/* Section Header */}
        <div className={`${styles.headerRow} reveal-up`}>
          <div>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowRule} />
              <span className={styles.eyebrowText}>
                {isKn ? "ತಾಂತ್ರಿಕ ಸಂಶೋಧನಾ ಗ್ರಂಥ" : "TECHNICAL MONOGRAPH"}
              </span>
            </div>
            <h2 className={styles.headline}>
              {isKn ? "ರೇಷ್ಮೆ ಗೂಡಿನಿಂದ ಅಪ್ಪಟ ಸೀರೆಯವರೆಗೆ." : "FROM COCOON TO SILK."}
            </h2>
            <p className={styles.subheading}>
              {isKn
                ? "ರಾಮನಗರದ ಶುದ್ಧ ಮಲ್ಬರಿ ರೇಷ್ಮೆ ಗೂಡುಗಳಿಂದ ಹಿಡಿದು ಮೈಸೂರಿನ ಸ್ವಿಸ್ ಜಾಕ್ವಾರ್ಡ್ ನೇಯ್ಗೆಯವರೆಗೆ ಏಳು ಹಂತಗಳ ಪರಿಶುದ್ಧ ಪ್ರಕ್ರಿಯೆ."
                : "Seven calibrated stages of unbroken state mastery — from pure mulberry sericulture in Ramanagara to Swiss Jacquard weaving in Mysuru."}
            </p>
          </div>

          <div className={styles.counterBadge}>
            {isKn
              ? `ಹಂತ ${activeStep + 1} / 07 · ಸಮಗ್ರ ಪ್ರಕ್ರಿಯೆ`
              : `STAGE ${activeStep + 1} OF 07 · THE COMPLETE CYCLE`}
          </div>
        </div>

        {/* 7-Step Sequence Selector (Curved Pills) */}
        <div className={`${styles.stepPills} reveal-up`} role="tablist" aria-label="Craft Stages">
          {CRAFT_STAGES.map((s, idx) => {
            const isActive = idx === activeStep;
            const pName = isKn && s.kannadaName ? s.kannadaName : s.name;
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
                <span>{pName}</span>
              </button>
            );
          })}
        </div>

        {/* Process Detail Showcase */}
        <div className={styles.craftInteractiveGrid}>
          {/* Background Watermark */}
          <div className={styles.cardWatermark} aria-hidden="true">
            {stage.step}
          </div>

          {/* Left: Material Visual Texture */}
          <div className={`${styles.textureFrame} reveal-scale`}>
            <Image
              src={stage.image}
              alt={`${stage.name} - ${stage.title}`}
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className={styles.textureImage}
            />
            <div className={styles.textureBadge}>
              STAGE {stage.step} OF 07 · {stageDisplayName}
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className={`${styles.detailCol} reveal-up`}>
            <div className={styles.stageIndicatorRow}>
              <div className={styles.stageStepLarge}>{stage.step}</div>
              {stage.kannadaName && (
                <div className={styles.stageKannada}>{stage.kannadaName}</div>
              )}
            </div>

            <h3 className={styles.stageTitle}>{stage.title}</h3>
            <p className={styles.stageSummary}>{stage.summary}</p>
            <p className={styles.stageDetails}>{stage.details}</p>

            <div className={styles.specBox}>
              <span className={styles.specLabel}>
                {isKn ? "ತಾಂತ್ರಿಕ ವಿಶೇಷತೆ" : "TECHNICAL SPECIFICATION"}
              </span>
              <span>{stage.technicalSpec}</span>
            </div>

            <div className={styles.controlsRow}>
              <button
                type="button"
                className={styles.curvedNavBtn}
                onClick={handlePrev}
                disabled={activeStep === 0}
                aria-label="Previous craft step"
              >
                <ChevronLeft size={15} />
                <span>{isKn ? "ಹಿಂದಿನ ಹಂತ" : "PREVIOUS"}</span>
              </button>

              <button
                type="button"
                className={styles.curvedNavBtn}
                onClick={handleNext}
                disabled={activeStep === CRAFT_STAGES.length - 1}
                aria-label="Next craft step"
              >
                <span>{isKn ? "ಮುಂದಿನ ಹಂತ" : "NEXT STAGE"}</span>
                <ChevronRight size={15} />
              </button>

              <Link href="/craft" className={styles.curvedMonographBtn}>
                <span>{isKn ? "ಸಂಪೂರ್ಣ ತಾಂತ್ರಿಕ ವಿವರಣೆ" : "EXPLORE TECHNICAL MONOGRAPH"}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

