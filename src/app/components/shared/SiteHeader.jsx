import Link from "next/link";
import MobileMenu from "@/app/components/shared/MobileMenu";
import { menuItems } from "@/lib/constants";
import { contactLinks } from "@/lib/business";

export default function SiteHeader({ tone = "dark", variant = "hero" }) {
  const isHeroTheme = variant === "hero" || tone === "light";
  const logoClass = isHeroTheme ? "text-white" : "text-gray-900";
  const linkClass = isHeroTheme
    ? "text-white hover:text-gray-300"
    : "text-gray-700 hover:text-amber-700";
  const callClass = isHeroTheme
    ? "border-white text-white hover:bg-white/10"
    : "border-amber-700 text-amber-700 hover:bg-amber-50";
  const focusClass = isHeroTheme
    ? "focus-visible:outline-white"
    : "focus-visible:outline-amber-700";

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-360 items-center justify-between px-5 pt-5 sm:px-10 md:px-20 md:pt-10">
      <Link
        href="/"
        className={`inline-flex min-h-11 items-center text-[1.75rem] font-bold focus-visible:outline-2 focus-visible:outline-offset-4 ${focusClass} ${logoClass}`}
      >
        NovaFiber
      </Link>

      <div className="hidden items-center gap-5 desktop:flex">
        <nav aria-label="Main navigation" className="flex items-center gap-5">
          {menuItems
            .filter((item) => !item.isBackToTop)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-11 items-center text-lg focus-visible:outline-2 focus-visible:outline-offset-4 ${focusClass} ${linkClass}`}
              >
                {item.label}
              </Link>
            ))}
        </nav>
      </div>

      <MobileMenu tone={isHeroTheme ? "light" : tone} />
    </header>
  );
}
