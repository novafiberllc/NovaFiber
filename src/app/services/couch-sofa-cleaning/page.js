import Link from "next/link";
import ServiceFAQ from "@/app/components/service-page/ServiceFAQ";
import ServiceImage from "@/app/components/service-page/ServiceImage";
import ResponsiveQuoteLink from "@/app/components/shared/ResponsiveQuoteLink";
import SiteHeader from "@/app/components/shared/SiteHeader";
import { businessInfo, contactLinks } from "@/lib/business";
import { couchSofaFaqs } from "@/lib/couch-sofa-cleaning";
import { modalContent } from "@/lib/constants";

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

const areaServed = modalContent.Area.locations.map((name) => ({
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
  "rounded bg-amber-600 px-4 py-3 text-center font-bold text-white hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600";
const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded border border-amber-600 px-4 py-3 text-center font-bold text-amber-700 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600";

export default function CouchSofaCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section className="w-full max-w-360 bg-white pb-10 desktop:pb-20">
        <SiteHeader tone="dark" />

        <div className="px-5 sm:px-10 md:px-20">
          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li>
                <Link
                  href="/#services"
                  className="inline-flex min-h-11 items-center hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="py-3 text-gray-700">
                Couch &amp; Sofa Cleaning
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-16 desktop:gap-16">
            <div>
              <p className="mb-3 text-sm font-medium tracking-widest text-amber-600">
                COUCH &amp; SOFA CLEANING
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl desktop:text-6xl">
                Professional Couch &amp; Sofa Cleaning in Bolingbrook, IL
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
                Professional deep cleaning for sofas, couches and sectionals in
                Bolingbrook and surrounding Chicago suburbs. We help remove
                built-up dirt, everyday spills, stains and odors using cleaning
                methods selected for the material and condition of the
                furniture.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-gray-600">
                <li>
                  <span aria-hidden="true" className="mr-1 text-amber-600">
                    ★
                  </span>
                  {businessInfo.googleRating} Google Rating
                </li>
                <li>{businessInfo.location.label}</li>
                <li>Professional Equipment</li>
                <li>Stain &amp; Odor Treatment</li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ResponsiveQuoteLink className={primaryButton} />
                <a href={contactLinks.telephone} className={secondaryButton}>
                  Call Us
                </a>
              </div>
            </div>

            <ServiceImage
              src="/image/services/couch-sofa/process-2.jpg"
              alt="Professional couch and sofa cleaning"
              placeholderLabel="Future couch and sofa service image"
              className="aspect-4/3"
              priority={true}
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
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
                className="rounded-4xl bg-white px-6 py-5 font-medium shadow-sm"
              >
                <span aria-hidden="true" className="mr-3 text-amber-600">
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <div className="mx-auto w-full">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-amber-600">
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
                <span className="text-sm font-bold text-amber-600">
                  STEP {index + 1}
                </span>
                <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          {/* <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
            <ServiceImage
              src="/images/services/couch-sofa/process-1.webp"
              alt="Couch cleaning inspection and pre-treatment process"
              placeholderLabel="Future inspection and pre-treatment image"
            />
            <ServiceImage
              src="/images/services/couch-sofa/process-2.webp"
              alt="Professional couch cleaning and extraction process"
              placeholderLabel="Future cleaning and extraction image"
            />
          </div> */}
        </div>
      </section>

      <section className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
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

      <section className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-2">
          <article className="rounded-4xl bg-[#F7F7F7] px-6 py-7 shadow-sm sm:px-8">
            <p className="mb-3 text-sm font-medium tracking-widest text-amber-600">
              STARTING PRICES
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Couch &amp; Sofa Cleaning Prices
            </h2>
            <dl className="mt-7">
              {prices.map(([name, price]) => (
                <div
                  key={name}
                  className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-3 first:pt-0"
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
            <p className="mt-5 text-sm leading-relaxed text-gray-500">
              Prices are starting estimates. Final pricing may vary depending on
              the upholstery material, size, condition, stains and additional
              treatment required.
            </p>
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

          <aside className="rounded-4xl border border-amber-200 bg-white px-6 py-7 shadow-sm sm:px-8">
            <h2 className="text-3xl font-bold">What Affects the Price?</h2>
            <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 desktop:grid-cols-2">
              {priceFactors.map((factor) => (
                <li key={factor} className="flex gap-3 text-gray-700">
                  <span aria-hidden="true" className="text-amber-600">
                    •
                  </span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-2">
          <article className="rounded-4xl bg-white px-6 py-8 shadow-sm sm:px-8">
            <h2 className="text-3xl font-bold">What Results Can You Expect?</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Professional cleaning can significantly improve the appearance and
              condition of many sofas and couches, but not every stain or
              discoloration can be fully removed. Results depend on the
              material, the type and age of the stain, previous cleaning
              attempts and the condition of the furniture. Deep contamination
              may require additional treatment.
            </p>
            {/* <p className="mt-4 font-medium leading-relaxed text-gray-700">
              We inspect problem areas before treatment and avoid promising
              results that cannot be guaranteed.
            </p> */}
          </article>
          <article className="rounded-4xl bg-white px-6 py-8 shadow-sm sm:px-8">
            <h2 className="text-3xl font-bold">After Your Cleaning</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Allow the cleaned furniture to dry fully before normal use. Drying
              time varies depending on the material, room temperature, humidity,
              airflow and the amount of moisture used during cleaning.
            </p>
          </article>
        </div>
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

      <section className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <aside className="mx-auto max-w-5xl rounded-4xl border border-amber-200 bg-white px-6 py-8 shadow-sm sm:px-8 md:px-10 md:py-10">
          <p className="mb-3 text-sm font-medium tracking-widest text-amber-600">
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
            <a href={contactLinks.telephone} className={secondaryButton}>
              Call Us
            </a>
          </div>
          <p className="mt-7 text-sm leading-relaxed text-gray-600">
            For the best estimate, include photos of the full item and close-up
            photos of problem areas.
          </p>
        </aside>
      </section>
    </>
  );
}
