"use client";

import React from "react";
import Link from "next/link";
import styles from "./FactorySection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export const FactorySection: React.FC = () => {
  const { lang } = useLanguage();
  const isKn = lang === "kn";

  return (
    <section id="factory" className={styles.art} aria-label="The Art of Mysore Silk">
      <div className={styles.film}>
        <video
          className={styles.video}
          src="/films/mysore-silk-story.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={isKn ? "ಮೈಸೂರು ರೇಷ್ಮೆಯ ಕಥೆ" : "The story of Mysore Silk"}
        />
      </div>

      <div className={styles.panel}>
        <p className={styles.eyebrow}>{isKn ? "ಮೈಸೂರು ರೇಷ್ಮೆಯ ಕಲೆ" : "The Art of Mysore Silk"}</p>
        <h2 className={styles.display}>
          {isKn ? (
            <>
              ಸೀರೆಗಿಂತ ಹೆಚ್ಚು.
              <br />
              ಜೀವಂತ ಪರಂಪರೆ.
            </>
          ) : (
            <>
              More than a saree.
              <br />
              A living tradition.
            </>
          )}
        </h2>
        <p className={styles.body}>
          {isKn
            ? "ಮೈಸೂರಿನಲ್ಲಿ ನೇಯ್ದ ನಮ್ಮ ರೇಷ್ಮೆ ಕರಕುಶಲ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಶಾಶ್ವತ ಸೌಂದರ್ಯದ ಆಚರಣೆ. ಪ್ರತಿ ತುಂಡೂ ಇತಿಹಾಸ, ಪರಂಪರೆ ಮತ್ತು ತಲೆಮಾರುಗಳಿಗೆ ಉಳಿಯುವ ಭರವಸೆಯನ್ನು ಹೊತ್ತಿದೆ."
            : "Woven in Mysuru, our silk is a celebration of craftsmanship, culture and timeless beauty. Each piece carries a history, a heritage and a promise — to last for generations."}
        </p>
        <Link href="/craft" className={styles.craftLink}>
          {isKn ? "ನಮ್ಮ ಕರಕುಶಲ ನೋಡಿ" : "Explore Our Craft"} <span aria-hidden="true">→</span>
        </Link>
        <div className={styles.palaceSketch} aria-hidden="true">
          <svg viewBox="0 0 360 140" fill="none" stroke="currentColor" strokeWidth="0.65">
            <path d="M18 118h324" />
            <path d="M42 118V68l22-20 22 20v50" />
            <path d="M108 118V52l38-32 38 32v66" />
            <path d="M206 118V68l22-20 22 20v50" />
            <path d="M272 118V78l18-14 18 14v40" />
            <path d="M128 52h76" />
            <path d="M148 24v12M166 14v22M184 24v12" />
            <circle cx="166" cy="10" r="2.8" />
            <path d="M56 82h36M220 82h36M120 82h80" />
            <path d="M140 70h52M148 90h36" />
          </svg>
        </div>
      </div>
    </section>
  );
};
