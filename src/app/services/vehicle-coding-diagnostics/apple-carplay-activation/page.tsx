import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apple CarPlay Activation Newcastle | Access Granted Northeast",
  description:
    "Mobile Apple CarPlay activation and retrofit coding across Newcastle & the North East — unlock CarPlay and other hidden features on compatible vehicles.",
  alternates: {
    canonical: "/services/vehicle-coding-diagnostics/apple-carplay-activation",
  },
  openGraph: {
    type: "website",
    url: "/services/vehicle-coding-diagnostics/apple-carplay-activation",
    siteName: "Access Granted Northeast",
    title: "Apple CarPlay Activation Newcastle",
    description:
      "Mobile Apple CarPlay activation across Newcastle & the North East for compatible vehicles.",
  },
};

const STEPS = [
  {
    title: "Check Compatibility",
    desc: "We confirm your vehicle and head unit support CarPlay activation.",
  },
  {
    title: "Activate & Code",
    desc: "We enable and code CarPlay so it appears and runs on your screen.",
  },
  {
    title: "Test With Your Phone",
    desc: "We connect your iPhone and confirm CarPlay works before we finish.",
  },
];

const BENEFITS = [
  {
    label: "Hidden Feature",
    heading: "Hidden Feature",
    sub: "Unlock What's Built In",
    desc: "Many vehicles support CarPlay in the software — we simply activate it.",
    icon: "phone" as const,
  },
  {
    label: "Proper Coding",
    heading: "Proper Coding",
    sub: "Enabled the Right Way",
    desc: "We enable CarPlay through coding, so it's integrated cleanly with your system.",
    icon: "gear" as const,
  },
  {
    label: "Tested Live",
    heading: "Tested Live",
    sub: "Confirmed With Your iPhone",
    desc: "We connect your phone and check CarPlay runs properly before we leave.",
    icon: "chip" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "Home, work or driveway — we activate CarPlay at your vehicle.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "Can any car have Apple CarPlay activated?",
    a: "Only vehicles whose head unit supports CarPlay in its software can be activated. Send us your make, model and year and we'll confirm compatibility.",
  },
  {
    q: "Do I need new hardware?",
    a: "Often not — on compatible vehicles CarPlay is already built into the system and just needs enabling. Where hardware is required we'll let you know first.",
  },
  {
    q: "Will it work wired or wireless?",
    a: "That depends on your vehicle. Some support wireless CarPlay, others are wired only — we'll confirm what your car supports before activation.",
  },
  {
    q: "Do you come to me?",
    a: "Yes. Our CarPlay activation service is fully mobile and carried out at your home, work or driveway across the North East.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function AppleCarPlayActivationPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Vehicle Coding & Diagnostics"
          title="Apple CarPlay Activation"
          image="/assets/images/service-apple-carplay-activation.png"
          imageAlt="Apple CarPlay running on a car display"
          description={
            <>
              Want Apple CarPlay on your car&rsquo;s screen? On compatible
              vehicles we activate and code CarPlay on-site, unlocking a feature
              that&rsquo;s often already built into your system.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For CarPlay"
          subhead="Check, activate, and test"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Unlock Apple CarPlay On-Site</>}
          subhead={
            <>
              On compatible vehicles we enable and code Apple CarPlay, then test
              it with your iPhone so it&rsquo;s ready to use before we leave.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about Apple CarPlay activation and compatibility."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
