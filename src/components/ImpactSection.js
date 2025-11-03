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
        isMobile ? "30px" : sharedStyles.spacing.section.horizontal
      }`,
      backgroundColor: sharedStyles.colors.white,
      textAlign: "center",
    },
    contentWrapper: {
      maxWidth: "1300px",
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
      gap: isMobile ? "80px" : sharedStyles.spacing.component.gap,
      marginBottom: "40px",
      marginTop: "60px",
    },
    resultCard: {
      flex: "1 1 0",
      minWidth: 0,
      borderRadius: "40px",
      boxShadow: sharedStyles.elements.card.boxShadow,
      display: "flex",
      flexDirection: "column",
      height: "auto",
      backgroundColor: sharedStyles.colors.white,
      position: "relative",
      paddingTop: "50px",
    },
    cardLight: {
      border: `2px solid ${sharedStyles.colors.secondary.medium}`,
      color: sharedStyles.colors.primary.dark,
    },
    cardMedium: {
      border: `2px solid ${sharedStyles.colors.primary.medium}`,
      color: sharedStyles.colors.primary.dark,
    },
    cardDark: {
      border: `2px solid ${sharedStyles.colors.primary.dark}`,
      color: sharedStyles.colors.primary.dark,
    },
    cardContent: {
      padding: "20px 30px 40px",
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
    iconContainer: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "-40px",
      left: "50%",
      transform: "translateX(-50%)",
      border: "4px solid white",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    iconContainerLight: {
      backgroundColor: sharedStyles.colors.secondary.medium,
    },
    iconContainerMedium: {
      backgroundColor: sharedStyles.colors.primary.medium,
    },
    iconContainerDark: {
      backgroundColor: sharedStyles.colors.primary.dark,
    },
  };

  // Icon components
  const ClockIcon = ({ color }) => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  const TrendingUpIcon = ({ color }) => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );

  const RocketIcon = ({ color }) => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );

  return (
    <div id="traction" style={styles.section}>
      <div style={styles.contentWrapper}>
        <h2 style={styles.title}>Empowering teams to perform at their best.</h2>
        <p style={styles.subtitle}></p>

        <div style={styles.resultsContainer}>
          <div style={{ ...styles.resultCard, ...styles.cardLight }}>
            <div
              style={{ ...styles.iconContainer, ...styles.iconContainerLight }}
            >
              <ClockIcon color={sharedStyles.colors.white} />
            </div>
            <div style={styles.cardContent}>
              <div style={{ ...styles.resultMetric, ...styles.metricLight }}>
                26%
              </div>
              <h3 style={{ ...styles.resultTitle, ...styles.metricLight }}>
                Time Saved per Week
              </h3>
            </div>
          </div>

          <div style={{ ...styles.resultCard, ...styles.cardMedium }}>
            <div
              style={{ ...styles.iconContainer, ...styles.iconContainerMedium }}
            >
              <TrendingUpIcon color={sharedStyles.colors.white} />
            </div>
            <div style={styles.cardContent}>
              <div style={{ ...styles.resultMetric, ...styles.metricMedium }}>
                +1.2
              </div>
              <h3 style={{ ...styles.resultTitle, ...styles.metricMedium }}>
                Cross-Sells per Order
              </h3>
            </div>
          </div>

          <div style={{ ...styles.resultCard, ...styles.cardDark }}>
            <div
              style={{ ...styles.iconContainer, ...styles.iconContainerDark }}
            >
              <RocketIcon color={sharedStyles.colors.white} />
            </div>
            <div style={styles.cardContent}>
              <div style={{ ...styles.resultMetric, ...styles.metricDark }}>
                &lt;1
              </div>
              <h3 style={{ ...styles.resultTitle, ...styles.metricDark }}>
                Month to Go Live
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
