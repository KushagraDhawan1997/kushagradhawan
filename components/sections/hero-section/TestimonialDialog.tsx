/**
 * Testimonial Dialog Component
 *
 * This component displays a dialog with the full testimonial when a user clicks on a testimonial card.
 * It shows the complete testimonial text along with the author's information and avatar.
 */

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { type Testimonial } from "./testimonials";

/**
 * TestimonialDialogProps interface
 *
 * @property open - Whether the dialog is currently open
 * @property onOpenChange - Function to call when the open state changes
 * @property testimonial - The testimonial data to display in the dialog
 */
type TestimonialDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  testimonial: Testimonial | null;
};

/**
 * TestimonialDialog component
 *
 * Displays a modal dialog containing the full version of a testimonial.
 * The dialog includes:
 * - The author's avatar
 * - The author's name and title
 * - The complete testimonial text
 *
 * Features:
 * - Backdrop blur effect for visual appeal
 * - Properly formatted content with whitespace preservation
 * - Clean layout with appropriate spacing
 *
 * @param props - Component props (see TestimonialDialogProps)
 * @returns React component or null if no testimonial is provided
 */
export function TestimonialDialog({ open, onOpenChange, testimonial }: TestimonialDialogProps) {
  // Only render if a testimonial is provided
  if (!testimonial) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl backdrop-blur-sm bg-gradient-to-br from-card to-muted/80">
        {/* Author information header */}
        <DialogHeader className="flex flex-row items-center gap-2 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="text-primary">{testimonial.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <DialogTitle className="text-left font-medium text-base">{testimonial.author.name}</DialogTitle>
            <p className="text-xs text-muted-foreground text-left">
              {testimonial.author.designation} at {testimonial.author.company}
            </p>
          </div>
        </DialogHeader>

        {/* Full testimonial text */}
        <p className="text-foreground/80 text-base whitespace-pre-line">{testimonial.fullTestimonial}</p>
      </DialogContent>
    </Dialog>
  );
}
