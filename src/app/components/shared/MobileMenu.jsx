"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { menuItems } from "@/lib/constants";
import { contactLinks } from "@/lib/business";

export default function MobileMenu({ tone = "light" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollYRef = useRef(0);
  const heroHeightRef = useRef(0);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, item) => {
    // Handle "Back to top" with smooth scroll
    if (item.isBackToTop) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  // Show floating button on mobile when scrolling up and past hero
  const shouldShowFloatingButton = isPastHero && isScrollingUp;
  const menuButtonClass =
    tone === "light"
      ? "text-white hover:text-gray-200 focus:ring-white"
      : "text-gray-900 hover:text-amber-700 focus:ring-amber-600";

  return (
    <>
      {/* Hamburger Button in navbar - always visible on mobile */}
      <button
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
        className={`fixed left-0 top-0 min-h-screen w-64 bg-linear-to-b from-gray-900 to-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <span className="text-white text-lg font-semibold">Menu</span>
          <button
            type="button"
            onClick={toggleMenu}
            className="flex min-h-11 min-w-11 items-center justify-center rounded text-white transition-colors hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="pt-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item)}
              className={`flex items-center gap-3 px-5 py-3 text-white navbar-item hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700 last:border-b-0 ${
                item.isBackToTop ? "bg-gray-800 font-semibold" : ""
              }`}
            >
              {item.isBackToTop && <ArrowUp size={18} />}
              {item.label}
            </a>
          ))}
          <a
            href={contactLinks.telephone}
            onClick={() => setIsOpen(false)}
            className="flex min-h-11 items-center border-b border-gray-700 px-5 py-3 text-white transition-colors duration-200 hover:bg-gray-700"
          >
            Call Us
          </a>
        </nav>
      </div>

      {/* Overlay/Backdrop - closes menu when clicked outside */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-transparent desktop:hidden"
        />
      )}
    </>
  );
}
