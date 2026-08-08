import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import StartProjectButton from "@/components/ui/StartProjectButton";
import LOGO from "@/public/images/white-logo.png";


const grotesk = Inter_Tight({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_NAME = "Cortexsys";
const SITE_DESCRIPTION =
  "Cortexsys is a design and technology studio based in Islamabad. We deliver holistic brand identity & digital experiences.";
const SITE_URL = "https://cortexsys.studio";
const TITLE = `${SITE_NAME} — Design & Technology Studio`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${SITE_NAME}`,
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
  icons: {
    icon: LOGO.src,
    shortcut: LOGO.src,
    apple: LOGO.src,
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-white">
        {children}
        <StartProjectButton />
      </body>
    </html>
  );
}
