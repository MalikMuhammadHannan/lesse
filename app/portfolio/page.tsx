import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import CraftingBanner from "@/components/CraftingBanner";
import PortfolioGrid from "@/components/PortfolioGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Featured case studies across brand strategy, brand identity, web development, and eCommerce: the standard Cortexsys builds to.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section data-bg="light" className="bg-off-white px-6 pb-32 pt-40 text-black">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <p className="eyebrow mb-4 text-black/50">Featured Case Studies</p>
                <h1 className="text-4xl leading-tight md:text-5xl">
                  <span className="text-black">The standard we build to,</span>{" "}
                  <span className="text-black/40">
                    across strategy, design, and technology.
                  </span>
                </h1>
              </div>
              <p className="text-sm leading-relaxed text-black/50 md:self-end md:text-right">
                Benchmark work from leading independent studios across brand strategy,
                identity, web development, and eCommerce. Each one a specific brief, a
                specific challenge, and a specific outcome. Credits are listed on every
                project.
              </p>
            </div>

            <PortfolioGrid />
          </div>
        </section>

        <CraftingBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
