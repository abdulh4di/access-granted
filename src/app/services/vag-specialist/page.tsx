import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import LostKeysSteps from "@/components/LostKeysSteps";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VAG Specialist Services Newcastle | Access Granted Northeast",
  description:
    "Mobile VAG specialist coding across Newcastle & the North East — Audi, Volkswagen, SEAT and Škoda coding, retrofitting and troubleshooting.",
  alternates: { canonical: "/services/vag-specialist" },
  openGraph: {
    type: "website",
    url: "/services/vag-specialist",
    siteName: "Access Granted Northeast",
    title: "VAG Specialist Services Newcastle",
    description:
      "Mobile VAG specialist coding, retrofitting and troubleshooting for Audi, Volkswagen, SEAT and Škoda across Newcastle & the North East.",
  },
};

const VAG_TABS = [
  {
    label: "Audi",
    heading: "Audi Coding",
    sub: "Feature Coding & Adaptation",
    desc: "Coding, adaptation and feature activation for Audi models — from retrofits to enabling hidden functions.",
    icon: "audi" as const,
  },
  {
    label: "Volkswagen",
    heading: "Volkswagen Coding",
    sub: "VW Coding & Configuration",
    desc: "Coding and configuration across the Volkswagen range, including comfort, lighting and convenience features.",
    icon: "vw" as const,
  },
  {
    label: "SEAT",
    heading: "SEAT Coding",
    sub: "Coding & Feature Enabling",
    desc: "Coding and adaptation for SEAT models, unlocking configurable features and completing retrofits.",
    icon: "seat" as const,
  },
  {
    label: "Škoda",
    heading: "Škoda Coding",
    sub: "Coding & Adaptation",
    desc: "Coding and adaptation for Škoda vehicles, from enabling features to configuring replaced components.",
    icon: "skoda" as const,
  },
  {
    label: "Retrofitting",
    heading: "VAG Retrofitting",
    sub: "Enable Added Hardware",
    desc: "We code retrofitted features and hardware so newly fitted equipment is recognised and works correctly.",
    icon: "car" as const,
  },
  {
    label: "Troubleshooting",
    heading: "VAG Troubleshooting",
    sub: "Diagnose & Resolve Faults",
    desc: "Deep diagnostics for tricky VAG electrical and coding faults, pinpointing the cause and putting it right.",
    icon: "search" as const,
  },
];

const STEPS = [
  {
    title: "Connect & Diagnose",
    desc: "We connect to your VAG vehicle and read its configuration and any faults.",
  },
  {
    title: "Code or Retrofit",
    desc: "We code, adapt or retrofit the feature to your exact model on-site.",
  },
  {
    title: "Test & Confirm",
    desc: "We verify everything works as intended before we finish up.",
  },
];

const FAQS = [
  {
    q: "Which VAG brands do you cover?",
    a: "We work across the Volkswagen Audi Group — Audi, Volkswagen, SEAT and Škoda — for coding, adaptation, retrofitting and troubleshooting.",
  },
  {
    q: "What kind of coding can you do?",
    a: "We enable configurable features, code and adapt replaced components, complete retrofits and resolve coding-related faults using specialist VAG equipment.",
  },
  {
    q: "Can you retrofit new features?",
    a: "Where your vehicle and hardware support it, yes. We code retrofitted equipment so it's recognised and functions properly.",
  },
  {
    q: "Do you come to me?",
    a: "Yes. Our VAG specialist service is fully mobile, carried out at your home, work or wherever the vehicle is across the North East.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function VagSpecialistPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="VAG Specialist Services"
          title="VAG Specialist Coding Northeast"
          image="/assets/images/ag-service-coding.png"
          imageAlt="VAG specialist coding and diagnostics"
          description={
            <>
              Access Granted Northeast provides mobile VAG specialist services
              across the North East — Audi, Volkswagen, SEAT and Škoda coding,
              feature retrofitting and troubleshooting for the whole Volkswagen
              Audi Group.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysBenefits
          eyebrow="What We Do"
          heading={<>Coding for the Whole VAG Group</>}
          subhead={
            <>
              Select a brand or service below to see how we can help — from Audi,
              Volkswagen, SEAT and Škoda coding to retrofitting and
              troubleshooting.
            </>
          }
          steps={VAG_TABS}
          stacked
        />
        <LostKeysSteps
          heading="How VAG Coding Works"
          subhead="Diagnose, code or retrofit, and test"
          steps={STEPS}
        />
        <ServiceFaq
          subhead="Answers to common questions about our VAG specialist coding, retrofitting and troubleshooting services."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
