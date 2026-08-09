import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AboutHero from "@/components/AboutHero";
import AboutScrollImage from "@/components/AboutScrollImage";
import AboutValues from "@/components/AboutValues";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cortexsys is a design and technology studio based in Islamabad, built on strategy, craft, and engineering to help brands grow.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cortexsys",
    description:
      "Cortexsys is a design and technology studio based in Islamabad, built on strategy, craft, and engineering to help brands grow.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutScrollImage />
        <AboutValues />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
