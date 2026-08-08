export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  image: string;
};

export const news: NewsArticle[] = [
  {
    slug: "building-brands-from-within",
    title: "Building Brands from Within",
    date: "April 6",
    image: "https://picsum.photos/seed/brands-within/1200/900",
  },
  {
    slug: "how-to-choose-a-brand-name-that-lasts",
    title: "How to Choose a Brand Name That Lasts",
    date: "April 6",
    image: "https://picsum.photos/seed/brand-name/1200/900",
  },
  {
    slug: "the-future-of-headless-commerce",
    title: "The Future of Headless Commerce",
    date: "March 22",
    image: "https://picsum.photos/seed/headless-commerce/1200/900",
  },
  {
    slug: "designing-for-trust-in-fintech",
    title: "Designing for Trust in Fintech",
    date: "March 10",
    image: "https://picsum.photos/seed/fintech-trust/1200/900",
  },
];
