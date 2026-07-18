import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Module Programming Newcastle | Access Granted Northeast",
  description:
    "Mobile control module programming and coding across Newcastle & the North East — code added, replaced or retrofitted modules so they work with your vehicle.",
  alternates: {
    canonical: "/services/vehicle-coding-diagnostics/module-programming",
  },
  openGraph: {
    type: "website",
    url: "/services/vehicle-coding-diagnostics/module-programming",
    siteName: "Access Granted Northeast",
    title: "Module Programming Newcastle",
    description:
      "Mobile control module programming and coding across Newcastle & the North East.",
  },
};

const STEPS = [
  {
    title: "Identify the Module",
    desc: "We confirm the module and how it needs to be coded for your vehicle.",
  },
  {
    title: "Program & Code",
    desc: "We program and code the module so it's recognised and works correctly.",
  },
  {
    title: "Test & Confirm",
    desc: "We check the module communicates and functions before we finish up.",
  },
];

const BENEFITS = [
  {
    label: "Any Module",
    heading: "Any Module",
    sub: "Added or Replaced",
    desc: "We program control modules when units are added, replaced or retrofitted.",
    icon: "chip" as const,
  },
  {
    label: "Correct Coding",
    heading: "Correct Coding",
    sub: "Recognised by Your Car",
    desc: "We code the module to your vehicle so it's recognised and behaves correctly.",
    icon: "gear" as const,
  },
  {
    label: "Tested",
    heading: "Tested",
    sub: "Verified On-Site",
    desc: "We confirm the module communicates and functions properly before we leave.",
    icon: "search" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "Home, work or garage — we bring the programming equipment to your vehicle.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "What is module programming?",
    a: "It's programming and coding a control module — such as a body, comfort or lighting module — so your vehicle recognises it and it works as intended.",
  },
  {
    q: "Do I need it after fitting a new module?",
    a: "Usually, yes. A new or replacement module generally needs programming and coding before your car will accept and use it correctly.",
  },
  {
    q: "Can you retrofit and code new features?",
    a: "In many cases, yes. Where a module supports it, we can code retrofitted features so they function properly.",
  },
  {
    q: "Do you come to me?",
    a: "Yes. Our module programming service is fully mobile across the North East, carried out at your home, work or garage.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function ModuleProgrammingPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Vehicle Coding & Diagnostics"
          title="Module Programming"
          image="/assets/images/service-module-programming.png"
          imageAlt="Programming a vehicle control module"
          description={
            <>
              Added or replaced a control module? We program and code modules
              on-site so your vehicle recognises them and everything works as it
              should — no main dealer needed.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Module Programming"
          subhead="Identify, program, and confirm"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Modules Programmed &amp; Coded</>}
          subhead={
            <>
              We program and code new, replacement and retrofitted modules to your
              vehicle, so they&rsquo;re recognised and function correctly.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about module programming and coding."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
