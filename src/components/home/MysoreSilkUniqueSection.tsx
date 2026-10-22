"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MYSORE_SILK_UNIQUE_INTRO,
  MYSORE_SILK_UNIQUE_PILLARS,
} from "@/data/mysoreSilkUnique";
import styles from "./MysoreSilkUniqueSection.module.css";

export const MysoreSilkUniqueSection: React.FC = () => {
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
            Distinctly Mysore Silk
            <span className={styles.eyebrowRule} aria-hidden="true" />
          </p>
          <h2 className={styles.title}>Why Mysuru Silk is Special</h2>
          <p className={styles.lead}>{MYSORE_SILK_UNIQUE_INTRO}</p>
          <Link href="/craft" className={styles.cta}>
            Discover Our Process <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className={styles.pillars}>
          {MYSORE_SILK_UNIQUE_PILLARS.map((pillar) => {
            const isUniqueCode = pillar.id === "unique-code";
            return (
              <li
                key={pillar.id}
                className={`${styles.pillar}${isUniqueCode ? ` ${styles.pillarUniqueCode}` : ""}`}
              >
                <div className={styles.arch}>
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 900px) 45vw, 18vw"
                    className={styles.archImage}
                  />
                </div>
                <p className={styles.pillarNumber}>{pillar.number}</p>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.short}</p>
                {isUniqueCode ? (
                  <a
                    href="#saree-serial-form"
                    className={styles.verifyCue}
                    onClick={scrollToForm}
                  >
                    <span className={styles.verifyCueLabel}>Verify here</span>
                  </a>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
