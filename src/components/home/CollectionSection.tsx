"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CollectionSection.module.css";

interface CollectionTile {
  id: string;
  title: string;
  tagline: string;
  href: string;
  image: string;
  alt: string;
}

const tiles: CollectionTile[] = [
  {
    id: "sarees",
    title: "Sarees",
    tagline: "A legacy in every drape",
    href: "/collection?category=mysore-silk-sarees",
    image: "/assets/collection/editorial-sarees.jpg",
    alt: "Deep crimson Mysore silk saree with a plain body and a wide gold zari border",
  },
  {
    id: "festive",
    title: "Festive",
    tagline: "For days that shine",
    href: "/collection?category=temple-border-series",
    image: "/assets/collection/editorial-festive.jpg",
    alt: "Ivory Mysore silk with a gold zari border, folded on warm stone",
  },
  {
    id: "wedding",
    title: "Wedding",
    tagline: "Made for the moment",
    href: "/collection?category=heritage-bridal-series",
    image: "/assets/collection/editorial-wedding.jpg",
    alt: "Deep emerald Mysore silk saree with a traditional gold zari border",
  },
  {
    id: "menswear",
    title: "Menswear",
    tagline: "The considered classic",
    href: "/collection",
    image: "/assets/collection/editorial-menswear.jpg",
    alt: "Folded cream silk shirt and dhoti with a narrow gold edge",
  },
  {
    id: "gifts",
    title: "Gifts",
    tagline: "A keepsake of Karnataka",
    href: "/collection",
    image: "/assets/collection/editorial-gifts.jpg",
    alt: "Open gift box holding a folded crimson Mysore silk saree with a gold zari border and jasmine",
  },
];

export const CollectionSection: React.FC = () => {
  return (
    <section
      className={styles.collectionSection}
      id="collection"
      aria-label="The Repertoire of Mysore Silk — The Master Collection"
    >
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerCopy}>
            <p className={styles.eyebrow}>The Master Collection</p>
            <h2 className={styles.headline}>
              The Repertoire of <span className={styles.headlineAccent}>Mysore Silk.</span>
            </h2>
            <p className={styles.subtitle}>
              Four silhouettes in pure mulberry silk. Zari is specified as 65% pure silver and 0.65% gold.
            </p>
          </div>
          <Link href="/collection" className={styles.archiveBtn}>
            <span>Shop</span>
            <ArrowRight size={15} className={styles.archiveArrow} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.mosaic}>
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              href={tile.href}
              className={`${styles.tile} ${styles[tile.id as keyof typeof styles] ?? ""}`}
              aria-label={`${tile.title}. ${tile.tagline}`}
            >
              <Image
                src={tile.image}
                alt={tile.alt}
                fill
                sizes={
                  tile.id === "sarees"
                    ? "(max-width: 900px) 100vw, 44vw"
                    : "(max-width: 900px) 50vw, 28vw"
                }
                className={styles.tileImage}
              />
              <span className={styles.scrim} aria-hidden="true" />
              <span className={styles.caption}>
                <span className={styles.tileTitle}>{tile.title}</span>
                <span className={styles.tileTagline}>{tile.tagline}</span>
              </span>
              <ArrowRight size={18} className={styles.tileArrow} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
