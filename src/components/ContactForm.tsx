"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { Button } from "@/components/Button";

const sectorOptions = [
  "Education Practice (Schools & Colleges)",
  "Social Impact Practice (NGOs & Charities)",
  "Organisation Development Practice (Businesses & Employers)",
  "Other / General Enquiry",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-start gap-3 rounded-none border border-green/30 bg-grey p-6">
        <CheckCircle
          size={28}
          weight="fill"
          className="shrink-0 text-green animate-pulse"
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
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          Full name
          <input
            type="text"
            required
            className="border border-navy/35 px-4 py-3 font-normal focus:border-green focus:outline-none transition-colors"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          Work email
          <input
            type="email"
            required
            className="border border-navy/35 px-4 py-3 font-normal focus:border-green focus:outline-none transition-colors"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          Organisation
          <input
            type="text"
            required
            className="border border-navy/35 px-4 py-3 font-normal focus:border-green focus:outline-none transition-colors"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          Sector
          <select
            required
            className="border border-navy/35 w-full px-4 py-3 font-normal bg-white focus:border-green focus:outline-none transition-colors"
          >
            <option value="">Select a practice area</option>
            {sectorOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          WhatsApp number (Optional)
          <input
            type="tel"
            placeholder="e.g. +234..."
            className="border border-navy/35 px-4 py-3 font-normal focus:border-green focus:outline-none transition-colors"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          LinkedIn profile URL (Optional)
          <input
            type="url"
            placeholder="https://linkedin.com/in/..."
            className="border border-navy/35 px-4 py-3 font-normal focus:border-green focus:outline-none transition-colors"
          />
        </label>
      </div>

      <label className="grid gap-1.5 text-sm font-bold text-navy">
        What would you like to discuss?
        <textarea
          required
          className="min-h-[140px] resize-y border border-navy/35 px-4 py-3 font-normal focus:border-green focus:outline-none transition-colors"
        />
      </label>

      <div className="pt-2">
        <Button type="submit" className="w-full sm:w-auto">
          Book a Discovery Conversation
        </Button>
      </div>
    </form>
  );
}
