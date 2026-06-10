import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { footerExploreLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-navy text-white/75">
      <div className="h-1 bg-gold" aria-hidden />

      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div>
            <Link
              href="/"
              className="inline-block font-display text-[1.05rem] font-extrabold tracking-[0.06em] text-white"
            >
              INCLUSION <span className="text-green">ACADEMY</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed sm:text-base">
              Building capability across African organisations through practical
              systems, leadership and accountable action.
            </p>
            <Button href="/contact" variant="hero-outline" showArrow className="mt-4">
              Book a Discovery Conversation
            </Button>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
              Explore
            </h3>
            <nav className="flex flex-col">
              {footerExploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 py-2 text-sm font-semibold transition-colors hover:text-gold sm:text-base"
                >
                  {link.label}
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden
                  />
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
              Start a conversation
            </h3>
            <p className="mb-5 max-w-xs text-sm leading-relaxed sm:text-base">
              Discuss your context, priorities and the outcomes your organisation
              needs.
            </p>
           
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6">
          <p className="mb-0 text-xs text-white/55 sm:text-sm">
            © 2026 Inclusion Academy. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
