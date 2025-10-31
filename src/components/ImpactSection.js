import React, { useState, useEffect } from "react";
import { sharedStyles } from "../styles";

const ImpactSection = () => {
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
      backgroundColor: "transparent",
      textAlign: "center",
      margin: "0 auto",
      marginTop: sharedStyles.spacing.section.vertical,
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
    },
    resultCard: {
      flex: "1 1 30%",
      borderRadius: sharedStyles.elements.card.borderRadius,
      padding: sharedStyles.spacing.element.padding,
      boxShadow: sharedStyles.elements.card.boxShadow,
      display: "flex",
      flexDirection: "column",
      height: "auto",
      marginBottom: isMobile ? "20px" : "0",
      backgroundColor: "transparent",
    },
    cardLight: {
      border: `1px solid ${sharedStyles.colors.secondary.medium}`,
      color: sharedStyles.colors.primary.dark,
    },
    cardMedium: {
      border: `1px solid ${sharedStyles.colors.primary.medium}`,
      color: sharedStyles.colors.primary.dark,
    },
    cardDark: {
      border: `1px solid ${sharedStyles.colors.primary.dark}`,
      color: sharedStyles.colors.primary.dark,
    },
    resultTitle: {
      ...sharedStyles.typography.h3,
      marginTop: "6px",
      marginBottom: "6px",
    },
    resultDescription: {
      ...sharedStyles.typography.body,
      marginTop: "6px",
      color: sharedStyles.colors.text.medium,
    },
    resultMetric: {
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      fontWeight: 900,
      lineHeight: 1,
      marginBottom: "12px",
    },
    metricLight: {
      color: sharedStyles.colors.secondary.medium,
    },
    metricMedium: {
      color: sharedStyles.colors.primary.medium,
    },
    metricDark: {
      color: sharedStyles.colors.primary.dark,
    },
  };

  return (
    <div id="traction" style={styles.section}>
      <h2 style={styles.title}>Empowering teams to perform at their best.</h2>
      <p style={styles.subtitle}></p>

      <div style={styles.resultsContainer}>
        <div style={{ ...styles.resultCard, ...styles.cardLight }}>
          <div style={{ ...styles.resultMetric, ...styles.metricLight }}>
            26%
          </div>
          <h3 style={{ ...styles.resultTitle, ...styles.metricLight }}>Time Saved per Week</h3>
        </div>

        <div style={{ ...styles.resultCard, ...styles.cardMedium }}>
          <div style={{ ...styles.resultMetric, ...styles.metricMedium }}>
            +1.2
          </div>
          <h3 style={{ ...styles.resultTitle, ...styles.metricMedium }}>Cross-Sells per Order</h3>
        </div>

        <div style={{ ...styles.resultCard, ...styles.cardDark }}>
          <div style={{ ...styles.resultMetric, ...styles.metricDark }}>
            &lt;3 weeks
          </div>
          <h3 style={{ ...styles.resultTitle, ...styles.metricDark }}>To Go Live</h3>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
