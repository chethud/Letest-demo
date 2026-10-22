import React from "react";
import { SHOP_LINKS } from "@/data/navigation";
import { SegmentSubnav } from "@/components/common/SegmentSubnav";

type ShopSubnavProps = {
  activeHref?: string;
};

export function ShopSubnav({ activeHref }: ShopSubnavProps) {
  return (
    <SegmentSubnav
      links={SHOP_LINKS}
      activeHref={activeHref}
      ariaLabel="Shop"
    />
  );
}
