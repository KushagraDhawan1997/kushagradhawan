import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/generic/Navbar";
import { HashScrollHandler } from "@/components/generic";
import { Footer } from "@/components/ui/footer";
import { Box, Theme, ThemePanel } from "@kushagradhawan/kookie-ui";
import "highlight.js/styles/github-dark.css";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Generate a data URL for the SVG favicon
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
<rect x="49" y="3" width="10" height="102" rx="5" fill="#202020" stroke="white" stroke-width="2"/>
<rect x="3" y="58" width="10" height="102" rx="5" transform="rotate(-90 3 58)" fill="#202020" stroke="white" stroke-width="2"/>
<rect y="-1.41421" width="10" height="102" rx="5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 86 92.5858)" fill="#202020" stroke="white" stroke-width="2"/>
<rect x="87" y="13.4142" width="10" height="102" rx="5" transform="rotate(45 87 13.4142)" fill="#202020" stroke="white" stroke-width="2"/>
</svg>`;
const iconDataURL = `data:image/svg+xml;base64,${Buffer.from(svgIcon).toString(
  "base64"
)}`;

export const metadata: Metadata = {
  title: {
    default: "Kushagra Dhawan | Product Manager and Design Lead",
    template: "%s | Kushagra Dhawan",
  },
  description:
    "Product leader with engineering background, specializing in scaling products and building high-performance teams. Expert in making complex technology accessible to users.",
  keywords: [
    "Kushagra Dhawan",
    "product strategy",
    "technical leadership",
    "cross-functional teams",
    "product management",
    "design leadership",
    "product scaling",
    "AI integration",
    "startup leadership",
  ],
  authors: [{ name: "Kushagra Dhawan" }],
  creator: "Kushagra Dhawan",
  publisher: "Kushagra Dhawan",
  metadataBase: new URL("https://kushagradhawan.com"),
  icons: {
    icon: iconDataURL,
    apple: iconDataURL,
    shortcut: iconDataURL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kushagradhawan.com",
    title: "Kushagra Dhawan | Product Manager and Design Lead",
    description:
      "Product builder leading product at Womp; creator of KookieUI. Combining engineering, design, and product strategy to scale products and high-performance teams.",
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
      "Product builder leading product at Womp; creator of KookieUI. Combining engineering, design, and product strategy to scale products and high-performance teams.",
    images: ["/articles/about-me.png"],
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
      </head>
      <body className="antialiased">
        <Theme
          accentColor="gray"
          grayColor="auto"
          material="solid"
          radius="medium"
          fontFamily="sans"
        >
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
          <ThemePanel defaultOpen={false} />
        </Theme>
      </body>
    </html>
  );
}
