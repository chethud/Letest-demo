import React from "react";
import Link from "next/link";
import { JOURNAL_LINKS } from "@/data/navigation";
import styles from "./JournalSubnav.module.css";

type JournalSubnavProps = {
  activeHref?: string;
};

export function JournalSubnav({ activeHref }: JournalSubnavProps) {
  return (
    <nav className={styles.subnav} aria-label="Journal">
      {JOURNAL_LINKS.map((item) => {
        const active = activeHref === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.link} ${active ? styles.linkActive : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
