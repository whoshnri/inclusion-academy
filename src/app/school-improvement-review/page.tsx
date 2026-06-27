import type { Metadata } from "next";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "School Improvement Review",
};

export default function SchoolImprovementReviewPage() {
  return (
    <main>
      <PageHero
        title="School Improvement Review"
        lead="An independent, structured assessment of performance, culture and systems to help school leaders move from diagnosis to action."
      />

      {/* Opening Section */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-start">
            <div className="space-y-6">
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy leading-tight">
                Most school leaders know something is not working. Fewer know exactly where to begin.
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                The School Improvement Review gives you a clear picture of where your school is today, what is driving the challenges you are experiencing and where to focus your efforts first.
              </p>
            </div>

            <div className="bg-grey p-8 md:p-12 border border-line space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-4">What It Is</h3>
                <p className="text-muted leading-relaxed mb-6">
                  A structured ten-working-day independent review of your school's core areas:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Leadership",
                    "Teaching practice",
                    "Learner support",
                    "Parent partnerships",
                    "Safeguarding",
                    "School culture",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-navy">
                      <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-line pt-8">
                <h3 className="font-display text-xl font-bold text-navy mb-3">Who It Is For</h3>
                <p className="text-muted leading-relaxed mb-0">
                  Private school proprietors and headteachers seeking an independent assessment of school performance together with a practical improvement plan.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What You Receive Section */}
      <section className="py-20 lg:py-28 bg-grey border-y border-line">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mt-2 text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy">
              What You Receive
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl mx-auto">
              A comprehensive set of diagnostic reports and actionable roadmaps to guide your team forward.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { title: "Executive Summary", desc: "A high-level synthesis of key findings, strengths, risks, and urgent concerns." },
              { title: "Performance Scorecard", desc: "A structured, objective matrix grading each of the six core school domains." },
              { title: "Priority Action Plan", desc: "A focused list of tasks addressing immediate compliance or cultural issues." },
              { title: "Leadership Presentation", desc: "An in-person or virtual presentation to walk through the review with stakeholders." },
              { title: "90-Day Roadmap", desc: "A month-by-month framework designed to guide implementation and measure results." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 border border-line flex flex-col justify-between shadow-sm hover:border-gold/30 transition-colors">
                <div>
                  <span className="font-display text-2xl font-extrabold text-gold block mb-4">0{idx + 1}</span>
                  <h3 className="font-display text-base font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What You Will Know Section */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="bg-navy p-8 md:p-12 text-white border-t-4 border-gold">
              <h3 className="font-display text-2xl text-white mb-6">What You Will Know at the End</h3>
              <ul className="space-y-4">
                {[
                  "What is working well",
                  "Where the greatest risks sit",
                  "Why problems keep recurring",
                  "Which issues need immediate attention",
                  "Where to invest your effort first",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold" aria-hidden>
                      <Check size={12} weight="bold" />
                    </span>
                    <span className="text-white/95 text-base leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy leading-tight">
                Aligning your team with factual clarity.
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                By the end of the ten-day review, you will bypass assumptions. You will possess direct evidence, verified staff feedback, and parent perspective data, allowing your leadership to execute from a place of certainty.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-grey border-t border-line">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mt-2 text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy">
              How It Works
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl mx-auto">
              Our structured process takes place over two consecutive weeks to minimise disruption while maximizing depth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Week One */}
            <div className="bg-white p-8 md:p-10 border border-line shadow-sm relative">
              <span className="absolute top-4 right-6 font-display text-[5rem] font-extrabold text-navy/5 leading-none select-none">W1</span>
              <span className="font-display text-xs font-bold uppercase tracking-[0.12em] text-gold">WEEK ONE</span>
              <h3 className="font-display text-xl font-bold text-navy mt-2 mb-6">Fieldwork & Engagement</h3>
              <ul className="space-y-4">
                {[
                  "Leadership interviews to map goals and concerns.",
                  "Staff conversations to evaluate morale, alignment and workload.",
                  "Comprehensive document review (policies, data and frameworks).",
                  "Direct classroom observation to evaluate teaching practice.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="font-bold text-navy shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Week Two */}
            <div className="bg-white p-8 md:p-10 border border-line shadow-sm relative">
              <span className="absolute top-4 right-6 font-display text-[5rem] font-extrabold text-navy/5 leading-none select-none">W2</span>
              <span className="font-display text-xs font-bold uppercase tracking-[0.12em] text-gold">WEEK TWO</span>
              <h3 className="font-display text-xl font-bold text-navy mt-2 mb-6">Analysis & Synthesis</h3>
              <ul className="space-y-4">
                {[
                  "In-depth analysis of qualitative feedback and observations.",
                  "Report writing, grading scorecards, and timeline compilation.",
                  "Formal leadership presentation to deliver findings and roadmap.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="font-bold text-navy shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Making Change Happen Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-line">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mt-2 text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-navy">
              Making Change Happen
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl mx-auto">
              Our roadmap breaks down implementation into manageable, sequential horizons.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { duration: "First 30 Days", header: "Establish Focus", desc: "Immediate actions for the leadership team based on priority findings." },
              { duration: "Next 60 Days", header: "Build Traction", desc: "Changes for staff and leadership to begin implementing across the school." },
              { duration: "Next 90 Days", header: "Embed & Sustain", desc: "Embed changes, monitor progress and review outcomes." },
            ].map((item, idx) => (
              <div key={idx} className="border border-line bg-grey p-8 flex flex-col justify-between shadow-sm relative group hover:border-gold/30 transition-colors">
                <div>
                  <span className="font-display text-4xl font-extrabold text-gold leading-none block mb-4">{item.duration}</span>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">{item.header}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-20 text-white border-t-4 border-gold">
        <Container className="text-center max-w-3xl">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.045em] text-white">
            Take the First Step
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Discuss your school's specific context and priorities with our team during a discovery conversation.
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
