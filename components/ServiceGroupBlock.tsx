"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/lib/data/services";
import { ServiceIcon, DotDiamondIcon } from "./Icons";

export default function ServiceGroupBlock({ service }: { service: Service }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 md:items-start">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
        <Image src={service.image} alt={service.name} fill className="object-cover" />
      </div>

      <div>
        <div className="mb-4 flex items-center gap-3">
          <ServiceIcon icon={service.icon} className="text-black/60" />
          <Link
            href={`/services/${service.slug}`}
            className="text-2xl font-medium text-black hover:underline"
          >
            {service.name}
          </Link>
        </div>

        <div onMouseLeave={() => setHovered(null)} className="flex flex-col">
          {service.tags.map((tag) => {
            const isActive = hovered === tag;
            return (
              <Link
                key={tag}
                href={`/services/${service.slug}`}
                onMouseEnter={() => setHovered(tag)}
                className="relative isolate flex items-center justify-between border-b border-black/10 px-4 py-4"
              >
                {isActive && (
                  <motion.span
                    layoutId={`group-pill-${service.slug}`}
                    className="absolute inset-0 -z-10 bg-black"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span
                  className={`relative z-10 text-base transition-colors duration-150 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  {tag}
                </span>
                <DotDiamondIcon
                  className={`relative z-10 transition-colors duration-150 ${
                    isActive ? "text-white" : "text-black/30"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
