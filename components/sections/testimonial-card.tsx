"use client";

import { Avatar, Card, Flex, Text, Dialog, VisuallyHidden } from "@kushagradhawan/kookie-ui";
import { type Testimonial } from "./testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card size="1" variant="soft" asChild style={{ cursor: "pointer" }}>
          <button>
            <Flex direction="column" justify="between" height="100%" gap="6" p="2">
              <Text size="3" weight="medium">
                "{testimonial.shortTestimonial}"
              </Text>

              <Flex align="center" gap="2">
                <Avatar highContrast size="2" variant="soft" fallback={testimonial.author.name.charAt(0)} />
                <Flex direction="column" gap="0">
                  <Text size="2" weight="medium">
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

      <Dialog.Content size="1">
        <VisuallyHidden>
          <Dialog.Title>{testimonial.author.name}</Dialog.Title>
        </VisuallyHidden>

        <Flex direction="column" gap="6">
          <Text size="3" weight="medium" style={{ whiteSpace: "pre-line" }}>
            {testimonial.fullTestimonial}
          </Text>

          <Text size="2" color="gray">
            {testimonial.workedAt}
          </Text>

          <Flex align="center" gap="4">
            <Avatar highContrast size="2" variant="soft" fallback={testimonial.author.name.charAt(0)} />
            <Flex direction="column" gap="0">
              <Text size="2" weight="medium">
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
