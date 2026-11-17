import type { Metadata } from "next";
import RelatedServices from "@/components/RelatedServices";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Emergency Auto Locksmith Newcastle upon Tyne | 24/7 Lockouts",
  description:
    "24/7 emergency auto locksmith in Newcastle upon Tyne. Locked out? We aim to reach you in around 30 minutes and open it without damage. Free call-out.",
  alternates: { canonical: "/services/auto-locksmith/vehicle-lockouts" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith/vehicle-lockouts",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Emergency Auto Locksmith Newcastle upon Tyne",
    description:
      "24/7 emergency auto locksmith in Newcastle upon Tyne. Locked out? We aim to reach you in around 30 minutes and open it without damage. Free call-out.",
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
    q: "Do you offer a 24-hour emergency auto locksmith service in Newcastle?",
    a: "Yes. Our emergency auto locksmith service runs 24/7, day or night, including weekends, across Newcastle upon Tyne, Gateshead and the North East. If you are locked out of your car, call us directly and tell us where you are.",
  },
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
    q: "What if I have lost my keys as well as being locked out?",
    a: "We can still help. Once we have opened the car, we can cut and program a new key on the spot, and remove the lost key from your car's system so it can no longer be used. Most key jobs take around 20 to 60 minutes.",
  },
  {
    q: "What should I do while I wait for you?",
    a: "Stay somewhere safe near the car, keep your phone switched on and share the exact location, such as the street, car park or a nearby landmark. If a child or an animal is locked inside and in distress, call 999 straight away.",
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
      <JsonLd
        data={[
          serviceJsonLd(
            "/services/auto-locksmith/vehicle-lockouts",
            "Emergency Auto Locksmith & Vehicle Lockouts Newcastle upon Tyne",
            String(metadata.description),
          ),
          breadcrumbJsonLd("/services/auto-locksmith/vehicle-lockouts", "Vehicle Lockouts Newcastle upon Tyne"),
        ]}
      />
      <Navbar />
      <header>
        <BlogHero
          title="Vehicle Lockouts Newcastle"
          image="/assets/images/service-vehicle-lockouts.webp"
          imageAlt="Auto locksmith opening a locked car door"
          description={
            <>
              Locked out of your car? Our emergency auto locksmith service runs
              24/7 across Newcastle upon Tyne, Gateshead and the North East. We
              open your vehicle using non-destructive entry techniques and aim to
              reach local emergencies within around 30 minutes. The call-out is
              free.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="How Do We Open a Locked Car?"
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
        <RelatedServices path="/services/auto-locksmith/vehicle-lockouts" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
