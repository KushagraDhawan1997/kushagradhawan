import React from "react";
import { cn } from "@/lib/utils";

interface IconContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export function IconContainer({ children, className, size = "md", ...props }: IconContainerProps) {
  const sizeClasses = {
    sm: "p-2 w-10 h-10",
    md: "p-2.5 w-12 h-12",
    lg: "p-3 w-14 h-14",
  };

  return (
    <div className={cn("flex items-center justify-center bg-gradient-to-br from-muted/70 to-muted/40 hover:bg-primary/10 border border-primary/5 transition-all duration-300 rounded-md", sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
}
