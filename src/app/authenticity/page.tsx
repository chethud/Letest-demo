import React from "react";
import { MysoreSilkSubnav } from "@/components/mysore-silk/MysoreSilkSubnav";
import { RoyalZariVerificationLab } from "@/components/home/RoyalZariVerificationLab";
import { QualityCareSections } from "@/components/authenticity/QualityCareSections";
import styles from "./Authenticity.module.css";

export const metadata = {
  title: "Authenticity & Care | KSIC",
  description:
    "Verify Mysore Silk authenticity, quality checkpoints from cocoon to cloth, and care notes for KSIC sarees.",
};

export default function AuthenticityPage() {
  return (
    <div className={styles.page}>
      <MysoreSilkSubnav activeHref="/authenticity" />
      <RoyalZariVerificationLab id="authenticity-lab" />
      <QualityCareSections />
    </div>
  );
}
