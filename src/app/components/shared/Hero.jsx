"use client";

import SiteHeader from "@/app/components/shared/SiteHeader";
import { businessInfo, contactLinks } from "@/lib/business";

export default function Hero() {
  return (
    <section className="max-w-360 w-full md:w-218.5 desktop:w-full bg-[url('/image/hero1.jpg')] bg-cover bg-center min-h-screen min-w-full ">
      <div className="w-full h-screen max-w-360 mx-auto flex flex-col">
        <SiteHeader />

        <div className="px-5 md:px-20 text-white flex flex-col items-start justify-center gap-6 grow">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center">
            Professional Deep Sofa, Mattress, Carpet & Upholstery Cleaning
          </h1>

          <ul className="self-start list-disc list-inside text-lg md:text-xl text-start sm:pl-12">
            <li className="mb-2 text-2xl">Stain & odor removal</li>
            <li className="mb-2 text-2xl">Deep extraction cleaning</li>
            <li className="mb-2 text-2xl">Professional equipment</li>
            <li className="mb-2 text-2xl">Safe for pets & kids</li>
            <li className="mb-2 text-2xl">Discounts and Low Prices</li>
            <li className="mb-2 text-2xl">
              ★ {businessInfo.googleRating} Google Rating |{" "}
              {businessInfo.location.label}
            </li>
          </ul>

          <div className="sm:pl-12">
            <a
              href={contactLinks.sms}
              className="inline-flex min-h-11 items-center rounded bg-amber-600 px-8 py-4 text-xl font-bold text-white hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Text Us
            </a>
          </div>
        </div>
      </div>
      <div className="min-h-50 min-w-full bg-linear-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
