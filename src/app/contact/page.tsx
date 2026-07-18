import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ContactSection from "@/components/ContactSection";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Access Granted Northeast | Auto & Home Locksmith Newcastle",
  description:
    "Contact Access Granted Northeast — open 24/7 for emergency auto and home locksmith call-outs across Newcastle & the North East. Call, message or send an enquiry.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: "Access Granted Northeast",
    title: "Contact Access Granted Northeast",
    description:
      "Open 24/7 for emergency auto and home locksmith call-outs across Newcastle & the North East.",
  },
};

export default function ContactPage() {
  return (
    <>
      <span id="top" />
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
