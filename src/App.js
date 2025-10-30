import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyNammuSection from "./components/WhyNammuSection";
import TestimonialSection from "./components/TestimonialSection";
import ImpactSection from "./components/ImpactSection";
import BookDemoSection from "./components/BookDemoSection";
import { Analytics } from "@vercel/analytics/react";
import DemoRequestModal from "./components/DemoRequestModal";
import Header from "./components/Header";
import TeamEmpowerSection from "./components/TeamEmpowerSection";

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
      <HowItWorksSection />
      <TeamEmpowerSection />
      <WhyNammuSection />
      <TestimonialSection />
      <BookDemoSection onRequestDemo={openDemo} />
      <DemoRequestModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
};

export default App;
