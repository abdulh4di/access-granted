import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lock Repairs Newcastle | Access Granted Northeast",
  description:
    "Mobile lock repairs across Newcastle & the North East — sticking, seized or faulty door locks repaired so they work smoothly and securely again.",
  alternates: { canonical: "/services/residential-locksmith/lock-repairs" },
  openGraph: {
    type: "website",
    url: "/services/residential-locksmith/lock-repairs",
    siteName: "Access Granted Northeast",
    title: "Lock Repairs Newcastle",
    description:
      "Mobile door lock repairs across Newcastle & the North East — fix sticking, seized and faulty locks.",
  },
};

const STEPS = [
  {
    title: "Diagnose the Fault",
    desc: "We check the lock, cylinder and mechanism to find why it’s sticking or failing.",
  },
  {
    title: "Repair or Adjust",
    desc: "We repair, lubricate or realign the lock and door so it works smoothly again.",
  },
  {
    title: "Test & Confirm",
    desc: "We make sure the lock turns freely and secures properly before we leave.",
  },
];

const BENEFITS = [
  {
    label: "Save the Lock",
    heading: "Save the Lock",
    sub: "Repair Before Replace",
    desc: "Where a lock can be repaired, we fix it — saving you the cost of a full replacement.",
    icon: "wrench" as const,
  },
  {
    label: "All Lock Types",
    heading: "All Lock Types",
    sub: "uPVC, Mortice & Cylinder",
    desc: "We repair multipoint uPVC mechanisms, mortice locks, night latches and cylinders.",
    icon: "key" as const,
  },
  {
    label: "Smooth Again",
    heading: "Smooth Again",
    sub: "No More Sticking",
    desc: "We fix sticking, stiff and misaligned locks so doors lock and unlock easily.",
    icon: "gear" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "We bring the repair to your home wherever you are across the region.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "Can you repair a sticking or stiff lock?",
    a: "Yes. Sticking and stiff locks are often caused by wear, misalignment or a dry mechanism — all of which we can usually repair on-site.",
  },
  {
    q: "Is it cheaper to repair or replace a lock?",
    a: "Where a lock can be safely repaired, it’s usually cheaper than a replacement. If the lock is worn out or insecure, we’ll advise replacing it.",
  },
  {
    q: "My uPVC door won’t lock properly — can you help?",
    a: "Yes. uPVC multipoint mechanisms commonly develop faults or drop out of alignment. We repair and realign them so the door locks correctly.",
  },
  {
    q: "Do you come to me?",
    a: "Yes. Our lock repair service is fully mobile — we come to your home across Newcastle and the North East.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function LockRepairsPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Residential Locksmith"
          title="Lock Repairs"
          image="/assets/images/lockrepair.png"
          imageAlt="Locksmith repairing a door lock"
          description={
            <>
              Sticking, seized or faulty lock? We diagnose and repair household
              door locks on-site, so your doors lock and unlock smoothly and
              securely again — often for less than a replacement.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Lock Repairs"
          subhead="Diagnose, repair, and test"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>Faulty Lock? We&rsquo;ll Fix It</>}
          subhead={
            <>
              We repair sticking, seized and misaligned locks so your doors work
              properly again, wherever possible saving you a full replacement.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about lock repairs — faults we fix and what to expect."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
