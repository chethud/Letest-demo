"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import ProductDetailClient from "@/components/collection/ProductDetailClient";
import { useCatalog } from "@/context/CatalogContext";

export function ProductSlugClient({ slug }: { slug: string }) {
  const { products, hydrated, getBySlug } = useCatalog();
  const product = getBySlug(slug);

  const related = useMemo(() => {
    if (!product) return [];
    const sameCategory = products.filter(
      (item) => item.id !== product.id && item.category === product.category,
    );
    const other = products.filter(
      (item) => item.id !== product.id && item.category !== product.category,
    );
    return [...sameCategory, ...other].slice(0, 4);
  }, [product, products]);

  if (!hydrated) {
    return (
      <div style={{ padding: "8rem 1.5rem", textAlign: "center" }}>
        Loading article…
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ padding: "8rem 1.5rem", textAlign: "center" }}>
        <h1>Article not found</h1>
        <p>
          <Link href="/collection">Back to shop</Link>
        </p>
      </div>
    );
  }

  return <ProductDetailClient product={product} related={related} />;
}
