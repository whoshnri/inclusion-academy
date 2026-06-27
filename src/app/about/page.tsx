import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="We close the gap between intention and real-world results."
        lead="Combining organisational development, inclusion expertise and deep stakeholder engagement to help leaders build capability that lasts."
      />

      {/* Why Inclusion Academy Exists & How We Think */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mt-2 text-[clamp(1.8rem,3.5vw,2.75rem)] tracking-[-0.04em] text-navy">
                Why Inclusion Academy Exists
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Many organisations genuinely want to perform better and serve people more effectively. Few have access to practical support that combines organisational development, inclusion expertise and stakeholder engagement in one place. Inclusion Academy was established to close that gap.
              </p>
            </div>

            <div>
              <h2 className="mt-2 text-[clamp(1.8rem,3.5vw,2.75rem)] tracking-[-0.04em] text-navy">
                How We Think
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                We begin with the problem the organisation recognises. We then look underneath it to understand the leadership, systems and practice driving that problem. Only then do we recommend solutions.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed">
                Every engagement we deliver strengthens our understanding of what works. Over time that knowledge shapes better tools, stronger frameworks and more effective support for every organisation we work with.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Biography */}
      <section className="bg-grey py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="relative h-[380px] w-full overflow-hidden sm:h-[500px]">
                <Image
                  src="/assets/about-founder.png"
                  alt="Anne-Rose Obidi, founder of Inclusion Academy"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <figcaption className="mt-4 text-xs text-muted border-b border-navy/20 pb-3">
                <strong className="text-navy">Anne-Rose Obidi</strong> — Founder & principal consultant of Inclusion Academy.
              </figcaption>
            </div>

            <div className="space-y-6">
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy leading-tight">
                Anne-Rose Obidi: Founder
              </h2>

              <div className="prose prose-navy max-w-none text-muted space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  Anne-Rose Obidi has spent over 15 years helping complex organisations navigate change. Her work has spanned the NHS, the Ministry of Justice, financial services and the private sector, with a consistent focus on one question: how does change actually land on the people it is supposed to serve?
                </p>

                <p>
                  She has led some of the most demanding programmes in her field. At an NHS Foundation Trust in the UK, she led the business change workstream for a trust-wide electronic patient record implementation, taking staff engagement from 18 percent to 62 percent through a structured, people-centred change programme. At the Ministry of Justice she worked on large-scale organisational transformation, building stakeholder engagement frameworks and change capability across multiple directorates. Across Oracle Cloud ERP implementations and other complex technology-led programmes, she has consistently delivered the thing that technical programmes most often underestimate: the human side of change.
                </p>

                <p>
                  Her expertise sits at the intersection of three disciplines that most consultancies keep separate: organisational development, inclusion and stakeholder and community engagement. She understands how systems are designed on paper and how they fail in practice. She knows how to diagnose what is actually holding an organisation back, not just what leaders think the problem is. And she knows how to build the capability organisations need to make change stick.
                </p>

                <p>
                  Anne-Rose holds an MBA from Wrexham University, where her research explored the relationship between personality traits and job satisfaction among neurodivergent employees. She is a Chartered Fellow of the CIPD. She is also the founder of The African Parent, an organisation that helps families navigate the education system and challenges institutions to engage more effectively with the communities they serve.
                </p>

                <p className="border-t border-navy/10 pt-6 font-semibold text-navy">
                  Inclusion Academy was founded because Anne-Rose saw the same pattern repeated across every sector she worked in: organisations committed to doing better for the people they serve, but without the practical frameworks, honest diagnosis or implementation support to make that commitment real. Inclusion Academy exists to close that gap.
                </p>
              </div>

              <div className="pt-6">
                <Button href="/contact">Book a Discovery Conversation</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
