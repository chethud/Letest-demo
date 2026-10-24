"use client";

import React from "react";
import { useCmsHome } from "@/hooks/useCmsHome";
import { resolveTestimonials } from "@/lib/cmsHome";
import styles from "./TestimonialsSection.module.css";

export const TestimonialsSection: React.FC = () => {
  const testimonials = resolveTestimonials(useCmsHome());
  const loop = [...testimonials, ...testimonials];

  return (
    <section className={styles.section} id="testimonials" aria-label="Testimonials">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Testimonials</p>
      </div>

      <div className={styles.scroller} role="region" aria-label="Scrolling testimonials">
        <ul className={styles.track}>
          {loop.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className={styles.item}
              aria-hidden={index >= testimonials.length}
            >
              <blockquote className={styles.quote}>
                <p>{item.quote}</p>
                <footer className={styles.meta}>
                  <cite className={styles.name}>{item.name}</cite>
                  <span className={styles.place}>{item.place}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
