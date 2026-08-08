export type PortfolioProject = {
  slug: string;
  title: string;
  location: string;
  industry: string;
  image: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "duo-nutrition",
    title: "Duo Nutrition",
    location: "Australia",
    industry: "Supplements",
    image: "https://picsum.photos/seed/duo-nutrition/1600/1000",
  },
  {
    slug: "everyday",
    title: "Everyday",
    location: "Australia",
    industry: "Supplements",
    image: "https://picsum.photos/seed/everyday/1600/1000",
  },
  {
    slug: "nymph",
    title: "Nymph",
    location: "Thailand",
    industry: "Cosmetics",
    image: "https://picsum.photos/seed/nymph/1600/1000",
  },
  {
    slug: "puls",
    title: "Puls",
    location: "Germany",
    industry: "Sports Equipment",
    image: "https://picsum.photos/seed/puls/1600/1000",
  },
  {
    slug: "touche",
    title: "Touché",
    location: "France",
    industry: "Beauty",
    image: "https://picsum.photos/seed/touche/1600/1000",
  },
];
