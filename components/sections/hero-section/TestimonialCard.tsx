/**
 * Testimonial Card Component
 *
 * This component displays a testimonial card in the hero section.
 * It includes the testimonial text, author information, and avatar.
 * Cards can have different sizes/positions based on the testimonial's position property.
 */

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ContentWrapper } from "@/components/generic/ui/content-wrapper";
import { type Testimonial } from "./testimonials";

/**
 * TestimonialCardProps interface
 *
 * @property testimonial - The testimonial data to display
 * @property onClick - Function to call when the card is clicked
 * @property isMobile - Whether the card is being displayed in mobile view
 */
type TestimonialCardProps = {
  testimonial: Testimonial;
  onClick: (testimonial: Testimonial) => void;
  isMobile?: boolean;
};

/**
 * TestimonialCard component
 *
 * Displays a testimonial in a card format with different styling based on:
 * - Position type (tall or standard)
 * - View type (mobile or desktop)
 *
 * Features:
 * - Responsive design with different layouts for mobile and desktop
 * - Clickable card that opens a dialog with the full testimonial
 * - Visual hover effects for better user interaction
 * - Avatar display for the testimonial author
 *
 * @param props - Component props (see TestimonialCardProps)
 * @returns React component
 */
export function TestimonialCard({ testimonial, onClick, isMobile = false }: TestimonialCardProps) {
  // Determine height classes based on card position
  const getHeightClasses = () => {
    if (isMobile) return "h-full"; // Use full height on mobile

    return testimonial.position === "tall"
      ? "h-full min-h-[320px]" // Set minimum height for tall cards
      : "min-h-[224px]"; // Set minimum height for standard cards
  };

  // Get content padding and text size based on card position
  const getContentClasses = () => {
    if (isMobile) return "text-base";

    return testimonial.position === "tall" ? "text-base md:text-lg leading-relaxed flex-grow" : "text-base flex-grow";
  };

  return (
    <ContentWrapper borderLeft={true} borderRight={true} extendBorders={true} extendAmount={8} className="h-full">
      <div className={`group cursor-pointer h-full`} onClick={() => onClick(testimonial)}>
        <Card className={`backdrop-blur-sm border-border/10 hover:shadow-lg transition-all duration-300 bg-gradient-to-bl from-card to-muted/10 flex flex-col h-full ${getHeightClasses()}`}>
          {/* Testimonial content */}
          <CardContent className="flex flex-col flex-grow">
            <p className={`text-foreground/80 ${getContentClasses()}`}>{testimonial.shortTestimonial}</p>
          </CardContent>

          {/* Author information and avatar */}
          <CardHeader className="mt-auto">
            <div className="flex items-center gap-3">
              <Avatar className={`group-hover:scale-110 transition-transform ${!isMobile && testimonial.position === "tall" ? "h-12 w-12" : "h-10 w-10"}`}>
                <AvatarFallback className="text-primary">{testimonial.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className={`font-medium ${!isMobile && testimonial.position === "tall" ? "text-base" : "text-sm"}`}>{testimonial.author.name}</div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.author.designation} at {testimonial.author.company}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </ContentWrapper>
  );
}
