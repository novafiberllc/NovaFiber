"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question:
      "How long does couch cleaning take and how long does it take to dry?",
    answer:
      "Cleaning time depends on the size and type of furniture, its condition and whether additional stain or odor treatment is needed. Drying time can also vary depending on the fabric, airflow, room temperature and humidity. Once we know what needs to be cleaned, we can give you a better estimate of both cleaning and drying time.",
  },
  {
    question: "Is professional cleaning safe for kids and pets?",
    answer:
      "We choose cleaning products and methods according to the material and the requirements of each job. Furniture is 100% safe once dry and the room is ventilated. We only use professional solutions that become completely hypoallergenic and safe after drying.",
  },
  {
    question: "What fabrics can you clean?",
    answer:
      "We can clean many common upholstery fabrics, but the appropriate cleaning method depends on the material, construction and condition of the furniture. Before cleaning, we check the upholstery and determine whether our cleaning process is suitable for it. If you're unsure about your furniture, send us a photo and we'll take a look.",
  },
  {
    question: "Can you remove old stains and odors?",
    answer:
      "Many stains and odors can be significantly improved, but the final result depends on the material, type of stain, how long it has been there and whether other cleaning products were previously used. We always begin with a detailed inspection of the affected areas. Once evaluated, we can give you a definitive answer on the possibility of stain removal.",
  },
  {
    question: "How do you clean pet stains and urine odors?",
    answer:
      "Pet stains and urine odors may affect both the visible surface and deeper layers of upholstery or carpet. We inspect the affected area first and use an appropriate stain and odor treatment based on the material and severity of the contamination. When suitable, professional extraction is then used as part of the cleaning process. Deep contamination may require additional treatment.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "NovaFiber is based in Bolingbrook, Illinois and serves customers throughout selected Chicago suburbs. Send us your city or ZIP code and we'll confirm service availability for your location.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleItem(index) {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20"
    >
      <div className="mx-auto w-full">
        <header className="mx-auto max-w-3xl text-center">
          {/* <p className="mb-3 text-sm font-medium tracking-widest text-amber-600">
            FAQ
          </p> */}
          <h2 id="faq-heading" className="text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 leading-relaxed text-gray-600">
            Answers to common questions about professional upholstery, furniture
            and carpet cleaning with NovaFiber.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-4xl border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index + 1}`;
            const panelId = `faq-panel-${index + 1}`;

            return (
              <article key={faq.question} className="border-b border-gray-200">
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left text-lg font-bold text-gray-900 transition-colors hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 sm:py-7 sm:text-xl"
                  >
                    <span className="min-w-0">{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-amber-600"
                    >
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
      </div>
    </section>
  );
}
