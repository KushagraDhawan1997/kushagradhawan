import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kookie Flow - Kushagra Dhawan",
  description:
    "Kookie Flow is a WebGL-native node graph library for React that combines React Flow ergonomics with GPU-accelerated rendering.",
  alternates: {
    canonical: "/kookie-flow",
  },
};

export default function KookieFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
