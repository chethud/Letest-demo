"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "./AdminShell";
import styles from "./AdminShell.module.css";
import {
  COLLECTION_LABELS,
  COLLECTION_TILE_IDS,
  DEFAULT_COLLECTION_IMAGES,
  readImageFile,
} from "./cmsShared";
import {
  readCmsHome,
  writeCmsHome,
  type CmsHomeSettings,
  type CollectionTileId,
} from "@/lib/cmsHome";

function emptySettings(): CmsHomeSettings {
  return { heroSlide1Image: "", heroSlide2Image: "", collectionImages: {} };
}

export function AdminCmsCollectionClient() {
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
    setMessage("Saved — open the homepage Master Collection to see the change.");
  }

  function setCollectionSlot(id: CollectionTileId, value: string) {
    persist({
      ...settings,
      collectionImages: { ...settings.collectionImages, [id]: value },
    });
  }

  function clearCollectionSlot(id: CollectionTileId) {
    const nextImages = { ...settings.collectionImages };
    delete nextImages[id];
    persist({ ...settings, collectionImages: nextImages });
  }

  return (
    <AdminShell
      title="Master Collection images"
      subtitle="Edit the five homepage mosaic tiles."
    >
      <div className={styles.actions} style={{ marginBottom: "1rem" }}>
        <Link href="/admin/cms" className={styles.btnGhost}>
          ← Back to CMS
        </Link>
        <Link href="/#collection" className={styles.btnGhost}>
          View Master Collection
        </Link>
      </div>

      <div className={styles.panel}>
        <h2>Collection tiles</h2>
        <p className={styles.muted} style={{ margin: "0 0 1rem" }}>
          Upload from your device or paste an image URL for Sarees, Festive, Wedding,
          Menswear, and Gifts.
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
            {COLLECTION_TILE_IDS.map((id) => {
              const meta = COLLECTION_LABELS[id];
              const value = (settings.collectionImages[id] ?? "").trim();
              const defaultSrc = DEFAULT_COLLECTION_IMAGES[id];
              const preview = value || defaultSrc;
              const isCustom = Boolean(value);

              return (
                <div key={id} className={styles.imageSlot}>
                  <p className={styles.imageSlotTitle}>
                    {meta.label}
                    {!isCustom ? " · default" : ""}
                  </p>
                  <p className={styles.muted} style={{ margin: 0, fontSize: "0.78rem" }}>
                    {meta.hint}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={preview} alt="" className={styles.imagePreview} />
                  <label>
                    Image URL
                    <input
                      value={value.startsWith("data:") ? "" : value}
                      placeholder={defaultSrc}
                      onChange={(e) => setCollectionSlot(id, e.target.value)}
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
                          setCollectionSlot(id, dataUrl);
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
                        onClick={() => clearCollectionSlot(id)}
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
