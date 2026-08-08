"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DitheringShader } from "./dithering-shader";
import Button from "./ui/Button";

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const panelScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const videoParallax = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <motion.section
      ref={ref}
      style={{ scale: panelScale }}
      className="relative mx-2 mt-2 flex min-h-[calc(100vh-64px)] origin-center items-center overflow-hidden rounded-3xl bg-white sm:mx-3 sm:mt-3"
    >
      <motion.div style={{ y: videoParallax }} className="absolute inset-x-0 -top-8 -bottom-8">
        <video
          className="h-full w-full object-cover"
          src="/videos/bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-2"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="order-1 md:order-2"
        >
          <motion.p variants={item} className="eyebrow mb-4">
            Cortexsys
          </motion.p>
          <motion.p variants={item} className="max-w-xl text-4xl leading-[1.1] md:text-5xl">
            <span className="text-white">
              {/* Cortexsys is a design and technology studio based in Islamabad. */}
              Build Without Limits. Move Without Waiting.
            </span>{" "}
            {/* <span className="text-muted">
              We deliver holistic brand identity &amp; digital experiences.
            </span> */}
            <Button
              href="/contact"
            >
              Let's Talk
            </Button>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 mx-auto aspect-square w-full max-w-md md:order-1"
        >
          <motion.div
            className="absolute inset-0 -z-10 rounded-full bg-white/25 blur-3xl"
            animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <DitheringShader
              shape="sphere"
              type="random"
              colorFront="#C4C4C4"
              colorBack="transparent"
              pxSize={2}
              speed={1.2}
              width={640}
              height={640}
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        </motion.div>
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
    </motion.section>
  );
}
