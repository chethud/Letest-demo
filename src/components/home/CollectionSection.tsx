"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Award } from "lucide-react";
import styles from "./CollectionSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface FeaturedSaree {
  slug: string;
  articleNumber: string;
  category: string;
  name: string;
  kannadaName: string;
  tagline: string;
  image: string;
  zariNote: string;
  colorName: string;
}

export const CollectionSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const isKn = lang === "kn";

  const sarees: FeaturedSaree[] = [
    {
      slug: "article-550-6-gandaberunda",
      articleNumber: "Art. 550/6",
      category: "Heritage Reserve",
      name: "Gandaberunda Royal Crepe",
      kannadaName: "ಗಂಡಭೇರುಂಡ ರಾಯಲ್ ಕ್ರೇಪ್ ಸೀರೆ",
      tagline: "The royal two-headed Mysore insignia woven in certified 24K pure gold zari.",
      image: "/assets/collection/ksic-gandaberunda-royal.jpg",
      zariNote: "24K Gold Zari",
      colorName: "Deep Vermilion",
    },
    {
      slug: "article-550-4g-classic-red",
      articleNumber: "Art. 550/4G",
      category: "Permanent Master",
      name: "Classic Zari Crepe Crimson",
      kannadaName: "ಕ್ಲಾಸಿಕ್ ಜರಿ ಕ್ರೇಪ್ ಕೆಂಪು ಸೀರೆ",
      tagline: "The signature flagship drape recognized worldwide for unbroken century-old grace.",
      image: "/assets/collection/ksic-classic-zari-crepe-red.jpg",
      zariNote: "Certified Pure Zari",
      colorName: "Kumkum Red",
    },
    {
      slug: "article-temple-border-cream",
      articleNumber: "Art. 560/2",
      category: "Ceremonial Series",
      name: "Temple Border Sandalwood",
      kannadaName: "ದೇವಾಲಯ ಬಾರ್ಡರ್ ಐವರಿ ಸೀರೆ",
      tagline: "Unbleached natural mulberry silk sheen paired with geometric stepped gopuram motifs.",
      image: "/assets/collection/ksic-temple-border-cream.jpg",
      zariNote: "Gopuram Gold Zari",
      colorName: "Natural Ivory",
    },
    {
      slug: "article-butta-emerald-green",
      articleNumber: "Art. 550/6 K2",
      category: "Royal Motif Series",
      name: "Peacock & Floral Butta",
      kannadaName: "ರಾಯಲ್ ಹಸಿರು ಬುಟ್ಟಾ ಸೀರೆ",
      tagline: "Dispersed gold coin buttas across deep forest crepe with a grand contrast pallu.",
      image: "/assets/collection/ksic-butta-collection-green.jpg",
      zariNote: "24K Coin Buttas",
      colorName: "Emerald Forest",
    },
  ];

  return (
    <section
      className={styles.collectionSection}
      id="collection"
      aria-label="The House of KSIC Master Saree Collection"
    >
      <div className="container-institutional">
        {/* Editorial Section Header */}
        <div className={`${styles.sectionHeader} reveal-up`}>
          <div>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowRule} />
              <span className={styles.eyebrowText}>
                {isKn ? "ಪ್ರಧಾನ ಸಂಗ್ರಹ" : "THE MASTER COLLECTION"}
              </span>
            </div>
            <h2 className={styles.headline}>
              {isKn ? "ಮೈಸೂರು ರೇಷ್ಮೆ ಸೀರೆಗಳ ವೈಭವ." : "THE REPERTOIRE OF MYSORE SILK."}
            </h2>
            <p className={styles.subtitle}>
              {isKn
                ? "೧೦೦% ಶುದ್ಧ ಮಲ್ಬರಿ ರೇಷ್ಮೆ ಮತ್ತು ಪ್ರಮಾಣೀಕೃತ ೨೪-ಕ್ಯಾರೆಟ್ ಚಿನ್ನದ ಜರಿಯಲ್ಲಿ ನೇಯ್ದ ನಾಲ್ಕು ಶ್ರೇಷ್ಠ ಸೀರೆಗಳು."
                : "Four masterwork silhouettes woven with certified 24K gold zari and 100% natural mulberry silk."}
            </p>
          </div>

          <div>
            <Link href="/collection" className={styles.curvedHeaderBtn}>
              <span>{isKn ? "ಸಂಪೂರ್ಣ ಸಂಗ್ರಹ ವೀಕ್ಷಿಸಿ" : "VIEW COMPLETE ARCHIVE"}</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* 4 Sarees in a Single Luxury Row */}
        <div className={`${styles.sareesRow} reveal-stagger`}>
          {sarees.map((saree) => (
            <Link
              key={saree.slug}
              href={`/collection/${saree.slug}`}
              className={styles.sareeCard}
            >
              {/* Saree Image Frame */}
              <div className={styles.imageWrapper}>
                <Image
                  src={saree.image}
                  alt={saree.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={styles.sareeImage}
                />
                <div className={styles.topBadgeRow}>
                  <span className={styles.articleBadge}>{saree.articleNumber}</span>
                  <span className={styles.purityBadge}>GI-11 · PURE ZARI</span>
                </div>
              </div>

              {/* Saree Editorial Information */}
              <div className={styles.cardBody}>
                <div>
                  <span className={styles.categoryTag}>{saree.category}</span>
                  <h3 className={styles.sareeTitle}>
                    {isKn && saree.kannadaName ? saree.kannadaName : saree.name}
                  </h3>
                  {saree.kannadaName && !isKn && (
                    <div className={styles.sareeKannada}>{saree.kannadaName}</div>
                  )}
                  <p className={styles.sareeTagline}>{saree.tagline}</p>
                </div>

                <div>
                  {/* Purity & Weave Pill Row */}
                  <div className={styles.specPillRow}>
                    <span className={styles.specPill}>{saree.zariNote}</span>
                    <span className={styles.specPill}>{saree.colorName}</span>
                  </div>

                  <div className={styles.viewDetailsBtn}>
                    <span>{isKn ? "ವಿವರಣೆ ನೋಡಿ" : "VIEW MONOGRAPH"}</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
