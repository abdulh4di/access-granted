import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ReviewsList from "@/components/ReviewsList";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Customer Reviews Newcastle upon Tyne | Access Granted",
  description:
    "Read what customers say about Access Granted Northeast, a 5-star auto and home locksmith across Newcastle upon Tyne and the North East. Real Google reviews.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    type: "website",
    url: "/reviews",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Customer Reviews Newcastle upon Tyne",
    description:
      "Read what customers say about Access Granted Northeast, a 5-star auto and home locksmith across Newcastle upon Tyne and the North East. Real Google reviews.",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <span id="top" />
      <JsonLd data={breadcrumbJsonLd("/reviews", "Reviews")} />
      <Navbar />
      <header>
        <ServiceHero
          eyebrow="Reviews"
          title={
            <>
              What Our
              <br />
              Customers Say
            </>
          }
          description={
            <>
              Real reviews from drivers and homeowners across Newcastle upon Tyne
              and the North East, taken straight from our Google listing.
            </>
          }
          showTrust={false}
        />
      </header>
      <main id="main">
        <ReviewsList />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
