/**
 * Side-effect imports so layout chrome CSS modules are always emitted into the
 * root layout stylesheet (client-only SiteChrome can otherwise omit them).
 */
import "./Header.module.css";
import "./Footer.module.css";
import "../shop/CartDrawer.module.css";
