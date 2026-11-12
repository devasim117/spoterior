import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/common/BackToTop";

import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Gallery from "@/components/sections/Gallery";
import Showcase from "@/components/sections/Showcase";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

/**
 * Single-page layout: every section is server-rendered so the full content is
 * present in the initial HTML for search engines. Only Navbar, Showcase,
 * Footer, Reveal and BackToTop hydrate on the client.
 */
export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <Features />
        <Stats />
        <Gallery />
        <Showcase />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
