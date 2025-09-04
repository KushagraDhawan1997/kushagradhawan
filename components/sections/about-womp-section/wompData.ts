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
    description:
      "Womp launched publicly over 2 years ago. We're still learning how to make 3D design accessible to everyone.",
  },
  {
    iconName: "Users",
    value: "500k+ users",
    description:
      "Over 500k creators have registered on Womp. We're trying to serve everyone from complete beginners to professional 3D designers.",
  },
  {
    iconName: "PartyPopper",
    value: "100k+ projects",
    description:
      "The Womp community has created more than 100k shared projects. We're still figuring out how to build the best ecosystem for 3D creators.",
  },
];
