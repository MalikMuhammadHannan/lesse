import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import StartProjectButton from "@/components/ui/StartProjectButton";

const grotesk = Inter_Tight({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lesse — Design & Technology Studio",
  description:
    "Lesse is a design and technology studio based in Italy. We deliver holistic brand identity & digital experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-near-black text-white">
        {children}
        <StartProjectButton />
      </body>
    </html>
  );
}
