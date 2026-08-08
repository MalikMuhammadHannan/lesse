import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import ServiceGroupSection from "@/components/ServiceGroupSection";
import type { ServiceGroup } from "@/lib/data/services";

const GROUPS: ServiceGroup[] = ["Strategy", "Visual", "Technology"];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-off-white pt-40 text-black">
        <section className="px-6 pb-10">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-6 text-black/50">Our Services</p>
            <h1 className="max-w-3xl text-4xl leading-tight md:text-5xl">
              <span className="text-black">
                Lesse is a design and technology studio.
              </span>{" "}
              <span className="text-black/40">
                We build digital products, from concept to production.
              </span>
            </h1>
            <div className="mt-8">
              <Button href="/#contact" variant="dark">
                Discuss The Project
              </Button>
            </div>
          </div>
        </section>

        {GROUPS.map((group) => (
          <ServiceGroupSection key={group} group={group} />
        ))}
      </main>
      <Footer />
    </>
  );
}
