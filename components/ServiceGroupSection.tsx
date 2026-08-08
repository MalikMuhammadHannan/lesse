import { services, serviceGroups, type ServiceGroup } from "@/lib/data/services";
import ServiceGroupBlock from "./ServiceGroupBlock";

export default function ServiceGroupSection({ group }: { group: ServiceGroup }) {
  const groupInfo = serviceGroups.find((g) => g.name === group)!;
  const groupServices = services.filter((s) => s.group === group);
  const count = groupServices.reduce((sum, s) => sum + s.tags.length, 0);

  return (
    <section className="border-t border-black/10 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex items-baseline gap-3">
            <h2 className="text-6xl text-black/15 md:text-7xl">{group}</h2>
            <span className="rounded-md bg-black/5 px-2 py-1 text-sm text-black/50">
              {count}
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-black/50 md:text-right">
            {groupInfo.description}
          </p>
        </div>

        <div className="divide-y divide-black/10">
          {groupServices.map((service) => (
            <ServiceGroupBlock key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
