import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // The CMS admin (/keystatic) and its API aren't for search engines.
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/keystatic", "/api/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
