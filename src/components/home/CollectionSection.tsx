"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CollectionSection.module.css";
import { KSIC_PRODUCTS } from "@/data/collections";
import { useLanguage } from "@/context/LanguageContext";

export const CollectionSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const featureProduct = {
    slug: "article-550-6-gandaberunda",
    articleNumber: "Article 550/6 · Centenary Heritage",
    name: "Gandaberunda Royal Crepe Saree",
    kannadaName: "ಗಂಡಭೇರುಂಡ ರಾಯಲ್ ಕ್ರೇಪ್ ಸೀರೆ",
    category: "Mysore Silk Sarees",
    kannadaCategory: "ಮೈಸೂರು ಸಿಲ್ಕ್ ಸೀರೆಗಳು",
    tagline: "The royal two-headed insignia of Mysore woven in unadulterated 24K gold zari.",
    description: "An archival tribute to Karnataka's royal emblem. Woven on calibrated Swiss Jacquard looms with high-density pebble crepe and wide gold zari borders flanked by temple friezes.",
    kannadaDescription: "ಕರ್ನಾಟಕದ ರಾಜಲಾಂಛನ ಗಂಡಭೇರುಂಡಕ್ಕೆ ಅರ್ಪಿಸಲಾದ ಆರ್ಕೈವಲ್ ಸೀರೆ. ಸ್ವಿಸ್ ಜಾಕ್ವಾರ್ಡ್ ಲೂಮ್‌ಗಳಲ್ಲಿ ಅಪ್ಪಟ 24-ಕ್ಯಾರೆಟ್ ಚಿನ್ನದ ಜರಿಯಲ್ಲಿ ನೇಯ್ದ ಸೀರೆ.",
    image: "/assets/collection/ksic-gandaberunda-royal.jpg",
  };

  const stackProduct1 = KSIC_PRODUCTS.find((p) => p.slug === "article-550-4g-classic-red") || KSIC_PRODUCTS[1];
  const stackProduct2 = KSIC_PRODUCTS.find((p) => p.slug === "article-temple-border-cream") || KSIC_PRODUCTS[2];

  const lowerProducts = [
    {
      slug: "article-550-print-botanical",
      articleNumber: "Article 550/PRINT",
      category: "Heritage Floral, Geometric & Pictorial Prints",
      name: "Crepe Printed Sarees",
      kannadaName: "ಪ್ರಿಂಟೆಡ್ ಕ್ರೇಪ್ ಸೀರೆಗಳು",
      description: "Subtle printed silk surfaces with narrow gold zari selvedges, balancing contemporary daily dignity with century-old filament purity.",
      kannadaDescription: "ಚಿನ್ನದ ಜರಿ ಬಾರ್ಡರ್ ಜೊತೆ ನೈಸರ್ಗಿಕ ಬಣ್ಣಗಳ ಆಕರ್ಷಕ ಪ್ರಿಂಟ್ ಹೊಂದಿರುವ ಮೈಸೂರು ಕ್ರೇಪ್ ರೇಷ್ಮೆ ಸೀರೆಗಳು.",
      image: "/assets/collection/ksic-zari-crepe-printed.jpg",
    },
    {
      slug: "article-mens-pure-silk-shirt",
      articleNumber: "Article MS-101",
      category: "Tailored Mulberry Silk for Men",
      name: "Silk Shirts & Kurtas",
      kannadaName: "ಶುದ್ಧ ರೇಷ್ಮೆ ಶರ್ಟ್‌ಗಳು & ಕುರ್ತಾ",
      description: "Woven on dedicated looms at the Mysore factory using pure natural mulberry silk yarn, imparting natural drape, cooling breathability, and quiet presence.",
      kannadaDescription: "ಮಾನಂದವಾಡಿ ರಸ್ತೆಯ ಕಾರ್ಖಾನೆಯಲ್ಲಿ ನೇಯ್ದ 100% ಶುದ್ಧ ಮಲ್ಬರಿ ರೇಷ್ಮೆಯಿಂದ ಹೊಲಿಯಲ್ಪಟ್ಟ ಪುರುಷರ ಗಣ್ಯ ಉಡುಪು.",
      image: "/assets/collection/ksic-silk-shirts.jpg",
    },
    {
      slug: "article-pure-silk-jacquard-tie",
      articleNumber: "Article TIE-701",
      category: "Official Diplomatic and Ceremonial Gifts",
      name: "Ties & Scarves",
      kannadaName: "ಟೈ ಮತ್ತು ಸ್ಕಾರ್ಫ್‌ಗಳು",
      description: "Pure jacquard silk neckties, shawls, and scarves woven with subtle geometric textures and muted state emblems.",
      kannadaDescription: "ರಾಜ್ಯದ ಗಣ್ಯ ಅತಿಥಿಗಳಿಗೆ ರಾಜತಾಂತ್ರಿಕ ಉಡುಗೊರೆಯಾಗಿ ನೀಡಲಾಗುವ ಶುದ್ಧ ರೇಷ್ಮೆ ಜಾಕ್ವಾರ್ಡ್ ಟೈ ಮತ್ತು ಸ್ಕಾರ್ಫ್‌ಗಳು.",
      image: "/assets/collection/ksic-ties-scarves.jpg",
    },
  ];

  return (
    <section className={`section-spacing ${styles.collectionSection}`} id="collection" aria-label="The House of KSIC Collection">
      <div className="container-institutional">
        {/* Editorial Header */}
        <div className={`${styles.sectionHeader} reveal-up`}>
          <div>
            <span className="editorial-label">{t.collectionKicker}</span>
            <h2 className={styles.headline}>{t.collectionTitle}</h2>
            <p className={styles.subtitle}>{t.collectionSubtitle}</p>
          </div>
          <div>
            <Link href="/collection" className="action-editorial action-editorial-burgundy">
              <span>{t.collectionExploreAll}</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Asymmetric Editorial Grid (Top Tier) */}
        <div className={styles.editorialGrid}>
          {/* Main Large Feature */}
          <Link href={`/collection/${featureProduct.slug}`} className={`${styles.featureCardLarge} reveal-scale hover-lift`}>
            <div className={styles.featureImageWrapLarge}>
              <Image
                src={featureProduct.image}
                alt={featureProduct.name}
                fill
                sizes="(max-width: 960px) 100vw, 60vw"
                className={styles.featureImage}
              />
            </div>
            <div className={styles.featureInfoLarge}>
              <div>
                <span className={styles.categoryTag}>
                  {lang === "kn" ? featureProduct.kannadaCategory : featureProduct.category} · {featureProduct.articleNumber}
                </span>
                <h3 className={styles.featureTitleLarge}>
                  {lang === "kn" ? featureProduct.kannadaName : featureProduct.name}
                </h3>
                <p className={styles.featureDesc}>
                  {lang === "kn" ? featureProduct.kannadaDescription : featureProduct.description}
                </p>
              </div>
              <div className={styles.viewDetailRow}>
                <span>{lang === "kn" ? "ವಿವರಣೆ ಮತ್ತು ನೇಯ್ಗೆ ಮಾಹಿತಿ ನೋಡಿ" : "VIEW MONOGRAPH & WEAVE SPECIFICATIONS"}</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </Link>

          {/* Stack Column (Two Cards) */}
          <div className={`${styles.stackColumn} reveal-up`}>
            <Link href={`/collection/${stackProduct1.slug}`} className={`${styles.stackCard} hover-lift`}>
              <div className={styles.stackImageWrap}>
                <Image
                  src={stackProduct1.images.hero}
                  alt={stackProduct1.name}
                  fill
                  sizes="(max-width: 960px) 100vw, 25vw"
                  className={styles.featureImage}
                />
              </div>
              <div className={styles.stackInfo}>
                <div>
                  <span className={styles.categoryTag}>{stackProduct1.articleNumber}</span>
                  <h4 className={styles.stackTitle}>
                    {lang === "kn" && stackProduct1.kannadaName ? stackProduct1.kannadaName : stackProduct1.name}
                  </h4>
                  <p className={styles.stackDesc}>{stackProduct1.tagline}</p>
                </div>
                <div className={styles.viewDetailRow}>
                  <span>{t.collectionDetailsBtn}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </Link>

            <Link href={`/collection/${stackProduct2.slug}`} className={`${styles.stackCard} hover-lift`}>
              <div className={styles.stackImageWrap}>
                <Image
                  src={stackProduct2.images.hero}
                  alt={stackProduct2.name}
                  fill
                  sizes="(max-width: 960px) 100vw, 25vw"
                  className={styles.featureImage}
                />
              </div>
              <div className={styles.stackInfo}>
                <div>
                  <span className={styles.categoryTag}>{stackProduct2.articleNumber}</span>
                  <h4 className={styles.stackTitle}>
                    {lang === "kn" && stackProduct2.kannadaName ? stackProduct2.kannadaName : stackProduct2.name}
                  </h4>
                  <p className={styles.stackDesc}>{stackProduct2.tagline}</p>
                </div>
                <div className={styles.viewDetailRow}>
                  <span>{t.collectionDetailsBtn}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Lower 3-Column Harmonized Grid */}
        <div className={`${styles.lowerRowGrid} reveal-stagger`}>
          {lowerProducts.map((prod) => (
            <Link key={prod.slug} href={`/collection/${prod.slug}`} className={`${styles.miniCard} hover-lift`}>
              <div className={styles.miniImageWrap}>
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                  className={styles.featureImage}
                />
              </div>
              <div className={styles.miniInfo}>
                <div>
                  <span className={styles.categoryTag}>{prod.category} · {prod.articleNumber}</span>
                  <h4 className={styles.miniTitle}>
                    {lang === "kn" ? prod.kannadaName : prod.name}
                  </h4>
                  <p className={styles.miniDesc}>
                    {lang === "kn" ? prod.kannadaDescription : prod.description}
                  </p>
                </div>
                <div className={styles.viewDetailRow}>
                  <span>{t.collectionDetailsBtn}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
