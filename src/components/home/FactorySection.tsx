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
          src="/films/mysore-silk-story.mp4?v=2"
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
          <svg viewBox="0 0 340 148" fill="none" stroke="currentColor">
            <g className={styles.watermarkPalace} strokeWidth="0.7">
              <path d="M8 128h324" />
              <path d="M28 128V86l16-14 16 14v42" />
              <path d="M78 128V70l28-24 28 24v58" />
              <path d="M152 128V48l46-36 46 36v80" />
              <path d="M262 128V74l24-18 24 18v54" />
              <path d="M168 48h92" />
              <path d="M190 22v14M214 10v26M238 22v14" />
              <circle cx="214" cy="8" r="2.4" fill="currentColor" stroke="none" />
              <path d="M92 96h40M176 96h68M278 96h28" />
              <path d="M188 64h56M196 80h40M204 112h24" />
              <path d="M36 100h12M44 92v16M270 108h12" />
            </g>
            <g className={styles.watermarkSeal} transform="translate(62 74)">
              <circle r="58" strokeWidth="0.7" />
              <circle r="50" strokeWidth="0.45" strokeDasharray="1.2 2.4" />
              <circle r="34" strokeWidth="0.45" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <path
                  key={angle}
                  d="M0-26c5 8 5 14 0 22-5-8-5-14 0-22z"
                  strokeWidth="0.6"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle r="7" strokeWidth="0.6" />
              <circle r="2.2" fill="currentColor" stroke="none" />
              <path
                id="factory-seal-arc"
                d="M-40-8a42 42 0 0 1 80 0"
                stroke="none"
              />
              <text className={styles.watermarkWord} fill="currentColor" stroke="none">
                <textPath href="#factory-seal-arc" startOffset="50%" textAnchor="middle">
                  MYSORE SILK
                </textPath>
              </text>
              <text
                className={styles.watermarkYear}
                y="46"
                textAnchor="middle"
                fill="currentColor"
                stroke="none"
              >
                1912
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
