import React from "react";
import { Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { DemoProvider } from "./components/DemoContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Hotjar from "./components/Hotjar";
import Home from "./pages/Home";
import LinkedInBanner from "./pages/LinkedInBanner";
import OldSite from "./old/OldSite";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

const App = () => (
  <DemoProvider>
    <ScrollToTop />
    <Analytics />
    <Hotjar />
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/hero" element={<LinkedInBanner />} />
      <Route path="/old" element={<OldSite />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  </DemoProvider>
);

export default App;
