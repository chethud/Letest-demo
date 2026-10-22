import React from "react";
import { ABOUT_LINKS } from "@/data/navigation";
import { SegmentSubnav } from "@/components/common/SegmentSubnav";

type AboutSubnavProps = {
  activeHref?: string;
  contentClassName?: string;
};

export function AboutSubnav({ activeHref, contentClassName }: AboutSubnavProps) {
  return (
    <SegmentSubnav
      links={ABOUT_LINKS}
      activeHref={activeHref}
      ariaLabel="About Us"
      innerClassName={contentClassName}
    />
  );
}
