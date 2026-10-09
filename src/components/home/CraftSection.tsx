"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./CraftSection.module.css";
import { CRAFT_STAGES } from "@/data/craft";
import { useLanguage } from "@/context/LanguageContext";

export const CraftSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { lang, t } = useLanguage();
  const stage = CRAFT_STAGES[activeStep];

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < CRAFT_STAGES.length - 1 ? prev + 1 : prev));
  };

  const stageDisplayName = lang === "kn" && stage.kannadaName ? stage.kannadaName : stage.name;

  return (
    <section className={`section-spacing ${styles.craftSection}`} id="craft" aria-label="From Cocoon to Silk Process">
      <div className="container-institutional">
        {/* Section Header */}
        <div className={`${styles.headerRow} reveal-up`}>
          <div>
            <span className="editorial-label">{t.craftKicker}</span>
            <h2 className={styles.headline}>{t.craftTitle}</h2>
            <p className={styles.subheading}>{t.craftSubtitle}</p>
          </div>
          <div style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", letterSpacing: "0.14em" }}>
            {lang === "kn"
              ? `ಹಂತ ${activeStep + 1} / 07 · ಸಮಗ್ರ ಪ್ರಕ್ರಿಯೆ`
              : `STAGE ${activeStep + 1} OF 07 · THE COMPLETE CYCLE`}
          </div>
        </div>

        {/* 7-Step Sequence Selector */}
        <div className={`${styles.stepPills} reveal-up`} role="tablist" aria-label="Craft Stages">
          {CRAFT_STAGES.map((s, idx) => {
            const isActive = idx === activeStep;
            const pName = lang === "kn" && s.kannadaName ? s.kannadaName : s.name;
            return (
              <button
                key={s.step}
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

        {/* Process Detail Grid */}
        <div className={styles.craftInteractiveGrid}>
          {/* Material Visual Texture */}
          <div className={`${styles.textureFrame} reveal-scale`}>
            <Image
              src={stage.image}
              alt={`${stage.name} - ${stage.title}`}
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className={styles.textureImage}
            />
            <div className={styles.textureBadge}>
              {stage.step} · {stageDisplayName}
            </div>
          </div>

          {/* Editorial Content */}
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
                {lang === "kn" ? "ತಾಂತ್ರಿಕ ವಿಶೇಷತೆ" : "TECHNICAL SPECIFICATION"}
              </span>
              <span>{stage.technicalSpec}</span>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <button
                type="button"
                className="action-editorial"
                onClick={handlePrev}
                disabled={activeStep === 0}
                style={{ opacity: activeStep === 0 ? 0.35 : 1, padding: "12px 20px" }}
                aria-label="Previous step"
              >
                <ChevronLeft size={16} />
                <span>{lang === "kn" ? "ಹಿಂದೆ" : "PREV"}</span>
              </button>
              <button
                type="button"
                className="action-editorial"
                onClick={handleNext}
                disabled={activeStep === CRAFT_STAGES.length - 1}
                style={{ opacity: activeStep === CRAFT_STAGES.length - 1 ? 0.35 : 1, padding: "12px 20px" }}
                aria-label="Next step"
              >
                <span>{lang === "kn" ? "ಮುಂದಿನ ಹಂತ" : "NEXT STAGE"}</span>
                <ChevronRight size={16} />
              </button>
              <Link href="/craft" className="action-link" style={{ marginLeft: "auto" }}>
                <span>{lang === "kn" ? "ಸಂಪೂರ್ಣ ವಿವರಣೆ" : "READ FULL MONOGRAPH"}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
