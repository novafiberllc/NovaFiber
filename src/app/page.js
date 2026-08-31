import Features from "./components/main-page/Features";
import Products from "./components/main-page/Products";
import Services from "./components/main-page/Services";
import Testimonials from "./components/main-page/Testimonials";

export default function Home() {
  return (
    <>
      <Features />
      <Products />
      <Services />

      {/* Testimonials section is currently not needed, can be added back later
      if desired */}
      <Testimonials />
    </>
  );
}
