import React from "react";
import HeroSection from "./components/HeroSection";
import WhyNammuSection from "./components/WhyNammuSection";
import TestimonialSection from "./components/TestimonialSection";
import ImpactSection from "./components/ImpactSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import DemoRequestModal from "./components/DemoRequestModal";
import Header from "./components/Header";
import HowNammuWorksSection from "./components/HowNammuWorksSection";

const App = () => {
  const [isDemoOpen, setIsDemoOpen] = React.useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <Analytics />
      <Header onRequestDemo={openDemo} />
      <HeroSection onRequestDemo={openDemo} />
      <ImpactSection />
      <HowNammuWorksSection />
      <WhyNammuSection />
      <TestimonialSection />
      <Footer onRequestDemo={openDemo} />
      <DemoRequestModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
};

export default App;
