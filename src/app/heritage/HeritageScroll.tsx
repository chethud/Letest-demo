"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Heritage.module.css";

export function HeritageScroll({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [pin, setPin] = useState<"before" | "fixed" | "after">("before");

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 900px)");

    const measure = () => {
      const pinned = !reduced.matches && !narrow.matches;
      if (!pinned) {
        setPin("before");
        setProgress(0);
        return;
      }
      const offset = parseFloat(getComputedStyle(track).getPropertyValue("--heritage-offset")) || 90;
      const rect = track.getBoundingClientRect();
      const travel = track.offsetHeight - (window.innerHeight - offset);
      const passed = offset - rect.top;
      const next = travel <= 0 ? 0 : Math.min(1, Math.max(0, passed / travel));
      setProgress(next);
      if (rect.top > offset) setPin("before");
      else if (rect.bottom <= window.innerHeight) setPin("after");
      else setPin("fixed");
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    reduced.addEventListener("change", measure);
    narrow.addEventListener("change", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      reduced.removeEventListener("change", measure);
      narrow.removeEventListener("change", measure);
    };
  }, []);

  return (
    <div className={styles.track} ref={trackRef}>
      <div
        className={`${styles.sticky} ${pin === "fixed" ? styles.stickyFixed : ""} ${pin === "after" ? styles.stickyAfter : ""}`}
      >
        <div
          className={styles.slides}
          style={pin === "before" && progress === 0 ? undefined : { transform: `translate3d(${-progress * 50}%, 0, 0)` }}
        >
          {children}
        </div>
        <div className={styles.scrollCue} aria-hidden="true">
          <span>Scroll</span>
          <span className={styles.scrollTrack}>
            <span className={styles.scrollFill} style={{ transform: `scaleX(${progress})` }} />
          </span>
          <span>{progress < 0.5 ? "01" : "02"}</span>
        </div>
      </div>
    </div>
  );
}
