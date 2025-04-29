import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TractionSection from "./components/TractionSection";
import BookDemoSection from "./components/BookDemoSection";
import { Analytics } from "@vercel/analytics/react";

const App = () => (
  <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
    <Analytics />
    <HeroSection />
    <HowItWorksSection />
    {/* <TractionSection /> */}
    <BookDemoSection />
  </div>
);

export default App;
