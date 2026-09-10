"use client";

import { useId, useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  /** Index open on first render. Pass -1 for all closed. */
  defaultOpen?: number;
};

export default function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="flex flex-col">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question} className="border-b border-black/60">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-title text-ink transition-colors duration-200 hover:text-primary"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className={`shrink-0 text-title leading-none transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-8 pr-12"
            >
              <p className="max-w-3xl font-sans text-body font-light text-ink">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
