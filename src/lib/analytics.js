const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function trackEvent(name, params = {}) {
  if (!measurementId || typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag("event", name, params);
}

export { measurementId, trackEvent };
