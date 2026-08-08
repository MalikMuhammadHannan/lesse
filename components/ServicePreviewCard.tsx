"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Service } from "@/lib/data/services";
import { ServiceIcon } from "./Icons";

type ServicePreviewCardProps = {
  service: Service;
  variant: "menu" | "grid";
  isHovered: boolean;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export default function ServicePreviewCard({
  service,
  variant,
  isHovered,
  isDimmed,
  onHoverStart,
  onHoverEnd,
}: ServicePreviewCardProps) {
  const isMenu = variant === "menu";

  return (
    <Link
      href={`/services/${service.slug}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`relative overflow-hidden rounded-2xl border border-white/8 bg-dark-card transition-opacity duration-300 ${isMenu ? "h-32" : "aspect-3/4"
        } ${isDimmed ? "opacity-50" : "opacity-100"}`}
    >
      {isMenu ? (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image src={service.image} alt="" fill className="object-cover " />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt=""
            fill
            className={`object-cover transition-all duration-300 ${isHovered ? "scale-105 blur-[2px] brightness-[0.5]" : ""
              }`}
          />
          <div
            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? "opacity-60" : "opacity-30"
              }`}
          />
        </div>
      )}

      <div
        className={`absolute z-10 flex flex-col justify-between ${isMenu ? "inset-4" : "inset-5"
          }`}
      >
        <div className="flex items-start justify-between gap-2">
          <span className="flex items-center gap-2">
            <ServiceIcon icon={service.icon} className="text-white/70" />
            <span
              className={`font-medium text-white ${isMenu ? "text-base" : "text-xl leading-tight"
                }`}
            >
              {service.name}
            </span>
          </span>
          <span className="whitespace-nowrap text-xs text-muted">
            /{service.count} services
          </span>
        </div>

        {!isHovered && !isMenu && (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded border border-dashed border-white/30 text-white/40">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" fill="currentColor" />
              <rect x="14" y="14" width="7" height="7" fill="currentColor" />
            </svg>
          </span>
        )}

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="flex flex-wrap items-end justify-between gap-2"
            >
              <div className="flex flex-wrap gap-2">
                {service.tags.slice(0, 3).map((tag) => (
                  <motion.span
                    key={tag}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="text-xs text-white underline underline-offset-2"
              >
                See More →
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
}
