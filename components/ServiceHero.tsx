import type { Service } from "@/lib/data/services";
import Image from "next/image";
import Button from "./ui/Button";

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative flex h-[90vh] w-full items-end overflow-hidden bg-black pt-32">
      <Image
        src={service.image}
        alt={service.name}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex w-full items-end justify-between gap-10 px-6 pb-16">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-xl text-5xl leading-[1.05] text-white md:text-6xl">
            {service.name}
          </h1>
          <Button href="/services" variant="light" className="w-max">
            View all services
          </Button>
        </div>

        <p className="hidden max-w-sm text-right text-lg leading-relaxed text-white/90 md:block">
          {service.tagline}
        </p>
      </div>
    </section>
  );
}
