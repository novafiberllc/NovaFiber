import Link from "next/link";
import ServiceFAQ from "@/app/components/service-page/ServiceFAQ";
import ServiceImage from "@/app/components/service-page/ServiceImage";
import ActionIcon from "@/app/components/shared/ActionIcon";
import Hero from "@/app/components/shared/Hero";
import ResponsiveQuoteLink from "@/app/components/shared/ResponsiveQuoteLink";
import { businessInfo, contactLinks } from "@/lib/business";
import { carpetFaqs } from "@/lib/carpet-cleaning";
import { serviceAreas } from "@/lib/service-area";

const canonicalUrl = `${businessInfo.siteUrl}/services/carpet-cleaning`;
const metadataDescription =
  "Professional carpet cleaning in Bolingbrook, IL for built-up soil, everyday stains and compatible odors. Send photos to NovaFiber for a quote.";
const socialImage = `${businessInfo.siteUrl}/image/services/carpet-cleaning.jpg`;

export const metadata = {
  title: "Carpet Cleaning in Bolingbrook, IL | NovaFiber",
  description: metadataDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Carpet Cleaning in Bolingbrook, IL | NovaFiber",
    description: metadataDescription,
    url: canonicalUrl,
    type: "website",
    images: [
      {
        url: socialImage,
        alt: "NovaFiber residential carpet cleaning service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Cleaning in Bolingbrook, IL | NovaFiber",
    description: metadataDescription,
    images: [socialImage],
  },
};

const areaServed = serviceAreas.map((name) => ({
  "@type": "City",
  name,
}));

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": businessInfo.businessId,
      name: businessInfo.name,
      url: businessInfo.siteUrl,
      telephone: businessInfo.phone,
      email: businessInfo.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: businessInfo.location.city,
        addressRegion: businessInfo.location.region,
        postalCode: businessInfo.location.postalCode,
        addressCountry: businessInfo.location.country,
      },
      areaServed,
      sameAs: Object.values(businessInfo.socialProfiles),
    },
    {
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: "Carpet Cleaning",
      serviceType: "Professional carpet cleaning",
      url: canonicalUrl,
      description: metadataDescription,
      provider: { "@id": businessInfo.businessId },
      areaServed,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${businessInfo.siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${businessInfo.siteUrl}/#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Carpet Cleaning",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: carpetFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const carpetQuoteMessage = `Hi NovaFiber! I'd like a carpet cleaning quote.

City / ZIP:
Number of rooms:
Approximate room sizes:
Carpeted areas to be cleaned:
Main stains or problem areas:
Any odors:

I'll attach photos below.`;

const useCases = [
  "Built-up dirt and soil",
  "High-traffic areas",
  "Food and drink spots",
  "Pet-related stains",
  "Odors",
  "General carpet refresh",
];

const processSteps = [
  {
    title: "Inspection",
    description:
      "We inspect the carpet, affected rooms and problem areas before cleaning.",
  },
  {
    title: "Carpet Fiber & Condition Check",
    description:
      "The fiber type, color stability, construction and overall condition are evaluated to determine an appropriate cleaning method.",
  },
  {
    title: "Pre-Treatment",
    description:
      "Compatible stains and heavily soiled areas may receive an appropriate pre-treatment before the main cleaning process.",
  },
  {
    title: "Professional Cleaning & Extraction",
    description:
      "Professional carpet cleaning equipment is used to clean the fibers and extract loosened soil and cleaning solution.",
  },
  {
    title: "Stain & Odor Treatment",
    description:
      "Additional treatment may be applied to compatible stains or odor-affected areas when required.",
  },
  {
    title: "Final Inspection & Drying Guidance",
    description:
      "We review the cleaned areas, explain any remaining limitations and provide appropriate drying guidance.",
  },
];

const priceFactors = [
  "Number of rooms",
  "Room size",
  "Carpet fiber and construction",
  "Overall soil level",
  "Type and age of stains",
  "Odor or additional treatment",
];

const primaryButton =
  "rounded bg-amber-700 px-4 py-3 text-center font-bold text-white hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700";
const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded border border-amber-700 px-4 py-3 text-center font-bold text-amber-700 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700";
const whiteSectionCardStyle = "border border-gray-200 bg-[#F7F7F7] shadow-sm";

export default function CarpetCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section className="w-full bg-white pb-10 desktop:pb-20">
        <Hero
          variant="service"
          eyebrow="CARPET CLEANING"
          title="Professional Carpet Cleaning in Bolingbrook, IL"
          description="Professional residential carpet cleaning in Bolingbrook and surrounding Chicago suburbs. We help address built-up soil, everyday dirt, high-traffic areas, food and drink spots and compatible stains or odors using professional cleaning and extraction equipment after inspecting the carpet material and condition."
          primaryAction={{
            type: "responsiveQuote",
            message: carpetQuoteMessage,
          }}
          secondaryAction={{
            label: "Call Us",
            href: contactLinks.telephone,
            actionType: "phone",
            ariaLabel: "Call NovaFiber",
          }}
          backgroundImage="/image/services/carpet-cleaning.jpg"
          backgroundPositionClassName="bg-left md:bg-center"
          overlay="service"
          breadcrumb={
            <nav aria-label="Breadcrumb" className="text-sm text-white/90">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="inline-flex min-h-11 items-center hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">&gt;</li>
                <li>
                  <Link
                    href="/#services"
                    className="inline-flex min-h-11 items-center hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">&gt;</li>
                <li aria-current="page" className="py-3 text-white">
                  Carpet Cleaning
                </li>
              </ol>
            </nav>
          }
          trustItems={[
            `★ ${businessInfo.googleRating} Google Rating (${businessInfo.googleReviewCount} reviews)`,
            businessInfo.location.label,
            "Professional Equipment",
            "Stain & Odor Treatment",
          ]}
        />
      </section>

      <section className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Is This Service Right for You?
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Carpet cleaning may be suitable for residential carpets affected
              by routine use, visible soil, spills, stains or odors. We inspect
              the carpet first to determine whether our cleaning process is
              appropriate for its material and condition.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {useCases.map((item) => (
              <li
                key={item}
                className={`rounded-4xl px-6 py-5 font-medium ${whiteSectionCardStyle}`}
              >
                <span aria-hidden="true" className="mr-3 text-amber-700">
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <div className="mx-auto w-full">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-amber-700">
              OUR PROCESS
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              How Our Carpet Cleaning Process Works
            </h2>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 desktop:grid-cols-3">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-4xl border border-gray-200 bg-white px-6 py-7 shadow-sm sm:px-8"
              >
                <span className="text-sm font-bold text-amber-700">
                  STEP {index + 1}
                </span>
                <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <div className="mx-auto w-full">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              See the Difference
            </h2>
            <p className="mt-5 text-gray-600">
              Examples of professional carpet cleaning results.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
            <ServiceImage
              src="/image/services/carpet/result_1.jpg"
              alt="Carpet before professional cleaning"
              placeholderLabel="Temporary before-cleaning carpet image; final result photo coming soon"
              badge="BEFORE"
            />
            <ServiceImage
              src="/image/services/carpet/result_2.jpg"
              alt="Carpet after professional cleaning"
              placeholderLabel="Temporary after-cleaning carpet image; final result photo coming soon"
              badge="AFTER"
              badgePosition="right"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <article className="mx-auto max-w-5xl rounded-4xl border border-gray-200 bg-white px-6 py-7 shadow-sm sm:px-8">
          <p className="mb-3 text-sm font-medium tracking-widest text-amber-700">
            STARTING PRICE
          </p>

          <div className="grid gap-7 md:grid-cols-2 md:gap-0">
            <div className="md:pr-8">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Carpet Cleaning Starting Price
              </h2>
              <p className="mt-7 text-gray-500">
                <span className="text-lg">{"from "}</span>
                <span className="text-4xl font-bold text-gray-900">$50</span>
                <span className="text-lg text-gray-700">{" per room"}</span>
              </p>
              <p className="mt-6 leading-relaxed text-gray-600">
                $50 per room is a starting price. The final price depends on
                room size and soil level, and stains, odors or additional
                treatment may affect the total.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <h2 className="text-3xl font-bold">What Affects the Price?</h2>
              <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 desktop:grid-cols-2">
                {priceFactors.map((factor) => (
                  <li key={factor} className="flex gap-3 text-gray-700">
                    <span aria-hidden="true" className="text-amber-700">
                      •
                    </span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-5">
            <p className="text-sm leading-relaxed text-gray-600">
              Need a more accurate price? Send us photos of the carpeted areas
              and we&apos;ll review the room details, condition and treatment
              needs.
            </p>
            <ResponsiveQuoteLink
              className={`${primaryButton} mt-4 w-full sm:w-auto`}
              message={carpetQuoteMessage}
            />
          </div>
        </article>
      </section>

      <section className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-2">
          <article
            className={`rounded-4xl px-6 py-8 sm:px-8 ${whiteSectionCardStyle}`}
          >
            <h2 className="text-3xl font-bold">What Results Can You Expect?</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Professional cleaning can improve the appearance and condition of
              many residential carpets, but not every stain, odor or
              discoloration can be fully removed. Results depend on the carpet
              fiber and construction, overall wear, the type and age of stains,
              odor depth, previous cleaning attempts and any permanent
              discoloration or fiber damage.
            </p>
          </article>
          <article
            className={`rounded-4xl px-6 py-8 sm:px-8 ${whiteSectionCardStyle}`}
          >
            <h2 className="text-3xl font-bold">After Your Cleaning</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Allow the carpet to dry before normal use when possible, and do
              not place items on damp carpet. Maintain ventilation and airflow.
              Drying time varies with carpet construction, room temperature,
              humidity, airflow and the amount of moisture used during
              cleaning.
            </p>
          </article>
        </div>
      </section>

      <section className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <aside className="mx-auto max-w-5xl rounded-4xl border border-amber-200 bg-white px-6 py-8 shadow-sm sm:px-8 md:px-10 md:py-10">
          <p className="mb-3 text-sm font-medium tracking-widest text-amber-700">
            READY TO GET A QUOTE?
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Send Us Photos of Your Carpet
          </h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-gray-600">
            Send us photos of the complete carpeted rooms and close-up photos
            of stains or problem areas. Include the number of rooms,
            approximate room sizes, your city or ZIP code and information about
            any odors. We&apos;ll review the details and provide a more accurate
            quote before scheduling.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ResponsiveQuoteLink
              className={primaryButton}
              message={carpetQuoteMessage}
            />
            <a
              href={contactLinks.telephone}
              aria-label="Call NovaFiber"
              className={`${secondaryButton} gap-2`}
            >
              <ActionIcon actionType="phone" />
              Call Us
            </a>
          </div>
          <p className="mt-7 text-sm leading-relaxed text-gray-600">
            For the best estimate, include photos of the full carpeted areas
            and close-up photos of stains or problem areas.
          </p>
        </aside>
      </section>

      <section
        aria-labelledby="carpet-faq-heading"
        className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20"
      >
        <div className="mx-auto w-full">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="carpet-faq-heading"
              className="text-3xl font-bold sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Helpful details about professional residential carpet cleaning.
            </p>
          </div>
          <ServiceFAQ faqs={carpetFaqs} idPrefix="carpet-faq" />
        </div>
      </section>
    </>
  );
}
