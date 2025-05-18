import { IllustrationSize } from "@/components/generic/section";

export type Approach = {
  approach: string;
  description: string;
  expandedContent: string;
  gridArea?: string;
  illustrationPlaceholder?: boolean;
  illustrationSize?: IllustrationSize;
};

export const approaches: Approach[] = [
  {
    approach: "Building High-Performance Teams",
    description: "Create environments where designers, engineers, and specialists collaborate effectively across disciplines.",
    expandedContent:
      "The best innovation happens when different disciplines work together seamlessly. Teams improve when designers understand technical limitations and engineers appreciate design goals. This requires structured workflows that make cross-functional collaboration the default way of working.\n\nTeam members should own problems, not just assigned tasks. This naturally breaks down boundaries between specialized roles and creates more cohesive organizations.\n\nThis approach works particularly well for complex technical features with user-facing components. When engineers join design discussions early and designers participate in technical planning, teams discover solutions that neither group would find alone. The outcome includes both better products and teams that grow stronger with each project.",
    gridArea: "a1",
    illustrationPlaceholder: true,
    illustrationSize: "medium",
  },
  {
    approach: "Results-Driven Leadership",
    description: "Focus on measurable outcomes that matter to users and business growth.",
    expandedContent:
      "Effective leadership delivers measurable results. Too many projects get trapped in endless planning or pursuing metrics that don't affect business outcomes.\n\nSuccess comes from clear priorities, decisive resource allocation, and consistent focus on metrics that impact users and business. For complex features, establishing concrete success metrics upfront and maintaining team alignment creates momentum.\n\nThis approach distinguishes between activity and achievement. Each initiative should be evaluated by its direct contribution to key metrics. This creates a culture where everyone understands how their work affects company success.",
    gridArea: "a2",
    illustrationPlaceholder: false,
  },
  {
    approach: "AI-Powered Execution",
    description: "Use AI tools strategically to increase productivity and enhance creative output across teams.",
    expandedContent:
      "AI tools transform product development, but their impact depends on implementation quality. Strategic integration into workflows creates substantial productivity gains and new creative capabilities.\n\nStart by selecting tools that solve specific problems rather than chasing AI trends. Develop custom workflows that combine human expertise with AI capabilities. Train teams to effectively direct these tools for consistent results.\n\nFor engineering teams, coding assistants speed up documentation, refactoring, and routine tasks. For design teams, AI tools multiply asset variations while maintaining brand consistency. This increases development velocity and design output without adding headcount.\n\nEffective AI implementation amplifies human creativity rather than replacing it. Team members maintain ownership of their work while using AI as a productivity multiplier.",
    gridArea: "a3",
    illustrationPlaceholder: true,
    illustrationSize: "medium",
  },
  {
    approach: "Startup-Speed Decision Making",
    description: "Make quality decisions quickly in uncertain environments while maintaining team alignment.",
    expandedContent:
      "Startups need leaders who navigate uncertainty and make good decisions rapidly. This approach tackles early-stage problems where the path forward isn't clear, combining available data with product intuition to make confident choices with limited information.\n\nFor critical technical architecture decisions affecting scalability, use structured processes that balance immediate needs with future flexibility. This helps teams ship quickly while building foundations for sustainable growth.\n\nMaking sound decisions at startup speed is essential in fast-changing markets. Clear frameworks and transparency about tradeoffs help teams move quickly without the confusion common in early-stage companies.\n\nTeams perform better when they understand both what decisions were made and why. This creates alignment that maintains momentum through difficult challenges.",
    gridArea: "a4",
    illustrationPlaceholder: true,
    illustrationSize: "large",
  },
  {
    approach: "Real Impact, Not Just Strategy",
    description: "Solve problems hands-on alongside teams by combining technical knowledge with user-centered design.",
    expandedContent:
      "Product leadership requires more than strategic direction—it needs practical problem-solving skills. Combining technical understanding with design thinking ensures teams build what users actually need.\n\nWhen teams face complex challenges, working prototypes demonstrating simpler solutions unblock progress faster than abstract discussions. This hands-on approach accelerates development and creates features users embrace immediately.\n\nThe combination of strategic vision and practical execution leads to breakthrough products. Finding the intersection of technical possibility and user value creates the most innovative solutions.\n\nFor startups, this practical approach means faster execution with fewer resources and better outcomes that satisfy both user needs and business goals.",
    gridArea: "a5",
    illustrationPlaceholder: false,
  },
];
