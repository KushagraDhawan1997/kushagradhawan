import { Rocket, Users, PartyPopper } from "lucide-react";

export type WompStat = {
  iconName: "Rocket" | "Users" | "PartyPopper";
  value: string;
  description: string;
};

export const wompStats: WompStat[] = [
  {
    iconName: "Rocket",
    value: "3+ years since launch",
    description: "Launched publicly over three years ago; kept a steady release cadence while we learned from real creators.",
  },
  {
    iconName: "Users",
    value: "600k+ users",
    description: "Registered creators range from first-timers to pros. We optimize first-win time for beginners.",
  },
  {
    iconName: "PartyPopper",
    value: "150k+ projects",
    description: "Community projects shared on Womp. We're evolving the creation → share → remix loop.",
  },
];
