"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERITAGE_MILESTONES } from "@/data/heritage";
import styles from "./Heritage.module.css";

export function HeritageChronology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = HERITAGE_MILESTONES[activeIndex];

  return (
    <section className={styles.timeline} id="timeline" aria-label="Century of Stewardship: The Chronology of Mysore Silk">
      <div className={styles.inner}>
        <header className={styles.timelineHeader}>
          <p className={styles.eyebrow}>Century of Stewardship</p>
          <h2 className={styles.sectionTitle}>
            The Chronology of <span>Mysore Silk</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            From eighteenth-century sericulture, through the 1912 weaving factory, to the corporation of 1980.
          </p>
        </header>

        <div className={styles.rail} role="tablist" aria-label="Chronological epochs">
          {HERITAGE_MILESTONES.map((milestone, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={milestone.year}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`${styles.yearTab} ${selected ? styles.yearTabActive : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {milestone.year}
              </button>
            );
          })}
        </div>

        <article className={styles.epoch} aria-live="polite">
          <div className={styles.epochMedia}>
            {current.image && (
              <Image
                src={current.image}
                alt={`${current.year}: ${current.title}`}
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.epochImage}
              />
            )}
          </div>

          <div className={styles.epochCopy}>
            <p className={styles.epochKicker}>{current.epoch}</p>
            <p className={styles.epochYear}>{current.year}</p>
            <h3 className={styles.epochTitle}>{current.title}</h3>
            <p className={styles.epochDescription}>{current.description}</p>
            <p className={styles.epochSignificance}>
              <span>Institutional significance</span>
              {current.significance}
            </p>
            <div className={styles.epochMeta}>
              {current.statNumber && (
                <p className={styles.epochStat}>
                  <strong>{current.statNumber}</strong>
                  <span>{current.statLabel}</span>
                </p>
              )}
              {current.provenance && <p className={styles.provenance}>Provenance: {current.provenance}</p>}
            </div>
          </div>
        </article>

        <div className={styles.ctaRow}>
          <Link href="/craft" className={styles.cta}>
            <span>Explore Silk Craftsmanship</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
