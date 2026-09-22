export function scrollToPageTop() {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: prefersReducedMotion ? "instant" : "smooth",
  });
}
