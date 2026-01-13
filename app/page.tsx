import { Hero } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ExperienceSection } from "@/components/sections/experience-section";
// import { AboutSection } from "@/components/sections/about-section";
import { ProductPhilosophy } from "@/components/sections/product-philosophy-section";
// import { AboutKookieAISection } from "@/components/sections/about-kookie-ai-section";
import { HeroSectionPersonal } from "@/components/sections/hero-section-personal";
import { RecentArticlesSection } from "@/components/sections/recent-articles-section";
import { getAllPosts, getLatestAnnouncement } from "@/lib/articles";
import type { Metadata } from "next";

// Enhanced metadata for home page
export const metadata: Metadata = {
  description:
    "Kushagra Dhawan is a product builder and designer specializing in creating innovative digital experiences, design systems, and product solutions.",
  alternates: {
    canonical: "/",
  },
};

interface HomeProps {
  searchParams: Promise<{ view?: string }>;
}

// JSON-LD structured data for SEO
export default async function Home({ searchParams }: HomeProps) {
  // Fetch all articles for the hero section
  const posts = getAllPosts();
  const latestAnnouncement = getLatestAnnouncement();
  // Get view mode from URL params, default to "professional"
  const params = await searchParams;
  const viewMode =
    (params.view as "professional" | "personal") || "professional";

  // Person structured data
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kushagra Dhawan",
    url: "https://kushagradhawan.com",
    jobTitle: "Product Builder and Designer",
    knowsAbout: [
      "Product Design",
      "UI/UX",
      "Design Systems",
      "Web Development",
      "Product Strategy",
    ],
    sameAs: [
      "https://x.com/kushagra_dhawan",
      "https://www.linkedin.com/in/kushagra-dhawan/",
      "https://github.com/KushagraDhawan1997",
    ],
  };

  // Professional Service structured data
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kushagra Dhawan - Product Design Services",
    description:
      "Professional product design and development services specializing in creating innovative digital products and user experiences.",
    url: "https://kushagradhawan.com",
    founder: {
      "@type": "Person",
      name: "Kushagra Dhawan",
    },
    serviceType: [
      "Product Design",
      "UX Design",
      "Design Systems",
      "Product Strategy",
    ],
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

      {viewMode === "professional" && (
        <>
          <Hero latestAnnouncement={latestAnnouncement} />
          <PortfolioSection />
          <ExperienceSection />
          <RecentArticlesSection posts={posts} showAnnouncements />
          {/* <ProductPhilosophy /> */}
          {/* <AboutKookieAISection /> */}
          {/* <AboutSection /> */}
        </>
      )}
      {viewMode === "personal" && (
        <>
          <HeroSectionPersonal />
        </>
      )}
    </>
  );
}
