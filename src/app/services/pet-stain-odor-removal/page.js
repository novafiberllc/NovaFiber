import Link from "next/link";
import ServiceFAQ from "@/app/components/service-page/ServiceFAQ";
import ServiceImage from "@/app/components/service-page/ServiceImage";
import ActionIcon from "@/app/components/shared/ActionIcon";
import Hero from "@/app/components/shared/Hero";
import ResponsiveQuoteLink from "@/app/components/shared/ResponsiveQuoteLink";
import { businessInfo, contactLinks } from "@/lib/business";
import { serviceAreas } from "@/lib/service-area";
import { petStainOdorFaqs } from "@/lib/pet-stain-odor-removal";

const canonicalUrl = `${businessInfo.siteUrl}/services/pet-stain-odor-removal/`;
const metadataDescription =
  "Targeted pet stain and odor treatment for compatible upholstery and carpets in Bolingbrook, IL. Send photos to NovaFiber for an accurate quote.";
const socialImage = `${businessInfo.siteUrl}/image/services/pet-stain-odor-removal.jpg`;

export const metadata = {
  title: "Pet Stain & Odor Removal in Bolingbrook, IL | NovaFiber",
  description: metadataDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Pet Stain & Odor Removal in Bolingbrook, IL | NovaFiber",
    description: metadataDescription,
    url: canonicalUrl,
    type: "website",
    images: [
      {
        url: socialImage,
        alt: "NovaFiber pet stain and odor treatment service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Stain & Odor Removal in Bolingbrook, IL | NovaFiber",
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
      name: "Pet Stain & Odor Removal",
      serviceType: "Professional pet stain and odor treatment",
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
          name: "Pet Stain & Odor Removal",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: petStainOdorFaqs.map((faq) => ({
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

const petTreatmentQuoteMessage = `Hi NovaFiber! I'd like a pet stain and odor treatment quote.

City / ZIP:
Item or carpeted area affected:
Material, if known:
Number of items or rooms:
Approximate size of the affected area:
Type and approximate age of the stain:
Description of the odor:
Previous cleaning attempts:

I'll attach photos below.`;

const useCases = [
  "Recent pet stains",
  "Older visible spots",
  "Pet-related odors",
  "Upholstered furniture",
  "Carpeted areas",
  "Repeat problem areas",
];

const processSteps = [
  {
    title: "Inspection",
    description:
      "We inspect the item or carpeted area and identify visible stains, odors and other problem areas.",
  },
  {
    title: "Material & Contamination Assessment",
    description:
      "We evaluate the material, construction, color stability, stain age and apparent contamination depth before selecting a method.",
  },
  {
    title: "Compatible Pre-Treatment",
    description:
      "A targeted pre-treatment may be applied to compatible stains and affected areas when appropriate.",
  },
  {
    title: "Professional Cleaning & Extraction",
    description:
      "Professional cleaning and extraction equipment is used on suitable carpet or upholstery to remove loosened soil and cleaning solution.",
  },
  {
    title: "Targeted Odor Treatment",
    description:
      "Additional odor treatment may be applied when appropriate, although odors can remain if contamination has reached inaccessible layers.",
  },
  {
    title: "Final Inspection & Drying Guidance",
    description:
      "We review the treated area, explain any remaining limitations and provide appropriate drying guidance.",
  },
];

const priceFactors = [
  "Type and size of the affected surface",
  "Upholstery or carpet material",
  "Number of items or rooms",
  "Size of the affected area",
  "Type and age of the stain",
  "Odor or contamination depth",
  "Previous cleaning attempts",
  "Additional treatment required",
];

const primaryButton =
  "rounded bg-amber-700 px-4 py-3 text-center font-bold text-white hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700";
const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded border border-amber-700 px-4 py-3 text-center font-bold text-amber-700 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700";
const whiteSectionCardStyle = "border border-gray-200 bg-[#F7F7F7] shadow-sm";

export default function PetStainOdorRemovalPage() {
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
          eyebrow="PET STAIN & ODOR REMOVAL"
          title="Pet Stain & Odor Removal in Bolingbrook, IL"
          description="Targeted treatment for pet-related stains and odors on compatible upholstery and residential carpets in Bolingbrook and surrounding Chicago suburbs. We select pre-treatment, professional cleaning and extraction methods after inspecting the material and affected area. Results depend on the material, stain age, odor and contamination depth, previous cleaning attempts and overall condition."
          primaryAction={{
            type: "responsiveQuote",
            message: petTreatmentQuoteMessage,
          }}
          secondaryAction={{
            label: "Call Us",
            href: contactLinks.telephone,
            actionType: "phone",
            ariaLabel: "Call NovaFiber",
          }}
          backgroundImage="/image/services/pet-stain-odor-removal.jpg"
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
                  Pet Stain &amp; Odor Removal
                </li>
              </ol>
            </nav>
          }
          trustItems={[
            `★ ${businessInfo.googleRating} Google Rating`,
            businessInfo.location.label,
            "Professional Equipment",
            "Targeted Stain & Odor Treatment",
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
              This service may be suitable for compatible upholstery and
              residential carpets affected by pet-related stains or odors. We
              inspect the surface to assess material compatibility, visible
              condition and likely contamination depth before confirming
              whether our treatment process is appropriate.
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
              How Our Pet Stain &amp; Odor Treatment Works
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
              Examples of visible results after professional treatment of
              compatible surfaces.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
            <ServiceImage
              src="/image/services/pet-stain-odor-removal/result_1.jpg"
              alt="Pet-stained surface before professional treatment"
              placeholderLabel="Temporary before-treatment image; final result photo coming soon"
              badge="BEFORE"
            />
            <ServiceImage
              src="/image/services/pet-stain-odor-removal/result_2.jpg"
              alt="Surface after professional pet stain and odor treatment"
              placeholderLabel="Temporary after-treatment image; final result photo coming soon"
              badge="AFTER"
              badgePosition="right"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <article className="mx-auto max-w-5xl rounded-4xl border border-gray-200 bg-white px-6 py-7 shadow-sm sm:px-8">
          <p className="mb-3 text-sm font-medium tracking-widest text-amber-700">
            PRICING &amp; QUOTE
          </p>

          <div className="grid gap-7 md:grid-cols-2 md:gap-0">
            <div className="md:pr-8">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Pet Stain &amp; Odor Treatment Pricing
              </h2>
              <p className="mt-7 text-xl font-bold text-gray-900">
                Pricing is provided after reviewing the affected surface,
                condition and treatment needs.
              </p>
              <p className="mt-5 leading-relaxed text-gray-600">
                Send us photos and details about the item or carpeted area,
                stain and odor so we can provide a more accurate quote.
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
              Include clear photos of the full affected surface and close-ups
              of visible stains or problem areas.
            </p>
            <ResponsiveQuoteLink
              className={`${primaryButton} mt-4 w-full sm:w-auto`}
              message={petTreatmentQuoteMessage}
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
              Targeted professional treatment can improve many pet-related
              stains and odors, but not every stain can be completely removed
              and not every odor can be completely eliminated. Results depend
              on the surface material and construction, stain type and age,
              odor depth, contamination beneath the visible surface, previous
              cleaning attempts and permanent discoloration or material
              damage. Contamination inside padding, subfloor, furniture filling
              or other inaccessible layers may limit results.
            </p>
          </article>
          <article
            className={`rounded-4xl px-6 py-8 sm:px-8 ${whiteSectionCardStyle}`}
          >
            <h2 className="text-3xl font-bold">After Your Cleaning</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Keep children and pets away from treated areas while they are
              damp, and allow each surface to dry fully before normal use.
              Maintain ventilation and airflow, and avoid placing items on damp
              carpet or upholstery. Drying time depends on the material,
              construction, humidity, airflow and the amount of moisture used.
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
            Send Us Photos of the Affected Area
          </h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-gray-600">
            Include one photo showing the complete item or carpeted area,
            close-up photos of stains, item or room dimensions, the material if
            known, your city or ZIP code, the approximate age of the problem,
            information about odors and any previous treatment attempts.
            We&apos;ll review the details before providing a quote.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ResponsiveQuoteLink
              className={primaryButton}
              message={petTreatmentQuoteMessage}
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
            Clear full-area photos and close-ups help us assess visible
            conditions and likely treatment needs.
          </p>
        </aside>
      </section>

      <section
        aria-labelledby="pet-treatment-faq-heading"
        className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20"
      >
        <div className="mx-auto w-full">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="pet-treatment-faq-heading"
              className="text-3xl font-bold sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Helpful details about professional pet stain and odor treatment.
            </p>
          </div>
          <ServiceFAQ
            faqs={petStainOdorFaqs}
            idPrefix="pet-treatment-faq"
          />
        </div>
      </section>
    </>
  );
}
