"use client";

import { portfolioProjects } from "@/lib/data/portfolio";
import type { Service } from "@/lib/data/services";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function relatedProjects(service: Service) {
  const start = service.slug.length % portfolioProjects.length;
  return [0, 1].map((i) => portfolioProjects[(start + i) % portfolioProjects.length]);
}

export default function ServiceInPractice({ service }: { service: Service }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const projects = relatedProjects(service);

  return (
    <section className="bg-off-white px-6 py-32 text-black">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-10 text-black/50">{service.name} in Practice</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              onMouseEnter={() => setHovered(project.slug)}
              onMouseLeave={() => setHovered(null)}
              className="group block"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <AnimatePresence>
                  {hovered === project.slug && (
                    <motion.span
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white"
                    >
                      See the Project
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7 17L17 7M17 7H9M17 7V15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="text-2xl font-medium text-black">{project.title}</h3>
                <div>
                  <p className="eyebrow mb-1 text-black/40">Location</p>
                  <p className="text-sm font-semibold uppercase text-black">
                    {project.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
