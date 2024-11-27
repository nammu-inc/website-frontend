import React, { useState, useEffect } from "react";

const TimelineSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view based on screen width
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set initial state based on media query match
    setIsMobile(mediaQuery.matches);

    // Add event listener to update state on screen resize
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  // Inline styles
  const styles = {
    timeline: {
      padding: "50px 20px",
      backgroundColor: "#fff",
      textAlign: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "30px",
    },
    columns: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "20px",
      flexDirection: isMobile ? "column" : "row", // Stack columns on mobile
      alignItems: isMobile ? "center" : "flex-start", // Center on mobile, left-align on larger screens
    },
    column: {
      flex: isMobile ? "1 1 100%" : "1 1 calc(33.333% - 20px)", // Full width on mobile, 1/3 width on larger screens
      maxWidth: isMobile ? "none" : "300px", // Remove max-width on mobile
      backgroundColor: "#f8f9fa",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      marginBottom: isMobile ? "20px" : "0", // Add space between columns on mobile
    },
    phaseTitle: {
      fontSize: "1.5rem",
      marginBottom: "10px",
      color: "#007bff",
    },
    subheader: {
      fontSize: "1.2rem",
      color: "#888",
      marginBottom: "15px",
    },
    description: {
      fontSize: "1rem",
      color: "#555",
    },
  };

  return (
    <div style={styles.timeline}>
      <h2 style={styles.title}>Our Timeline</h2>
      <div style={styles.columns}>
        <div style={styles.column}>
          <h3 style={styles.phaseTitle}>Phase 1: First Pilots</h3>
          <p style={styles.subheader}>Early 2025</p>
          <p style={styles.description}>
            Partnering with select distributors to refine our platform and
            demonstrate its value.
          </p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.phaseTitle}>Phase 2: Expand Pilots</h3>
          <p style={styles.subheader}>Late 2025</p>
          <p style={styles.description}>
            Broadening our reach to include more partners and enhance features
            based on feedback.
          </p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.phaseTitle}>Phase 3: Launch Nammu</h3>
          <p style={styles.subheader}>2026</p>
          <p style={styles.description}>
            Officially bringing Nammu to market, empowering distributors to
            streamline operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
