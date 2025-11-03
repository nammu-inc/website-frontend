import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles";

const Header = ({ onRequestDemo }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mq.matches);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const styles = {
    bar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: scrolled
        ? sharedStyles.colors.white
        : sharedStyles.colors.secondary.light,
      borderBottom: scrolled ? "1px solid #eee" : "none",
    },
    inner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: isMobile
        ? "10px 20px"
        : `20px ${sharedStyles.spacing.section.horizontal}`,
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
    buttonHover: {
      backgroundColor: sharedStyles.colors.primary.medium,
      transform: "translateY(-1px)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
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
        <button
          style={{
            ...styles.button,
            ...(isHover ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={onRequestDemo}
        >
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default Header;
