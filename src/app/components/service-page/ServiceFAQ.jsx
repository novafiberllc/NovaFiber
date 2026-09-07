"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { couchSofaFaqs } from "@/lib/couch-sofa-cleaning";

export default function ServiceFAQ({
  faqs = couchSofaFaqs,
  idPrefix = "couch-faq",
}) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mx-auto mt-10 max-w-4xl border-t border-gray-300">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${idPrefix}-trigger-${index + 1}`;
        const panelId = `${idPrefix}-panel-${index + 1}`;

        return (
          <article key={faq.question} className="border-b border-gray-300">
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left text-lg font-bold text-gray-900 transition-colors hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 sm:py-7 sm:text-xl"
              >
                <span className="min-w-0">{faq.question}</span>
                <span aria-hidden="true" className="shrink-0 text-amber-600">
                  {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 leading-relaxed text-gray-600 sm:pb-7 sm:pr-14">
                  {faq.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
