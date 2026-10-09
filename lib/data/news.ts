export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  image: string;
};

// Images: Unsplash (free license), stored locally in public/images/news.
export const news: NewsArticle[] = [
  {
    slug: "building-brands-from-within",
    title: "Building Brands from Within",
    date: "April 6",
    image: "/images/news/building-brands-from-within.webp",
  },
  {
    slug: "how-to-choose-a-brand-name-that-lasts",
    title: "How to Choose a Brand Name That Lasts",
    date: "April 6",
    image: "/images/news/how-to-choose-a-brand-name-that-lasts.webp",
  },
  {
    slug: "the-future-of-headless-commerce",
    title: "The Future of Headless Commerce",
    date: "March 22",
    image: "/images/news/the-future-of-headless-commerce.webp",
  },
  {
    slug: "designing-for-trust-in-fintech",
    title: "Designing for Trust in Fintech",
    date: "March 10",
    image: "/images/news/designing-for-trust-in-fintech.webp",
  },
];
