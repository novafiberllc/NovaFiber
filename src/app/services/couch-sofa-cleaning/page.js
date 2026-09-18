import Link from "next/link";
import ServiceFAQ from "@/app/components/service-page/ServiceFAQ";
import ServiceImage from "@/app/components/service-page/ServiceImage";
import ActionIcon from "@/app/components/shared/ActionIcon";
import Hero from "@/app/components/shared/Hero";
import ResponsiveQuoteLink from "@/app/components/shared/ResponsiveQuoteLink";
import { businessInfo, contactLinks } from "@/lib/business";
import { couchSofaFaqs } from "@/lib/couch-sofa-cleaning";
import { serviceAreas } from "@/lib/service-area";

const canonicalUrl = `${businessInfo.siteUrl}/services/couch-sofa-cleaning/`;
const metadataDescription =
  "Professional couch and sofa cleaning in Bolingbrook and nearby Chicago suburbs. View pricing, cleaning steps and request a quote from NovaFiber.";
const socialImage = `${businessInfo.siteUrl}/image/services/couch-sofa-cleaning.jpg`;

export const metadata = {
  title: "Couch & Sofa Cleaning in Bolingbrook, IL | NovaFiber",
  description: metadataDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Couch & Sofa Cleaning in Bolingbrook, IL | NovaFiber",
    description: metadataDescription,
    url: canonicalUrl,
    type: "website",
    images: [
      {
        url: socialImage,
        alt: "NovaFiber couch and sofa cleaning service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Couch & Sofa Cleaning in Bolingbrook, IL | NovaFiber",
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
      name: "Couch & Sofa Cleaning",
      serviceType: "Professional couch and sofa cleaning",
      url: canonicalUrl,
      provider: { "@id": businessInfo.businessId },
      areaServed,
      description: metadataDescription,
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
          name: "Couch & Sofa Cleaning",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: couchSofaFaqs.map((faq) => ({
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

const useCases = [
  "Everyday dirt and buildup",
  "Food and drink spots",
  "Visible traffic areas",
  "Pet-related stains",
  "Odors",
  "General furniture refresh",
];

const processSteps = [
  {
    title: "Inspection",
    description:
      "We inspect the upholstery, construction and problem areas before cleaning.",
  },
  {
    title: "Fabric & Condition Check",
    description:
      "The material and condition of the furniture are evaluated to determine an appropriate cleaning approach.",
  },
  {
    title: "Pre-Treatment",
    description:
      "Stains and heavily soiled areas may be treated before the main cleaning process when appropriate.",
  },
  {
    title: "Professional Cleaning & Extraction",
    description:
      "Professional upholstery cleaning equipment is used to clean the fabric and extract loosened soil and cleaning solution.",
  },
  {
    title: "Stain & Odor Treatment",
    description:
      "Additional treatment may be applied to compatible stains or odor-affected areas when required.",
  },
  {
    title: "Final Inspection",
    description:
      "The cleaned furniture is reviewed after the service and any remaining limitations are discussed with the customer.",
  },
];

const prices = [
  ["2 Seats", "$109"],
  ["3 Seats", "$129"],
  ["4 Seats", "$139"],
  ["5 Seats", "$149"],
  ["6 Seats", "$159"],
];

const priceFactors = [
  "Size of the furniture",
  "Upholstery material",
  "Overall condition",
  "Stains",
  "Odor treatment",
  "Number of sections/cushions",
];

const primaryButton =
  "rounded bg-amber-700 px-4 py-3 text-center font-bold text-white hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700";
const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded border border-amber-700 px-4 py-3 text-center font-bold text-amber-700 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700";
const whiteSectionCardStyle = "border border-gray-200 bg-[#F7F7F7] shadow-sm";

export default function CouchSofaCleaningPage() {
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
          eyebrow="COUCH & SOFA CLEANING"
          title="Professional Couch & Sofa Cleaning in Bolingbrook, IL"
          description="Professional deep cleaning for sofas, couches and sectionals in Bolingbrook and surrounding Chicago suburbs. We help remove built-up dirt, everyday spills, stains and odors using cleaning methods selected for the material and condition of the furniture."
          primaryAction={{ type: "responsiveQuote" }}
          secondaryAction={{
            label: "Call Us",
            href: contactLinks.telephone,
            actionType: "phone",
            ariaLabel: "Call NovaFiber",
          }}
          backgroundImage="/image/services/couch-sofa/hero.jpg"
          backgroundPosition="center"
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
                  Couch &amp; Sofa Cleaning
                </li>
              </ol>
            </nav>
          }
          trustItems={[
            `★ ${businessInfo.googleRating} Google Rating`,
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
              Couch and sofa cleaning is a good option for furniture affected by
              everyday dirt, spills, visible stains, odors and general wear from
              daily use.
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
              How Our Couch Cleaning Process Works
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
              Examples of couch and sofa cleaning results.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
            <ServiceImage
              src="/image/services/couch-sofa/result_1.jpg"
              alt="Couch before professional cleaning"
              placeholderLabel="Future before-cleaning result image"
              badge="BEFORE"
            />
            <ServiceImage
              src="/image/services/couch-sofa/result_2.jpg"
              alt="Couch after professional cleaning"
              placeholderLabel="Future after-cleaning result image"
              badge="AFTER"
              badgePosition="right"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <article className="mx-auto max-w-5xl rounded-4xl border border-gray-200 bg-white px-6 py-7 shadow-sm sm:px-8">
          <p className="mb-3 text-sm font-medium tracking-widest text-amber-700">
            STARTING PRICES
          </p>

          <div className="grid gap-7 md:grid-cols-2 md:gap-0">
            <div className="md:pr-8">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Couch &amp; Sofa Cleaning Prices
              </h2>
              <dl className="mt-7">
                {prices.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-baseline justify-between gap-4 border-b border-gray-200 last:border-0 py-3 first:pt-0"
                  >
                    <dt className="min-w-0 text-gray-700">{name}</dt>
                    <dd className="shrink-0 font-bold text-gray-900">
                      <span className="text-sm font-normal text-gray-500">
                        {"from "}
                      </span>
                      {price}
                    </dd>
                  </div>
                ))}
              </dl>
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
              Need a more accurate price? Send us photos of your couch or sofa
              and we&apos;ll review the details.
            </p>
            <ResponsiveQuoteLink
              className={`${primaryButton} mt-4 w-full sm:w-auto`}
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
              Professional cleaning can significantly improve the appearance and
              condition of many sofas and couches, but not every stain or
              discoloration can be fully removed. Results depend on the
              material, the type and age of the stain, previous cleaning
              attempts and the condition of the furniture. Deep contamination
              may require additional treatment.
            </p>
          </article>
          <article
            className={`rounded-4xl px-6 py-8 sm:px-8 ${whiteSectionCardStyle}`}
          >
            <h2 className="text-3xl font-bold">After Your Cleaning</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Allow the cleaned furniture to dry fully before normal use. Drying
              time varies depending on the material, room temperature, humidity,
              airflow and the amount of moisture used during cleaning.
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
            Send Us Photos of Your Couch or Sofa
          </h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-gray-600">
            Send us a few photos of the furniture, tell us your city and
            describe any stains or odors. We&apos;ll review the details and
            provide a more accurate quote before scheduling.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ResponsiveQuoteLink className={primaryButton} />
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
            For the best estimate, include photos of the full item and close-up
            photos of problem areas.
          </p>
        </aside>
      </section>

      <section
        aria-labelledby="service-faq-heading"
        className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20"
      >
        <div className="mx-auto w-full">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="service-faq-heading"
              className="text-3xl font-bold sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Helpful details about couch, sofa and sectional cleaning.
            </p>
          </div>
          <ServiceFAQ />
        </div>
      </section>
    </>
  );
}
