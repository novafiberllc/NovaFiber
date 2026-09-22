"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import MobileMenu from "@/app/components/shared/MobileMenu";
import { menuItems } from "@/lib/constants";

export default function SiteHeader({ tone = "dark", variant = "hero" }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isHeroTheme = variant === "hero" || tone === "light";
  const logoClass = isHeroTheme ? "text-white" : "text-gray-900";
  const linkClass = isHeroTheme
    ? "text-white hover:text-gray-300"
    : "text-gray-700 hover:text-amber-700";
  const focusClass = isHeroTheme
    ? "focus-visible:outline-white"
    : "focus-visible:outline-amber-700";

  function handleServicesBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsServicesOpen(false);
    }
  }

  function handleServicesKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsServicesOpen(false);
    }
  }

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-360 items-center justify-between px-5 pt-5 sm:px-10 md:px-20 md:pt-10">
      <Link
        href="/"
        className={`inline-flex min-h-11 items-center text-[1.75rem] font-bold focus-visible:outline-2 focus-visible:outline-offset-4 ${focusClass} ${logoClass}`}
      >
        NovaFiber
      </Link>

      <div className="hidden items-center gap-5 desktop:flex">
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-5">
            {menuItems.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <div
                    className="relative flex items-center"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    onFocusCapture={() => setIsServicesOpen(true)}
                    onBlur={handleServicesBlur}
                    onKeyDown={handleServicesKeyDown}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen}
                      onClick={() => setIsServicesOpen(false)}
                      className={`inline-flex min-h-11 items-center text-lg focus-visible:outline-2 focus-visible:outline-offset-4 ${focusClass} ${linkClass}`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`${isServicesOpen ? "Close" : "Open"} services menu`}
                      aria-expanded={isServicesOpen}
                      aria-controls="desktop-services-submenu"
                      onClick={() => setIsServicesOpen((isOpen) => !isOpen)}
                      className={`flex min-h-11 min-w-5 pl-1 items-center justify-center rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${focusClass} ${linkClass}`}
                    >
                      <ChevronDown
                        aria-hidden="true"
                        size={18}
                        className={`transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`absolute left-0 top-full z-50 pt-2 ${
                        isServicesOpen ? "block" : "hidden"
                      }`}
                    >
                      <ul
                        id="desktop-services-submenu"
                        aria-label="Cleaning services"
                        className="min-w-72 rounded-xl border border-gray-200  bg-neutral-100 p-2 text-gray-900 shadow-xl"
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="flex min-h-11 items-center whitespace-nowrap rounded-lg px-4 py-2 text-base transition-colors hover:bg-amber-50 hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`inline-flex min-h-11 items-center text-lg focus-visible:outline-2 focus-visible:outline-offset-4 ${focusClass} ${linkClass}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <MobileMenu tone={isHeroTheme ? "light" : tone} />
    </header>
  );
}
