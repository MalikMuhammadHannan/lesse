import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import ScrollBackground from "@/components/ScrollBackground";
import StartProjectButton from "@/components/ui/StartProjectButton";
import LOGO from "@/public/images/white-logo.png";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, TITLE } from "@/lib/seo";

const grotesk = Inter_Tight({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s - ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "design agency",
    "brand strategy",
    "brand identity",
    "web development",
    "digital product studio",
    "UX design",
    "eCommerce development",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  // No site-wide canonical: it would be inherited by any route that forgets
  // its own. Pages set theirs via pageMetadata() in lib/seo.ts.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  // No site-wide robots tag: index/follow is the default, and an explicit one
  // conflicts with the noindex Next.js adds to 404 pages.
  verification: {
    google: "TQP0S66elXqZF59LwmRMj_-TeUuoX62Iu-qzsSxiyaA",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}${LOGO.src}`,
      description: SITE_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Islamabad",
        addressCountry: "PK",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-white">
        {children}
        <ScrollBackground />
        <StartProjectButton />
        <JsonLd data={siteJsonLd} />
      </body>
    </html>
  );
}
