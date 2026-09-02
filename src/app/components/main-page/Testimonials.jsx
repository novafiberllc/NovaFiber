"use client";

import ReviewCard from "../shared/ReviewCard";
import Slider from "../shared/Slider";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-360 w-full py-15  flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-4xl font-bold  max-w-103">Our Client Reviews</h2>

      <p className="mb-5 text-[1.25rem] text-[#E58411] tracking-widest">
        What Our Customers Say
      </p>

      <div className="max-w-90 sm:max-w-149 md:max-w-218.5 desktop:max-w-360 flex flex-col items-center">
        <Slider slides={testimonials} CardComponent={ReviewCard} />
      </div>

      <p className="mb-5 text-[1.25rem] text-[#E58411] tracking-widest">
        ★ 4.8 on Google
      </p>
    </section>
  );
}
