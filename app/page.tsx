import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ClientLogosToPortfolio from "@/components/ClientLogosToPortfolio";
import LatestWork from "@/components/LatestWork";
import Testimonials from "@/components/Testimonials";
import LatestNews from "@/components/LatestNews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <ClientLogosToPortfolio />
        <LatestWork />
        <Testimonials />
        <LatestNews />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
