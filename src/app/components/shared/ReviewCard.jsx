'use client";';
import Image from "next/image";

export default function ReviewCard({ item }) {
  return (
    <div className="relative h-130 w-full mx-auto group flex flex-col items-center">
      {/* Container */}
      <div className="relative w-full sm:w-92.5 h-full rounded-4xl overflow-hidden z-10 shadow-sm">
        {/* Background image */}
        <Image
          src={item.bgImage}
          alt="Interior"
          fill={true}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Text cover */}
        <div className="absolute bottom-5 left-5 right-5 bg-white rounded-3xl px-6 pb-8 pt-12 text-center shadow-lg z-0">
          {/* Avatar cower */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden bg-white -z-10"></div>
          {/* Shadow */}
          <div className="absolute bottom-[85%] left-1/2 -translate-x-1/2 w-[10%] h-[8%] bg-linear-to-bl from-[#000000] to-[#916413] blur-lg rounded-2xl opacity-90 z-[-1]"></div>

          {/* Avatar */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden bg-white ">
            <Image
              src={item.avatar}
              alt={item.name}
              fill={true}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Text */}
          <h3 className="text-[#1E1E1E] font-bold text-lg">{item.name}</h3>
          <p className="text-[#8E8E8E] text-xs mt-1 mb-5">{item.role}</p>
          <p className="text-[#1E1E1E] text-[14px] leading-relaxed mb-6 font-medium line-clamp-2">
            {item.quote}
          </p>

          {/* Rating */}
          <div className="flex justify-center gap-1.5">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < item.rating ? "text-amber-700" : "text-gray-200"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Shadow: */}
      <div className="absolute -bottom-[3%] left-1/2 -translate-x-1/2 w-[65%] h-[10%] bg-linear-to-bl from-[#000000] to-[#a89f93] blur-xl rounded-full z-[-1] opacity-50"></div>
    </div>
  );
}
