"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUp, ChevronDown, Menu, X } from "lucide-react";
import ActionIcon from "@/app/components/shared/ActionIcon";
import { menuItems } from "@/lib/constants";
import { contactLinks } from "@/lib/business";
import { scrollToPageTop } from "@/lib/scroll";

export default function MobileMenu({ tone = "light" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollYRef = useRef(0);
  const heroHeightRef = useRef(0);
  const menuTriggerRef = useRef(null);
  const primaryMenuTriggerRef = useRef(null);

  // Handle scroll detection for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Get hero section height (viewport height as proxy)
      const heroHeight = window.innerHeight;
      heroHeightRef.current = heroHeight;

      // Detect if past hero section
      setIsPastHero(currentScrollY > heroHeight);

      // Detect scroll direction
      if (currentScrollY < lastScrollYRef.current) {
        // Scrolling up
        setScrollDirection("up");
        setIsScrollingUp(currentScrollY > heroHeight);
      } else {
        // Scrolling down
        setScrollDirection("down");
        setIsScrollingUp(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (event) => {
    if (isOpen) {
      setIsServicesOpen(false);
    } else {
      menuTriggerRef.current = event.currentTarget;
    }
    setIsOpen(!isOpen);
  };

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    setIsServicesOpen(false);

    if (restoreFocus) {
      requestAnimationFrame(() => menuTriggerRef.current?.focus());
    }
  };

  const handleBackToTop = () => {
    closeMenu();
    requestAnimationFrame(() => {
      primaryMenuTriggerRef.current?.focus({ preventScroll: true });
      scrollToPageTop();
    });
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsServicesOpen(false);
        requestAnimationFrame(() => menuTriggerRef.current?.focus());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Show floating button on mobile when scrolling up and past hero
  const shouldShowFloatingButton = isPastHero && isScrollingUp;
  const menuButtonClass =
    tone === "light"
      ? "text-white hover:text-gray-200 focus:ring-white"
      : "text-gray-900 hover:text-amber-700 focus:ring-amber-700";

  return (
    <>
      {/* Hamburger Button in navbar - always visible on mobile */}
      <button
        ref={primaryMenuTriggerRef}
        type="button"
        onClick={toggleMenu}
        className={`flex min-h-11 min-w-11 items-center justify-center rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent desktop:hidden ${menuButtonClass}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Floating Hamburger Button - only visible on mobile when scrolling up past hero */}

      {shouldShowFloatingButton && (
        <button
          type="button"
          onClick={toggleMenu}
          className="fixed top-3 left-3 z-50 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-linear-to-br from-gray-600 to-gray-700 p-4 text-white shadow-lg transition-all duration-300 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent desktop:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        className={`fixed left-0 top-0 h-dvh w-64 overflow-y-auto bg-linear-to-b from-gray-900 to-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <span className="text-white text-lg font-semibold">Menu</span>
          <button
            type="button"
            onClick={() => closeMenu(true)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded text-white transition-colors hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <nav aria-label="Mobile navigation" className="pt-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.href} className="border-b border-gray-700">
                {item.children ? (
                  <>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={() => closeMenu()}
                        className="navbar-item flex min-h-11 flex-1 items-center px-5 py-3 text-white transition-colors duration-200 hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={`${isServicesOpen ? "Collapse" : "Expand"} service links`}
                        aria-expanded={isServicesOpen}
                        aria-controls="mobile-services-submenu"
                        onClick={() =>
                          setIsServicesOpen((isExpanded) => !isExpanded)
                        }
                        className="flex min-h-11 min-w-11 items-center justify-center self-stretch rounded text-white transition-colors hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          size={20}
                          className={`transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <div
                      id="mobile-services-submenu"
                      aria-hidden={!isServicesOpen}
                      inert={!isServicesOpen ? true : undefined}
                      className={`grid bg-gray-900/40 transition-[grid-template-rows] duration-200 ease-out ${
                        isServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <ul className="overflow-hidden">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => closeMenu()}
                              className="flex min-h-11 items-center py-3 pl-10 pr-5 text-sm text-gray-100 transition-colors duration-200 hover:bg-gray-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => closeMenu()}
                    className="navbar-item flex min-h-11 items-center px-5 py-3 text-white transition-colors duration-200 hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={contactLinks.telephone}
          onClick={() => closeMenu()}
          aria-label="Call NovaFiber"
          className="flex min-h-11 items-center gap-2 border-b border-gray-700 px-5 py-3 text-white transition-colors duration-200 hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ActionIcon actionType="phone" />
          Call Us
        </a>
        <button
          type="button"
          onClick={handleBackToTop}
          className="navbar-item flex min-h-11 w-full items-center gap-3 border-b border-gray-700 bg-gray-800 px-5 py-3 text-left font-semibold text-white transition-colors duration-200 hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowUp aria-hidden="true" focusable="false" size={18} />
          Back to top
        </button>
      </div>

      {/* Overlay/Backdrop - closes menu when clicked outside */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => closeMenu(true)}
          className="fixed inset-0 z-40 bg-transparent desktop:hidden"
        />
      )}
    </>
  );
}
