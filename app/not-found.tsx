import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFoundContent from "@/components/NotFoundContent";

// Next.js adds <meta name="robots" content="noindex"> to 404 responses itself.
export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
