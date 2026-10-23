"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { KSIC_PRODUCTS, COLLECTION_CATEGORIES, KSICProduct } from "@/data/collections";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./CollectionCatalogue.module.css";

function matchesCategory(prod: KSICProduct, categoryId: string) {
  if (categoryId === "all") return true;
  const cat = COLLECTION_CATEGORIES.find((item) => item.id === categoryId);
  if (!cat) return false;
  const name = cat.name.toLowerCase();
  const category = prod.category.toLowerCase();
  return category === name || category.includes(name);
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

type CatalogueProps = {
  products?: KSICProduct[];
  title?: string;
  titleAccent?: string;
};

export default function CollectionCatalogueClient({
  products = KSIC_PRODUCTS,
  title = "The House of",
  titleAccent = "KSIC.",
}: CatalogueProps = {}) {
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    if (category && COLLECTION_CATEGORIES.some((item) => item.id === category)) {
      setSelectedCategory(category);
    }
  }, []);

  useEffect(() => {
    setFeaturedIndex(0);
  }, [selectedCategory]);

  const filteredProducts = useMemo(
    () => products.filter((prod) => matchesCategory(prod, selectedCategory)),
    [products, selectedCategory]
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    COLLECTION_CATEGORIES.forEach((cat) => {
      counts[cat.id] = products.filter((prod) => matchesCategory(prod, cat.id)).length;
    });
    return counts;
  }, [products]);

  const safeIndex = filteredProducts.length
    ? Math.min(featuredIndex, filteredProducts.length - 1)
    : 0;
  const featured = filteredProducts[safeIndex];
  const rest = filteredProducts.filter((_, index) => index !== safeIndex);

  function showFeatured(direction: number) {
    if (filteredProducts.length < 2) return;
    setFeaturedIndex((current) => {
      const total = filteredProducts.length;
      return (current + direction + total) % total;
    });
  }

  return (
    <div className={styles.catalogueWrapper}>
      <section className={styles.headerSection}>
        <div className={`container-institutional ${styles.masthead}`}>
          <div className={styles.mastheadTitle}>
            <button
              type="button"
              className={styles.backButton}
              onClick={() => {
                if (window.history.length > 1) router.back();
                else router.push("/");
              }}
            >
              <ArrowLeft size={15} aria-hidden="true" />
              <span>Back</span>
            </button>
            <h1 className={styles.pageTitle}>
              {title} <span>{titleAccent}</span>
            </h1>
          </div>
          <div className={styles.mastheadAside}>
            <GandaberundaMark />
          </div>
        </div>

        <div className={`container-institutional ${styles.filterBar}`}>
          <div className={styles.filterRibbon} role="tablist" aria-label={t.colPageCatLabel}>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === "all"}
              onClick={() => {
                setSelectedCategory("all");
                setFeaturedIndex(0);
              }}
              className={`${styles.filterPill} ${
                selectedCategory === "all" ? styles.filterPillActive : ""
              }`}
            >
              {t.colPageAllCategories}
              <span className={styles.filterCount}>{categoryCounts.all}</span>
            </button>
            {COLLECTION_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setFeaturedIndex(0);
                  }}
                  className={`${styles.filterPill} ${isActive ? styles.filterPillActive : ""}`}
                >
                  {cat.name}
                  <span className={styles.filterCount}>{categoryCounts[cat.id] ?? 0}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container-institutional">
          {featured ? (
            <article className={styles.feature}>
              <Link href={`/collection/${featured.slug}`} className={styles.featureMedia}>
                <Image
                  src={featured.images.hero}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 800px) 100vw, 75vw"
                  className={styles.featureImage}
                />
                <span className={styles.featureScrim} aria-hidden />
                <span className={styles.featureOverlay}>
                  <h2 className={styles.featureTitle}>{featured.name}</h2>
                  <span className={styles.viewArticle}>
                    View article
                    <span className={styles.viewArrow} aria-hidden>
                      <ArrowRight size={14} />
                    </span>
                  </span>
                </span>
              </Link>
              <aside className={styles.featurePanel}>
                <HeritageOrnament />
                <div className={styles.featureNav}>
                  <span className={styles.featureCount}>
                    {pad(safeIndex + 1)}
                    <span> / {pad(filteredProducts.length)}</span>
                  </span>
                  <button
                    type="button"
                    className={styles.navBtn}
                    aria-label="Previous article"
                    disabled={filteredProducts.length < 2}
                    onClick={() => showFeatured(-1)}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${styles.navBtnFilled}`}
                    aria-label="Next article"
                    disabled={filteredProducts.length < 2}
                    onClick={() => showFeatured(1)}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
                <p className={styles.featureStatement}>
                  A timeless weave
                  <br />
                  in royal tradition.
                </p>
              </aside>
            </article>
          ) : (
            <p className={styles.emptyState}>No articles in this category.</p>
          )}

          {(rest.length > 0 || featured) && (
            <div className={styles.productGrid}>
              <Link href="/heritage" className={styles.editorial}>
                <span className={styles.editorialMedia}>
                  <Image
                    src="/assets/collection/editorial-festive.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 900px) 50vw, 22vw"
                    className={styles.productImage}
                  />
                </span>
                <span className={styles.editorialBody}>
                  <span className={styles.editorialEyebrow}>Our collections</span>
                  <span className={styles.editorialTitle}>Heritage in Every Weave</span>
                  <span className={styles.editorialArrow} aria-hidden>
                    <ArrowRight size={15} />
                  </span>
                  <span className={styles.editorialFoot}>Karnataka Silk Industries Corporation</span>
                </span>
              </Link>
              {rest.map((prod) => (
                <Link key={prod.id} href={`/collection/${prod.slug}`} className={styles.productCard}>
                  <span className={styles.imageContainer}>
                    <Image
                      src={prod.images.hero}
                      alt=""
                      fill
                      sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
                      className={styles.productImage}
                    />
                    <span className={styles.articleBadge}>{prod.articleNumber}</span>
                  </span>
                  <span className={styles.cardContent}>
                    <span className={styles.cardCopy}>
                      <span className={styles.categoryTag}>{prod.category}</span>
                      <span className={styles.cardTitle}>{prod.name}</span>
                    </span>
                    <span className={styles.arrow} aria-hidden>
                      <ArrowRight size={14} />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function HeritageOrnament() {
  return (
    <svg className={styles.panelOrnament} viewBox="0 0 64 48" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M32 6c2 6 6 10 12 12-6 2-10 6-12 12-2-6-6-10-12-12 6-2 10-6 12-12Z" />
        <path d="M32 18v16" />
        <path d="M24 40h16" />
      </g>
    </svg>
  );
}

function GandaberundaMark() {
  return (
    <svg className={styles.mark} viewBox="0 0 120 72" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M60 18c-6 8-16 12-28 14 10 2 18 8 22 18 2-8 8-14 18-18-12-2-20-8-12-14Z" />
        <path d="M60 18c6 8 16 12 28 14-10 2-18 8-22 18-2-8-8-14-18-18 12-2 20-8 12-14Z" />
        <path d="M34 28c-8-6-16-6-22-2 8 1 14 6 16 12" />
        <path d="M86 28c8-6 16-6 22-2-8 1-14 6-16 12" />
        <circle cx="42" cy="24" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="78" cy="24" r="1.2" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
