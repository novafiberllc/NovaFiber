"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider({ slides, CardComponent }) {
  return (
    <div className="relative  w-full mx-auto py-0">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        loop={true}
        spaceBetween={40}
        slidesPerView={1}
        allowTouchMove={false}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        className="min-w-full"
      >
        {slides.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-full h-130 pt-10 pb-15 cursor-pointer"
          >
            {CardComponent && <CardComponent item={item} />}
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* Back Button */}
      <button
        aria-label="Previous result"
        className="flex swiper-button-prev-custom absolute -left-[5%] sm:left-[1%] md:-left-[1%] desktop:left-[1%] top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:bg-gray-50 transition-colors z-20 cursor-pointer aria-"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      {/* Forward Button */}
      <button
        aria-label="Next result"
        className="flex swiper-button-next-custom absolute -right-[5%]  sm:right-[1%] md:-right-[1%] desktop:right-[1%]  top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:bg-gray-50 transition-colors z-20 cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
}
