import BuiltWith from "@/src/components/landing/built-with";
import ContactUs from "@/src/components/landing/contact-us";
import CTA from "@/src/components/landing/cta";
import FAQ from "@/src/components/landing/faq";
import Features from "@/src/components/landing/features";
import Gallery from "@/src/components/landing/gallery";
import Hero from "@/src/components/landing/hero";
import Prices from "@/src/components/landing/prices";
import Stats from "@/src/components/landing/stats";
import Testimonials from "@/src/components/landing/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Gallery/>
      <Stats />
      <Testimonials />
      <BuiltWith />
      <Prices />
      <CTA />
      <ContactUs />
      <FAQ />
    </main>
  );
}
