"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Page background colours for sections tagged with data-bg="light" | "dark".
const COLORS: Record<string, string> = {
  light: "#f2f2f0",
  dark: "#000000",
};

// A section "owns" the background once its edge crosses this point (fraction
// of viewport height from the top) — so the colour changes slightly before the
// next section reaches the middle of the screen.
const TRIGGER = 0.6;

/**
 * Fades the page background between light and dark as tagged sections scroll
 * into view. Tagged sections turn transparent (see `html.scroll-bg` in
 * globals.css) so the animated body colour shows through; without JS they keep
 * their own solid backgrounds.
 */
export default function ScrollBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-bg]"));
    if (!sections.length) return;

    const pick = () => {
      const line = window.innerHeight * TRIGGER;
      let nearest = sections[0];
      let best = Infinity;
      for (const el of sections) {
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) return el;
        const d = Math.min(Math.abs(r.top - line), Math.abs(r.bottom - line));
        if (d < best) {
          best = d;
          nearest = el;
        }
      }
      return nearest;
    };

    let current = "";
    const apply = () => {
      const color = COLORS[pick().dataset.bg ?? ""] ?? COLORS.dark;
      if (color === current) return;
      current = color;
      body.style.backgroundColor = color;
      root.style.backgroundColor = color;
    };

    // Set the first colour without animating, then enable the transition.
    body.style.transition = "none";
    root.classList.add("scroll-bg");
    apply();
    const enable = requestAnimationFrame(() => {
      body.style.transition = "";
    });

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        apply();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(enable);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.classList.remove("scroll-bg");
      body.style.backgroundColor = "";
      root.style.backgroundColor = "";
      body.style.transition = "";
    };
  }, [pathname]);

  return null;
}
