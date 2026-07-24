import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ServiceCards from "@/components/ServiceCards";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Auto Locksmith Newcastle & the North East | Access Granted Northeast",
  description:
    "Mobile auto locksmith in Newcastle & the North East. Lost car keys, vehicle lockouts, spare keys, key programming, broken key extraction and ignition repair — 24/7.",
  alternates: { canonical: "/services/auto-locksmith" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith",
    siteName: "Access Granted Northeast",
    title: "Auto Locksmith Newcastle & the North East",
    description:
      "Mobile auto locksmith in Newcastle & the North East. Lost car keys, vehicle lockouts, spare keys, key programming and ignition repair — 24/7.",
  },
};

export default function AutoLocksmithPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <ServiceHero />
      </header>
      <main id="main">
        {/* earlyReveal: this section sits right under the hero here, so the
            default trigger needs an awkward amount of scrolling before it shows */}
        <ServiceCards earlyReveal />
        <HowItWorks />
        <Testimonials />
        <ServiceFaq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
