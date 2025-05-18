import { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/generic/ui/section-wrapper";

export const metadata: Metadata = {
  title: "Page Not Found | Kushagra Dhawan",
  description: "Sorry, the page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="text-xl mb-8 text-muted-foreground">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/" className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" aria-label="Return to the homepage">
            Go to Homepage
          </Link>
          <Link href="/articles" className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors" aria-label="Browse all articles">
            Browse Articles
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
