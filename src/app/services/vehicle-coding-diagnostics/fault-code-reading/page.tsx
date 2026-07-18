import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fault Code Reading & Clearing Newcastle | Access Granted Northeast",
  description:
    "Mobile fault code reading and clearing across Newcastle & the North East — read, interpret and clear stored trouble codes so you know exactly what to fix.",
  alternates: {
    canonical: "/services/vehicle-coding-diagnostics/fault-code-reading",
  },
  openGraph: {
    type: "website",
    url: "/services/vehicle-coding-diagnostics/fault-code-reading",
    siteName: "Access Granted Northeast",
    title: "Fault Code Reading & Clearing Newcastle",
    description:
      "Mobile fault code reading and clearing across Newcastle & the North East.",
  },
};

const STEPS = [
  {
    title: "Read the Codes",
    desc: "We pull all stored and pending fault codes from your vehicle's modules.",
  },
  {
    title: "Explain the Cause",
    desc: "We tell you what each code means and how serious it is in plain English.",
  },
  {
    title: "Clear When Fixed",
    desc: "Once the fault is resolved, we clear the codes and confirm they stay gone.",
  },
];

const BENEFITS = [
  {
    label: "Read Codes",
    heading: "Read Codes",
    sub: "Stored & Pending",
    desc: "We read stored and pending trouble codes from every module, not just the engine.",
    icon: "search" as const,
  },
  {
    label: "Plain English",
    heading: "Plain English",
    sub: "Know What It Means",
    desc: "We translate the codes into a clear explanation of the fault and its severity.",
    icon: "gear" as const,
  },
  {
    label: "Clear Codes",
    heading: "Clear Codes",
    sub: "Reset After Repair",
    desc: "Once the underlying fault is fixed, we clear the codes and confirm they don't return.",
    icon: "chip" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "Home, work or roadside — we bring the equipment to your vehicle.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "Can you just clear my warning light?",
    a: "We can clear codes, but a light usually comes back if the underlying fault isn't fixed. We'll read the code first and explain what's causing it before clearing.",
  },
  {
    q: "Do you read codes from all systems?",
    a: "Yes. We read stored and pending codes from every control module — engine, ABS, airbags, comfort systems and more.",
  },
  {
    q: "Will clearing codes fix the problem?",
    a: "Clearing resets the warning, but the fault must be repaired to stop it returning. We help you understand what needs doing.",
  },
  {
    q: "Do you come to me?",
    a: "Yes. Our service is fully mobile across the North East — carried out at your home, work or the roadside.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function FaultCodeReadingPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Vehicle Coding & Diagnostics"
          title="Fault Code Reading & Clearing"
          image="/assets/images/service-fault-code-reading.png"
          imageAlt="Reading vehicle fault codes on a diagnostic tool"
          description={
            <>
              Got a warning light or a stored fault? We read and interpret the
              trouble codes across your vehicle, explain exactly what they mean,
              and clear them once the fault is resolved.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Fault Codes"
          subhead="Read, explain, and clear"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Know Exactly What&rsquo;s Wrong</>}
          subhead={
            <>
              We read the codes properly and tell you what they mean, so you can
              fix the real problem rather than just resetting a light.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about fault code reading and clearing."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
