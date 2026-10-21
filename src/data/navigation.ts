export type NavLink = { label: string; href: string };

export type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: NavLink[];
};

export const JOURNAL_LINKS: NavLink[] = [
  { label: "Stories", href: "/stories" },
  { label: "Culture", href: "/culture" },
  { label: "Styling", href: "/styling" },
];

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "about",
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Board of Directors", href: "/bod" },
      { label: "Shareholders", href: "/shareholders" },
      { label: "Our Heritage", href: "/our-heritage" },
      { label: "The Archive", href: "/the-archive" },
    ],
  },
  {
    id: "mysore-silk",
    label: "Mysore Silk",
    href: "/craft",
    children: [
      { label: "Our Story", href: "/heritage" },
      { label: "How It Is Made", href: "/craft" },
      { label: "Authenticity", href: "/authenticity" },
    ],
  },
  {
    id: "shop",
    label: "Shop",
    href: "/collection",
    children: [
      { label: "New Arrivals", href: "/new-arrivals" },
      { label: "Collections", href: "/collection" },
      { label: "Bestsellers", href: "/bestsellers" },
    ],
  },
  { id: "contact", label: "Contact Us", href: "/contact" },
];

export const UTILITY_LINKS: NavLink[] = [
  { label: "Store Locator", href: "/stores" },
  { label: "Track Order", href: "/contact" },
  { label: "Help", href: "/contact" },
];
