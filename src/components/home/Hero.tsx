"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";
import { useLanguage } from "@/context/LanguageContext";

type HeroSlide = {
  src: string;
  alt: string;
  kickerEn: string;
  kickerKn: string;
  titleEn: string;
  titleKn: string;
  lineEn: string;
  lineKn: string;
  ctaEn: string;
  ctaKn: string;
  href: string;
  /** Second slide is panoramic — pin silk to the right so text stays clear on the left. */
  align?: "center" | "right";
};

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/assets/heritage/rose-pink-silk-temple.png",
    alt: "Rose pink Mysore silk saree with a gold zari border, displayed in a sunlit temple setting",
    kickerEn: "A LEGACY OF INDIAN CRAFTSMANSHIP",
    kickerKn: "ಭಾರತೀಯ ಕರಕುಶಲದ ಪರಂಪರೆ",
    titleEn: "Woven in Gold.",
    titleKn: "ಚಿನ್ನದಲ್ಲಿ ನೇಯಲ್ಪಟ್ಟದ್ದು.",
    lineEn: "Rooted in Royalty.",
    lineKn: "ರಾಜಪರಂಪರೆಯಲ್ಲಿ ಬೇರೂರಿದ್ದು.",
    ctaEn: "DISCOVER THE COLLECTION",
    ctaKn: "ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ",
    href: "/collection",
    align: "center",
  },
  {
    src: "/assets/heritage/hero-new-arrivals.png",
    alt: "Crimson Mysore silk with gold zari in a sunlit niche, for new arrivals",
    kickerEn: "JUST ARRIVED",
    kickerKn: "ಹೊಸದಾಗಿ ಬಂದಿದೆ",
    titleEn: "New Season Silk.",
    titleKn: "ಹೊಸ ಋತುವಿನ ರೇಷ್ಮೆ.",
    lineEn: "Fresh from the loom.",
    lineKn: "ಮಗ್ಗದಿಂದ ಹೊಸದಾಗಿ.",
    ctaEn: "CHECK THE NEW ARRIVALS",
    ctaKn: "ಹೊಸ ಆಗಮನಗಳನ್ನು ನೋಡಿ",
    href: "/new-arrivals",
    align: "right",
  },
];

const SLIDE_INTERVAL_MS = 4000;

export const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = HERO_SLIDES[activeIndex];
  const kn = lang === "kn";

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="hero-section"
      className={styles.heroSection}
      style={{ position: "relative", overflow: "hidden" }}
      aria-label="Official Karnataka Mysore Silk Heritage"
    >
      <div className={styles.heroBackground} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {HERO_SLIDES.map((item, index) => (
          <div
            key={item.src}
            className={`${styles.heroSlide} ${index === activeIndex ? styles.heroSlideActive : ""}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`${styles.heroBackgroundImageDesktop} ${
                item.align === "right" ? styles.heroImageRight : styles.heroImageCenter
              }`}
            />
            <Image
              src={item.src}
              alt=""
              fill
              priority={index === 0}
              sizes="(max-width: 900px) 100vw, 1px"
              className={`${styles.heroBackgroundImageMobile} ${
                item.align === "right" ? styles.heroImageRight : styles.heroImageCenter
              }`}
            />
          </div>
        ))}
        <div className={styles.heroTextBackdropScrim} aria-hidden="true" />
        <div className={styles.bottomTransitionFade} aria-hidden="true" />
      </div>

      <div className={styles.heroInnerContainer} key={slide.src}>
        <div className={styles.leftEditorialBlock}>
          <div className={styles.kickerGroup}>
            <span className={styles.kickerEnglish}>{kn ? slide.kickerKn : slide.kickerEn}</span>
          </div>

          <h1 className={styles.editorialTitle}>
            <span className={styles.titleLine}>{kn ? slide.titleKn : slide.titleEn}</span>
            <span className={styles.titleLine}>{kn ? slide.lineKn : slide.lineEn}</span>
          </h1>

          <div className={styles.actionContainer}>
            <Link href={slide.href} className={styles.exploreLink}>
              <span className={styles.exploreText}>{kn ? slide.ctaKn : slide.ctaEn}</span>
              <ArrowRight size={15} className={styles.exploreArrow} />
            </Link>
          </div>
        </div>

        <div className={styles.mobileCampaign}>
          <p className={styles.mobileEyebrow}>{kn ? slide.kickerKn : slide.kickerEn}</p>
          <h1 className={styles.mobileHeadline}>
            <span>{kn ? slide.titleKn : slide.titleEn}</span>
            <span>{kn ? slide.lineKn : slide.lineEn}</span>
          </h1>
          <Link href={slide.href} className={styles.mobileCta}>
            <span>{kn ? slide.ctaKn : slide.ctaEn}</span>
            <ArrowRight size={14} className={styles.mobileCtaArrow} />
          </Link>
        </div>
      </div>

      <div className={styles.heroDots} role="tablist" aria-label="Hero images">
        {HERO_SLIDES.map((item, index) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show image ${index + 1}`}
            className={`${styles.heroDot} ${index === activeIndex ? styles.heroDotActive : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className={styles.mobileScroll} aria-hidden="true">
        <span className={styles.mobileScrollLine} />
        <span className={styles.mobileScrollDot} />
        <span className={styles.mobileScrollLabel}>
          {kn ? "ರೇಷ್ಮೆಯ ಕಲೆ" : "Art of Silk"}
        </span>
      </div>
    </section>
  );
};
