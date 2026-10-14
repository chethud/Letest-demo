"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import styles from "./JourneyOfSilkSection.module.css";
import { JOURNEY_STAGES, JourneyStage } from "@/data/journeyOfSilk";
import { useLanguage } from "@/context/LanguageContext";

export const JourneyOfSilkSection: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedStage, setSelectedStage] = useState<JourneyStage | null>(null);

  const isKannada = lang === "kn";

  return (
    <section
      id="journey-of-silk"
      className={styles.journeySection}
      aria-label="Mysore Silk — The Journey of Silk"
    >
      {/* 01. Authentic Oversized Gandaberunda Watermark */}
      <div className={styles.watermarkContainer} aria-hidden="true">
        <Image
          src="/assets/brand/gandaberunda-gold-transparent.png"
          alt="Royal Gandaberunda Watermark"
          fill
          className={styles.watermarkImage}
          priority={false}
        />
      </div>

      {/* 02. Restrained Luxury Editorial Header */}
      <div className={styles.headerBlock}>
        <div className={styles.eyebrowWrapper}>
          <span className={styles.eyebrowText}>
            {isKannada ? "ಕರಕುಶಲತೆಯ ಕಲೆ" : "THE JOURNEY OF SILK"}
          </span>
        </div>

        <h2 className={styles.sectionTitle}>
          {isKannada ? "ರೇಷ್ಮೆಯ ಅನನ್ಯ ಪಯಣ" : "The Journey of Silk"}
        </h2>

        <p className={styles.supportingCopy}>
          {isKannada
            ? "ಪ್ರಕೃತಿಯ ಶ್ರೇಷ್ಠ ಕೊಡುಗೆಯನ್ನು ಕಾಲಾತೀತ ಮೈಸೂರು ರೇಷ್ಮೆಯನ್ನಾಗಿ ರೂಪಿಸುವ ಶುದ್ಧತೆ, ಕೌಶಲ ಮತ್ತು ಕರಕುಶಲತೆಯ ಪಯಣ."
            : "A journey of purity, precision and craftsmanship that transforms nature’s finest into timeless Mysore Silk."}
        </p>
      </div>

      {/* 03. Four-Stage Craftsmanship Editorial Grid */}
      <div className={styles.journeyGridContainer}>
        <div className={styles.journeyGrid} role="region" aria-label="Craftsmanship stages">
          {JOURNEY_STAGES.map((stage, idx) => {
            const headline = isKannada ? stage.headlineKn : stage.headline;
            const description = isKannada ? stage.descriptionKn : stage.description;
            const stageName = isKannada ? stage.nameKn : stage.name;

            return (
              <article
                key={stage.step}
                className={styles.stageCard}
                onClick={() => setSelectedStage(stage)}
                tabIndex={0}
                role="button"
                aria-label={`Stage ${stage.step}: ${stageName}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedStage(stage);
                  }
                }}
              >
                {/* Visual Image Panel with Tactile Zoom */}
                <div className={styles.imageFrame}>
                  <Image
                    src={stage.image}
                    alt={`${stageName} - ${headline}`}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 25vw"
                    className={styles.stageImage}
                  />
                  <div className={styles.imageOverlayGlow} aria-hidden="true" />
                </div>

                {/* Editorial Content Below Image */}
                <div className={styles.contentBlock}>
                  <div className={styles.stepNumber}>
                    <span>{stage.step}</span>
                    <span style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "#8A6F3D" }}>
                      {stageName}
                    </span>
                  </div>

                  <h3 className={styles.stageHeadline}>{headline}</h3>

                  <p className={styles.stageDescription}>{description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* 04. Curved Luxury Action Button */}
        <div className={styles.actionRow}>
          <Link href="/craft" className={styles.curvedActionBtn}>
            <span>
              {isKannada
                ? "ಸಮಗ್ರ ರೇಷ್ಮೆ ಕರಕುಶಲ ವಿವರಣೆ ವೀಕ್ಷಿಸಿ"
                : "EXPLORE THE COMPLETE CRAFT MONOGRAPH"}
            </span>
            <ArrowRight size={15} className={styles.btnArrow} />
          </Link>
        </div>
      </div>

      {/* 06. Interactive Material Detail Lightbox */}
      {selectedStage && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedStage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedStage(null)}
              aria-label="Close detail modal"
            >
              <X size={18} />
            </button>

            <div className={styles.modalImageFrame}>
              <Image
                src={selectedStage.image}
                alt={selectedStage.name}
                fill
                sizes="(max-width: 680px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalStep}>
                STAGE {selectedStage.step} · {isKannada ? selectedStage.nameKn : selectedStage.name}
              </div>
              <h3 className={styles.modalHeadline}>
                {isKannada ? selectedStage.headlineKn : selectedStage.headline}
              </h3>
              <p className={styles.modalDescription}>
                {isKannada ? selectedStage.descriptionKn : selectedStage.description}
              </p>
              <div className={styles.modalSpec}>
                <strong>{isKannada ? "ವಿಶೇಷತೆ: " : "SPECIFICATION: "}</strong>
                {isKannada ? selectedStage.detailBadgeKn : selectedStage.detailBadge}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
