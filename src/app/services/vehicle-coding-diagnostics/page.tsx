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
    "Vehicle Coding & Diagnostics Newcastle & the North East | Access Granted Northeast",
  description:
    "Mobile vehicle coding and diagnostics across Newcastle & the North East — advanced diagnostics, fault code reading, ECU and gearbox coding, module programming and Apple CarPlay activation.",
  alternates: { canonical: "/services/vehicle-coding-diagnostics" },
  openGraph: {
    type: "website",
    url: "/services/vehicle-coding-diagnostics",
    siteName: "Access Granted Northeast",
    title: "Vehicle Coding & Diagnostics Newcastle & the North East",
    description:
      "Mobile vehicle coding and diagnostics across Newcastle & the North East — diagnostics, ECU/gearbox coding, module programming and Apple CarPlay activation.",
  },
};

const TRUST = [
  { value: "Live", label: "Dealer-Level Diagnostics", tone: "blue" as const },
  { value: "ECU", label: "Coding & Reprogramming", tone: "grey" as const },
  { value: "100%", label: "Mobile Across the North East", tone: "dark" as const },
  { value: "All", label: "Makes & Modern Systems", tone: "light" as const },
];

const CODING_SERVICES = [
  {
    title: "Advanced Vehicle Diagnostics",
    href: "/services/vehicle-coding-diagnostics/advanced-diagnostics",
    image: "/assets/images/vehdiag.png",
    desc: "Dealer-level diagnostic scans to pinpoint electrical, engine and system faults across your vehicle.",
  },
  {
    title: "Fault Code Reading & Clearing",
    href: "/services/vehicle-coding-diagnostics/fault-code-reading",
    image: "/assets/images/service-fault-code-reading.png",
    desc: "Read, interpret and clear stored fault codes so you know exactly what's wrong and what to fix.",
  },
  {
    title: "ECU Coding",
    href: "/services/vehicle-coding-diagnostics/ecu-coding",
    image: "/assets/images/service-ecu-coding.png",
    desc: "Coding and reprogramming of engine control units for repairs, replacements and feature changes.",
  },
  {
    title: "Gearbox Coding",
    href: "/services/vehicle-coding-diagnostics/gearbox-coding",
    image: "/assets/images/service-gearbox-coding.png",
    desc: "Transmission control unit coding and adaptation for smooth, correct gearbox operation.",
  },
  {
    title: "Module Programming",
    href: "/services/vehicle-coding-diagnostics/module-programming",
    image: "/assets/images/service-module-programming.png",
    desc: "Programming and coding of control modules when units are added, replaced or retrofitted.",
  },
  {
    title: "Apple CarPlay Activation",
    href: "/services/vehicle-coding-diagnostics/apple-carplay-activation",
    image: "/assets/images/service-apple-carplay-activation.png",
    desc: "Activate or retrofit Apple CarPlay and other hidden features on compatible vehicles.",
  },
];

const FAQS = [
  {
    q: "What is vehicle coding and diagnostics?",
    a: "Diagnostics reads your car's onboard computers to find faults, while coding changes how those computers behave — enabling features, adapting new parts or clearing issues after a repair.",
  },
  {
    q: "Do you come to me?",
    a: "Yes. Our coding and diagnostics service is fully mobile — we bring the equipment to your home, work or wherever the vehicle is across the North East.",
  },
  {
    q: "Which makes and models can you work on?",
    a: "We work with a wide range of manufacturers and modern vehicle systems. Get in touch with your car's make, model and year and we'll confirm what we can do.",
  },
  {
    q: "Is mobile coding cheaper than a main dealer?",
    a: "Usually, yes. Our mobile service and specialist equipment mean we can carry out coding and diagnostics for considerably less than a main dealer — and we come to you.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function VehicleCodingDiagnosticsPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <ServiceHero
          eyebrow="Vehicle Coding & Diagnostics"
          title={
            <>
              Vehicle Coding &amp;
              <br />
              Diagnostics
              <br />
              Northeast
            </>
          }
          description={
            <>
              Access Granted Northeast provides mobile vehicle coding and
              diagnostics across the North East, including advanced diagnostics,
              fault code reading, ECU and gearbox coding, module programming and
              Apple CarPlay activation.
            </>
          }
          trust={TRUST}
        />
      </header>
      <main id="main">
        <ServiceCards
          heading={
            <>
              Explore Our Vehicle
              <br />
              Coding &amp; Diagnostics
            </>
          }
          subhead={
            <>
              Browse our range of vehicle coding and diagnostics services, from
              advanced diagnostics and fault code reading to ECU, gearbox and
              module coding and Apple CarPlay activation. Select a service below
              to learn more.
            </>
          }
          services={CODING_SERVICES}
          earlyReveal
        />
        <HowItWorks />
        <Testimonials />
        <ServiceFaq
          subhead="Answers to common questions about our vehicle coding and diagnostics services."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
