import React from "react";
import Hero from "./sections/Hero";
import Capabilities from "./sections/Capabilities";
import Testimonials from "./sections/Testimonials";
import Team from "./sections/Team";
import Newsletter from "./sections/Newsletter";
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
    <Newsletter />
    <Press />
    <FAQ />
  </>
);

export default Home;
