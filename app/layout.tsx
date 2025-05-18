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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kushagra Dhawan | Product Builder and Designer",
    template: "%s | Kushagra Dhawan",
  },
  description: "Product builder and designer specializing in creating innovative digital products. Expert in design systems, user experience, and product development.",
  keywords: ["Kushagra Dhawan", "product design", "designer", "developer", "UX", "UI", "product builder", "engineering"],
  authors: [{ name: "Kushagra Dhawan" }],
  creator: "Kushagra Dhawan",
  publisher: "Kushagra Dhawan",
  metadataBase: new URL("https://kushagradhawan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kushagradhawan.com",
    title: "Kushagra Dhawan | Product Builder and Designer",
    description: "Product builder and designer specializing in creating innovative digital products and solutions.",
    siteName: "Kushagra Dhawan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kushagra Dhawan - Product Builder and Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra Dhawan | Product Builder and Designer",
    description: "Product builder and designer specializing in creating innovative digital products and solutions.",
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
