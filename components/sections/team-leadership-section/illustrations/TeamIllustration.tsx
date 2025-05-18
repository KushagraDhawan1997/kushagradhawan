"use client";

import { Ripple } from "@/components/magicui/ripple";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { IllustrationSize } from "@/components/generic/section";
import { useInView } from "react-intersection-observer";

type TeamIllustrationProps = {
  isMobile?: boolean;
  illustrationSize?: IllustrationSize;
};

export function TeamIllustration({ isMobile = false, illustrationSize = "medium" }: TeamIllustrationProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "-100px",
    threshold: 0.1,
  });

  // Create team avatars array with Unsplash images
  const teamAvatars = [
    {
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&crop=face",
      profileUrl: "#team-member-1",
      initials: "SR",
      color: "bg-blue-500",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&crop=face",
      profileUrl: "#team-member-2",
      initials: "JD",
      color: "bg-indigo-500",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop&crop=face",
      profileUrl: "#team-member-3",
      initials: "AT",
      color: "bg-purple-500",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&crop=face",
      profileUrl: "#team-member-4",
      initials: "MB",
      color: "bg-pink-500",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&auto=format&fit=crop&crop=face",
      profileUrl: "#team-member-5",
      initials: "KL",
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="w-full h-full relative overflow-hidden rounded-md" ref={ref} style={{ background: "linear-gradient(to bottom right, rgba(76.5, 153, 204, 0.1), rgba(76.5, 153, 204, 0.05))" }}>
      {inView && <Ripple />}
      <div className="absolute inset-0 flex items-center justify-center">
        {inView ? <AvatarCircles avatarUrls={teamAvatars} numPeople={12} /> : <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-full opacity-30" />}
      </div>
    </div>
  );
}
