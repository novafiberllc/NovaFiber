import Features from "./components/main-page/Features";
import FAQ from "./components/main-page/FAQ";
import Pricing from "./components/main-page/Pricing";
import Products from "./components/main-page/Products";
import Services from "./components/main-page/Services";
import Testimonials from "./components/main-page/Testimonials";
import Hero from "./components/shared/Hero";
import { businessInfo } from "@/lib/business";

const canonicalUrl = `${businessInfo.siteUrl}/`;
const metadataDescription =
  "Professional sofa, upholstery, mattress and carpet cleaning in Bolingbrook and surrounding Chicago suburbs. View pricing and send photos for a quote.";
const socialImage = `${businessInfo.siteUrl}/image/hero1.jpg`;

export const metadata = {
  title: "Upholstery & Carpet Cleaning in Bolingbrook, IL | NovaFiber",
  description: metadataDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Upholstery & Carpet Cleaning in Bolingbrook, IL | NovaFiber",
    description: metadataDescription,
    url: canonicalUrl,
    type: "website",
    images: [
      {
        url: socialImage,
        alt: "NovaFiber professional upholstery and carpet cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upholstery & Carpet Cleaning in Bolingbrook, IL | NovaFiber",
    description: metadataDescription,
    images: [socialImage],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${businessInfo.siteUrl}/#website`,
      url: canonicalUrl,
      name: businessInfo.name,
      inLanguage: "en-US",
      publisher: { "@id": businessInfo.businessId },
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
      sameAs: Object.values(businessInfo.socialProfiles),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Features />
      <Services />
      <Products />
      <Pricing />

      {/* Testimonials section is currently not needed, can be added back later
      if desired */}
      <Testimonials />
      <FAQ />
    </>
  );
}
