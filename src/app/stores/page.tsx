"use client";

import React, { useState } from "react";
import { Phone, Clock, ArrowRight } from "lucide-react";
import { SHOWROOMS_DATA } from "@/data/showrooms";
import styles from "./Stores.module.css";

export default function StoresPage() {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const cities = ["All", "Bengaluru", "Mysuru", "Channapatna", "Davanagere", "Hyderabad"];

  const filteredShowrooms = SHOWROOMS_DATA.filter((s) => {
    const matchesCity = selectedCity === "All" || s.city === selectedCity;
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.pincode.includes(searchTerm);
    return matchesCity && matchesSearch;
  });

  return (
    <div className={styles.storesPage}>
      {/* Header */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional">
          <span className="editorial-label">PHYSICAL DIRECTORY</span>
          <h1 className="display-hero" style={{ marginTop: "12px", marginBottom: "24px" }}>
            VISIT KSIC.
          </h1>
          <p className="subheadline" style={{ maxWidth: "800px" }}>
            Experience the texture, weight, and authentic gold zari luster of Mysore Silk in person across our government-operated showroom network and historic factory centers.
          </p>
        </div>
      </section>

      {/* Directory & Filters */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <div className="container-institutional">
          <div className={styles.controlsBar}>
            {/* City Tabs */}
            <div className={styles.cityTabs}>
              {cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  style={{
                    padding: "10px 20px",
                    background: selectedCity === city ? "var(--color-burgundy)" : "transparent",
                    color: selectedCity === city ? "#FFFFFF" : "var(--color-text-secondary)",
                    border: "1px solid " + (selectedCity === city ? "var(--color-burgundy)" : "rgba(58, 46, 36, 0.15)"),
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    borderRadius: "999px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 200ms ease",
                  }}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div>
              <input
                type="text"
                placeholder="Search street, area, or pincode..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* Showrooms Grid */}
          <div className={styles.storesGrid}>
            {filteredShowrooms.map((store) => (
              <article key={store.id} className={styles.card}>
                <div>
                  <span className={styles.kicker}>
                    {store.type} · {store.city}
                  </span>
                  <h3 className={styles.cardTitle}>{store.name}</h3>
                  <p className={styles.address}>
                    {store.address}
                    <br />
                    Pincode: {store.pincode}
                  </p>
                </div>

                <div className={styles.cardFoot}>
                  <p className={styles.meta}>
                    <Clock size={14} strokeWidth={1.5} aria-hidden />
                    <span>{store.timings}</span>
                  </p>
                  <p className={styles.meta}>
                    <Phone size={14} strokeWidth={1.5} aria-hidden />
                    <span>{store.phone}</span>
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${store.name} KSIC ${store.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapButton}
                  >
                    Open in Google Maps
                    <ArrowRight size={14} aria-hidden />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
