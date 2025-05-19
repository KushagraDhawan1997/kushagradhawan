"use client";

import { ContactSection } from "@/components/sections/contact-section";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Footer component
 *
 * Combines the Contact section with standard footer elements like
 * copyright, links, and legal information
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ContactSection />

      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-dashed border-foreground/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-sm text-foreground/60">© {currentYear} Kushagra Dhawan. All rights reserved.</div>

          <div className="flex flex-wrap gap-6 text-sm text-foreground/60">
            <Link href="/sitemap.xml" className="hover:text-foreground/80 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
