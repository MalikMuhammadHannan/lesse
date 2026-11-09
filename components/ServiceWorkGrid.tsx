"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { ServiceWork } from "@/lib/data/service-work";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WorkCard({
  work,
  featured,
  onOpen,
}: {
  work: ServiceWork;
  featured: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group block text-left ${featured ? "md:col-span-2" : ""}`}
    >
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-black/5 ${featured ? "aspect-4/3 md:aspect-21/9" : "aspect-4/3"
          }`}
      >
        <Image
          src={work.images[0]}
          alt={`${work.client} — ${work.title}`}
          fill
          sizes={featured ? "(min-width: 1152px) 1152px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-6 right-6 inline-flex translate-y-2 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Project
          <Arrow />
        </span>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-6">
        <div>
          <h3 className="text-2xl font-medium text-black">{work.client}</h3>
          <p className="mt-1 text-sm text-black/60">{work.title}</p>
        </div>
        <div className="max-w-[45%] shrink-0 text-right">
          <p className="eyebrow mb-1 text-black/40">Industry</p>
          <p className="text-sm font-semibold uppercase text-black">{work.industry}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-black/40">
        {work.tags?.length ? `${work.tags.filter((t) => t !== "Migrations").at(-1)} · ` : ""}
        Work by {work.agency}
      </p>
    </button>
  );
}

export function WorkModal({
  work,
  onClose,
  onPrev,
  onNext,
}: {
  work: ServiceWork;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    // Lock page scroll and hide its scrollbar; pad by the scrollbar's width so
    // the page underneath doesn't shift, and restore the exact scroll position.
    const root = document.documentElement;
    const body = document.body;
    const prev = { root: root.style.overflow, body: body.style.overflow, pad: body.style.paddingRight };
    const scrollY = window.scrollY;
    const scrollbar = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev.root;
      body.style.overflow = prev.body;
      body.style.paddingRight = prev.pad;
      window.scrollTo({ top: scrollY, behavior: "instant" });
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  const [hero, ...rest] = work.images;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="no-scrollbar fixed inset-0 z-100 overflow-y-auto overscroll-contain bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${work.client} case study`}
    >
      <motion.article
        key={work.slug}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto my-6 w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-3xl bg-off-white text-black md:my-12"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative aspect-video w-full bg-black/5">
          <Image src={hero} alt={work.client} fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" priority />
        </div>

        <div className="px-6 py-10 md:px-12 md:py-14">
          <p className="eyebrow mb-4 text-black/50">
            {work.client} · {work.industry}
          </p>
          {work.tags?.length ? (
            <div className="mb-5 flex flex-wrap gap-2">
              {work.tags.map((t) => (
                <span key={t} className="rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
          <h2 className="max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">{work.title}</h2>
          <p className="mt-6 max-w-2xl text-lg text-black/70">{work.summary}</p>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-3 text-black/40">The Challenge</p>
              <p className="leading-relaxed text-black/80">{work.challenge}</p>
            </div>
            <div>
              <p className="eyebrow mb-3 text-black/40">The Approach</p>
              <p className="leading-relaxed text-black/80">{work.approach}</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="eyebrow mb-5 text-black/40">Key Features</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {work.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <p className="eyebrow mb-4 text-black/40">Deliverables</p>
            <div className="flex flex-wrap gap-2">
              {work.deliverables.map((d) => (
                <span key={d} className="rounded-full border border-black/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {rest.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl bg-black/5 ${i === 0 || (i === rest.length - 1 && rest.length % 2 === 0)
                    ? "aspect-video sm:col-span-2"
                    : "aspect-4/3"
                  }`}
              >
                <Image src={src} alt={`${work.client} project image ${i + 2}`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>



          <div className="mt-8 flex items-center justify-between">
            <button type="button" onClick={onPrev} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-black/60 hover:text-black">
              <Arrow className="-rotate-135" /> Previous
            </button>
            <button type="button" onClick={onNext} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-black/60 hover:text-black">
              Next <Arrow className="rotate-45" />
            </button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function platformFilters(works: ServiceWork[]) {
  const counts = new Map<string, number>();
  works.forEach((w) => w.tags?.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

export default function ServiceWorkGrid({ works }: { works: ServiceWork[] }) {
  const filters = useMemo(() => platformFilters(works), [works]);
  const [filter, setFilter] = useState<string | null>(null);
  const visible = useMemo(
    () => (filter ? works.filter((w) => w.tags?.includes(filter)) : works),
    [works, filter]
  );

  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length]
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length]
  );

  const tabs: [string | null, string, number][] = [
    [null, "All", works.length],
    ...filters.map(([tag, count]): [string, string, number] => [tag, tag, count]),
  ];

  return (
    <>
      {filters.length > 0 && (
        <div className="-mx-6 mb-12 overflow-x-auto px-6 md:mx-0 md:px-0" role="tablist" aria-label="Filter by platform">
          <div className="flex w-max gap-2 md:w-auto md:flex-wrap">
            {tabs.map(([value, label, count]) => {
              const selected = filter === value;
              return (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={(e) => {
                    setFilter(value);
                    e.currentTarget.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
                  }}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors ${selected
                      ? "border-black bg-black text-white"
                      : "border-black/15 text-black/70 hover:border-black/40 hover:text-black"
                    }`}
                >
                  {label}
                  <span className={selected ? "text-white/50" : "text-black/35"}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
        {visible.map((work, i) => (
          <WorkCard
            key={work.slug}
            work={work}
            featured={i === 0 && visible.length % 2 === 1}
            onOpen={() => setActive(i)}
          />
        ))}
      </div>

      <AnimatePresence>
        {active !== null && visible[active] && (
          <WorkModal work={visible[active]} onClose={close} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </>
  );
}
