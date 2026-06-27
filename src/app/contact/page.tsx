import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, BulletList } from "@/components/ui";
import { contactDiscussionPoints } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Let's Talk"
        lead="If you are looking for practical support to strengthen your school, NGO or organisation, start with a Discovery Conversation. There is no obligation."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <aside className="bg-navy p-10 text-white h-fit border-t-4 border-gold">
              <h2 className="font-display text-2xl text-white mb-4">
                A focused first step.
              </h2>
              <p className="text-white/80 text-sm">
                Use this conversation to discuss:
              </p>
              <BulletList
                light
                items={[...contactDiscussionPoints]}
                className="mb-0"
              />
            </aside>
            <div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-navy mb-8">
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
