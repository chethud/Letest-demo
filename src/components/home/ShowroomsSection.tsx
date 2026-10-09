"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, ExternalLink } from "lucide-react";
import styles from "./ShowroomsSection.module.css";
import { SHOWROOMS_DATA } from "@/data/showrooms";
import { useLanguage } from "@/context/LanguageContext";

export const ShowroomsSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const { lang } = useLanguage();

  const cities = [
    { en: "All", kn: "ಎಲ್ಲವೂ" },
    { en: "Bengaluru", kn: "ಬೆಂಗಳೂರು" },
    { en: "Mysuru", kn: "ಮೈಸೂರು" },
    { en: "Channapatna", kn: "ಚನ್ನಪಟ್ಟಣ" },
    { en: "Davanagere", kn: "ದಾವಣಗೆರೆ" },
    { en: "Hyderabad", kn: "ಹೈದರಾಬಾದ್" },
  ];

  const filteredShowrooms =
    selectedCity === "All"
      ? SHOWROOMS_DATA
      : SHOWROOMS_DATA.filter((s) => s.city === selectedCity);

  return (
    <section className={`section-spacing ${styles.showroomsSection}`} id="stores" aria-label="KSIC Official Showrooms">
      <div className="container-institutional">
        {/* Header */}
        <div className={`${styles.headerRow} reveal-up`}>
          <div>
            <span className="editorial-label">
              {lang === "kn" ? "ವೈಯಕ್ತಿಕವಾಗಿ ವೀಕ್ಷಿಸಿ" : "EXPERIENCE IN PERSON"}
            </span>
            <h2 className={styles.headline}>
              {lang === "kn" ? "ಕೆ.ಎಸ್.ಐ.ಸಿ ಮಳಿಗೆಗಳು" : "VISIT KSIC"}
            </h2>
            <p className={styles.subtitle}>
              {lang === "kn"
                ? "ಅಧಿಕೃತ ರಾಜ್ಯ ಮಳಿಗೆಗಳು ಮತ್ತು ಹೆರಿಟೇಜ್ ಫ್ಯಾಕ್ಟರಿ ಕೇಂದ್ರಗಳು."
                : "Official state showrooms and heritage factory centers."}
            </p>
          </div>
          <div>
            <Link href="/stores" className="action-editorial action-editorial-burgundy">
              <span>
                {lang === "kn"
                  ? `ಎಲ್ಲಾ ರಾಜ್ಯ ಮಳಿಗೆಗಳು (${SHOWROOMS_DATA.length})`
                  : `ALL STATE SHOWROOMS (${SHOWROOMS_DATA.length})`}
              </span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* City Filter Tabs */}
        <div className={`${styles.cityTabs} reveal-up`} role="tablist" aria-label="City Filter">
          {cities.map((c) => (
            <button
              key={c.en}
              role="tab"
              aria-selected={selectedCity === c.en}
              className={`${styles.cityTabBtn} ${selectedCity === c.en ? styles.cityTabBtnActive : ""}`}
              onClick={() => setSelectedCity(c.en)}
            >
              {lang === "kn" ? c.kn : c.en}
            </button>
          ))}
        </div>

        {/* Showroom Cards Grid */}
        <div className={`${styles.showroomsGrid} reveal-stagger`}>
          {filteredShowrooms.slice(0, 6).map((store) => (
            <article key={store.id} className={`${styles.storeCard} hover-lift`}>
              <div>
                <div className={styles.storeType}>{store.type} · {store.city}</div>
                <h3 className={styles.storeName}>{store.name}</h3>
                <p className={styles.storeAddress}>{store.address}</p>
              </div>

              <div>
                <div className={styles.storeMetaGroup}>
                  <div className={styles.metaRow}>
                    <Clock size={14} color="var(--color-gold)" />
                    <span>{store.timings}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <Phone size={14} color="var(--color-gold)" />
                    <span>{store.phone}</span>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${store.name} KSIC ${store.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeDirectionsLink}
                >
                  <span>{lang === "kn" ? "ದಾರಿ ನಕ್ಷೆ ನೋಡಿ" : "GET DIRECTIONS"}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
