"use client";

import { motion } from "framer-motion";
import { DitheringShader } from "./dithering-shader";

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
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="order-1 md:order-2"
        >
          <motion.p variants={item} className="eyebrow mb-4">
            Full-Service Agency
          </motion.p>
          <motion.p variants={item} className="max-w-xl text-4xl leading-[1.1] md:text-5xl">
            <span className="text-white">
              Cortexsys is a design and technology studio based in Islamabad.
            </span>{" "}
            <span className="text-muted">
              We deliver holistic brand identity &amp; digital experiences.
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 mx-auto aspect-square w-full max-w-md overflow-hidden md:order-1"
        >
          <DitheringShader
            shape="sphere"
            type="random"
            colorFront="#ffffff"
            colorBack="transparent"
            pxSize={2}
            speed={1.2}
            width={640}
            height={640}
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </div>

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
