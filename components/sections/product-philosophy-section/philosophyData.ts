/**
 * Product Philosophy Data
 *
 * This file contains data for the product philosophy section of the website.
 * It includes principles that guide building products at speed using AI,
 * integrated disciplines, and consistent systems -- learned from experience
 * at Womp and embodied in KookieUI.
 */

export interface Principle {
  title: string;
  description: string;
  expandedContent: string;
}

export const principles: Principle[] = [
  {
    title: "Rethinking product with AI",
    description: "AI opens new ways to create, and despite its shortcomings, it makes creation accessible.",
    expandedContent:
      "Shipping AI at Womp has changed how we build. AI is complicated. Yes, it is in some ways a creative accelerator, and it absolutely makes creation more accessible—it especially makes 3D creation welcoming to anyone who wants to try. However, there are valid—very valid—concerns around it, particularly about data sourcing in generative AI. It is also true that the world has accepted it, and we want to leverage it—not because we’re afraid of being left behind (we launched AI very late), but because our mission comes first. We want to make 3D creation accessible while giving experienced creators precision and depth through Womp’s editing capabilities.\n\nOur first AI launch gave users a new on-ramp: generate 3D objects instantly, then shape them in Womp’s editor to customize, arrange, and 3D-print. We complement the pro tools people love by offering another path into 3D. We’ve heard strong feedback and we’re listening. Womp’s mission is easy 3D for everyone—speed plus control, together.",
  },
  {
    title: "Owning the work across roles",
    description: "We ship fast because the people closest to the problem own the work end to end.",
    expandedContent:
      "I think we as humans were meant to build something. At our core, I believe we’re all builders, and when we create something - anything - that makes someone pause, take a breath, and smile, that’s when we truly feel happy. \n\n I think everyone in the team should be a builder. At Womp, the person with the most context takes the work from idea to launch. For example, our Graphics engineers ship their new features directly, creating small panels in a deliberately experimental way. They shouldn't be blocked by design or frontend bottlenecks. Similarly, the backend or platform teams add UI directly to their services to assist with QA in parallel. I manage the overall design, sketch out flows, and add polish so the frontend can stay focused on performance, and designers can work on solving the core problems.\n\nWe minimize handoffs and maximize ownership. Our tight cycles mean that ideas quickly become real, live features.",
  },
  {
    title: "Consistency through UI",
    description: "We aim to maintain user interface consistency by separating design from the application layer.",
    expandedContent:
      "I created KookieUI to fit our way of building. The frontend imports components like Button from KookieUI, while I define their appearance, tokens, and behavior. When anything needs an update, I adjust KookieUI and publish a new version. The frontend team then updates the package, and the app adopts the new standard automatically.\n\nThis approach keeps design logic separate from application code. All design rules are centralized, so product code can focus on data flow, performance, and features. Engineers aren’t distracted by UI tweaks, and that’s exactly as it should be. Design matters and shouldn't be overlooked. If you ask someone uninterested in design to handle it, the result isn’t ideal, so don’t do it. As a startup, we can't hire for every specialized role, including a dedicated design engineer, so I took on that responsibility. Now, UI work doesn’t wait in a frontend queue. I handle component development, token management, usage reviews, and updates through the package. This leads to faster UI changes and a consistent interface across everything we release.",
  },
  {
    title: "We ship to learn, to fail fast.",
    description: "We ship MVPs on happy paths to test real demand before we invest.",
    expandedContent:
      "We ship small, functional versions that cover the happy path to test if people actually want what we're building. If users engage and find value, we invest further. We gather insights through user interviews, dashboards, and usage metrics.\n\nOur main priority during these cycles is to avoid major regressions. There’s plenty of evidence for this. For example, we recently released AI scene manipulation, enabling users to change materials or move objects using natural language. Right now, the feature is very limited, partially by design, because we knew when to stop and launch. We're uncertain if it deserves further investment, so we shipped the simplest version to observe if it provides value. \n\n This is just the latest example. In fact, you could say Womp itself is an ongoing experiment—a living, evolving project shaped by constant testing. If something doesn’t work, it either gets removed or, admittedly, sometimes receives less attention than it should.",
  },
];
