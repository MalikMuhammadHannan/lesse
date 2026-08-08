export type IconKey =
  | "grid"
  | "frame"
  | "monitor"
  | "cart"
  | "code"
  | "plus"
  | "image";

export function ServiceIcon({ icon, className = "" }: { icon: IconKey; className?: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className,
  };

  switch (icon) {
    case "grid":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "frame":
      return (
        <svg {...common}>
          <path d="M3 8V3h5M21 8V3h-5M3 16v5h5M21 16v5h-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="1.5" />
          <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h7.2a2 2 0 002-1.6L18 8H6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="20" r="1.3" />
          <circle cx="17" cy="20" r="1.3" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 3v7M12 14v7M3 12h7M14 12h7" strokeLinecap="round" />
        </svg>
      );
    case "image":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5-4 4-2-2-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function DotMatrixIcon({ className = "" }: { className?: string }) {
  const dots = Array.from({ length: 25 });
  return (
    <div className={`grid grid-cols-5 gap-[2px] ${className}`}>
      {dots.map((_, i) => (
        <span
          key={i}
          className="h-[3px] w-[3px] rounded-full bg-white/70"
          style={{ opacity: [0, 4, 6, 8, 12, 14, 18, 20, 24].includes(i) ? 0.25 : 1 }}
        />
      ))}
    </div>
  );
}
