export type Capability = {
  title: string;
  description: string;
  expandedContent: string;
  gridArea?: string;
  illustrationPlaceholder?: boolean;
};

export const capabilities: Capability[] = [
  {
    title: "Product Strategy",
    description: "Trying to decide what’s worth building right now.",
    expandedContent:
      "Product strategy feels like guessing with better notes. You rarely have perfect information, so you make choices, adjust, and keep learning.\n\nAt Womp, we’re still figuring out what belongs in the product today versus what can wait. We don’t think in terms of endless feature lists — we’re trying to shape a platform that becomes more useful over time. Every feature has to do two things at once: help people today and not block the future.\n\nThe hard part is balancing technical reality with market needs. We get it wrong sometimes. We’re still learning which trade-offs make sense. Strategy isn’t fixed — what works now might stop working next month. We adjust as we go.",
    gridArea: "c4",
    illustrationPlaceholder: false,
  },
  {
    title: "Team Leadership",
    description:
      "Keeping designers and engineers moving in the same direction.",
    expandedContent:
      "Leading teams across disciplines mostly comes down to communication. I’ve been in product, design, and engineering roles, so I can usually translate between them.\n\nDesigners want a great user experience. Engineers have to live with real constraints. Product cares about whether the business survives. My role is often about making sure each group actually hears the others. Without that, we waste time.\n\nIt’s still messy. Different people have different priorities and timelines. I don’t think there’s a perfect way to fix that — I just try to create clarity: what we’re building, why it matters, and what we can ignore for now. Every team is different, so I’m still learning how to do this better.",
    gridArea: "c2",
    illustrationPlaceholder: true,
  },
  {
    title: "Scaling Products",
    description: "Learning how to grow without losing the basics.",
    expandedContent:
      "Scaling isn’t about speed. It’s about learning fast enough to know what’s actually worth scaling.\n\nAt Womp, we’re working on making 3D tools usable by people who aren’t engineers. That’s not easy — most 3D software is still built for experts. We want anyone to create in 3D without getting blocked by technical skills.\n\nWe’re not there yet. The approach we’re taking is small steps: ship something simple, get it into people’s hands, learn, and improve. It’s slower than a perfect vision, but more honest. Because I design as well as manage, I try to keep the user perspective close. Easy products are the only ones that scale.\n\nThere’s still a long way to go. We’re figuring it out one release at a time.",
    gridArea: "c1",
    illustrationPlaceholder: true,
  },
  {
    title: "Engineering & Design",
    description: "Bridging the gap between what’s possible and what’s usable.",
    expandedContent:
      "Making complex technology simple is harder than it sounds. My computer science background helps me understand what’s technically doable. My design work keeps me focused on what people can actually use.\n\nAt Womp, we’re experimenting with things like real-time ray tracing. The tech is heavy, but for the user it should feel almost invisible. That gap is hard to close. Sometimes the design pulls ahead, sometimes the engineering drags, and I end up switching hats to keep them aligned.\n\nWorking across both roles avoids some lost-in-translation moments, but it also creates new ones — I’m constantly jumping between low-level code discussions and big-picture UX decisions. We don’t always get the balance right. Simplicity with power is still something we’re learning to achieve.",
    gridArea: "c3",
    illustrationPlaceholder: true,
  },
];
