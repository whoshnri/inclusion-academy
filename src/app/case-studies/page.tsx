import type { Metadata } from "next";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case Studies",
};

const caseStudies = [
  {
    title: "Healthcare Transformation",
    sector: "Healthcare",
    challenge:
      "A large NHS trust was implementing a new electronic patient record system across multiple sites. Staff engagement with the programme sat at 18 percent. Leadership had invested significantly in the technology but had not addressed how the change would land on the people expected to use it. Resistance was high, confidence was low and adoption was at risk.",
    approach:
      "A structured business change programme was developed alongside the technical implementation. This included stakeholder mapping, staff engagement sessions, role-specific training, communication frameworks and a change readiness assessment at each site. The focus shifted from system deployment to people adoption.",
    outcome:
      "Staff engagement rose from 18 percent to 62 percent over the course of the programme. The system went live across all sites with significantly higher adoption rates than comparable implementations. The trust subsequently used the engagement model as the foundation for future change programmes.",
  },
  {
    title: "Public Sector Transformation",
    sector: "Public Sector",
    challenge:
      "A complex public sector transformation programme was struggling to move from strategy to implementation. Stakeholders across multiple directorates had different priorities, communication was inconsistent and staff did not understand how the change affected their roles. The programme had strong governance on paper but weak change leadership in practice.",
    approach:
      "A change management framework was designed to sit alongside programme governance. This included a stakeholder engagement plan, directorate-level change impact assessments, a communication strategy and a series of leadership workshops to build change capability at senior and middle management level.",
    outcome:
      "The programme moved from stalled to active delivery within three months. Stakeholder alignment improved significantly, with directorate leads taking ownership of their change workstreams for the first time. Internal change capability was strengthened so that subsequent phases did not require the same level of external support.",
  },
  {
    title: "Community and Stakeholder Engagement",
    sector: "Community & Stakeholder Engagement",
    challenge:
      "An organisation working with diverse communities was experiencing low participation, declining trust and inconsistent engagement across different groups. Staff knew their communities were not engaged but did not understand why, and leadership had no framework for measuring or improving the situation.",
    approach:
      "A community engagement review was conducted across four community groups. This included stakeholder mapping, interviews with community leaders and beneficiaries, an assessment of current communication channels and an analysis of where trust had broken down. Findings were presented to leadership with a prioritised engagement improvement plan.",
    outcome:
      "The organisation identified three specific barriers to participation that had not previously been recognised. A revised engagement framework was implemented, leading to measurable improvement in community participation within six months. Staff confidence in community engagement increased significantly following practical training delivered as part of the programme.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        title="Proven Outcomes"
        lead="Project summaries demonstrating our implementation methodology and its impact across complex sectors."
      />

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="space-y-24">
            {caseStudies.map((project, idx) => (
              <article
                key={idx}
                className="border border-line bg-grey p-8 md:p-14 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 hover:border-gold/30 transition-all duration-300 relative group"
              >
                {/* Left Panel: Meta & Logo Container */}
                <div className="mb-8 lg:mb-0 border-b border-line pb-8 lg:border-b-0 lg:pb-0 lg:border-r lg:border-line lg:pr-12 flex flex-col justify-between min-h-60">
                  <div>
                    {/* Placeholder space for future client logos */}
                    <div className="mb-6 flex items-center justify-start min-h-[40px] opacity-40">
                      <div className="border-2 border-dashed border-navy/20 text-navy/40 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider select-none">
                        [ {project.sector} Partner Logo ]
                      </div>
                    </div>

                    <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-green">
                      Case Study 0{idx + 1}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-navy leading-tight">
                      {project.title}
                    </h2>
                  </div>

                  <div className="mt-6">
                    <span className="text-xs uppercase font-display text-gold tracking-widest block mb-1">
                      Sector Focus
                    </span>
                    <span className="text-sm font-bold text-navy block">
                      {project.sector}
                    </span>
                  </div>
                </div>

                {/* Right Panel: Challenge, Approach, Outcome Narrative */}
                <div className="space-y-8 lg:pl-4">
                  <div>
                    <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.12em] text-navy mb-2">
                      The Challenge
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.12em] text-navy mb-2">
                      Our Approach
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  <div className="bg-navy p-6 md:p-8 text-white border-l-4 border-gold">
                    <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.12em] text-gold mb-2">
                      The Outcome
                    </h3>
                    <p className="text-sm text-white/95 leading-relaxed mb-0">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <section className="bg-navy py-20 text-white border-t-4 border-gold">
        <Container className="text-center max-w-3xl">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-white">
            Discuss Your Organisation's Needs
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Every transformation project is shaped around your unique context, team capability and outcomes.
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
