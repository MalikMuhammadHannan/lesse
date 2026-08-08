import { testimonials } from "@/lib/data/testimonials";
import Button from "./ui/Button";

export default function Testimonials() {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow mb-6">Testimonials</p>
          <h2 className="text-4xl leading-tight md:text-5xl">
            <span className="text-white">What our clients say</span>{" "}
            <span className="text-muted">about working with us.</span>
          </h2>
          <div className="mt-10">
            <Button href="#contact" variant="outline">
              Let&apos;s work together
            </Button>
          </div>
        </div>

        <div className="relative">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="sticky top-24 pb-10"
              style={{ zIndex: i + 1 }}
            >
              <div className="min-h-[420px] rounded-3xl border border-white/8 bg-dark-card-2 p-10 shadow-2xl shadow-black/60 md:p-14">
                <p className="text-xl leading-relaxed text-off-white md:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <span className="h-12 w-12 rounded-full border border-white/20 bg-white/5" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
