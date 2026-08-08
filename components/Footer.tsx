import { services } from "@/lib/data/services";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Mail", href: "mailto:hello@Cortexsys.studio" },
];

export default function Footer() {
  return (
    <footer id="site-footer" className="relative overflow-hidden bg-black pt-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {services.map((service) => (
            <div key={service.slug}>
              <h4 className="mb-4 flex items-center gap-1 text-sm font-semibold text-white">
                {service.name}
                <span className="text-muted">↗</span>
              </h4>
              <ul className="flex flex-col gap-2">
                {service.tags.map((tag) => (
                  <li key={tag}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-white hover:underline"
                    >
                      {tag}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark-card px-4 py-2 text-xs text-muted">
            🛍 Shopify Experts
          </span>
        </div>
      </div>

      <div className="relative mt-20 select-none overflow-hidden" aria-hidden>
        <p className="whitespace-nowrap text-center text-[20vw] font-bold leading-none text-white/5">
          Cortexsys
        </p>
      </div>

      <div className="relative z-10 border-t border-white/8 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-6">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
