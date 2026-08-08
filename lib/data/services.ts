export type Service = {
  slug: string;
  name: string;
  count: number;
  icon: "grid" | "frame" | "monitor" | "cart" | "code" | "plus" | "image";
  image: string;
  tags: string[];
};

export const services: Service[] = [
  {
    slug: "brand-strategy",
    name: "Brand Strategy",
    count: 6,
    icon: "plus",
    image: "https://picsum.photos/seed/brand-strategy/900/1200",
    tags: [
      "Brand Positioning",
      "Competitor & Market Research",
      "Brand Architecture",
      "Brand Audit",
      "Brand Naming & Tagline",
      "Brand Messaging & Tone of Voice",
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    count: 7,
    icon: "monitor",
    image: "https://picsum.photos/seed/web-development/900/1200",
    tags: [
      "Custom Websites",
      "Headless CMS Builds",
      "Performance Optimization",
      "API Integrations",
      "Landing Pages",
      "Maintenance & Support",
      "Technical SEO",
    ],
  },
  {
    slug: "brand-identity",
    name: "Brand Identity",
    count: 5,
    icon: "frame",
    image: "https://picsum.photos/seed/brand-identity/900/1200",
    tags: [
      "Logo Design",
      "Visual Identity Systems",
      "Packaging Design",
      "Brand Guidelines",
      "Print Collateral",
    ],
  },
  {
    slug: "ecommerce",
    name: "eCommerce",
    count: 7,
    icon: "cart",
    image: "https://picsum.photos/seed/ecommerce/900/1200",
    tags: [
      "Shopify Stores",
      "Custom eCommerce",
      "Platform Migration & Scaling",
      "Checkout Optimization",
      "Subscription Systems",
      "Inventory Integrations",
      "Conversion Rate Optimization",
    ],
  },
  {
    slug: "user-experience-design",
    name: "User Experience Design",
    count: 6,
    icon: "monitor",
    image: "https://picsum.photos/seed/ux-design/900/1200",
    tags: [
      "User Research",
      "Wireframing & Prototyping",
      "Information Architecture",
      "Usability Testing",
      "Interaction Design",
      "Design Systems",
    ],
  },
  {
    slug: "web-mobile-applications",
    name: "Web & Mobile Applications",
    count: 6,
    icon: "code",
    image: "https://picsum.photos/seed/web-mobile/900/1200",
    tags: [
      "Native iOS & Android Apps",
      "Cross-Platform Apps",
      "Progressive Web Apps",
      "Dashboard & SaaS UIs",
      "API Architecture",
      "App Store Deployment",
    ],
  },
  {
    slug: "visual-content",
    name: "Visual Content",
    count: 3,
    icon: "image",
    image: "https://picsum.photos/seed/visual-content/900/1200",
    tags: ["Product Photography", "Motion & Video", "3D Renders"],
  },
  {
    slug: "embedded-hardware",
    name: "Embedded & Hardware",
    count: 5,
    icon: "grid",
    image: "https://picsum.photos/seed/embedded-hardware/900/1200",
    tags: [
      "Firmware Development",
      "PCB Design",
      "IoT Connectivity",
      "Industrial Design",
      "Prototyping",
    ],
  },
];

export const servicesByCategory = services.reduce<Record<string, Service>>(
  (acc, s) => {
    acc[s.slug] = s;
    return acc;
  },
  {}
);
