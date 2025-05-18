"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AvatarData {
  imageUrl: string;
  profileUrl: string;
  initials?: string;
  color?: string;
}

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: AvatarData[];
}

export const AvatarCircles = ({ numPeople, className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((avatar, index) => (
        <a key={index} href={avatar.profileUrl} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
          <Avatar className="size-10 border-2 border-white dark:border-white/80 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <AvatarImage src={avatar.imageUrl} alt={`Avatar ${index + 1}`} />
            <AvatarFallback className={avatar.color || "bg-primary"}>{avatar.initials || avatar.imageUrl.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a className="focus:outline-none" href="">
          <Avatar className="size-10 border-2 border-white dark:border-white/80 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 bg-primary">
            <AvatarFallback className="text-primary font-medium text-xs">+{numPeople}</AvatarFallback>
          </Avatar>
        </a>
      )}
    </div>
  );
};
