export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Areas of Practice" },
  { href: "/school-improvement-review", label: "School Improvement Review" },
  { href: "/case-studies", label: "Case Studies" },
] as const;

export const footerExploreLinks = navLinks.filter((link) => link.href !== "/");
