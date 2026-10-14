"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import styles from "./ScrollAnimator.module.css";

export const ScrollAnimator: React.FC = () => {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 1. Scroll Progress & Back to Top Tracker
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;

          if (totalHeight > 0) {
            const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
            setScrollProgress(progress);
          }

          setShowBackToTop(currentScroll > 420);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // 2. IntersectionObserver for Scroll Reveals
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Optionally unobserve if you want one-shot reveal (standard modern UX)
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    });

    const revealSelector =
      ".reveal-on-scroll, .reveal-up, .reveal-fade, .reveal-scale, .reveal-stagger, .reveal-rule, .reveal-left, .reveal-right";

    const revealIfInView = (el: Element) => {
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.height === 0 && rect.width === 0) return;
      if (rect.bottom > 0 && rect.top < viewHeight) {
        el.classList.add("revealed");
      }
    };

    const scanAndObserve = () => {
      const elements = document.querySelectorAll(revealSelector);
      elements.forEach((el) => {
        if (el.classList.contains("revealed")) return;
        revealIfInView(el);
        if (!el.classList.contains("revealed")) {
          observer.observe(el);
        }
      });
    };

    // Scan initially and after small delay for hydration
    scanAndObserve();
    const timeout = setTimeout(scanAndObserve, 250);
    window.addEventListener("scroll", scanAndObserve, { passive: true });
    window.addEventListener("resize", scanAndObserve);

    // Watch for DOM changes (e.g., category filtering on /collection)
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", scanAndObserve);
      window.removeEventListener("resize", scanAndObserve);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Top Hairline Scroll Progress Bar */}
      <div
        className={styles.progressBarTrack}
        aria-hidden="true"
      >
        <div
          className={styles.progressBarFill}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Quiet Luxury Back-To-Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`${styles.backToTopBtn} ${showBackToTop ? styles.backToTopVisible : ""}`}
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <ArrowUp size={16} />
      </button>
    </>
  );
};
