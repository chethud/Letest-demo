"use client";

import React, { useEffect, useState } from "react";
import styles from "./Heritage.module.css";

const SLIDE_MS = 5000;

export function HeritageScroll({ children }: { children: React.ReactNode }) {
  const slides = React.Children.toArray(children);
  const count = Math.max(slides.length, 1);
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 900px)");

    const sync = () => setAuto(!reduced.matches && !narrow.matches);
    sync();
    reduced.addEventListener("change", sync);
    narrow.addEventListener("change", sync);
    return () => {
      reduced.removeEventListener("change", sync);
      narrow.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!auto || count < 2) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % count);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [auto, count, index]);

  return (
    <div className={styles.track}>
      <div className={styles.sticky}>
        <div
          className={styles.slides}
          style={auto ? { transform: `translate3d(${(-index * 100) / count}%, 0, 0)` } : undefined}
        >
          {slides}
        </div>
        {auto && count > 1 && (
          <div className={styles.dots} role="tablist" aria-label="Heritage panels">
            {slides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                role="tab"
                aria-selected={dotIndex === index}
                aria-label={dotIndex === 0 ? "Archival monograph" : "Royal court patronage"}
                className={`${styles.dot} ${dotIndex === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
