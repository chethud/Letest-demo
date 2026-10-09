import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldCheck, Sparkles, MapPin, CheckCircle2, ChevronLeft } from "lucide-react";
import { KSIC_PRODUCTS, KSICProduct } from "@/data/collections";
import { SHOWROOMS_DATA } from "@/data/showrooms";
import styles from "./ProductDetail.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return KSIC_PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = KSIC_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Article Not Found" };

  return {
    title: `${product.articleNumber} — ${product.name} | KSIC`,
    description: `${product.description} Verified pure silk and 24K gold zari weave by KSIC Ltd.`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = KSIC_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products from same category or featured
  const related = KSIC_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className={styles.productPage}>
      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "var(--border-rule)", padding: "16px 0" }}>
        <div className="container-institutional">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
            <Link href="/collection" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--color-burgundy)" }}>
              <ChevronLeft size={14} />
              <span>COLLECTION</span>
            </Link>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>{product.articleNumber}</span>
          </div>
        </div>
      </div>

      {/* Main Product Monograph */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-primary)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional">
          <div className={styles.monographGrid}>
            {/* Visuals Column */}
            <div className="reveal-scale" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#261F1A", border: "1px solid rgba(23, 21, 19, 0.15)" }}>
                <Image
                  src={product.images.hero}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: "18px", left: "18px", backgroundColor: "rgba(24, 19, 15, 0.9)", padding: "6px 16px", color: "var(--color-gold-bright)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
                  {product.articleNumber}
                </div>
              </div>

              {/* Detail Swatches / Pallu / Texture Views */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "16px" }}>
                {product.images.detail && (
                  <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#201A15", border: "1px solid rgba(23, 21, 19, 0.12)" }}>
                    <Image
                      src={product.images.detail}
                      alt={`${product.name} Zari Detail`}
                      fill
                      sizes="25vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", bottom: "10px", left: "10px", backgroundColor: "rgba(24, 19, 15, 0.85)", padding: "4px 10px", color: "#FFFFFF", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      ZARI CLOSE-UP
                    </div>
                  </div>
                )}
                {product.images.pallu && (
                  <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#201A15", border: "1px solid rgba(23, 21, 19, 0.12)" }}>
                    <Image
                      src={product.images.pallu}
                      alt={`${product.name} Pallu`}
                      fill
                      sizes="25vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", bottom: "10px", left: "10px", backgroundColor: "rgba(24, 19, 15, 0.85)", padding: "4px 10px", color: "#FFFFFF", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      PALLU WEAVE
                    </div>
                  </div>
                )}
                {product.images.texture && (
                  <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#201A15", border: "1px solid rgba(23, 21, 19, 0.12)" }}>
                    <Image
                      src={product.images.texture}
                      alt={`${product.name} Silk Texture`}
                      fill
                      sizes="25vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", bottom: "10px", left: "10px", backgroundColor: "rgba(24, 19, 15, 0.85)", padding: "4px 10px", color: "#FFFFFF", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      SILK TEXTURE
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Information Column */}
            <div className="reveal-up">
              <span className="editorial-label">
                {product.category} · {product.collection}
              </span>

              {product.kannadaName && (
                <div style={{ fontFamily: "var(--font-kannada)", fontSize: "1.3rem", color: "var(--color-gold)", marginBottom: "4px" }}>
                  {product.kannadaName}
                </div>
              )}

              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 4.4vw, 3.6rem)", fontWeight: 300, lineHeight: 1.1, color: "var(--color-text-primary)", marginBottom: "16px" }}>
                {product.name}
              </h1>

              <p style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-burgundy)", marginBottom: "20px", lineHeight: 1.45 }}>
                {product.tagline}
              </p>

              <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--color-text-secondary)", marginBottom: "32px" }}>
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className={styles.specsTable}>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "16px", borderBottom: "1px solid rgba(23, 21, 19, 0.08)", paddingBottom: "8px" }}>
                  WEAVE & MATERIAL SPECIFICATIONS
                </div>
                <div className={styles.specsGrid}>
                  <div style={{ color: "var(--color-text-muted)" }}>Article ID</div>
                  <div style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>{product.articleNumber}</div>

                  <div style={{ color: "var(--color-text-muted)" }}>Material</div>
                  <div>{product.material}</div>

                  <div style={{ color: "var(--color-text-muted)" }}>Zari Standard</div>
                  <div>{product.zari}</div>

                  <div style={{ color: "var(--color-text-muted)" }}>Weave Type</div>
                  <div>{product.weaveType}</div>

                  <div style={{ color: "var(--color-text-muted)" }}>Border Motif</div>
                  <div>{product.borderMotif}</div>

                  <div style={{ color: "var(--color-text-muted)" }}>Dimensions</div>
                  <div>{product.dimensions}</div>

                  {product.weightGrams && (
                    <>
                      <div style={{ color: "var(--color-text-muted)" }}>Total Weight</div>
                      <div>Approximately {product.weightGrams} grams</div>
                    </>
                  )}
                </div>
              </div>

              {/* Authenticity Certificate Box */}
              <div style={{ padding: "20px", backgroundColor: "var(--color-bg-subtle)", borderLeft: "3px solid var(--color-burgundy)", marginBottom: "36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-burgundy)", marginBottom: "6px" }}>
                  <ShieldCheck size={16} />
                  <span>AUTHENTICITY GUARANTEE · {product.authenticity.giTag}</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  This piece bears an individually embroidered serial number in the pallu hem with optical hologram security, certified by the Government of Karnataka.
                </p>
              </div>

              {/* Call to Action: Showroom Enquiry */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Link
                  href={`/stores?enquiry=${encodeURIComponent(product.articleNumber)}`}
                  className="action-editorial action-editorial-burgundy"
                  style={{ justifyContent: "center", padding: "18px 32px" }}
                >
                  <span>ENQUIRE AT A KSIC SHOWROOM</span>
                  <ArrowRight size={16} />
                </Link>

                <div style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", textAlign: "center" }}>
                  Available across registered Karnataka state stores including Mysuru Factory & Bengaluru Jubilee.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Availability */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional">
          <div className="reveal-up" style={{ maxWidth: "700px", marginBottom: "40px" }}>
            <span className="editorial-label">PHYSICAL ALLOCATION</span>
            <h2 className="display-section">EXPERIENCE THIS ARTICLE IN PERSON</h2>
            <p style={{ marginTop: "12px", color: "var(--color-text-secondary)" }}>
              The following official state centers maintain archival reserve allocations of this weave:
            </p>
          </div>

          <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {product.showroomAvailability.map((locName) => (
              <div key={locName} className="hover-lift" style={{ padding: "20px", backgroundColor: "var(--color-bg-paper)", border: "1px solid rgba(23, 21, 19, 0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-burgundy)", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "8px" }}>
                  <MapPin size={14} />
                  <span>OFFICIAL KSIC LOCATION</span>
                </div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-text-primary)" }}>
                  {locName}
                </div>
                <div style={{ marginTop: "12px" }}>
                  <Link href="/stores" className="action-link" style={{ fontSize: "0.75rem" }}>
                    <span>VIEW HOURS & DIRECTIONS</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <div className="container-institutional">
          <div className="reveal-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="editorial-label">ARCHIVE CONTINUATION</span>
              <h2 className="display-section">RELATED ARTICLES</h2>
            </div>
            <Link href="/collection" className="action-link">
              <span>VIEW ALL ({KSIC_PRODUCTS.length})</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className={`reveal-stagger ${styles.relatedGrid}`}>
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/collection/${rel.slug}`}
                className="hover-lift"
                style={{
                  backgroundColor: "var(--color-bg-paper)",
                  border: "1px solid rgba(23, 21, 19, 0.12)",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#201A15" }}>
                  <Image
                    src={rel.images.hero}
                    alt={rel.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: "rgba(24, 19, 15, 0.9)", padding: "4px 10px", color: "var(--color-gold-bright)", fontSize: "0.68rem", letterSpacing: "0.14em", fontWeight: 600 }}>
                    {rel.articleNumber}
                  </div>
                </div>
                <div style={{ padding: "20px" }}>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-burgundy)", fontWeight: 600 }}>
                    {rel.category}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--color-text-primary)", marginTop: "4px", marginBottom: "8px" }}>
                    {rel.name}
                  </h3>
                  <div className="action-link" style={{ fontSize: "0.75rem", marginTop: "12px" }}>
                    <span>VIEW SPECIFICATIONS</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
