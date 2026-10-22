"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Heart, Plus } from "lucide-react";
import { COLLECTION_CATEGORIES, KSICProduct } from "@/data/collections";
import styles from "./CollectionShop.module.css";

function matchesCategory(prod: KSICProduct, categoryId: string) {
  if (categoryId === "all") return true;
  const cat = COLLECTION_CATEGORIES.find((item) => item.id === categoryId);
  if (!cat) return false;
  const name = cat.name.toLowerCase();
  const category = prod.category.toLowerCase();
  return category === name || category.includes(name);
}

export type CollectionShopProps = {
  products: KSICProduct[];
  title: string;
  titleAccent: string;
  breadcrumbLabel: string;
  description: string;
  heroImage: string;
  heroAlt?: string;
  readCategoryFromUrl?: boolean;
  omitHeaderOffset?: boolean;
};

export default function CollectionShop({
  products,
  title,
  titleAccent,
  breadcrumbLabel,
  description,
  heroImage,
  heroAlt = "",
  readCategoryFromUrl = false,
  omitHeaderOffset = false,
}: CollectionShopProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<
    "newest" | "featured" | "color" | "weight-asc" | "weight-desc"
  >("newest");

  useEffect(() => {
    if (!readCategoryFromUrl) return;
    const category = new URLSearchParams(window.location.search).get("category");
    if (category && COLLECTION_CATEGORIES.some((item) => item.id === category)) {
      setSelectedCategory(category);
    }
  }, [readCategoryFromUrl]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    COLLECTION_CATEGORIES.forEach((cat) => {
      counts[cat.id] = products.filter((prod) => matchesCategory(prod, cat.id)).length;
    });
    return counts;
  }, [products]);

  const filteredProducts = useMemo(() => {
    const list = products.filter((prod) => matchesCategory(prod, selectedCategory));
    const sorted = [...list];
    if (sortBy === "featured") {
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
    } else if (sortBy === "color") {
      sorted.sort((a, b) => a.primaryColor.localeCompare(b.primaryColor));
    } else if (sortBy === "weight-asc") {
      sorted.sort(
        (a, b) =>
          (a.weightGrams ?? Number.POSITIVE_INFINITY) - (b.weightGrams ?? Number.POSITIVE_INFINITY),
      );
    } else if (sortBy === "weight-desc") {
      sorted.sort((a, b) => (b.weightGrams ?? 0) - (a.weightGrams ?? 0));
    }
    return sorted;
  }, [products, selectedCategory, sortBy]);

  return (
    <div className={`${styles.page}${omitHeaderOffset ? ` ${styles.pageFlush}` : ""}`}>
      <section className={styles.hero} aria-label={breadcrumbLabel}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/collection">Shop</Link>
              <span aria-hidden="true">/</span>
              <span>{breadcrumbLabel}</span>
            </nav>
            <h1 className={styles.title}>
              {title} <span>{titleAccent}</span>
            </h1>
            <p className={styles.lead}>{description}</p>
          </div>
          <div className={styles.heroVisual} aria-hidden={heroAlt ? undefined : true}>
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              priority
              sizes="100vw"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <div className={styles.filtersRow}>
        <div className={styles.filterBar} role="tablist" aria-label="Product categories">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === "all"}
            className={`${styles.pill} ${selectedCategory === "all" ? styles.pillActive : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All Articles <span>{categoryCounts.all}</span>
          </button>
          {COLLECTION_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`${styles.pill} ${selectedCategory === cat.id ? styles.pillActive : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name} <span>{categoryCounts[cat.id] ?? 0}</span>
            </button>
          ))}
        </div>
      </div>

      <section className={styles.gridSection}>
        <div className={styles.toolbar}>
          <div className={styles.countWrap}>
            <p className={styles.count}>
              {filteredProducts.length} Article{filteredProducts.length === 1 ? "" : "s"}
            </p>
            <span className={styles.countRule} aria-hidden="true" />
          </div>
          <div className={styles.toolbarRight}>
            <label className={styles.sort}>
              <span className={styles.sortLabel}>Sort by</span>
              <span className={styles.sortControl}>
                <select
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(
                      event.target.value as
                        | "newest"
                        | "featured"
                        | "color"
                        | "weight-asc"
                        | "weight-desc",
                    )
                  }
                  aria-label="Sort products"
                >
                  <option value="newest">Newest First</option>
                  <option value="featured">Featured First</option>
                  <option value="color">Color A-Z</option>
                  <option value="weight-asc">Weight: Light to Heavy</option>
                  <option value="weight-desc">Weight: Heavy to Light</option>
                </select>
                <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
              </span>
            </label>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className={styles.empty}>No articles in this category.</p>
        ) : (
          <ul className={styles.grid}>
            {filteredProducts.map((prod) => (
              <li key={prod.id} className={styles.card}>
                <Link href={`/collection/${prod.slug}`} className={styles.media}>
                  <Image
                    src={prod.images.hero}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw"
                    className={styles.image}
                  />
                  {prod.articleNumber ? (
                    <span className={styles.badge}>{prod.articleNumber}</span>
                  ) : null}
                  <button
                    type="button"
                    className={styles.wish}
                    aria-label={`Save ${prod.name}`}
                    onClick={(event) => event.preventDefault()}
                  >
                    <Heart size={15} strokeWidth={1.5} />
                  </button>
                  <span className={styles.add} aria-hidden="true">
                    <Plus size={15} strokeWidth={1.75} />
                  </span>
                </Link>
                <div className={styles.meta}>
                  <Link href={`/collection/${prod.slug}`} className={styles.name}>
                    {prod.name}
                  </Link>
                  {/* Price reserved - no inventing values from missing product data */}
                  <p className={styles.price}>&nbsp;</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
