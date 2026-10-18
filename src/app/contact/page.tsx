"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Clock, Factory, Mail, MapPin, Phone, Search } from "lucide-react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: ENQUIRY_TYPES[0],
    preferredCity: REGIONS[0],
    message: "",
  });

  const storeSearch = storeQuery.trim().toLowerCase();
  const matchingStores = storeSearch
    ? SHOWROOMS_DATA.filter((store) =>
        [store.name, store.city, store.address, store.pincode, store.type]
          .join(" ")
          .toLowerCase()
          .includes(storeSearch)
      )
    : [];

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const subject = `KSIC inquiry — ${formData.enquiryType}`;
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
      <section className={styles.hero} aria-label="Institutional communication">
        <div className={`container-institutional ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Institutional communication</p>
            <h1 className={styles.heroTitle}>
              Write to the
              <br />
              <span>Corporation.</span>
            </h1>
            <p className={styles.heroLead}>
              Connect with the administration, showroom network, or historic silk weaving facilities.
            </p>
          </div>

          <ul className={styles.channels}>
            <li>
              <a className={styles.channel} href={`tel:${office.phone1.replace(/\s/g, "")}`}>
                <Phone size={16} strokeWidth={1.25} aria-hidden />
                <span>
                  <small>Bengaluru Office</small>
                  {office.phone1}
                </span>
              </a>
            </li>
            <li>
              <a className={styles.channel} href={`mailto:${office.email}`}>
                <Mail size={16} strokeWidth={1.25} aria-hidden />
                <span>
                  <small>Correspondence</small>
                  {office.email}
                </span>
              </a>
            </li>
            <li>
              <div className={styles.channel}>
                <Clock size={16} strokeWidth={1.25} aria-hidden />
                <span>
                  <small>Factory Visiting Desk</small>
                  Mon–Sat, 10:30–16:00
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.locator} aria-label="Store locator">
        <div className="container-institutional">
          <p className={styles.eyebrow}>Store locator</p>
          <h2 className={styles.locatorTitle}>Find a showroom.</h2>
          <form className={styles.locatorForm} role="search" onSubmit={(event) => event.preventDefault()}>
            <label className={styles.locatorLabel} htmlFor="store-search">
              Search by city, area, or pincode
            </label>
            <div className={styles.locatorField}>
              <Search size={18} strokeWidth={1.5} aria-hidden />
              <input
                id="store-search"
                type="search"
                value={storeQuery}
                placeholder="Bengaluru, M.G. Road, 560001"
                onChange={(event) => setStoreQuery(event.target.value)}
              />
            </div>
          </form>

          {storeSearch && matchingStores.length === 0 && (
            <p className={styles.locatorEmpty}>No showrooms match that search.</p>
          )}

          {matchingStores.length > 0 && (
            <ul className={styles.locatorResults}>
              {matchingStores.map((store) => (
                <li key={store.id}>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${store.name} KSIC ${store.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <strong>{store.name}</strong>
                      <small>
                        {store.city} · {store.address} · {store.pincode}
                      </small>
                    </span>
                    <ArrowRight size={16} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className={styles.body}>
        <div className={`container-institutional ${styles.layout}`}>
          <div className={styles.formPanel}>
            <p className={styles.eyebrow}>Official inquiry desk</p>
            <h2 className={styles.heading}>How may we assist you?</h2>
            <p className={styles.intro}>
              Submit an inquiry regarding showroom availability, registered saree articles, or institutional services.
            </p>

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
                <span>Submit Inquiry</span>
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
              </button>
              <p className={styles.formNote}>
                This opens an email to {office.email}. The inquiry is not stored on this website.
              </p>
            </form>
          </div>

          <aside className={styles.locations} aria-label="Official locations">
            <p className={styles.eyebrow}>Official locations</p>
            <h2 className={styles.heading}>Find the right desk.</h2>

            <article className={styles.place}>
              <Building2 size={18} strokeWidth={1.25} aria-hidden />
              <div>
                <h3>Corporate Central Office</h3>
                <p>Public Utility Building, Bengaluru</p>
                <p>
                  {office.building}, {office.street}, {office.city} — {office.pincode}
                </p>
                <p className={styles.placeMeta}>
                  <a href={`tel:${office.phone1.replace(/\s/g, "")}`}>{office.phone1}</a>
                  <span aria-hidden>·</span>
                  <a href={`tel:${office.phone2.replace(/\s/g, "")}`}>{office.phone2}</a>
                </p>
                <a className={styles.placeMail} href={`mailto:${office.email}`}>
                  {office.email}
                </a>
              </div>
            </article>

            <article className={styles.place}>
              <Factory size={18} strokeWidth={1.25} aria-hidden />
              <div>
                <h3>Historic Production Facility</h3>
                <p>Mysore Silk Weaving Factory, Mananthody Road, Mysuru</p>
                <p>Silk Weaving Factory Premises, Mananthody Road, Mysuru — 570 008</p>
                <p className={styles.placeMeta}>
                  <a href="tel:08212480801">0821-2480801</a>
                  <span aria-hidden>·</span>
                  <a href="tel:08212481079">2481079</a>
                </p>
                <p className={styles.placeMeta}>Visiting desk · 10:30 AM – 4:00 PM, Monday to Saturday</p>
              </div>
            </article>

            <article className={styles.place}>
              <MapPin size={18} strokeWidth={1.25} aria-hidden />
              <div>
                <h3>Raw Silk Reeling Campus</h3>
                <p>T. Narasipura Silk Filature</p>
                <p>Silk Filature Division, Cauvery Basin, T. Narasipura — 571 124</p>
                <p className={styles.placeMeta}>Cocoon procurement, reeling, and multi-end twisting</p>
              </div>
            </article>

            <div className={styles.related}>
              <Link href="/stores">
                Showroom Network <ArrowRight size={14} aria-hidden />
              </Link>
              <Link href="/institution#rti">
                Right to Information <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
