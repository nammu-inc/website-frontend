import React, { useState } from "react";
import { sharedStyles } from "../styles";

const BookDemoSection = ({ onRequestDemo }) => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mediaQuery.matches);
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const styles = {
    section: {
      padding: `${sharedStyles.spacing.section.vertical} ${
        isMobile ? "20px" : sharedStyles.spacing.section.horizontal
      }`,
      backgroundColor: sharedStyles.colors.primary.dark,
      color: sharedStyles.colors.white,
      margin: "0 auto",
    },
    footerInner: {
      maxWidth: "1400px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    topRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px",
    },
    footerLeft: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    logo: {
      height: "40px",
    },
    footerText: {
      ...sharedStyles.typography.body,
      opacity: 0.9,
    },
    footerRight: {
      display: "flex",
      alignItems: "center",
    },

    ctaButton: {
      ...sharedStyles.elements.button,
      backgroundColor: sharedStyles.colors.white,
      color: sharedStyles.colors.primary.dark,
      textDecoration: "none",
      border: `1px solid ${sharedStyles.colors.primary.dark}`,
    },
  };

  const CheckIcon = () => <span style={styles.benefitIcon}>✓</span>;

  return (
    <div id="demo" style={styles.section}>
      <div style={styles.footerInner}>
        <div style={styles.topRow}>
          <div style={styles.footerLeft}>
            <img src="invertedlogo.png" alt="Nammu Logo" style={styles.logo} />
          </div>
          <div style={styles.footerRight}>
            <button style={styles.ctaButton} onClick={onRequestDemo}>
              Request a demo
            </button>
          </div>
        </div>
        <div style={styles.footerText}>
          Helping seafood teams turn data into decisions and orders.
        </div>
      </div>
    </div>
  );
};

export default BookDemoSection;
