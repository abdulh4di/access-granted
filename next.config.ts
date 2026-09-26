import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Gallery photos moved to /assets/images/gallery/<slug>/media/ when they became
    // CMS-managed; keep the old URLs (e.g. indexed in Google Images) working.
    const movedGalleryImages = [
      ["gallery-bcm-fault-repair.webp", "bcm-fault-repair/media/value.webp"],
      ["gallery-key-programming-tools.webp", "key-programming-tools/media/value.webp"],
      ["gallery-mercedes-steering-lock.jpg", "mercedes-steering-lock/media/value.jpg"],
      ["gallery-immo-pincode-reading.jpg", "immo-pincode-reading/media/value.jpg"],
      ["gallery-key-coding-matching.webp", "key-coding-matching/media/value.webp"],
      ["gallery-mercedes-key-decoding.webp", "mercedes-key-decoding/media/value.webp"],
      ["gallery-ecu-remapping.jpg", "ecu-remapping/media/value.jpg"],
      ["gallery-workshop.webp", "workshop/media/value.webp"],
      ["gallery-land-rover-kvm-repair.webp", "land-rover-kvm-repair/media/value.webp"],
      ["gallery-vag-diagnostics.webp", "vag-diagnostics/media/value.webp"],
      ["gallery-mercedes-eis-programming.webp", "mercedes-eis-programming/media/value.webp"],
      ["gallery-lock-picking.webp", "lock-picking/media/value.webp"],
    ];
    return movedGalleryImages.map(([from, to]) => ({
      source: `/assets/images/${from}`,
      destination: `/assets/images/gallery/${to}`,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        // Baseline hardening. HSTS is already sent by the host; a strict CSP is
        // left out on purpose (inline animation styles, the map embed and the
        // reviews feed would each need vetting first).
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Images keep their filenames when swapped, so they can't be cached as
        // "immutable" — a day of freshness plus a week of stale-while-revalidate
        // still spares repeat visitors the round trip.
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // Gallery photos/videos are swapped by the client in the CMS under the
      // same URL, so browsers must revalidate (a cheap 304 via ETag) rather
      // than show yesterday's file. Listed last so they override the rule above.
      ...["/assets/images/gallery/:path*", "/assets/videos/gallery/:path*"].map(
        (source) => ({
          source,
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=0, must-revalidate",
            },
          ],
        }),
      ),
    ];
  },
};

export default nextConfig;
