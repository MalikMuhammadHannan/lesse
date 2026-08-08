import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AboutHero from "@/components/AboutHero";
import AboutScrollImage from "@/components/AboutScrollImage";
import AboutValues from "@/components/AboutValues";

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
