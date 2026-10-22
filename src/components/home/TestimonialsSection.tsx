"use client";

import React from "react";
import styles from "./TestimonialsSection.module.css";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  place: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "My mother wore hers for thirty years. Mine already feels like it will do the same.",
    name: "Ananya Rao",
    place: "Bengaluru",
  },
  {
    id: "2",
    quote: "The zari still catches light the way it did on my wedding day. That is enough.",
    name: "Meera Krishnan",
    place: "Mysuru",
  },
  {
    id: "3",
    quote: "We bought one saree for the family. It has now been worn by three of us.",
    name: "Lakshmi Hegde",
    place: "Mangaluru",
  },
  {
    id: "4",
    quote: "Soft, honest silk. No loud claims needed when the cloth speaks for itself.",
    name: "Priya Natarajan",
    place: "Chennai",
  },
  {
    id: "5",
    quote: "I keep returning for gifts. People remember the saree long after the occasion.",
    name: "Sneha Desai",
    place: "Mumbai",
  },
  {
    id: "6",
    quote: "Simple drape, lasting weight. Exactly what I hoped Mysore silk would feel like.",
    name: "Kavitha Reddy",
    place: "Hyderabad",
  },
];

export const TestimonialsSection: React.FC = () => {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

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
              aria-hidden={index >= TESTIMONIALS.length}
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
