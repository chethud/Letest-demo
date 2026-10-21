import React from "react";
import styles from "./HeritageStrip.module.css";

const HERITAGE_YEARS = new Date().getFullYear() - 1912;

const ITEMS = [
  {
    id: "heritage",
    label: (
      <>
        {HERITAGE_YEARS} Years
        <br />
        of Heritage
      </>
    ),
    icon: (
      <>
        <path d="M12 19.5c-1.8-2.4-2.4-6.6 0-11 2.4 4.4 1.8 8.6 0 11z" />
        <path d="M12 19.5c-2.6-.3-6.6-2.4-7.6-6.6 3 .1 5.6 2.2 7.6 6.6z" />
        <path d="M12 19.5c2.6-.3 6.6-2.4 7.6-6.6-3 .1-5.6 2.2-7.6 6.6z" />
        <path d="M4 19.5h16" />
      </>
    ),
  },
  {
    id: "pure",
    label: (
      <>
        Pure
        <br />
        Mulberry Silk
      </>
    ),
    icon: (
      <>
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 3.5c1.6 2 1.6 4 0 6-1.6-2-1.6-4 0-6zM12 14.5c1.6 2 1.6 4 0 6-1.6-2-1.6-4 0-6zM3.5 12c2-1.6 4-1.6 6 0-2 1.6-4 1.6-6 0zM14.5 12c2-1.6 4-1.6 6 0-2 1.6-4 1.6-6 0zM6 6c2.5.3 3.9 1.7 4.2 4.2C7.7 9.9 6.3 8.5 6 6zM13.8 13.8c2.5.3 3.9 1.7 4.2 4.2-2.5-.3-3.9-1.7-4.2-4.2zM18 6c-.3 2.5-1.7 3.9-4.2 4.2.3-2.5 1.7-3.9 4.2-4.2zM10.2 13.8C9.9 16.3 8.5 17.7 6 18c.3-2.5 1.7-3.9 4.2-4.2z" />
      </>
    ),
  },
  {
    id: "gi",
    label: "GI Certified",
    icon: (
      <>
        <path d="M5 19c0-8.3 5.7-14 14-14 0 8.3-5.7 14-14 14z" />
        <path d="M5 19l8.5-8.5" />
      </>
    ),
  },
  {
    id: "authentic",
    label: (
      <>
        Authentic
        <br />
        Gold Zari
      </>
    ),
    icon: (
      <>
        <path d="M12 3l7.5 3v6c0 4.6-3.2 7.8-7.5 9.3-4.3-1.5-7.5-4.7-7.5-9.3V6z" />
        <path d="M8.8 12.2l2.2 2.2 4.3-4.4" />
      </>
    ),
  },
];

export const HeritageStrip: React.FC = () => {
  return (
    <section className={styles.strip} aria-label="Mysore Silk assurances">
      <div className={styles.wrap}>
        {ITEMS.map((item) => (
          <div key={item.id} className={styles.item}>
            <span className={styles.badge}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                {item.icon}
              </svg>
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
