export interface WhyMeItem {
  iconName:
    | "Briefcase"
    | "Code"
    | "Zap"
    | "Handshake"
    | "LineChart"
    | "Ban"
    | "Clock"
    | "Users";
  title: string;
  description: string;
}

export const whyMeItems: WhyMeItem[] = [
  {
    iconName: "Briefcase",
    title: "One Person, Many Hats",
    description:
      "I’ve had to play PM, designer, and tech lead at once. It cuts down misalignment because I can see trade-offs across roles. But juggling everything is messy — I drop things, I overextend — and I’m still learning how to balance it better.",
  },
  {
    iconName: "LineChart",
    title: "Behavior Over Opinions",
    description:
      "At Womp, I’ve seen users say one thing and do another. Watching how they actually use the product reveals more than surveys. But it’s not always clear — interpreting behavior is tricky, and I get it wrong often before I get it right.",
  },
  {
    iconName: "Ban",
    title: "Saying No, Even When It Hurts",
    description:
      "Every new feature adds clutter. I’ve had to say no more than yes, even when it’s uncomfortable. Sometimes I regret those calls, but a focused product that solves a few problems well beats a bloated one that solves none clearly.",
  },
  {
    iconName: "Zap",
    title: "Learning Through Shipping",
    description:
      "Most things we ship at Womp aren’t elegant. They’re meant to teach us. Shipping fast creates real feedback; debating endlessly doesn’t. The balance with quality is still hard — I don’t think we’ve mastered it — but the learning has been worth the mess.",
  },
  {
    iconName: "Clock",
    title: "Prototypes Answer Faster",
    description:
      "I’ve found rough prototypes resolve debates better than meetings. Even imperfect builds give direction. It’s not always practical — some things need planning — but more often than not, building early saves weeks of talk.",
  },
  {
    iconName: "Handshake",
    title: "Between Tech and Product",
    description:
      "My CS background helps me know what’s feasible, but I don’t stop at constraints. I try to translate them into product terms so decisions stay user-focused. I don’t always get it right, but bridging the gap keeps us from chasing dead ends.",
  },
];
