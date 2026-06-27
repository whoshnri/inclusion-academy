import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/ui";
import { serviceGroups } from "@/content/site";
import { cn } from "@/lib/utils";
import { StarFourIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Areas of Practice",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Build capability, systems and practice that improve outcomes."
        lead="Focused reviews, capability building and practical implementation support shaped around organisations across Africa."
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
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-white">
            Work with the people who make change happen.
          </h2>
          <p className="mt-4 text-white/85 leading-relaxed">
            Our reviews and development programmes make space for leadership
            insight, staff experience and stakeholder voice.
          </p>
        </div>
      </section>

      {/* Services Listing Section */}
      <section className="py-20 lg:py-28">
        <Container>
          {serviceGroups.map((group, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={group.id}
                id={group.id}
                className={`scroll-mt-28 border-b border-line py-12 last:border-b-0 sm:py-16 lg:grid ${isReversed ? "lg:grid-cols-[1.2fr_0.8fr]" : "lg:grid-cols-[0.8fr_1.2fr]"} lg:items-start lg:gap-20 lg:py-20`}
              >
                <div
                  className={cn(
                    "mb-8 lg:sticky lg:top-28 lg:mb-0",
                    isReversed && "lg:order-2",
                  )}
                >
                  <h2 className="mt-2 text-[clamp(1.8rem,3.5vw,2.75rem)] tracking-[-0.045em] text-navy">
                    {group.title}
                  </h2>
                </div>

                <div
                  className={cn(
                    "grid grid-cols-1 gap-6",
                    isReversed && "lg:order-1 ",
                  )}
                >
                  {group.items.map((item) => (
                    <article
                      key={item.title}
                      className={cn(
                        "bg-grey p-8 border border-line hover:border-gold/30 hover:bg-linear-to-b hover:from-gold/5 hover:to-grey transition-colors",
                        item.title === "School Improvement Review" && "border-gold/40 border-t-4 border-t-gold"
                      )}
                    >
                      <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                        <h3 className="font-display text-xl font-bold text-navy">
                          {item.title}
                        </h3>
                        {/* {item.title === "School Improvement Review" && (
                          <span className="bg-gold/10 text-gold font-display text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1">
                            <StarFourIcon/>
                          </span>
                        )} */}
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                      {item.title === "School Improvement Review" && (
                        <div className="mt-6">
                          <Button href="/school-improvement-review" showArrow className="text-xs">
                            View details & roadmap
                          </Button>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* CTA Band */}
      <section className="bg-navy py-20 text-white border-b-4 border-gold">
        <Container className="text-center max-w-3xl">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-white">
            Start with a Discovery Conversation
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            There is no obligation. It is simply an opportunity to discuss the challenges your school, NGO or organisation is facing and explore whether Inclusion Academy is the right fit.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="hero-primary">
              Book a Discovery Conversation
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
