import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spare Car Keys Newcastle | Access Granted Northeast",
  description:
    "Get a spare car key cut and programmed in Newcastle & the North East. A cheap, mobile backup that saves you from an expensive lost-key call-out later.",
  alternates: { canonical: "/services/auto-locksmith/spare-keys" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith/spare-keys",
    siteName: "Access Granted Northeast",
    title: "Spare Car Keys Newcastle",
    description:
      "Mobile auto locksmith in Newcastle & the North East cutting and programming spare car keys — cheaper now than a lost-key emergency later.",
  },
};

const SPARE_KEYS_STEPS = [
  {
    title: "Key Cut to Match",
    desc: "A spare key cut precisely to your vehicle, identical to your original.",
  },
  {
    title: "Programmed On-Site",
    desc: "Your spare is coded to your car and tested at your location.",
  },
  {
    title: "Ready as a Backup",
    desc: "Keep it safe so you’re never caught out by a lost or damaged key.",
  },
];

const SPARE_KEYS_BENEFITS = [
  {
    label: "Save Money",
    heading: "Save Money",
    sub: "Cheaper Now Than in an Emergency",
    desc: "Cutting a spare while you still have a working key costs far less than a full lost-key replacement.",
    icon: "money" as const,
  },
  {
    label: "Avoid Lockouts",
    heading: "Avoid Lockouts",
    sub: "A Backup When You Need It",
    desc: "If your main key is lost, stolen or locked in the car, your spare keeps you moving.",
    icon: "lock" as const,
  },
  {
    label: "Cut On-Site",
    heading: "Cut On-Site",
    sub: "No Dealer Trip Needed",
    desc: "We come to your home or work and cut the spare there — no towing and no waiting rooms.",
    icon: "key" as const,
  },
  {
    label: "All Makes",
    heading: "All Makes",
    sub: "Modern & Older Vehicles",
    desc: "We program spare keys and remotes for most makes and models, including keyless-entry cars.",
    icon: "car" as const,
  },
];

const SPARE_KEYS_FAQS = [
  {
    q: "How much does a spare car key cost?",
    a: "A spare is much cheaper than a lost-key replacement because you still have a working key to clone from. The exact price depends on your make, model and key type.",
  },
  {
    q: "Do you need my original key to cut a spare?",
    a: "Yes. Having your working key lets us cut and program the spare quickly and at the lowest cost.",
  },
  {
    q: "Can you make a spare for keyless / push-to-start cars?",
    a: "In most cases, yes. We program spare smart keys and proximity fobs for a wide range of modern vehicles.",
  },
  {
    q: "How long does it take to get a spare cut?",
    a: "Usually around 20 to 40 minutes on-site, depending on your vehicle’s make, model and security system.",
  },
  {
    q: "Which areas do you cover for spare keys?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function SpareKeysPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          title="Spare Car Keys Newcastle"
          image="/assets/images/service-spare-car-keys.png"
          imageAlt="Auto locksmith holding a spare car key"
          description={
            <>
              Don&rsquo;t wait until you&rsquo;re locked out. Have a spare car key
              cut and programmed for your vehicle. It&rsquo;s a simple, affordable
              backup that can save you the cost and inconvenience of an emergency
              auto locksmith call-out.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Spare Keys"
          subhead="Cut, program, and keep you covered"
          steps={SPARE_KEYS_STEPS}
        />
        <LostKeysBenefits
          eyebrow="Why a Spare?"
          heading={<>Get a Spare Before You Need One</>}
          subhead={
            <>
              A spare car key is one of the cheapest ways to protect yourself. We
              cut and program it on-site, so it&rsquo;s ready the day you ever lose
              your main key.
            </>
          }
          steps={SPARE_KEYS_BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about spare car keys — costs, timings and what we can cut."
          items={SPARE_KEYS_FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
