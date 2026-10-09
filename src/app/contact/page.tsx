"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, ShieldCheck } from "lucide-react";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "Showroom Article Allocation",
    preferredCity: "Bengaluru",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: "120px" }}>
      {/* Header */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional reveal-up">
          <span className="editorial-label">INSTITUTIONAL COMMUNICATION</span>
          <h1 className="display-hero" style={{ marginTop: "12px", marginBottom: "24px" }}>
            CONTACT & ENQUIRY.
          </h1>
          <p className="subheadline" style={{ maxWidth: "800px" }}>
            Reach the official administration of Karnataka Silk Industries Corporation Limited, connect with our factory reception in Mysuru, or submit an official showroom inquiry.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Official Addresses */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <div className="container-institutional">
          <div className={styles.contactGrid}>
            {/* Showroom & Textile Inquiry Form */}
            <div className={`${styles.formCard} reveal-left`}>
              <span className="editorial-label">OFFICIAL INQUIRY DESK</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--color-text-primary)", marginBottom: "12px" }}>
                Showroom Allocation & Article Inquiry
              </h2>
              <p style={{ fontSize: "0.92rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "32px" }}>
                Submit details regarding specific registered saree article numbers, heritage factory tours, bulk government regalia, or institutional orders.
              </p>

              {submitted ? (
                <div style={{ padding: "32px", backgroundColor: "var(--color-bg-subtle)", borderLeft: "3px solid var(--color-burgundy)", textAlign: "center" }}>
                  <CheckCircle2 size={36} color="var(--color-burgundy)" style={{ margin: "0 auto 12px" }} />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--color-text-primary)", marginBottom: "8px" }}>
                    Inquiry Received
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                    Thank you. Your reference has been directed to the appropriate KSIC zonal store coordinator. Our representative will contact you within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: "6px" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(23, 21, 19, 0.18)", backgroundColor: "#FFFFFF", fontSize: "0.95rem", outline: "none" }}
                    />
                  </div>

                  <div className={styles.inputRow} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: "6px" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(23, 21, 19, 0.18)", backgroundColor: "#FFFFFF", fontSize: "0.95rem", outline: "none" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: "6px" }}>
                        Telephone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(23, 21, 19, 0.18)", backgroundColor: "#FFFFFF", fontSize: "0.95rem", outline: "none" }}
                      />
                    </div>
                  </div>

                  <div className={styles.inputRow} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: "6px" }}>
                        Nature of Inquiry
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(23, 21, 19, 0.18)", backgroundColor: "#FFFFFF", fontSize: "0.9rem", outline: "none" }}
                      >
                        <option>Showroom Article Allocation</option>
                        <option>Mysuru Factory Visit Appointment</option>
                        <option>State & Ceremonial Orders</option>
                        <option>General Institutional Inquiry</option>
                        <option>RTI Related Communication</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: "6px" }}>
                        Preferred Region
                      </label>
                      <select
                        value={formData.preferredCity}
                        onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(23, 21, 19, 0.18)", backgroundColor: "#FFFFFF", fontSize: "0.9rem", outline: "none" }}
                      >
                        <option>Bengaluru</option>
                        <option>Mysuru</option>
                        <option>Channapatna</option>
                        <option>Davanagere</option>
                        <option>Hyderabad</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: "6px" }}>
                      Message or Article Identifier
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Inquiring regarding availability of Article 550/6 Gandaberunda..."
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(23, 21, 19, 0.18)", backgroundColor: "#FFFFFF", fontSize: "0.95rem", outline: "none", resize: "vertical" }}
                    />
                  </div>

                  <button type="submit" className="action-editorial action-editorial-burgundy" style={{ justifyContent: "center", marginTop: "8px" }}>
                    <span>TRANSMIT OFFICIAL INQUIRY</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Official Administrative Locations */}
            <div className={`${styles.locationsCol} reveal-right`}>
              <div className={`${styles.locationCard} hover-lift`}>
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--color-burgundy)", fontWeight: 600, textTransform: "uppercase" }}>
                  CORPORATE CENTRAL OFFICE
                </span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.45rem", color: "var(--color-text-primary)", marginTop: "6px", marginBottom: "8px" }}>
                  Public Utility Building, Bengaluru
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "14px" }}>
                  3rd & 4th Floor, Public Utility Building, M.G. Road, Mayo Hall, Bengaluru — 560 001
                </p>
                <div style={{ fontSize: "0.85rem", color: "var(--color-text-primary)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div><strong>Phone:</strong> +91 80 25586402 / 25586550</div>
                  <div><strong>Email:</strong> info@ksicsilk.com</div>
                </div>
              </div>

              <div className={`${styles.locationCard} hover-lift`}>
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--color-gold)", fontWeight: 600, textTransform: "uppercase" }}>
                  HISTORIC PRODUCTION FACILITY
                </span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.45rem", color: "var(--color-text-primary)", marginTop: "6px", marginBottom: "8px" }}>
                  Mysore Silk Weaving Factory
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "14px" }}>
                  Silk Weaving Factory Premises, Mananthody Road, Mysuru — 570 008, Karnataka
                </p>
                <div style={{ fontSize: "0.85rem", color: "var(--color-text-primary)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div><strong>Phone:</strong> 0821-2480801 / 2481079</div>
                  <div><strong>Visiting Desk:</strong> 10:30 AM – 4:00 PM (Mon–Sat)</div>
                </div>
              </div>

              <div className={`${styles.locationCard} hover-lift`}>
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--color-text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                  RAW SILK REELING CAMPUS
                </span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.45rem", color: "var(--color-text-primary)", marginTop: "6px", marginBottom: "8px" }}>
                  T. Narasipura Silk Filature
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "14px" }}>
                  Silk Filature Division, Cauvery Basin, T. Narasipura, Mysuru District — 571 124
                </p>
                <div style={{ fontSize: "0.85rem", color: "var(--color-text-primary)" }}>
                  <div><strong>Activities:</strong> Cocoon procurement, reeling & multi-end twisting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

