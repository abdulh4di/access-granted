import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ServiceCards from "@/components/ServiceCards";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Car & Auto Locksmith Newcastle upon Tyne | Access Granted",
  description:
    "Mobile car & auto locksmith in Newcastle upon Tyne, 24/7: car key replacement, emergency lockouts, lost keys and programming. All makes, free call-out.",
  alternates: { canonical: "/services/auto-locksmith" },
  openGraph: {
    type: "website",
    url: "/services/auto-locksmith",
    siteName: "Access Granted Northeast",
    images: [OG_IMAGE],
    title: "Car & Auto Locksmith Newcastle upon Tyne",
    description:
      "Mobile car & auto locksmith in Newcastle upon Tyne, 24/7: car key replacement, emergency lockouts, lost keys and programming. All makes, free call-out.",
  },
};

const AUTO_STEPS = [
  {
    icon: "phone" as const,
    title: "Call or Message",
    desc: "Tell us your car's make and model, where you are and what's happened: lost keys, locked out, a broken key or an ignition fault.",
  },
  {
    icon: "search" as const,
    title: "We Confirm the Job",
    desc: "We check what your vehicle needs before we set off. For local emergencies we typically aim to reach you within around 30 minutes.",
  },
  {
    icon: "truck" as const,
    title: "Sorted Where You Are",
    desc: "At your home, work or the roadside, we open the car without damage or cut and program a new key on the spot.",
  },
  {
    icon: "check" as const,
    title: "Tested Before We Leave",
    desc: "New keys are tested to lock, unlock and start the car, so you can drive away as soon as we finish.",
  },
];

const AUTO_FAQS = [
  {
    q: "Are you a mobile auto locksmith?",
    a: "Yes. We come to you at home, at work or at the roadside across Newcastle upon Tyne, Gateshead and the North East, and carry the equipment to open vehicles and cut and program car keys on the spot. There is no need to tow your car to a dealer.",
  },
  {
    q: "Do you offer an emergency auto locksmith service?",
    a: "Yes. We work 24/7, day or night, including weekends. If you are locked out of your car or have lost your keys, call us directly. For local emergencies in and around Newcastle we typically aim to reach you within around 30 minutes.",
  },
  {
    q: "Which car makes do you work on?",
    a: "All makes and models. We replace and program transponder keys, remote flip keys and keyless smart keys, and open modern and older vehicles using non-destructive entry. If you are unsure about your car, call with the make, model and year.",
  },
  {
    q: "Can you replace my car key if I have lost them all?",
    a: "Yes. Even with no spare, we can cut and program a brand-new key at your location. The lost key is removed from your car's system at the same time, so it can no longer unlock or start the vehicle.",
  },
  {
    q: "How long does a car key replacement take?",
    a: "Most car key jobs take around 20 to 60 minutes once we are with you, depending on your vehicle's make, model and security system. Opening a locked car is usually quicker.",
  },
  {
    q: "Is a car locksmith cheaper than the main dealer?",
    a: "Usually, yes. Our mobile service and specialist equipment mean we can replace and program keys for considerably less than a main dealer, and we come to you. The price depends on your vehicle and key type, so call with the details.",
  },
  {
    q: "Which areas do you cover?",
    a: "Newcastle upon Tyne, Gateshead and more than 40 towns and communities across the North East, including Jesmond, Heaton, Wallsend, Whitley Bay, Sunderland, Washington, Durham and Hexham. If you are unsure whether we reach you, just get in touch.",
  },
];

export default function AutoLocksmithPage() {
  return (
    <>
      <span id="top" />
      <JsonLd
        data={[
          serviceJsonLd(
            "/services/auto-locksmith",
            "Car & Auto Locksmith Newcastle upon Tyne",
            String(metadata.description),
          ),
          breadcrumbJsonLd("/services/auto-locksmith", "Auto Locksmith Newcastle upon Tyne"),
        ]}
      />
      <Navbar />
      <header>
        <ServiceHero
          description={
            <>
              Access Granted Northeast is a mobile car and auto locksmith covering
              Newcastle upon Tyne, Gateshead and the North East 24/7, with a free
              call-out. We handle{" "}
              <Link href="/services/auto-locksmith/car-key-replacement">car key replacement</Link>{" "}
              for all makes,{" "}
              <Link href="/services/auto-locksmith/vehicle-lockouts">emergency car lockouts</Link>{" "}
              without damage,{" "}
              <Link href="/services/auto-locksmith/lost-car-keys">lost car keys</Link>, spare
              keys and ignition repairs.
            </>
          }
        />
      </header>
      <main id="main">
        {/* earlyReveal: this section sits right under the hero here, so the
            default trigger needs an awkward amount of scrolling before it shows */}
        <ServiceCards earlyReveal />
        <HowItWorks steps={AUTO_STEPS} />
        <Testimonials />
        <ServiceFaq
          subhead="Answers to common questions about our mobile auto locksmith service in Newcastle upon Tyne and the North East."
          items={AUTO_FAQS}
        />
        <RelatedServices path="/services/auto-locksmith" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
