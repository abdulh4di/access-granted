import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, businessJsonLd } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ContactSection from "@/components/ContactSection";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact a 24/7 Locksmith in Newcastle | Access Granted",
  description:
    "Locked out or need a quote? Call or message Access Granted 24/7. Free call-out for emergency car and home locksmith jobs across Newcastle & the North East.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Contact a 24/7 Locksmith in Newcastle",
    description:
      "Locked out or need a quote? Call or message Access Granted 24/7. Free call-out for emergency car and home locksmith jobs across Newcastle & the North East.",
  },
};

export default function ContactPage() {
  return (
    <>
      <span id="top" />
      <JsonLd data={[businessJsonLd(), breadcrumbJsonLd("/contact", "Contact")]} />
      <Navbar />
      <header>
        <ServiceHero
          eyebrow="Contact Us"
          title={
            <>
              Here to Help,
              <br />
              24/7
            </>
          }
          description={
            <>
              Open 24 hours a day, 7 days a week for emergency call-outs across
              Newcastle &amp; the North East. Call or message us any time, or send
              an enquiry below and we&rsquo;ll get straight back to you.
            </>
          }
          showTrust={false}
        />
      </header>
      <main id="main">
        <ContactSection />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
