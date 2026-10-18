import React from "react";
import Link from "next/link";
import styles from "./Journal.module.css";

const SECTIONS = [
  { label: "Stories", href: "/heritage" },
  { label: "Culture", href: "/heritage#timeline" },
  { label: "Styling", href: "/collection" },
];

export const metadata = {
  title: "Journal",
  description: "Stories, culture, and styling from the world of Mysore Silk.",
};

export default function JournalPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.subnav} aria-label="Journal">
        {SECTIONS.map((item) => (
          <Link key={item.label} href={item.href} className={styles.link}>
            {item.label}
          </Link>
        ))}
      </nav>
      <section className={styles.intro}>
        <p className={styles.kicker}>Journal</p>
        <h1 className={styles.title}>Stories, culture, and styling.</h1>
        <p className={styles.lead}>
          Read the history of Mysore Silk, follow the culture that shaped it, and see how the cloth is worn.
        </p>
      </section>
    </div>
  );
}
