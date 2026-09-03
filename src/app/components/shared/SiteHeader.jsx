import Link from "next/link";
import MobileMenu from "@/app/components/shared/MobileMenu";
import { menuItems } from "@/lib/constants";
import { contactLinks } from "@/lib/business";

export default function SiteHeader({ tone = "light" }) {
  const isLight = tone === "light";
  const logoClass = isLight ? "text-white" : "text-gray-900";
  const linkClass = isLight
    ? "text-white hover:text-gray-300"
    : "text-gray-700 hover:text-amber-700";
  const callClass = isLight
    ? "border-white text-white hover:bg-white/10"
    : "border-amber-600 text-amber-700 hover:bg-amber-50";

  return (
    <header className="flex w-full items-center justify-between px-5 pt-5 md:px-20 md:pt-10">
      <Link
        href="/"
        className={`inline-flex min-h-11 items-center text-[1.75rem] font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 ${logoClass}`}
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
                className={`inline-flex min-h-11 items-center text-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 ${linkClass}`}
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <a
          href={contactLinks.telephone}
          className={`inline-flex min-h-11 items-center rounded border px-4 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 ${callClass}`}
        >
          Call Us
        </a>
      </div>

      <MobileMenu tone={tone} />
    </header>
  );
}
