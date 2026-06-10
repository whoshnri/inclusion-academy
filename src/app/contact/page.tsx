import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, BulletList } from "@/components/ui";
import { contactDiscussionPoints } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a Discovery Conversation",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Start a conversation"
        title="Tell us where inclusion needs to work better."
        lead="We work with organisations to make their processes, systems and structures accomodating for diverse individuals. We will explore your context, current priorities and the practical outcomes your organisation needs."
      />

      <section className="py-25">
        <Container>
          <div className="grid gap-17.5 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="bg-navy p-10 text-white h-fit">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em] text-white">
                A focused first step.
              </h2>
              <p>Use this conversation to discuss:</p>
              <BulletList
                light
                items={[...contactDiscussionPoints]}
                className="mb-0"
              />
            </aside>
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.045em]">
                Book a Discovery Conversation
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
