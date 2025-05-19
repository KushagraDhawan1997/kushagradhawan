"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInView } from "react-intersection-observer";

export function TeamLeadershipBeam() {
  // Create a ref object that we'll use for the actual container
  const containerRef = useRef<HTMLDivElement>(null);

  // Use intersection observer with 20% margin for better UX
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    rootMargin: "100px",
    threshold: 0.1,
  });

  // Function to set both refs
  const setRefs = (node: HTMLDivElement | null) => {
    // Set the ref from useInView
    inViewRef(node);
    // Set our container ref manually
    if (containerRef.current !== node) {
      containerRef.current = node;
    }
  };

  const kd = useRef<HTMLDivElement>(null);
  const person1 = useRef<HTMLDivElement>(null);
  const person2 = useRef<HTMLDivElement>(null);
  const person3 = useRef<HTMLDivElement>(null);
  const person4 = useRef<HTMLDivElement>(null);
  const person5 = useRef<HTMLDivElement>(null);
  const person6 = useRef<HTMLDivElement>(null);

  // Globe's glow color is [0.3, 0.6, 0.8] which translates to RGB 76.5, 153, 204
  // Converting to string format for the beam colors
  const beamColor = "rgba(76, 153, 204, 0.35)";
  const beamGradientStart = "rgba(76, 153, 204, 1.0)";
  const beamGradientStop = "rgba(76, 153, 204, 0.3)";

  const reverseBeamColor = "rgba(76, 153, 204, 0.25)";
  const reverseBeamGradientStart = "rgba(76, 153, 204, 0.9)";
  const reverseBeamGradientStop = "rgba(76, 153, 204, 0.2)";

  // User profile information with names and images
  const profiles = {
    kd: {
      initials: "KD",
      name: "Kushagra Dhawan",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&h=256&auto=format&fit=crop",
      color: "text-primary",
    },
    person1: {
      initials: "AM",
      name: "Alex Morgan",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
      color: "text-blue-500",
    },
    person2: {
      initials: "JS",
      name: "Jamie Smith",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
      color: "text-green-500",
    },
    person3: {
      initials: "LP",
      name: "Lena Park",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop",
      color: "text-purple-500",
    },
    person4: {
      initials: "RJ",
      name: "Ryan Johnson",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&h=256&auto=format&fit=crop",
      color: "text-blue-500",
    },
    person5: {
      initials: "TM",
      name: "Tara Menon",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop",
      color: "text-amber-500",
    },
    person6: {
      initials: "EL",
      name: "Eli Lopez",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop",
      color: "text-pink-500",
    },
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center" ref={setRefs}>
      {/* Beams positioned behind avatars with negative z-index */}
      {inView && (
        <div className="absolute inset-0 z-0">
          {/* Beams from KD to team members (outgoing) */}
          <AnimatedBeam containerRef={containerRef} fromRef={kd} toRef={person1} pathColor={beamColor} gradientStartColor={beamGradientStart} gradientStopColor={beamGradientStop} />
          <AnimatedBeam containerRef={containerRef} fromRef={kd} toRef={person2} pathColor={beamColor} gradientStartColor={beamGradientStart} gradientStopColor={beamGradientStop} />
          <AnimatedBeam containerRef={containerRef} fromRef={kd} toRef={person3} pathColor={beamColor} gradientStartColor={beamGradientStart} gradientStopColor={beamGradientStop} />
          <AnimatedBeam containerRef={containerRef} fromRef={kd} toRef={person4} pathColor={beamColor} gradientStartColor={beamGradientStart} gradientStopColor={beamGradientStop} />
          <AnimatedBeam containerRef={containerRef} fromRef={kd} toRef={person5} pathColor={beamColor} gradientStartColor={beamGradientStart} gradientStopColor={beamGradientStop} />
          <AnimatedBeam containerRef={containerRef} fromRef={kd} toRef={person6} pathColor={beamColor} gradientStartColor={beamGradientStart} gradientStopColor={beamGradientStop} />

          {/* Beams from team members to KD (incoming - bidirectional) */}
          <AnimatedBeam containerRef={containerRef} fromRef={person1} toRef={kd} reverse={true} pathColor={reverseBeamColor} gradientStartColor={reverseBeamGradientStart} gradientStopColor={reverseBeamGradientStop} />
          <AnimatedBeam containerRef={containerRef} fromRef={person2} toRef={kd} reverse={true} pathColor={reverseBeamColor} gradientStartColor={reverseBeamGradientStart} gradientStopColor={reverseBeamGradientStop} />
          <AnimatedBeam containerRef={containerRef} fromRef={person3} toRef={kd} reverse={true} pathColor={reverseBeamColor} gradientStartColor={reverseBeamGradientStart} gradientStopColor={reverseBeamGradientStop} />
          <AnimatedBeam containerRef={containerRef} fromRef={person4} toRef={kd} reverse={true} pathColor={reverseBeamColor} gradientStartColor={reverseBeamGradientStart} gradientStopColor={reverseBeamGradientStop} />
          <AnimatedBeam containerRef={containerRef} fromRef={person5} toRef={kd} reverse={true} pathColor={reverseBeamColor} gradientStartColor={reverseBeamGradientStart} gradientStopColor={reverseBeamGradientStop} />
          <AnimatedBeam containerRef={containerRef} fromRef={person6} toRef={kd} reverse={true} pathColor={reverseBeamColor} gradientStartColor={reverseBeamGradientStart} gradientStopColor={reverseBeamGradientStop} />
        </div>
      )}

      {/* Avatars grid */}
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between relative z-10">
        <div className="flex flex-col justify-center gap-4">
          {[person1, person2, person3].map((personRef, i) => {
            const person = ["person1", "person2", "person3"][i];
            const profile = profiles[person as keyof typeof profiles];
            return (
              <div key={i} ref={personRef} className="flex items-center justify-center">
                <Avatar className="size-10 border-2 border-white dark:border-white/80 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <AvatarImage src={profile.image} alt={profile.name} />
                  <AvatarFallback className={profile.color + " font-medium text-sm"}>{profile.initials}</AvatarFallback>
                </Avatar>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col justify-center">
          <div ref={kd} className="flex items-center justify-center">
            <Avatar className="size-14 border-3 border-white dark:border-white/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <AvatarImage src={profiles.kd.image} alt={profiles.kd.name} />
              <AvatarFallback className={profiles.kd.color + " font-semibold"}>{profiles.kd.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {[person4, person5, person6].map((personRef, i) => {
            const person = ["person4", "person5", "person6"][i];
            const profile = profiles[person as keyof typeof profiles];
            return (
              <div key={i} ref={personRef} className="flex items-center justify-center">
                <Avatar className="size-10 border-2 border-white dark:border-white/80 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <AvatarImage src={profile.image} alt={profile.name} />
                  <AvatarFallback className={profile.color + " font-medium text-sm"}>{profile.initials}</AvatarFallback>
                </Avatar>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
