import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lost Car Keys Newcastle, No Spare Needed | Access Granted",
  description:
    "Lost your only car key? We cut and program a new one at your location in Newcastle & the North East, even with no spare. 24/7, call 07777 474195.",
  alternates: { canonical: "/services/auto-locksmith/lost-car-keys" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith/lost-car-keys",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Lost Car Keys Newcastle, No Spare Needed",
    description:
      "Lost your only car key? We cut and program a new one at your location in Newcastle & the North East, even with no spare. 24/7, call 07777 474195.",
  },
};

const LOST_KEYS_FAQS = [
  {
    q: "Can you replace a lost car key with no spare?",
    a: "Yes. Even if you have lost your only key, we can create and program a brand-new key to your vehicle on-site — you do not need an existing spare.",
  },
  {
    q: "How long does it take to replace a lost car key?",
    a: "Most lost key jobs are completed in around 20 to 60 minutes, depending on your vehicle's make, model and security system.",
  },
  {
    q: "Do I need to take my car to a main dealer?",
    a: "No. We come to you and cut and program the new key at your location, so there is no need for costly towing or a dealer visit.",
  },
  {
    q: "Will my lost key still work after you make a new one?",
    a: "No. When we program your new key, the lost key is removed from your vehicle's system so it can no longer be used to unlock or start your car.",
  },
  {
    q: "Which areas do you cover for lost car keys?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function LostCarKeysPage() {
  return (
    <>
      <span id="top" />
      <JsonLd
        data={[
          serviceJsonLd(
            "/services/auto-locksmith/lost-car-keys",
            "Lost Car Keys Newcastle",
            String(metadata.description),
          ),
          breadcrumbJsonLd("/services/auto-locksmith/lost-car-keys", "Lost Car Keys Newcastle"),
        ]}
      />
      <Navbar />
      <header>
        <BlogHero />
      </header>
      <main id="main">
        <LostKeysSteps />
        <LostKeysBenefits />
        <ServiceFaq
          subhead="Answers to common questions about replacing lost car keys — what we can do, how long it takes and what to expect."
          items={LOST_KEYS_FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
