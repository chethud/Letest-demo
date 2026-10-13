"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CollectionSection.module.css";

interface ProductItem {
  slug: string;
  articleNumber: string;
  category: string;
  name: string;
  image: string;
  zariBadge: string;
}

const products: ProductItem[] = [
  {
    slug: "article-550-6-gandaberunda",
    articleNumber: "ART. 550/6",
    category: "HERITAGE RESERVE",
    name: "Gandaberunda Royal Crepe",
    image: "/assets/collection/ksic-gandaberunda-royal.jpg",
    zariBadge: "GI-11 · PURE ZARI",
  },
  {
    slug: "article-550-4g-classic-red",
    articleNumber: "ART. 550/4G",
    category: "PERMANENT MASTER",
    name: "Classic Zari Crepe Crimson",
    image: "/assets/collection/ksic-classic-zari-crepe-red.jpg",
    zariBadge: "GI-11 · PURE ZARI",
  },
  {
    slug: "article-temple-border-cream",
    articleNumber: "ART. 560/2",
    category: "CEREMONIAL SERIES",
    name: "Temple Border Sandalwood",
    image: "/assets/collection/ksic-temple-border-cream.jpg",
    zariBadge: "GI-11 · PURE ZARI",
  },
  {
    slug: "article-butta-emerald-green",
    articleNumber: "ART. 550/6 K2",
    category: "ROYAL MOTIF SERIES",
    name: "Peacock & Floral Butta",
    image: "/assets/collection/ksic-butta-collection-green.jpg",
    zariBadge: "GI-11 · PURE ZARI",
  },
];

export const CollectionSection: React.FC = () => {
  return (
    <section
      className={styles.collectionSection}
      id="collection"
      aria-label="The Repertoire of Mysore Silk — The Master Collection"
    >
      <div className="container-institutional">
        {/* Editorial Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              <span className={styles.eyebrowText}>THE MASTER COLLECTION</span>
            </div>
            <h2 className={styles.headline}>
              THE REPERTOIRE OF MYSORE SILK.
            </h2>
            <p className={styles.subtitle}>
              Four masterwork silhouettes woven with certified 24K gold zari and 100% natural mulberry silk.
            </p>
          </div>

          <div className={styles.headerRight}>
            <Link href="/collection" className={styles.archiveBtn}>
              <span>VIEW COMPLETE ARCHIVE</span>
              <ArrowRight size={14} className={styles.archiveArrow} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* 4 Product Cards in a Single Horizontal Row */}
        <div className={styles.sareesRow}>
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/collection/${product.slug}`}
              className={styles.sareeCard}
            >
              {/* Top: Saree Image Container */}
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className={styles.sareeImage}
                />

                {/* Top Badges */}
                <div className={styles.topBadgesRow}>
                  <span className={styles.articleBadge}>
                    {product.articleNumber}
                  </span>
                  <span className={styles.zariBadge}>
                    {product.zariBadge}
                  </span>
                </div>
              </div>

              {/* Bottom: Minimal Product Information Area */}
              <div className={styles.cardInfo}>
                <div className={styles.categoryLabel}>{product.category}</div>
                <h3 className={styles.productName}>{product.name}</h3>

                <div className={styles.cardDivider} aria-hidden="true" />

                <div className={styles.bottomMetaRow}>
                  <div className={styles.arrowCircle} aria-hidden="true">
                    <ArrowRight size={14} className={styles.arrowIcon} />
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
