import React from "react";
import { notFound } from "next/navigation";
import { KSIC_PRODUCTS } from "@/data/collections";
import ProductDetailClient from "@/components/collection/ProductDetailClient";

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
  if (!product) return { title: "Article Not Found" };

  return {
    title: `${product.articleNumber}: ${product.name} | KSIC`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = KSIC_PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const sameCategory = KSIC_PRODUCTS.filter(
    (item) => item.id !== product.id && item.category === product.category
  );
  const otherArticles = KSIC_PRODUCTS.filter(
    (item) => item.id !== product.id && item.category !== product.category
  );
  const related = [...sameCategory, ...otherArticles].slice(0, 4);

  return <ProductDetailClient product={product} related={related} />;
}
