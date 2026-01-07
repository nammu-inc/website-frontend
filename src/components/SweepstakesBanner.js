import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sharedStyles } from "../styles";

const SweepstakesBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mq.matches);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Link
      to="/gsmc"
      style={{
        display: "block",
        textDecoration: "none",
        backgroundColor: sharedStyles.colors.primary.dark,
        color: sharedStyles.colors.white,
        padding: isMobile ? "12px 20px" : "14px 20px",
        textAlign: "center",
        position: "relative",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor =
          sharedStyles.colors.primary.medium;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor =
          sharedStyles.colors.primary.dark;
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: isMobile ? "0.9rem" : "1rem",
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          Attending GSMC 2026? Enter Nammu's Sweepstakes to Win an iPad, $100
          Amazon Gift Cards, and more!
        </span>
        <span
          style={{
            fontSize: isMobile ? "0.85rem" : "0.95rem",
            fontWeight: "500",
            opacity: 0.9,
            textDecoration: "underline",
          }}
        >
          Enter Now →
        </span>
      </div>
    </Link>
  );
};

export default SweepstakesBanner;
