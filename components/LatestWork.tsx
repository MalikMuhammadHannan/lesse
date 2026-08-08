"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/lib/data/portfolio";

export default function LatestWork() {
  return (
    <section id="work" className="bg-black px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-16">Latest Work</p>

        <div className="flex flex-col gap-48">
          {portfolioProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className="relative aspect-16/9 w-full overflow-hidden rounded-3xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={i === 0}
                  />
                </div>
                <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="text-3xl font-medium text-white">{project.title}</h3>
                  <div className="flex gap-10">
                    <div>
                      <p className="eyebrow mb-1">Location</p>
                      <p className="text-sm font-semibold uppercase text-white">
                        {project.location}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow mb-1">Industry</p>
                      <p className="text-sm font-semibold uppercase text-white">
                        {project.industry}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
