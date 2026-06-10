import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Inclusion Academy"
        title="We help organisations turn inclusion commitments into meaningful action."
        lead="Across education, healthcare, community services, charities and workplaces, we help leaders bridge the implementation gap."
      />

      <section className="py-[100px]">
        <Container>
          <div className="grid items-center gap-4">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em]">
                Leadership intent deserves practical follow-through.
              </h2>
            </div>
            <div>
              <p className="text-2xl">
                Many organisations recognise the importance of inclusion. Yet
                implementation often remains inconsistent. Leaders face competing
                priorities, staff require support, stakeholders feel unheard and
                systems struggle to deliver the outcomes people expect.
              </p>
              <p className="mb-0 text-2xl">
                Our work helps teams build the systems, confidence and
                accountability needed to turn inclusion into everyday practice.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-grey py-[100px]">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card
              number="Our vision"
              title="Africa's leading institution for inclusive practice"
              description="To become Africa's leading institution for inclusive practice, organisational development and community engagement."
            />
            <Card
              number="Our mission"
              title="Better systems, cultures and services"
              description="To help schools, NGOs and organisations build inclusive systems, cultures and services that improve outcomes for the people they serve."
            />
            <Card
              number="Our belief"
              title="Practical. Measurable. Sustainable."
              description="We believe inclusion should be practical, measurable and sustainable."
            />
          </div>
        </Container>
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="grid items-center gap-[70px] lg:grid-cols-2">
            <figure className="m-0">
              <div className="relative h-[380px] w-full overflow-hidden sm:h-[540px]">
                <Image
                  src="/assets/inclusive-team-meeting.jpg"
                  alt="A professional team, including a wheelchair user, working together in a meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="py-2.5 text-xs text-muted">
                <strong className="text-navy">
                  Everyone has a role in the room.
                </strong>{" "}
                People contribute, lead and make decisions.
              </figcaption>
            </figure>
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em]">
                We focus on implementation.
              </h2>
              <p>
                Many providers focus on awareness. Many providers focus on
                compliance. Many providers focus on training.
              </p>
              <p className="mb-8">
                Our work helps organisations understand where they are today,
                identify what needs to change and develop practical approaches
                that create measurable improvement.
              </p>
              <Button href="/contact">Discuss your priorities</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-[100px] text-white">
        <Container>
          <div className="mb-11 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em] text-white">
                Connected disciplines for lasting change.
              </h2>
            </div>
            <p className="mb-0 max-w-[560px] text-white/90">
              Our work joins inclusion knowledge with the organisational
              capability needed to put it into practice.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Inclusive Education",
                description:
                  "Leadership, culture, parent engagement and support for diverse learners.",
              },
              {
                title: "Organisational Culture and Inclusion",
                description:
                  "Everyday behaviours, systems and employee experience.",
              },
              {
                title: "Disability and Neurodiversity Inclusion",
                description:
                  "Practical adjustments, accessible systems and confident teams.",
              },
              {
                title: "Community and Stakeholder Engagement",
                description:
                  "Trust, participation and stronger relationships with the people you serve.",
              },
              {
                title: "Leadership Development",
                description:
                  "Tools and capability for leaders responsible for implementation.",
              },
              {
                title: "Change and Organisational Transformation",
                description:
                  "Structured support to move priorities into sustained action.",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                variant="gold"
                number={String(index + 1).padStart(2, "0")}
                title={item.title}
                description={item.description}
                className="min-h-[205px] [&_h3]:text-navy [&_p]:text-muted"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="mb-11">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em]">
              Organisations serving people and communities.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card
              variant="gold"
              number="01"
              title="Education"
              description="Schools, colleges and universities."
            />
            <Card
              variant="gold"
              number="02"
              title="Community and public services"
              description="Charities, NGOs, healthcare providers, community organisations and public sector bodies."
            />
            <Card
              variant="gold"
              number="03"
              title="Workplaces"
              description="Employers and business leaders."
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
