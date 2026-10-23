"use client";

import React, { useCallback, useId, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./OurHeritage.module.css";

const MILESTONES = [
  {
    tab: "1912",
    year: "1912",
    epoch: "Royal works",
    title: "Royal factory founded",
    body: "The silk weaving factory in Mysuru, presently owned by KSIC, was established by Sri Nalvadi Krishnaraja Wodeyar, Maharaja of Mysore. Silk fabrics were manufactured and supplied for the royal family, with ornamental fabrics for their armed forces.",
    image: "/assets/heritage/ksic-1912-foundation.jpg",
    alt: "Foundation of the Mysuru silk weaving works",
  },
  {
    tab: "1932",
    year: "1930-32",
    epoch: "Industrial expansion",
    title: "First of its kind in India",
    body: "The unit started with 10 looms and gradually increased to 138. Looms and preparatory machines were imported from Switzerland - the first installation of its kind in India.",
    image: "/assets/heritage/ksic-1932-jacquard.jpg",
    alt: "Expansion of the Mysuru weaving factory",
  },
  {
    tab: "WWII",
    year: "WWII era",
    epoch: "Wartime silk",
    title: "Parachute silk for the war",
    body: "In its early days the Mysuru works also produced parachute silk for the Second World War, an industrial role beyond court and ceremonial cloth.",
    image: "/assets/heritage/ksic-1932-jacquard.jpg",
    alt: "Historical view of the Mysuru silk weaving works",
  },
  {
    tab: "1947",
    year: "Post-1947",
    epoch: "State succession",
    title: "State Sericulture takes control",
    body: "After India gained Independence, the Mysore State Sericulture Department took control of the silk weaving factory.",
    image: "/assets/heritage/mysore-palace-heritage.jpg",
    alt: "Mysore Palace, symbol of the transition into state stewardship",
  },
  {
    tab: "1980",
    year: "1980",
    epoch: "Corporation",
    title: "KSIC takes charge",
    body: "The silk weaving factory was handed over to Karnataka Silk Industries Corporation Limited, a Government of Karnataka enterprise, popularly known as KSIC.",
    image: "/assets/heritage/ksic-1980-incorporation.jpg",
    alt: "KSIC incorporated as a Government of Karnataka enterprise",
  },
  {
    tab: "2005",
    year: "2005",
    epoch: "GI custody",
    title: "Sole proprietor for Mysore Silk",
    body: "Having gained recognition for authentic silk manufacturing, KSIC obtained Geographical Indication Registration (GI-11) for ‘Mysore Silk’ and became the sole proprietor for the name.",
    image: "/assets/heritage/ksic-2005-gi-certificate.jpg",
    alt: "GI certificate held by KSIC",
  },
  {
    tab: "2012",
    year: "2012",
    epoch: "Centenary",
    title: "Factory centenary year",
    body: "The KSIC Silk Weaving Factory at Mysuru completed 100 years - the first Government industry in Karnataka to celebrate a centenary year.",
    image: "/assets/factory/ksic-factory-heritage-cinematic.jpg",
    alt: "KSIC Silk Weaving Factory centenary",
  },
] as const;

export function OurHeritageTimeline() {
  const tablistId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = MILESTONES[activeIndex];
  const progress = activeIndex / (MILESTONES.length - 1);

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(MILESTONES.length - 1, index)));
  }, []);

  const onTabListKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const next = Math.max(0, activeIndex - 1);
      goTo(next);
      tabRefs.current[next]?.focus();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = Math.min(MILESTONES.length - 1, activeIndex + 1);
      goTo(next);
      tabRefs.current[next]?.focus();
    }
    if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
      tabRefs.current[0]?.focus();
    }
    if (event.key === "End") {
      event.preventDefault();
      goTo(MILESTONES.length - 1);
      tabRefs.current[MILESTONES.length - 1]?.focus();
    }
  };

  return (
    <section
      className={`section-spacing ${styles.timeline}`}
      aria-labelledby="timeline-heading"
    >
      <div className="container-institutional">
        <header className={styles.timelineHeader}>
          <span className="editorial-label">Institutional timeline</span>
          <h2 id="timeline-heading" className="display-section">
            From royal works to centenary
          </h2>
          <p className={styles.sectionLead}>
            Six passages that define KSIC as an institution - from the Mysuru works to public
            stewardship.
          </p>
        </header>

        <div className={styles.timelineRail} aria-label="Chronological selector">
          <div className={styles.timelineRailTrack} aria-hidden="true">
            <span className={styles.timelineRailBase} />
            <span
              className={styles.timelineRailProgress}
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>

          <div
            id={tablistId}
            className={styles.timelineYears}
            role="tablist"
            aria-label="KSIC heritage years"
            onKeyDown={onTabListKeyDown}
          >
            {MILESTONES.map((item, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={item.tab}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`${tablistId}-tab-${index}`}
                  aria-selected={selected}
                  aria-controls={`${tablistId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={`${styles.yearNode} ${selected ? styles.yearNodeActive : ""}`}
                  onClick={() => goTo(index)}
                >
                  <span className={styles.yearDot} />
                  <span className={styles.yearLabel}>{item.tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        <article
          id={`${tablistId}-panel`}
          className={styles.epoch}
          role="tabpanel"
          aria-labelledby={`${tablistId}-tab-${activeIndex}`}
          aria-live="polite"
        >
          <div className={styles.epochCopy}>
            <div className={styles.epochMeta}>
              <p className={styles.epochKicker}>{current.epoch}</p>
              <p className={styles.epochCount}>
                {String(activeIndex + 1).padStart(2, "0")}
                <span aria-hidden="true"> / </span>
                {String(MILESTONES.length).padStart(2, "0")}
              </p>
            </div>

            <p className={styles.milestoneYear}>{current.year}</p>
            <h3 className={styles.milestoneTitle}>{current.title}</h3>
            <p className={styles.milestoneBody}>{current.body}</p>

            <div className={styles.epochNav}>
              <button
                type="button"
                className={styles.epochNavBtn}
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous milestone"
              >
                <ChevronLeft size={16} strokeWidth={1.75} aria-hidden="true" />
                Previous
              </button>
              <button
                type="button"
                className={styles.epochNavBtn}
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === MILESTONES.length - 1}
                aria-label="Next milestone"
              >
                Next
                <ChevronRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className={styles.epochMedia}>
            <Image
              key={current.image}
              src={current.image}
              alt={current.alt}
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.epochImage}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
