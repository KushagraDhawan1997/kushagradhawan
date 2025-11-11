import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://kushagradhawan.com",
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kushagradhawan.com/sitemap.xml",
  };
}
