import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import LostKeysSteps from "@/components/LostKeysSteps";
import LostKeysBenefits from "@/components/LostKeysBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lock Replacements Newcastle | Access Granted Northeast",
  description:
    "Mobile lock replacements across Newcastle & the North East — new locks supplied and fitted, including anti-snap cylinders and insurance-approved British Standard locks.",
  alternates: { canonical: "/services/residential-locksmith/lock-replacements" },
  openGraph: {
    type: "website",
    url: "/services/residential-locksmith/lock-replacements",
    siteName: "Access Granted Northeast",
    title: "Lock Replacements Newcastle",
    description:
      "New locks supplied and fitted across Newcastle & the North East — anti-snap and insurance-approved options.",
  },
};

const STEPS = [
  {
    title: "Assess & Advise",
    desc: "We check your door and recommend the right replacement lock for your security needs.",
  },
  {
    title: "Supply & Fit",
    desc: "We supply and fit the new lock on-site, from standard cylinders to anti-snap upgrades.",
  },
  {
    title: "Test & Hand Over",
    desc: "We test the new lock, hand over your keys and make sure everything works smoothly.",
  },
];

const BENEFITS = [
  {
    label: "Insurance-Approved",
    heading: "Insurance-Approved",
    sub: "British Standard Locks",
    desc: "We fit British Standard and insurance-approved locks to keep your cover valid.",
    icon: "shield" as const,
  },
  {
    label: "Anti-Snap",
    heading: "Anti-Snap",
    sub: "uPVC Cylinder Upgrades",
    desc: "Protect uPVC doors against lock snapping with high-security anti-snap cylinders.",
    icon: "lock" as const,
  },
  {
    label: "Moved In?",
    heading: "Moved In?",
    sub: "Change Who Has Keys",
    desc: "New home or lost keys? Replacing the locks ensures only you hold working keys.",
    icon: "key" as const,
  },
  {
    label: "We Come to You",
    heading: "We Come to You",
    sub: "Mobile Across the North East",
    desc: "We bring the replacement to your home wherever you are across the region.",
    icon: "car" as const,
  },
];

const FAQS = [
  {
    q: "Should I replace my locks after moving house?",
    a: "It’s strongly recommended. You can’t be sure who holds keys to the old locks, so replacing them means only you have working keys.",
  },
  {
    q: "Can you fit anti-snap locks on my uPVC door?",
    a: "Yes. Anti-snap cylinders protect against a common uPVC break-in method, and we can supply and fit them on-site.",
  },
  {
    q: "Will the new locks keep my insurance valid?",
    a: "We can fit British Standard and insurance-approved locks that meet common home insurance requirements.",
  },
  {
    q: "Do you supply the locks or do I?",
    a: "We can supply and fit the lock for you, or fit one you’ve bought. We’ll advise on the best option for your door and budget.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function LockReplacementsPage() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <header>
        <BlogHero
          tag="Residential Locksmith"
          title="Lock Replacements"
          image="/assets/images/lockreplacement.jpg"
          imageAlt="Locksmith fitting a new door lock"
          description={
            <>
              Need a new lock fitted? We supply and replace household locks on-site
              — from straightforward upgrades to insurance-approved and anti-snap
              cylinders that keep your home secure.
            </>
          }
        />
      </header>
      <main id="main">
        <LostKeysSteps
          heading="What We Do For Lock Replacements"
          subhead="Advise, supply and fit, and test"
          steps={STEPS}
        />
        <LostKeysBenefits
          eyebrow="How It Works"
          heading={<>New Locks, Fitted On-Site</>}
          subhead={
            <>
              We supply and fit the right replacement locks for your home, so your
              doors are secure and your insurance requirements are met.
            </>
          }
          steps={BENEFITS}
        />
        <ServiceFaq
          subhead="Answers to common questions about lock replacements — options, security and what to expect."
          items={FAQS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
