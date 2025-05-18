import { Rocket, Users, PartyPopper } from "lucide-react";

export type WompStat = {
  iconName: "Rocket" | "Users" | "PartyPopper";
  value: string;
  description: string;
};

export const wompStats: WompStat[] = [
  {
    iconName: "Rocket",
    value: "2+ years",
    description: "Womp launched publicly over 2 years ago. Since then, we've focused on making 3D design accessible to everyone.",
  },
  {
    iconName: "Users",
    value: "500k+ users",
    description: "Over 500k creators have registered on Womp, ranging from complete beginners to professional 3D designers working on commercial projects.",
  },
  {
    iconName: "PartyPopper",
    value: "100k+ projects",
    description: "The Womp community has created more than 100k shared projects, building a growing ecosystem of 3D designs and makers.",
  },
];
