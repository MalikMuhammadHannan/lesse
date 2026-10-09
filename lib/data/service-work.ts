// Industry case studies shown on service pages, credited to the agencies that
// delivered them (see WorkAgency). These are NOT Cortexsys projects — keep the
// agency credit visible wherever they render. Replace with Cortexsys case
// studies as they become available.

export type WorkAgency =
  | "Chello"
  | "Storyfolk"
  | "Juvo"
  | "Bammedia"
  | "Brand Refinery"
  | "Charle";

export type ServiceWork = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  agency: WorkAgency;
  sourceUrl: string;
  summary: string;
  challenge: string;
  approach: string;
  features: string[];
  deliverables: string[];
  images: string[];
  // Platform/CMS filters shown as tabs above the grid (e.g. "Shopify").
  tags?: string[];
};

export const agencySites: Record<WorkAgency, string> = {
  Chello: "https://www.chello.com.au",
  Storyfolk: "https://www.storyfolk.com.au",
  Juvo: "https://juvo.ie",
  Bammedia: "https://www.bammedia.ie",
  "Brand Refinery": "https://brandrefinery.nz",
  Charle: "https://www.charleagency.com",
};

const gallery = (service: string, slug: string, count = 6) =>
  Array.from(
    { length: count },
    (_, i) => `/images/work/${service}/${slug}/${String(i + 1).padStart(2, "0")}.webp`
  );

const brandStrategy: ServiceWork[] = [
  {
    slug: "yfs",
    client: "YFS",
    title: "Turning 150+ programs into one connected story",
    industry: "Community Services",
    agency: "Storyfolk",
    sourceUrl:
      "https://www.storyfolk.com.au/yfs-your-future-story-brand-architecture-visual-identity-case-study/",
    summary:
      "A brand architecture that unites nine service areas and 150+ programs under one human idea: Your Future Story.",
    challenge:
      "YFS had grown across housing, family violence, youth, legal, employment and financial services. With nine core areas and more than 150 programs, audiences struggled to see the breadth of the organisation or how its services connected.",
    approach:
      "Research and co-design sessions informed a simplified brand architecture and a renewed meaning for the YFS name, supported by a flexible identity built for long-term growth.",
    features: [
      "Brand architecture spanning 9 service areas",
      "Renewed name meaning: Your Future Story",
      "Co-designed with staff and community",
      "Wayfinding and signage system",
    ],
    deliverables: [
      "Research & Insights",
      "Naming",
      "Brand Architecture",
      "Messaging",
      "Visual Identity",
      "Brand Guidelines",
    ],
    images: gallery("brand-strategy", "yfs"),
  },
  {
    slug: "caleb-brown",
    client: "Caleb & Brown",
    title: "Making crypto personal",
    industry: "Finance",
    agency: "Chello",
    sourceUrl: "https://www.chello.com.au/work/caleb-brown-rebrand",
    summary:
      "Repositioning Australia's leading cryptocurrency brokerage around a human-centred service model.",
    challenge:
      "After years of national and international growth, the brokerage needed a brand that proved legitimacy and value in a market crowded with volatility, speculation and get-rich-quick noise.",
    approach:
      "Customer surveys, roundtables and stakeholder interviews surfaced the real differentiator — people-first guidance in a hard-to-navigate asset class. That insight shaped a new strategic framework and refreshed identity.",
    features: [
      "Customer & stakeholder research program",
      "People-centred strategic framework",
      "Refreshed identity built on trust and clarity",
      "Positioning for global expansion",
    ],
    deliverables: ["Research", "Strategy", "Branding", "Creative"],
    images: gallery("brand-strategy", "caleb-brown"),
  },
  {
    slug: "ind-tech",
    client: "IND Technology",
    title: "Leading the charge in global bushfire prevention",
    industry: "Technology / IoT",
    agency: "Storyfolk",
    sourceUrl:
      "https://www.storyfolk.com.au/ind-technology-branding-leading-the-charge-in-global-bushfire-prevention-through-innovative-tech/",
    summary:
      "A brand that humanises life-saving fault detection technology and supports rapid expansion into North America.",
    challenge:
      "IND Technology's Early Fault Detection platform prevents bushfires and outages, but the brand wasn't communicating that impact to utilities, governments and partners as the company scaled globally.",
    approach:
      "A new messaging framework connected the technology to real-world outcomes, carried through an identity, website and animation system designed for an international audience.",
    features: [
      "Messaging framework tied to real-world outcomes",
      "Identity built for North American expansion",
      "Website design & build",
      "Multiple Better Future Design Award wins",
    ],
    deliverables: [
      "Strategy",
      "Brand Identity",
      "Messaging Framework",
      "Website",
      "Animation",
    ],
    images: gallery("brand-strategy", "ind-tech"),
  },
  {
    slug: "sapia",
    client: "Sapia",
    title: "A human-first approach to AI",
    industry: "HR Technology",
    agency: "Chello",
    sourceUrl: "https://www.chello.com.au/work/sapia-rebrand",
    summary:
      "Renaming and rebranding PredictiveHire as Sapia ahead of expansion into the UK and USA.",
    challenge:
      "PredictiveHire had big expansion goals but a name and brand tied to a single product, with no room to grow into new markets.",
    approach:
      "Work with the executive team uncovered a purpose bigger than any feature — using data to improve human decision-making. It drove a new name, tone of voice, look and feel.",
    features: [
      "New company name: Sapia",
      "Purpose-led brand platform",
      "Distinct tone of voice",
      "Identity ready for UK & US launch",
    ],
    deliverables: ["Research", "Strategy", "Naming", "Branding", "Creative"],
    images: gallery("brand-strategy", "sapia"),
  },
  {
    slug: "gada",
    client: "Gender and Disaster Australia",
    title: "Positioning a national leader in gender and disaster",
    industry: "Not-for-profit / Research",
    agency: "Storyfolk",
    sourceUrl:
      "https://www.storyfolk.com.au/gender-and-disaster-australia-branding/",
    summary:
      "A research-led brand that gives a national authority the credibility to influence government, emergency services and academia.",
    challenge:
      "The organisation's brand was holding back its national leadership. Jargon-heavy messaging and an outdated identity made it hard to cut through with a complex network of stakeholders.",
    approach:
      "Strategy work tested whether the issue was the name, the identity or the messaging, then rebuilt all three around inclusivity, research authority and human impact.",
    features: [
      "Stakeholder-specific messaging",
      "Naming and tagline development",
      "Strategic plan and reporting templates",
      "Full brand guidelines",
    ],
    deliverables: [
      "Strategy",
      "Naming",
      "Tagline",
      "Brand Guidelines",
      "Templates",
    ],
    images: gallery("brand-strategy", "gada"),
  },
  {
    slug: "mymc",
    client: "My Muscle Chef",
    title: "A brand as fresh as the meals",
    industry: "Food & Nutrition",
    agency: "Chello",
    sourceUrl: "https://www.chello.com.au/work/mymc-rebrand",
    summary:
      "Shifting a ready-meal brand from 'supportive' to empowering in an increasingly crowded category.",
    challenge:
      "Competitors were multiplying and little set My Muscle Chef apart — even though 15% of customers drove 60% of revenue and loved the product.",
    approach:
      "Customer insight showed buyers were serious about fitness and goals. The new strategy repositioned meals as fuel for success, with a bold, high-energy identity to match.",
    features: [
      "Insight-led repositioning",
      "Brand built around loyal power users",
      "Bold verbal and visual identity",
      "Packaging and campaign rollout",
    ],
    deliverables: ["Strategy", "Branding", "Creative", "Packaging"],
    images: gallery("brand-strategy", "mymc"),
  },
  {
    slug: "coxswain",
    client: "Coxswain Alliance",
    title: "An interactive brand for a results-driven consultancy",
    industry: "Consulting",
    agency: "Storyfolk",
    sourceUrl:
      "https://www.storyfolk.com.au/coxswain-alliance-consultants-rebrand-website/",
    summary:
      "A brand and website that show an agile consultancy's process and turn expertise into leads.",
    challenge:
      "Outdated branding, no website to explain complex services, and messaging that didn't clarify a broad offering or show the firm's agile way of working.",
    approach:
      "A brand built on momentum and fluidity, a dynamic tagline, and an interactive website with infographics that make the consulting process easy to grasp.",
    features: [
      "Dynamic tagline system",
      "Interactive website with lead generation",
      "Process infographics",
      "Full brand guidelines",
    ],
    deliverables: [
      "Strategy",
      "Tagline",
      "Brand Guidelines",
      "Website Design & Build",
      "Infographics",
    ],
    images: gallery("brand-strategy", "coxswain"),
  },
  {
    slug: "qudos-bank",
    client: "Qudos Bank",
    title: "A fresh look with a nod to its roots",
    industry: "Banking",
    agency: "Chello",
    sourceUrl: "https://www.chello.com.au/work/qudos-bank-rebrand",
    summary:
      "Refreshing a customer-owned bank's identity to serve both loyal members and a younger audience.",
    challenge:
      "Formerly Qantas Credit Union, Qudos had attracted younger customers with a loud, zany brand — but what made Qudos 'Qudos' was getting lost, and long-time members felt left behind.",
    approach:
      "Refining the bank's story and voice around its customer-owned heritage, then expressing it through a calmer visual identity and a brand campaign to launch it.",
    features: [
      "Heritage-led brand story",
      "Refined tone of voice",
      "New visual identity",
      "Launch brand campaign",
    ],
    deliverables: ["Research", "Strategy", "Branding", "Creative"],
    images: gallery("brand-strategy", "qudos-bank"),
  },
  {
    slug: "wdv",
    client: "Women with Disabilities Victoria",
    title: "Redefining disability advocacy",
    industry: "Advocacy / Peak Body",
    agency: "Storyfolk",
    sourceUrl:
      "https://www.storyfolk.com.au/women-with-disabilities-victoria-branding/",
    summary:
      "A bold, accessible brand that matches WDV's role as Victoria's peak body for women with disabilities.",
    challenge:
      "The existing identity lacked impact, making it hard to amplify member voices and push the organisation's 'equity now' agenda in policy and community forums.",
    approach:
      "Co-design workshops and research grounded in lived experience produced four brand pillars, expressed through an identity that balances gravitas with approachability.",
    features: [
      "Co-design with members",
      "Four brand pillars from lived experience",
      "Accessibility-first identity incl. Braille",
      "Brochures, merch and member collateral",
    ],
    deliverables: [
      "Research & Co-design",
      "Strategy",
      "Visual Identity",
      "Print Collateral",
    ],
    images: gallery("brand-strategy", "wdv"),
  },
  {
    slug: "bridgit",
    client: "Bridgit",
    title: "Bridging brand, creative and production",
    industry: "Finance",
    agency: "Chello",
    sourceUrl: "https://www.chello.com.au/work/bridgit-rebrand-and-campaign",
    summary:
      "Repositioning a bridging-loan specialist as the modern alternative to slow, outdated lenders.",
    challenge:
      "Bridgit had the only flexible bridging loan in a category known for tedious processes, but needed positioning and an identity that made that difference obvious.",
    approach:
      "The strategy asked why life's biggest decisions should run on old processes, leading to a 'loans made for today' position, a characterful identity and an in-house produced launch campaign.",
    features: [
      "'Made for today' positioning",
      "Audience-inspired visual identity",
      "Launch campaign concept",
      "In-house production",
    ],
    deliverables: [
      "Research",
      "Strategy",
      "Branding",
      "Creative",
      "Production",
    ],
    images: gallery("brand-strategy", "bridgit"),
  },
  {
    slug: "sparkways",
    client: "Sparkways",
    title: "Brand refresh for a 137-year-old education NFP",
    industry: "Education",
    agency: "Storyfolk",
    sourceUrl:
      "https://www.storyfolk.com.au/work-old-prior-to-filters/igniting-change-sparkways-educational-nfp-brand-refresh/",
    summary:
      "Renaming TRY Australia as Sparkways and modernising its identity without losing its legacy.",
    challenge:
      "A not-for-profit supporting children since 1883 needed to honour its history while reflecting how its services had evolved.",
    approach:
      "A strategy-led refresh including a new name, logo, colour, typography and iconography, rolled out across print, digital, signage and vehicles.",
    features: [
      "Name change: TRY Australia → Sparkways",
      "Custom iconography suite",
      "Signage, murals and fleet",
      "Comprehensive brand guidelines",
    ],
    deliverables: [
      "Brand Identity",
      "Iconography",
      "Brand Guidelines",
      "Print & Digital",
      "Signage",
    ],
    images: gallery("brand-strategy", "sparkways"),
  },
  {
    slug: "indigital",
    client: "Indigital",
    title: "Reweaving a brand for what they've become",
    industry: "Cultural & Social Impact",
    agency: "Chello",
    sourceUrl:
      "https://www.chello.com.au/work/reweaving-indigitals-brand-for-what-theyve-become",
    summary:
      "Repositioning from AR/VR education provider to a bridge between First Nations communities, industry and government.",
    challenge:
      "Known for cultural education in schools, Indigital had evolved into long-term impact work with mining, communities and government — but risked being boxed in as edu-tech.",
    approach:
      "Sessions across the business mapped how each partner experiences Indigital, informing a full brand strategy, a verbal identity built on care and courage, and the 'Living Fabric' visual identity.",
    features: [
      "Full repositioning strategy",
      "Verbal identity: care and courage",
      "'Living Fabric' visual system",
      "Collateral and new website",
    ],
    deliverables: [
      "Strategy",
      "Verbal Identity",
      "Visual Identity",
      "Website",
    ],
    images: gallery("brand-strategy", "indigital"),
  },
  {
    slug: "ics",
    client: "International Conservation Society",
    title: "From brand audit to bold identity",
    industry: "Heritage & Conservation",
    agency: "Chello",
    sourceUrl:
      "https://www.chello.com.au/work/from-brand-audit-to-bold-identity-for-ics",
    summary:
      "Turning a website audit into a full brand refresh for one of Australia's leading conservation experts.",
    challenge:
      "Complex navigation, dated visuals and an identity that undersold decades of monumental heritage work.",
    approach:
      "A website audit grew into a brand audit and refresh: a refined square logo, new typography, a richer palette, and a rebuilt website focused on user experience.",
    features: [
      "Website and brand audit",
      "Refined logo, type and palette",
      "UX-led website rebuild",
      "Authoritative yet approachable tone",
    ],
    deliverables: ["Research", "Brand Audit", "Branding", "Website"],
    images: gallery("brand-strategy", "ics"),
  },
];

const webDevelopment: ServiceWork[] = [
  {
    slug: "shine",
    client: "Shine",
    title: "Three websites unified into one digital home",
    industry: "Mental Health Charity",
    agency: "Bammedia",
    sourceUrl: "https://www.bammedia.ie/work/shine",
    summary:
      "Merging a national mental health charity and its programmes into a single brand and website.",
    challenge:
      "Shine's programmes — See Change, Green Ribbon and Headline — had become better known than Shine itself. Three entities ran three separate websites, splitting awareness and making support harder to find.",
    approach:
      "Focus groups with service users, staff, board members and partners shaped a unified parent brand. The three sites were consolidated into one website that brings every programme under Shine.",
    features: [
      "3 websites consolidated into 1",
      "Stakeholder focus groups before design",
      "Programme sub-brands within one system",
      "Responsive across desktop, tablet and mobile",
    ],
    deliverables: ["Digital Strategy", "Branding", "Web Design", "Web Development"],
    images: gallery("web-development", "shine", 6),
  },
  {
    slug: "mason-wealth",
    client: "Mason Wealth Management",
    title: "A lead-generating site with custom calculators",
    industry: "Financial Services",
    agency: "Juvo",
    sourceUrl: "https://juvo.ie/project/mason-wealth-management/",
    summary:
      "Replacing an outdated site with a conversion-focused WordPress build featuring mortgage and pension calculators.",
    challenge:
      "The existing site was dated, the brand needed a refresh, and competitors offered interactive tools that Mason didn't.",
    approach:
      "Discovery and competitor review led to wireframed user journeys built around lead capture, custom-built calculators and video-first content to increase time on site.",
    features: [
      "Custom mortgage, switcher & pension calculators",
      "Wireframed user flows and customer journeys",
      "Video-led content for engagement",
      "Lead-capture CTAs throughout",
    ],
    deliverables: ["UX Design", "Web Design", "WordPress Development", "Copywriting", "Video"],
    images: gallery("web-development", "mason-wealth", 3),
  },
  {
    slug: "m1-corridor",
    client: "M1 Corridor",
    title: "Showcasing a region built for investment",
    industry: "Economic Development",
    agency: "Bammedia",
    sourceUrl: "https://www.bammedia.ie/work/m1-corridor",
    summary:
      "A custom website and refreshed brand promoting the Dublin–Belfast economic corridor to international investors.",
    challenge:
      "The region's strong performance metrics weren't being communicated effectively to companies looking for an EU and UK base.",
    approach:
      "A new identity built on four moving 'spotlights' representing talent, infrastructure, connectivity and lifestyle, carried into a custom website designed to surface key regional data.",
    features: [
      "Custom website design",
      "Interactive regional map",
      "Icon system for key metrics",
      "Mobile-first responsive build",
    ],
    deliverables: ["Brand Identity", "Custom Web Design", "Animation", "Social Templates"],
    images: gallery("web-development", "m1-corridor", 6),
  },
  {
    slug: "esma",
    client: "ESMA",
    title: "A member platform with self-service profile pages",
    industry: "Trade Association",
    agency: "Juvo",
    sourceUrl: "https://juvo.ie/project/esma/",
    summary:
      "A contemporary site for the European Sales and Marketing Association with a custom member page editor.",
    challenge:
      "The site needed to feel both prestigious and approachable for manufacturers and distributors across Europe, while letting members manage their own presence.",
    approach:
      "An asymmetrical layout, bold typography, professional video and crafted copy — plus a custom page editor so members can set colours, logos and backgrounds within the site's style.",
    features: [
      "Custom member profile page editor",
      "Brand-safe theming options for members",
      "Professional video throughout",
      "Contemporary asymmetric layout",
    ],
    deliverables: ["UX Design", "Web Design", "Web Development", "Copywriting", "Video Production"],
    images: gallery("web-development", "esma", 4),
  },
  {
    slug: "autopoint",
    client: "Autopoint",
    title: "A used-car marketplace for local dealerships",
    industry: "Automotive",
    agency: "Bammedia",
    sourceUrl: "https://www.bammedia.ie/work/autopoint",
    summary:
      "Brand and web platform where dealerships list stock directly from their internal systems.",
    challenge:
      "Launch a new platform bringing local car dealerships together online, rolling out across Ireland's major cities.",
    approach:
      "A full brand and tagline, then a website integrated with First Citizen's internal listing system so dealers can upload stock with one click.",
    features: [
      "Integration with internal car-listing system",
      "One-click dealer stock uploads",
      "Brand, tagline and promo templates",
      "Animated promotional video",
    ],
    deliverables: ["Brand Identity", "Front-end Design", "Web Development", "Animation"],
    images: gallery("web-development", "autopoint", 4),
  },
  {
    slug: "clark",
    client: "Clark Recruitment",
    title: "Modernising recruitment with a job-portal integration",
    industry: "Recruitment",
    agency: "Juvo",
    sourceUrl: "https://juvo.ie/project/clark/",
    summary:
      "A fully optimised, responsive website for an award-winning recruiter, connected to their Bullhorn job portal.",
    challenge:
      "Clark needed to update and modernise its digital presence while staying true to strong brand guidelines and decades of reputation.",
    approach:
      "Brand workshops fed into wireframes that included an API integration with Bullhorn, with new tone-of-voice copy combined with existing photography and video.",
    features: [
      "Bullhorn job-portal API integration",
      "Brand history & vision workshops",
      "New tone-of-voice copywriting",
      "Fully optimised responsive build",
    ],
    deliverables: ["UX Design", "Web Design", "Copywriting", "Web Development"],
    images: gallery("web-development", "clark", 4),
  },
  {
    slug: "meath-made",
    client: "Meath Made",
    title: "A directory website for a craft collective",
    industry: "Arts & Craft",
    agency: "Bammedia",
    sourceUrl: "https://www.bammedia.ie/work/meath-made",
    summary:
      "Branding and a maker directory site for a collective of County Meath's contemporary designers.",
    challenge:
      "A newly formed collective needed a brand and website to showcase members' work and connect it to Meath's ancient heritage.",
    approach:
      "An identity inspired by megalithic carvings and the tagline 'Where creativity began', with a directory website profiling each maker.",
    features: [
      "Searchable maker directory",
      "Individual maker profiles",
      "Heritage-inspired visual language",
      "Social and event templates",
    ],
    deliverables: ["Brand Identity", "Web Design", "Directory Build", "Graphic Design"],
    images: gallery("web-development", "meath-made", 6),
  },
  {
    slug: "irish-girl-guides",
    client: "Irish Girl Guides",
    title: "A bright, content-rich site with a 1,000-product shop",
    industry: "Youth Organisation",
    agency: "Juvo",
    sourceUrl: "https://juvo.ie/project/irish-girl-guides/",
    summary:
      "A cheerful website with a WooCommerce shop, digitised handbook and secure unit locator.",
    challenge:
      "A large national organisation with a huge volume of content, a merchandise catalogue and private member data to protect.",
    approach:
      "Migrating a century-old handbook page by page, photographing and uploading nearly 1,000 products, and building a custom-styled, secure unit locator map.",
    features: [
      "WooCommerce shop with ~1,000 products",
      "Digitised 100-year-old handbook",
      "Secure custom unit locator map",
      "Large-scale content migration",
    ],
    deliverables: ["eCommerce", "Web Design", "Web Development"],
    images: gallery("web-development", "irish-girl-guides", 4),
  },
  {
    slug: "mckevitt-king",
    client: "McKevitt King Architects",
    title: "A magazine-style portfolio for an architecture practice",
    industry: "Architecture",
    agency: "Bammedia",
    sourceUrl: "https://www.bammedia.ie/work/mckevitt-king-architects",
    summary:
      "A bespoke portfolio site letting the practice publish projects by category with rich galleries.",
    challenge:
      "Showcase a large portfolio of new builds, renovations, conservation and education projects in a way prospective clients can easily explore.",
    approach:
      "A magazine-style CMS with predefined categories, hero shots, multiple galleries, captions and key project stats for every entry.",
    features: [
      "Category-based project CMS",
      "Hero images and multi-gallery layouts",
      "Key project statistics per entry",
      "Easy-to-navigate back catalogue",
    ],
    deliverables: ["Web Design", "Web Development", "CMS"],
    images: gallery("web-development", "mckevitt-king", 3),
  },
  {
    slug: "fenestrapro",
    client: "FenestraPro",
    title: "Rebuilding a React site in an SEO-friendly CMS",
    industry: "Construction Tech",
    agency: "Juvo",
    sourceUrl: "https://juvo.ie/project/fenestrapro/",
    summary:
      "Migrating a hard-to-edit React site into WordPress so the team could own content and rank better.",
    challenge:
      "The site was built in React, leaving the internal team with little editing control and limiting SEO for their target audience.",
    approach:
      "The design was rebuilt in WordPress to closely match the original. React animations became embedded video, with custom HTML/CSS for the rest — all managed from the CMS.",
    features: [
      "React → WordPress migration",
      "Full CMS control for the internal team",
      "SEO-friendly rebuild",
      "Motion graphics converted to video",
    ],
    deliverables: ["Web Design", "Web Development", "Motion Graphics"],
    images: gallery("web-development", "fenestrapro", 4),
  },
  {
    slug: "first-citizen",
    client: "First Citizen Finance",
    title: "Long-term digital partner for a finance provider",
    industry: "Financial Services",
    agency: "Bammedia",
    sourceUrl: "https://www.bammedia.ie/work/first-citizen",
    summary:
      "Website design and development, apps and ongoing brand management for an Irish finance provider since 2015.",
    challenge:
      "Maintain a consistent, strong brand across car, agri, asset and commercial property finance — online and offline.",
    approach:
      "A long-term partnership covering website design and development, finance calculators, multiple apps, campaigns and day-to-day design.",
    features: [
      "Website design & development",
      "Finance calculator tools",
      "Multiple app developments",
      "Ongoing brand management",
    ],
    deliverables: ["Web Design", "Web Development", "App Development", "Animation"],
    images: gallery("web-development", "first-citizen", 5),
  },
  {
    slug: "screenvend",
    client: "ScreenVend",
    title: "A multilingual, video-led site for global retail tech",
    industry: "Retail Technology",
    agency: "Juvo",
    sourceUrl: "https://juvo.ie/project/screenvend/",
    summary:
      "A colourful, interactive website demonstrating an omnichannel retail platform to a worldwide audience.",
    challenge:
      "A Dublin-headquartered software company with global customers needed to show what its product does and reach users in multiple languages.",
    approach:
      "Video throughout to demonstrate the solution, a multilingual setup, and a simple, colourful design with interactions wrapped around the content.",
    features: [
      "Multilingual website",
      "Product demo video throughout",
      "Custom interactions",
      "Responsive across devices",
    ],
    deliverables: ["Web Design", "Web Development"],
    images: gallery("web-development", "screenvend", 4),
  },
  {
    slug: "sound-insurance",
    client: "Sound Insurance",
    title: "'You're safe with Sound' — copy-led web design",
    industry: "Insurance",
    agency: "Juvo",
    sourceUrl: "https://juvo.ie/project/sound-insurance/",
    summary:
      "A new tagline, full-site copy and a CTA-focused website for an Irish business insurer.",
    challenge:
      "Many services and sectors to cover without overwhelming visitors, all within existing brand guidelines.",
    approach:
      "Crafted copy for the entire site, including the tagline 'You're safe with Sound', and a layout that leads visitors quickly to clear calls to action.",
    features: [
      "New tagline and full-site copy",
      "CTA-focused page structure",
      "Built on existing brand guidelines",
      "Video testimonial content",
    ],
    deliverables: ["UX Design", "Web Design", "Copywriting", "Web Development"],
    images: gallery("web-development", "sound-insurance", 4),
  },
];

const BR = "https://brandrefinery.nz";

const brandIdentity: ServiceWork[] = [
  {
    slug: "cleland-hancox",
    client: "Cleland Hancox",
    title: "A modern, people-focused identity for an established accounting firm",
    industry: "Accounting",
    agency: "Brand Refinery",
    sourceUrl: `${BR}/cleland-hancox/`,
    summary:
      "A refreshed identity, office signage and website for a long-standing Waikato accounting firm.",
    challenge:
      "A well-established firm needed to look modern and approachable while keeping its professional standing — and had just moved into new offices.",
    approach:
      "The rebrand was built on four attributes: refined, high standard, honest and approachable. A custom 'H' inspired by the Waikato River anchors the logo, supported by a palette of trusted blues and greens.",
    features: [
      "Custom 'H' monogram inspired by the Waikato River",
      "Glass-door decals that work open or closed",
      "Blue and green palette for trust and growth",
      "Streamlined, client-friendly website",
    ],
    deliverables: ["Creative Strategy", "Brand Design", "Stationery", "Signage", "Website"],
    images: gallery("brand-identity", "cleland-hancox"),
  },
  {
    slug: "bettersip",
    client: "BetterSip",
    title: "Launching a wellness brand from name to shelf",
    industry: "Health & Wellness",
    agency: "Brand Refinery",
    sourceUrl: `${BR}/bettersip/`,
    summary:
      "Naming and a strategy-led identity for an Australian filtered water bottle startup.",
    challenge:
      "A new brand entering the crowded wellness and sustainability market needed to feel premium yet approachable to health-conscious 40–50 year olds from day one.",
    approach:
      "Business naming and creative strategy led to a clean logo with a custom icon combining the ideas of sip, water drops and infinity, with soft lettering and a palette of watery blues.",
    features: [
      "Business naming",
      "Custom icon: sip + water drop + infinity",
      "Premium yet approachable lettering",
      "Packaging, stickers and outdoor advertising",
    ],
    deliverables: ["Business Naming", "Creative Strategy", "Brand Design", "Collateral"],
    images: gallery("brand-identity", "bettersip"),
  },
  {
    slug: "homestead-and-co",
    client: "Homestead & Co",
    title: "A natural lifestyle brand built to grow",
    industry: "Lifestyle & Natural Products",
    agency: "Brand Refinery",
    sourceUrl: `${BR}/homestead-and-co/`,
    summary:
      "Renaming 'All Things Spice' as an umbrella brand for skincare, teas, workshops and garden experiences.",
    challenge:
      "The business had outgrown its original name and needed one brand to unify an expanding range of products and experiences.",
    approach:
      "A new umbrella name and a simple, homely, natural identity — clean typography, spacious layouts, hand-drawn botanical details and an earthy palette carried into packaging and print.",
    features: [
      "New umbrella brand name",
      "Hand-drawn botanical pattern",
      "Earthy, tactile colour palette",
      "Packaging and merchandise rollout",
    ],
    deliverables: ["Business Naming", "Brand Design", "Packaging"],
    images: gallery("brand-identity", "homestead-and-co"),
  },
  {
    slug: "signature-catering",
    client: "Signature Catering",
    title: "Spinning a catering arm into its own premium brand",
    industry: "Hospitality",
    agency: "Brand Refinery",
    sourceUrl: `${BR}/signature-catering-brand-design/`,
    summary:
      "Naming and identity for the catering side of an established café business in South Auckland.",
    challenge:
      "Catering was a successful part of a café business, but it had no brand of its own to market to event clients.",
    approach:
      "A dedicated brand named after the owner's signature touches, built on four values — delightful, special, fresh/modern, quality — with luxe neutrals, black and rose-gold foil.",
    features: [
      "New brand name and sub-logo",
      "Rose-gold foil and debossed finishes",
      "Rolled out on uniforms, labels and a drinks cart",
      "Comprehensive brand guidelines",
    ],
    deliverables: ["Business Naming", "Brand Design", "Website", "Packaging", "Publications"],
    images: gallery("brand-identity", "signature-catering"),
  },
  {
    slug: "georgia-kirkham",
    client: "Georgia Kirkham",
    title: "A fashion-forward brand for a modern wedding celebrant",
    industry: "Weddings",
    agency: "Brand Refinery",
    sourceUrl: `${BR}/georgia-kirkham/`,
    summary:
      "Turning a bold, non-traditional moodboard into a refined, distinctive personal brand.",
    challenge:
      "A high-end celebrant with strong visual instincts needed a brand as stylish and personal as her ceremonies, without losing elegance.",
    approach:
      "Bold colour preferences were balanced with a refined design system rooted in colour psychology, plus playful hand-drawn brand elements and launch content.",
    features: [
      "Dramatic, modern colour palette",
      "Custom illustrated brand elements",
      "Embossed print collateral",
      "Launch social posts and one-page website",
    ],
    deliverables: ["Creative Strategy", "Brand Design", "Website"],
    images: gallery("brand-identity", "georgia-kirkham"),
  },
  {
    slug: "waikato-river-authority",
    client: "Waikato River Authority",
    title: "Modernising an identity grounded in place",
    industry: "Environmental Governance",
    agency: "Brand Refinery",
    sourceUrl: `${BR}/waikato-river-authority-brand-design/`,
    summary:
      "A refreshed logo and custom illustration system inspired by the sculpture outside the Authority's office.",
    challenge:
      "Modernise the existing logo without losing recognition, and make the brand hold together across content-heavy reports and documents.",
    approach:
      "A refined logo plus a suite of illustrative elements drawn from a local sculpture — a flexible visual language applied across reports, signage, vehicles and email.",
    features: [
      "Refreshed logo retaining key elements",
      "Custom illustration suite",
      "Annual and strategic report design",
      "Vehicle and site signage",
    ],
    deliverables: ["Brand Design", "Illustration", "Signage", "Publications"],
    images: gallery("brand-identity", "waikato-river-authority"),
  },
  {
    slug: "deer-valley",
    client: "Deer Valley",
    title: "An elegant identity for a boutique wedding venue",
    industry: "Events & Venues",
    agency: "Brand Refinery",
    sourceUrl: `${BR}/deer-valley/`,
    summary:
      "Brand identity and website for a wedding, events and spa venue on a working deer farm.",
    challenge:
      "A new venue wanted to launch looking its very best and feel elegant, delightful and boutique.",
    approach:
      "A simple icon, classic serif type and generous white space, with matte black, olive green, soft blue and silver accents chosen through colour psychology.",
    features: [
      "Minimal icon with classic serif wordmark",
      "Olive, soft blue and silver palette",
      "Foil and emboss print finishes",
      "Branded wine labels and website",
    ],
    deliverables: ["Brand Identity", "Stationery", "Packaging", "Website"],
    images: gallery("brand-identity", "deer-valley"),
  },
  {
    slug: "natural-mechanics",
    client: "Natural Mechanics",
    title: "A confident rebrand for a growing therapy practice",
    industry: "Healthcare",
    agency: "Brand Refinery",
    sourceUrl: `${BR}/occupational-therapist-reband/`,
    summary:
      "A second-generation rebrand with a custom icon, new website and launch content.",
    challenge:
      "The original brand had helped the business grow, but no longer reflected the level it was operating at or where it was heading.",
    approach:
      "A refined identity anchored by a custom icon, a rebuilt website focused on clarity, and handover with brand files and video tutorials so the team can manage the brand in-house.",
    features: [
      "Custom brand icon",
      "Redesigned, easy-to-use website",
      "Rebrand launch social campaign",
      "Video tutorials for in-house brand management",
    ],
    deliverables: ["Brand Design", "Stationery", "Website", "Social Media"],
    images: gallery("brand-identity", "natural-mechanics"),
  },
  {
    slug: "picturebook",
    client: "Picturebook",
    title: "A timeless identity after 18 years",
    industry: "Interior Design",
    agency: "Brand Refinery",
    sourceUrl: `${BR}/picturebook/`,
    summary:
      "Refreshing an interior design studio's identity to feel timeless, understated and distinctive.",
    challenge:
      "Eighteen years after its last logo, the studio had outgrown its look and needed to appeal to discerning clients aged 35–65.",
    approach:
      "Classic serif typography, a neutral palette with trusted blue-greens and a deep peacock accent, and premium print treatments like textured stock and blind embossing.",
    features: [
      "Classic serif wordmark",
      "Blue-green and neutral palette",
      "Textured, embossed stationery",
      "Branded packaging and social templates",
    ],
    deliverables: ["Brand Identity", "Stationery", "Packaging", "Website"],
    images: gallery("brand-identity", "picturebook"),
  },
  {
    slug: "wel-networks",
    client: "WEL Networks",
    title: "Illustrating a century-old energy company's future",
    industry: "Energy & Utilities",
    agency: "Brand Refinery",
    sourceUrl: `${BR}/wel-networks/`,
    summary:
      "A cohesive visual identity and custom illustration system for an electricity distributor serving 160,000+ people.",
    challenge:
      "WEL wanted a brand refresh reflecting its commitment to innovation, sustainability and community.",
    approach:
      "Extensive brand guidelines and custom illustrations applied to EV wraps, charging stations, reports and magazines, plus an internal safety campaign.",
    features: [
      "Custom illustration style",
      "EV and charging-station wraps",
      "Annual and sustainability reports",
      "'Every Day Home Safe' internal campaign",
    ],
    deliverables: ["Brand Guidelines", "Illustration", "Signage", "Annual Reports"],
    images: gallery("brand-identity", "wel-networks"),
  },
];

const CH = "https://www.charleagency.com/work";
const SHOPIFY = ["Shopify"];
const SHOPIFY_PLUS = ["Shopify", "Shopify Plus"];

const ecommerce: ServiceWork[] = [
  {
    slug: "cambridge-satchel",
    client: "The Cambridge Satchel Company",
    title: "A premium Shopify Plus rebuild alongside a rebrand",
    industry: "Fashion & Leather Goods",
    agency: "Charle",
    sourceUrl: `${CH}/cambridge-satchel/`,
    summary:
      "An entirely new Shopify Plus store launched alongside the British leather brand's new identity.",
    challenge:
      "The rebrand needed a store that matched its premium aesthetic while keeping the purchase journey seamless, intuitive and fast.",
    approach:
      "Desktop and mobile prototypes for every step of the journey, then a custom Online Store 2.0 Shopify Plus theme integrated with a range of tech partners.",
    features: [
      "Custom Online Store 2.0 theme",
      "Desktop & mobile prototyping",
      "Tech-partner integrations",
      "Launched with a full rebrand",
    ],
    deliverables: ["UX/UI Design", "Shopify Plus Development", "Integrations"],
    images: gallery("ecommerce", "cambridge-satchel", 6),
    tags: SHOPIFY_PLUS,
  },
  {
    slug: "billionaire-boys-club",
    client: "Billionaire Boys Club",
    title: "Sub-labels and international growth on one Shopify Plus store",
    industry: "Streetwear",
    agency: "Charle",
    sourceUrl: `${CH}/billionaire-boys-club/`,
    summary:
      "Ongoing growth support for Pharrell Williams' streetwear label, including a sub-label experience and internationalisation.",
    challenge:
      "The Icecream sub-label needed its own look and feel — without the cost and SEO impact of running a separate store.",
    approach:
      "A distinct sub-area with its own colours, page structure and navigation inside the main store, plus internationalisation with Shopify Plus.",
    features: [
      "Sub-label experience within one store",
      "Shopify Plus internationalisation",
      "UI improvements and growth consultancy",
      "No separate store or SEO split",
    ],
    deliverables: ["Growth Strategy", "Shopify Design", "Shopify Development"],
    images: gallery("ecommerce", "billionaire-boys-club", 6),
    tags: SHOPIFY_PLUS,
  },
  {
    slug: "bio-and-me",
    client: "Bio&Me",
    title: "Subscriptions, quizzes and build-a-box on Shopify",
    industry: "Food & Drink",
    agency: "Charle",
    sourceUrl: `${CH}/bio-and-me/`,
    summary:
      "A from-scratch Shopify build for a gut-health brand with subscriptions and a product quiz.",
    challenge:
      "A full new website with complex requirements: subscriptions, a build-your-own box, a stockist page, a custom cart and a product quiz.",
    approach:
      "In-depth discovery, then a bespoke theme integrating Recharge for subscriptions and build-a-box, plus an Octane AI quiz — all optimised for performance.",
    features: [
      "Recharge subscriptions & build-a-box",
      "Octane AI product quiz",
      "Custom cart and stockist page",
      "Improved conversion rate after launch",
    ],
    deliverables: ["Shopify Theme Design", "Shopify Development", "Integrations"],
    images: gallery("ecommerce", "bio-and-me", 6),
    tags: SHOPIFY,
  },
  {
    slug: "joel-and-son",
    client: "Joel & Son",
    title: "Migrating a royal-warrant fabric house from Magento",
    industry: "Luxury Fabrics",
    agency: "Charle",
    sourceUrl: `${CH}/joel-and-son/`,
    summary:
      "Moving a legacy Magento store to Shopify Plus with a contemporary, fabric-first shopping experience.",
    challenge:
      "Customers needed to explore a vast range of fabrics online and get a sense of them as they would in store.",
    approach:
      "A full Magento → Shopify Plus migration and a custom Online Store 2.0 theme using metaobjects and custom purchase journeys.",
    features: [
      "Magento → Shopify Plus migration",
      "Fabric-first product discovery",
      "Metaobjects & custom purchase journeys",
      "Brand in full control of content",
    ],
    deliverables: ["Platform Migration", "Shopify Plus Design", "Shopify Plus Development"],
    images: gallery("ecommerce", "joel-and-son", 5),
    tags: [...SHOPIFY_PLUS, "Migrations"],
  },
  {
    slug: "hippeas",
    client: "Hippeas",
    title: "A warm, colourful Shopify store for a fast-growing snack brand",
    industry: "Food & Drink",
    agency: "Charle",
    sourceUrl: `${CH}/hippeas/`,
    summary:
      "A bespoke Shopify theme capturing the playful chickpea snack brand while maximising revenue.",
    challenge:
      "A fast-growing brand wanted its online store to express its values and personality while performing commercially.",
    approach:
      "Brand and commercial discovery, then a theme designed from scratch — no templates — built with performance and easy content management at its core.",
    features: [
      "Fully bespoke theme, no templates",
      "Playful, on-brand UI",
      "Performance-first build",
      "Easy content management",
    ],
    deliverables: ["Discovery", "Shopify Theme Design", "Shopify Development"],
    images: gallery("ecommerce", "hippeas", 6),
    tags: SHOPIFY,
  },
  {
    slug: "des-kelly",
    client: "Des Kelly Interiors",
    title: "From WordPress to Shopify Plus for a 50-year-old retailer",
    industry: "Home & Furniture",
    agency: "Charle",
    sourceUrl: `${CH}/des-kelly/`,
    summary:
      "Migrating Dublin's family-owned flooring and beds retailer to Shopify Plus with a premium new storefront.",
    challenge:
      "The online experience needed to match the sophistication of the brand's new Dublin showrooms and make a large range easy to explore.",
    approach:
      "Brand discovery, store-data analysis and interviews with in-store teams fed a new design, built on Shopify Plus as part of the platform migration.",
    features: [
      "WordPress → Shopify Plus migration",
      "Showroom-inspired premium design",
      "In-store team research",
      "Large-catalogue product discovery",
    ],
    deliverables: ["Platform Migration", "Shopify Plus Design", "Shopify Plus Development"],
    images: gallery("ecommerce", "des-kelly", 6),
    tags: [...SHOPIFY_PLUS, "Migrations"],
  },
  {
    slug: "candy-kittens",
    client: "Candy Kittens",
    title: "Seasonal campaigns and launches for a vegan sweets brand",
    industry: "Confectionery",
    agency: "Charle",
    sourceUrl: `${CH}/candy-kittens/`,
    summary:
      "Ongoing Shopify growth support: an animated homepage, BFCM and Christmas experiences, and new range launches.",
    challenge:
      "A campaign-heavy brand needed a steady stream of on-site launches that stayed on-brand and drove transactions.",
    approach:
      "A membership partnership delivering a new animated homepage, seasonal landing pages, new collection navigation, personalised reviews and a custom checkout.",
    features: [
      "Animated homepage",
      "Black Friday & Christmas experiences",
      "New range launch & navigation",
      "Featured in DesignRush's Best Designs",
    ],
    deliverables: ["Shopify Design", "Shopify Development", "CRO"],
    images: gallery("ecommerce", "candy-kittens", 6),
    tags: SHOPIFY,
  },
  {
    slug: "harbour-lifestyle",
    client: "Harbour Lifestyle",
    title: "A luxury outdoor-living store with smart features",
    industry: "Home & Garden",
    agency: "Charle",
    sourceUrl: `${CH}/harbour-lifestyle/`,
    summary:
      "A bespoke Shopify Plus store for high-end garden furniture with compare tools and geo-located services.",
    challenge:
      "Premium products needed to be shown in their best light while keeping the journey to checkout short.",
    approach:
      "A luxury theme built from the ground up with immersive video and photography, minimal UI journeys and feature-rich functionality.",
    features: [
      "Product compare",
      "Show-home referrals",
      "Geo-location for assembly services",
      "Fewer clicks to checkout",
    ],
    deliverables: ["Shopify Plus Design", "Shopify Plus Development"],
    images: gallery("ecommerce", "harbour-lifestyle", 6),
    tags: SHOPIFY_PLUS,
  },
  {
    slug: "rude-health",
    client: "Rude Health",
    title: "A story-rich store migrated from WordPress",
    industry: "Food & Drink",
    agency: "Charle",
    sourceUrl: `${CH}/rude-health/`,
    summary:
      "Moving a dairy-free brand from WordPress to Shopify while keeping recipes and brand storytelling front and centre.",
    challenge:
      "Balance rich content — recipes, values and brand identity — with a fast, convenient shopping experience.",
    approach:
      "Discovery and competitor research, wireframes mapping the customer journey, then a bespoke Shopify theme designed for desktop and mobile.",
    features: [
      "WordPress → Shopify migration",
      "Recipes and content integrated with shop",
      "Wireframed customer journeys",
      "Mobile-first design",
    ],
    deliverables: ["Platform Migration", "Shopify Theme Design", "Shopify Development"],
    images: gallery("ecommerce", "rude-health", 6),
    tags: [...SHOPIFY, "Migrations"],
  },
  {
    slug: "gilbert-rugby",
    client: "Gilbert Rugby",
    title: "Global Shopify Plus stores for a 200-year-old rugby brand",
    industry: "Sports Equipment",
    agency: "Charle",
    sourceUrl: `${CH}/gilbert-rugby/`,
    summary:
      "Overhauling Gilbert's international Shopify Plus stores with a new design and advanced features.",
    challenge:
      "The official Rugby World Cup ball supplier needed its global stores to reflect a world-famous identity across a large range.",
    approach:
      "Prototyped desktop and mobile journeys and a custom Shopify Plus theme with advanced search and a schools integration.",
    features: [
      "Global multi-store setup",
      "Advanced search",
      "Schools integration",
      "Custom Online Store 2.0 theme",
    ],
    deliverables: ["Shopify Plus Design", "Shopify Plus Development"],
    images: gallery("ecommerce", "gilbert-rugby", 4),
    tags: SHOPIFY_PLUS,
  },
  {
    slug: "islands-chocolate",
    client: "Islands Chocolate",
    title: "Telling a farm-to-bar story with on-site animation",
    industry: "Artisan Food",
    agency: "Charle",
    sourceUrl: `${CH}/islands-chocolate/`,
    summary:
      "A brand-new Shopify store for an award-winning chocolate brand that grows its own cocoa in St Vincent.",
    challenge:
      "Communicate traceability and sustainability throughout the store while hitting a set of agreed commercial KPIs.",
    approach:
      "A full brand and strategy audit, then a bespoke theme with seamless animations and a sitemap that tells the ethical supply-chain story.",
    features: [
      "Custom on-site animations",
      "Story-led sitemap",
      "KPI-driven design process",
      "Built from the ground up",
    ],
    deliverables: ["Audit", "Shopify Theme Design", "Shopify Development"],
    images: gallery("ecommerce", "islands-chocolate", 6),
    tags: SHOPIFY,
  },
  {
    slug: "au-depart",
    client: "Au Départ",
    title: "Parisian luxury trunks, relaunched on Shopify Plus",
    industry: "Luxury Fashion",
    agency: "Charle",
    sourceUrl: `${CH}/au-depart/`,
    summary:
      "A bespoke Shopify Plus build for a revived 1834 French trunk-maker, migrating from Commerce Layer and WordPress.",
    challenge:
      "A heritage luxury brand returning to market needed an online experience as refined as its products.",
    approach:
      "Full brand and ecommerce discovery, then a minimalist, product-centric design and an entirely custom Shopify theme.",
    features: [
      "Migration from Commerce Layer & WordPress",
      "Minimalist luxury design",
      "Entirely custom theme",
      "Product-centric storytelling",
    ],
    deliverables: ["Discovery", "Platform Migration", "Shopify Plus Design & Build"],
    images: gallery("ecommerce", "au-depart", 4),
    tags: [...SHOPIFY_PLUS, "Migrations"],
  },
  {
    slug: "muc-off",
    client: "Muc-Off",
    title: "A/B-tested product pages for a global bike brand",
    industry: "Cycling & Automotive",
    agency: "Charle",
    sourceUrl: `${CH}/muc-off/`,
    summary:
      "Ongoing CRO and design support, including an editorial product page validated with a 50/50 split test.",
    challenge:
      "Launching a new mobile pressure washer needed a product page that educated and captivated visitors.",
    approach:
      "A bespoke editorial-style product page, tested against the previous layout in an equal-split A/B test on conversion rate and revenue.",
    features: [
      "Editorial product page template",
      "50/50 split A/B testing",
      "Higher conversion rate & revenue vs control",
      "Ongoing CRO roadmap",
    ],
    deliverables: ["CRO", "Shopify Plus Design", "Shopify Plus Development"],
    images: gallery("ecommerce", "muc-off", 5),
    tags: SHOPIFY_PLUS,
  },
  {
    slug: "royal-museums-greenwich",
    client: "Royal Museums Greenwich",
    title: "A museum shop aligned with the main brand",
    industry: "Culture & Heritage",
    agency: "Charle",
    sourceUrl: `${CH}/royal-museums-greenwich/`,
    summary:
      "A new Shopify store for the Royal Observatory, Cutty Sark, National Maritime Museum and Queen's House.",
    challenge:
      "The shop needed to feel consistent with the organisation's main website while making products easy to discover.",
    approach:
      "A structured theme-selection phase to set the foundation, then custom design and build on Shopify.",
    features: [
      "Theme selection & customisation",
      "Consistent with main museum brand",
      "Easy product discovery",
      "Part of long-term ecommerce strategy",
    ],
    deliverables: ["Shopify Store Design", "Shopify Development"],
    images: gallery("ecommerce", "royal-museums-greenwich", 4),
    tags: SHOPIFY,
  },
  {
    slug: "cleanco",
    client: "CleanCo",
    title: "A lively Shopify Plus store for alcohol-free spirits",
    industry: "Drinks",
    agency: "Charle",
    sourceUrl: `${CH}/cleanco/`,
    summary:
      "A custom Shopify Plus store for Spencer Matthews' non-alcoholic spirits brand.",
    challenge:
      "Bring a fun, memorable brand online while helping customers explore a wide flavour range.",
    approach:
      "Prototyped journeys and a custom Online Store 2.0 theme using metaobjects and Shopify Plus partner tech to boost discovery and order value.",
    features: [
      "Custom Online Store 2.0 theme",
      "Metaobjects for flexible content",
      "Discovery & AOV-focused UX",
      "Shopify Plus partner integrations",
    ],
    deliverables: ["Shopify Plus Design", "Shopify Plus Development"],
    images: gallery("ecommerce", "cleanco", 4),
    tags: SHOPIFY_PLUS,
  },
  {
    slug: "bart",
    client: "Bart Ingredients",
    title: "A dramatic, product-led store for a spice brand",
    industry: "Food & Drink",
    agency: "Charle",
    sourceUrl: `${CH}/bart/`,
    summary:
      "A bespoke Shopify store for a UK supermarket herbs and spices brand with a large SKU range.",
    challenge:
      "Immerse customers in a big product range and the brand's bold identity while keeping the store easy to manage.",
    approach:
      "A dark brand palette as a neutral backdrop for vibrant ingredients, every template designed for desktop and mobile, and a fully bespoke theme.",
    features: [
      "Large-SKU product navigation",
      "Recipes and content hub",
      "Every template designed for mobile",
      "Fully bespoke theme",
    ],
    deliverables: ["Shopify Design", "Shopify Theme Development"],
    images: gallery("ecommerce", "bart", 6),
    tags: SHOPIFY,
  },
  {
    slug: "111skin",
    client: "111SKIN",
    title: "A data-led CRO roadmap for luxury skincare",
    industry: "Beauty",
    agency: "Charle",
    sourceUrl: `${CH}/111skin/`,
    summary:
      "Ongoing Shopify Plus growth support with iterative, A/B-tested improvements.",
    challenge:
      "Keep growing conversion and revenue for an established luxury brand without disrupting the experience.",
    approach:
      "Audits and a CRO roadmap with each release targeting a specific KPI — better product pages, user-generated content, easier discovery — validated by split testing.",
    features: [
      "CRO roadmap",
      "Split-tested releases",
      "User-generated content",
      "Higher conversion rate, revenue & AOV",
    ],
    deliverables: ["CRO", "Shopify Plus Design", "Shopify Plus Development"],
    images: gallery("ecommerce", "111skin", 5),
    tags: SHOPIFY_PLUS,
  },
  {
    slug: "just-wears",
    client: "JustWears",
    title: "Speed and conversion for a Kickstarter-born apparel brand",
    industry: "Apparel",
    agency: "Charle",
    sourceUrl: `${CH}/just-wears/`,
    summary:
      "Performance optimisation, relaunched product pages and bundle builders for an eco-friendly underwear brand.",
    challenge:
      "A fast-growing brand needed its store to keep up — faster pages and product pages that convert better.",
    approach:
      "A membership partnership covering full performance optimisation, a relaunch of product pages and custom bundle builders.",
    features: [
      "Site speed optimisation",
      "Relaunched product pages",
      "Custom bundle builders",
      "Ongoing growth roadmap",
    ],
    deliverables: ["Performance", "Shopify Design", "Shopify Development"],
    images: gallery("ecommerce", "just-wears", 6),
    tags: SHOPIFY,
  },
  {
    slug: "gray-nicolls",
    client: "Gray-Nicolls",
    title: "Global stores for a heritage cricket brand",
    industry: "Sports Equipment",
    agency: "Charle",
    sourceUrl: `${CH}/gray-nicolls/`,
    summary:
      "Relaunching Gray-Nicolls' international Shopify Plus stores with a new custom theme.",
    challenge:
      "A brand founded in 1855 needed global stores that reflected its heritage and made a large range easy to browse.",
    approach:
      "Prototyped desktop and mobile journeys and a custom Shopify Plus theme with advanced search and a schools integration.",
    features: [
      "Global multi-store setup",
      "Advanced search",
      "Schools integration",
      "Custom Online Store 2.0 theme",
    ],
    deliverables: ["Shopify Plus Design", "Shopify Plus Development"],
    images: gallery("ecommerce", "gray-nicolls", 5),
    tags: SHOPIFY_PLUS,
  },
  {
    slug: "sunnamusk",
    client: "Sunnamusk",
    title: "Scaling a market-stall perfume brand on Shopify Plus",
    industry: "Fragrance",
    agency: "Charle",
    sourceUrl: `${CH}/sunnamusk/`,
    summary:
      "A new Shopify Plus store for an Arabic perfume brand that grew from East London market stalls.",
    challenge:
      "Support continued global growth with a seamless, customer-centric journey across a wide fragrance range.",
    approach:
      "Prototyped desktop and mobile journeys and a custom Online Store 2.0 theme with metaobjects and Shopify Plus partner integrations.",
    features: [
      "Custom Online Store 2.0 theme",
      "Customer-centric purchase journey",
      "Metaobjects for flexible content",
      "Shopify Plus partner integrations",
    ],
    deliverables: ["Shopify Plus Design", "Shopify Plus Development"],
    images: gallery("ecommerce", "sunnamusk", 4),
    tags: SHOPIFY_PLUS,
  },
  {
    slug: "warpaint",
    client: "War Paint",
    title: "Growing a men's makeup brand with better product pages",
    industry: "Beauty",
    agency: "Charle",
    sourceUrl: `${CH}/warpaint/`,
    summary:
      "An audit and growth partnership for a US men's cosmetics brand, including a new product page template.",
    challenge:
      "Improve specific KPIs on an existing store and add new features like a real-time Christmas countdown.",
    approach:
      "Store audit and strategic guidance, then a new bespoke product page template and custom features built on Shopify.",
    features: [
      "Store audit",
      "New product page template",
      "Real-time Christmas countdown",
      "More conversions, lower bounce rate",
    ],
    deliverables: ["Audit", "Shopify Design", "Shopify Development"],
    images: gallery("ecommerce", "warpaint", 6),
    tags: SHOPIFY,
  },
  {
    slug: "irish-girl-guides-shop",
    client: "Irish Girl Guides",
    title: "A WooCommerce shop with ~1,000 products",
    industry: "Youth Organisation",
    agency: "Juvo",
    sourceUrl: "https://juvo.ie/project/irish-girl-guides/",
    summary:
      "A bright WordPress site with a WooCommerce shop, digitised handbook and secure unit locator.",
    challenge:
      "A national organisation with a huge merchandise catalogue, large volumes of content and private member data.",
    approach:
      "Building a WooCommerce shop and photographing and uploading nearly 1,000 products, alongside a custom-styled, secure unit locator map.",
    features: [
      "WooCommerce shop with ~1,000 products",
      "In-house product photography",
      "Secure unit locator map",
      "Large-scale content migration",
    ],
    deliverables: ["eCommerce", "Web Design", "Web Development"],
    images: gallery("web-development", "irish-girl-guides", 4),
    tags: ["WordPress / WooCommerce"],
  },
  {
    slug: "bouchon-jewellery",
    client: "Bouchon Jewellery",
    title: "From Shopify to a WordPress ecommerce store",
    industry: "Luxury Jewellery",
    agency: "Juvo",
    sourceUrl: "https://juvo.ie/project/bouchon-jewellery/",
    summary:
      "Rebuilding a Malahide diamond jeweller's online store on WordPress with Stripe payments.",
    challenge:
      "The retailer wanted to move its Shopify store to WordPress, funded through the Trading Online Voucher grant.",
    approach:
      "A redesigned WordPress ecommerce store with a Stripe payment gateway, delivered in 4–8 weeks with the client uploading most products.",
    features: [
      "Shopify → WordPress migration",
      "Stripe payment gateway",
      "Delivered in 4–8 weeks",
      "Client-managed product catalogue",
    ],
    deliverables: ["eCommerce", "Web Design", "Web Development"],
    images: gallery("ecommerce", "bouchon-jewellery", 4),
    tags: ["WordPress / WooCommerce", "Migrations"],
  },
];

export const serviceWork: Record<string, ServiceWork[]> = {
  "brand-strategy": brandStrategy,
  "web-development": webDevelopment,
  "brand-identity": brandIdentity,
  ecommerce,
};
