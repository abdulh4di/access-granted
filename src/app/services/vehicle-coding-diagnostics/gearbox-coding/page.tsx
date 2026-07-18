import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gearbox Coding Newcastle | Access Granted Northeast",
  description:
    "Mobile gearbox (transmission) coding and adaptation across Newcastle & the North East — code TCUs for smooth, correct gear changes.",
  alternates: {
    canonical: "/services/vehicle-coding-diagnostics/gearbox-coding",
  },
  openGraph: {
    type: "website",
    url: "/services/vehicle-coding-diagnostics/gearbox-coding",
    siteName: "Access Granted Northeast",
    title: "Gearbox Coding Newcastle",
    description:
      "Mobile gearbox coding and adaptation across Newcastle & the North East.",
  },
};

const STEPS = [
  {
    title: "Check the Gearbox",
    desc: "We read the transmission control unit and its current adaptation values.",
  },
  {
    title: "Code & Adapt",
    desc: "We code the TCU and run the adaptation so gear changes are smooth and correct.",
  },
  {
    title: "Road-Ready",
    desc: "We confirm the gearbox shifts properly and the fault is resolved before we leave.",
  },
];

const BENEFITS = [
  {
    label: "TCU Coding",
    heading: "TCU Coding",
    sub: "New or Rebuilt Gearboxes",
    desc: "We code transmission control units after a gearbox repair, rebuild or replacement.",
    icon: "gear" as const,
  },
  {
    label: "Adaptation",
    heading: "Adaptation",
    sub: "Smooth Gear Changes",
    desc: "We run the adaptation so the gearbox learns and shifts smoothly for your car.",
    icon: "chip" as const,
  },
  {
    label: "Fault Fixing",
    heading: "Fault Fixing",
    sub: "Clear Transmission Codes",
    desc: "We diagnose and clear gearbox-related fault codes as part of the coding.",
    icon: "search" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "Home, work or garage — we bring the equipment to your vehicle.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "When is gearbox coding needed?",
    a: "It's typically needed after a transmission is repaired, rebuilt or replaced, or when adaptation values need resetting for smooth gear changes.",
  },
  {
    q: "Can coding fix rough gear changes?",
    a: "In many cases, running a fresh adaptation helps the gearbox relearn and shift smoothly again — provided there's no mechanical fault.",
  },
  {
    q: "Do you come to me?",
    a: "Yes. Our gearbox coding service is fully mobile and carried out at your home, work or garage across the North East.",
  },
  {
    q: "Which makes can you work on?",
    a: "We work with a wide range of manufacturers and modern transmissions. Share your car's details and we'll confirm what we can do.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function GearboxCodingPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Vehicle Coding & Diagnostics"
          title="Gearbox Coding"
          image="/assets/images/service-gearbox-coding.png"
          imageAlt="Gearbox coding and adaptation on a vehicle"
          description={
            <>
              Had gearbox work done, or noticing rough shifts? We code and adapt
              transmission control units on-site, so your gearbox changes
              smoothly and correctly again.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Gearbox Coding"
          subhead="Read, code, and road-ready"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Smooth, Correct Gear Changes</>}
          subhead={
            <>
              We code the transmission control unit and run the adaptation, so
              your gearbox shifts the way it should after repairs or a
              replacement.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about gearbox coding and adaptation."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
