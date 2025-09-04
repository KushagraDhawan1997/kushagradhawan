/**
 * Testimonials Data
 *
 * This file contains the testimonial data used in the hero section.
 * It defines the data structure and provides sample testimonials with author information.
 * Each testimonial includes both a short version for cards and a full version for the dialog.
 */

/**
 * Author interface
 *
 * Represents the person who provided the testimonial
 *
 * @property name - The full name of the author
 * @property designation - The author's job title or role
 * @property company - The company or organization the author belongs to
 */
export type Author = {
  name: string;
  designation: string;
  company: string;
};

/**
 * Testimonial interface
 *
 * Represents a complete testimonial with all necessary information
 *
 * @property id - Unique identifier for the testimonial
 * @property shortTestimonial - Brief version for display in cards
 * @property fullTestimonial - Complete version for display in dialogs
 * @property author - Information about the testimonial author
 * @property position - Size/position type for layout purposes
 * @property gridArea - Grid area identifier for CSS grid layout
 */
export type Testimonial = {
  id: number;
  shortTestimonial: string;
  fullTestimonial: string;
  author: Author;
  position: "tall" | "standard";
  gridArea?: string;
};

/**
 * Collection of testimonials
 *
 * These testimonials are displayed in the hero section of the portfolio.
 * They are arranged in a specific grid layout on desktop/tablet views.
 * Each testimonial has properties that determine its position and appearance.
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    shortTestimonial:
      "Kush pays close attention to detail and sets up systems that actually work.",
    fullTestimonial:
      "Kushagra is meticulous about the little things and keeps projects organized. He sets up systems and processes so that teams can work smoothly without getting lost in chaos. He can design, code, and handle the less glamorous work like documentation and project coordination. Most of all, he tries to keep things moving with calm reasoning even when it’s stressful. He’s not perfect, but he’s the kind of person who keeps trying to solve problems piece by piece.",
    author: {
      name: "Shruti Bhatia",
      designation: "Assistant Manager",
      company: "KPMG",
    },
    position: "tall",
    gridArea: "t1",
  },
  {
    id: 7,
    shortTestimonial:
      "Kush applies design thinking beyond just screens and interfaces.",
    fullTestimonial:
      "I’ve been working with Kush for over two years now as part of his design team at Womp. He brings design thinking not just into interfaces, but into how the team plans and communicates. He talks to engineers about technical details, and business folks about what matters to them — which helps us not get stuck in silos. Day to day, he helps me focus on what’s important, and I’ve learned a lot working directly with him.",
    author: {
      name: "Gopi Krishna",
      designation: "Product Designer",
      company: "Womp",
    },
    position: "standard",
    gridArea: "t7",
  },
  {
    id: 2,
    shortTestimonial:
      "Kush balances design, product, and engineering trade-offs.",
    fullTestimonial:
      "I’ve been working with Kushagra for over three years now at Womp. He leads our design team and keeps the product moving forward every day. He’s patient when explaining things, but also practical about trade-offs between design, engineering, and business needs. He doesn’t always get it right, but he’s open to discussion and learning along the way. I’ve grown a lot as a designer working closely with him.",
    author: {
      name: "Praneeth Potnuru",
      designation: "Product Designer",
      company: "Womp",
    },
    position: "standard",
    gridArea: "t2",
  },
  {
    id: 3,
    shortTestimonial: "Kush is a fast learner who shares what he knows.",
    fullTestimonial:
      "I worked with Kushagra and would recommend him to anyone building product. He learns quickly and breaks problems down logically. He’s detail-oriented, teaches by example, and knows how to work in a team. His energy makes it easier to get through tough work. He’s not trying to be perfect, but he tries to figure things out alongside the team, and that makes him reliable to work with.",
    author: {
      name: "Maitri Patel",
      designation: "Design Lead",
      company: "Microsoft",
    },
    position: "tall",
    gridArea: "t3",
  },
  {
    id: 4,
    shortTestimonial:
      "Kush pushes for clear team communication and even jumps into frontend when needed.",
    fullTestimonial:
      "I still work with Kush at Womp, and he leads design while helping us engineers understand the product better. He encourages communication between teams (front-end, graphics, back-end, QA), and makes sure we’re not just coding blindly. When I’m moving fast, he sometimes contributes frontend code himself to polish design details — which saves a lot of time. He also finds simpler UX fixes instead of over-engineering things, which keeps us moving. He’s not above the messy work, and that helps a lot.",
    author: {
      name: "Anuj Verma",
      designation: "Software Engineer",
      company: "Womp",
    },
    position: "standard",
    gridArea: "t4",
  },
  {
    id: 5,
    shortTestimonial:
      "Kush has been consistent over the years and keeps picking up new skills.",
    fullTestimonial:
      "I’ve known Kushagra since 2018, first as a senior at university and later as he managed design at Wishbox studio. It’s 2025 now, so it’s been well over six years. He keeps showing up with the same curiosity, learning new skills and trying to get the best out of whoever he’s working with. He’s not flashy, but he’s steady, and he genuinely cares about design and technology. That’s what I’ve valued most about working with him.",
    author: {
      name: "Chanakya Kilaru",
      designation: "Frontend Engineer",
      company: "Snaptrude",
    },
    position: "standard",
    gridArea: "t5",
  },
  {
    id: 6,
    shortTestimonial:
      "Kush works at the intersection of user needs, engineering, and business.",
    fullTestimonial:
      "When problems get complicated, Kush helps break them down into simpler steps. He cares about users, but he also listens to engineering and business constraints so things are realistic. He’s not trying to be a visionary — he just keeps things practical and clear so the team can make progress without getting lost in the big picture.",
    author: {
      name: "Lahari Kasarla",
      designation: "Engagement Manager",
      company: "HCLTech",
    },
    position: "standard",
    gridArea: "t6",
  },
];
