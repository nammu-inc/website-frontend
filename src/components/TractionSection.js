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
      color: sharedStyles.colors.primary,
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
      backgroundColor: sharedStyles.colors.light,
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
      backgroundColor: sharedStyles.colors.primary,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: sharedStyles.colors.white,
      fontSize: "1.5rem",
    },
    resultTitle: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.primary,
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
      color: sharedStyles.colors.secondary,
      marginTop: "auto",
    },
    testimonialContainer: {
      backgroundColor: sharedStyles.colors.light,
      borderRadius: sharedStyles.elements.card.borderRadius,
      padding: "30px",
      boxShadow: sharedStyles.elements.card.boxShadow,
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      gap: "30px",
      maxWidth: "900px",
      margin: "0 auto 50px",
      textAlign: "left",
    },
    testimonialContent: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
    },
    testimonialAuthor: {
      marginTop: "15px",
      fontWeight: "600",
      color: sharedStyles.colors.text.dark,
      textAlign: "right",
    },
    logoContainer: {
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: isMobile ? "20px" : "0",
    },
    logoPlaceholder: {
      width: "120px",
      height: "120px",
      backgroundColor: "#e0e0e0",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#888",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    companyName: {
      fontWeight: "600",
      color: sharedStyles.colors.text.dark,
      marginTop: "10px",
    },
    quote: {
      ...sharedStyles.typography.body,
      fontStyle: "italic",
      color: sharedStyles.colors.text.medium,
      position: "relative",
      paddingLeft: "20px",
      borderLeft: `3px solid ${sharedStyles.colors.primary}`,
    },
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
    <div style={styles.section}>
      <h2 style={styles.title}>Proven Results</h2>
      <p style={styles.subtitle}>
        Our partners are seeing immediate impact with our AI-powered platform
      </p>

      <div style={styles.resultsContainer}>
        {/* Revenue Recovery Result */}
        <div style={styles.resultCard}>
          <RevenueIcon />
          <h3 style={styles.resultTitle}>Revenue Growth</h3>
          <p style={styles.resultDescription}>
            Better account prioritization and early trend detection
          </p>
          <div style={styles.resultMetric}>12%</div>
        </div>

        {/* Profit Boost Result */}
        <div style={styles.resultCard}>
          <ProfitIcon />
          <h3 style={styles.resultTitle}>Boosted Gross Profit</h3>
          <p style={styles.resultDescription}>
            AI-guided product, quantity, and pricing optimization
          </p>
          <div style={styles.resultMetric}>15%</div>
        </div>

        {/* Time Savings Result */}
        <div style={styles.resultCard}>
          <TimeIcon />
          <h3 style={styles.resultTitle}>Time Savings</h3>
          <p style={styles.resultDescription}>
            Automated analytics and streamlined order creation
          </p>
          <div style={styles.resultMetric}>20 hrs/week</div>
        </div>
      </div>

      <div style={styles.testimonialContainer}>
        <div style={styles.logoContainer}>
          <div style={styles.logoPlaceholder}>LOGO</div>
          <div style={styles.companyName}>Company X</div>
        </div>
        <div style={styles.testimonialContent}>
          <blockquote style={styles.quote}>
            "Nammu has transformed how we analyze and act on our sales data.
            With instant insights into customer patterns and product
            performance, we've been able to make strategic decisions that
            directly impact our bottom line."
          </blockquote>
          <div style={styles.testimonialAuthor}>John Doe - COO</div>
        </div>
      </div>
    </div>
  );
};

export default TractionSection;
