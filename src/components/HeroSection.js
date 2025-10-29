import React, { useState, useEffect } from "react";
import { sharedStyles } from "../styles";

const HeroSection = ({ onRequestDemo }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mediaQuery.matches);
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const styles = {
    hero: {
      padding: `${sharedStyles.spacing.section.vertical} ${
        isMobile ? "20px" : sharedStyles.spacing.section.horizontal
      }`,
      textAlign: "center",
      background: `linear-gradient(180deg, ${sharedStyles.colors.secondary.light} 0%, ${sharedStyles.colors.primary.light} 100%)`,
      color: sharedStyles.colors.white,
      position: "relative",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      position: "relative",
      zIndex: 2,
    },
    swimmers: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      zIndex: 1,
      pointerEvents: "none",
    },
    swimmer: {
      position: "absolute",
      width: isMobile ? "32px" : "48px",
      height: isMobile ? "32px" : "48px",
      opacity: 0.7,
      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
    },
    swimmerImg: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block",
    },
    title: {
      ...sharedStyles.typography.h1,
      color: sharedStyles.colors.primary.dark,
      maxWidth: "840px",
      margin: "0 auto",
    },
    subtitle: {
      ...sharedStyles.typography.subtitle,
      color: sharedStyles.colors.primary.dark,
      opacity: 0.9,
      maxWidth: "820px",
      margin: "16px auto 0",
    },
    ctaButton: {
      ...sharedStyles.elements.button,
      backgroundColor: sharedStyles.colors.primary.dark,
      color: sharedStyles.colors.white,
      textDecoration: "none",
      marginTop: "28px",
      display: "inline-block",
    },
    // CTA now lives in the sticky header; keep hero focused on messaging and visual
    productFrame: {
      width: "100%",
      maxWidth: "840px",
      aspectRatio: "16 / 9",
      border: `2px dashed ${sharedStyles.colors.primary.medium}`,
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: sharedStyles.colors.white,
      fontWeight: 600,
      margin: "36px auto 0",
      background: "rgba(0,0,0,0.15)",
      backdropFilter: "blur(2px)",
    },
  };

  const swimmerConfigs = [
    {
      dir: "ltr",
      posKey: "top",
      posVal: "6%",
      left: "2%",
      dur: isMobile ? 16 : 24,
      phase: 0.1,
      size: 1.1,
    },
    {
      dir: "rtl",
      posKey: "bottom",
      posVal: "8%",
      left: "14%",
      dur: isMobile ? 18 : 26,
      phase: 0.35,
      size: 1.4,
    },
    {
      dir: "ltr",
      posKey: "top",
      posVal: "18%",
      left: "26%",
      dur: isMobile ? 20 : 28,
      phase: 0.55,
      size: 1.6,
    },
    {
      dir: "rtl",
      posKey: "top",
      posVal: "26%",
      left: "38%",
      dur: isMobile ? 22 : 30,
      phase: 0.15,
      size: 1.2,
    },
    {
      dir: "ltr",
      posKey: "bottom",
      posVal: "16%",
      left: "50%",
      dur: isMobile ? 24 : 32,
      phase: 0.7,
      size: 1.9,
    },
    {
      dir: "rtl",
      posKey: "bottom",
      posVal: "24%",
      left: "62%",
      dur: isMobile ? 26 : 34,
      phase: 0.25,
      size: 1.3,
    },
    {
      dir: "ltr",
      posKey: "top",
      posVal: "38%",
      left: "74%",
      dur: isMobile ? 28 : 36,
      phase: 0.85,
      size: 1.5,
    },
    {
      dir: "rtl",
      posKey: "top",
      posVal: "48%",
      left: "86%",
      dur: isMobile ? 30 : 38,
      phase: 0.45,
      size: 1.0,
    },
    {
      dir: "ltr",
      posKey: "bottom",
      posVal: "36%",
      left: "8%",
      dur: isMobile ? 26 : 34,
      phase: 0.3,
      size: 1.8,
    },
    {
      dir: "rtl",
      posKey: "top",
      posVal: "58%",
      left: "32%",
      dur: isMobile ? 24 : 32,
      phase: 0.6,
      size: 1.25,
    },
    {
      dir: "ltr",
      posKey: "top",
      posVal: "68%",
      left: "56%",
      dur: isMobile ? 22 : 30,
      phase: 0.2,
      size: 1.4,
    },
    {
      dir: "rtl",
      posKey: "bottom",
      posVal: "12%",
      left: "80%",
      dur: isMobile ? 20 : 28,
      phase: 0.75,
      size: 2.0,
    },
  ];

  return (
    <div style={styles.hero}>
      {/* Swimming logo animations (CSS keyframes) */}
      <style>{`
        @keyframes swim-left-to-right {
          0% { transform: translateX(-120vw) translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          50% { transform: translateX(0vw) translateY(-6%) rotate(2deg); }
          100% { transform: translateX(120vw) translateY(0) rotate(-2deg); opacity: 0; }
        }
        @keyframes swim-right-to-left {
          0% { transform: translateX(120vw) translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          50% { transform: translateX(0vw) translateY(6%) rotate(-2deg); }
          100% { transform: translateX(-120vw) translateY(0) rotate(2deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-swimmer { animation: none !important; }
        }
      `}</style>

      <div style={styles.swimmers} aria-hidden="true">
        {swimmerConfigs.map((cfg, idx) => (
          <div
            key={idx}
            className="hero-swimmer"
            style={{
              ...styles.swimmer,
              [cfg.posKey]: cfg.posVal,
              left: cfg.left,
              width: `${(isMobile ? 32 : 48) * (cfg.size || 1)}px`,
              height: `${(isMobile ? 32 : 48) * (cfg.size || 1)}px`,
              animation: `${
                cfg.dir === "ltr" ? "swim-left-to-right" : "swim-right-to-left"
              } ${cfg.dur}s linear infinite`,
              animationDelay: `-${Math.round(cfg.dur * cfg.phase)}s`,
            }}
          >
            <img
              src="logo192.png"
              alt=""
              style={{
                ...styles.swimmerImg,
                transform: cfg.dir === "ltr" ? "scaleX(-1)" : "none",
              }}
            />
          </div>
        ))}
      </div>
      <div style={styles.content}>
        <h1
          style={{
            ...styles.title,
            fontSize: isMobile ? "2.6rem" : "3.8rem",
            lineHeight: isMobile ? "1.2" : "1.15",
          }}
        >
          Where Seafood Meets
          <br />
          Smart Software
        </h1>
        <p style={styles.subtitle}>
          Turbocharge your revenue with Nammu's industry-leading sales engine.
        </p>
        <button style={styles.ctaButton} onClick={onRequestDemo}>
          Request a demo
        </button>
        <div style={styles.productFrame}>Product Visual Placeholder</div>
      </div>
    </div>
  );
};

export default HeroSection;
