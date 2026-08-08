"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/data/services";
import ServicePreviewCard from "./ServicePreviewCard";
import Button from "./ui/Button";

export default function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" className="bg-off-white px-6 py-32 text-black">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-8 text-black/50">Our Services</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServicePreviewCard
              key={service.slug}
              service={service}
              variant="grid"
              isHovered={hoveredCard === service.slug}
              isDimmed={hoveredCard !== null && hoveredCard !== service.slug}
              onHoverStart={() => setHoveredCard(service.slug)}
              onHoverEnd={() => setHoveredCard(null)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
          // className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            <Button variant="light">

              Expand All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
