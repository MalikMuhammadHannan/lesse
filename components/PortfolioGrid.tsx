"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { serviceWork, type ServiceWork } from "@/lib/data/service-work";
import { services } from "@/lib/data/services";
import { WorkCard, WorkModal } from "./ServiceWorkGrid";

type Entry = { work: ServiceWork; service: string };

// Every case study across all services, de-duplicated by slug.
const entries: Entry[] = (() => {
  const seen = new Set<string>();
  return Object.entries(serviceWork).flatMap(([service, works]) =>
    works.flatMap((work) => {
      if (seen.has(work.slug)) return [];
      seen.add(work.slug);
      return [{ work, service }];
    })
  );
})();

const tabs: { value: string | null; label: string; count: number }[] = [
  { value: null, label: "All", count: entries.length },
  ...services.flatMap((s) => {
    const count = entries.filter((e) => e.service === s.slug).length;
    return count ? [{ value: s.slug, label: s.name, count }] : [];
  }),
];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<string | null>(null);
  const visible = useMemo(
    () => (filter ? entries.filter((e) => e.service === filter) : entries).map((e) => e.work),
    [filter]
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

  return (
    <>
      <div className="-mx-6 mb-12 overflow-x-auto px-6 md:mx-0 md:px-0" role="tablist" aria-label="Filter by service">
        <div className="flex w-max gap-2 md:w-auto md:flex-wrap">
          {tabs.map(({ value, label, count }) => {
            const selected = filter === value;
            return (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={(e) => {
                  setFilter(value);
                  setActive(null);
                  e.currentTarget.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
                }}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  selected
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
