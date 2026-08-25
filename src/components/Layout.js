import React from "react";
import Header from "./Header";
import NewsletterBanner from "./NewsletterBanner";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
    <NewsletterBanner />
    <Header />
    <div style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;
