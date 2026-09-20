"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const focusableSelector =
  'a[href], button, input, select, textarea, [tabindex]';

function syncSlideAccessibility(swiper) {
  if (!swiper?.slides) return;

  swiper.slides.forEach((slide) => {
    const isVisible = slide.classList.contains("swiper-slide-visible");
    slide.inert = !isVisible;
    slide.setAttribute("aria-hidden", String(!isVisible));

    slide.querySelectorAll(focusableSelector).forEach((element) => {
      if (!isVisible) {
        if (!element.hasAttribute("data-slider-tabindex")) {
          element.setAttribute(
            "data-slider-tabindex",
            element.getAttribute("tabindex") ?? "",
          );
        }
        element.setAttribute("tabindex", "-1");
        return;
      }

      if (!element.hasAttribute("data-slider-tabindex")) return;

      const originalTabIndex = element.getAttribute("data-slider-tabindex");
      if (originalTabIndex) {
        element.setAttribute("tabindex", originalTabIndex);
      } else {
        element.removeAttribute("tabindex");
      }
      element.removeAttribute("data-slider-tabindex");
    });
  });
}

export default function Slider({
  slides,
  CardComponent,
  previousLabel = "Previous review",
  nextLabel = "Next review",
}) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (!swiperInstance) return undefined;

    const sync = () => syncSlideAccessibility(swiperInstance);
    const frame = requestAnimationFrame(sync);
    const observer = new MutationObserver(sync);
    observer.observe(swiperInstance.el, { childList: true, subtree: true });
    window.addEventListener("resize", sync);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, [swiperInstance]);

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
        watchSlidesProgress={true}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          requestAnimationFrame(() => syncSlideAccessibility(swiper));
        }}
        onSlideChange={(swiper) =>
          requestAnimationFrame(() => syncSlideAccessibility(swiper))
        }
        onSlideChangeTransitionEnd={syncSlideAccessibility}
        onBreakpoint={syncSlideAccessibility}
        onResize={syncSlideAccessibility}
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
        type="button"
        aria-label={previousLabel}
        className="swiper-button-prev-custom absolute -left-[5%] top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.1)] motion-safe:transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 sm:left-[1%] md:-left-[1%] desktop:left-[1%]"
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
        type="button"
        aria-label={nextLabel}
        className="swiper-button-next-custom absolute -right-[5%] top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.1)] motion-safe:transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 sm:right-[1%] md:-right-[1%] desktop:right-[1%]"
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
