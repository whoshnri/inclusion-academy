"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { navLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const HEADER_HEIGHT = "4rem";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const overlay = isHome && !scrolled && !menuOpen;
  const darkMobileMenu = isHome && menuOpen;

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string, large = false) =>
    cn(
      "font-bold transition-colors",
      large ? "text-lg" : "text-sm",
      overlay
        ? cn(
            "text-white/90 hover:text-white",
            isActive(href) && "text-gold",
          )
        : cn("text-navy hover:text-green", isActive(href) && "text-green"),
    );

  const mobileLinkClass = (href: string) =>
    cn(
      "block rounded-none px-4 py-3.5 text-lg font-bold transition-all duration-300 ease-out",
      darkMobileMenu
        ? cn(
            "text-white/90 hover:bg-white/10 hover:text-white",
            isActive(href) && "bg-white/10 text-gold",
          )
        : cn(
            "text-navy hover:bg-grey",
            isActive(href) && "bg-grey text-green",
          ),
    );

  return (
    <>
      <header
        style={{ "--header-height": HEADER_HEIGHT } as React.CSSProperties}
        className={cn(
          "top-0 z-50 w-full transition-all duration-300",
          isHome ? "fixed" : "sticky",
          overlay
            ? "border-transparent bg-transparent"
            : "border-b border-line bg-white/96 backdrop-blur-md",
          menuOpen && "border-line bg-white/98 lg:bg-white/96",
        )}
      >
        <Container>
          <nav className="relative flex h-16 items-center justify-between lg:grid lg:h-[4.5rem] lg:grid-cols-[1fr_auto_1fr]">
            <Link
              href="/"
              className={cn(
                "font-display text-sm font-extrabold tracking-[0.06em] sm:text-[1.05rem]",
                overlay ? "text-white" : "text-navy",
              )}
            >
              INCLUSION{" "}
              <span className={overlay ? "text-gold" : "text-green"}>
                ACADEMY
              </span>
            </Link>

            <button
              type="button"
              className={cn(
                "relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
                overlay
                  ? "text-white hover:bg-white/10"
                  : "text-navy hover:bg-grey",
              )}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <List
                size={26}
                weight="bold"
                className={cn(
                  "absolute transition-all duration-300",
                  menuOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100",
                )}
                aria-hidden
              />
              <X
                size={26}
                weight="bold"
                className={cn(
                  "absolute transition-all duration-300",
                  menuOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0",
                )}
                aria-hidden
              />
            </button>

            <div className="hidden items-center gap-8 lg:flex lg:justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden justify-end lg:flex">
              <Button
                href="/contact"
                variant={overlay ? "hero-primary" : "primary"}
                className={cn(
                  "text-sm",
                  !overlay && isActive("/contact") && "bg-navy border-navy",
                )}
              >
                Book a conversation
              </Button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile menu backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-navy/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        style={{ top: HEADER_HEIGHT }}
        className={cn(
          "fixed inset-x-0 z-[45] overflow-hidden border-b shadow-[0_20px_50px_rgba(22,50,79,0.15)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          menuOpen
            ? "visible max-h-[calc(100dvh-4rem)] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-3 opacity-0",
          darkMobileMenu
            ? "border-white/10 bg-navy/98"
            : "border-line bg-white",
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1 px-4 py-5 sm:px-6 sm:py-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                mobileLinkClass(link.href),
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
              style={{
                transitionDelay: menuOpen ? `${80 + index * 55}ms` : "0ms",
              }}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={cn(
              "mt-3 border-t pt-5 transition-all duration-300",
              darkMobileMenu ? "border-white/15" : "border-line",
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
            )}
            style={{
              transitionDelay: menuOpen
                ? `${80 + navLinks.length * 55}ms`
                : "0ms",
            }}
          >
            <Button
              href="/contact"
              variant={darkMobileMenu ? "hero-primary" : "primary"}
              className="w-full sm:w-auto"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              Book a conversation
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
