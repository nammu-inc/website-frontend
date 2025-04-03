import React from "react";
import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";
import ContactSection from "./components/ContactSection";
import { Analytics } from "@vercel/analytics/react";

const App = () => (
  <div>
    <Analytics />
    <HeroSection />
    <TimelineSection />
    <ContactSection />
  </div>
);

export default App;
