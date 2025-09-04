/**
 * Product Philosophy Data
 *
 * This file contains data for the product philosophy section of the website.
 * It includes principles that guide building products at speed using AI,
 * integrated disciplines, and consistent systems—learned from experience
 * at Womp and embodied in KookieUI.
 */

export interface Principle {
  title: string;
  description: string;
  expandedContent: string;
}

export const principles: Principle[] = [
  {
    title: "AI-First Product Thinking",
    description:
      "Start with what AI makes possible, not just how it can optimize what already exists.",
    expandedContent:
      "A lot of AI products today just layer AI on top of existing workflows. That’s fine, but I think the harder question is: what can AI make possible that wasn’t possible before?\n\nAt Womp, we’ve tried both approaches. Some of our experiments worked because we started by asking what AI was uniquely good at, rather than treating it as an add-on. Other times, we ended up with features that looked interesting on paper but weren’t actually useful. It’s tricky.\n\nDoing this well requires more than excitement about AI — it requires enough technical depth to know what’s real and enough product sense to know what matters to users. I don’t always get that balance right. I’m still learning how to spot the difference between something that’s technically impressive and something that’s actually valuable.",
  },
  {
    title: "One Team, Not Departments",
    description:
      "Design, product, and engineering work better when they share context instead of handing things off.",
    expandedContent:
      "Most companies separate design, product, and engineering into different departments. That separation makes handoffs clean, but it also slows everything down and creates misunderstandings. I’ve seen projects stall because one team didn’t fully understand the constraints of another.\n\nAt Womp, I’ve been lucky to work in a way that’s more integrated. I talk to designers and engineers every day, and we solve problems together instead of in sequence. My role often ends up being about translation — turning engineering trade-offs into design decisions, or explaining user priorities in terms engineers care about.\n\nThis isn’t perfect. Sometimes it creates confusion because boundaries blur. But the upside is that decisions happen faster, and the product feels more cohesive. KookieUI is one example of trying to bridge these worlds: a design system shaped by engineering realities and product needs at the same time. We’re still figuring out where integration helps and where it gets messy.",
  },
  {
    title: "Consistency Gives Speed",
    description:
      "Reusable systems make it easier to move fast without burning out or breaking things.",
    expandedContent:
      "Moving fast doesn’t mean cutting corners. It means not wasting time reinventing the same solutions every time. Consistency sounds boring, but it’s what gives you speed when projects get complex.\n\nAt Womp, we’ve invested in design systems and shared components so we’re not re-deciding the basics every sprint. KookieUI grew out of this need — a way to make sure designers and engineers don’t have to solve the same UI problems over and over.\n\nThis isn’t always smooth. Sometimes investing in consistency feels like slowing down, especially when deadlines are close. Other times, we realize we’ve added too much structure and it starts to feel rigid. The hard part is knowing how much consistency is enough. We’re still adjusting as we grow, but I’m convinced the right foundation saves time in the long run.",
  },
  {
    title: "User Value Over Technical Purity",
    description:
      "The best solution is the one that helps users, even if it’s not technically elegant.",
    expandedContent:
      "There’s always a temptation to chase clean architecture or perfect implementations. The truth is: most of what we ship at Womp isn’t technically elegant. And that’s by design.\n\nOur goal is to ship fast and learn fast. Getting features into users’ hands quickly teaches us more than long planning cycles ever could. Those lessons tell us what’s worth polishing later and what isn’t worth keeping at all.\n\nThis doesn’t mean quality doesn’t matter. It means we accept trade-offs openly. Sometimes speed and learning win. Sometimes long-term stability wins. I don’t always know where that line is — we’re figuring it out as we go. But what’s clear is that real user value comes first, and purity can wait.",
  },
];
