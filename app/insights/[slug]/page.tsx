import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { news } from "@/lib/data/news";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) return {};

  // The article body is still placeholder copy: keep it out of the index and
  // the sitemap until the real article is published.
  return pageMetadata({
    title: article.title,
    description: `${article.title} — ideas and perspectives from Cortexsys on branding, design, and technology.`,
    path: `/insights/${article.slug}`,
    image: article.image,
    noIndex: true,
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="pt-40">
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <p className="eyebrow mb-6">{article.date}</p>
          <h1 className="mb-10 text-5xl leading-tight">{article.title}</h1>

          <div className="relative mb-12 aspect-16/9 w-full overflow-hidden rounded-3xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover"
            />
          </div>

          <p className="text-lg leading-relaxed text-muted">
            This is placeholder editorial content for {article.title}. Replace with the
            full article body once copy is finalized.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
