import { businessInfo } from "@/lib/business";

const productionPaths = [
  "",
  "/service-area",
  "/services/couch-sofa-cleaning",
  "/services/upholstery-cleaning",
  "/services/mattress-cleaning",
  "/services/carpet-cleaning",
  "/services/pet-stain-odor-removal",
];

export default function sitemap() {
  return productionPaths.map((path) => ({
    url: `${businessInfo.siteUrl}${path || "/"}`,
  }));
}
