"use client";

import { useForm } from "react-hook-form";
import { services } from "@/lib/data/services";
import Button from "./ui/Button";

type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  service: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <section id="contact" className="bg-black px-6 py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl leading-tight md:text-5xl">
            <span className="text-white">Ready to</span>{" "}
            <span className="text-muted">get started?</span>
          </h2>
        </div>

        <div className="rounded-3xl border border-white/8 bg-dark-card p-8 md:p-10">
          <p className="eyebrow mb-6">Fill the form to request a quote:</p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                {...register("name", { required: true })}
                placeholder="Your Name *"
                className="rounded-xl border border-white/10 bg-dark-input px-4 py-3 text-sm text-white placeholder-muted outline-none focus:border-white/30"
              />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email *"
                className="rounded-xl border border-white/10 bg-dark-input px-4 py-3 text-sm text-white placeholder-muted outline-none focus:border-white/30"
              />
            </div>

            <input
              {...register("phone")}
              placeholder="Phone (Optional)"
              className="rounded-xl border border-white/10 bg-dark-input px-4 py-3 text-sm text-white placeholder-muted outline-none focus:border-white/30"
            />

            <div>
              <p className="eyebrow mb-4">Services are interested in</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <label
                    key={service.slug}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <input
                      {...register("service")}
                      type="radio"
                      value={service.slug}
                      className="h-4 w-4 accent-white"
                    />
                    {service.name}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Button type="submit" variant="light">
                {isSubmitting ? "Sending…" : "Send Message"}
              </Button>
              {isSubmitSuccessful && (
                <p className="mt-4 text-sm text-muted">
                  Thanks — we&apos;ll be in touch shortly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
