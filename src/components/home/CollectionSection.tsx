"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CatalogImage } from "@/components/common/CatalogImage";
import {
  CMS_HOME_CHANGE,
  DEFAULT_COLLECTION_IMAGES,
  readCmsHome,
  resolveCollectionImages,
  type CollectionTileId,
} from "@/lib/cmsHome";
import styles from "./CollectionSection.module.css";

interface CollectionTile {
  id: CollectionTileId;
  title: string;
  tagline: string;
  href: string;
  alt: string;
}

const TILE_COPY: CollectionTile[] = [
  {
    id: "sarees",
    title: "Sarees",
    tagline: "A legacy in every drape",
    href: "/collection?category=mysore-silk-sarees",
    alt: "Deep crimson Mysore silk saree with a plain body and a wide gold zari border",
  },
  {
    id: "festive",
    title: "Festive",
    tagline: "For days that shine",
    href: "/collection?category=temple-border-series",
    alt: "Ivory Mysore silk with a gold zari border, folded on warm stone",
  },
  {
    id: "wedding",
    title: "Wedding",
    tagline: "Made for the moment",
    href: "/collection?category=heritage-bridal-series",
    alt: "Deep emerald Mysore silk saree with a traditional gold zari border",
  },
  {
    id: "menswear",
    title: "Menswear",
    tagline: "The considered classic",
    href: "/collection",
    alt: "Folded cream silk shirt and dhoti with a narrow gold edge",
  },
  {
    id: "gifts",
    title: "Gifts",
    tagline: "A keepsake of Karnataka",
    href: "/collection",
    alt: "Open gift box holding a folded crimson Mysore silk saree with a gold zari border and jasmine",
  },
];

export const CollectionSection: React.FC = () => {
  const [images, setImages] = useState<Record<CollectionTileId, string>>({
    ...DEFAULT_COLLECTION_IMAGES,
  });

  useEffect(() => {
    const sync = () => setImages(resolveCollectionImages(readCmsHome()));
    sync();
    window.addEventListener(CMS_HOME_CHANGE, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CMS_HOME_CHANGE, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const tiles = useMemo(
    () =>
      TILE_COPY.map((tile) => ({
        ...tile,
        image: images[tile.id] ?? DEFAULT_COLLECTION_IMAGES[tile.id],
      })),
    [images],
  );

  return (
    <section
      className={styles.collectionSection}
      id="collection"
      aria-label="Our Mysore Silk Collection: The Master Collection"
    >
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerCopy}>
            <p className={styles.sectionKicker}>The Master Collection</p>
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
              <CatalogImage
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
