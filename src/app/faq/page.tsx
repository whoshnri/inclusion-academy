import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/ui";
import { faqItems } from "@/content/site";

export const metadata: Metadata = {
  title: "Inclusion Health Check FAQ",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Understand how the Inclusion Health Check works."
        lead="Clear answers about scope, timelines, evidence, stakeholder involvement and what happens after the assessment."
      />

      <section className="py-25">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.25fr_1.25fr]">
            <div className="lg:sticky lg:top-30 lg:self-start space-y-4">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em]">
                A practical starting point.
              </h2>
              <p>
                Every assessment is shaped around your organisation, its context
                and the people it serves.
              </p>
              <Button href="/contact">Discuss your Health Check</Button>
            </div>
            <FaqAccordion items={[...faqItems]} />
          </div>
        </Container>
      </section>
    </main>
  );
}
