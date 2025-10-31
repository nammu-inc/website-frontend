import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles";

const WhyNammuSection = () => {
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
        isMobile ? "30px" : sharedStyles.spacing.section.horizontal
      }`,
      paddingTop: "30px",
      backgroundColor: "transparent",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      margin: "0 auto 40px",
      maxWidth: 900,
    },
    title: {
      ...sharedStyles.typography.h2,
      color: sharedStyles.colors.primary.dark,
      marginBottom: 12,
    },
    stepsWrap: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 900,
      margin: "0 auto",
    },
    step: {
      backgroundColor: "transparent",
      borderRadius: sharedStyles.elements.card.borderRadius,
      boxShadow: sharedStyles.elements.card.boxShadow,
      padding: "0 30px 16px",
      textAlign: "left",
      display: "flex",
      gap: 32,
      alignItems: "flex-start",
    },
    badge: {
      minWidth: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: sharedStyles.colors.secondary.dark,
      color: sharedStyles.colors.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginTop: 32,
    },
    stepContent: {
      flex: 1,
    },
    stepTitle: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.primary.dark,
      marginTop: 32,
      marginBottom: 6,
    },
    stepText: {
      ...sharedStyles.typography.body,
      color: sharedStyles.colors.text.medium,
      marginTop: 0,
      marginBottom: 16,
    },
  };

  // Icon components
  const FishIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Fish body */}
      <ellipse cx="13" cy="12" rx="7" ry="5.3" />
      {/* Fish tail: enlarged triangles for a bigger tail */}
      <polygon points="5,12 1.2,8.5 3.4,12 1.2,15.5" />
      {/* Eye */}
      <circle cx="16.3" cy="11" r="1" fill="currentColor" />
    </svg>
  );

  const LightningIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );

  const PeopleIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  return (
    <div id="why" style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Why Nammu</h2>
      </div>

      <div style={styles.stepsWrap}>
        <div style={styles.step}>
          <div style={styles.badge}>
            <FishIcon />
          </div>
          <div style={styles.stepContent}>
            <h4 style={styles.stepTitle}>Seafood Specific</h4>
            <p style={styles.stepText}>
              Built exclusively for the seafood industry, Nammu brings unmatched
              insight to the unique challenges and workflows that define your
              business.
            </p>
          </div>
        </div>
        <div style={styles.step}>
          <div style={styles.badge}>
            <LightningIcon />
          </div>
          <div style={styles.stepContent}>
            <h4 style={styles.stepTitle}>Seamless Integration</h4>
            <p style={styles.stepText}>
              Nammu connects directly to your existing systems and delivers
              immediate value without costly or disruptive ERP migrations.
            </p>
          </div>
        </div>
        <div style={styles.step}>
          <div style={styles.badge}>
            <PeopleIcon />
          </div>
          <div style={styles.stepContent}>
            <h4 style={styles.stepTitle}>User-Centric Design</h4>
            <p style={styles.stepText}>
              Nammu’s intuitive platform makes data easy to understand and act
              on, empowering every salesperson regardless of technical
              background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyNammuSection;
