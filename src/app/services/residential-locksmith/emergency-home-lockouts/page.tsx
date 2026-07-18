import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Emergency Home Lockouts Newcastle | Access Granted Northeast",
  description:
    "Locked out of your home in Newcastle & the North East? Our mobile locksmith reaches you fast and gets you back inside without unnecessary damage — 24/7.",
  alternates: {
    canonical: "/services/residential-locksmith/emergency-home-lockouts",
  },
  openGraph: {
    type: "website",
    url: "/services/residential-locksmith/emergency-home-lockouts",
    siteName: "Access Granted Northeast",
    title: "Emergency Home Lockouts Newcastle",
    description:
      "Fast, non-destructive home entry across Newcastle & the North East when you're locked out.",
  },
};

const STEPS = [
  {
    title: "Rapid Response",
    desc: "We head to your home as quickly as possible to get you back inside.",
  },
  {
    title: "Non-Destructive Entry",
    desc: "Where possible we open the door without damaging the lock or frame.",
  },
  {
    title: "Secure Again",
    desc: "We make sure your door locks properly and, if needed, replace a damaged lock.",
  },
];

const BENEFITS = [
  {
    label: "Fast Arrival",
    heading: "Fast Arrival",
    sub: "Quick Local Response",
    desc: "For local emergencies we typically aim to reach you within around 30 minutes.",
    icon: "clock" as const,
  },
  {
    label: "No Damage",
    heading: "No Damage",
    sub: "Non-Destructive Entry",
    desc: "We use specialist techniques to open your door without harming the lock or frame where possible.",
    icon: "shield" as const,
  },
  {
    label: "Any Door",
    heading: "Any Door",
    sub: "uPVC, Wooden & Composite",
    desc: "We work with all common household door and lock types, old and new.",
    icon: "key" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "We bring the service to your home wherever you are across the region.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "How fast can you reach me if I’m locked out?",
    a: "Response times vary by location and time of day, but for local emergencies we typically aim to reach you within around 30 minutes.",
  },
  {
    q: "Can you open my door without breaking anything?",
    a: "In the vast majority of cases, yes. We use non-destructive entry techniques to open your door without damaging the lock or frame where possible.",
  },
  {
    q: "Do you offer 24/7 call-outs?",
    a: "Yes. We provide emergency home lockout call-outs across the North East. For urgent situations it is best to call us directly.",
  },
  {
    q: "Will I need a new lock afterwards?",
    a: "Usually not. If a lock is already faulty or has to be drilled as a last resort, we can supply and fit a replacement on the spot.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function EmergencyHomeLockoutsPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Residential Locksmith"
          title="Emergency Home Lockouts"
          image="/assets/images/ag-service-residential.png"
          imageAlt="Locksmith opening a locked house door"
          description={
            <>
              Locked out of your home? Keys lost, snapped or left inside? We reach
              you fast and get you back inside without unnecessary damage —
              day or night, across the North East.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Home Lockouts"
          subhead="Reach you fast, open the door, secure it"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="Locked Out?"
          heading={<>Locked Out? We&rsquo;ll Get You In</>}
          subhead={
            <>
              Our mobile locksmith service gets you back into your home quickly and
              safely, whatever has locked you out.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about emergency home lockouts — timings, entry and what to expect."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
