import type { Service } from "@/lib/data/services";

export default function ServiceIntro({ service }: { service: Service }) {
  return (
    <section className="bg-off-white px-6 py-32 text-black">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
        <h2 className="text-4xl leading-tight md:text-5xl">
          <span className="text-black">{service.heading.light}</span>{" "}
          <span className="text-black/40">{service.heading.muted}</span>
        </h2>
        <p className="text-lg leading-relaxed text-black/60">{service.description}</p>
      </div>
    </section>
  );
}
