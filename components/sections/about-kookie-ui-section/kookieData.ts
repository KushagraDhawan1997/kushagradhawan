export type KookieCapability = {
  title: string;
  shortDescription: string;
  expandedContent: string;
  image: string;
};

export const kookieCapabilities: KookieCapability[] = [
  {
    title: "Consistency",
    shortDescription: "Opinionated cohesion so parts snap together predictably.",
    expandedContent:
      "Kookie UI is an opinionated fork of Radix Themes focused on predictable composition, not objective superiority. Tokens are aligned so pieces fit without local fixes, and components follow the same scales and behaviors across contexts. A Card at size 1 with a Button at size 1 matches in radius, padding, and density, with no overrides. Common surfaces like Dialog or Card can expose a standard toolbar slot for titles and actions, so affordances stay consistent instead of reinventing headers.",
    image: "/kookie-ui/palette.png",
  },
  {
    title: "Robustness",
    shortDescription: "Radix-grade reliability, reinforced by explicit rules.",
    expandedContent:
      "Kookie builds on Radix Primitives and accessibility work, then forks at the Themes layer. That foundation makes reliability the baseline. Explicit contracts, covering placement, sizing, focus, keyboard behavior, and named slots, keep interactions steady across pages and teams. Less ad-hoc scaffolding, fewer surprises, and a system you can ship with confidence.",
    image: "/kookie-ui/robustness.png",
  },
  {
    title: "Intent",
    shortDescription: "Taste-driven choices; every token and prop earns its place.",
    expandedContent:
      "The visual style reflects a specific point of view. It isn't claimed to be universally better than Radix, just deliberately different. Colors, sizes, and props exist to solve real problems, not add options for their own sake. Named slots and clear defaults encourage consistent structure while leaving room to extend when products need it.",
    image: "/kookie-ui/intent.png",
  },
  {
    title: "Foundations First",
    shortDescription: "Aligned tokens and motion before surface polish.",
    expandedContent:
      "Size, spacing, radii, typography, and elevation are aligned so parts click together cleanly. Purposeful motion and sensible density make interfaces feel intuitive. Beyond individual components, layout patterns like Shell (Header, Rail, Panel, Sidebar, Content, Inspector, Bottom) and Split View describe where pieces live and how they adapt across breakpoints, foundations before shortcuts.",
    image: "/kookie-ui/foundations.png",
  },
  {
    title: "Accessibility",
    shortDescription: "Designed in from the start, not bolted on.",
    expandedContent:
      "Components inherit Radix's accessibility strengths: semantic structure, keyboard navigation, and respect for user settings. Contracts make focus behavior and expectations explicit, so teams don't re-solve the same details. The goal is simple: usable by everyone, consistently.",
    image: "/kookie-ui/accessibility.png",
  },
  {
    title: "Beauty",
    shortDescription: "Calm, opinionated aesthetics, never claiming objectivity.",
    expandedContent:
      "Beauty here means clarity and restraint: gentle motion, subtle layering, and balanced type. The aesthetic reflects personal taste and is positioned as an alternative, not a verdict. The result is an interface that feels composed and welcoming, while staying practical for product work.",
    image: "/kookie-ui/beauty.png",
  },
];
