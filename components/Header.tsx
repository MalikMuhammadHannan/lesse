"use client";
import LOGO from "@/public/images/white-logo.png";


import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data/services";
import ServicePreviewCard from "./ServicePreviewCard";
import { DotMatrixIcon } from "./Icons";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Services", href: "/services", megaMenu: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "#news" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <div className="flex w-full max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-xl  text-lg font-bold bg-dark-card"
        >
          <Image
            src={LOGO}
            alt="Logo"
            width={70}
            height={70}
            preload
          />
        </Link>

        <nav
          onMouseLeave={() => {
            setHoveredNav(null);
            setMenuOpen(false);
          }}
          className="relative hidden rounded-full border border-white/10 bg-black/60 p-2 backdrop-blur-md shadow-lg shadow-black/20 md:block"
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
          className="hidden h-10 w-10 items-center justify-center rounded-xl bg-dark-card md:flex"
        >
          <DotMatrixIcon />
        </button>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-dark-card md:hidden"
        >
          <DotMatrixIcon />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 right-0 z-50 flex h-full w-[82vw] max-w-sm flex-col border-l border-white/10 bg-[#111111] p-6 shadow-2xl shadow-black/60 md:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="eyebrow">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-4 py-3 text-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
