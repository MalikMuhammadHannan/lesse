import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { portfolioProjects } from "@/lib/data/portfolio";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="pt-40">
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <p className="eyebrow mb-6">Latest Work</p>
          <h1 className="mb-10 text-5xl leading-tight">{project.title}</h1>

          <div className="relative mb-12 aspect-16/9 w-full overflow-hidden rounded-3xl">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>

          <div className="flex gap-16">
            <div>
              <p className="eyebrow mb-1">Location</p>
              <p className="text-sm font-semibold uppercase text-white">{project.location}</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Industry</p>
              <p className="text-sm font-semibold uppercase text-white">{project.industry}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
