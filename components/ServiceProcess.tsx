import { processSteps } from "@/lib/data/process";
import { ProcessDotCluster } from "./Icons";

export default function ServiceProcess() {
  return (
    <section className="bg-off-white px-6 py-32 text-black">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-10 text-black/50">Our Process</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div
              key={step.step}
              className="flex min-h-[420px] flex-col justify-between rounded-2xl border border-black/8 bg-black/3 p-6"
            >
              <div className="flex items-start justify-between">
                <p className="text-sm font-semibold uppercase tracking-wide text-black">
                  {step.title}
                </p>
                <span className="text-sm text-black/40">{step.step}</span>
              </div>

              <ProcessDotCluster index={i} className="self-center" />

              <p className="text-sm leading-relaxed text-black/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
