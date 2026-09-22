const quoteMessage = `Hi NovaFiber! I'd like a cleaning quote.

City / ZIP:
Item to be cleaned:
Main stains or problem areas:
Any odors:

I'll attach photos below.`;

const encodedQuoteMessage = encodeURIComponent(quoteMessage);

const businessInfo = {
  name: "NovaFiber LLC",
  displayName: "NovaFiber",
  siteUrl: "https://novafiber.org",
  businessId: "https://novafiber.org/#business",
  phone: "+13312537855",
  phoneDisplay: "+1 (331) 253-7855",
  email: "novafiberllc@gmail.com",
  location: {
    city: "Bolingbrook",
    region: "IL",
    postalCode: "60440",
    country: "US",
    label: "Bolingbrook, IL",
  },
  googleRating: 4.9,
  googleReviewCount: 28,
  socialProfiles: {
    google: "https://maps.app.goo.gl/38Ag59oe1xf9eJRz9",
    facebook: "https://www.facebook.com/profile.php?id=61576447468204",
    instagram: "https://www.instagram.com/novafiberllc/",
  },
};

const contactLinks = {
  telephone: `tel:${businessInfo.phone}`,
  email: `mailto:${businessInfo.email}`,
  sms: `sms:${businessInfo.phone}`,
  smsQuote: `sms:${businessInfo.phone}?body=${encodedQuoteMessage}`,
  whatsapp: `https://wa.me/${businessInfo.phone.replace("+", "")}`,
  whatsappQuote: `https://wa.me/${businessInfo.phone.replace(
    "+",
    "",
  )}?text=${encodedQuoteMessage}`,
};

export { businessInfo, contactLinks, quoteMessage };
