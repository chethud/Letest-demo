"use client";

import React from "react";
import Link from "next/link";
import { AdminShell } from "./AdminShell";
import styles from "./AdminShell.module.css";

const SECTIONS = [
  {
    href: "/admin/cms/hero",
    title: "Home hero images",
    description: "Edit the two rotating homepage hero backgrounds.",
  },
  {
    href: "/admin/cms/collection",
    title: "Master Collection images",
    description: "Edit Sarees, Festive, Wedding, Menswear, and Gifts tiles.",
  },
  {
    href: "/admin/cms/factory",
    title: "Video text",
    description: "Upload or link the factory film, and edit English panel copy.",
  },
  {
    href: "/admin/cms/unique",
    title: "Essence of Mysore Silk",
    description: "Edit intro copy, pillar titles/text, and pillar images.",
  },
  {
    href: "/admin/cms/generations",
    title: "Silk for generations",
    description: "Edit the heritage portrait image and story copy.",
  },
  {
    href: "/admin/cms/testimonials",
    title: "Testimonials",
    description: "Edit customer quotes, names, and places.",
  },
];

export function AdminCmsClient() {
  return (
    <AdminShell title="CMS" subtitle="Choose a section to edit storefront content.">
      <div className={styles.panel}>
        <h2>Sections</h2>
        <p className={styles.muted} style={{ margin: "0 0 1.15rem" }}>
          Open a section to edit images or text. Changes apply in this browser.
        </p>
        <div className={styles.actions} style={{ flexDirection: "column", alignItems: "stretch" }}>
          {SECTIONS.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className={styles.btn}
              style={{
                justifyContent: "flex-start",
                minHeight: "3.25rem",
                padding: "0.85rem 1.25rem",
                textTransform: "none",
                letterSpacing: "0.02em",
                fontSize: "0.92rem",
                fontWeight: 600,
              }}
            >
              <span style={{ display: "grid", gap: "0.15rem", textAlign: "left" }}>
                <span>{section.title}</span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    letterSpacing: 0,
                    textTransform: "none",
                    opacity: 0.78,
                  }}
                >
                  {section.description}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
