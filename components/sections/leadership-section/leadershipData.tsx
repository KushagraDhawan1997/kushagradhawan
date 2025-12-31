import React from "react";
export interface WhyMeItem {
  iconName: "Briefcase" | "Code" | "Zap" | "Handshake" | "LineChart" | "Ban" | "Clock" | "Users";
  title: string;
  description: React.ReactNode;
}

export const leadershipItems: WhyMeItem[] = [
  {
    iconName: "Briefcase",
    title: "Product, Design & Code",
    description: (
      <>
        I like to build. To do that well, I need to understand what it is, how it looks, and how it works. I don't need to be the best at everything, but I need to understand.
        <br />
        <br />
        If I can't it, I can't truly empathize with the people who actually do it.
      </>
    ),
  },
  {
    iconName: "Ban",
    title: "Bring Agency",
    description: (
      <>
        It's about caring enough to step up. If we're blocked, say with design, I will design it, and I do design it. I'm not attached to any title; I'm attached to shipping and the outcome.
        < br />
        <br />
        I will do whatever is needed - big or small - to keep us moving forward.
      </>
    ),
  },
  {
    iconName: "Zap",
    title: "Ship Things",
    description: (
      <>
        I learn best by putting things into the world. You can debate forever, but you only find the truth when a user interacts with your work.
        < br />
        <br />
        Shipping early, even if it's rough, is the only honest way to validate that we're moving in the right direction.
      </>
    ),
  },
];
