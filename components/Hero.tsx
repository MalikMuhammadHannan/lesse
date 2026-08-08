"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Hero3DLogo = dynamic(() => import("./Hero3DLogo"), { ssr: false });

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-end overflow-hidden bg-black">
      <Hero3DLogo />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-28"
      >
        <motion.p variants={item} className="eyebrow mb-4">
          Full-Service Agency
        </motion.p>
        <motion.p variants={item} className="max-w-2xl text-4xl leading-[1.1] md:text-5xl">
          <span className="text-white">
            Lesse is a design and technology studio based in Italy.
          </span>{" "}
          <span className="text-muted">
            We deliver holistic brand identity &amp; digital experiences.
          </span>
        </motion.p>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="eyebrow">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="#8A8A8A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </div>
    </section>
  );
}
