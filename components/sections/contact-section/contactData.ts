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
  { name: "X", href: "https://x.com/kushagra_dhawan" },
  { name: "Github", href: "https://github.com/KushagraDhawan1997" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kushagra-dhawan" },
  { name: "Medium", href: "https://medium.com/@kushagradhawan" },
  { name: "Dev.to", href: "https://dev.to/kushagradhawan" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kushagra.dhawan",
  },
];
