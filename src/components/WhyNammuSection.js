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
        isMobile ? "20px" : sharedStyles.spacing.section.horizontal
      }`,
      backgroundColor: sharedStyles.colors.white,
      textAlign: "center",
      margin: "0 auto",
    },
    title: {
      ...sharedStyles.typography.h2,
      color: sharedStyles.colors.primary.dark,
    },
    subtitle: {
      ...sharedStyles.typography.subtitle,
      maxWidth: "1000px",
      margin: "0 auto 40px",
      color: sharedStyles.colors.text.light,
    },
    cards: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: isMobile ? "column" : "row",
      gap: sharedStyles.spacing.component.gap,
    },
    card: {
      flex: "1 1 30%",
      backgroundColor: sharedStyles.colors.white,
      borderRadius: sharedStyles.elements.card.borderRadius,
      padding: sharedStyles.spacing.element.padding,
      boxShadow: sharedStyles.elements.card.boxShadow,
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    icon: {
      width: "50px",
      height: "50px",
      marginBottom: "15px",
      backgroundColor: sharedStyles.colors.secondary.dark,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: sharedStyles.colors.secondary.light,
      fontSize: "1.5rem",
    },
    cardTitle: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.secondary.dark,
      marginBottom: "8px",
    },
    cardText: {
      ...sharedStyles.typography.body,
      color: sharedStyles.colors.secondary.dark,
    },
  };

  const LightningIcon = () => (
    <div style={styles.icon}>
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
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path>
      </svg>
    </div>
  );

  const TargetIcon = () => (
    <div style={styles.icon}>
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
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    </div>
  );

  const ShieldIcon = () => (
    <div style={styles.icon}>
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    </div>
  );

  return (
    <div id="why" style={styles.section}>
      <h2 style={styles.title}>Why Nammu</h2>
      <p style={styles.subtitle}>Three reasons teams choose us and stay.</p>

      <div style={styles.cards}>
        <div style={styles.card}>
          <LightningIcon />
          <h3 style={styles.cardTitle}>Seafood Specific</h3>
          <p style={styles.cardText}>
            We focus exclusively on seafood, giving us unmatched insight to
            solve the industry’s unique challenges.
          </p>
        </div>

        <div style={styles.card}>
          <TargetIcon />
          <h3 style={styles.cardTitle}>Seamless Integration</h3>
          <p style={styles.cardText}>
            Works with your current systems, delivering value quickly—no costly
            or disruptive ERP migrations.
          </p>
        </div>

        <div style={styles.card}>
          <ShieldIcon />
          <h3 style={styles.cardTitle}>People First</h3>
          <p style={styles.cardText}>
            Our intuitive platform empowers every salesperson to act confidently
            on data, regardless of technical background.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyNammuSection;
