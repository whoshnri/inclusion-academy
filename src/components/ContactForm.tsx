"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { Button } from "@/components/Button";

const organisationTypes = [
  "School, college or university",
  "NGO or charity",
  "Healthcare provider",
  "Community organisation",
  "Public sector body",
  "Employer or business",
  "Other",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-start gap-3 rounded-sm border border-green/30 bg-grey p-6">
        <CheckCircle
          size={28}
          weight="fill"
          className="shrink-0 text-green"
          aria-hidden
        />
        <div>
          <h3 className="mb-2 font-display text-xl text-navy">
            Thank you for your enquiry
          </h3>
          <p className="mb-0 text-muted">
            We have received your message. A member of the Inclusion Academy
            team will be in touch shortly. Connect this form to your preferred
            CRM or email service before launch.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          First name
          <input
            type="text"
            required
            className="border border-navy/35 px-3 py-3 font-normal"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          Last name
          <input
            type="text"
            required
            className="border border-navy/35 px-3 py-3 font-normal"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-bold text-navy">
        Work email
        <input
          type="email"
          required
          className="border border-navy/35 px-3 py-3 font-normal"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-bold text-navy">
        Organisation
        <input
          type="text"
          required
          className="border border-navy/35 px-3 py-3 font-normal"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-bold text-navy">
        Organisation type
        <select required className="border border-navy/35 px-3 py-3 font-normal">
          <option value="">Select one</option>
          {organisationTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-bold text-navy">
        What would you like to discuss?
        <textarea
          required
          className="min-h-[140px] resize-y border border-navy/35 px-3 py-3 font-normal"
        />
      </label>
      <Button type="submit">Book a Discovery Conversation</Button>
    </form>
  );
}
