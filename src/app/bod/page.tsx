import React from "react";
import { BoardDirectorsSection } from "@/components/institution/BoardDirectorsSection";
import styles from "./Bod.module.css";

export const metadata = {
  title: "Board of Directors | KSIC",
  description:
    "Board of Directors of Karnataka Silk Industries Corporation Limited — strategic direction, governance, and institutional oversight.",
};

export default function BodPage() {
  return (
    <div className={styles.page}>
      <BoardDirectorsSection />
    </div>
  );
}
