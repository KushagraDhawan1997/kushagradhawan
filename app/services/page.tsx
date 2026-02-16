import { ServicesContent } from "./services-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Kushagra Dhawan",
  description:
    "Independent consulting services in product engineering, design systems architecture, developer tooling, and UX systems.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
