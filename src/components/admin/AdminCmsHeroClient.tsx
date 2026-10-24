"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "./AdminShell";
import styles from "./AdminShell.module.css";
import { HERO_SLOTS, readImageFile } from "./cmsShared";
import { readCmsHome, writeCmsHome, type CmsHomeSettings } from "@/lib/cmsHome";

function emptySettings(): CmsHomeSettings {
  return { heroSlide1Image: "", heroSlide2Image: "", collectionImages: {} };
}

export function AdminCmsHeroClient() {
  const [settings, setSettings] = useState<CmsHomeSettings>(() =>
    typeof window === "undefined" ? emptySettings() : readCmsHome(),
  );
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setSettings(readCmsHome());
  }, []);

  function persist(next: CmsHomeSettings) {
    setSettings(next);
    writeCmsHome(next);
    setError("");
    setMessage("Saved — open the homepage to see the change.");
  }

  function setHeroSlot(key: (typeof HERO_SLOTS)[number]["key"], value: string) {
    persist({ ...settings, [key]: value });
  }

  function clearHeroSlot(key: (typeof HERO_SLOTS)[number]["key"]) {
    persist({ ...settings, [key]: "" });
  }

  return (
    <AdminShell
      title="Home hero images"
      subtitle="Change the two rotating homepage hero backgrounds."
    >
      <div className={styles.actions} style={{ marginBottom: "1rem" }}>
        <Link href="/admin/cms" className={styles.btnGhost}>
          ← Back to CMS
        </Link>
        <Link href="/" className={styles.btnGhost}>
          View homepage
        </Link>
      </div>

      <div className={styles.panel}>
        <h2>Hero slides</h2>
        <p className={styles.muted} style={{ margin: "0 0 1rem" }}>
          Upload from your device or paste an image URL. Changes apply in this browser.
        </p>

        {message ? (
          <p className={styles.statusPill} style={{ marginBottom: "1rem" }}>
            {message}
          </p>
        ) : null}
        {error ? (
          <p className={styles.loginError} style={{ marginBottom: "1rem" }}>
            {error}
          </p>
        ) : null}

        <div className={styles.form} style={{ maxWidth: "none" }}>
          <div className={styles.imageSlots}>
            {HERO_SLOTS.map((slot) => {
              const value = settings[slot.key].trim();
              const preview = value || slot.defaultSrc;
              const isCustom = Boolean(value);

              return (
                <div key={slot.key} className={styles.imageSlot}>
                  <p className={styles.imageSlotTitle}>
                    {slot.label}
                    {!isCustom ? " · default" : ""}
                  </p>
                  <p className={styles.muted} style={{ margin: 0, fontSize: "0.78rem" }}>
                    {slot.hint}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={preview} alt="" className={styles.imagePreview} />
                  <label>
                    Image URL
                    <input
                      value={value.startsWith("data:") ? "" : value}
                      placeholder={slot.defaultSrc}
                      onChange={(e) => setHeroSlot(slot.key, e.target.value)}
                    />
                  </label>
                  <label>
                    Upload from device
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        e.target.value = "";
                        if (!file) return;
                        try {
                          const dataUrl = await readImageFile(file);
                          setHeroSlot(slot.key, dataUrl);
                        } catch (err) {
                          setError(
                            err instanceof Error
                              ? err.message
                              : "Could not upload that image.",
                          );
                        }
                      }}
                    />
                  </label>
                  <div className={styles.actions}>
                    {isCustom ? (
                      <button
                        type="button"
                        className={styles.btnGhost}
                        onClick={() => clearHeroSlot(slot.key)}
                      >
                        Reset to default
                      </button>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
