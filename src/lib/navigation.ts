export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
] as const;

export const footerExploreLinks = navLinks.filter((link) => link.href !== "/");
