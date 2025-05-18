import { IllustrationSize } from "@/components/generic/section";

export type Solution = {
  problem: string;
  description: string;
  expandedContent: string;
  gridArea?: string;
  illustrationPlaceholder?: boolean;
  illustrationSize?: IllustrationSize;
  useSpecialBackground?: boolean;
};

export const solutions: Solution[] = [
  {
    problem: "AI & Advanced Tech Integration",
    description: "Leading integration of GenAI, LLM, and AI Tools with full oversight of features, pricing, and UX.",
    expandedContent:
      "I bring specialized expertise in integrating advanced technologies—particularly AI—into product ecosystems. My approach includes strategic assessment of which AI capabilities will provide real user value versus hype, end-to-end implementation oversight from technical integration to pricing models and UX design, and practical knowledge of working with various AI models and platforms.\n\nThis work involves everything from API integrations to custom implementations of AI tools. For each integration, I manage the entire process from technical specifications to user experience design to pricing strategy.\n\nFor startups considering AI integration, my experience provides a roadmap to implement these technologies in ways that deliver actual value rather than following trends. I can help navigate the complex decisions around build vs. buy, model selection, and creating interfaces that make advanced capabilities accessible to users.",
    gridArea: "s3",
    illustrationPlaceholder: true,
    illustrationSize: "medium",
    useSpecialBackground: true,
  },
  {
    problem: "Making Complex Simple",
    description: "Specialized in taking advanced technologies (like 3D design, real-time ray tracing, AI) and making them intuitive for everyday users.",
    expandedContent:
      "My core expertise lies in democratizing complex technologies—making sophisticated capabilities accessible without sacrificing power. This approach focuses on identifying and eliminating unnecessary complexity that creates barriers to adoption, designing intuitive interfaces that progressively reveal advanced functionality, and creating mental models that help users understand complex concepts through familiar paradigms.\n\nI've applied this philosophy to inherently complex domains where industry-standard tools have extraordinarily steep learning curves. By reimagining how users interact with complex concepts, I create experiences where complete beginners can achieve impressive results in minutes rather than months.\n\nThis same approach guides implementation of technically sophisticated features that typically require deep expertise to use effectively. I design simplified systems that make advanced capabilities accessible without requiring users to understand the underlying complexity.\n\nFor startups building advanced technology products, this ability to make complex systems approachable is often the difference between mainstream adoption and niche appeal. I help teams identify the essential complexity users need while eliminating the accidental complexity that drives them away.",
    gridArea: "s2",
    illustrationPlaceholder: false,
  },
  {
    problem: "Engineering-First Product Thinking",
    description: "Background in CS and hands-on development experience means understanding what's actually possible.",
    expandedContent:
      "My computer science background and hands-on development experience provide a foundation that most product leaders lack. This engineering-first approach means I understand what's actually possible from a technical perspective while still keeping user needs at the center.\n\nWorking with me means technical feasibility assessments that accurately determine what can be built within time and resource constraints, product roadmaps grounded in technical reality rather than wishful thinking, and feature specifications that engineers can implement without constant clarification.\n\nThis technical depth proves crucial for implementing complex features that require deep understanding of both technical systems and user experience design. Because I can speak both languages, we avoid the typical back-and-forth between engineering and product teams that delays projects.\n\nFor startups, this engineering-first approach means faster development cycles, fewer technical rewrites, and products that actually work as intended.",
    gridArea: "s1",
    illustrationPlaceholder: false,
    illustrationSize: "medium",
  },
  {
    problem: "Cross-Functional Team Environment",
    description: "Manages Design, Frontend, and QA teams. Can prototype, design, code, and ship - not just coordinate.",
    expandedContent:
      "Unlike product leaders who only coordinate between departments, I actively contribute across the entire product development process. I manage Design, Frontend, and QA teams while maintaining the technical skills to prototype, design, code, and ship features when needed.\n\nThis cross-functional expertise enables efficient communication between teams that typically struggle to understand each other, rapid prototyping to test ideas without waiting for resource allocation, and technical specifications that accurately reflect both user needs and implementation realities.\n\nWhen facing critical deadlines, I can personally create working prototypes in code that demonstrate both UI design and key functionality. This allows teams to validate approaches quickly and provides engineers with clear implementation targets rather than abstract specifications.\n\nFor startups with limited resources, this versatility means faster iteration cycles and more efficient use of specialized talent. Team members can focus on their areas of expertise while I bridge the gaps between disciplines, ensuring everyone remains aligned on what we're building and why.",
    gridArea: "s4",
    illustrationPlaceholder: false,
    illustrationSize: "medium",
  },
];
