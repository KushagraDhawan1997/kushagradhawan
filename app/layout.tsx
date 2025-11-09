import type { Metadata } from "next";
import { Navbar } from "@/components/generic/Navbar";
import { HashScrollHandler } from "@/components/generic";
import { Theme, ThemePanel } from "@kushagradhawan/kookie-ui";
import { Footer } from "@/components/ui/footer";
import "highlight.js/styles/github-dark.css";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Generate a data URL for the SVG favicon
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M211,103.43l-70.13,28,49.47,63.61a8,8,0,1,1-12.63,9.82L128,141,78.32,204.91a8,8,0,0,1-12.63-9.82l49.47-63.61L45,103.43A8,8,0,0,1,51,88.57l69,27.61V40a8,8,0,0,1,16,0v76.18l69-27.61A8,8,0,1,1,211,103.43Z" fill="black"></path></svg>`;
const iconDataURL = `data:image/svg+xml;base64,${Buffer.from(svgIcon).toString("base64")}`;

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
  alternates: {
    canonical: "/",
  },
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
    description: "Technical product leader combining engineering, design, and product strategy to scale products and build high-performance teams.",
    siteName: "Kushagra Dhawan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kushagra Dhawan - Product Manager and Design Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra Dhawan | Product Manager and Design Lead",
    description: "Technical product leader combining engineering, design, and product strategy to scale products and build high-performance teams.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "verification_token",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="antialiased">
        <Theme accentColor="gray" grayColor="gray" material="solid" radius="full" fontFamily="serif">
          <HashScrollHandler />
          <Navbar />
          <main>{children}</main>
          <Analytics />
          <Footer />
          <ThemePanel defaultOpen={false} />
        </Theme>
      </body>
    </html>
  );
}
