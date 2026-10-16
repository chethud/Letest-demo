import React from "react";
import { EditorialPage } from "@/components/world/EditorialPage";


export const metadata = {
  title: "The Archive · A Century in Every Thread | KSIC",
  description: "Historical photographs, milestones and records that trace Mysore Silk from the 1912 weaving factory to the present.",
};

export default function TheArchivePage() {
  return (
    <EditorialPage
      kicker="The World of KSIC"
      title="A Century in Every Thread"
      lead="Some traditions are best understood through the stories they leave behind. The KSIC Archive brings together the memories, milestones and objects that trace the journey of Mysore Silk. From the establishment of the weaving factory in 1912 to the evolution of silk production over the decades, each record offers a glimpse into the people, processes and heritage behind the fabric."
      heroImage="/assets/heritage/ksic-1932-jacquard.jpg"
      heroAlt="Historical view of the Mysore Silk Weaving Factory"
      close="Preserving the past. Continuing the tradition."
      blocks={[
        {
          eyebrow: "The early years",
          title: "A factory for the royal household",
          body: "The Mysuru silk weaving factory was established in 1912. Its original purpose was to supply premium silk fabrics to the royal family and the armed forces.",
          image: "/assets/heritage/ksic-1912-foundation.jpg",
          alt: "The early years of the Mysuru silk weaving factory",
        },
        {
          eyebrow: "Through the decades",
          title: "From the factory to the corporation",
          body: "Factory operations were expanded from 1930, and commercial production was brought into operation after 1932. In 1980 the corporation was established, and the Mysore Silk Weaving Factory and the other listed silk units were transferred to KSIC.",
          image: "/assets/heritage/ksic-1980-incorporation.jpg",
          alt: "KSIC after incorporation in 1980",
        },
        {
          eyebrow: "The evolution of the loom",
          title: "Weaving methods across a century",
          body: "The record of making moves from the early factory looms to later imported reeling and weaving machinery, and to the dobby, jacquard, and e-jacquard looms described in current production. The equipment changed. The cloth remained Mysore Silk.",
          image: "/assets/craft/05-swiss-jacquard-weaving.jpg",
          alt: "Jacquard weaving machinery",
        },
        {
          eyebrow: "A record of craftsmanship",
          title: "Sarees, borders, and zari",
          body: "The archive of the cloth itself is the saree: a smooth silk body, traditional motifs, and a gold zari border. Those details are the visual record of how Mysore Silk has been recognised.",
          image: "/assets/heritage/ksic-heritage-pallu.jpg",
          alt: "A historical Mysore Silk pallu with zari detail",
        },
        {
          eyebrow: "Milestones and recognition",
          title: "An institution, and a protected name",
          body: "The passage from royal factory to government corporation is one milestone. Another is the Geographical Indication recorded for Mysore Silk, which ties the name to its place of origin.",
          image: "/assets/heritage/ksic-2005-gi-certificate.jpg",
          alt: "Geographical Indication record for Mysore Silk",
        },
        {
          eyebrow: "Preserving the legacy",
          title: "The record, still in use",
          body: "KSIC protects the identity of its cloth by marking each saree with a unique identification number and a hologram, and by keeping the published account of the factory, the filature, and the zari specification available.",
          image: "/assets/craft/ksic-authenticity-hologram.jpg",
          alt: "An identification mark used on KSIC silk",
        },
      ]}
    />
  );
}
