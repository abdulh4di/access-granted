import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery — Coming Soon | Access Granted Northeast",
  description:
    "Our gallery is coming soon — photos of recent auto and home locksmith work across Newcastle & the North East.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    url: "/gallery",
    siteName: "Access Granted Northeast",
    title: "Gallery — Coming Soon",
    description:
      "Our gallery is coming soon — recent auto and home locksmith work across Newcastle & the North East.",
  },
};

export default function GalleryPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <main id="main">
        <ComingSoon
          eyebrow="Gallery"
          heading="Coming Soon"
          description={
            <>
              Our gallery is on its way. We&rsquo;re putting together photos of
              recent auto and home locksmith work across Newcastle &amp; the North
              East. In the meantime, get in touch or explore our services.
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
