import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ksicsilk.karnataka.gov.in"),
  title: {
    default: "Karnataka Silk Industries Corporation Limited (KSIC) · Mysore Silk",
    template: "%s | KSIC Mysore Silk — Government of Karnataka",
  },
  description:
    "Official digital identity and heritage portal of Karnataka Silk Industries Corporation Limited (KSIC). Established in 1912 by Maharaja Nalvadi Krishnaraja Wadiyar. The sole registered proprietor of authentic GI-11 Mysore Silk with pure gold zari.",
  keywords: [
    "KSIC",
    "Karnataka Silk Industries Corporation",
    "Mysore Silk",
    "Government of Karnataka",
    "GI-11",
    "Nalvadi Krishnaraja Wadiyar",
    "Mysore Silk Weaving Factory",
    "Pure Gold Zari Saree",
    "Silk Reeling",
    "T. Narasipura",
  ],
  authors: [{ name: "Karnataka Silk Industries Corporation Limited" }],
  creator: "Government of Karnataka",
  publisher: "KSIC Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Karnataka Silk Industries Corporation Limited (KSIC) · Mysore Silk",
    description:
      "A Government of Karnataka Enterprise carrying forward the 1912 royal silk weaving legacy of Mysuru. Pure natural silk and authentic gold zari.",
    url: "https://ksicsilk.karnataka.gov.in",
    siteName: "KSIC Mysore Silk",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/heritage/ksic-hero-pallu.jpg",
        width: 1200,
        height: 630,
        alt: "Authentic KSIC Mysore Silk with Pure Gold Zari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSIC Mysore Silk · Official Heritage Portal",
    description:
      "A legacy woven in Mysuru since 1912. Government of Karnataka Enterprise.",
    images: ["/assets/heritage/ksic-hero-pallu.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import { ScrollAnimator } from "@/components/common/ScrollAnimator";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: "Karnataka Silk Industries Corporation Limited",
    alternateName: "KSIC Mysore Silk",
    url: "https://ksicsilk.karnataka.gov.in",
    logo: "https://ksicsilk.karnataka.gov.in/assets/brand/ksic-logo.png",
    foundingDate: "1912",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd & 4th Floor, Public Utility Building, M.G. Road",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    parentOrganization: {
      "@type": "GovernmentOrganization",
      name: "Government of Karnataka",
    },
    sameAs: ["https://www.ksicsilk.com"],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <ScrollAnimator />
          <Header />
          <main id="main-content" style={{ minHeight: "100vh" }}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
