export interface WhyMeItem {
  iconName: "Briefcase" | "Code" | "Zap" | "Handshake" | "LineChart" | "Ban" | "Clock" | "Users";
  title: string;
  description: string;
}

export const whyMeItems: WhyMeItem[] = [
  {
    iconName: "Briefcase",
    title: "Skip Expensive Hiring Mistakes",
    description: "Combine PM, designer, and tech lead roles in one person. End the 'that's impossible' conflicts between teams. Features get built as designed when your PM understands technical implementation.",
  },
  {
    iconName: "LineChart",
    title: "Prioritize User Behavior Over Opinions",
    description: "Early-stage products need intuition alongside analytics. I focus on how users actually interact with products, not just what they claim in surveys. This approach drove Womp's growth by addressing real usage patterns.",
  },
  {
    iconName: "Ban",
    title: "Maintain Product Focus",
    description: "Building features just because competitors have them dilutes your product. I've declined user requests that would add clutter. This discipline kept Womp focused while competitors added complexity that slowed them down.",
  },
  {
    iconName: "Zap",
    title: "Ship Quickly Without Breaking Things",
    description: "Speed and quality aren't mutually exclusive. I ship rapidly while maintaining product integrity through thoughtful architecture and development practices, not by sacrificing reliability.",
  },
  {
    iconName: "Clock",
    title: "Resolve Debates With Working Software",
    description: "Working prototypes end discussions faster than meetings. I build testable versions while others schedule alignment calls. Real user interaction with functional software resolves product questions definitively.",
  },
  {
    iconName: "Handshake",
    title: "Bridge Technical and Product Needs",
    description: "Computer science background provides clear understanding of technical possibilities and constraints. This prevents unrealistic requirements and helps teams focus on building what matters.",
  },
];
