import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [{ url: LOGO.src, width: LOGO.width, height: LOGO.height }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
    images: [LOGO.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO.src}`,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-white">
        {children}
        <StartProjectButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
