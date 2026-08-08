export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lesse created a true point of view for our brand and helped us confidently articulate the story we were trying to tell. Their design thinking and technical execution moved us into a category of our own.",
    name: "Johnny Tran",
    role: "Founder, Vora",
  },
  {
    quote:
      "The team is glued to our brand and worked for our profitability, not just our aesthetics. They pushed for what would actually work in the market, not just what looked good in a deck.",
    name: "Duo Nutrition",
    role: "Co-Founder, Duo Nutrition",
  },
  {
    quote:
      "From strategy to shipping code, Lesse handled every layer of the project with the same level of care. It's rare to find a partner that moves this fast without cutting corners.",
    name: "Marisol Reyes",
    role: "Head of Product, Nymph",
  },
];
