import React from "react";
import { EditorialPage } from "@/components/world/EditorialPage";


export const metadata = {
  title: "The Factory · Where Every Thread Matters | KSIC",
  description: "How Mysore Silk is made at KSIC, from silk yarn and weaving to gold zari, colour, and quality checks.",
};

export default function TheFactoryPage() {
  return (
    <EditorialPage
      kicker="The World of KSIC"
      title="Where Every Thread Matters"
      lead="Every Mysore Silk saree begins with carefully selected materials and a series of precise manufacturing processes. At KSIC, silk production combines specialised machinery, skilled hands and established quality standards to create a fabric recognised for its lustre, softness and elegant drape. From preparing the silk yarn to weaving the distinctive zari border, each stage contributes to the finished saree."
      heroImage="/assets/craft/05-swiss-jacquard-weaving.jpg"
      heroAlt="Weaving machinery at work on Mysore Silk"
      close="Every thread has a purpose. Every detail makes a difference."
      blocks={[
        {
          eyebrow: "From silk yarn to fabric",
          title: "Yarn prepared before the loom",
          body: "Cocoons are described as coming from Ramanagara. At the filature unit in T. Narasipura they are reeled into raw silk yarn, then twisted for the crepe texture before the yarn is sent on for weaving.",
          image: "/assets/craft/02-filature-reeling.jpg",
          alt: "Silk reeling, where cocoons become yarn",
        },
        {
          eyebrow: "The art of weaving",
          title: "Body and border, woven together",
          body: "At the Mysuru weaving factory, sarees are woven on dobby, jacquard, and e-jacquard looms fitted with prepared patterns. The silk body and the zari border are made as one cloth, not added afterwards.",
          image: "/assets/craft/03-yarn-twisting.jpg",
          alt: "Silk yarn prepared for weaving",
        },
        {
          eyebrow: "The beauty of gold zari",
          title: "A border of silver and gold",
          body: "The metallic thread in the border is zari, specified as 65% pure silver and 0.65% gold. It forms the distinctive edge and the decorative details that mark a Mysore Silk saree.",
          image: "/assets/craft/06-gold-zari.jpg",
          alt: "Gold zari thread used for the saree border",
        },
        {
          eyebrow: "Colour and finish",
          title: "Colour, lustre, and the final cloth",
          body: "After weaving, sarees are washed, then dyed. Colour is taken up in hot water linked to a colour tank. Steam ironing, cutting, and a final check give the cloth its finished appearance.",
          image: "/assets/craft/04-silk-dyeing.jpg",
          alt: "Silk during dyeing",
        },
        {
          eyebrow: "Quality at every stage",
          title: "Checked before it leaves",
          body: "Materials and finished sarees are reviewed for consistency. A finished saree is marked with a code and hologram, checked, and then packed for the showrooms.",
          image: "/assets/craft/ksic-authenticity-hologram.jpg",
          alt: "A finished saree marked before it leaves the factory",
        },
        {
          eyebrow: "Made at KSIC",
          title: "The Mysuru weaving factory",
          body: "KSIC’s Mysuru weaving factory was established in 1912 and remains part of the organisation’s silk-making legacy. KSIC also operates a silk filature unit at T. Narasipura.",
          image: "/assets/factory/ksic-factory-heritage-cinematic.jpg",
          alt: "The KSIC weaving factory in Mysuru",
        },
      ]}
    />
  );
}
