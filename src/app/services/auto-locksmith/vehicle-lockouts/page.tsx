import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vehicle Lockouts Newcastle | Access Granted Northeast",
  description:
    "Locked out of your car in Newcastle & the North East? Our mobile auto locksmith reaches you fast and opens your vehicle without damage — keys locked in or lost.",
  alternates: { canonical: "/services/auto-locksmith/vehicle-lockouts" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith/vehicle-lockouts",
    siteName: "Access Granted Northeast",
    title: "Vehicle Lockouts Newcastle",
    description:
      "Fast, non-destructive vehicle entry across Newcastle & the North East — keys locked in, in the boot, or lost.",
  },
};

const STEPS = [
  {
    title: "Rapid Response",
    desc: "We head to your location as quickly as possible to get you moving.",
  },
  {
    title: "Non-Destructive Entry",
    desc: "We open your car without damaging the lock, door or paintwork.",
  },
  {
    title: "Back In & Moving",
    desc: "You’re back inside and on your way — no broken glass, no drama.",
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
    desc: "Specialist tools open your car without harming the lock, door or paintwork.",
    icon: "shield" as const,
  },
  {
    label: "Any Situation",
    heading: "Any Situation",
    sub: "Keys Locked In or Lost",
    desc: "Keys locked inside, shut in the boot, or lost entirely — we can help you get back in.",
    icon: "unlock" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "Home, work or stranded at the roadside — we bring the service to your location.",
    icon: "pin" as const,
  },
];

const FAQS = [
  {
    q: "Can you open my car without breaking anything?",
    a: "In the vast majority of cases, yes. We use non-destructive entry techniques to open your vehicle without damaging the lock, door or paintwork.",
  },
  {
    q: "How fast can you reach me if I’m locked out?",
    a: "Response times vary by location and time of day, but for local emergencies we typically aim to reach you within around 30 minutes.",
  },
  {
    q: "My keys are locked in the boot — can you still help?",
    a: "Yes. We can gain safe entry to the vehicle and retrieve keys locked in the cabin or boot in most cases.",
  },
  {
    q: "Do you cover all makes and models?",
    a: "We work with most makes and models, both modern and older vehicles. If you’re unsure, just get in touch with your car’s details.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function VehicleLockoutsPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          title="Vehicle Lockouts Newcastle"
          image="/assets/images/service-vehicle-lockouts.png"
          imageAlt="Auto locksmith opening a locked car door"
          description={
            <>
              Locked out of your car? Keys shut inside, snapped in the door, or a
              fault you can&rsquo;t get past? We reach you fast and open your
              vehicle without damage, so you&rsquo;re back on the road quickly.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Lockouts"
          subhead="Reach you fast, open your car, no damage"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="Locked Out?"
          heading={<>Locked Out? We&rsquo;ll Get You In</>}
          subhead={
            <>
              Our mobile auto locksmith service gets you back into your vehicle
              quickly and safely — whatever&rsquo;s locked you out.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about vehicle lockouts — timings, non-destructive entry and what to expect."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
