import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import CraftingBanner from "@/components/CraftingBanner";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioProjects } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A curated collection of Cortexsys projects across brand strategy, visual identity, web design, development, and visual content.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio - Cortexsys",
    description:
      "A curated collection of Cortexsys projects across brand strategy, visual identity, web design, development, and visual content.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="bg-off-white pt-40 text-black">
        <section className="px-6 pb-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl leading-tight md:text-5xl">
                <span className="text-black">
                  More then one hundred projects delivered. A selection of the work
                </span>{" "}
                <span className="text-black/40">
                  we are most proud of, across strategy, design, and technology.
                </span>
              </h1>
            </div>
            <p className="text-sm leading-relaxed text-black/50 md:text-right">
              A curated collection of projects across brand strategy, visual identity,
              web design, development, and visual content. Each project here represents
              a specific brief, a specific challenge, and a specific outcome.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
            {portfolioProjects.map((project) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <CraftingBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
