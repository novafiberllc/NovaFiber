import Link from "next/link";
import { MapPin } from "lucide-react";
import { ServiceCard } from "@/app/components/main-page/Services";
import ActionIcon from "@/app/components/shared/ActionIcon";
import Hero from "@/app/components/shared/Hero";
import ResponsiveQuoteLink from "@/app/components/shared/ResponsiveQuoteLink";
import ServiceAreaMapEmbed from "@/app/components/shared/ServiceAreaMapEmbed";
import { businessInfo, contactLinks } from "@/lib/business";
import { services } from "@/lib/constants";
import { serviceAreas } from "@/lib/service-area";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
const canonicalUrl = `${businessInfo.siteUrl}/service-area`;
const metadataTitle =
  "Service Area in Bolingbrook & Chicago Suburbs | NovaFiber";
const metadataDescription =
  "NovaFiber provides professional upholstery, mattress and carpet cleaning in Bolingbrook and surrounding Chicago suburbs. Check service availability for your ZIP code.";

// Temporary local fallback until the branded NovaFiber vehicle photo is added.
const serviceAreaHeroImage = "/image/area_hero.jpg";
const socialImage = `${businessInfo.siteUrl}${serviceAreaHeroImage}`;

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: canonicalUrl,
    type: "website",
    images: [
      {
        url: socialImage,
        alt: "NovaFiber professional upholstery cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
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
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: metadataTitle,
      description: metadataDescription,
      about: { "@id": businessInfo.businessId },
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
          name: "Service Area",
          item: canonicalUrl,
        },
      ],
    },
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
  ],
};

const locationCheckMessage = `Hi NovaFiber! I'd like to confirm service availability.

City / ZIP:
Service needed:
Item(s), rooms or surfaces to be cleaned:
Optional photos:`;

const homeLocation = "Bolingbrook, IL";
const surroundingLocations = serviceAreas
  .filter((location) => location !== homeLocation)
  .sort((a, b) => a.localeCompare(b));

const getGoogleMapsLocation = (location) => {
  const city = location.replace(/,\s*IL$/i, "");

  return {
    city,
    url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${city}, Illinois, USA`,
    )}`,
  };
};
const homeGoogleMapsLocation = getGoogleMapsLocation(homeLocation);

const overviewFacts = [
  "Based in Bolingbrook, Illinois",
  "Serving confirmed surrounding Chicago suburbs",
  "Residential on-site cleaning",
  "Availability confirmed by city and ZIP code",
];

const processSteps = [
  {
    title: "Send Your Location",
    description: "Share your city and ZIP code.",
  },
  {
    title: "Tell Us What You Need",
    description:
      "Select the cleaning service and describe the items, rooms or problem areas.",
  },
  {
    title: "Receive Availability & Quote Details",
    description:
      "NovaFiber reviews the information and responds with availability and quote details.",
  },
];

const primaryButton =
  "rounded bg-amber-700 px-4 py-3 text-center font-bold text-white hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700";
const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded border border-amber-700 px-4 py-3 text-center font-bold text-amber-700 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700";

export default function ServiceAreaPage() {
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
          eyebrow="SERVICE AREA"
          title="Professional Cleaning Across Bolingbrook & Chicago Suburbs"
          description="NovaFiber provides professional upholstery, mattress and carpet cleaning in Bolingbrook and communities throughout the surrounding Chicago suburbs. Check the locations below or send us your city and ZIP code to confirm availability."
          primaryAction={{
            type: "responsiveQuote",
            label: "Check Your Location",
            ariaLabel: "Check whether NovaFiber serves your location",
            message: locationCheckMessage,
            actionType: "whatsapp",
          }}
          secondaryAction={{
            label: "View Service Areas",
            href: "#service-areas",
            ariaLabel: "View locations NovaFiber currently serves",
          }}
          backgroundImage={serviceAreaHeroImage}
          backgroundPositionClassName="bg-center"
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
                <li aria-current="page" className="py-3 text-white">
                  Service Area
                </li>
              </ol>
            </nav>
          }
          trustItems={[
            `★ ${businessInfo.googleRating} Google Rating (${businessInfo.googleReviewCount} reviews)`,
            "Based in Bolingbrook, IL",
            "Chicago Suburbs",
            "On-Site Cleaning Service",
          ]}
        />
      </section>

      <section className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <div className="mx-auto grid max-w-8xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="h-80 w-full overflow-hidden rounded-xl sm:h-95 md:h-110 desktop:h-110">
              <ServiceAreaMapEmbed title="NovaFiber service area around Bolingbrook and Chicago suburbs" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              This interactive map provides a general overview. Confirmed
              service locations are listed below.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium tracking-widest text-amber-700">
              SERVICE AREA OVERVIEW
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Local Cleaning, Brought to Your Home
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              NovaFiber is based in Bolingbrook and travels to confirmed
              communities throughout the surrounding Chicago suburbs. Because
              timing and job details can affect availability, we confirm each
              request using the city and ZIP code you provide.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {overviewFacts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-4xl border border-gray-200 bg-[#F7F7F7] px-5 py-4 font-medium shadow-sm"
                >
                  <span aria-hidden="true" className="mr-2 text-amber-700">
                    •
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="service-areas"
        className="w-full max-w-360 scroll-mt-6 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20"
      >
        <div className="mx-auto w-full">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-amber-700">
              CURRENT SERVICE AREA
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Locations We Currently Serve
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              NovaFiber serves Bolingbrook and the confirmed surrounding
              communities listed below.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 desktop:grid-cols-4">
            <li className="sm:col-span-2 md:col-span-3 desktop:col-span-4">
              <a
                href={homeGoogleMapsLocation.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${homeGoogleMapsLocation.city}, Illinois on Google Maps — opens in a new tab`}
                className="group flex min-h-14 items-center gap-3 rounded-4xl border border-amber-700 bg-white px-5 py-5 shadow-sm motion-safe:transition-[border-color,box-shadow,transform] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 hover:border-amber-800 hover:shadow-md motion-safe:active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
              >
                <MapPin
                  aria-hidden="true"
                  focusable="false"
                  className="shrink-0 text-amber-700 group-hover:text-amber-800"
                />
                <div className="min-w-0">
                  <span className="block text-xs font-bold tracking-widest text-amber-700">
                    HOME LOCATION
                  </span>
                  <span className="mt-1 block break-words text-xl font-bold">
                    {homeLocation}
                  </span>
                </div>
              </a>
            </li>
            {surroundingLocations.map((location) => {
              const googleMapsLocation = getGoogleMapsLocation(location);

              return (
                <li key={location}>
                  <a
                    href={googleMapsLocation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${googleMapsLocation.city}, Illinois on Google Maps — opens in a new tab`}
                    className="group flex h-full min-h-14 items-center gap-3 rounded-4xl border border-gray-200 bg-white px-5 py-4 shadow-sm motion-safe:transition-[border-color,box-shadow,transform] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 hover:border-amber-700 hover:shadow-md motion-safe:active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
                  >
                    <MapPin
                      aria-hidden="true"
                      focusable="false"
                      size={18}
                      className="shrink-0 text-amber-700 group-hover:text-amber-800"
                    />
                    <span className="min-w-0 break-words font-medium group-hover:text-amber-800">
                      {location}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-gray-600">
            Service availability may depend on scheduling and the details of the
            job. Send us your city and ZIP code to confirm.
          </p>
        </div>
      </section>

      <section className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <div className="mx-auto w-full">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-amber-700">
              OUR SERVICES
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Professional Cleaning Services Available in Our Service Area
            </h2>
          </div>

          <div className="mt-10 grid w-full grid-cols-1 gap-7 md:grid-cols-4 desktop:grid-cols-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <aside className="mx-auto max-w-5xl rounded-4xl border border-amber-200 bg-white px-6 py-8 shadow-sm sm:px-8 md:px-10 md:py-10">
          <p className="mb-3 text-sm font-medium tracking-widest text-amber-700">
            CHECK AVAILABILITY
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Not Sure If We Serve Your Location?
          </h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-gray-600">
            Send us your city or ZIP code along with the service you need.
            We&apos;ll confirm availability and help you with the next steps.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ResponsiveQuoteLink
              className={primaryButton}
              message={locationCheckMessage}
              label="Check Your Location"
              ariaLabel="Check whether NovaFiber serves your location"
              actionType="whatsapp"
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
            Include your city or ZIP code, service needed, the item, room or
            surface to be cleaned, and optional photos.
          </p>
        </aside>
      </section>

      <section className="w-full max-w-360 bg-white px-5 py-10 sm:px-10 md:px-20 desktop:py-20">
        <div className="mx-auto w-full">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-amber-700">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Confirm Service in Three Simple Steps
            </h2>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-4xl border border-gray-200 bg-[#F7F7F7] px-6 py-7 shadow-sm sm:px-8"
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
    </>
  );
}
