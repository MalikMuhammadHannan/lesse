"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { news, type NewsArticle } from "@/lib/data/news";
import Button from "./ui/Button";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function NewsCard({ article, index }: { article: NewsArticle; index: number }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group relative flex h-110 w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/8 bg-dark-card sm:w-110 md:h-105 md:w-180 md:flex-row"
    >
      <div className="relative h-1/2 w-full overflow-hidden md:order-2 md:h-full md:w-[55%]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 768px) 400px, 82vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent md:bg-linear-to-r" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-between p-7 md:w-[45%] md:p-9">
        <div>
          <span className="text-sm font-medium tabular-nums text-white/30">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-2xl font-medium leading-tight text-white md:text-[28px]">
            {article.title}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted">{article.date}</p>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

function ViewAllCard() {
  return (
    <Link
      href="/insights"
      className="group flex h-110 w-[60vw] shrink-0 snap-start flex-col items-center justify-center gap-6 rounded-3xl border border-dashed border-white/15 text-white transition-colors hover:border-white/40 sm:w-[320px] md:h-105"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-110">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-lg font-medium">View all insights</span>
    </Link>
  );
}

export default function LatestNews() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const [pinned, setPinned] = useState(false);

  // Pin + scroll horizontally on md+ screens; native swipe elsewhere.
  useIsoLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const measure = () => {
      const enabled = mq.matches && !reduceMotion;
      setPinned(enabled);
      const track = trackRef.current;
      setDistance(track ? Math.max(0, track.scrollWidth - window.innerWidth) : 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 140, damping: 30, mass: 0.4 });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  const isPinned = pinned && distance > 0;

  return (
    <section
      ref={sectionRef}
      id="news"
      data-bg="dark"
      className="relative bg-black"
      style={isPinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div
        className={
          isPinned
            ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
            : "py-32"
        }
      >
        <div className="mx-auto mb-12 flex w-full max-w-6xl items-end justify-between gap-6 px-6">
          <div>
            <p className="eyebrow mb-4">Latest News</p>
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
              Ideas, insights & industry thinking
            </h2>
          </div>
          {isPinned && (
            <div className="hidden w-48 md:block" aria-hidden>
              <div className="h-px w-full bg-white/15">
                <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-white" />
              </div>
              <p className="mt-3 text-right text-xs uppercase tracking-wide text-white/40">Scroll</p>
            </div>
          )}
        </div>

        <motion.div
          ref={trackRef}
          style={isPinned ? { x } : undefined}
          className={`flex gap-6 px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] ${
            isPinned
              ? "w-max will-change-transform"
              : "no-scrollbar snap-x snap-mandatory scroll-px-6 overflow-x-auto pb-4"
          }`}
        >
          {news.map((article, i) => (
            <NewsCard key={article.slug} article={article} index={i} />
          ))}
          <ViewAllCard />
        </motion.div>

        {!isPinned && (
          <div className="mt-12 flex justify-center px-6">
            <Button href="/insights" variant="outline">
              View all news
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
