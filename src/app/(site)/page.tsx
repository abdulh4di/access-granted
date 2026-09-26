import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import { businessJsonLd } from "@/lib/schema";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Areas from "@/components/Areas";
import Testimonials from "@/components/Testimonials";
import ServiceFaq from "@/components/ServiceFaq";
import Footer from "@/components/Footer";

const HOME_FAQS = [
  {
    q: "What is an auto locksmith?",
    a: "An auto locksmith specialises in vehicles. We open locked cars, replace and program lost or broken car keys, repair ignitions and carry out vehicle coding, and we come to you.",
  },
  {
    q: "Can you open my car without damaging it?",
    a: "In the vast majority of cases, yes. We use non-destructive entry techniques to open your vehicle without damaging the lock, door or paintwork.",
  },
  {
    q: "Do you cover all makes and models?",
    a: "Yes. We replace and program car keys for all makes and models, including keyless smart keys and remote fobs.",
  },
  {
    q: "Do you also help with locks at home?",
    a: "Yes. Alongside our vehicle services we offer a residential locksmith service, including emergency home lockouts, lock repairs, lock replacements and key cutting.",
  },
  {
    q: "How fast can you get to me?",
    a: "Response times vary by location and time of day, but for local emergencies we typically aim to reach you within around 30 minutes.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Newcastle, Gateshead and more than 40 towns and communities across the North East. If you're unsure whether we reach you, just get in touch.",
  },
];

export default function Home() {
  return (
    <>
      {/* Server-rendered marker: the page loader's curtain is hidden by CSS
          wherever this is present. The homepage is the one route that must
          never show it, and keying that off real markup means the decision
          holds on the very first paint, with no JavaScript involved. */}
      <span id="top" data-route-home />
      <JsonLd data={businessJsonLd()} />
      <Navbar />
      <header>
        <Hero />
      </header>
      <main id="main">
        <About />
        <Services />
        <WhyChooseUs />
        <Areas />
        <Testimonials />
        <ServiceFaq
          subhead="Answers to common questions about our auto and home locksmith, vehicle coding and diagnostics services."
          items={HOME_FAQS}
        />
      </main>
      <Footer />
    </>
  );
}
