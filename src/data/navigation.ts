export type NavLink = { label: string; href: string };

export type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: NavLink[];
};

export const JOURNAL_LINKS: NavLink[] = [
  { label: "Stories", href: "/stories" },
  { label: "Celebrities", href: "/celebrities" },
  { label: "Culture", href: "/culture" },
  { label: "Styling", href: "/styling" },
];

export const ABOUT_LINKS: NavLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Board of Directors", href: "/bod" },
  { label: "Shareholders", href: "/shareholders" },
  { label: "Our Heritage", href: "/our-heritage" },
  { label: "The Archive", href: "/the-archive" },
];

export const MYSORE_SILK_LINKS: NavLink[] = [
  { label: "Our Story", href: "/heritage" },
  { label: "How It Is Made", href: "/craft" },
  { label: "Authenticity", href: "/authenticity" },
];

export const SHOP_LINKS: NavLink[] = [
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Collections", href: "/collection" },
  { label: "Bestsellers", href: "/bestsellers" },
];

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "about",
    label: "About Us",
    href: "/about-us",
    children: ABOUT_LINKS.filter((link) => link.href !== "/about-us"),
  },
  {
    id: "mysore-silk",
    label: "Mysore Silk",
    href: "/craft",
    children: MYSORE_SILK_LINKS,
  },
  {
    id: "shop",
    label: "Shop",
    href: "/collection",
    children: SHOP_LINKS,
  },
  { id: "contact", label: "Contact Us", href: "/contact" },
];

export const UTILITY_LINKS: NavLink[] = [
  { label: "Store Locator", href: "/stores" },
  { label: "Track Order", href: "/contact" },
  { label: "Help", href: "/contact" },
];
