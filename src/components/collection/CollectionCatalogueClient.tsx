"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { KSIC_PRODUCTS, COLLECTION_CATEGORIES, KSICProduct } from "@/data/collections";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./CollectionCatalogue.module.css";

export default function CollectionCatalogueClient() {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? KSIC_PRODUCTS
      : KSIC_PRODUCTS.filter((prod) => {
          const cat = COLLECTION_CATEGORIES.find((c) => c.id === selectedCategory);
          return (
            prod.category.toLowerCase() === cat?.name.toLowerCase() ||
            prod.category.toLowerCase().includes(cat?.name.toLowerCase() || "")
          );
        });

  return (
    <div className={styles.catalogueWrapper}>
      {/* Editorial Header */}
      <section className={styles.headerSection}>
        <div className="container-institutional reveal-up">
          <span className="editorial-label">{t.colPageKicker}</span>
          <h1 className={styles.pageTitle}>{t.colPageTitle}</h1>
          <p className={styles.pageSubtitle}>{t.colPageSubtitle}</p>
        </div>
      </section>

      {/* Categories Interactive Filter Ribbon */}
      <section className={styles.filterSection}>
        <div className="container-institutional reveal-up">
          <div className={styles.filterRibbon}>
            <span className={styles.filterLabel}>{t.colPageCatLabel}</span>

            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`${styles.filterPill} ${
                selectedCategory === "all" ? styles.filterPillActive : ""
              }`}
            >
              {t.colPageAllCategories}
            </button>

            {COLLECTION_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const catTitle = lang === "kn" ? cat.kannadaName : cat.name;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`${styles.filterPill} ${
                    isActive ? styles.filterPillActive : ""
                  }`}
                >
                  {catTitle}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Product Grid */}
      <section className={styles.gridSection}>
        <div className="container-institutional">
          <div className={`${styles.productGrid} reveal-stagger`}>
            {filteredProducts.map((prod: KSICProduct) => {
              const displayName =
                lang === "kn" && prod.kannadaName ? prod.kannadaName : prod.name;

              return (
                <article key={prod.id} className={`${styles.productCard} hover-lift`}>
                  {/* Image Container with precise aspect ratio */}
                  <div className={styles.imageContainer}>
                    <Image
                      src={prod.images.hero}
                      alt={displayName}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.productImage}
                      priority={prod.featured}
                    />
                    <div className={styles.articleBadge}>
                      {prod.articleNumber}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className={styles.cardContent}>
                    <div>
                      <span className={styles.categoryTag}>{prod.category}</span>
                      <h2 className={styles.cardTitle}>{displayName}</h2>
                      <p className={styles.cardTagline}>{prod.tagline}</p>

                      {/* Technical Specs Box */}
                      <div className={styles.specsBox}>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>{t.colPageMaterial}</span>
                          <span className={styles.specValue}>{prod.material}</span>
                        </div>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>{t.colPageZari}</span>
                          <span className={styles.specValue}>{prod.zari}</span>
                        </div>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>{t.colPageCert}</span>
                          <span className={styles.specValue}>{prod.authenticity.giTag}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className={styles.cardActions}>
                      <Link
                        href={`/collection/${prod.slug}`}
                        className={styles.examineLink}
                      >
                        <span>{t.colPageExamineBtn}</span>
                        <ArrowRight size={14} />
                      </Link>

                      <Link
                        href={`/stores?enquiry=${encodeURIComponent(prod.articleNumber)}`}
                        className={styles.enquireLink}
                      >
                        {t.colPageEnquireBtn}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Institutional Verification Note */}
          <div className={`${styles.policyCard} reveal-scale`}>
            <span className="editorial-label" style={{ justifyContent: "center" }}>
              {t.colPagePolicyKicker}
            </span>
            <h3 className={styles.policyTitle}>{t.colPagePolicyTitle}</h3>
            <p className={styles.policyDesc}>{t.colPagePolicyDesc}</p>
            <div className={styles.policyActionWrap}>
              <Link href="/stores" className="action-editorial action-editorial-burgundy">
                <span>{t.colPageLocateBtn}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
