"use client";

import { useEffect, useState } from "react";
import { Cookie } from "@phosphor-icons/react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

const CONSENT_KEY = "inclusion-academy-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem(CONSENT_KEY);
    if (!hasConsent) {
      setVisible(true);
      requestAnimationFrame(() => setMounted(true));
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "essential");
    setMounted(false);
    window.setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      aria-live="polite"
      className={cn(
        "fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-navy text-white shadow-[0_-12px_48px_rgba(22,50,79,0.28)] transition-transform duration-300 ease-out",
        mounted ? "translate-y-0" : "translate-y-full",
      )}
    >
      <Container className="py-5 sm:py-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="flex gap-4">
            <div
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 sm:flex"
              aria-hidden
            >
              <Cookie size={22} weight="duotone" className="text-gold" />
            </div>
            <div className="max-w-3xl">
              <h2
                id="cookie-consent-title"
                className="mb-1 font-display text-lg font-bold text-white sm:text-xl"
              >
                Essential cookies only
              </h2>
              <p
                id="cookie-consent-description"
                className="mb-0 text-sm leading-relaxed text-white/75 sm:text-[0.95rem]"
              >
                We only use cookies that are necessary for this website to
                function. We do not use analytics, advertising, or tracking
                cookies.
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="light"
            className="w-full shrink-0 sm:w-auto"
            onClick={accept}
          >
            I understand
          </Button>
        </div>
      </Container>
    </div>
  );
}
