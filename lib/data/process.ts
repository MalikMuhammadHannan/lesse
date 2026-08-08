export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We immerse ourselves in your business — studying your goals, challenges, and the landscape you operate in to understand what we are truly working with.",
  },
  {
    step: "02",
    title: "Research & Analysis",
    description:
      "Deep-dive into competitor positioning, audience behavior, and market whitespace to uncover where your brand has the greatest opportunity to stand out.",
  },
  {
    step: "03",
    title: "Positioning",
    description:
      "Define exactly where your brand sits in the market — what you stand for, who you serve, and why that matters more than anything your competitors are saying.",
  },
  {
    step: "04",
    title: "Strategy Development",
    description:
      "Build the complete strategic framework: purpose, values, messaging pillars, audience personas, and a clear long-term direction your entire team can rally behind.",
  },
  {
    step: "05",
    title: "Presentation & Alignment",
    description:
      "Walk through every recommendation with your team, stress-test the thinking together, and refine the strategy until everyone is aligned on the direction forward.",
  },
  {
    step: "06",
    title: "Handover & Activation",
    description:
      "Deliver a complete toolkit — guidelines, messaging, and a rollout plan — so your team can activate the strategy confidently across every channel.",
  },
];
