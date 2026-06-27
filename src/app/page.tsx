import Image from "next/image";
import { ArrowRight, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Card } from "@/components/ui";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-svh overflow-hidden">
        <Image
          src="/assets/lagos-leadership-meeting.jpg"
          alt="African leadership team in a strategy meeting"
          fill
          className="object-cover object-[center_20%]"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-navy/92 via-navy/70 to-navy/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-navy/50 via-transparent to-navy/20"
          aria-hidden
        />

        <Container className="relative z-10 flex min-h-svh flex-col justify-end pb-14 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
          <h1 className="mb-6 max-w-4xl text-[clamp(2.5rem,5.5vw,4.8rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white">
            Helping Schools, NGOs and Organisations Solve the Challenges That Hold Them Back
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-white/80 sm:text-xl leading-relaxed">
            Whether you're improving school performance, strengthening community programmes or developing more effective organisations, we help leaders understand what's really happening, identify what matters most and take practical action that delivers lasting results.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button href="/contact" variant="hero-primary">
              Book a Discovery Conversation
            </Button>
            <Button href="/services" variant="hero-outline">
              Explore our services
            </Button>
          </div>
        </Container>
      </section>

      {/* Homepage Section 1: The Challenges We Help Solve */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mt-2 text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy">
              Do any of these sound familiar?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Parents are losing confidence in your school.",
              "Your staff are struggling to support children who learn differently.",
              "Your programmes are not reaching the communities you intended.",
              "Community trust has broken down.",
              "Leadership challenges are affecting organisational performance.",
              "You know something needs to change but you are not sure where to begin.",
            ].map((statement, idx) => (
              <div
                key={idx}
                className="group relative border border-line bg-grey p-8 transition-all duration-300 hover:border-gold/30 hover:bg-linear-to-b hover:from-gold/5 hover:to-grey"
              >
                <span className="font-display text-xs font-extrabold text-gold tracking-wider">
                  STATEMENT {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-display text-base font-semibold leading-relaxed text-navy">
                  “{statement}”
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-10 text-center">
            <p className="font-display text-lg font-bold text-navy max-w-2xl mx-auto">
              Every challenge has an underlying cause. We help you find it and build a practical plan to address it.
            </p>
            <Button href="/contact" className="mt-6" showArrow>
              Start with a Discovery Conversation
            </Button>
          </div>
        </Container>
      </section>

      {/* Homepage Section 2: Areas of Practice */}
      <section className="bg-grey py-20 lg:py-28">
        <Container>
          <div className="mb-14">
            <h2 className="mt-2 text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy">
              Areas of Practice
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card
              variant="gold"
              number="01"
              title="Education Practice"
              description="Helping schools strengthen leadership, improve teaching practice, build parent partnerships and embed inclusive practice so every learner has the opportunity to succeed."
              href="/services#schools"
              linkLabel={
                <span className="inline-flex items-center gap-1.5 text-sm font-bold">
                  Explore Education services <ArrowRight size={16} />
                </span>
              }
            />
            <Card
              number="02"
              title="Social Impact Practice"
              description="Helping NGOs strengthen programme delivery, safeguarding, community engagement and organisational capability so they can increase impact and build greater trust with the communities they serve."
              href="/services#ngos"
              linkLabel={
                <span className="inline-flex items-center gap-1.5 text-sm font-bold">
                  Explore Social Impact services <ArrowRight size={16} />
                </span>
              }
            />
            <Card
              number="03"
              title="Organisation Development Practice"
              description="Helping organisations strengthen leadership, culture and organisational performance by addressing the underlying issues affecting people, teams and results."
              href="/services#organisations"
              linkLabel={
                <span className="inline-flex items-center gap-1.5 text-sm font-bold">
                  Explore Org Development services <ArrowRight size={16} />
                </span>
              }
            />
          </div>
        </Container>
      </section>

      {/* Homepage Section 3: Where We Start */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy leading-tight">
                Where We Start: The School Improvement Review
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                As the flagship launch service of Inclusion Academy, the <strong>School Improvement Review</strong> provides proprietors and headteachers with a structured, independent assessment of school performance. It maps root causes, evaluates operational risks, and delivers a clear 90-day improvement roadmap.
              </p>
              <div className="border-l-4 border-gold pl-5 py-1">
                <p className="text-sm font-bold text-navy uppercase tracking-wider mb-1">
                  Further Services In Development
                </p>
                <p className="text-sm text-muted">
                  Comprehensive review, planning, and delivery services for NGOs and corporate organisations are actively in development to launch subsequently.
                </p>
              </div>
              <div className="pt-2">
                <Button href="/school-improvement-review" showArrow>
                  Learn About the Review
                </Button>
              </div>
            </div>

            <div className="bg-navy p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-8 -translate-y-8" />
              <h3 className="font-display text-2xl text-white mb-6">
                Review Core Pillars
              </h3>
              <ul className="space-y-4 text-white/90">
                {[
                  "Leadership & Governance Quality",
                  "Teaching Consistency & Quality",
                  "Learner Support & Differentiation",
                  "Parent Partnerships & Trust Frameworks",
                  "Safeguarding Standards & Compliance",
                  "Inclusive School Culture & Ethics",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-gold font-display font-extrabold">0{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Homepage Section 4: How We Work */}
      <section className="bg-grey py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mt-2 text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy">
              How We Work
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl mx-auto">
              We guide leaders through a structured, evidence-based progression to turn priorities into visible results.
            </p>
          </div>

          {/* Simple and visual horizontal layout on desktop, vertical on mobile */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-navy/10 -translate-y-1/2 hidden lg:block" />
            <div className="grid gap-8 lg:grid-cols-5 relative z-10">
              {[
                { step: "01", name: "Diagnose", desc: "Understand what is really happening beneath surface symptoms." },
                { step: "02", name: "Prioritise", desc: "Identify the high-impact issues that matter most to performance." },
                { step: "03", name: "Build Capability", desc: "Equip teams with the standards, tools, and confidence required." },
                { step: "04", name: "Support Implementation", desc: "Provide continuous guidance to ensure changes translate to daily practice." },
                { step: "05", name: "Measure Progress", desc: "Establish clear metrics to trace outcomes and assure lasting change." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 border border-line flex flex-col justify-between min-h-[180px] shadow-sm relative group hover:border-gold/40 transition-colors">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-display text-xs font-extrabold text-gold uppercase tracking-wider">Step {item.step}</span>
                      {idx < 4 && (
                        <CaretRight size={20} className="text-navy/20 hidden lg:block group-hover:text-gold transition-colors absolute -right-6 top-1/2 -translate-y-1/2 z-20" />
                      )}
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy mb-2">{item.name}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Homepage Section 5: About Anne-Rose */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative h-[320px] sm:h-[450px] w-full overflow-hidden">
              <Image
                src="/assets/about-founder.png"
                alt="Anne-Rose Obidi, founder of Inclusion Academy"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 bg-navy p-6 text-white max-w-[280px]">
                <div className="w-10 h-1 bg-gold mb-3" />
                <span className="font-display text-sm font-bold uppercase tracking-wider text-gold block mb-1">
                  Anne-Rose Obidi
                </span>
                <span className="text-xs text-white/80 block">
                  Founder & Principal Consultant
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy leading-tight">
                Grounded in 16 Years of Leadership
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Anne-Rose Obidi founded Inclusion Academy after 16 years leading organisational change across the National Health Service, government and the private sector. She has seen what happens when organisations commit to improvement without the right diagnosis, frameworks or implementation support.
              </p>
              <p className="text-base text-muted">
                Inclusion Academy exists to give organisations the practical tools, clear standards, and execution support required to close the gap between strategic intent and everyday organizational reality.
              </p>
              <div className="pt-2">
                <Button href="/about" variant="secondary" showArrow>
                  Read our story
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
