"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "light" | "outline";
  type?: "button" | "submit";
  className?: string;
};

function ArrowGlyph() {
  return (
    <motion.span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10 group-hover:translate-x-0.5 transition-transform"
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 17L17 7M17 7H9M17 7V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  );
}

export default function Button({
  children,
  href,
  onClick,
  variant = "light",
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-medium transition-all duration-200";
  const variants: Record<string, string> = {
    light: "bg-pill text-black hover:scale-[1.03]",
    outline:
      "border border-white/20 text-white hover:bg-white hover:text-black hover:scale-[1.03]",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        <ArrowGlyph />
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      <span>{children}</span>
      <ArrowGlyph />
    </button>
  );
}
