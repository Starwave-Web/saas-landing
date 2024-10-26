import BuiltWith from "@/components/landing/built-with";
import ContactUs from "@/components/landing/contact-us";
import CTA from "@/components/landing/cta";
import FAQ from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Gallery from "@/components/landing/gallery";
import Hero from "@/components/landing/hero";
import Prices from "@/components/landing/prices";
import Stats from "@/components/landing/stats";
import Testimonials from "@/components/landing/testimonials";

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
