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
    shortTestimonial: "Kush brings order to complex projects through systematic thinking and calm leadership.",
    fullTestimonial:
      "Kush makes projects run smoothly even under pressure. When deadlines tighten and work gets chaotic, he determines what needs to happen in what order. His systems help both current projects and future team processes. He pays attention to details without becoming perfectionist, and maintains calm when stress levels rise around him.",
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
    shortTestimonial: "Kush applies design thinking beyond interfaces to transform how teams approach problems.",
    fullTestimonial:
      "Working with Kush changed our team's problem-solving approach. He applies design principles to project planning, stakeholder communication, and breaking down complex challenges. He communicates effectively with both developers on technical details and executives on business value, keeping everyone aligned on core objectives.",
    author: {
      name: "Raj Mehta",
      designation: "Product Manager",
      company: "Adobe",
    },
    position: "standard",
    gridArea: "t7",
  },
  {
    id: 2,
    shortTestimonial: "Kush understands engineering, design, business, and product simultaneously, creating solutions that work for everyone.",
    fullTestimonial:
      "Kush stands out through his understanding of multiple disciplines. Unlike specialists, he grasps engineering constraints, design principles, business requirements, and user needs simultaneously. His decisions work because he considers all perspectives. He collaborates patiently and goes beyond expectations to ensure product success.",
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
    shortTestimonial: "Kush teaches problem-solving frameworks while working, not just solving immediate issues.",
    fullTestimonial:
      "Kush learns new concepts quickly and explains them clearly to others. He focuses on important details without getting lost in minutiae. His most valuable trait is teaching while working—collaborating with him means learning his approach. Teams improve their problem-solving abilities because he provides frameworks for addressing complex challenges.",
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
    shortTestimonial: "Kush bridges communication gaps between technical and business teams.",
    fullTestimonial:
      "Kush helps different teams communicate effectively. He facilitates discussions between frontend, backend, design, and QA, making technical conversations accessible to everyone. He explains why technical decisions matter to business stakeholders and helps them understand implementation constraints. Organizations run more smoothly with his involvement.",
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
    shortTestimonial: "Kush identifies hidden potential in team members and creates growth opportunities.",
    fullTestimonial:
      "Kush helps team members exceed their perceived capabilities. He identifies strengths people don't recognize in themselves and creates opportunities to develop them. His leadership enables people to tackle and succeed at challenges they wouldn't have attempted otherwise. Having evolved from managing university projects to leading design departments, he brings this growth mindset to everyone he works with.",
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
    shortTestimonial: "Kush creates solutions that satisfy user needs, technical constraints, and business goals simultaneously.",
    fullTestimonial:
      "Kush approaches product challenges strategically, creating user value while respecting technical and business constraints. He brings clarity to complex projects and directs team focus to what matters most. His combination of strategic vision and technical understanding makes ambitious goals achievable. He transforms complicated requirements into clear, actionable steps.",
    author: {
      name: "Lahari Kasarla",
      designation: "Engagement Manager",
      company: "HCLTech",
    },
    position: "standard",
    gridArea: "t6",
  },
];
