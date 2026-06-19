import React from "react";
import Hero from "./sections/Hero";
import Capabilities from "./sections/Capabilities";
import Testimonials from "./sections/Testimonials";
import Team from "./sections/Team";
import FAQ from "./sections/FAQ";
import Press from "./sections/Press";
import CTA from "./sections/CTA";

const Home = () => (
  <>
    <Hero />
    <Testimonials />
    <Capabilities />
    <CTA />
    <Team />
    <Press />
    <FAQ />
  </>
);

export default Home;
