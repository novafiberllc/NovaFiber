import { businessInfo, contactLinks } from "@/lib/business";

export default function ResponsiveQuoteLink({ className = "", message }) {
  const sharedClass = `min-h-11 items-center justify-center ${className}`;
  const encodedMessage = message ? encodeURIComponent(message) : null;
  const smsHref = encodedMessage
    ? `sms:${businessInfo.phone}?body=${encodedMessage}`
    : contactLinks.smsQuote;
  const whatsappHref = encodedMessage
    ? `https://wa.me/${businessInfo.phone.replace("+", "")}?text=${encodedMessage}`
    : contactLinks.whatsappQuote;

  return (
    <>
      <a
        href={smsHref}
        aria-label="Text photos to NovaFiber for a cleaning quote"
        className={`inline-flex md:hidden ${sharedClass}`}
      >
        Send Photos for a Quote
      </a>
      <a
        href={whatsappHref}
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
