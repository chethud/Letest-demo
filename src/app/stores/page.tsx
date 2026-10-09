"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, ExternalLink, Compass, Building, Calendar, ArrowRight } from "lucide-react";
import { SHOWROOMS_DATA, ShowroomLocation } from "@/data/showrooms";
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
        <div className="container-institutional reveal-up">
          <span className="editorial-label">PHYSICAL DIRECTORY</span>
          <h1 className="display-hero" style={{ marginTop: "12px", marginBottom: "24px" }}>
            VISIT KSIC.
          </h1>
          <p className="subheadline" style={{ maxWidth: "800px" }}>
            Experience the texture, weight, and authentic gold zari luster of Mysore Silk in person across our government-operated showroom network and historic factory centers.
          </p>
        </div>
      </section>

      {/* Special Highlight: Factory Visit in Mysuru */}
      <section style={{ backgroundColor: "var(--color-bg-paper)", borderBottom: "var(--border-rule)", padding: "48px 0" }}>
        <div className="container-institutional reveal-scale">
          <div className={styles.factoryTourGrid}>
            <div>
              <span className="editorial-label" style={{ color: "var(--color-gold)" }}>HERITAGE FACTORY TOURS</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 4vw, 2.2rem)", color: "var(--color-text-primary)", marginBottom: "16px" }}>
                Witness 100+ Years of Active Weaving in Mysuru
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--color-text-secondary)", marginBottom: "20px" }}>
                Patrons, researchers, and visitors are welcome to visit the historic Silk Weaving Factory premises on Mananthody Road, Mysuru. Experience the rhythmic sound of 138 calibrated Swiss Jacquard power looms producing genuine pure silk and precious zari sarees.
              </p>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "0.85rem", color: "var(--color-text-primary)" }}>
                <div><strong>Visiting Hours:</strong> Mon–Sat, 10:30 AM – 4:00 PM</div>
                <div><strong>Location:</strong> Mananthody Road, Mysuru - 570008</div>
                <div><strong>Enquiry Desk:</strong> 0821-2480801</div>
              </div>
            </div>

            <div className={styles.authenticityNotice}>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.16em", color: "var(--color-burgundy)", textTransform: "uppercase", fontWeight: 600, marginBottom: "8px" }}>
                AUTHENTICITY NOTICE
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.6, margin: 0 }}>
                KSIC operates only through its officially listed showrooms. Any unauthorized private commercial retail store in Hubballi, Chennai, or elsewhere using the name &ldquo;Mysore Silk&rdquo; without our GI-11 hologram is not affiliated with our government corporation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory & Filters */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <div className="container-institutional">
          <div className={`reveal-up ${styles.controlsBar}`}>
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
                    border: "1px solid " + (selectedCity === city ? "var(--color-burgundy)" : "rgba(23, 21, 19, 0.15)"),
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
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
          <div className={`reveal-stagger ${styles.storesGrid}`}>
            {filteredShowrooms.map((store) => (
              <div
                key={store.id}
                className="hover-lift"
                style={{
                  backgroundColor: "var(--color-bg-paper)",
                  border: "1px solid rgba(23, 21, 19, 0.12)",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "300px",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600 }}>
                    {store.type} · {store.city}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.55rem", color: "var(--color-text-primary)", marginTop: "6px", marginBottom: "12px", lineHeight: 1.25 }}>
                    {store.name}
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "18px" }}>
                    {store.address}
                    <br />
                    Pincode: {store.pincode}
                  </p>
                  {store.notes && (
                    <div style={{ padding: "10px 14px", backgroundColor: "var(--color-bg-secondary)", fontSize: "0.8rem", color: "var(--color-burgundy)", marginBottom: "18px" }}>
                      {store.notes}
                    </div>
                  )}
                </div>

                <div>
                  <div style={{ borderTop: "1px solid rgba(23, 21, 19, 0.08)", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.84rem", color: "var(--color-text-secondary)", marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Clock size={14} color="var(--color-gold)" />
                      <span>{store.timings}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Phone size={14} color="var(--color-gold)" />
                      <span>{store.phone}</span>
                    </div>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${store.name} KSIC ${store.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                    style={{ fontSize: "0.76rem" }}
                  >
                    <span>OPEN IN GOOGLE MAPS</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
