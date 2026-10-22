import React from "react";
import { ABOUT_LINKS } from "@/data/navigation";
import { SegmentSubnav } from "@/components/common/SegmentSubnav";

type AboutSubnavProps = {
  activeHref?: string;
};

export function AboutSubnav({ activeHref }: AboutSubnavProps) {
  return (
    <SegmentSubnav
      links={ABOUT_LINKS}
      activeHref={activeHref}
      ariaLabel="About Us"
    />
  );
}
