import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ghost Immobiliser Installation Newcastle | Access Granted Northeast",
  description:
    "Mobile Ghost immobiliser installation across Newcastle & the North East. Protect your car from key cloning and theft with a silent, PIN-based immobiliser fitted at your location.",
  alternates: { canonical: "/services/ghost-immobiliser" },
  openGraph: {
    type: "website",
    url: "/services/ghost-immobiliser",
    siteName: "Access Granted Northeast",
    title: "Ghost Immobiliser Installation Newcastle",
    description:
      "Mobile Ghost immobiliser installation across Newcastle & the North East — stop key cloning and theft with a hidden, PIN-based immobiliser.",
  },
};

const STEPS = [
  {
    title: "Discreet Install",
    desc: "We fit the Ghost out of sight, wired into your vehicle’s data network with no visible signs.",
  },
  {
    title: "Set Your Sequence",
    desc: "You choose a unique PIN sequence using buttons you already have — steering wheel, doors or console.",
  },
  {
    title: "Drive Protected",
    desc: "Your car won’t start without the sequence, stopping key cloning, hacking and theft.",
  },
];

const BENEFITS = [
  {
    label: "Anti-Theft",
    heading: "Anti-Theft",
    sub: "Stops Key Cloning",
    desc: "Even with your keys, a thief can’t start the car without your unique PIN sequence.",
    icon: "shield" as const,
  },
  {
    label: "Invisible",
    heading: "Invisible",
    sub: "No Visible Trace",
    desc: "The device is hidden and silent, with no key fob or LED for thieves to find.",
    icon: "search" as const,
  },
  {
    label: "PIN Start",
    heading: "PIN Start",
    sub: "Your Unique Sequence",
    desc: "Start your car by entering a simple sequence using the buttons already in your vehicle.",
    icon: "chip" as const,
  },
  {
    label: "Mobile Fit",
    heading: "Mobile Fit",
    sub: "Installed at Your Location",
    desc: "We come to your home or work and install the Ghost across the North East.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "What is a Ghost immobiliser?",
    a: "A Ghost is an aftermarket immobiliser that connects to your vehicle’s data network. Your car won’t start until a unique PIN sequence is entered using existing buttons.",
  },
  {
    q: "Will it stop my car being stolen with a cloned key?",
    a: "Yes. Even if a thief clones your key or bypasses the standard immobiliser, the car won’t start without your sequence.",
  },
  {
    q: "Does it affect my car’s warranty?",
    a: "The Ghost is non-invasive — no keys are cut and no wires are cut — so it can be installed without affecting your manufacturer warranty.",
  },
  {
    q: "Can you install it at my home?",
    a: "Yes. Our installation is fully mobile, carried out at your home or work across the North East.",
  },
  {
    q: "Which vehicles is it compatible with?",
    a: "The Ghost works with a wide range of modern makes and models. Share your car’s make, model and year and we’ll confirm compatibility.",
  },
];

export default function GhostImmobiliserPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Ghost Immobiliser"
          title="Ghost Immobiliser Installation"
          image="/assets/images/ag-service-immobiliser.png"
          imageAlt="Ghost immobiliser installation in a vehicle"
          description={
            <>
              Protect your car from key cloning and theft with a Ghost
              immobiliser. This silent, PIN-based device stops your vehicle from
              starting unless your unique sequence is entered — installed at your
              location.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Ghost Immobilisers"
          subhead="Fit it, set your sequence, drive protected"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Theft Protection You Control</>}
          subhead={
            <>
              The Ghost adds a hidden layer of security on top of your car’s
              standard immobiliser, so only you can start the vehicle.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about Ghost immobiliser installation — how it works and what to expect."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
