import React, { useState, useEffect } from "react";
import { sharedStyles } from "../styles";
import ProductCarousel from "./ProductCarousel";

const HeroSection = ({ onRequestDemo }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isWidescreen, setIsWidescreen] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia(sharedStyles.breakpoints.mobile);
    const widescreenQuery = window.matchMedia(
      sharedStyles.breakpoints.widescreen
    );

    setIsMobile(mobileQuery.matches);
    setIsWidescreen(widescreenQuery.matches);

    const handleResize = () => {
      setIsMobile(mobileQuery.matches);
      setIsWidescreen(widescreenQuery.matches);
    };

    mobileQuery.addEventListener("change", handleResize);
    widescreenQuery.addEventListener("change", handleResize);

    return () => {
      mobileQuery.removeEventListener("change", handleResize);
      widescreenQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const [ctaHover, setCtaHover] = useState(false);

  const styles = {
    hero: {
      padding: `60px ${
        isMobile ? "30px" : sharedStyles.spacing.section.horizontal
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
      maxWidth: isWidescreen ? "800px" : "600px",
      margin: "0 auto",
    },
    subtitle: {
      ...sharedStyles.typography.subtitle,
      color: sharedStyles.colors.primary.dark,
      opacity: 0.9,
      maxWidth: "600px",
      margin: "16px auto 0",
    },
    ctaButton: {
      ...sharedStyles.elements.button,
      backgroundColor: sharedStyles.colors.white,
      color: sharedStyles.colors.secondary.dark,
      border: `1px solid ${sharedStyles.colors.secondary.dark}`,
      textDecoration: "none",
      marginTop: "36px",
      display: "inline-block",
    },
    ctaButtonHover: {
      backgroundColor: sharedStyles.colors.secondary.medium,
      color: sharedStyles.colors.white,
      borderColor: sharedStyles.colors.secondary.medium,
      transform: "translateY(-1px)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
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
            fontSize: isMobile ? "2.6rem" : isWidescreen ? "3.8rem" : "3.2rem",
            lineHeight: isMobile ? "1.2" : "1.15",
          }}
        >
          Where Seafood Meets Smart Software
        </h1>
        <p style={styles.subtitle}>
          With intuitive visuals and clear insights, Nammu gives teams the
          confidence to sell swiftly and decisively.
        </p>
        <button
          style={{
            ...styles.ctaButton,
            ...(ctaHover ? styles.ctaButtonHover : {}),
          }}
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          onClick={onRequestDemo}
        >
          Request a demo
        </button>
        <ProductCarousel />
      </div>
    </div>
  );
};

export default HeroSection;
