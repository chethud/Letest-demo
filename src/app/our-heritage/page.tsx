import React from "react";
import { EditorialPage } from "@/components/world/EditorialPage";

export const metadata = {
  title: "Our Heritage · The Legacy of Mysore Silk | KSIC",
  description: "How Mysore Silk became a symbol of quality, tradition and craftsmanship, and how KSIC continues that legacy.",
};

export default function OurHeritagePage() {
  return (
    <EditorialPage
      kicker="The World of KSIC"
      title="The Legacy of Mysore Silk"
      lead="Mysore Silk is a tradition shaped by time, precision and an enduring appreciation for fine craftsmanship. Rooted in the royal heritage of Mysore, this silk has become known for its distinctive simplicity, rich texture and elegant gold zari borders. For generations, the art of creating Mysore Silk has been preserved through skilled craftsmanship and a commitment to quality. Today, KSIC continues this legacy, bringing together its historic roots and the timeless beauty of pure silk."
      heroImage="/assets/heritage/mysore-palace-heritage.jpg"
      heroAlt="Mysore Palace, associated with the royal heritage of Mysore Silk"
      close="More than a fabric, Mysore Silk is a legacy woven through generations."
      blocks={[
        {
          eyebrow: "A legacy since 1912",
          title: "A tradition that began in Mysuru",
          body: "The Mysore Silk Weaving Factory was established in Mysuru in 1912. That beginning still shapes how KSIC speaks about its silk: a craft tied to a place, a court, and a standard of making that has been carried forward rather than replaced.",
          image: "/assets/heritage/ksic-1932-jacquard.jpg",
          alt: "Historical photograph of the Mysore Silk Weaving Factory",
        },
        {
          eyebrow: "The royal connection",
          title: "Silk for a royal court",
          body: "The 1912 factory was established under Maharaja Sri Nalvadi Krishnaraja Wadiyar to produce premium silk for the royal family and the armed forces. Mysore’s royal heritage and the development of silk weaving remain part of the same story.",
          image: "/assets/heritage/nalvadi-krishnaraja-wadiyar.jpg",
          alt: "Sri Nalvadi Krishnaraja Wadiyar, Maharaja of Mysore",
        },
        {
          eyebrow: "The signature of Mysore Silk",
          title: "Simplicity, texture, and a gold border",
          body: "Mysore Silk is recognised for a smooth silk body, a rich colour, and an elegant gold zari border. The character is understated: lustre in the cloth, precision in the edge, and a drape that does not need ornament to announce itself.",
          image: "/assets/collection/ksic-mysore-silk-sarees.jpg",
          alt: "A Mysore Silk saree with a gold zari border",
        },
        {
          eyebrow: "A tradition preserved",
          title: "Standards carried forward",
          body: "KSIC continues the silk-making tradition by holding to the same concerns that defined it: pure mulberry silk, careful weaving, and a zari border specified as 65% pure silver and 0.65% gold. The work is to keep those standards intact.",
          image: "/assets/heritage/generations.jpg",
          alt: "Three generations associated with Mysore Silk",
        },
        {
          eyebrow: "A mark of authenticity",
          title: "A name with a place, and a mark on the cloth",
          body: "Mysore Silk is recorded as a Geographical Indication. Each KSIC saree is described as carrying a unique identification number and a hologram, so the cloth can be recognised as KSIC’s own.",
          image: "/assets/heritage/ksic-2005-gi-certificate.jpg",
          alt: "Geographical Indication record for Mysore Silk",
        },
      ]}
    />
  );
}
