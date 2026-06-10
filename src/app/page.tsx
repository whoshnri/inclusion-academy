import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { BulletList, Card } from "@/components/ui";

export default function HomePage() {
  return (
    <main>
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
          <h1 className="mb-6 max-w-4xl text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-white">
            Inclusion that moves from intention to action.
          </h1>
          <p className="mb-10 max-w-xl text-lg text-white/80 sm:text-xl">
            Building Inclusive Organisations. Strengthening Communities.
            Improving Outcomes.
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

      <section className="bg-white py-10">
        <Container>
          <div className="grid md:grid-cols-3">
            {[
              {
                title: "Built for African organisations",
                text: "Work shaped by varied organisational and community contexts.",
              },
              {
                title: "Built with people",
                text: "Staff, leaders and communities contribute to the process.",
              },
              {
                title: "Focused on implementation",
                text: "Clear priorities, accountable action and measurable progress.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-navy/24 px-0 py-16 md:px-16 md:first:border-l"
              >
                <strong className="mb-1 block text-xl text-navy">
                  {item.title}
                </strong>
                <span className="text-base text-muted">{item.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="grid items-center gap-[70px] lg:grid-cols-2">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em]">
                Strong intentions need systems that work.
              </h2>
            </div>
            <div className="text-lg">
              <p>Inclusion is not created by policies alone.</p>
              <p>
                Many schools, NGOs and organisations have strong intentions,
                committed leaders and ambitious strategies. The challenge often
                sits in implementation. Communication breaks down. Stakeholder
                trust weakens. Staff confidence varies. Good policies fail to
                translate into everyday practice.
              </p>
              <p className="mb-0">
                Inclusion Academy helps organisations move from intention to
                implementation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-grey py-[100px]">
        <Container>
          <div className="mb-11 flex flex-col items-start justify-between gap-6">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em]">
                Capability built around your context.
              </h2>
            </div>
            <p className="mb-0 text-lg">
              We work with schools, NGOs and organisations across Africa to
              strengthen leadership, improve engagement, build inclusive
              cultures and create systems that deliver measurable outcomes.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card
              number="01"
              title="For Schools"
              description="Strengthen inclusive practice, improve parent engagement, support diverse learners and build cultures where every child can thrive."
              href="/services#schools"
              linkLabel={
                <>
                  Explore school services{" "}
                  <ArrowRight size={16} weight="bold" className="inline" />
                </>
              }
            />
            <Card
              number="02"
              title="For NGOs"
              description="Embed inclusion throughout programmes, governance, community engagement and service delivery."
              href="/services#ngos"
              linkLabel={
                <>
                  Explore NGO services{" "}
                  <ArrowRight size={16} weight="bold" className="inline" />
                </>
              }
            />
            <Card
              number="03"
              title="For Organisations"
              description="Create inclusive workplaces, strengthen culture, improve employee experience and build leadership capability."
              href="/services#organisations"
              linkLabel={
                <>
                  Explore services{" "}
                  <ArrowRight size={16} weight="bold" className="inline" />
                </>
              }
            />
          </div>
        </Container>
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="grid items-center gap-[70px] lg:grid-cols-2">
            <div className="min-h-125 bg-navy p-7 md:p-10 text-white">
              <h3 className="max-w-[420px] font-display text-[1.65rem] text-white">
                We bring the right people into the room to understand what is
                happening and decide what changes next.
              </h3>
              <BulletList
                light
                items={[
                  "Leadership perspective",
                  "Staff experience",
                  "Stakeholder voice",
                  "Evidence and organisational data",
                ]}
              />
            </div>
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em]">
                Practical change, grounded in evidence.
              </h2>
              <p className="mt-3 text-lg">
                We believe sustainable inclusion happens when organisations
                focus on systems, behaviours, culture and accountability.
              </p>
              <p className="text-lg">
                Our work combines inclusion expertise, organisational
                development, stakeholder engagement and change management to
                create practical solutions that work in real-world environments.
              </p>
              <p className="my-8 border-l-4 border-gold py-1 pl-5 font-display text-[1.15rem] font-bold text-navy">
                The people closest to the work should help shape what changes.
              </p>
              <BulletList
                items={[
                  "Understand the current position",
                  "Identify priorities and risks",
                  "Build leadership and team capability",
                  "Create a practical route to improvement",
                ]}
              />
              <Button href="/about" variant="secondary">
                How we work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-[100px] text-white">
        <Container>
          <div className="grid items-center gap-[70px] lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em] text-white">
                Start with an Inclusion Health Check
              </h2>
              <p className="max-w-[730px] text-[clamp(1.05rem,2vw,1.28rem)] text-white">
                A structured review of your organisation&apos;s current
                strengths, gaps and opportunities, together with a practical
                action plan to support improvement.
              </p>
              <Button href="/contact" variant="light">
                Book a Discovery Conversation
              </Button>
            </div>
            <div className="bg-green p-5 text-white md:p-10">
              <h3 className="text-white">Every engagement includes</h3>
              <div className="mt-4 grid grid-cols-2 gap-px">
                {[
                  ["01", "Leadership conversations"],
                  ["02", "Stakeholder feedback"],
                  ["03", "Gap and risk analysis"],
                  ["04", "Implementation roadmap"],
                ].map(([number, label]) => (
                  <div key={number} className="bg-white/8 p-3 md:p-6">
                    <strong className="mb-2 block font-display text-3xl text-gold">
                      {number}
                    </strong>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
