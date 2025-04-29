import React, { useState, useEffect } from "react";
import { sharedStyles } from "../styles";

const HowItWorksSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view based on screen width
  useEffect(() => {
    const mediaQuery = window.matchMedia(sharedStyles.breakpoints.mobile);

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
    section: {
      padding: `${sharedStyles.spacing.section.vertical} ${
        isMobile ? "20px" : sharedStyles.spacing.section.horizontal
      }`,
      backgroundColor: sharedStyles.colors.light,
      textAlign: "center",
      margin: "0 auto",
    },
    title: {
      ...sharedStyles.typography.h2,
      color: sharedStyles.colors.primary,
    },
    subtitle: {
      ...sharedStyles.typography.subtitle,
      maxWidth: "1000px",
      margin: "0 auto 50px",
      color: sharedStyles.colors.text.light,
    },
    featuresContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: isMobile ? "column" : "row",
      gap: sharedStyles.spacing.component.gap,
      marginBottom: "30px",
    },
    feature: {
      flex: "1 1 45%",
      backgroundColor: sharedStyles.colors.white,
      borderRadius: sharedStyles.elements.card.borderRadius,
      padding: sharedStyles.spacing.element.padding,
      boxShadow: sharedStyles.elements.card.boxShadow,
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
    },
    featureHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
    },
    featureIcon: {
      width: "50px",
      height: "50px",
      marginRight: "15px",
      backgroundColor: sharedStyles.colors.primary,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: sharedStyles.colors.white,
      fontSize: "1.5rem",
      aspectRatio: "1 / 1",
    },
    featureTitle: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.primary,
      marginBottom: "5px",
    },
    featureTagline: {
      fontStyle: "italic",
      color: sharedStyles.colors.text.light,
      marginBottom: "20px",
      fontSize: "1.1rem",
    },
    benefitsList: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    benefitItem: {
      padding: "10px 0",
      display: "flex",
      alignItems: "flex-start",
    },
    benefitIcon: {
      color: sharedStyles.colors.primary,
      marginRight: "10px",
      fontSize: "1.2rem",
      marginTop: "2px",
    },
    benefitText: {
      ...sharedStyles.typography.body,
      color: sharedStyles.colors.text.medium,
    },
  };

  // Mock function for checkmark icon
  const CheckIcon = () => <span style={styles.benefitIcon}>✓</span>;

  // Graph icon (left side)
  const GraphIcon = () => (
    <div style={styles.featureIcon}>
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
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
        <line x1="2" y1="20" x2="22" y2="20"></line>
      </svg>
    </div>
  );

  // Brain icon (right side)
  const BrainIcon = () => (
    <div style={styles.featureIcon}>
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
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z"></path>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z"></path>
      </svg>
    </div>
  );

  return (
    <div style={styles.section}>
      <h2 style={styles.title}>How Nammu Works</h2>
      <p style={styles.subtitle}>
        Nammu combines real-time analytics and AI sales intelligence to drive
        smarter, faster decisions.
      </p>

      <div style={styles.featuresContainer}>
        {/* Real-Time Analytics Platform */}
        <div style={styles.feature}>
          <div style={styles.featureHeader}>
            <GraphIcon />
            <div>
              <h3 style={styles.featureTitle}>Real-Time Analytics</h3>
            </div>
          </div>
          <p style={styles.featureTagline}>
            Unlock insights hidden in your ERP
          </p>

          <ul style={styles.benefitsList}>
            <li style={styles.benefitItem}>
              <CheckIcon />
              <span style={styles.benefitText}>
                Instantly convert complex data into actionable insights
              </span>
            </li>
            <li style={styles.benefitItem}>
              <CheckIcon />
              <span style={styles.benefitText}>
                Track rep, customer, and product performance in real time
              </span>
            </li>
            <li style={styles.benefitItem}>
              <CheckIcon />
              <span style={styles.benefitText}>
                Surface critical metrics for faster, more informed decisions
              </span>
            </li>
          </ul>
        </div>

        {/* AI-Powered Sales Intelligence */}
        <div style={styles.feature}>
          <div style={styles.featureHeader}>
            <BrainIcon />
            <div>
              <h3 style={styles.featureTitle}>AI-Optimized Sales</h3>
            </div>
          </div>
          <p style={styles.featureTagline}>
            Optimize every customer interaction
          </p>

          <ul style={styles.benefitsList}>
            <li style={styles.benefitItem}>
              <CheckIcon />
              <span style={styles.benefitText}>
                Equip reps with precise recommendations for every sale
              </span>
            </li>
            <li style={styles.benefitItem}>
              <CheckIcon />
              <span style={styles.benefitText}>
                Capture more revenue with smart inventory balancing
              </span>
            </li>
            <li style={styles.benefitItem}>
              <CheckIcon />
              <span style={styles.benefitText}>
                Streamline workflows to unlock time for high-impact growth
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
