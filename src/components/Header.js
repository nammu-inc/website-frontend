import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sharedStyles } from "../styles";
import { useDemo } from "./DemoContext";

const C = sharedStyles.colors;

const Header = () => {
  const openDemo = useDemo();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparent over the light hero on the home page; solid white otherwise.
  const overHero = location.pathname === "/";
  const showSolid = scrolled || !overHero;

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
      backgroundColor: showSolid ? C.white : "transparent",
      borderBottom: showSolid ? `1px solid ${C.line}` : "1px solid transparent",
      transition: "background-color 0.25s ease, border-color 0.25s ease",
    },
    inner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: isMobile
        ? "12px 20px"
        : `18px ${sharedStyles.spacing.section.horizontal}`,
      maxWidth: "1400px",
      margin: "0 auto",
    },
    logo: {
      height: isMobile ? "26px" : "32px",
      display: "block",
    },
    button: {
      ...sharedStyles.elements.button,
      display: "inline-flex",
      alignItems: "center",
      backgroundColor: C.accent,
      color: C.white,
      fontSize: isMobile ? "0.875rem" : "0.98rem",
      padding: isMobile ? "9px 18px" : "12px 24px",
    },
    buttonHover: {
      backgroundColor: "#1a6ea8",
      color: C.white,
      transform: "translateY(-1px)",
      boxShadow: "0 8px 20px rgba(31,127,194,0.32)",
    },
    buttonArrow: {
      display: "inline-block",
      marginLeft: "8px",
      transform: isHover ? "translateX(3px)" : "none",
      transition: "transform 0.2s ease",
    },
  };

  return (
    <div style={styles.bar}>
      <div style={styles.inner}>
        <Link to="/" aria-label="Nammu Home">
          <img src="/logo.png" alt="Nammu" style={styles.logo} />
        </Link>
        <button
          style={{ ...styles.button, ...(isHover ? styles.buttonHover : {}) }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={openDemo}
        >
          Request a Demo
          <span aria-hidden="true" style={styles.buttonArrow}>
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
