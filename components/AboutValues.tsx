"use client";

import { motion } from "framer-motion";
import { values } from "@/lib/data/values";

export default function AboutValues() {
  return (
    <section data-bg="dark" className="bg-black px-6 py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        <div className="md:sticky md:top-32 md:self-start">
          <p className="eyebrow mb-4">Our Values</p>
          <h2 className="max-w-md text-3xl font-medium tracking-tight text-white md:text-4xl">
            The principles behind every brief we take on
          </h2>
        </div>

        <div className="flex flex-col">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex gap-6 border-t border-white/10 py-10 first:border-t-0 first:pt-0"
            >
              <span className="pt-1 text-sm tabular-nums text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-3 text-2xl font-medium text-white">{value.title}</h3>
                <p className="leading-relaxed text-muted">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
