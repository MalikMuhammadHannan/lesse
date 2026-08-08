"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { portfolioProjects } from "@/lib/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const LOGO_PATTERNS = [
  [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
  [1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1],
];

function DotLogo({ pattern }: { pattern: number[] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {pattern.map((dot, i) => (
        <span
          key={i}
          className="h-2.5 w-2.5 rounded-full bg-black"
          style={{ opacity: dot ? 0.15 : 0 }}
        />
      ))}
    </div>
  );
}

export default function ClientLogosToPortfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(logosRef.current, { opacity: 0, y: -20, duration: 0.4 }, 0).to(
        imageRef.current,
        { width: "100%", height: "560px", duration: 0.6, ease: "power2.out" },
        0.1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const project = portfolioProjects[3];

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-off-white text-black">
      <div className="flex h-full flex-col items-center justify-center gap-14 px-6">
        <div
          ref={logosRef}
          className="flex w-full max-w-5xl flex-wrap items-center justify-between gap-8"
        >
          {LOGO_PATTERNS.map((pattern, i) => (
            <DotLogo key={i} pattern={pattern} />
          ))}
        </div>

        <div
          ref={imageRef}
          className="relative h-[340px] w-[600px] max-w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/10"
        >
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
