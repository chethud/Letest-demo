import React from "react";
import { JOURNAL_LINKS } from "@/data/navigation";
import { SegmentSubnav } from "@/components/common/SegmentSubnav";

type JournalSubnavProps = {
  activeHref?: string;
};

export function JournalSubnav({ activeHref }: JournalSubnavProps) {
  return (
    <SegmentSubnav
      links={JOURNAL_LINKS}
      activeHref={activeHref}
      ariaLabel="Journal"
    />
  );
}
