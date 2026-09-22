import { businessInfo } from "@/lib/business";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: `${businessInfo.siteUrl}/sitemap.xml`,
  };
}
