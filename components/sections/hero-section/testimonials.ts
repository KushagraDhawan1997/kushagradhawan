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
    shortTestimonial: "Kush keeps releases unblocked, sets up simple systems that actually ship.",
    fullTestimonial:
      "Kushagra is meticulous about the little things and keeps projects moving toward release. He sets up just-enough systems so the team can work without chaos and hit dates. He can design, code, and also handle the quieter work—documentation and coordination—that keeps shipping on track. Most of all, he's calm under pressure and keeps nudging things forward. He's not perfect, but he keeps breaking problems down until the build ships.",
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
    shortTestimonial: "Kush brings design thinking into how we plan and ship as a team.",
    fullTestimonial:
      "I've worked with Kush for over two years on the design team at Womp. He applies design thinking to planning and communication, not just screens. He talks details with engineers and keeps business goals in view, which avoids siloed work and helps us ship the right thing. Day to day, he keeps priorities clear and reduces handoff friction. I've learned a lot working alongside him.",
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
    shortTestimonial: "Kush balances design, engineering, and business so the product ships.",
    fullTestimonial:
      "I've worked with Kushagra for over three years at Womp. He leads our design team and keeps the product moving every day. He explains patiently, but he's practical about trade-offs so we can ship without getting stuck. He's open to feedback, which makes iteration faster. I've grown as a designer working closely with him.",
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
    shortTestimonial: "Kush learns fast and turns learning into shipped work.",
    fullTestimonial:
      "I worked with Kushagra and would recommend him to anyone building product. He learns quickly, breaks problems down, and turns that into steady progress. He's detail-oriented, teaches by example, and is easy to team up with. His energy helps during tough sprints. He's not trying to be perfect—he focuses on figuring things out together so the release can go out.",
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
    shortTestimonial: "Kush improves handoffs and even jumps into FE to land releases.",
    fullTestimonial:
      "I still work with Kush at Womp. He leads design and helps engineers understand the product better so we don't build in the dark. He keeps communication clear across front-end, graphics, back-end, and QA, which removes blockers. When timelines are tight, he'll add small frontend touches himself to land polish before the release. He also finds simpler UX changes instead of over-engineering, which keeps us shipping.",
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
    shortTestimonial: "Kush is steady, keeps learning, and helps teams keep shipping.",
    fullTestimonial:
      "I've known Kushagra since 2018—first at university and later while he managed design at Wishbox. It's 2025 now, and he's been consistent the whole time. He keeps picking up new skills and tries to get the best out of whoever he's working with. He's not flashy, but he's steady, cares about design and tech, and helps teams move work across the line. That's what I've valued most.",
    author: {
      name: "Chanakya Kilaru",
      designation: "Frontend Engineer",
      company: "Snaptrude",
    },
    position: "standard",
    gridArea: "t5",
  },
  // {
  //   id: 6,
  //   shortTestimonial:
  //     "Kush works at the intersection of user needs, engineering, and business.",
  //   fullTestimonial:
  //     "When problems get complicated, Kush helps break them down into simpler steps. He cares about users, but he also listens to engineering and business constraints so things are realistic. He's not trying to be a visionary — he just keeps things practical and clear so the team can make progress without getting lost in the big picture.",
  //   author: {
  //     name: "Lahari Kasarla",
  //     designation: "Engagement Manager",
  //     company: "HCLTech",
  //   },
  //   position: "standard",
  //   gridArea: "t6",
  // },
];
