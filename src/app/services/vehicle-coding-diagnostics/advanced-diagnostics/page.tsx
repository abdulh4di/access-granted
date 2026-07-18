import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Advanced Vehicle Diagnostics Newcastle | Access Granted Northeast",
  description:
    "Dealer-level mobile vehicle diagnostics across Newcastle & the North East — pinpoint electrical, engine and system faults quickly and accurately.",
  alternates: {
    canonical: "/services/vehicle-coding-diagnostics/advanced-diagnostics",
  },
  openGraph: {
    type: "website",
    url: "/services/vehicle-coding-diagnostics/advanced-diagnostics",
    siteName: "Access Granted Northeast",
    title: "Advanced Vehicle Diagnostics Newcastle",
    description:
      "Mobile dealer-level diagnostics across Newcastle & the North East — find the real fault fast.",
  },
};

const STEPS = [
  {
    title: "Full System Scan",
    desc: "We connect to your vehicle and scan every module for stored and live faults.",
  },
  {
    title: "Interpret the Data",
    desc: "We read the results properly and explain what's actually causing the issue.",
  },
  {
    title: "Clear Recommendation",
    desc: "You get a clear report of the fault and the best way to put it right.",
  },
];

const BENEFITS = [
  {
    label: "Dealer-Level",
    heading: "Dealer-Level",
    sub: "Professional Equipment",
    desc: "We use professional diagnostic tools that read deeper than a basic code reader.",
    icon: "search" as const,
  },
  {
    label: "All Modules",
    heading: "All Modules",
    sub: "Whole-Vehicle Scan",
    desc: "Engine, ABS, airbags, comfort and more — we scan every system, not just the engine light.",
    icon: "chip" as const,
  },
  {
    label: "Clear Answers",
    heading: "Clear Answers",
    sub: "No Guesswork",
    desc: "We interpret the codes properly so you avoid replacing parts that aren't faulty.",
    icon: "gear" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "Home, work or roadside — we bring the diagnostic equipment to your vehicle.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "What can advanced diagnostics find?",
    a: "A full diagnostic scan reads every control module in the car, uncovering engine, electrical, ABS, airbag, comfort and sensor faults — not just the engine warning light.",
  },
  {
    q: "Is this better than a cheap code reader?",
    a: "Yes. Basic readers only pull generic engine codes. Our professional equipment reads manufacturer-specific data across all modules and lets us interpret live values.",
  },
  {
    q: "Will you tell me what's actually wrong?",
    a: "We don't just read codes — we interpret them and give you a clear explanation and recommendation, so you don't waste money replacing the wrong parts.",
  },
  {
    q: "Do you come to me?",
    a: "Yes. Our diagnostics service is fully mobile, carried out at your home, work or the roadside across the North East.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function AdvancedDiagnosticsPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Vehicle Coding & Diagnostics"
          title="Advanced Vehicle Diagnostics"
          image="/assets/images/vehdiag.png"
          imageAlt="Technician running vehicle diagnostics"
          description={
            <>
              Warning light on, or a fault you can&rsquo;t pin down? We run
              dealer-level diagnostic scans across every module to find the real
              cause quickly — so you fix the right thing first time.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Diagnostics"
          subhead="Scan, interpret, and recommend"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Find the Fault, Not a Guess</>}
          subhead={
            <>
              Our mobile diagnostic service reads your whole vehicle and gives you
              a clear answer, so you can put the fault right with confidence.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about advanced vehicle diagnostics — what we find and how it works."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
