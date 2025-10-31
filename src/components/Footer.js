import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mq.matches);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const currentYear = new Date().getFullYear();

  const styles = {
    section: {
      padding: `16px ${
        isMobile ? "20px" : sharedStyles.spacing.section.horizontal
      }`,
      marginTop: sharedStyles.spacing.section.vertical,
      borderTop: `1px solid ${sharedStyles.colors.gray.light}`,
      backgroundColor: "transparent",
      margin: "0 auto",
    },
    footerInner: {
      maxWidth: "1400px",
      margin: "0 auto",
    },
    copy: {
      textAlign: "center",
      color: sharedStyles.colors.text.light,
      fontSize: "0.9rem",
    },
  };

  return (
    <div id="demo" style={styles.section}>
      <div style={styles.footerInner}>
        <div style={styles.copy}>© {currentYear} Nammu, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
