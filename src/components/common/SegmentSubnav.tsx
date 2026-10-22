import React from "react";
import Link from "next/link";
import type { NavLink } from "@/data/navigation";
import styles from "./SegmentSubnav.module.css";

type SegmentSubnavProps = {
  links: NavLink[];
  activeHref?: string;
  ariaLabel: string;
  /** Optional override for the inner row (e.g. page-shared content width) */
  innerClassName?: string;
};

export function SegmentSubnav({
  links,
  activeHref,
  ariaLabel,
  innerClassName,
}: SegmentSubnavProps) {
  return (
    <nav className={styles.subnav} aria-label={ariaLabel}>
      <div className={innerClassName ? `${styles.inner} ${styles.innerFlush} ${innerClassName}` : styles.inner}>
        {links.map((item) => {
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
      </div>
    </nav>
  );
}
