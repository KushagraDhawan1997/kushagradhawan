import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const withMDX = createMDX({
  options: {
    // Use string plugin names so options remain serializable under Turbopack
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      "remark-mdx-frontmatter",
    ],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  serverExternalPackages: ["shiki"],
  devIndicators: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/blog",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/articles/:slug*",
        permanent: true,
      },
    ];
  },
  // Enable webpack analyzer in production build
  webpack: (config, { isServer }) => {
    // Only run in production build on server
    if (process.env.ANALYZE === "true" && isServer) {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
};

export default withMDX(nextConfig);
