"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IllustrationSize } from "@/components/generic/section";

type CrossFunctionalTeamIllustrationProps = {
  isMobile?: boolean;
  illustrationSize?: IllustrationSize;
};

export function CrossFunctionalTeamIllustration({ isMobile = false, illustrationSize = "medium" }: CrossFunctionalTeamIllustrationProps) {
  // Adjust sizes based on illustrationSize prop
  const getSizes = () => {
    switch (illustrationSize) {
      case "small":
        return { innerRadius: 45, middleRadius: 80, outerRadius: 115 };
      case "large":
        return { innerRadius: 70, middleRadius: 120, outerRadius: 160 };
      case "medium":
      default:
        return { innerRadius: 50, middleRadius: 100, outerRadius: 140 };
    }
  };

  const { innerRadius, middleRadius, outerRadius } = getSizes();

  return (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
          {/* Inner circle - larger avatars */}
          <OrbitingCircles iconSize={40} radius={innerRadius} speed={1} duration={15}>
            <Avatar className="size-10 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 1" />
              <AvatarFallback className="text-blue-500 font-medium text-xs">TD</AvatarFallback>
            </Avatar>
            <Avatar className="size-10 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 2" />
              <AvatarFallback className="text-green-500 font-medium text-xs">MJ</AvatarFallback>
            </Avatar>
            <Avatar className="size-10 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 3" />
              <AvatarFallback className="text-purple-500 font-medium text-xs">AS</AvatarFallback>
            </Avatar>
            <Avatar className="size-10 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 4" />
              <AvatarFallback className="text-primary font-medium text-xs">RJ</AvatarFallback>
            </Avatar>
          </OrbitingCircles>

          {/* Middle circle - medium avatars */}
          <OrbitingCircles iconSize={32} radius={middleRadius} speed={1} reverse duration={20}>
            <Avatar className="size-8 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 5" />
              <AvatarFallback className="text-amber-500 font-medium text-xs">EL</AvatarFallback>
            </Avatar>
            <Avatar className="size-8 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 6" />
              <AvatarFallback className="text-blue-500 font-medium text-xs">DW</AvatarFallback>
            </Avatar>
            <Avatar className="size-8 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 7" />
              <AvatarFallback className="text-pink-500 font-medium text-xs">SC</AvatarFallback>
            </Avatar>
            <Avatar className="size-8 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 8" />
              <AvatarFallback className="text-green-500 font-medium text-xs">JP</AvatarFallback>
            </Avatar>
            <Avatar className="size-8 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 9" />
              <AvatarFallback className="text-purple-500 font-medium text-xs">KT</AvatarFallback>
            </Avatar>
          </OrbitingCircles>

          {/* Outer circle - smaller avatars */}
          <OrbitingCircles iconSize={24} radius={outerRadius} speed={1} duration={25}>
            <Avatar className="size-6 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 10" />
              <AvatarFallback className="text-blue-500 font-medium text-xs">LB</AvatarFallback>
            </Avatar>
            <Avatar className="size-6 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 11" />
              <AvatarFallback className="text-amber-500 font-medium text-xs">NP</AvatarFallback>
            </Avatar>
            <Avatar className="size-6 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 12" />
              <AvatarFallback className="text-green-500 font-medium text-xs">CM</AvatarFallback>
            </Avatar>
            <Avatar className="size-6 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 13" />
              <AvatarFallback className="text-pink-500 font-medium text-xs">OW</AvatarFallback>
            </Avatar>
            <Avatar className="size-6 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 14" />
              <AvatarFallback className="text-purple-500 font-medium text-xs">BT</AvatarFallback>
            </Avatar>
            <Avatar className="size-6 border-2 border-white dark:border-white/80 shadow-md">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop" alt="Team Member 15" />
              <AvatarFallback className="text-blue-500 font-medium text-xs">AA</AvatarFallback>
            </Avatar>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}
