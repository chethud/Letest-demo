"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { CatalogImage } from "@/components/common/CatalogImage";
import { MYSORE_SILK_UNIQUE_PILLARS } from "@/data/mysoreSilkUnique";
import { useCmsHome } from "@/hooks/useCmsHome";
import { resolveUniqueContent, type UniquePillarId } from "@/lib/cmsHome";
import styles from "./MysoreSilkUniqueSection.module.css";

export const MysoreSilkUniqueSection: React.FC = () => {
  const cms = resolveUniqueContent(useCmsHome());

  const scrollToForm = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const form = document.getElementById("saree-serial-form");
      if (!form) return;
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      const input = form.querySelector<HTMLInputElement>("input");
      window.setTimeout(() => input?.focus({ preventScroll: true }), 450);
    },
    [],
  );

  return (
    <section
      id="mysore-silk-unique"
      className={styles.section}
      aria-label="What makes Mysore Silk unique"
    >
      <div className={styles.wrap}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            {cms.eyebrow}
          </p>
          <h2 className={styles.title}>{cms.title}</h2>
          <p className={styles.lead}>{cms.intro}</p>
          <Link href="/craft" className={styles.cta}>
            Discover Our Process <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className={styles.pillars}>
          {MYSORE_SILK_UNIQUE_PILLARS.map((pillar) => {
            const isUniqueCode = pillar.id === "unique-code";
            const pillarId = pillar.id as UniquePillarId;
            const image = cms.pillarImages[pillarId] ?? pillar.image;
            const copy = cms.pillarCopy[pillarId];
            return (
              <li
                key={pillar.id}
                className={`${styles.pillar}${isUniqueCode ? ` ${styles.pillarUniqueCode}` : ""}`}
              >
                <div className={styles.arch}>
                  <CatalogImage
                    src={image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 820px) 34vw, (max-width: 1100px) 28vw, 16vw"
                    className={styles.archImage}
                  />
                </div>
                <div className={styles.pillarBody}>
                  <p className={styles.pillarNumber}>{pillar.number}</p>
                  <h3 className={styles.pillarTitle}>{copy?.title || pillar.title}</h3>
                  <p className={styles.pillarText}>{copy?.short || pillar.short}</p>
                  {isUniqueCode ? (
                    <a
                      href="#saree-serial-form"
                      className={styles.verifyCue}
                      onClick={scrollToForm}
                    >
                      Verify Authenticity <span aria-hidden="true">→</span>
                    </a>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
