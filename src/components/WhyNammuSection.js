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
      backgroundColor: sharedStyles.colors.white,
      borderRadius: sharedStyles.elements.card.borderRadius,
      boxShadow: sharedStyles.elements.card.boxShadow,
      padding: sharedStyles.spacing.element.padding,
      textAlign: "left",
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
    },
    badge: {
      minWidth: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: sharedStyles.colors.secondary.dark,
      color: sharedStyles.colors.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
    },
    stepContent: {
      flex: 1,
    },
    stepTitle: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.primary.dark,
      marginBottom: 6,
    },
    stepText: {
      ...sharedStyles.typography.body,
      color: sharedStyles.colors.text.medium,
      margin: 0,
      lineHeight: 1.6,
    },
  };

  return (
    <div id="why" style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Why Nammu</h2>
      </div>

      <div style={styles.stepsWrap}>
        <div style={styles.step}>
          <div style={styles.badge}>1</div>
          <div style={styles.stepContent}>
            <h4 style={styles.stepTitle}>Seafood Specific</h4>
            <p style={styles.stepText}>
              We focus exclusively on seafood, giving us unmatched insight to
              solve theindustry’s unique challenges.
            </p>
          </div>
        </div>
        <div style={styles.step}>
          <div style={styles.badge}>2</div>
          <div style={styles.stepContent}>
            <h4 style={styles.stepTitle}>Seamless Integration</h4>
            <p style={styles.stepText}>
              Works with your current systems to deliver value quickly–no costly
              or disruptive ERP migrations.
            </p>
          </div>
        </div>
        <div style={styles.step}>
          <div style={styles.badge}>3</div>
          <div style={styles.stepContent}>
            <h4 style={styles.stepTitle}>User-Centric Design</h4>
            <p style={styles.stepText}>
              Our intuitive platform empowers reps to confidently act on data,
              regardless of technical background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyNammuSection;
