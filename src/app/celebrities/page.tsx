import React from "react";
import { JournalSubnav } from "@/components/journal/JournalSubnav";
import styles from "@/components/journal/JournalArticle.module.css";

export const metadata = {
  title: "Celebrities | KSIC Journal",
  description:
    "Mysore Silk on the world stage: public moments when the weave was worn by celebrated figures.",
};

const APPEARANCES = [
  {
    name: "Deepika Padukone",
    occasion: "75th Cannes Film Festival, 2022",
    detail:
      "As a festival jury member, Padukone appeared at the Cannes photocall in a printed Mysore silk shirt by Sabyasachi, bringing the Karnataka weave onto an international fashion stage.",
  },
  {
    name: "Bridal & ceremonial wardrobes",
    occasion: "Across generations in Karnataka",
    detail:
      "Beyond the red carpet, Mysore Silk remains the cloth chosen for weddings, festivals, and state occasions - worn by families who treat a single saree as an heirloom across decades.",
  },
  {
    name: "Public heritage, public wear",
    occasion: "From palace ateliers to modern closets",
    detail:
      "What began under royal patronage is now worn in cinema, ceremony, and everyday dignity. Each public appearance renews the weave’s place in India’s cultural imagination.",
  },
];

export default function CelebritiesPage() {
  return (
    <div className={styles.page}>
      <JournalSubnav activeHref="/celebrities" />
      <article className={styles.article}>
        <p className={styles.kicker}>Journal · Celebrities</p>
        <h1 className={styles.title}>
          Worn on the <span>world stage</span>
        </h1>
        <p className={styles.lead}>
          Moments when Mysore Silk left the loom and entered public memory - from international
          festivals to the ceremonies that keep Karnataka’s silk tradition alive.
        </p>

        <div className={styles.appearanceList}>
          {APPEARANCES.map((item) => (
            <article key={item.name} className={styles.appearanceCard}>
              <p className={styles.appearanceOccasion}>{item.occasion}</p>
              <h2 className={styles.appearanceName}>{item.name}</h2>
              <p className={styles.appearanceDetail}>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className={styles.body}>
          <h2>Why these moments matter</h2>
          <p>
            When Mysore Silk is seen in high fashion or ceremonial life, it carries more than
            lustre. It carries GI-protected identity, certified zari, and the labour of
            sericulture families and weavers whose work KSIC holds in public trust.
          </p>
        </div>
      </article>
    </div>
  );
}
