"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className="border-t border-line">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left font-display text-[1.05rem] font-bold text-navy"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              {item.question}
              <Plus
                size={22}
                weight="bold"
                className={cn(
                  "shrink-0 transition-transform duration-300 ease-out",
                  isOpen && "rotate-45",
                )}
                aria-hidden
              />
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-9 text-muted">
                  <p className="mb-0">{item.answer}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
