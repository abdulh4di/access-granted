import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import GalleryGrid from "@/components/GalleryGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Access Granted Northeast",
  description:
    "See our auto and home locksmith work across Newcastle & the North East — vehicle lockouts, key programming, lock repairs and more.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    url: "/gallery",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Gallery",
    description:
      "See our auto and home locksmith work across Newcastle & the North East.",
  },
};

export default function GalleryPage() {
  return (
    <>
      <span id="top" />
      <JsonLd data={breadcrumbJsonLd("/gallery", "Gallery")} />
      <Navbar />
      <header>
        <ServiceHero
          eyebrow="Gallery"
          title={
            <>
              See Our Work
              <br />
              in Action
            </>
          }
          description={
            <>
              Locked out in Newcastle? Local auto and home locksmith covering
              the North East, from lost car keys to lock upgrades. Call for a
              fast call-out.
            </>
          }
          showTrust={false}
        />
      </header>
      <main id="main">
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
