"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "./AdminShell";
import styles from "./AdminShell.module.css";
import {
  DEFAULT_HERO_IMAGES,
  readCmsHome,
  writeCmsHome,
  type CmsHomeSettings,
} from "@/lib/cmsHome";

const MAX_UPLOAD_BYTES = 2 * 1024 * 1024;

type HeroSlot = {
  key: keyof CmsHomeSettings;
  label: string;
  hint: string;
  defaultSrc: string;
};

const HERO_SLOTS: HeroSlot[] = [
  {
    key: "heroSlide1Image",
    label: "Home hero · Slide 1",
    hint: "Legacy craftsmanship slide (first image)",
    defaultSrc: DEFAULT_HERO_IMAGES[0],
  },
  {
    key: "heroSlide2Image",
    label: "Home hero · Slide 2",
    hint: "New arrivals slide (second image)",
    defaultSrc: DEFAULT_HERO_IMAGES[1],
  },
];

function readImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_UPLOAD_BYTES) {
      reject(new Error("Please choose an image under 2 MB for this demo."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (!result) reject(new Error("Could not read that image."));
      else resolve(result);
    };
    reader.onerror = () => reject(new Error("Could not read that image."));
    reader.readAsDataURL(file);
  });
}

export function AdminCmsClient() {
  const [settings, setSettings] = useState<CmsHomeSettings>(() =>
    typeof window === "undefined" ? { heroSlide1Image: "", heroSlide2Image: "" } : readCmsHome(),
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
    setMessage("Saved — refresh the homepage to see the change.");
  }

  function setSlot(key: keyof CmsHomeSettings, value: string) {
    persist({ ...settings, [key]: value });
  }

  function clearSlot(key: keyof CmsHomeSettings) {
    persist({ ...settings, [key]: "" });
  }

  return (
    <AdminShell title="CMS" subtitle="Content management for the storefront.">
      <div className={styles.panel}>
        <h2>Home hero images</h2>
        <p className={styles.muted} style={{ margin: "0 0 1rem" }}>
          Change the two rotating background images on the homepage hero. Upload from your
          device or paste an image URL. Changes apply in this browser.
        </p>

        {message ? (
          <p className={styles.statusPill} style={{ marginBottom: "1rem" }}>
            {message}
          </p>
        ) : null}
        {error ? <p className={styles.loginError} style={{ marginBottom: "1rem" }}>{error}</p> : null}

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
                      onChange={(e) => setSlot(slot.key, e.target.value)}
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
                          setSlot(slot.key, dataUrl);
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
                        onClick={() => clearSlot(slot.key)}
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

        <div className={styles.actions} style={{ marginTop: "1.15rem" }}>
          <Link href="/" className={styles.btn} target="_blank" rel="noreferrer">
            View homepage
          </Link>
        </div>
      </div>
    </AdminShell>
  );
}
