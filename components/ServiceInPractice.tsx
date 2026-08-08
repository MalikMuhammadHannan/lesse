import { portfolioProjects } from "@/lib/data/portfolio";
import type { Service } from "@/lib/data/services";
import PortfolioCard from "./PortfolioCard";

function relatedProjects(service: Service) {
  const start = service.slug.length % portfolioProjects.length;
  return [0, 1].map((i) => portfolioProjects[(start + i) % portfolioProjects.length]);
}

export default function ServiceInPractice({ service }: { service: Service }) {
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
