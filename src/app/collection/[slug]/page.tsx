import React from "react";
import { KSIC_PRODUCTS } from "@/data/collections";
import { ProductSlugClient } from "@/components/collection/ProductSlugClient";

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
  const product = KSIC_PRODUCTS.find((item) => item.slug === slug);
  if (!product) return { title: "Article" };

  return {
    title: `${product.articleNumber}: ${product.name} | KSIC`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <ProductSlugClient slug={slug} />;
}
