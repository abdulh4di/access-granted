import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ServiceCards from "@/components/ServiceCards";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Auto Locksmith Newcastle & North East | Access Granted",
  description:
    "Mobile auto locksmith in Newcastle & the North East: lost car keys, lockouts, spare keys, key programming and ignition repair. 24/7, call 07777 474195.",
  alternates: { canonical: "/services/auto-locksmith" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Auto Locksmith Newcastle & North East",
    description:
      "Mobile auto locksmith in Newcastle & the North East: lost car keys, lockouts, spare keys, key programming and ignition repair. 24/7, call 07777 474195.",
  },
};

export default function AutoLocksmithPage() {
  return (
    <>
      <span id="top" />
      <JsonLd
        data={[
          serviceJsonLd(
            "/services/auto-locksmith",
            "Auto Locksmith Newcastle & the North East",
            String(metadata.description),
          ),
          breadcrumbJsonLd("/services/auto-locksmith", "Auto Locksmith Newcastle & the North East"),
        ]}
      />
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
