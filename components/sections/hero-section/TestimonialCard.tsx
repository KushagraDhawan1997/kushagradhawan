/**
 * Testimonial Card Component
 *
 * This component displays a testimonial card in the hero section.
 * It includes the testimonial text, author information, and avatar.
 * Cards can have different sizes/positions based on the testimonial's position property.
 */

import { Avatar, Card, Flex, Text, Dialog, VisuallyHidden } from "@kushagradhawan/kookie-ui";
import { type Testimonial } from "./testimonials";

/**
 * TestimonialCardProps interface
 *
 * @property testimonial - The testimonial data to display
 */
type TestimonialCardProps = {
  testimonial: Testimonial;
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
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card size="3" variant="soft" asChild style={{ cursor: "pointer" }}>
          <button>
            <Flex direction="column" justify="between" height="100%" gap="6" p="2">
              {/* Testimonial content */}
              <Text size="4" weight="medium">
                "{testimonial.shortTestimonial}"
              </Text>

              {/* Author information */}
              {/* TODO: Replace with UserCard when component is ready in KookieUI */}
              <Flex align="center" gap="4">
                <Avatar highContrast size="3" variant="classic" fallback={testimonial.author.name.charAt(0)} />
                <Flex direction="column" gap="0">
                  <Text size="3" weight="medium">
                    {testimonial.author.name}
                  </Text>
                  <Text size="2" color="gray">
                    {testimonial.author.designation} at {testimonial.author.company}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </button>
        </Card>
      </Dialog.Trigger>

      <Dialog.Content>
        <VisuallyHidden>
          <Dialog.Title>{testimonial.author.name}</Dialog.Title>
        </VisuallyHidden>

        <Flex direction="column" gap="6">
          {/* Full testimonial text */}
          <Text size="5" weight="medium" style={{ whiteSpace: "pre-line" }}>
            "{testimonial.fullTestimonial}"
          </Text>

          {/* Where they worked together */}
          <Text size="2" color="gray">
            {testimonial.workedAt}
          </Text>

          {/* Author information header */}
          <Flex align="center" gap="4">
            <Avatar highContrast size="3" variant="classic" fallback={testimonial.author.name.charAt(0)} />
            <Flex direction="column" gap="0">
              <Text size="3" weight="medium">
                {testimonial.author.name}
              </Text>
              <Text size="2" color="gray">
                {testimonial.author.designation} at {testimonial.author.company}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
