import { Rocket, Users, Box } from "lucide-react";

export type WompStat = {
  iconName: "Rocket" | "Users" | "Box";
  value: string;
  description: string;
};

export const wompStats: WompStat[] = [
  // {
  //   iconName: "Rocket",
  //   value: "3+ years ",
  //   description: "Launched publicly over three years ago.",
  // },
  {
    iconName: "Users",
    value: "600k+ users",
    description: "Registered creators, from first-timers to pros.",
  },
  {
    iconName: "Box",
    value: "150k+ projects",
    description: "Community projects shared publicly on Womp.",
  },
];
