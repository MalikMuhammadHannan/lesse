"use client";

import { motion } from "framer-motion";
import { values } from "@/lib/data/values";

export default function AboutValues() {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <p className="eyebrow">Our Values</p>
        </div>

        <div className="flex flex-col gap-14">
          {values.map((value) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="mb-3 text-2xl font-medium text-white">{value.title}</h3>
              <p className="leading-relaxed text-muted">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
