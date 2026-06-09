import React from "react";
import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonials";
import SeafoodProblem from "./sections/SeafoodProblem";
import ProductOverview from "./sections/ProductOverview";
import Impact from "./sections/Impact";
import Founders from "./sections/Founders";
import FAQ from "./sections/FAQ";

const Home = () => (
  <>
    <Hero />
    <Testimonials />
    <SeafoodProblem />
    <ProductOverview />
    <Impact />
    <Founders />
    <FAQ />
  </>
);

export default Home;
