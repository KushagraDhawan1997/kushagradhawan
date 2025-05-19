"use client";

import React, { useState, useEffect } from "react";
import {
  siReact,
  siNextdotjs,
  siFigma,
  siTailwindcss,
  siTypescript,
  siJavascript,
  siFramer,
  siGit,
  siVercel,
  siNotion,
  siNodedotjs,
  siFirebase,
  siStripe,
  siGithub,
  siSanity,
  siAmazon,
  siThreedotjs,
  siWebgl,
  siPostman,
  siMongodb,
  siRedux,
  siPrisma,
  siShopify,
  siVite,
  siJest,
  siPython,
  siStorybook,
  siSlack,
  siSupabase,
  siNpm,
} from "simple-icons/icons";
import { IconContainer } from "@/components/ui/icon-container";

export function TechIconsGrid() {
  const [iconSize, setIconSize] = useState<"sm" | "md">("md");
  const [iconClass, setIconClass] = useState("w-5 h-5");

  useEffect(() => {
    // Function to set icon size based on window width
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 640 && window.innerWidth < 768) {
          setIconSize("sm");
          setIconClass("w-4 h-4");
        } else {
          setIconSize("md");
          setIconClass("w-5 h-5");
        }
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const techIcons = [
    { icon: siReact, name: "React" },
    { icon: siNextdotjs, name: "Next.js" },
    { icon: siTailwindcss, name: "Tailwind CSS" },
    { icon: siTypescript, name: "TypeScript" },
    { icon: siJavascript, name: "JavaScript" },
    { icon: siNodedotjs, name: "Node.js" },
    { icon: siThreedotjs, name: "Three.js" },
    { icon: siRedux, name: "Redux" },
    { icon: siVite, name: "Vite" },
    { icon: siPrisma, name: "Prisma" },
    { icon: siMongodb, name: "MongoDB" },
    { icon: siWebgl, name: "WebGL" },
    { icon: siFramer, name: "Framer Motion" },
    { icon: siFigma, name: "Figma" },
    { icon: siFirebase, name: "Firebase" },
    { icon: siSanity, name: "Sanity" },
    { icon: siSupabase, name: "Supabase" },
    { icon: siStripe, name: "Stripe" },
    { icon: siShopify, name: "Shopify" },
    { icon: siJest, name: "Jest" },
    { icon: siStorybook, name: "Storybook" },
    { icon: siGit, name: "Git" },
    { icon: siGithub, name: "GitHub" },
    { icon: siVercel, name: "Vercel" },
    { icon: siPostman, name: "Postman" },
    { icon: siAmazon, name: "AWS" },
    { icon: siNotion, name: "Notion" },
    { icon: siPython, name: "Python" },
    { icon: siSlack, name: "Slack" },
    { icon: siNpm, name: "npm" },
  ];

  return (
    <div className="my-auto w-full">
      <div className="grid grid-cols-6 gap-2 w-fit mx-auto">
        {techIcons.map((tech, index) => (
          <div key={index}>
            <IconContainer size={iconSize}>
              <svg role="img" viewBox="0 0 24 24" className={`${iconClass} text-foreground/80`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d={tech.icon.path} />
              </svg>
            </IconContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
