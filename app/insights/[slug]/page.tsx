import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { news } from "@/lib/data/news";

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

  return {
    title: article.title,
    description: `${article.title} — insights from Cortexsys.`,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: `${article.title} — insights from Cortexsys.`,
      url: `/insights/${article.slug}`,
      images: [{ url: article.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: `${article.title} — insights from Cortexsys.`,
      images: [article.image],
    },
  };
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
            <Image src={article.image} alt={article.title} fill className="object-cover" />
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
