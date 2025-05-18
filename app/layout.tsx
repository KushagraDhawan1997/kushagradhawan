import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/generic/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { DecorativeLines } from "@/components/generic/ui/decorative-lines";
import { ThemeSpotlight } from "@/components/generic";
import { SparklesCore } from "@/components/ui/sparkles";
import { Footer } from "@/components/ui/footer";
import "highlight.js/styles/github-dark.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate a data URL for the SVG favicon
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M211,103.43l-70.13,28,49.47,63.61a8,8,0,1,1-12.63,9.82L128,141,78.32,204.91a8,8,0,0,1-12.63-9.82l49.47-63.61L45,103.43A8,8,0,0,1,51,88.57l69,27.61V40a8,8,0,0,1,16,0v76.18l69-27.61A8,8,0,1,1,211,103.43Z" fill="black"></path></svg>`;
const iconDataURL = `data:image/svg+xml;base64,${Buffer.from(svgIcon).toString("base64")}`;

export const metadata: Metadata = {
  title: {
    default: "Kushagra Dhawan | Product Manager and Design Lead",
    template: "%s | Kushagra Dhawan",
  },
  description: "Product leader with engineering background, specializing in scaling products and building high-performance teams. Expert in making complex technology accessible to users.",
  keywords: ["Kushagra Dhawan", "product strategy", "technical leadership", "cross-functional teams", "product management", "design leadership", "product scaling", "AI integration", "startup leadership"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed inset-0 -z-10">
            <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={50} className="w-full h-full" particleColor="#666666" speed={1.5} />
          </div>
          <ThemeSpotlight className="top-0 left-0 -z-10" lightFill="rgba(76.5, 153, 204, 1.0)" darkFill="rgba(76.5, 153, 204, 1.0)" />
          <DecorativeLines />
          <Navbar />
          <main>{children}</main>
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
