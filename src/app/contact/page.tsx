"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Factory,
  Mail,
  MapPin,
  Phone,
  Search,
} from "lucide-react";
import { INSTITUTIONAL_OVERVIEW } from "@/data/institution";
import { SHOWROOMS_DATA } from "@/data/showrooms";
import styles from "./Contact.module.css";

const ENQUIRY_TYPES = [
  "Showroom Article Allocation",
  "Mysuru Factory Visit Appointment",
  "State & Ceremonial Orders",
  "General Institutional Inquiry",
  "RTI Related Communication",
];

const REGIONS = ["Bengaluru", "Mysuru", "Channapatna", "Davanagere", "Hyderabad"];

export default function ContactPage() {
  const office = INSTITUTIONAL_OVERVIEW.headOffice;
  const [storeQuery, setStoreQuery] = useState("");
  const [showAllStores, setShowAllStores] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: ENQUIRY_TYPES[0],
    preferredCity: REGIONS[0],
    message: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const goToStores =
      params.get("section") === "store-locator" ||
      window.location.hash === "#store-locator";
    if (!goToStores) return;
    const target = document.getElementById("store-locator");
    if (!target) return;
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      document.getElementById("store-search")?.focus({ preventScroll: true });
    });
  }, []);

  const storeSearch = storeQuery.trim().toLowerCase();
  const matchingStores = useMemo(() => {
    if (storeSearch) {
      return SHOWROOMS_DATA.filter((store) =>
        [store.name, store.city, store.address, store.pincode, store.type]
          .join(" ")
          .toLowerCase()
          .includes(storeSearch),
      );
    }
    if (showAllStores) return SHOWROOMS_DATA;
    return SHOWROOMS_DATA.filter((store) => store.featured).slice(0, 6);
  }, [storeSearch, showAllStores]);

  const canViewAll =
    !storeSearch && !showAllStores && SHOWROOMS_DATA.length > matchingStores.length;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const subject = `KSIC inquiry: ${formData.enquiryType}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Telephone: ${formData.phone}`,
      `Nature of inquiry: ${formData.enquiryType}`,
      `Preferred region: ${formData.preferredCity}`,
      "",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:${office.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className={styles.page}>
      {/* 1. Intro */}
      <section className={styles.hero} aria-label="Contact KSIC">
        <div className={styles.content}>
          <p className={styles.kicker}>Institutional communication</p>
          <h1 className={styles.heroTitle}>
            Contact <span>Us</span>
          </h1>
          <p className={styles.heroLead}>
            Reach the Corporation for showroom assistance, factory visits, ceremonial orders, or
            institutional correspondence. Every desk below belongs to the Government of Karnataka
            silk enterprise.
          </p>
        </div>
      </section>

      {/* 2. Direct channels */}
      <section className={styles.channelsBand} aria-label="Direct contact">
        <div className={styles.content}>
          <ul className={styles.channels}>
            <li>
              <a className={styles.channel} href={`tel:${office.phone1.replace(/\s/g, "")}`}>
                <span className={styles.channelIcon}>
                  <Phone size={18} strokeWidth={1.5} aria-hidden />
                </span>
                <span>
                  <small>Bengaluru office</small>
                  <strong>{office.phone1}</strong>
                </span>
              </a>
            </li>
            <li>
              <a className={styles.channel} href={`mailto:${office.email}`}>
                <span className={styles.channelIcon}>
                  <Mail size={18} strokeWidth={1.5} aria-hidden />
                </span>
                <span>
                  <small>Official email</small>
                  <strong>{office.email}</strong>
                </span>
              </a>
            </li>
            <li>
              <div className={styles.channel}>
                <span className={styles.channelIcon}>
                  <Clock size={18} strokeWidth={1.5} aria-hidden />
                </span>
                <span>
                  <small>Factory visiting desk</small>
                  <strong>Mon-Sat · 10:30-16:00</strong>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Store locator */}
      <section
        id="store-locator"
        className={styles.storesBand}
        aria-labelledby="store-locator-heading"
      >
        <div className={styles.content}>
          <div className={styles.storesHead}>
            <div>
              <p className={styles.eyebrow}>Showroom network</p>
              <h2 id="store-locator-heading" className={styles.sectionTitle}>
                Find a showroom
              </h2>
            </div>
            {!storeSearch && (canViewAll || showAllStores) ? (
              <button
                type="button"
                className={styles.viewAllButton}
                onClick={() => setShowAllStores((open) => !open)}
              >
                {showAllStores ? "Show less" : "View all"}
              </button>
            ) : null}
          </div>

          <form className={styles.locatorForm} role="search" onSubmit={(event) => event.preventDefault()}>
            <label className={styles.srOnly} htmlFor="store-search">
              Search by city, area, or pincode
            </label>
            <div className={styles.locatorField}>
              <Search size={18} strokeWidth={1.5} aria-hidden />
              <input
                id="store-search"
                type="search"
                value={storeQuery}
                placeholder="Search city, area, or pincode"
                onChange={(event) => setStoreQuery(event.target.value)}
              />
            </div>
          </form>

          {storeSearch && matchingStores.length === 0 ? (
            <p className={styles.locatorEmpty}>No showrooms match that search.</p>
          ) : (
            <ul className={styles.storeGrid}>
              {matchingStores.map((store) => (
                <li key={store.id} className={styles.storeCard}>
                  <p className={styles.storeType}>{store.type}</p>
                  <h3>{store.name}</h3>
                  <p>
                    {store.city} · {store.address} · {store.pincode}
                  </p>
                  <div className={styles.storeFooter}>
                    <a href={`tel:${store.phone.replace(/[^+\d]/g, "")}`}>{store.phone}</a>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(`${store.name} KSIC ${store.city}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Directions <ArrowRight size={14} aria-hidden />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* 4. Headquarters & facilities */}
      <section className={styles.officeBand} aria-label="Official locations">
        <div className={styles.content}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Official locations</p>
            <h2 className={styles.sectionTitle}>Headquarters & facilities</h2>
          </div>

          <div className={styles.officeGrid}>
            <article className={styles.hqCard}>
              <p className={styles.cardKicker}>Central office</p>
              <h3 className={styles.cardTitle}>{office.building}</h3>
              <p className={styles.cardBody}>
                {office.street}, {office.city}, {office.pincode}, Karnataka
              </p>
              <dl className={styles.hqMeta}>
                <div>
                  <dt>Telephone</dt>
                  <dd>
                    <a href={`tel:${office.phone1.replace(/\s/g, "")}`}>{office.phone1}</a>
                    {" / "}
                    <a href={`tel:${office.phone2.replace(/\s/g, "")}`}>{office.phone2}</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${office.email}`}>{office.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Department</dt>
                  <dd>Department of Sericulture, Govt of Karnataka</dd>
                </div>
                <div>
                  <dt>CIN</dt>
                  <dd>{INSTITUTIONAL_OVERVIEW.corporateId}</dd>
                </div>
              </dl>
            </article>

            <div className={styles.facilityStack}>
              <article className={styles.facilityCard}>
                <Factory size={20} strokeWidth={1.5} aria-hidden />
                <div>
                  <h3>Historic production facility</h3>
                  <p>Mysore Silk Weaving Factory, Mananthody Road, Mysuru 570 008</p>
                  <p className={styles.facilityMeta}>
                    <a href="tel:08212480801">0821-2480801</a>
                    <span aria-hidden>·</span>
                    <a href="tel:08212481079">2481079</a>
                  </p>
                </div>
              </article>
              <article className={styles.facilityCard}>
                <MapPin size={20} strokeWidth={1.5} aria-hidden />
                <div>
                  <h3>Raw silk reeling campus</h3>
                  <p>Silk Filature Division, Cauvery Basin, T. Narasipura 571 124</p>
                  <p className={styles.facilityMeta}>Cocoon procurement, reeling, and multi-end twisting</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Inquiry form */}
      <section className={styles.formBand} aria-label="Inquiry form">
        <div className={styles.content}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <p className={styles.eyebrow}>Official inquiry desk</p>
              <h2 className={styles.sectionTitle}>How may we assist you?</h2>
              <p className={styles.formLead}>
                Submit an inquiry for showroom availability, registered saree articles, factory visits, or
                institutional services. Your message opens as an email to the Corporation.
              </p>
              <ul className={styles.formHints}>
                <li>Include article numbers when asking about stock</li>
                <li>Factory visits require weekday appointment windows</li>
                <li>RTI matters may also use the Karnataka RTI portal</li>
              </ul>
              <Link href="/about-us#rti" className={styles.textLink}>
                Right to Information <ArrowRight size={14} aria-hidden />
              </Link>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="contact-name">Full name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-phone">Telephone</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-type">Nature of inquiry</label>
                  <select
                    id="contact-type"
                    value={formData.enquiryType}
                    onChange={(event) => setFormData({ ...formData, enquiryType: event.target.value })}
                  >
                    {ENQUIRY_TYPES.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-region">Preferred region</label>
                  <select
                    id="contact-region"
                    value={formData.preferredCity}
                    onChange={(event) => setFormData({ ...formData, preferredCity: event.target.value })}
                  >
                    {REGIONS.map((region) => (
                      <option key={region}>{region}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message">Message or article identifier</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                />
              </div>

              <button type="submit" className={styles.submit}>
                <span>Submit inquiry</span>
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
              </button>
              <p className={styles.formNote}>
                This opens an email to {office.email}. The inquiry is not stored on this website.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
