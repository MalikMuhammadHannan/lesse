"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import Button from "./ui/Button";

const LINKS = [
  { label: "Services", href: "/services", note: "What we do" },
  { label: "Portfolio", href: "/portfolio", note: "Featured case studies" },
  { label: "About", href: "/about", note: "Who we are" },
  { label: "Contact", href: "/contact", note: "Start a project" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Digit({ children, delay }: { children: string; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      initial={{ opacity: 0, y: reduce ? 0 : 80, rotate: reduce ? 0 : -6 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, ease, delay }}
      className="inline-block"
    >
      <motion.span
        className="inline-block"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 1 }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/** The "0": a spinning dashed ring with a dot orbiting it. */
function Orbit() {
  const reduce = useReducedMotion();
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease, delay: 0.15 }}
      className="relative mx-[0.04em] inline-flex h-[0.72em] w-[0.58em] items-center justify-center align-[-0.02em]"
      aria-hidden
    >
      <motion.span
        className="absolute inset-0 rounded-[50%] border-[0.07em] border-dashed border-white/80"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.span
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-[0.11em] w-[0.11em] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_24px_6px_rgba(255,255,255,0.35)]" />
      </motion.span>
      <span className="h-[0.06em] w-[0.06em] rounded-full bg-white/40" />
    </motion.span>
  );
}

export default function NotFoundContent() {
  // Soft glow that trails the cursor.
  const x = useMotionValue(50);
  const y = useMotionValue(40);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  const glow = useTransform(
    [sx, sy],
    ([gx, gy]) =>
      `radial-gradient(600px circle at ${gx}% ${gy}%, rgba(255,255,255,0.09), transparent 60%)`
  );

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width) * 100);
    y.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <section
      data-bg="dark"
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pb-24 pt-40"
    >
      {/* Dot grid + cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
        aria-hidden
      />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-end gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-6"
          >
            Error 404 · Page not found
          </motion.p>

          <p
            className="select-none text-[34vw] font-bold italic leading-[0.85] tracking-tighter text-white sm:text-[26vw] lg:text-[15rem]"
            aria-label="404"
          >
            <Digit delay={0}>4</Digit>
            <Orbit />
            <Digit delay={0.3}>4</Digit>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
          >
            <h1 className="mt-10 max-w-xl text-3xl leading-tight md:text-4xl">
              <span className="text-white">This page drifted out of orbit.</span>{" "}
              <span className="text-muted">
                The link may be broken, or the page may have moved.
              </span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/">Back to Home</Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.nav
          aria-label="Popular pages"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } } }}
          className="flex flex-col"
        >
          <p className="eyebrow mb-4">Try one of these</p>
          {LINKS.map((link) => (
            <motion.div
              key={link.href}
              variants={{
                hidden: { opacity: 0, x: 24 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
              }}
            >
              <Link
                href={link.href}
                className="group flex items-center justify-between border-t border-white/10 py-5 transition-colors hover:border-white/40"
              >
                <span>
                  <span className="block text-2xl font-medium text-white transition-transform duration-300 group-hover:translate-x-2">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{link.note}</span>
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
