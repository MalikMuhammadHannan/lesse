"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/data/news";
import Button from "./ui/Button";

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-dark-card text-white transition-colors hover:bg-white hover:text-black"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function LatestNews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    trackRef.current?.scrollBy({
      left: dir === "next" ? 520 : -520,
      behavior: "smooth",
    });
  };

  return (
    <section id="news" className="bg-black py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <p className="eyebrow">Latest News</p>
          <div className="flex gap-3">
            <ArrowButton direction="prev" onClick={() => scroll("prev")} />
            <ArrowButton direction="next" onClick={() => scroll("next")} />
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4"
      >
        {news.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group relative flex h-[360px] w-[680px] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/8 bg-dark-card"
          >
            <div className="relative z-10 flex w-[45%] flex-col justify-between p-8">
              <div>
                <h3 className="text-2xl font-medium leading-tight text-white">
                  {article.title}
                </h3>
              </div>
              <p className="text-sm text-muted">{article.date}</p>
            </div>
            <div className="relative w-[55%]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="/insights" variant="outline">
          View all news
        </Button>
      </div>
    </section>
  );
}
