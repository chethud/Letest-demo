"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "./AdminShell";
import styles from "./AdminShell.module.css";
import {
  DEFAULT_CMS_HOME,
  DEFAULT_FACTORY,
  readCmsHome,
  writeCmsHome,
  type CmsHomeSettings,
} from "@/lib/cmsHome";
import {
  clearFactoryVideoFile,
  getFactoryVideoObjectUrl,
  isFactoryVideoIdbRef,
  saveFactoryVideoFile,
} from "@/lib/cmsFactoryVideo";

export function AdminCmsFactoryClient() {
  const [draft, setDraft] = useState<CmsHomeSettings>(DEFAULT_CMS_HOME);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [videoPreview, setVideoPreview] = useState(DEFAULT_FACTORY.videoUrl);

  useEffect(() => {
    setDraft(readCmsHome());
  }, []);

  useEffect(() => {
    let revoked: string | null = null;
    let cancelled = false;

    async function loadPreview() {
      const stored = draft.factoryVideoUrl.trim();
      if (isFactoryVideoIdbRef(stored)) {
        const objectUrl = await getFactoryVideoObjectUrl();
        if (cancelled) {
          if (objectUrl) URL.revokeObjectURL(objectUrl);
          return;
        }
        if (objectUrl) {
          revoked = objectUrl;
          setVideoPreview(objectUrl);
        } else {
          setVideoPreview(DEFAULT_FACTORY.videoUrl);
        }
        return;
      }
      setVideoPreview(stored || DEFAULT_FACTORY.videoUrl);
    }

    void loadPreview();
    return () => {
      cancelled = true;
      if (revoked) URL.revokeObjectURL(revoked);
    };
  }, [draft.factoryVideoUrl]);

  function updateDraft(partial: Partial<CmsHomeSettings>) {
    setDraft((prev) => ({ ...prev, ...partial }));
    setMessage("");
    setError("");
  }

  function save() {
    writeCmsHome(draft);
    setMessage("Saved — open #factory on the homepage to preview.");
    setError("");
  }

  async function setVideoUrl(nextUrl: string) {
    const trimmed = nextUrl.trim();
    if (!isFactoryVideoIdbRef(trimmed)) {
      try {
        await clearFactoryVideoFile();
      } catch {
        /* ignore */
      }
    }
    updateDraft({ factoryVideoUrl: nextUrl });
  }

  const isUploaded = isFactoryVideoIdbRef(draft.factoryVideoUrl);
  const urlFieldValue = isUploaded
    ? ""
    : draft.factoryVideoUrl.startsWith("data:")
      ? ""
      : draft.factoryVideoUrl;

  return (
    <AdminShell
      title="Video text"
      subtitle="Factory film and English panel copy."
    >
      <div className={styles.actions} style={{ marginBottom: "1rem" }}>
        <Link href="/admin/cms" className={styles.btnGhost}>
          ← Back to CMS
        </Link>
        <Link href="/#factory" className={styles.btnGhost}>
          View section
        </Link>
      </div>

      <div className={styles.panel}>
        <h2>Film &amp; copy</h2>
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
        <p className={styles.muted} style={{ margin: "0 0 1rem" }}>
          Leave a field blank to keep the default. Upload a video from your device
          (under 25 MB) or paste a URL, then Save.
        </p>
        <form
          className={styles.form}
          style={{ maxWidth: "40rem" }}
          onSubmit={(event) => {
            event.preventDefault();
            save();
          }}
        >
          <div className={styles.imageSlot} style={{ maxWidth: "100%" }}>
            <p className={styles.imageSlotTitle}>
              Factory film
              {!draft.factoryVideoUrl.trim() ? " · default" : isUploaded ? " · uploaded" : ""}
            </p>
            <video
              className={styles.imagePreview}
              src={videoPreview}
              controls
              muted
              playsInline
              preload="metadata"
              style={{ aspectRatio: "16 / 9", objectFit: "cover" }}
            />
            <label>
              Video URL
              <input
                value={urlFieldValue}
                placeholder={DEFAULT_FACTORY.videoUrl}
                onChange={(e) => void setVideoUrl(e.target.value)}
              />
            </label>
            <label>
              Upload from device
              <input
                type="file"
                accept="video/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  e.target.value = "";
                  if (!file) return;
                  try {
                    const ref = await saveFactoryVideoFile(file);
                    updateDraft({ factoryVideoUrl: ref });
                  } catch (err) {
                    setError(
                      err instanceof Error
                        ? err.message
                        : "Could not upload that video.",
                    );
                  }
                }}
              />
            </label>
            {draft.factoryVideoUrl.trim() ? (
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.btnGhost}
                  onClick={() => void setVideoUrl("")}
                >
                  Reset film to default
                </button>
              </div>
            ) : null}
          </div>
          <label>
            Eyebrow
            <input
              value={draft.factoryEyebrow}
              placeholder={DEFAULT_FACTORY.eyebrow}
              onChange={(e) => updateDraft({ factoryEyebrow: e.target.value })}
            />
          </label>
          <label>
            Headline · line 1
            <input
              value={draft.factoryHeadline1}
              placeholder={DEFAULT_FACTORY.headlineLine1}
              onChange={(e) => updateDraft({ factoryHeadline1: e.target.value })}
            />
          </label>
          <label>
            Headline · line 2
            <input
              value={draft.factoryHeadline2}
              placeholder={DEFAULT_FACTORY.headlineLine2}
              onChange={(e) => updateDraft({ factoryHeadline2: e.target.value })}
            />
          </label>
          <label>
            Body
            <textarea
              value={draft.factoryBody}
              placeholder={DEFAULT_FACTORY.body}
              onChange={(e) => updateDraft({ factoryBody: e.target.value })}
            />
          </label>
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
