"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "./AdminShell";
import styles from "./AdminShell.module.css";
import {
  DEFAULT_CMS_HOME,
  DEFAULT_TESTIMONIALS,
  readCmsHome,
  writeCmsHome,
  type CmsHomeSettings,
  type CmsTestimonial,
} from "@/lib/cmsHome";

export function AdminCmsTestimonialsClient() {
  const [draft, setDraft] = useState<CmsHomeSettings>(DEFAULT_CMS_HOME);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setDraft(readCmsHome());
  }, []);

  function updateItem(index: number, partial: Partial<CmsTestimonial>) {
    setDraft((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((item, i) =>
        i === index ? { ...item, ...partial } : item,
      ),
    }));
    setMessage("");
  }

  function resetItem(index: number) {
    const fallback = DEFAULT_TESTIMONIALS[index % DEFAULT_TESTIMONIALS.length];
    setDraft((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((item, i) =>
        i === index
          ? {
              id: item.id || fallback.id,
              quote: fallback.quote,
              name: fallback.name,
              place: fallback.place,
            }
          : item,
      ),
    }));
    setMessage("");
  }

  function save() {
    writeCmsHome(draft);
    setMessage("Saved — open #testimonials on the homepage to preview.");
  }

  return (
    <AdminShell title="Testimonials" subtitle="Customer quotes on the homepage.">
      <div className={styles.actions} style={{ marginBottom: "1rem" }}>
        <Link href="/admin/cms" className={styles.btnGhost}>
          ← Back to CMS
        </Link>
        <Link href="/#testimonials" className={styles.btnGhost}>
          View section
        </Link>
      </div>

      <div className={styles.panel}>
        <h2>Quotes</h2>
        {message ? (
          <p className={styles.statusPill} style={{ marginBottom: "1rem" }}>
            {message}
          </p>
        ) : null}
        <p className={styles.muted} style={{ margin: "0 0 1rem" }}>
          Edit quote, name, and place for each card, then Save. Reset restores that
          card only.
        </p>

        <form
          className={styles.form}
          style={{ maxWidth: "42rem" }}
          onSubmit={(event) => {
            event.preventDefault();
            save();
          }}
        >
          {draft.testimonials.map((item, index) => (
            <div key={item.id} className={styles.imageSlot}>
              <p className={styles.imageSlotTitle}>Testimonial {index + 1}</p>
              <label>
                Quote
                <textarea
                  value={item.quote}
                  onChange={(e) => updateItem(index, { quote: e.target.value })}
                />
              </label>
              <div className={styles.row2}>
                <label>
                  Name
                  <input
                    value={item.name}
                    onChange={(e) => updateItem(index, { name: e.target.value })}
                  />
                </label>
                <label>
                  Place
                  <input
                    value={item.place}
                    onChange={(e) => updateItem(index, { place: e.target.value })}
                  />
                </label>
              </div>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.btnGhost}
                  onClick={() => resetItem(index)}
                >
                  Reset to default
                </button>
              </div>
            </div>
          ))}

          <div className={styles.actions}>
            <button type="submit" className={styles.btn}>
              Save
            </button>
          </div>
        </form>
      </div>
    </AdminShell>
  );
}
