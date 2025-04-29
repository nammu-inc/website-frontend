import React, { useState, useEffect } from "react";
import { sharedStyles } from "../styles";

const HeroSection = () => {
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
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: sharedStyles.colors.white,
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 1,
    },
    content: {
      position: "relative",
      zIndex: 2,
    },
    logoContainer: {
      marginBottom: "20px",
    },
    logo: {
      height: isMobile ? "80px" : "120px",
    },
    title: {
      ...sharedStyles.typography.h1,
      color: sharedStyles.colors.white,
      maxWidth: "800px",
      margin: "0 auto",
    },
  };

  return (
    <div
      style={{
        ...styles.hero,
        backgroundImage: "url('heroimage.jpg')",
      }}
    >
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <div style={styles.logoContainer}>
          <img src="invertedlogo.png" alt="Nammu Logo" style={styles.logo} />
        </div>
        <h1 style={styles.title}>AI Solutions for Food Distributors</h1>
      </div>
    </div>
  );
};

export default HeroSection;
