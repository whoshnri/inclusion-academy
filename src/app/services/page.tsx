import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero, BulletList } from "@/components/ui";
import { healthCheckIncludes, serviceGroups } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our services"
        title="Build inclusive systems that deliver measurable outcomes."
        lead="Focused reviews, leadership development and practical implementation support shaped around organisations across Africa."
      />

      <section className="grid min-h-125 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-95 lg:min-h-full">
          <Image
            src="/assets/educator-workshop.png"
            alt="African educators taking part in a professional development workshop"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
        <div className="flex flex-col justify-end bg-navy p-6 md:p-12 text-white">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em] text-white">
            Work with the people who will make change happen.
          </h2>
          <p className="mt-2 text-white">
            Our reviews and development programmes make space for leadership
            insight, staff experience and stakeholder voice.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          {serviceGroups.map((group, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={group.id}
                id={group.id}
                className="scroll-mt-28 border-b border-line py-12 last:border-b-0 sm:py-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 lg:py-20"
              >
                <div
                  className={cn(
                    "mb-8 lg:sticky lg:top-28 lg:mb-0",
                    isReversed && "lg:order-2 lg:text-right",
                  )}
                >
                  <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em]">
                    {group.title}
                  </h2>
                </div>

                <div
                  className={cn(
                    "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5",
                    isReversed && "lg:order-1",
                  )}
                >
                  {group.items.map((item) => (
                    <article key={item.title} className="bg-grey p-6 sm:p-7">
                      <h3 className="font-display text-lg sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted sm:mt-3 sm:text-base">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="bg-green py-[100px] text-white">
        <Container>
          <div className="grid items-center gap-[70px] lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em] text-white">
                Inclusion Health Check
              </h2>
              <p>
                The Inclusion Health Check provides a structured assessment of
                your organisation&apos;s current position, identifies strengths
                and improvement opportunities and delivers a practical roadmap
                for action.
              </p>
              <Button href="/contact" variant="light">
                Book a Discovery Conversation
              </Button>
            </div>
            <div>
              <h3 className="text-white">Every engagement includes:</h3>
              <BulletList light items={[...healthCheckIncludes]} />
              <Button href="/faq" variant="light" className="mt-4">
                Read Health Check FAQs
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
