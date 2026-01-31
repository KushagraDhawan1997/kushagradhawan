import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/generic/navbar";
import { HashScrollHandler, Footer } from "@/components/generic";
import { Providers, Box } from "@/components/providers";
import "highlight.js/styles/github-dark.css";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kushagra Dhawan | Product Manager and Design Lead",
    template: "%s | Kushagra Dhawan",
  },
  description:
    "Product leader and creator of Kookie UI, Kookie Blocks, and Kookie AI. Leading product at Womp while building open-source tools for developers and designers.",
  keywords: [
    "Kushagra Dhawan",
    "Kookie UI",
    "Kookie Blocks",
    "Kookie AI",
    "product management",
    "design leadership",
    "open source",
    "React components",
    "UI library",
  ],
  authors: [{ name: "Kushagra Dhawan", url: "https://kushagradhawan.com" }],
  creator: "Kushagra Dhawan",
  publisher: "Kushagra Dhawan",
  metadataBase: new URL("https://kushagradhawan.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kushagradhawan.com",
    title: "Kushagra Dhawan | Product Manager and Design Lead",
    description:
      "Product leader at Womp. Creator of Kookie UI, Kookie Blocks, and Kookie AI — open-source tools for developers and designers.",
    siteName: "Kushagra Dhawan",
    images: [
      {
        url: "/articles/about-me.png",
        width: 1200,
        height: 630,
        alt: "Kushagra Dhawan - Product Manager and Design Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra Dhawan | Product Manager and Design Lead",
    description:
      "Product leader at Womp. Creator of Kookie UI, Kookie Blocks, and Kookie AI — open-source tools for developers and designers.",
    images: ["/articles/about-me.png"],
    creator: "@kushagradhawan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kushagra Dhawan",
              url: "https://kushagradhawan.com",
              image: "https://kushagradhawan.com/kushagra-logo.png",
              jobTitle: "Product Manager and Design Lead",
              worksFor: {
                "@type": "Organization",
                name: "Womp",
              },
              sameAs: [
                "https://github.com/KushagraDhawan1997",
                "https://linkedin.com/in/kushagradhawan",
                "https://twitter.com/kushagradhawan",
              ],
              knowsAbout: [
                "Product Management",
                "Design Leadership",
                "UI/UX Design",
                "Software Engineering",
                "AI Integration",
              ],
              makesOffer: [
                {
                  "@type": "SoftwareApplication",
                  name: "Kookie UI",
                  url: "https://hellokookie.com",
                  applicationCategory: "DeveloperApplication",
                  description:
                    "A React component library for building modern interfaces",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Kookie Blocks",
                  url: "https://kookieblocks.com",
                  applicationCategory: "DeveloperApplication",
                  description:
                    "Higher-level composed components built on Kookie UI",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Kookie AI",
                  applicationCategory: "DeveloperApplication",
                  description:
                    "Conversation graphs for knowledge workers and creators",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <HashScrollHandler />
          <Suspense fallback={<div style={{ height: "64px" }} />}>
            <Navbar />
          </Suspense>
          <Box style={{ flex: 1 }} mt="9">
            <main>{children}</main>
          </Box>
          <Footer />
          {/* <QueenLukitaBlessing /> */}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
