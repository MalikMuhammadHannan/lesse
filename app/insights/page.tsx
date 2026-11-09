import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { news } from "@/lib/data/news";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights",
  description: "Ideas and perspectives from Cortexsys on branding, design, and technology.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="pt-40">
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h1 className="eyebrow mb-10">Insights &amp; Latest News</h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {news.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group overflow-hidden rounded-3xl border border-white/8 bg-dark-card"
              >
                <div className="relative aspect-16/10 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1152px) 552px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-medium text-white">{article.title}</h2>
                  <p className="text-sm text-muted">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
