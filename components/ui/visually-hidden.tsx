import { cn } from "@/lib/utils";
import * as React from "react";

type VisuallyHiddenProps = React.HTMLAttributes<HTMLSpanElement>;

/**
 * VisuallyHidden component that hides content visually
 * but keeps it accessible to screen readers.
 *
 * Used for improved accessibility without affecting visual design.
 */
export function VisuallyHidden({ className, children, ...props }: VisuallyHiddenProps) {
  return (
    <span className={cn("absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden clip-rect-0 whitespace-nowrap border-0", className)} {...props}>
      {children}
    </span>
  );
}
