import React from "react";
import { RoyalZariVerificationLab } from "@/components/home/RoyalZariVerificationLab";
import { MysoreSilkSubnav } from "@/components/mysore-silk/MysoreSilkSubnav";
import styles from "./Authenticity.module.css";

export const metadata = {
  title: "Authenticity · Royal Zari Verification Lab | KSIC",
  description: "The Royal Zari Verification Lab for Mysore Silk: GI Tag No. 11, serial marking, and the specified gold and silver zari.",
};

export default function AuthenticityPage() {
  return (
    <div className={styles.page}>
      <MysoreSilkSubnav activeHref="/authenticity" />
      <RoyalZariVerificationLab id="authenticity" />
    </div>
  );
}
