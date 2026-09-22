"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { scrollToPageTop } from "@/lib/scroll";

const visibilityThreshold = 500;

export default function BackToTopButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId = null;

    const updateVisibility = () => {
      if (animationFrameId !== null) return;

      animationFrameId = requestAnimationFrame(() => {
        setIsVisible(window.scrollY >= visibilityThreshold);
        animationFrameId = null;
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [pathname]);

  return (
    <button
      type="button"
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToPageTop}
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom))",
      }}
      className={`fixed right-5 z-30 flex size-11 items-center justify-center rounded-full bg-amber-700 text-white shadow-lg motion-safe:transition-all motion-safe:duration-200 hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 motion-reduce:transition-none sm:right-10 ${
        isVisible
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden="true" focusable="false" size={22} />
    </button>
  );
}
