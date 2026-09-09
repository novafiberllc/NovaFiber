import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

export default function ServiceImage({
  src,
  alt,
  placeholderLabel,
  className = "aspect-4/3",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  badge,
  badgePosition = "left",
}) {
  const imagePath = path.join(process.cwd(), "public", src.replace(/^\/+/, ""));
  const hasImage = existsSync(imagePath);

  return (
    <div
      className={`relative overflow-hidden rounded-4xl bg-gray-100 shadow-sm ${className}`}
    >
      {badge && (
        <span
          className={`absolute top-4 z-10 rounded bg-white/90 px-3 py-2 text-xs font-bold tracking-widest text-gray-900 shadow-sm ${
            badgePosition === "right" ? "right-4" : "left-4"
          }`}
        >
          {badge}
        </span>
      )}
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          fill={true}
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${alt} placeholder`}
          className="absolute inset-0 flex flex-col items-center justify-center border border-gray-200 bg-[#F7F7F7] px-6 text-center"
        >
          <span className="text-sm font-medium tracking-widest text-amber-700">
            IMAGE COMING SOON
          </span>
          <span className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
            {placeholderLabel}
          </span>
        </div>
      )}
    </div>
  );
}
