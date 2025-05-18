/**
 * Contact Data
 *
 * This file contains data for the contact section, such as social media links.
 */

/**
 * Social Link interface
 *
 * @property name - The name of the social media platform
 * @property href - The URL to the social media profile
 */
export type SocialLink = {
  name: string;
  href: string;
};

/**
 * Array of social media links
 *
 * These links are displayed in the contact section for professional networking.
 */
export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "https://linkedin.com/in/kushagradhawan" },
  { name: "GitHub", href: "https://github.com/kushagradhawan" },
  { name: "Twitter", href: "https://twitter.com/kushagradhawan" },
];
