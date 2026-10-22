"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Lock,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { KSICProduct } from "@/data/collections";
import { isOnlineBookingActive } from "@/config/booking";
import styles from "./ProductDetail.module.css";

const ENQUIRY_EMAIL = "info@ksicsilk.com";
const ENQUIRY_PHONE = "+91 80 25586402";

type GalleryItem = { src: string; label: string };

function galleryItems(product: KSICProduct): GalleryItem[] {
  const items: GalleryItem[] = [{ src: product.images.hero, label: "Article" }];
  if (product.images.detail) items.push({ src: product.images.detail, label: "Detail" });
  if (product.images.pallu) items.push({ src: product.images.pallu, label: "Pallu" });
  if (product.images.texture) items.push({ src: product.images.texture, label: "Texture" });
  return items.slice(0, 4);
}

const CREPE_SHADES = [
  { name: "Navy Blue", hex: "#152A5C" },
  { name: "Royal Blue", hex: "#1E3F8F" },
  { name: "Prussian Blue", hex: "#163E78" },
  { name: "Peacock Blue", hex: "#0E6E86" },
  { name: "Teal Blue", hex: "#1A7F8A" },
  { name: "Sky Blue", hex: "#4C9ED0" },
  { name: "Powder Blue", hex: "#7EB4D6" },
  { name: "Baby Blue", hex: "#A8CCE4" },
  { name: "Ice Blue", hex: "#D3E5F1" },
  { name: "Pastel Blue", hex: "#E7F1F7" },
];

function statusLabel(status: KSICProduct["status"]) {
  if (status === "in_production") return "In stock · Showroom enquiry";
  if (status === "heritage_reserve") return "Heritage reserve · Enquire";
  return "Archived article";
}

function ProductGallery({ product }: { product: KSICProduct }) {
  const items = useMemo(() => galleryItems(product), [product]);
  const [active, setActive] = useState(0);
  const safeIndex = Math.min(active, items.length - 1);
  const current = items[safeIndex];

  useEffect(() => {
    setActive(0);
  }, [product.id]);

  function step(direction: number) {
    setActive((value) => (value + direction + items.length) % items.length);
  }

  return (
    <div className={styles.gallery}>
      {items.length > 1 ? (
        <div className={styles.thumbs} role="tablist" aria-label="Product images">
          {items.map((item, index) => (
            <button
              key={`${item.src}-${item.label}`}
              type="button"
              role="tab"
              aria-selected={index === safeIndex}
              aria-label={item.label}
              className={`${styles.thumb} ${index === safeIndex ? styles.thumbActive : ""}`}
              onClick={() => setActive(index)}
            >
              <Image src={item.src} alt="" fill sizes="72px" className={styles.thumbImage} />
            </button>
          ))}
        </div>
      ) : null}

      <div className={styles.heroFrame}>
        <Image
          src={current.src}
          alt={`${product.name}: ${current.label}`}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 52vw"
          className={styles.heroImage}
        />
        {items.length > 1 ? (
          <>
            <button
              type="button"
              className={`${styles.navButton} ${styles.navPrev}`}
              onClick={() => step(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className={`${styles.navButton} ${styles.navNext}`}
              onClick={() => step(1)}
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </>
        ) : null}
        <p className={styles.imageLabel}>{current.label}</p>
      </div>
    </div>
  );
}

function EnquiryDialog({
  product,
  quantity,
  onClose,
}: {
  product: KSICProduct;
  quantity: number;
  onClose: () => void;
}) {
  const titleId = useId();
  const firstField = useRef<HTMLInputElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    `I would like to know about availability for ${product.name} (${product.articleNumber}). Quantity: ${quantity}.`,
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    firstField.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, []);

  const mailto = useMemo(() => {
    const body = [
      `Product: ${product.name}`,
      `Article: ${product.articleNumber}`,
      `Quantity: ${quantity}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    return `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(
      `KSIC enquiry: ${product.articleNumber}`,
    )}&body=${encodeURIComponent(body)}`;
  }, [email, message, name, phone, product.articleNumber, product.name, quantity]);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!phone.trim()) next.phone = "Enter a phone number.";
    else if (phone.replace(/\D/g, "").length < 8) next.phone = "Enter a reachable phone number.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address, or leave this blank.";
    }
    if (!message.trim()) next.message = "Enter your enquiry.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setBlocked(false);
      return;
    }
    setBlocked(true);
  }

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.modalHead}>
          <h2 id={titleId}>Enquire about this saree</h2>
          <button type="button" className={styles.iconButton} onClick={onClose} aria-label="Close enquiry">
            <X size={18} />
          </button>
        </div>
        <p className={styles.modalProduct}>
          {product.name}
          <span>{product.articleNumber}</span>
        </p>
        <form className={styles.form} onSubmit={submit} noValidate>
          <label>
            Name
            <input ref={firstField} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            {errors.name ? <span className={styles.fieldError}>{errors.name}</span> : null}
          </label>
          <label>
            Phone number
            <input value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" />
            {errors.phone ? <span className={styles.fieldError}>{errors.phone}</span> : null}
          </label>
          <label>
            Email address <span className={styles.optional}>(optional)</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" inputMode="email" />
            {errors.email ? <span className={styles.fieldError}>{errors.email}</span> : null}
          </label>
          <label>
            Enquiry message
            <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
            {errors.message ? <span className={styles.fieldError}>{errors.message}</span> : null}
          </label>
          <button type="submit" className={styles.submitPill}>
            Submit enquiry
          </button>
        </form>
        {blocked ? (
          <div className={styles.blockedNote} role="status">
            <p>
              This enquiry has not been submitted. No enquiry service is connected yet, so nothing was sent
              and no booking was created.
            </p>
            <p>You can draft the same message in your email app, or call {ENQUIRY_PHONE}.</p>
            <a href={mailto}>Open email draft</a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function PurchasePanel({ product }: { product: KSICProduct }) {
  const bookingActive = isOnlineBookingActive();
  const shades = CREPE_SHADES;
  const [quantity, setQuantity] = useState(1);
  const [shadeIndex, setShadeIndex] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const qtyId = useId();

  useEffect(() => {
    setShadeIndex(0);
  }, [product.id]);

  return (
    <div className={styles.purchase}>
      <div className={styles.priceRow}>
        <div>
          <p className={styles.priceLabel}>Availability</p>
          <p className={styles.priceValue}>Showroom enquiry</p>
        </div>
        <p
          className={`${styles.stockBadge} ${
            product.status === "in_production" ? styles.stockIn : styles.stockOther
          }`}
        >
          {statusLabel(product.status)}
        </p>
      </div>

      <div className={styles.colourBlock}>
        <div className={styles.optionHead}>
          <p id="colour-label">Colour</p>
          <span>{shades[shadeIndex].name}</span>
        </div>
        <div className={styles.swatchRow} role="radiogroup" aria-labelledby="colour-label">
          {shades.map((shade, index) => (
            <button
              key={shade.name}
              type="button"
              role="radio"
              className={styles.swatch}
              style={{ backgroundColor: shade.hex }}
              aria-checked={shadeIndex === index}
              aria-label={shade.name}
              onClick={() => setShadeIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.quantityBlock}>
        <div className={styles.optionHead}>
          <p id={qtyId}>Quantity</p>
        </div>
        <div className={styles.stepper}>
          <button
            type="button"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
          >
            <Minus size={14} />
          </button>
          <output aria-labelledby={qtyId} aria-live="polite">
            {quantity}
          </output>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((value) => Math.min(9, value + 1))}
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      <div className={styles.ctaRow}>
        <button
          type="button"
          className={styles.bookPill}
          disabled={!bookingActive}
          aria-disabled={!bookingActive}
        >
          {!bookingActive ? <Lock size={14} aria-hidden /> : null}
          <span>{bookingActive ? "Continue to book" : "Booking temporarily unavailable"}</span>
        </button>
        <button
          type="button"
          className={`${styles.wishBtn}${saved ? ` ${styles.wishBtnActive}` : ""}`}
          aria-label={saved ? "Remove from saved" : "Save article"}
          aria-pressed={saved}
          onClick={() => setSaved((value) => !value)}
        >
          <Heart size={18} strokeWidth={1.5} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <button type="button" className={styles.enquirePill} onClick={() => setEnquiryOpen(true)}>
        Enquire about this saree
        <ArrowRight size={16} aria-hidden />
      </button>

      <p className={styles.secureNote}>
        Online checkout is not offered on this site. Purchase assistance is through KSIC showrooms and
        official enquiry.
      </p>

      {enquiryOpen ? (
        <EnquiryDialog product={product} quantity={quantity} onClose={() => setEnquiryOpen(false)} />
      ) : null}
    </div>
  );
}

function DetailAccordion({ product }: { product: KSICProduct }) {
  const [openTitle, setOpenTitle] = useState<string | null>("Product Details");
  const showrooms =
    product.showroomAvailability.length > 0
      ? `Showrooms named for this article: ${product.showroomAvailability.join(", ")}.`
      : "No showroom list is published for this article.";

  const sections = [
    {
      title: "Product Details",
      body: (
        <>
          <p>{product.description}</p>
          <p>
            {product.articleNumber}. {product.dimensions}.
          </p>
        </>
      ),
    },
    {
      title: "Fabric & Craftsmanship",
      body: (
        <ul>
          <li>Material: {product.material}</li>
          <li>Weave: {product.weaveType}</li>
          <li>Recorded colour: {product.primaryColor}</li>
          {product.weightGrams ? <li>Recorded weight: {product.weightGrams} grams</li> : null}
        </ul>
      ),
    },
    {
      title: "Zari & Border",
      body: (
        <ul>
          <li>Zari: {product.zari}</li>
          <li>Border motif: {product.borderMotif}</li>
        </ul>
      ),
    },
    {
      title: "Authenticity & Certification",
      body: (
        <ul>
          <li>GI reference: {product.authenticity.giTag}</li>
          <li>Serial marking: {product.authenticity.serialCodePattern}</li>
          <li>Security seal: {product.authenticity.hologramType}</li>
          <li>Silk mark: {product.authenticity.silkPurityMark}</li>
        </ul>
      ),
    },
    {
      title: "Care Instructions",
      body: (
        <p>Care instructions for this article are not published here. Confirm them with KSIC before purchase.</p>
      ),
    },
    {
      title: "Shipping & Returns",
      body: (
        <p>
          Online shipping and returns are not offered from this page. {showrooms} Purchase assistance is
          through an enquiry, not checkout.
        </p>
      ),
    },
  ];

  return (
    <div className={styles.accordion}>
      {sections.map((section) => {
        const open = openTitle === section.title;
        const panelId = `panel-${section.title.replace(/\s+/g, "-").toLowerCase()}`;
        return (
          <div key={section.title} className={styles.accItem}>
            <button
              type="button"
              className={styles.accTrigger}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenTitle(open ? null : section.title)}
            >
              <span>{section.title}</span>
              <ChevronDown size={16} className={open ? styles.chevronOpen : undefined} aria-hidden />
            </button>
            <div id={panelId} className={styles.accPanel} hidden={!open}>
              {section.body}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ProductDetailClient({
  product,
  related,
}: {
  product: KSICProduct;
  related: KSICProduct[];
}) {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/collection">Shop</Link>
          <span aria-hidden>/</span>
          <span>{product.category}</span>
          <span aria-hidden>/</span>
          <span className={styles.crumbCurrent}>{product.articleNumber}</span>
        </nav>

        <div className={styles.layout}>
          <div className={styles.galleryColumn}>
            <ProductGallery product={product} />
          </div>

          <div className={styles.info}>
            <div className={styles.badges}>
              {product.featured ? <span className={styles.badge}>Bestseller</span> : null}
              <span className={styles.badgeMuted}>{product.authenticity.giTag}</span>
            </div>

            <p className={styles.eyebrow}>{product.category}</p>
            <h1>{product.name}</h1>
            {product.kannadaName ? (
              <p className={styles.kannada} lang="kn">
                {product.kannadaName}
              </p>
            ) : null}
            <p className={styles.sku}>Article {product.articleNumber}</p>
            <p className={styles.tagline}>{product.tagline}</p>

            <ul className={styles.specChips}>
              <li>{product.weaveType}</li>
              {product.weightGrams ? <li>{product.weightGrams}g</li> : null}
              <li>{product.primaryColor}</li>
            </ul>

            <PurchasePanel product={product} />
            <DetailAccordion product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className={styles.related} aria-labelledby="related-heading">
          <div className={styles.content}>
            <div className={styles.relatedHead}>
              <h2 id="related-heading">You may also like</h2>
              <Link href="/collection">
                View all sarees
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <Link key={item.id} href={`/collection/${item.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedMedia}>
                    <Image src={item.images.hero} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" />
                    {item.featured ? <span className={styles.relatedTag}>Bestseller</span> : null}
                  </span>
                  <span className={styles.relatedCategory}>{item.category}</span>
                  <span className={styles.relatedName}>{item.name}</span>
                  <span className={styles.relatedSku}>{item.articleNumber}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
