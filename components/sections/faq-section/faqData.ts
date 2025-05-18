/**
 * FAQ Data
 *
 * This file contains the data for frequently asked questions.
 * Each FAQ entry has a question and a detailed answer.
 */

/**
 * FAQ interface
 *
 * @property question - The frequently asked question
 * @property answer - The detailed answer to the question
 */
export type FAQ = {
  question: string;
  answer: string;
};

/**
 * Array of FAQ items
 *
 * These questions and answers cover various aspects of professional approach,
 * leadership philosophy, and product development methodology.
 */
export const faqs: FAQ[] = [
  {
    question: "What's different about combining engineering, product and design backgrounds?",
    answer:
      "This combination creates three key advantages in product development. First, design skills ensure products solve real user problems intuitively. Second, product knowledge connects user needs to business goals. Third, engineering understanding prevents technical surprises late in development. Together, these eliminate translation errors between departments and create more cohesive products with fewer rewrites and design compromises.",
  },
  {
    question: "What type of product challenges are most interesting?",
    answer:
      "Early-stage product development presents the most engaging challenges. Solving complex, undefined problems delivers more satisfaction than incremental optimization. Starting with blank slates, fixing broken systems, or unsticking teams requires creative thinking and produces significant impact. The most valuable insights often come from testing ideas that fail but clarify exactly what to build next.",
  },
  {
    question: "What's an effective approach to product development?",
    answer:
      "Rapid iteration based on user feedback consistently outperforms extended planning cycles. The most effective approach puts working features in users' hands quickly, then adapts based on actual usage data. While research has value, watching real user behavior provides more actionable insights than surveys or focus groups. Regular releases maintain team momentum and ensure continuous value delivery.",
  },
  {
    question: "What makes for effective product leadership?",
    answer:
      "Effective product leadership creates environments where teams solve the right problems efficiently. This means protecting teams from organizational politics, unrealistic deadlines, and scope creep to maintain quality and morale. Involving the people doing the work in scheduling leads to more realistic timelines. Explaining why products are being built, not just what to build, enables better decision-making across the organization.",
  },
  {
    question: "How do you make complex product decisions with limited information?",
    answer:
      "Startup environments require balancing available data with experience-based judgment. Moving forward with incomplete information typically yields better results than waiting for perfect data. Clear prioritization frameworks help determine what to build now versus later. Evaluating features based on potential user impact provides clarity even in complex situations with limited information.",
  },
];
