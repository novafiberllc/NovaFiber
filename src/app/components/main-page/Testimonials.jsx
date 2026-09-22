"use client";

import Image from "next/image";
import ReviewCard from "../shared/ReviewCard";
import Slider from "../shared/Slider";
import { testimonials } from "@/lib/constants";
import { businessInfo } from "@/lib/business";

const googleBusinessProfileUrl =
  "https://www.google.com/maps/place/NovaFiber+LLC/@41.7102745,-88.0666769,17z/data=!4m8!3m7!1s0x4fd82fdf19c4ef99:0xc0901d66ae617089!8m2!3d41.7102745!4d-88.064102!9m1!1b1!16s%2Fg%2F11z3p06b8h";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="max-w-360 w-full py-15  flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-4xl font-bold  max-w-103">Our Client Reviews</h2>

      <p className="mb-5 text-[1.25rem] text-amber-700 tracking-widest">
        What Our Customers Say
      </p>

      <div className="w-full max-w-90 sm:max-w-149 md:max-w-218.5 desktop:max-w-360 flex flex-col items-center">
        <Slider slides={testimonials} CardComponent={ReviewCard} />
      </div>

      <a
        href={googleBusinessProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View NovaFiber on Google Maps — rated ${businessInfo.googleRating} out of 5 from ${businessInfo.googleReviewCount} reviews`}
        data-analytics-event="google_reviews_click"
        className="mb-5 inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap px-2 text-[1.25rem] tracking-widest text-amber-700 motion-safe:transition-colors motion-safe:duration-200 hover:text-amber-800 hover:underline hover:underline-offset-4 motion-safe:active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
      >
        <Image
          src="/svg/google-g.svg"
          alt=""
          width={20}
          height={20}
          className="h-5 w-5 shrink-0"
        />
        <span aria-hidden="true">★</span>
        <span>
          {businessInfo.googleRating} on Google ({businessInfo.googleReviewCount}{" "}
          reviews)
        </span>
      </a>
    </section>
  );
}
