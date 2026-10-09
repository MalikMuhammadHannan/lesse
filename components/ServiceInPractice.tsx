import { portfolioProjects } from "@/lib/data/portfolio";
import type { Service } from "@/lib/data/services";
import { serviceWork } from "@/lib/data/service-work";
import PortfolioCard from "./PortfolioCard";
import ServiceWorkGrid from "./ServiceWorkGrid";

function relatedProjects(service: Service) {
  const start = service.slug.length % portfolioProjects.length;
  return [0, 1].map((i) => portfolioProjects[(start + i) % portfolioProjects.length]);
}

export default function ServiceInPractice({ service }: { service: Service }) {
  const works = serviceWork[service.slug];

  if (works?.length) {
    return (
      <section className="bg-off-white px-6 py-32 text-black">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-4 text-black/50">{service.name} in Practice</p>
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
              Selected industry case studies
            </h2>
            <p className="max-w-sm text-sm text-black/50">
              Benchmark {service.name.toLowerCase()} work from leading independent
              studios. Each project is credited to the agency that delivered it.
            </p>
          </div>
          <ServiceWorkGrid works={works} />
        </div>
      </section>
    );
  }

  const projects = relatedProjects(service);

  return (
    <section className="bg-off-white px-6 py-32 text-black">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-10 text-black/50">{service.name} in Practice</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
