import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { services, servicesByCategory } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesByCategory[slug];
  if (!service) notFound();

  return (
    <>
      <Header />
      <main className="pt-40">
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <p className="eyebrow mb-6">Our Services</p>
          <h1 className="mb-10 max-w-2xl text-5xl leading-tight">{service.name}</h1>

          <div className="relative mb-12 aspect-16/9 w-full overflow-hidden rounded-3xl">
            <Image src={service.image} alt={service.name} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.tags.map((tag) => (
              <div
                key={tag}
                className="rounded-xl border border-white/8 bg-dark-card px-5 py-4 text-white/90"
              >
                {tag}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="#contact" variant="light">
              Start a Project
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
