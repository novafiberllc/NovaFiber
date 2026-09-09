"use client";

export default function SkipLink() {
  function handleClick() {
    requestAnimationFrame(() => {
      const main = document.getElementById("main-content");

      if (!main) return;

      main.focus({ preventScroll: true });
      (main.querySelector("[data-main-content-start]") || main).scrollIntoView({
        block: "start",
      });
    });
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gray-900 focus:px-4 focus:py-3 focus:font-bold focus:text-white focus:outline-2 focus:outline-offset-2 focus:outline-white"
    >
      Skip to main content
    </a>
  );
}
