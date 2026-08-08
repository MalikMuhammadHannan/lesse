"use client";

import { useForm } from "react-hook-form";
import { services } from "@/lib/data/services";
import Button from "./ui/Button";

type ContactPageFormValues = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service: string;
};

const fieldClass =
  "rounded-xl border border-black/10 bg-black/3 px-4 py-3 text-sm text-black placeholder-black/40 outline-none focus:border-black/30";

export default function ContactPageForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm<ContactPageFormValues>();

  const onSubmit = async (data: ContactPageFormValues) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <p className="eyebrow mb-6">Fill the form to request a quote:</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            {...register("name", { required: true })}
            placeholder="Your Name *"
            className={fieldClass}
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email *"
            className={fieldClass}
          />
        </div>

        <input
          {...register("phone")}
          placeholder="Phone (Optional)"
          className={fieldClass}
        />

        <textarea
          {...register("message", { required: true })}
          placeholder="Tell us about your project *"
          rows={4}
          className={`${fieldClass} resize-none`}
        />

        <div>
          <p className="eyebrow mb-4">Services are interested in</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <label
                key={service.slug}
                className="flex items-center gap-3 text-sm text-black/70"
              >
                <input
                  {...register("service")}
                  type="radio"
                  value={service.slug}
                  className="h-4 w-4 accent-black"
                />
                {service.name}
              </label>
            ))}
          </div>
        </div>

        <div>
          <Button type="submit" variant="dark">
            {isSubmitting ? "Sending…" : "Send Message"}
          </Button>
          {isSubmitSuccessful && (
            <p className="mt-4 text-sm text-black/50">
              Thanks — we&apos;ll be in touch shortly.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
