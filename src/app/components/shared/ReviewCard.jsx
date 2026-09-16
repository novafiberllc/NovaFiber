"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function ReviewCard({ item }) {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const avatarAlt = `${item.name} Google review profile photo`;
  const initials = item.name
    .split(/\s+/)
    .map((namePart) => namePart[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative h-130 w-full mx-auto group flex flex-col items-center">
      {/* Container */}
      <div className="relative w-full sm:w-92.5 h-full rounded-4xl overflow-hidden z-10 shadow-sm">
        {/* Background image */}
        <Image
          src={item.bgImage}
          alt=""
          aria-hidden="true"
          width={370}
          height={520}
          sizes="(max-width: 639px) 100vw, 370px"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Text cover */}
        <div className="absolute bottom-5 left-5 right-5 z-0 flex min-h-72 flex-col rounded-3xl bg-white px-6 pb-6 pt-12 text-center shadow-lg">
          {/* Avatar cower */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden bg-white -z-10"></div>
          {/* Shadow */}
          <div className="absolute bottom-[85%] left-1/2 -translate-x-1/2 w-[10%] h-[8%] bg-linear-to-bl from-[#000000] to-[#916413] blur-lg rounded-2xl opacity-90 z-[-1]"></div>

          {/* Avatar */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden bg-white ">
            {avatarFailed ? (
              <div
                role="img"
                aria-label={avatarAlt}
                className="flex h-full w-full items-center justify-center bg-amber-700 font-bold text-white"
              >
                {initials}
              </div>
            ) : (
              <Image
                src={item.avatar}
                alt={avatarAlt}
                fill={true}
                sizes="64px"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                onError={() => setAvatarFailed(true)}
              />
            )}
          </div>

          {/* Text */}
          <h3 className="text-[#1E1E1E] font-bold text-lg">{item.name}</h3>
          <p className="mt-1 text-xs text-[#8E8E8E]">
            Google Review
            <span aria-hidden="true"> · </span>
            {item.dateLabel}
          </p>
          <p className="mt-4 line-clamp-3 text-[14px] font-medium leading-relaxed text-[#1E1E1E]">
            {item.quote}
          </p>

          <div className="mt-auto pt-5">
            {/* Rating */}
            <div
              role="img"
              aria-label={`${item.rating} out of 5 stars`}
              className="flex justify-center gap-1.5"
            >
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  aria-hidden="true"
                  focusable="false"
                  className="h-4 w-4 text-amber-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <a
              href={item.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="swiper-no-swiping mt-4 inline-flex items-center gap-2 font-medium text-amber-700 hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
            >
              Read on Google
              <MoveRight
                aria-hidden="true"
                focusable="false"
                strokeWidth={0.75}
                size={28}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Shadow: */}
      <div className="absolute -bottom-[3%] left-1/2 -translate-x-1/2 w-[65%] h-[10%] bg-linear-to-bl from-[#000000] to-[#a89f93] blur-xl rounded-full z-[-1] opacity-50"></div>
    </div>
  );
}
