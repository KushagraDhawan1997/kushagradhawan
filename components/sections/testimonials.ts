export type Author = {
  name: string;
  designation: string;
  company: string;
};

export type Testimonial = {
  id: number;
  shortTestimonial: string;
  fullTestimonial: string;
  author: Author;
  position: "tall" | "standard";
  gridArea?: string;
  workedAt: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    shortTestimonial: "Kush is probably the most meticulous and detail-oriented person I have ever worked with.",
    fullTestimonial:
      "Kush is meticulous about the little things. He demonstrates consistency in his work, and has the ability to deal with the most stressful situations with calm and logic. He sets up just-enough systems so the team can work without chaos and hit dates, is superb at documentation, project management, as well as time management. He is a unicorn; he can design, code, handle clients, manage a team, and most importantly, is a great problem-solver. ",
    author: {
      name: "Shruti Bhatia",
      designation: "Assistant Manager",
      company: "KPMG",
    },
    position: "tall",
    gridArea: "t1",
    workedAt: "Shruti worked with me at Wishbox for 2 years as my colleague.",
  },
  {
    id: 4,
    shortTestimonial: "Kush leads design, unblocks teams and constantly pushes us to overcommunicate.",
    fullTestimonial:
      "I still work with Kush at Womp. He leads design and helps engineers understand the product better. He keeps communication clear across front-end, graphics, back-end, and QA, which removes blockers. When timelines are tight, he often adds small frontend touches himself to land polish before the release. He also finds simpler UX changes instead of over-engineering, which keeps us shipping.",
    author: {
      name: "Anuj Verma",
      designation: "Software Engineer",
      company: "Womp",
    },
    position: "standard",
    gridArea: "t4",
    workedAt: "Anuj has been working with me at Womp for 3 years as a Software Engineer.",
  },
  {
    id: 5,
    shortTestimonial: "Kush is steady, keeps learning, and helps teams keep shipping.",
    fullTestimonial:
      "I've known and worked with Kush since 2018, right from our university days, to Wishbox, and then later at Womp. He's been consistent the whole time. He keeps picking up new skills and tries to get the best out of whoever he's working with. He cares deeply about design and tech, and helps teams move work across the line.",
    author: {
      name: "Chanakya Kilaru",
      designation: "Software Engineer",
      company: "Snaptrude",
    },
    position: "standard",
    gridArea: "t5",
    workedAt: "Chanakya worked with me at Wishbox Studio and Womp as my Frontend Engineer.",
  },
];
