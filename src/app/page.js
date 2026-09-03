import Features from "./components/main-page/Features";
import FAQ from "./components/main-page/FAQ";
import Pricing from "./components/main-page/Pricing";
import Products from "./components/main-page/Products";
import Services from "./components/main-page/Services";
import Testimonials from "./components/main-page/Testimonials";
import Hero from "./components/shared/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Products />
      <Pricing />

      {/* Testimonials section is currently not needed, can be added back later
      if desired */}
      <Testimonials />
      <FAQ />
    </>
  );
}
