import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <ServicesGrid />
      </main>
      <Footer />
    </>
  );
}
