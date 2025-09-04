export type KookieCapability = {
  title: string;
  shortDescription: string;
  expandedContent: string;
};

export const kookieCapabilities: KookieCapability[] = [
  {
    title: "Consistency",
    shortDescription:
      "Trying to make everything speak the same design language.",
    expandedContent:
      "I forked Radix Themes and went through every token — spacing, typography, color, interaction — to make them consistent. The foundation was solid, but I ended up rewriting a lot to get closer to a modern, systematic approach. It's better now, but I'm still catching edge cases and cleaning up places where rules don't hold perfectly.",
  },
  {
    title: "Robustness",
    shortDescription: "Built on Radix, tested in real use — still hardening.",
    expandedContent:
      "KookieUI sits on Radix Themes and Radix Primitives, which already give it a strong backbone. I've been hardening components through actual product use, not just demos. Some parts feel dependable, others still need refinement. It's getting sturdier with every release.",
  },
  {
    title: "Intentional",
    shortDescription: "Nothing extra. Everything has to earn its place.",
    expandedContent:
      "I try to make sure nothing in KookieUI is accidental. Every token and component has a purpose. For example, I added a `material` prop to handle depth — not just translucency. It works across all components with theme-level control, overrides, and backward compatibility. It's a step forward, but I'm still learning where the right balance is between power and simplicity.",
  },
  {
    title: "Foundations First",
    shortDescription: "Start with space, color, motion — not shortcuts.",
    expandedContent:
      "I focus on the invisible rules: spacing, radius, color, shadow, motion. They bring order if done right, but chaos if skipped. I've tried to avoid \"magic numbers\" and one-off fixes. It's better than before, but there are still places where I catch myself breaking my own rules.",
  },
  {
    title: "Accessible",
    shortDescription: "Accessibility by default, not as an add-on.",
    expandedContent:
      "KookieUI inherits Radix's strong accessibility patterns — keyboard navigation, semantics, motion preferences. I try not to break those foundations. Most components hold up well, but I'm still testing edge cases and learning how to keep accessibility solid while adding new patterns.",
  },
  {
    title: "Beautiful",
    shortDescription: "Simple is beautiful — still learning what that means.",
    expandedContent:
      'I don\'t aim for flash — just clarity and balance. Subtle motion, layered depth, and small details can make interfaces feel pleasant without distraction. Sometimes I overdo it, sometimes it feels too plain. I\'m still figuring out where "simple" becomes "beautiful," but that\'s the direction.',
  },
];
