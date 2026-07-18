import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ECU Coding Newcastle | Access Granted Northeast",
  description:
    "Mobile ECU coding and reprogramming across Newcastle & the North East — code new or replacement engine control units and adapt them to your vehicle.",
  alternates: { canonical: "/services/vehicle-coding-diagnostics/ecu-coding" },
  openGraph: {
    type: "website",
    url: "/services/vehicle-coding-diagnostics/ecu-coding",
    siteName: "Access Granted Northeast",
    title: "ECU Coding Newcastle",
    description:
      "Mobile ECU coding and reprogramming across Newcastle & the North East.",
  },
};

const STEPS = [
  {
    title: "Read the Vehicle",
    desc: "We check your vehicle's configuration and the ECU that needs coding.",
  },
  {
    title: "Code & Adapt",
    desc: "We code and adapt the ECU so it matches your car and works correctly.",
  },
  {
    title: "Test & Confirm",
    desc: "We verify the ECU communicates and functions as it should before we leave.",
  },
];

const BENEFITS = [
  {
    label: "Repairs & Swaps",
    heading: "Repairs & Swaps",
    sub: "New or Used ECUs",
    desc: "We code new and replacement engine control units so they work with your vehicle.",
    icon: "chip" as const,
  },
  {
    label: "Correct Adaptation",
    heading: "Correct Adaptation",
    sub: "Matched to Your Car",
    desc: "We adapt the ECU to your vehicle's exact configuration for reliable running.",
    icon: "gear" as const,
  },
  {
    label: "Tested",
    heading: "Tested",
    sub: "Verified Before We Leave",
    desc: "We confirm the ECU communicates and functions correctly once coded.",
    icon: "search" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "Home, work or garage — we bring the coding equipment to your vehicle.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "What is ECU coding?",
    a: "ECU coding tells your engine control unit how to behave for your specific vehicle. It's needed when an ECU is repaired, replaced or reconfigured.",
  },
  {
    q: "Do I need coding after replacing my ECU?",
    a: "Usually, yes. A new or used ECU generally needs coding and adapting to your vehicle before it will run correctly.",
  },
  {
    q: "Can you do this at my location?",
    a: "Yes. Our ECU coding service is fully mobile and carried out at your home, work or garage across the North East.",
  },
  {
    q: "Which makes can you code?",
    a: "We work with a wide range of manufacturers and modern systems. Share your car's make, model and year and we'll confirm what we can do.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function EcuCodingPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Vehicle Coding & Diagnostics"
          title="ECU Coding"
          image="/assets/images/service-ecu-coding.png"
          imageAlt="ECU coding on a vehicle"
          description={
            <>
              Fitted or repaired an engine control unit? We code and adapt ECUs
              to your exact vehicle on-site, so your car runs correctly without a
              costly trip to the main dealer.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For ECU Coding"
          subhead="Read, code, and confirm"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>ECUs Coded &amp; Adapted On-Site</>}
          subhead={
            <>
              We code new and replacement ECUs and adapt them to your vehicle, so
              everything communicates and runs as the manufacturer intended.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about ECU coding — when it's needed and what to expect."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
