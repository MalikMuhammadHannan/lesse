import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LatestNews from "@/components/LatestNews";
import ServiceHero from "@/components/ServiceHero";
import ServiceInPractice from "@/components/ServiceInPractice";
import ServiceIntro from "@/components/ServiceIntro";
import ServiceProcess from "@/components/ServiceProcess";
import ServiceWhatWeDo from "@/components/ServiceWhatWeDo";
import { services, servicesByCategory } from "@/lib/data/services";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesByCategory[slug];
  if (!service) return {};

  return pageMetadata({
    title: service.name,
    description: service.tagline,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesByCategory[slug];
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.name,
      description: service.description,
      url: absoluteUrl(path),
      image: absoluteUrl(service.image),
      provider: { "@id": `${SITE_URL}/#organization` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: service.name,
        itemListElement: service.tags.map((tag) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: tag },
        })),
      },
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.name, path },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <ServiceHero service={service} />
        <ServiceIntro service={service} />
        <ServiceWhatWeDo service={service} />
        <ServiceProcess />
        <ServiceInPractice service={service} />
        <LatestNews />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
