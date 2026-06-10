import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ImpactSection from "./ImpactSection";
import HowNammuWorksSection from "./HowNammuWorksSection";
import WhyNammuSection from "./WhyNammuSection";
import TestimonialSection from "./TestimonialSection";
import Footer from "./Footer";
import DemoRequestModal from "./DemoRequestModal";

// The previous version of the site, recovered from commit c04ea18 into an
// isolated namespace (its own styles + components) so it can run at /old for a
// side-by-side comparison without colliding with the current site.
const OldSite = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <Header onRequestDemo={openDemo} />
      <div style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
        <HeroSection onRequestDemo={openDemo} />
        <ImpactSection />
        <HowNammuWorksSection />
        <WhyNammuSection />
        <TestimonialSection />
        <Footer onRequestDemo={openDemo} />
      </div>
      <DemoRequestModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
};

export default OldSite;
