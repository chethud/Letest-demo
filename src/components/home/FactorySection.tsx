"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Crown, Gem, Layers } from "lucide-react";
import styles from "./FactorySection.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { useCmsHome } from "@/hooks/useCmsHome";
import { DEFAULT_FACTORY, resolveFactoryContent } from "@/lib/cmsHome";
import {
  getFactoryVideoObjectUrl,
  isFactoryVideoIdbRef,
} from "@/lib/cmsFactoryVideo";

const HIGHLIGHTS = [
  {
    id: "regal",
    Icon: Crown,
    labelEn: "Regal Heritage",
    labelKn: "ರಾಜಸಂಪನ್ನ ಪರಂಪರೆ",
  },
  {
    id: "craft",
    Icon: Layers,
    labelEn: "Exceptional Craftsmanship",
    labelKn: "ಅಸಾಧಾರಣ ಕರಕುಶಲ",
  },
  {
    id: "exclusive",
    Icon: Gem,
    labelEn: "Timeless Exclusivity",
    labelKn: "ಶಾಶ್ವತ ವಿಶಿಷ್ಟತೆ",
  },
] as const;

export const FactorySection: React.FC = () => {
  const { lang } = useLanguage();
  const isKn = lang === "kn";
  const cms = resolveFactoryContent(useCmsHome());
  const [videoSrc, setVideoSrc] = useState(cms.videoUrl);

  useEffect(() => {
    let revoked: string | null = null;
    let cancelled = false;

    async function loadVideo() {
      if (isFactoryVideoIdbRef(cms.videoUrl)) {
        const objectUrl = await getFactoryVideoObjectUrl();
        if (cancelled) {
          if (objectUrl) URL.revokeObjectURL(objectUrl);
          return;
        }
        if (objectUrl) {
          revoked = objectUrl;
          setVideoSrc(objectUrl);
        } else {
          setVideoSrc(DEFAULT_FACTORY.videoUrl);
        }
        return;
      }
      setVideoSrc(cms.videoUrl);
    }

    void loadVideo();
    return () => {
      cancelled = true;
      if (revoked) URL.revokeObjectURL(revoked);
    };
  }, [cms.videoUrl]);

  return (
    <section id="factory" className={styles.art} aria-label="The Art of Mysore Silk">
      <div className={styles.film}>
        <video
          className={styles.video}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={isKn ? "ಮೈಸೂರು ರೇಷ್ಮೆಯ ಕಥೆ" : "The story of Mysore Silk"}
        />
        <p className={styles.filmCaption}>
          {isKn ? "ಮೈಸೂರು ರೇಷ್ಮೆಯ ಸಾರ" : "The Essence of Mysore Silk"}
        </p>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelInner}>
          <p className={styles.eyebrow}>
            {isKn ? "ಮೈಸೂರು ರೇಷ್ಮೆಯ ಕಲೆ" : cms.eyebrow}
          </p>
          <h2 className={styles.display}>
            {isKn ? (
              <>
                ಸೀರೆಗಿಂತ ಹೆಚ್ಚು.
                <span className={styles.displayLine}>ಜೀವಂತ ಪರಂಪರೆ.</span>
              </>
            ) : (
              <>
                {cms.headlineLine1}
                <span className={styles.displayLine}>{cms.headlineLine2}</span>
              </>
            )}
          </h2>
          <p className={styles.body}>
            {isKn ? (
              "ಮೈಸೂರಿನಲ್ಲಿ ನೇಯ್ದ ನಮ್ಮ ರೇಷ್ಮೆ ಕರಕುಶಲ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಶಾಶ್ವತ ಸೌಂದರ್ಯದ ಆಚರಣೆ. ಪ್ರತಿ ತುಂಡೂ ಇತಿಹಾಸ, ಪರಂಪರೆ ಮತ್ತು ತಲೆಮಾರುಗಳಿಗೆ ಉಳಿಯುವ ಭರವಸೆಯನ್ನು ಹೊತ್ತಿದೆ."
            ) : (
              cms.body
            )}
          </p>

          <ul className={styles.highlights} aria-label="Heritage highlights">
            {HIGHLIGHTS.map(({ id, Icon, labelEn, labelKn }) => (
              <li key={id} className={styles.highlight}>
                <span className={styles.highlightIcon} aria-hidden="true">
                  <Icon size={18} strokeWidth={1.6} />
                </span>
                <span className={styles.highlightLabel}>
                  {isKn ? labelKn : labelEn}
                </span>
              </li>
            ))}
          </ul>

          <Link href="/craft" className={styles.craftLink}>
            {isKn ? "ನಮ್ಮ ಕರಕುಶಲ ನೋಡಿ" : "Explore Our Craft"}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

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
