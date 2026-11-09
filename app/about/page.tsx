import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AboutHero from "@/components/AboutHero";
import AboutScrollImage from "@/components/AboutScrollImage";
import AboutValues from "@/components/AboutValues";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Cortexsys is a design and technology studio based in Islamabad, built on strategy, craft, and engineering to help brands grow.",
  path: "/about",
});

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
