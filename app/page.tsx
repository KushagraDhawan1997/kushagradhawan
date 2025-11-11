import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { AboutWompSection } from "../components/sections/about-womp-section";
import { BeliefSection } from "../components/sections/belief-section";
import { ProductPhilosophy } from "../components/sections/product-philosophy-section";
import { StartupSolutionsSection } from "../components/sections/startup-solutions-section";
import { AboutKookieUISection } from "@/components/sections/about-kookie-ui-section";
import { AboutKookieAISection } from "@/components/sections/about-kookie-ai-section";
import { getAllPosts } from "@/lib/articles";
import type { Metadata } from "next";

// Enhanced metadata for home page
export const metadata: Metadata = {
  description:
    "Kushagra Dhawan is a product builder and designer specializing in creating innovative digital experiences, design systems, and product solutions.",
  alternates: {
    canonical: "/",
  },
};

// JSON-LD structured data for SEO
export default function Home() {
  // Fetch all articles for the hero section
  const posts = getAllPosts();

  // Person structured data
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kushagra Dhawan",
    url: "https://kushagradhawan.com",
    jobTitle: "Product Builder and Designer",
    knowsAbout: ["Product Design", "UI/UX", "Design Systems", "Web Development", "Product Strategy"],
    sameAs: ["https://x.com/kushagra_dhawan", "https://www.linkedin.com/in/kushagra-dhawan/", "https://github.com/KushagraDhawan1997"],
  };

  // Professional Service structured data
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kushagra Dhawan - Product Design Services",
    description: "Professional product design and development services specializing in creating innovative digital products and user experiences.",
    url: "https://kushagradhawan.com",
    founder: {
      "@type": "Person",
      name: "Kushagra Dhawan",
    },
    serviceType: ["Product Design", "UX Design", "Design Systems", "Product Strategy"],
  };

  return (
    <>
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      <HeroSection posts={posts} />
      <BeliefSection />
      <AboutWompSection />
      <AboutKookieUISection />
      {/* <AboutKookieAISection /> */}
      {/* <AboutSection /> */}
      <ProductPhilosophy />
      <StartupSolutionsSection />
    </>
  );
}
