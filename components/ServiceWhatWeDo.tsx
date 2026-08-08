"use client";

import type { Service } from "@/lib/data/services";
import { motion } from "framer-motion";
import { useState } from "react";
import { DotDiamondIcon } from "./Icons";

export default function ServiceWhatWeDo({ service }: { service: Service }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-off-white px-6 py-32 text-black">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-10 text-black/50">What We Do</p>

        <div onMouseLeave={() => setHovered(null)} className="flex flex-col">
          {service.tags.map((tag) => {
            const isActive = hovered === tag;
            return (
              <div
                key={tag}
                onMouseEnter={() => setHovered(tag)}
                className="relative isolate flex cursor-default items-center justify-between border-b border-black/10 px-6 py-5"
              >
                {isActive && (
                  <motion.span
                    layoutId="what-we-do-pill"
                    className="absolute inset-0 -z-10 bg-black"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span
                  className={`relative z-10 text-lg transition-colors duration-150 ${isActive ? "text-white" : "text-black"
                    }`}
                >
                  {tag}
                </span>
                <DotDiamondIcon
                  className={`relative z-10 transition-colors duration-150 ${isActive ? "text-white" : "text-black/30"
                    }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
