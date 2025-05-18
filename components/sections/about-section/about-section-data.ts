import { IllustrationSize } from "@/components/generic/section";

export type Capability = {
  title: string;
  description: string;
  expandedContent: string;
  gridArea?: string;
  illustrationPlaceholder?: boolean;
  illustrationSize?: IllustrationSize;
};

export const capabilities: Capability[] = [
  {
    title: "Product Strategy",
    description: "Turn complex market dynamics and user needs into clear product direction that teams can execute with confidence.",
    expandedContent:
      "Product strategy works best when it builds systems that adapt to change rather than trying to predict the future. At Womp, we grew from beta to 500K users by making strategic choices that compound over time.\n\nWhen transitioning from Womp 3.0 to 4.0, we had to decide what to build now versus later. Instead of feature lists, we built a platform that becomes more valuable as it grows. Each feature serves both immediate user needs and long-term competitive positioning.\n\nI combine market reality with technical possibility. We find paths that strengthen the business, delight users, and create defensible advantages when others see only tradeoffs. This approach makes products harder for competitors to replicate.",
    gridArea: "c4",
    illustrationPlaceholder: false,
  },
  {
    title: "Team Leadership",
    description: "Build cross-functional teams where designers and engineers solve problems together.",
    expandedContent:
      "Leading Design, Frontend, and QA at Womp showed me that teams work best when people understand each other's domains. My background in both engineering and design helps me translate between disciplines that typically struggle to communicate.\n\nWe focus on creating conditions where great work happens naturally instead of just managing tasks. Teams get clarity on outcomes, not just deliverables. People make better decisions without constant oversight when they understand why their work matters.\n\nWe scaled to 500K users while keeping the energy and quality of a tight-knit team. People stay engaged because they see their ideas become reality, and tough problems turn into collaborative challenges rather than territorial battles.",
    gridArea: "c2",
    illustrationPlaceholder: true,
    illustrationSize: "small",
  },
  {
    title: "Scaling Products",
    description: "Grow complex technical products from early stage to mainstream adoption through rapid learning cycles.",
    expandedContent:
      "Most 3D tools fail because they're built by engineers for engineers. We grew Womp to 500K users by making sophisticated technology accessible to everyone.\n\nWe ship constantly, learn quickly, and adjust based on what people actually do, not what they say they want. This combines speed with intelligent iteration.\n\nMaking complex technology mainstream requires more than a better interface. It means rethinking fundamental assumptions about how tools should work. When you solve this well, scale follows naturally.",
    gridArea: "c1",
    illustrationPlaceholder: true,
    illustrationSize: "medium",
  },
  {
    title: "Engineering & Design",
    description: "Bridge technical depth with design thinking to create products that are powerful and intuitive.",
    expandedContent:
      "The best products emerge when technical possibility meets human needs without compromise. My computer science background helps us understand what's technically possible, while design experience ensures we build something people want to use.\n\nAt Womp, we built advanced features like real-time ray tracing that feel natural to non-technical users. The challenge isn't just making things work—it's making complex technology feel obvious.\n\nWorking across both domains means we prototype, design, code, and ship with fewer translation errors between disciplines. Moving fluidly between technical implementation and user experience creates products that competitors find hard to copy.",
    gridArea: "c3",
    illustrationPlaceholder: true,
    illustrationSize: "medium",
  },
];
