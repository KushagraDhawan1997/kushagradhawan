/**
 * Product Philosophy Data
 *
 * This file contains data for the product philosophy section of the website.
 * It includes principles that guide product development approach.
 */

export interface Principle {
  title: string;
  description: string;
  expandedContent: string;
}

export const principles: Principle[] = [
  {
    title: "Ship fast, learn fast",
    description: "Get real products in users' hands quickly, then adapt based on their feedback.",
    expandedContent:
      "Product development succeeds through momentum from continuous improvement. We build our process around shipping quickly and learning from user feedback rather than planning extensively.\n\nWe prioritize releasing working features to users quickly, even when imperfect. This generates insights that internal discussions can't match. By observing actual user behavior, we discover what truly matters.\n\nEach release teaches us something valuable for the next one. This cycle maintains team energy and user engagement through visible progress.",
  },
  {
    title: "Data + Intuition blend",
    description: "Combine analytics with product intuition from shipping real products.",
    expandedContent:
      "Startups can't wait for perfect data before making decisions. We blend quantitative analytics with qualitative insights and product intuition from building successful products.\n\nSometimes moving fast with available information works better than getting stuck in analysis paralysis. We use data from metrics and user feedback, but also trust what we've learned from experience. This helps navigate uncertainty when complete data isn't available.\n\nThis approach identifies opportunities that pure data analysis might miss, especially for innovative features where users don't yet know what they want. We build data-informed decisions while recognizing when experience-based intuition needs to fill gaps.",
  },
  {
    title: "Protect the creative process",
    description: "Shield teams from politics and unrealistic deadlines to maintain focus and energy.",
    expandedContent:
      "Teams do their best work when free from unnecessary pressure. We protect the creative process by insulating teams from organizational politics and arbitrary deadlines.\n\nInstead of imposing top-down timelines, we discuss what needs to happen with the people doing the work to set realistic schedules. We focus on outcomes rather than outputs, measuring success by what we deliver to users rather than checking boxes.\n\nThis approach maintains energy and enthusiasm even during rapid growth. By creating an environment where everyone's work and voice matter, we solve complex challenges with creative solutions. Protecting the creative process isn't avoiding accountability—it's creating conditions where teams focus on solving the right problems rather than navigating organizational obstacles.",
  },
  {
    title: "Build for tomorrow, ship for today",
    description: "Make features work for users today while setting up for the product's future.",
    expandedContent:
      "Good product development balances immediate user needs with long-term vision. Features must deliver value today while building toward future goals.\n\nThis requires tough decisions about what to build now versus later. We evaluate features based on both immediate impact and alignment with our strategic vision. This prevents investing in capabilities with short-term appeal that would create technical debt or strategic confusion later.\n\nBy focusing on both present utility and future direction, we evolve products incrementally without disruptive changes. Users get immediate value with each release while the product advances toward its long-term vision in coherent steps.",
  },
];
