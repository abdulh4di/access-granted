import Navbar from "@/components/Navbar";
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
      <span id="top" />
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
