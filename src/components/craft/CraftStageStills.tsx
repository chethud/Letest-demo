"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CraftProcessStill } from "@/data/craft";
import styles from "./CraftStageStills.module.css";

type CraftStageStillsProps = {
  stills: CraftProcessStill[];
  stageLabel: string;
};

export function CraftStageStills({ stills, stageLabel }: CraftStageStillsProps) {
  const labelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const current = isOpen ? stills[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);

  const goTo = useCallback(
    (next: number) => {
      setOpenIndex((next + stills.length) % stills.length);
    },
    [stills.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") goTo((openIndex ?? 0) - 1);
      if (event.key === "ArrowRight") goTo((openIndex ?? 0) + 1);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, openIndex, close, goTo]);

  if (!stills.length) return null;

  return (
    <>
      <div className={styles.gallery} aria-labelledby={labelId}>
        <p id={labelId} className={styles.galleryLabel}>
          Process stills · tap to enlarge
        </p>
        <ul className={styles.thumbGrid}>
          {stills.map((still, index) => (
            <li key={still.name} className={styles.thumbItem}>
              <button
                type="button"
                className={styles.thumbBtn}
                onClick={() => setOpenIndex(index)}
                aria-label={`View ${still.name}`}
              >
                <span className={styles.thumbMedia}>
                  <Image
                    src={still.image}
                    alt=""
                    fill
                    sizes="120px"
                    className={styles.thumbImage}
                  />
                </span>
                <span className={styles.thumbTitle}>{still.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && current ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${stageLabel}: ${current.name}`}
          onClick={close}
        >
          <div
            className={styles.lightboxPanel}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.lightboxBar}>
              <div className={styles.lightboxMeta}>
                <p className={styles.lightboxStage}>{stageLabel}</p>
                <h3 className={styles.lightboxTitle}>{current.name}</h3>
              </div>
              <p className={styles.lightboxCount} aria-live="polite">
                {String((openIndex ?? 0) + 1).padStart(2, "0")}
                <span aria-hidden="true"> / </span>
                {String(stills.length).padStart(2, "0")}
              </p>
              <button
                ref={closeRef}
                type="button"
                className={styles.lightboxClose}
                onClick={close}
                aria-label="Close"
              >
                <X size={18} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>

            <div className={styles.lightboxFigure}>
              <Image
                key={current.image}
                src={current.image}
                alt={current.alt}
                fill
                sizes="(max-width: 900px) 94vw, 860px"
                className={styles.lightboxImage}
                priority
              />
            </div>

            <div className={styles.lightboxNav}>
              <button
                type="button"
                className={styles.lightboxNavBtn}
                onClick={() => goTo((openIndex ?? 0) - 1)}
                aria-label="Previous still"
              >
                <ChevronLeft size={18} strokeWidth={1.75} aria-hidden="true" />
                Previous
              </button>
              <button
                type="button"
                className={styles.lightboxNavBtn}
                onClick={() => goTo((openIndex ?? 0) + 1)}
                aria-label="Next still"
              >
                Next
                <ChevronRight size={18} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
