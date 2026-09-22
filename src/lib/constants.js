const menuItems = [
  {
    href: "/#services",
    label: "Services",
    children: [
      {
        href: "/services/couch-sofa-cleaning",
        label: "Couch & Sofa Cleaning",
      },
      {
        href: "/services/upholstery-cleaning",
        label: "Upholstery Cleaning",
      },
      {
        href: "/services/mattress-cleaning",
        label: "Mattress Cleaning",
      },
      {
        href: "/services/carpet-cleaning",
        label: "Carpet Cleaning",
      },
      {
        href: "/services/pet-stain-odor-removal",
        label: "Pet Stain & Odor Removal",
      },
    ],
  },
  { href: "/#before-after", label: "Products" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/service-area", label: "Area" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacts", label: "Contacts" },
];

const testimonials = [
  {
    id: 1,
    name: "C LaLonde",
    quote:
      "Denys was great! He responded quickly to my request for a quote, was on time for our appointment & my furniture looks fabulous!",
    rating: 5,
    bgImage: "/image/reviews/backgrounds/review-bg-c-lalonde.jpg",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWElcMi_Mw5z8RG9TFsZYmDMDxOSXwLIR-XPrkP7Rx9TTKHF0u6eQ=w400-h400-p-rp-mo-br100",
    reviewUrl: "https://maps.app.goo.gl/ZHSXAmgXuHmhWPi89",
  },
  {
    id: 2,
    name: "Lauren Wood",
    quote:
      "Denys was absolutely wonderful! He cleaned both our area rug and our couch, and they look amazing. He was incredibly thorough and professional.",
    rating: 5,
    bgImage: "/image/reviews/backgrounds/review-bg-lauren-wood.jpg",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWhuTkGa36wK5s_FNXG18up82NaKxg5-tvwTFoZaJVxtNVj9riRcw=w400-h400-p-rp-mo-br100",
    reviewUrl: "https://maps.app.goo.gl/wuiScj8QEgx5vVd28",
  },
  {
    id: 3,
    name: "Donna Ruge",
    quote: "Very professional and efficient. I would highly recommend them.",
    rating: 5,
    bgImage: "/image/reviews/backgrounds/review-bg-donna-ruge.jpg",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUGoGoa68gXoTDmtWgt18OD-byaVyTr1BCA0DcVAhoXLETNFcs=w400-h400-p-rp-mo-br100",
    reviewUrl: "https://maps.app.goo.gl/13N5goYvWCjKJbm19",
  },
  {
    id: 4,
    name: "Victoria Sparkman",
    quote:
      "I couldn’t be happier with how my carpet turned out! It looks and feels brand new. The technician was professional and on time.",
    rating: 5,
    bgImage: "/image/reviews/backgrounds/review-bg-victoria-sparkman.jpg",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVtUDjLEMT4TD2sAUBRZkwKopMqNNl9j0OH1x2xfmV46ixkyxeX=w400-h400-p-rp-mo-br100",
    reviewUrl: "https://maps.app.goo.gl/gUoU3ZEVhsk2FhoaA",
  },
  {
    id: 5,
    name: "Ramon Harvey",
    quote:
      "Arrived on time and was very professional. Excellent job on the sofa cleaning!",
    rating: 5,
    bgImage: "/image/reviews/backgrounds/review-bg-ramon-harvey.jpg",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWmeTLvbbBV5_XPWeSEh6N7hBQLRo5B2_y4cHOvdy4J_1gZmPLBrw=w400-h400-p-rp-mo-br100",
    reviewUrl: "https://maps.app.goo.gl/uE8sCEi58SFEMcMf7",
  },
  {
    id: 6,
    name: "fdub callaway",
    quote:
      "Denys thank you so much for coming through and making my Couch n Sofa look brand new again! The price was affordable.",
    rating: 5,
    bgImage: "/image/reviews/backgrounds/review-bg-fdub-callaway.jpg",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUzsJbvaNfOwj_Bq6qHsPwGRceiySt-MTWjFl2fsu3lp80YYsdd=w400-h400-p-rp-mo-br100",
    reviewUrl: "https://maps.app.goo.gl/kcoggbDDFNu7xZcD6",
  },
  {
    id: 7,
    name: "Andrii Tiahnii",
    quote:
      "Had my couch and mattress cleaned and the results were amazing. Everything looks fresh and like new again. Great service and very fair pricing.",
    rating: 5,
    bgImage: "/image/reviews/backgrounds/review-bg-andrii-tiahnii.jpg",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUFnZm35VkZTwpEM8QJ9oGSg4aLWH8D8fHYBgvkmOd4lu_RlUxn=w400-h400-p-rp-mo-ba12-br100",
    reviewUrl: "https://maps.app.goo.gl/Xa2XVBPzVASyH49q6",
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
    href: "/services/couch-sofa-cleaning",
  },
  {
    title: "Upholstery Cleaning",
    description:
      "Professional cleaning for upholstered furniture including chairs, sectionals and other compatible fabric furniture affected by dirt, spills, stains and everyday use.",
    image: "/image/services/upholstery-cleaning.jpg",
    alt: "Professional upholstery cleaning",
    href: "/services/upholstery-cleaning",
  },
  {
    title: "Mattress Cleaning",
    description:
      "Professional mattress cleaning to remove accumulated dirt, visible spots and compatible odors while refreshing the sleeping surface.",
    image: "/image/services/mattress-cleaning.jpg",
    alt: "Professional mattress cleaning",
    href: "/services/mattress-cleaning",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Professional residential carpet cleaning designed to remove built-up soil, everyday stains and odors and improve the appearance of your carpets.",
    image: "/image/services/carpet-cleaning.jpg",
    alt: "Professional residential carpet cleaning",
    href: "/services/carpet-cleaning",
  },
  {
    title: "Pet Stain & Odor Removal",
    description:
      "Targeted treatment for pet-related stains and odors on compatible upholstery and carpets. Results depend on the material, age of the stain and depth of contamination.",
    image: "/image/services/pet-stain-odor-removal.jpg",
    alt: "Pet stain and odor treatment for upholstery and carpet",
    href: "/services/pet-stain-odor-removal",
  },
];

const modalContent = {
  Materials: {
    title: "Professional Materials",
    description:
      "Most cleaning only removes what you can see. We go deeper. Our process targets embedded dirt, bacteria, allergens, and stubborn odors trapped deep inside carpet and upholstery fibers — the stuff regular cleaning leaves behind. We use powerful professional equipment with high extraction capability to flush out contaminants, not just move them around. This means no residue, no sticky feeling, and faster drying. Our solutions are strong enough to break down heavy soil, pet urine, and tough stains — yet completely safe for kids and pets. Every job is customized. We analyze the fabric, contamination level, and problem areas to choose the exact method needed to get maximum results without damage. You’re not just getting a cleaning — you’re restoring your carpet and furniture back to life.",
  },
};

export { menuItems, testimonials, works, services, modalContent };
