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
    title: "There's a lot of value in agency",
    description:
      "In startups, leadership is the work of keeping the team pointed at the same goal: building something users actually want and can actually use.",
    expandedContent:
      "I have learned that leadership, at least in startups, is really about agency. It's being the person who assumes the responsibility of helping people stay oriented toward the same goal: build something users actually want, and can actually use. The hard part is that different disciplines approach that goal from different angles, and those don't naturally align.\n\nMy role has evolved into keeping those angles aligned. I'm never the smartest person in the room, and all I bring to the table is my ability to think across disciplines.",
  },
  {
    title: "Your users see product as a whole, and not as a sum of its parts",
    description:
      "Most product failures come from teams optimizing locally instead of thinking holistically around how the product feels to users.",
    expandedContent:
      "The biggest problem I've seen is siloed thinking: engineers think like engineers, designers think like designers, and product managers think like product managers.\n\nBut users don't think that way. They don't care who or which team made a decision. They only care whether what they're using makes sense.\n\nThis disconnect is where most product problems live. When engineers optimize but ignore usability, when designers focus on aesthetics but miss technical constraints, when product managers chase metrics but lose sight of user value, that's when products fail.",
  },
  {
    title: "Not every solution is good or right",
    description:
      "The job is to choose the solution that actually works for users.",
    expandedContent:
      "I hated the term “design thinking.” It felt obvious, like of course we should think about users. Who else will you build for? \n\nBut I've now come to appreciate the point. A problem can have thousands of solutions. The goal is finding the solution that actually works for users, not you personally.\n\nIf the problem is “get from point A to point B,” you could walk, run, cycle, drive, heck even ride on someone's back. They all technically solve the problem. But not equally well. We often make the mistake of not differentiating between what a “solution” is, and what a “good solution” is.",
  },
  {
    title: "Make it intuitive, don’t explain the confusion",
    description:
      "When something is hard to use, the best fix is usually to remove the friction—rather than adding tooltips to justify it.",
    expandedContent:
      "Designers sometimes see a usability problem and respond with tooltips, callouts, or alerts. But users rarely read them. And without testing, you don’t know if it helped.\n\nThis is a common pattern: when something is hard to use, the first instinct is to explain why it’s hard. But the better solution is usually to make it easier.\n\nInstead of adding a tooltip to explain a confusing button, redesign the button so it doesn’t need explanation.\n\nIf we’re adding layers of explanation, it’s often a signal we’re solving the wrong problem.",
  },
  {
    title: "Emphathy beats guesswork",
    description:
      "Thinking like a user requires understanding their context and mental models—not “if I were a user…” imagination.",
    expandedContent:
      "Engineers sometimes ship prototypes without thinking about users at all. When they do, it's often the “If I were a user, I would…” logic.\n\nThat's not user thinking. That's guesswork.\n\nThinking like a user requires empathy, and yeah I know, it's a cliche at this point, but it means understanding the user’s context, constraints, and mental models.\n\nEven small choices change when you do that. If a button could go on the left or right, the effort is the same either way. But if the right placement is better UX, putting it there reduces churn later, makes the designer’s job easier, and speeds up shipping.",
  },
  {
    title: "Protect team sanity",
    description:
      "Fast shipping isn’t worth burnout. Sustainable pace is part of the job.",
    expandedContent:
      "One area where I don’t compromise is team sanity. I don’t want people working overtime, stressed, or carrying unnecessary deadlines. Good work comes from people who are well-rested, focused, and engaged.\n\nWhen people are exhausted, they make worse decisions, they’re less creative, and they take shortcuts that create bigger problems later.\n\nStartups are chaotic. We still ship fast and make trade-offs. But I see it as part of my role to shield the team from noise so they can focus on solving real problems.",
  },
];
