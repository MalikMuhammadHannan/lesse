import type { Metadata } from "next";

export const SITE_NAME = "Cortexsys";
export const SITE_DESCRIPTION =
  "Cortexsys is a design and technology studio based in Islamabad. We deliver holistic brand identity & digital experiences.";
export const SITE_URL = "https://cortexsys.netlify.app";
export const TITLE = `${SITE_NAME} — Design & Technology Studio`;

type PageSeo = {
  /** Page title without the site suffix; omit for the home page. */
  title?: string;
  description: string;
  /** Route path, e.g. "/about". Used for the canonical and og:url. */
  path: string;
  /** Page-specific share image; falls back to app/opengraph-image. */
  image?: string;
  /** Keep the page out of search results (placeholder or thin content). */
  noIndex?: boolean;
};

/**
 * Builds complete page metadata. Next.js merges `openGraph` and `twitter`
 * shallowly, so a page that sets only some of their fields loses the rest
 * from the root layout. Every page goes through here to get the full set.
 */
export function pageMetadata({ title, description, path, image, noIndex }: PageSeo): Metadata {
  const fullTitle = title ? `${title} - ${SITE_NAME}` : TITLE;
  // A page-level openGraph replaces the layout's, which also drops the
  // file-based app/opengraph-image, so point at it explicitly.
  const images = image
    ? [{ url: image, alt: fullTitle }]
    : [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }];

  return {
    title: title ?? { absolute: TITLE },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
