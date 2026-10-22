import React from "react";
import { MYSORE_SILK_LINKS } from "@/data/navigation";
import { SegmentSubnav } from "@/components/common/SegmentSubnav";

type MysoreSilkSubnavProps = {
  activeHref?: string;
};

export function MysoreSilkSubnav({ activeHref }: MysoreSilkSubnavProps) {
  return (
    <SegmentSubnav
      links={MYSORE_SILK_LINKS}
      activeHref={activeHref}
      ariaLabel="Mysore Silk"
    />
  );
}
