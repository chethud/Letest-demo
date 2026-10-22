"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { SHOP_LINKS } from "@/data/navigation";
import { SegmentSubnav } from "@/components/common/SegmentSubnav";

type ShopSubnavProps = {
  /** @deprecated Active state is derived from the URL */
  activeHref?: string;
};

function resolveShopActiveHref(pathname: string, view: string | null) {
  if (pathname !== "/collection") return pathname;
  if (view === "new") return "/collection?view=new";
  if (view === "bestsellers") return "/collection?view=bestsellers";
  return "/collection";
}

export function ShopSubnav({ activeHref }: ShopSubnavProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  const resolved = activeHref ?? resolveShopActiveHref(pathname, view);

  return (
    <SegmentSubnav
      links={SHOP_LINKS}
      activeHref={resolved}
      ariaLabel="Shop"
    />
  );
}
