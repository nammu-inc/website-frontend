import React, { useState, useEffect } from "react";
import { sharedStyles } from "../styles";

const TractionSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mediaQuery.matches);
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const styles = {
    section: {
      padding: `${sharedStyles.spacing.section.vertical} ${
        isMobile ? "20px" : sharedStyles.spacing.section.horizontal
      }`,
      backgroundColor: sharedStyles.colors.white,
      textAlign: "center",
      margin: "0 auto",
    },
    title: {
      ...sharedStyles.typography.h2,
      color: sharedStyles.colors.primary.dark,
      marginBottom: "20px",
    },
    subtitle: {
      ...sharedStyles.typography.subtitle,
      maxWidth: "800px",
      margin: "0 auto 40px",
      color: sharedStyles.colors.text.light,
    },
    resultsContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: isMobile ? "column" : "row",
      gap: sharedStyles.spacing.component.gap,
      marginBottom: "50px",
    },
    resultCard: {
      flex: "1 1 30%",
      backgroundColor: sharedStyles.colors.primary.light,
      borderRadius: sharedStyles.elements.card.borderRadius,
      padding: sharedStyles.spacing.element.padding,
      boxShadow: sharedStyles.elements.card.boxShadow,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: isMobile ? "auto" : "220px",
      marginBottom: isMobile ? "20px" : "0",
    },
    resultIcon: {
      width: "50px",
      height: "50px",
      margin: "0 auto 15px",
      backgroundColor: sharedStyles.colors.primary.dark,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: sharedStyles.colors.white,
      fontSize: "1.5rem",
    },
    resultTitle: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.primary.dark,
      marginBottom: "10px",
    },
    resultDescription: {
      ...sharedStyles.typography.body,
      color: sharedStyles.colors.text.medium,
      marginBottom: "10px",
    },
    resultMetric: {
      fontSize: "2rem",
      fontWeight: "700",
      color: sharedStyles.colors.secondary.medium,
      marginTop: "auto",
    },
    // testimonial styles removed
  };

  const RevenueIcon = () => (
    <div style={styles.resultIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    </div>
  );

  const ProfitIcon = () => (
    <div style={styles.resultIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m2 20 2-2m0 0 5-5m-5 5v-5m0 5h5"></path>
        <path d="M22 4v5h-5"></path>
        <path d="m22 4-9 9"></path>
      </svg>
    </div>
  );

  const TimeIcon = () => (
    <div style={styles.resultIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    </div>
  );

  return (
    <div id="traction" style={styles.section}>
      <h2 style={styles.title}>The Industry Leading Sales Engine</h2>
      <p style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div style={styles.resultsContainer}>
        <div style={styles.resultCard}>
          <RevenueIcon />
          <h3 style={styles.resultTitle}>Save Time</h3>
          <p style={styles.resultDescription}>Lorem ipsum dolor sit amet.</p>
        </div>

        <div style={styles.resultCard}>
          <ProfitIcon />
          <h3 style={styles.resultTitle}>Boost Revenue</h3>
          <p style={styles.resultDescription}>Lorem ipsum dolor sit amet.</p>
        </div>

        <div style={styles.resultCard}>
          <TimeIcon />
          <h3 style={styles.resultTitle}>Lorem ipsum</h3>
          <p style={styles.resultDescription}>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default TractionSection;
