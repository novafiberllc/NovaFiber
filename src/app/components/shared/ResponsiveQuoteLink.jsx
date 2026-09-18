import ActionIcon from "@/app/components/shared/ActionIcon";
import { businessInfo, contactLinks } from "@/lib/business";

export default function ResponsiveQuoteLink({
  className = "",
  message,
  label = "Send Photos for a Quote",
  ariaLabel,
  actionType,
}) {
  const sharedClass = `min-h-11 items-center justify-center gap-2 ${className}`;
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
        aria-label={ariaLabel || "Text photos to NovaFiber for a cleaning quote"}
        className={`inline-flex md:hidden ${sharedClass}`}
      >
        <ActionIcon actionType={actionType || "sms"} />
        {label}
      </a>
      <a
        href={whatsappHref}
        aria-label={
          ariaLabel || "Send photos to NovaFiber on WhatsApp for a cleaning quote"
        }
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden md:inline-flex ${sharedClass}`}
      >
        <ActionIcon actionType={actionType || "whatsapp"} />
        {label}
      </a>
    </>
  );
}
