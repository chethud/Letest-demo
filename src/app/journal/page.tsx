import React from "react";
import Link from "next/link";
import { JOURNAL_LINKS } from "@/data/navigation";
import { JournalSubnav } from "@/components/journal/JournalSubnav";
import styles from "./Journal.module.css";

export const metadata = {
  title: "Journal",
  description: "Stories, culture, and styling from the world of Mysore Silk.",
};

export default function JournalPage() {
  return (
    <div className={styles.page}>
      <JournalSubnav />
      <section className={styles.intro}>
        <p className={styles.kicker}>Journal</p>
        <h1 className={styles.title}>Stories, culture, and styling.</h1>
        <p className={styles.lead}>
          Read the history of Mysore Silk, follow the culture that shaped it, and see how the cloth is
          worn.
        </p>
        <ul className={styles.hubList}>
          {JOURNAL_LINKS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.hubLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
