import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles";

const TestimonialSection = () => {
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
      margin: "0 auto",
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
      borderLeft: `3px solid ${sharedStyles.colors.primary.dark}`,
    },
  };

  return (
    <div id="testimonials" style={styles.section}>
      <h2 style={styles.title}>What Our Customers Say</h2>
      <p style={styles.subtitle}>Real stories from teams growing with Nammu</p>

      <div style={styles.testimonialContainer}>
        <div style={styles.logoContainer}>
          <div style={styles.logoPlaceholder}>LOGO</div>
          <div style={styles.companyName}>Acme Wholesale</div>
        </div>
        <div style={styles.testimonialContent}>
          <blockquote style={styles.quote}>
            “Nammu helps our sales reps find opportunities we would have missed
            and turn insights into orders in minutes.”
          </blockquote>
          <div style={styles.testimonialAuthor}>Alex Kim — VP Sales</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
