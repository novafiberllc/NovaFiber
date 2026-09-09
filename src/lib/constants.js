import { businessInfo } from "@/lib/business";

const menuItems = [
  { href: "/#features", label: "Features" },
  { href: "/#services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#testimonials", label: "Customer Reviews" },
  { href: "/#contacts", label: "Contacts" },
  { href: "#top", label: "Back to top", isBackToTop: true },
];

const testimonials = [
  {
    id: 1,
    name: "Bang Upin",
    role: "Pedagang Asongan",
    quote:
      "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    rating: 4,
    bgImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    quote:
      "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    rating: 5,
    bgImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pak Budi",
    role: "Pengusaha",
    quote: "Desain interior yang sangat memuaskan dan elegan.",
    rating: 4,
    bgImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Mas Dimas",
    role: "Freelance Designer",
    quote:
      "Semenjak pakai furniture dari Panto, ruang kerjaku jadi super estetik. Kalau lagi Zoom meeting, background-nya udah kayak studio profesional!",
    rating: 5,
    bgImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Mbak Ayu",
    role: "Pengantin Baru",
    quote:
      "Pas banget buat ngisi rumah baru kami. Harganya bersahabat, tapi kualitas kayunya kokoh banget. Suami juga suka sama desain minimalisnya.",
    rating: 5,
    bgImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Kang Gilang",
    role: "Anak Kost",
    quote:
      "Gak nyangka kamar kost-an yang sempit bisa disulap jadi se-cozy ini berkat Panto. Bahannya bagus dan perakitannya gampang banget.",
    rating: 4,
    bgImage:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
  },
];

const works = [
  {
    id: 1,
    name: "Upholstered White Chair before & after professional cleaning result",
    before: "/image/products/photo_5_1.jpg",
    after: "/image/products/photo_5_2.jpg",
  },
  {
    id: 2,
    name: "Upholstered Red Sofa before & after professional cleaning result",
    before: "/image/products/photo_4_1.jpg",
    after: "/image/products/photo_4_2.jpg",
  },
  {
    id: 3,
    name: "Upholstered White Sofa before & after professional cleaning result",
    before: "/image/products/photo_6_1.jpg",
    after: "/image/products/photo_6_2.jpg",
  },
  {
    id: 4,
    name: "Upholstered Gray Sofa before & after professional cleaning result",
    before: "/image/products/photo_2_1.jpg",
    after: "/image/products/photo_2_2.jpg",
  },
  {
    id: 5,
    name: "White Mattress before & after professional cleaning result",
    before: "/image/products/photo_3_1.jpg",
    after: "/image/products/photo_3_2.jpg",
  },
  {
    id: 6,
    name: "Upholstered White Sofa before & after professional cleaning result",
    before: "/image/products/photo_1_1.jpg",
    after: "/image/products/photo_1_2.jpg",
  },

  {
    id: 7,
    name: "White Mattress before & after professional cleaning result",
    before: "/image/products/photo_7_1.jpg",
    after: "/image/products/photo_7_2.jpg",
  },
  {
    id: 8,
    name: "Upholstered Gray Sofa before & after professional cleaning result",
    before: "/image/products/photo_8_1.jpg",
    after: "/image/products/photo_8_2.jpg",
  },
];

const services = [
  {
    title: "Couch & Sofa Cleaning",
    description:
      "Professional deep cleaning for sofas, couches and sectionals. We help remove built-up dirt, everyday spills, stains and odors to refresh your furniture.",
    image: "/image/services/couch-sofa-cleaning.jpg",
    alt: "Professional couch and sofa cleaning",
    href: "/services/couch-sofa-cleaning/",
  },
  {
    title: "Upholstery Cleaning",
    description:
      "Professional cleaning for upholstered furniture including chairs, sectionals and other compatible fabric furniture affected by dirt, spills, stains and everyday use.",
    image: "/image/services/upholstery-cleaning.jpg",
    alt: "Professional upholstery cleaning",
    href: "/services/upholstery-cleaning/",
  },
  {
    title: "Mattress Cleaning",
    description:
      "Professional mattress cleaning to remove accumulated dirt, visible spots and compatible odors while refreshing the sleeping surface.",
    image: "/image/services/mattress-cleaning.jpg",
    alt: "Professional mattress cleaning",
    href: "/services/mattress-cleaning/",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Professional residential carpet cleaning designed to remove built-up soil, everyday stains and odors and improve the appearance of your carpets.",
    image: "/image/services/carpet-cleaning.jpg",
    alt: "Professional residential carpet cleaning",
    href: "/services/carpet-cleaning/",
  },
  {
    title: "Pet Stain & Odor Removal",
    description:
      "Targeted treatment for pet-related stains and odors on compatible upholstery and carpets. Results depend on the material, age of the stain and depth of contamination.",
    image: "/image/services/pet-stain-odor-removal.jpg",
    alt: "Pet stain and odor treatment for upholstery and carpet",
    href: "/services/pet-stain-odor-removal/",
  },
];

const modalContent = {
  Pricing: {
    title: "Pricing",
    description: `Every job is different, so pricing depends on the type of cleaning, item size, condition, and number of pieces. We offer bundle discounts for multiple items. For a fast and accurate quote, text ${businessInfo.phoneDisplay} with a brief description or photos — we’ll get back to you quickly with pricing and availability.`,
  },
  Area: {
    title: "Service Area",
    description:
      "We serve the greater Chicago area, including Bolingbrook, Naperville, Aurora, Joliet, and surrounding suburbs. If you’re unsure whether we cover your location, please don’t hesitate to reach out. We’re happy to confirm our service area and discuss how we can meet your cleaning needs. Here are the exact areas we cover:",
    locations: [
      "Naperville, IL",
      "Aurora, IL",
      "Joliet, IL",
      "Elgin, IL",
      "Waukegan, IL",
      "Cicero, IL",
      "Evanston, IL",
      "Schaumburg, IL",
      "Arlington Heights, IL",
      "Palatine, IL",
      "Skokie, IL",
      "Des Plaines, IL",
      "Orland Park, IL",
      "Oak Lawn, IL",
      "Berwyn, IL",
      "Mount Prospect, IL",
      "Tinley Park, IL",
      "Oak Park, IL",
      "Wheaton, IL",
      "Downers Grove, IL",
      "Elmhurst, IL",
      "Glenview, IL",
      "Buffalo Grove, IL",
      "Northbrook, IL",
      "Deerfield, IL",
      "Highland Park, IL",
      "Libertyville, IL",
      "Vernon Hills, IL",
      "Hoffman Estates, IL",
      "Bolingbrook, IL",
      "Plainfield, IL",
      "St. Charles, IL",
      "Geneva, IL",
      "Batavia, IL",
      "Addison, IL",
      "Lombard, IL",
      "Carol Stream, IL",
      "Streamwood, IL",
      "Hanover Park, IL",
      "Roselle, IL",
      "Park Ridge, IL",
      "Niles, IL",
      "Morton Grove, IL",
      "Bensenville, IL",
      "La Grange, IL",
      "Hinsdale, IL",
      "Burr Ridge, IL",
      "Western Springs, IL",
    ],
  },
  Materials: {
    title: "Professional Materials",
    description:
      "Most cleaning only removes what you can see. We go deeper. Our process targets embedded dirt, bacteria, allergens, and stubborn odors trapped deep inside carpet and upholstery fibers — the stuff regular cleaning leaves behind. We use powerful professional equipment with high extraction capability to flush out contaminants, not just move them around. This means no residue, no sticky feeling, and faster drying. Our solutions are strong enough to break down heavy soil, pet urine, and tough stains — yet completely safe for kids and pets. Every job is customized. We analyze the fabric, contamination level, and problem areas to choose the exact method needed to get maximum results without damage. You’re not just getting a cleaning — you’re restoring your carpet and furniture back to life.",
  },
};

export { menuItems, testimonials, works, services, modalContent };
