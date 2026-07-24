import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import TermsContent from "@/components/TermsContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Access Granted Northeast",
  description:
    "The terms and conditions covering locksmith, vehicle coding, diagnostics and related services provided by Access Granted Northeast across Newcastle & the North East.",
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    url: "/terms",
    siteName: "Access Granted Northeast",
    title: "Terms & Conditions | Access Granted Northeast",
    description:
      "The terms and conditions covering services provided by Access Granted Northeast across Newcastle & the North East.",
  },
};

export default function TermsPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <ServiceHero
          eyebrow="Legal"
          title={
            <>
              Terms &amp;
              <br />
              Conditions
            </>
          }
          description={
            <>
              The terms below cover how we deliver our locksmith, vehicle coding,
              diagnostics and related services across Newcastle &amp; the North
              East. Please read them carefully before booking.
            </>
          }
          showTrust={false}
        />
      </header>
      <main id="main">
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}
