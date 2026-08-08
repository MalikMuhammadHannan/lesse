import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { news } from "@/lib/data/news";

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="pt-40">
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <p className="eyebrow mb-10">Latest News</p>
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
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-medium text-white">{article.title}</h3>
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
