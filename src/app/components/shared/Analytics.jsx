"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { measurementId, trackEvent } from "@/lib/analytics";

function getLinkEvent(link) {
  const explicitEvent = link.dataset.analyticsEvent;
  if (explicitEvent) return explicitEvent;

  const href = link.getAttribute("href") || "";

  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("sms:")) return "sms_click";
  if (/^https:\/\/wa\.me\//i.test(href)) return "whatsapp_click";

  return null;
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) return undefined;

    const handleLinkClick = (event) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a[href]");
      if (!link) return;

      const eventName = getLinkEvent(link);
      if (!eventName) return;

      trackEvent(eventName, {
        page_path: window.location.pathname,
        link_text: link.textContent?.trim().replace(/\s+/g, " ") || undefined,
      });
    };

    document.addEventListener("click", handleLinkClick);

    if (pathname.startsWith("/services/")) {
      trackEvent("service_page_view", {
        page_path: pathname,
      });
    }

    const pricingSection = document.getElementById("pricing");
    let pricingObserver;

    if (pricingSection) {
      pricingObserver = new IntersectionObserver(
        ([entry], observer) => {
          if (!entry.isIntersecting) return;

          trackEvent("pricing_view", {
            page_path: window.location.pathname,
          });
          observer.disconnect();
        },
        { threshold: 0.3 },
      );
      pricingObserver.observe(pricingSection);
    }

    return () => {
      document.removeEventListener("click", handleLinkClick);
      pricingObserver?.disconnect();
    };
  }, [pathname]);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
      <Script id="novafiber-ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(measurementId)});
        `}
      </Script>
    </>
  );
}
