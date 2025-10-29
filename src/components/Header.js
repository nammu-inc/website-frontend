import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles";

const Header = ({ onRequestDemo }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mq.matches);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const styles = {
    bar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: sharedStyles.colors.white,
      borderBottom: "1px solid #eee",
    },
    inner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: isMobile
        ? "10px 20px"
        : `12px ${sharedStyles.spacing.section.horizontal}`,
      maxWidth: "1400px",
      margin: "0 auto",
    },
    left: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    logo: {
      height: "36px",
    },
    button: {
      ...sharedStyles.elements.button,
      backgroundColor: sharedStyles.colors.primary.dark,
      color: sharedStyles.colors.white,
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.bar}>
      <div style={styles.inner}>
        <div style={styles.left}>
          <a href="#hero" aria-label="Nammu Home">
            <img src="logo.png" alt="Nammu" style={styles.logo} />
          </a>
        </div>
        <button style={styles.button} onClick={onRequestDemo}>
          Request a demo
        </button>
      </div>
    </div>
  );
};

export default Header;
