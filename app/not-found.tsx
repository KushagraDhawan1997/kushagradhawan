import { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/generic/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { getMonochromaticGradient } from "@/lib/gradient";

export const metadata: Metadata = {
  title: "Page Not Found | Kushagra Dhawan",
  description: "Sorry, the page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const gradientText = getMonochromaticGradient();
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto text-center py-20 grid gap-4">
        <blockquote className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none pb-4 ${gradientText}`}>Lost in the site?</blockquote>
        <figcaption className="text-base text-muted-foreground font-medium">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</figcaption>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Button asChild size="lg" aria-label="Return to the homepage">
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" aria-label="Browse all articles">
            <Link href="/articles">Browse Articles</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
