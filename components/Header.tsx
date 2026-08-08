"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data/services";
import ServicePreviewCard from "./ServicePreviewCard";
import { DotMatrixIcon } from "./Icons";

const NAV_ITEMS = [
  { label: "Services", href: "#services", megaMenu: true },
  { label: "Portfolio", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <div className="flex w-full max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-black"
        >
          S
        </Link>

        <nav
          onMouseLeave={() => {
            setHoveredNav(null);
            setMenuOpen(false);
          }}
          className="relative rounded-full border border-white/10 bg-black/60 p-2 backdrop-blur-md shadow-lg shadow-black/20"
        >
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="relative">
                <Link
                  href={item.href}
                  onMouseEnter={() => {
                    setHoveredNav(item.label);
                    setMenuOpen(!!item.megaMenu);
                  }}
                  className="relative z-10 block rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  {hoveredNav === item.label && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 top-full w-205 max-w-[92vw] -translate-x-1/2 pt-4"
              >
                <div className="rounded-3xl border border-white/10 bg-[#111111] p-4 shadow-2xl shadow-black/60">
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <ServicePreviewCard
                        key={service.slug}
                        service={service}
                        variant="menu"
                        isHovered={hoveredCard === service.slug}
                        isDimmed={hoveredCard !== null && hoveredCard !== service.slug}
                        onHoverStart={() => setHoveredCard(service.slug)}
                        onHoverEnd={() => setHoveredCard(null)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-dark-card"
        >
          <DotMatrixIcon />
        </button>
      </div>
    </header>
  );
}
