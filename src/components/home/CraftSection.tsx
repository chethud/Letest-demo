"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, Leaf, Mountain } from "lucide-react";
import styles from "./CraftSection.module.css";
import { CRAFT_STAGES } from "@/data/craft";

const HIGHLIGHT_ICONS = [Leaf, Mountain, BadgeCheck];

function toLabel(value: string) {
  return value
    .toLowerCase()
    .replace(/(^|\s)([a-z])/g, (_, space: string, letter: string) => space + letter.toUpperCase())
    .replace(/\bgi-11\b/gi, "GI-11");
}

export const CraftSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stage = CRAFT_STAGES[activeStep];

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
        <header className={styles.header}>
          <p className={styles.eyebrowText}>Technical monograph</p>
          <h2 className={styles.headline}>
            From cocoon to <span className={styles.burgundyWord}>silk.</span>
          </h2>
        </header>

        <div className={styles.stageNavBar}>
          <div className={styles.stagePillsRow} role="tablist" aria-label="Silk production stages">
            {CRAFT_STAGES.map((item, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={item.step}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.stageTab} ${isActive ? styles.stageTabActive : ""}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <span className={styles.stageNumber}>{item.step}</span>
                  <span className={styles.stageName}>{toLabel(item.name)}</span>
                </button>
              );
            })}
          </div>

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

        <div className={styles.mainContentGrid} key={stage.step}>
          <div className={styles.infoColumn}>
            <p className={styles.stageEyebrow}>Stage {stage.step} of 07</p>
            <h3 className={styles.stageTitle}>{stage.title}</h3>
            <p className={styles.stageSummary}>{stage.summary}</p>

            <ul className={styles.highlights}>
              {stage.attributes.map((attribute, index) => {
                const Icon = HIGHLIGHT_ICONS[index] ?? Leaf;
                return (
                  <li key={attribute} className={styles.highlight}>
                    <Icon size={18} strokeWidth={1.4} aria-hidden="true" />
                    <span>{toLabel(attribute)}</span>
                  </li>
                );
              })}
            </ul>

            <Link href="#stages" className={styles.exploreLink}>
              <span>Explore technical monograph</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.galleryColumn}>
            <div className={styles.imageFrame}>
              <Image
                src={stage.image}
                alt={`${stage.title}`}
                fill
                sizes="(max-width: 900px) 100vw, 58vw"
                className={styles.stageImage}
                priority={activeStep === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
