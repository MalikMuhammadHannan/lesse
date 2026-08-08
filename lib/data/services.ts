import { IMAGES } from "../default-image";

export type ServiceGroup = "Strategy" | "Visual" | "Technology";

export type Service = {
  slug: string;
  name: string;
  count: number;
  icon: "grid" | "frame" | "monitor" | "cart" | "code" | "plus" | "image";
  image: string;
  tags: string[];
  tagline: string;
  heading: { light: string; muted: string };
  description: string;
  group: ServiceGroup;
};

export const serviceGroups: { name: ServiceGroup; description: string }[] = [
  {
    name: "Strategy",
    description:
      "Strategy defines the foundation of a brand. Through research, analysis, and strategic thinking, we clarify positioning, messaging, and long-term direction.",
  },
  {
    name: "Visual",
    description:
      "We create brand identities, digital interfaces, and visual content that communicate clearly, work consistently across every format, and reflect who the brand truly is.",
  },
  {
    name: "Technology",
    description:
      "Technology brings design to life. We build websites, e-commerce platforms, and web applications with precision and care: clean, fast, and built to perform for the people who use them.",
  },
];

export const services: Service[] = [
  {
    slug: "brand-strategy",
    name: "Brand Strategy",
    count: 6,
    icon: "plus",
    image: IMAGES.services.brandStrategy,
    tags: [
      "Brand Positioning",
      "Competitor & Market Research",
      "Brand Architecture",
      "Brand Audit",
      "Brand Naming & Tagline",
      "Brand Messaging & Tone of Voice",
    ],
    tagline:
      "Develop a comprehensive strategy to position your brand in the market and connect with your audience.",
    heading: {
      light: "We help businesses define who they are, where they stand,",
      muted: "and where they're going.",
    },
    description:
      "Brand strategy is the invisible architecture behind every successful brand. It defines why your company exists beyond making money, who your audience really is, how you're different from every competitor in your space, and what you stand for consistently — across every touchpoint, every year.",
    group: "Strategy",
  },
  {
    slug: "web-development",
    name: "Web Development",
    count: 7,
    icon: "monitor",
    image: IMAGES.services.webMobile,
    tags: [
      "Custom Websites",
      "Headless CMS Builds",
      "Performance Optimization",
      "API Integrations",
      "Landing Pages",
      "Maintenance & Support",
      "Technical SEO",
    ],
    tagline:
      "Engineer fast, scalable websites built to convert and built to last.",
    heading: {
      light: "We build the technical foundation",
      muted: "your brand can grow on.",
    },
    description:
      "Great design means nothing without the engineering to back it. We build performant, maintainable websites using modern frameworks — architected for speed, SEO, and long-term scalability, so every release ships faster than the last.",
    group: "Technology",
  },
  {
    slug: "brand-identity",
    name: "Brand Identity",
    count: 5,
    icon: "frame",
    image: IMAGES.services.brandIdentity,
    tags: [
      "Logo Design",
      "Visual Identity Systems",
      "Packaging Design",
      "Brand Guidelines",
      "Print Collateral",
    ],
    tagline: "Give your brand a visual language people recognize instantly.",
    heading: {
      light: "We turn strategy into",
      muted: "something people can see and feel.",
    },
    description:
      "Your identity is the first impression and the lasting one. We design logos, color systems, typography, and packaging that translate your positioning into a visual language customers recognize anywhere — on shelf, on screen, or in hand.",
    group: "Visual",
  },
  {
    slug: "ecommerce",
    name: "eCommerce",
    count: 7,
    icon: "cart",
    image: IMAGES.services.ecommerce,
    tags: [
      "Shopify Stores",
      "Custom eCommerce",
      "Platform Migration & Scaling",
      "Checkout Optimization",
      "Subscription Systems",
      "Inventory Integrations",
      "Conversion Rate Optimization",
    ],
    tagline: "Build storefronts engineered to turn visitors into customers.",
    heading: {
      light: "We build stores people",
      muted: "actually want to buy from.",
    },
    description:
      "Every friction point in a checkout is a lost sale. We design and build eCommerce experiences — from Shopify builds to custom platforms — optimized end-to-end for conversion, retention, and scale.",
    group: "Technology",
  },
  {
    slug: "user-experience-design",
    name: "User Experience Design",
    count: 6,
    icon: "monitor",
    image: IMAGES.services.ux,
    tags: [
      "User Research",
      "Wireframing & Prototyping",
      "Information Architecture",
      "Usability Testing",
      "Interaction Design",
      "Design Systems",
    ],
    tagline: "Design products people can use without thinking twice.",
    heading: {
      light: "We design for clarity,",
      muted: "not just for looks.",
    },
    description:
      "Good UX disappears — it just works. We research how people actually behave, then design flows, interfaces, and systems that remove friction at every step, so your product feels obvious the first time someone opens it.",
    group: "Visual",
  },
  {
    slug: "web-mobile-applications",
    name: "Web & Mobile Applications",
    count: 6,
    icon: "code",
    image: IMAGES.services.mobile,
    tags: [
      "Native iOS & Android Apps",
      "Cross-Platform Apps",
      "Progressive Web Apps",
      "Dashboard & SaaS UIs",
      "API Architecture",
      "App Store Deployment",
    ],
    tagline: "Ship apps that feel native, perform fast, and scale with you.",
    heading: {
      light: "We build products",
      muted: "for every screen your users hold.",
    },
    description:
      "From native iOS and Android to cross-platform builds, we engineer applications that hold up under real usage — fast, stable, and built on architecture that scales as your user base grows.",
    group: "Technology",
  },
  {
    slug: "visual-content",
    name: "Visual Content",
    count: 3,
    icon: "image",
    image: IMAGES.services.visual,
    tags: ["Product Photography", "Motion & Video", "3D Renders"],
    tagline: "Create imagery and motion that stop the scroll.",
    heading: {
      light: "We create visuals",
      muted: "that carry your brand without a single word.",
    },
    description:
      "Photography, motion, and 3D renders that do the talking your copy doesn't have to. We produce visual content built specifically for how and where your audience actually sees it.",
    group: "Visual",
  },
  {
    slug: "embedded-hardware",
    name: "Embedded & Hardware",
    count: 5,
    icon: "grid",
    image: IMAGES.services.embedding,
    tags: [
      "Firmware Development",
      "PCB Design",
      "IoT Connectivity",
      "Industrial Design",
      "Prototyping",
    ],
    tagline: "Engineer the physical products behind your digital brand.",
    heading: {
      light: "We bring brands",
      muted: "into the physical world.",
    },
    description:
      "From firmware to enclosure, we design and engineer connected hardware end-to-end — prototyping, testing, and manufacturing-ready documentation for products that need to work in the real world, not just on a screen.",
    group: "Technology",
  },
];

export const servicesByCategory = services.reduce<Record<string, Service>>(
  (acc, s) => {
    acc[s.slug] = s;
    return acc;
  },
  {}
);
