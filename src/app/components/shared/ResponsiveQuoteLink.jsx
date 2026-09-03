import { contactLinks } from "@/lib/business";

export default function ResponsiveQuoteLink({ className = "" }) {
  const sharedClass = `min-h-11 items-center justify-center ${className}`;

  return (
    <>
      <a
        href={contactLinks.smsQuote}
        aria-label="Text photos to NovaFiber for a cleaning quote"
        className={`inline-flex md:hidden ${sharedClass}`}
      >
        Send Photos for a Quote
      </a>
      <a
        href={contactLinks.whatsappQuote}
        aria-label="Send photos to NovaFiber on WhatsApp for a cleaning quote"
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden md:inline-flex ${sharedClass}`}
      >
        Send Photos for a Quote
      </a>
    </>
  );
}
