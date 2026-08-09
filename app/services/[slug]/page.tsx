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

  return {
    title: service.name,
    description: service.tagline,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} - Cortexsys`,
      description: service.tagline,
      url: `/services/${service.slug}`,
      images: [{ url: service.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} - Cortexsys`,
      description: service.tagline,
      images: [service.image],
    },
  };
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
