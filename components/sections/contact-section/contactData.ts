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
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kushagra-dhawan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { name: "X", href: "https://x.com/kushagra_dhawan?s=21" },
  { name: "Instagram", href: "https://www.instagram.com/kushagra.dhawan?igsh=MXg2ejdkZWtoNWRjcg%3D%3D&utm_source=qr" },
];
