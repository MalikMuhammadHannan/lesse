import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageForm from "@/components/ContactPageForm";
import CraftingBanner from "@/components/CraftingBanner";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Cortexsys, a design and technology studio in Islamabad, to discuss brand strategy, design, web development, and eCommerce projects.",
  path: "/contact",
});

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
      <main>
        <section data-bg="light" className="min-h-[70vh] bg-off-white px-6 pb-32 pt-40 text-black">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
            <Reveal className="flex flex-col justify-between">
              <div>
                <p className="eyebrow mb-4 text-black/50">Contact</p>
                <h1 className="text-4xl leading-tight md:text-5xl">
                  <span className="text-black">Get in touch.</span>{" "}
                  <span className="text-black/40">
                    Tell us about your project and we&apos;ll come back with a clear next step.
                  </span>
                </h1>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-black/50">
                  Brand strategy, identity, web development, or eCommerce: share a few
                  details and we&apos;ll reply within two working days.
                </p>
              </div>

              <div className="mt-16 flex flex-wrap gap-3">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-full border border-black/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-black/70 transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-3xl bg-white p-6 md:p-10">
              <ContactPageForm />
            </Reveal>
          </div>
        </section>

        <CraftingBanner />
      </main>
      <Footer />
    </>
  );
}
