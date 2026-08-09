import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageForm from "@/components/ContactPageForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Cortexsys to discuss brand strategy, design, and technology projects.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Cortexsys",
    description:
      "Get in touch with Cortexsys to discuss brand strategy, design, and technology projects.",
    url: "/contact",
  },
};

const CONTACT_LINKS = [
  { label: "contact@Cortexsysstudio.com", href: "mailto:contact@Cortexsysstudio.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-off-white pt-40 text-black">
        <section className="min-h-[70vh] px-6 pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
            <div className="flex flex-col justify-between">
              <h1 className="text-7xl text-black/15 md:text-8xl">Get in Touch</h1>

              <div className="mt-16 flex flex-wrap gap-3">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-full border border-black/10 bg-black/3 px-5 py-2.5 text-sm text-black/70 transition-colors hover:bg-black/8"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <ContactPageForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
