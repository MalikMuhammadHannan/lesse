"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { serviceWork, type ServiceWork } from "@/lib/data/service-work";
import { services } from "@/lib/data/services";
import { WorkModal } from "./ServiceWorkGrid";

type Size = "large" | "wide" | "tall" | "small";

// Bento layout on the 4-column (lg) grid:
//   a a b b
//   a a c ★
//   e f c g
//   h h i i
// ★ = "Explore services" tile. Below lg, tiles flow densely in 2 columns.
const TILES: { service: string; slug: string; size: Size; place: string }[] = [
  { service: "ecommerce", slug: "cambridge-satchel", size: "large", place: "lg:col-start-1 lg:row-start-1" },
  { service: "brand-strategy", slug: "yfs", size: "wide", place: "lg:col-start-3 lg:row-start-1" },
  { service: "web-development", slug: "shine", size: "tall", place: "lg:col-start-3 lg:row-start-2" },
  { service: "brand-identity", slug: "bettersip", size: "small", place: "lg:col-start-1 lg:row-start-3" },
  { service: "brand-strategy", slug: "sapia", size: "small", place: "lg:col-start-2 lg:row-start-3" },
  { service: "ecommerce", slug: "muc-off", size: "small", place: "lg:col-start-4 lg:row-start-3" },
  { service: "brand-identity", slug: "homestead-and-co", size: "wide", place: "lg:col-start-1 lg:row-start-4" },
  { service: "web-development", slug: "m1-corridor", size: "wide", place: "lg:col-start-3 lg:row-start-4" },
];

const SPAN: Record<Size, string> = {
  large: "col-span-2 row-span-2",
  wide: "col-span-2",
  tall: "row-span-2",
  small: "",
};

const SIZES: Record<Size, string> = {
  large: "(min-width: 1024px) 576px, 100vw",
  wide: "(min-width: 1024px) 576px, 100vw",
  tall: "(min-width: 1024px) 288px, 50vw",
  small: "(min-width: 1024px) 288px, 50vw",
};

type Tile = { work: ServiceWork; serviceName: string; size: Size; place: string };

const tiles: Tile[] = TILES.flatMap(({ service, slug, size, place }) => {
  const work = serviceWork[service]?.find((w) => w.slug === slug);
  const serviceName = services.find((s) => s.slug === service)?.name ?? "";
  return work ? [{ work, serviceName, size, place }] : [];
});

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkTile({ tile, index, onOpen }: { tile: Tile; index: number; onOpen: () => void }) {
  const { work, serviceName, size, place } = tile;
  const compact = size === "small";

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      {...reveal}
      transition={{ duration: 0.6, ease: "easeOut", delay: (index % 4) * 0.08 }}
      className={`group relative overflow-hidden rounded-3xl bg-dark-card text-left ${SPAN[size]} ${place}`}
    >
      <Image
        src={work.images[0]}
        alt={`${work.client} — ${work.title}`}
        fill
        sizes={SIZES[size]}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={index === 0}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 via-45% to-transparent" />

      <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] truncate rounded-full bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur md:left-5 md:top-5 md:text-[11px]">
        {serviceName}
      </span>

      <span className="absolute right-4 top-4 hidden h-9 w-9 items-center justify-center rounded-full bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:right-5 md:top-5 md:flex">
        <Arrow />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
        <h3
          className={`font-medium leading-tight text-white ${
            size === "large" ? "text-2xl md:text-4xl" : compact ? "text-base md:text-lg" : "text-xl md:text-2xl"
          }`}
        >
          {work.client}
        </h3>
        {!compact && (
          <p className={`mt-2 text-white/70 ${size === "large" ? "max-w-md text-sm md:text-base" : "line-clamp-2 text-sm"}`}>
            {work.title}
          </p>
        )}
        <p className="mt-2 text-[11px] text-white/45">Project by {work.agency}</p>
      </div>
    </motion.button>
  );
}

function ExploreTile() {
  return (
    <motion.div {...reveal} transition={{ duration: 0.6, ease: "easeOut" }} className="lg:col-start-4 lg:row-start-2">
      <Link
        href="/services"
        className="group flex h-full flex-col justify-between rounded-3xl bg-white p-5 text-black md:p-6"
      >
        <span className="text-4xl font-medium tracking-tight md:text-5xl">{services.length}</span>
        <div className="flex items-end justify-between gap-3">
          <p className="text-sm font-medium leading-snug md:text-base">Services, one team. Explore them all</p>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
            <Arrow />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function LatestWork() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + tiles.length) % tiles.length)),
    []
  );
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % tiles.length)), []);

  return (
    <section id="work" className="bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Featured Case Studies</p>
            <h2 className="max-w-xl text-3xl font-medium tracking-tight text-white md:text-4xl">
              The standard we build to, across every service
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/50">
            Benchmark work from leading independent studios. Each project is credited to the agency
            that delivered it.
          </p>
        </div>

        <div className="grid auto-rows-45 grid-flow-dense grid-cols-2 gap-3 md:auto-rows-55 md:gap-4 lg:auto-rows-60 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <WorkTile key={tile.work.slug} tile={tile} index={i} onOpen={() => setActive(i)} />
          ))}
          <ExploreTile />
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <WorkModal work={tiles[active].work} onClose={close} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </section>
  );
}
