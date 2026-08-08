import { stats } from "@/lib/data/stats";
import AnimatedCounter from "./AnimatedCounter";

export default function AboutHero() {
  return (
    <section className="bg-off-white px-6 pb-32 pt-40 text-black">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
        <h1 className="text-4xl leading-tight md:text-5xl">
          <span className="text-black">
            Cortexsys is a full-service branding and digital studio helping
          </span>{" "}
          <span className="text-black/40">
            businesses build brands that are clear, distinctive, and built for growth.
          </span>
        </h1>

        <div>
          <p className="mb-10 text-base leading-relaxed text-black/50">
            We combine brand strategy, visual identity design, UX/UI design, web
            development, and visual content production to create cohesive brand
            experiences across every touchpoint.
          </p>

          <div className="flex flex-col gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/8 bg-black/3 p-8"
              >
                <p className="text-6xl text-black/70 md:text-7xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-6 text-sm text-black/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
