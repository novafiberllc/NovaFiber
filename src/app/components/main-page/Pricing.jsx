import ResponsiveQuoteLink from "@/app/components/shared/ResponsiveQuoteLink";
import { contactLinks } from "@/lib/business";

const pricingGroups = [
  {
    title: "Couch & Sofa Cleaning",
    items: [
      { name: "2 Seats", price: "$109" },
      { name: "3 Seats", price: "$129" },
      { name: "4 Seats", price: "$139" },
      { name: "5 Seats", price: "$149" },
      { name: "6 Seats", price: "$159" },
    ],
    note: "Send us photos for a more accurate quote.",
  },
  {
    title: "Mattress Cleaning",
    items: [
      { name: "King", price: "$139" },
      { name: "Queen", price: "$129" },
      { name: "Full", price: "$119" },
      { name: "Twin XL", price: "$109" },
      { name: "Twin", price: "$99" },
    ],
    note: "Starting prices may vary depending on mattress condition, stains and additional treatment required.",
  },
  {
    title: "Other Upholstery",
    items: [
      { name: "Loveseat", price: "$99" },
      { name: "Armchair", price: "$39" },
      { name: "Ottoman", price: "$25" },
      { name: "Chair / Barstool", price: "$5" },
    ],
    note: "Pricing may vary depending on size, material and condition.",
  },
];

function PriceCard({ group }) {
  return (
    <article className="flex h-full flex-col rounded-4xl bg-white px-6 py-7 shadow-sm sm:px-8">
      <h3 className="text-2xl font-bold">{group.title}</h3>

      <dl className="mt-5">
        {group.items.map((item) => (
          <div
            key={item.name}
            className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-3 first:pt-0"
          >
            <dt className="min-w-0 text-gray-700">{item.name}</dt>
            <dd className="shrink-0 font-bold text-gray-900">
              <span className="text-sm font-normal text-gray-500">
                {"from "}
              </span>
              {item.price}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-auto pt-5 text-sm leading-relaxed text-gray-500">
        {group.note}
      </p>
    </article>
  );
}

function CarpetPriceCard() {
  return (
    <article className="flex h-full flex-col rounded-4xl bg-white px-6 py-7 shadow-sm sm:px-8">
      <h3 className="text-2xl font-bold">Carpet Cleaning</h3>

      <p className="mt-7 text-gray-500">
        <span className="text-lg">{"from "}</span>
        <span className="text-4xl font-bold text-gray-900">$50</span>
        <span className="text-lg text-gray-700">{" per room"}</span>
      </p>

      <p className="mt-6 leading-relaxed text-gray-600">
        Pricing depends on room size and soil level. Additional stain or odor
        treatment may affect the final price.
      </p>
    </article>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20"
    >
      <div className="mx-auto w-full">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-amber-600">
            PRICING
          </p>
          <h2 id="pricing-heading" className="text-3xl font-bold sm:text-4xl">
            Simple, Transparent Starting Prices
          </h2>
          <p className="mt-5 leading-relaxed text-gray-600">
            Get a quick idea of what your cleaning may cost. Prices below are
            starting estimates and may vary depending on the size, material,
            condition, stains and additional treatment required.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
          {pricingGroups.map((group) => (
            <PriceCard key={group.title} group={group} />
          ))}
          <CarpetPriceCard />
        </div>

        <aside
          aria-labelledby="photo-quote-heading"
          className="mt-10 rounded-4xl border border-amber-200 bg-white px-6 py-8 shadow-sm sm:px-8 md:px-10 md:py-10"
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-amber-600">
            NEED A MORE ACCURATE PRICE?
          </p>
          <h3 id="photo-quote-heading" className="text-3xl font-bold">
            Send Us Photos for a Quote
          </h3>
          <p className="mt-5 max-w-4xl leading-relaxed text-gray-600">
            Every cleaning job is different. Send us a few photos of what you
            need cleaned, tell us your location and describe any stains or
            odors. We&apos;ll review the details and provide a more accurate
            price before scheduling.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <ResponsiveQuoteLink className="rounded bg-amber-600 px-4 py-3 text-center font-bold text-white hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600" />
            <a
              href={contactLinks.telephone}
              className="inline-flex min-h-11 items-center justify-center rounded border border-amber-600 px-4 py-3 text-center font-bold text-amber-700 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
            >
              Call Us
            </a>
          </div>

          <div className="mt-7 text-sm leading-relaxed text-gray-600">
            <p className="font-medium text-gray-700">
              For the best estimate, include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>a photo of the full item</li>
              <li>close-up photos of stains or problem areas</li>
              <li>your city or ZIP code</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
