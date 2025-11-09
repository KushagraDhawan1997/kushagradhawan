export interface WhyMeItem {
  iconName: "Briefcase" | "Code" | "Zap" | "Handshake" | "LineChart" | "Ban" | "Clock" | "Users";
  title: string;
  description: string;
}

export const whyMeItems: WhyMeItem[] = [
  {
    iconName: "Briefcase",
    title: "One Person, Many Hats",
    description: "Across PM, design, and engineering, I connect the dots across roles to keep teams aligned and ship what matters.",
  },
  {
    iconName: "LineChart",
    title: "Behavior Over Opinions",
    description: "I study real user actions, beyond feedback, to drive evidence-based product decisions.",
  },
  {
    iconName: "Ban",
    title: "Saying No, Even When It Hurts",
    description: "I protect focus, saying no often to keep products simple and clear, even when it’s hard.",
  },
  {
    iconName: "Zap",
    title: "Learning Through Shipping",
    description: "Quick launches teach fastest. I ship, learn, and adjust instead of debating without user feedback.",
  },
  {
    iconName: "Clock",
    title: "Prototypes Answer Faster",
    description: "Rough prototypes end debates fast, because showing ideas beats endless meetings.",
  },
  {
    iconName: "Handshake",
    title: "Between Tech and Product",
    description: "I bridge what’s possible in code and what users need, keeping solutions practical.",
  },
];
