"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutScrollImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1, 1.15]);
  const radius = useTransform(scrollYProgress, [0, 0.5, 1], [48, 24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.6]);

  return (
    <section ref={ref} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        <motion.div
          style={{ scale, borderRadius: radius, opacity }}
          className="relative h-[70vh] w-full max-w-5xl overflow-hidden"
        >
          <Image
            src="https://picsum.photos/seed/about-studio/1800/1200"
            alt="Inside the Cortexsys studio"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
