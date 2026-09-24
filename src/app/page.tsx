import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import { businessJsonLd } from "@/lib/schema";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Areas from "@/components/Areas";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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
      </main>
      <Footer />
    </>
  );
}
