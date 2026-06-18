import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sharedStyles } from "../styles";
import { useDemo } from "./DemoContext";

const C = sharedStyles.colors;

// Anchor tabs that jump to home-page sections (by element id).
const NAV = [
  { label: "Product", id: "capabilities" },
  { label: "Team", id: "team" },
  { label: "Press", id: "press" },
  { label: "FAQ", id: "faq" },
];

const Header = () => {
  const openDemo = useDemo();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  };

  // Transparent over the light hero on the home page; solid white otherwise.
  const overHero = location.pathname === "/";
  const showSolid = scrolled || !overHero || menuOpen;

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

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
      gap: "24px",
      padding: isMobile ? "12px 20px" : "16px clamp(28px, 6vw, 96px)",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    logo: {
      height: isMobile ? "26px" : "32px",
      display: "block",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      marginLeft: "auto",
    },
    navLink: (active) => ({
      ...sharedStyles.typography.body,
      fontSize: "0.98rem",
      fontWeight: 600,
      color: active ? C.accent : C.navy,
      textDecoration: "none",
      transition: "color 0.18s ease",
    }),
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
    burger: {
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "5px",
      width: "40px",
      height: "40px",
      padding: "10px",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    burgerLine: (open, i) => ({
      display: "block",
      height: "2px",
      width: "100%",
      backgroundColor: C.navy,
      borderRadius: "2px",
      transition: "transform 0.25s ease, opacity 0.2s ease",
      transform: open
        ? i === 0
          ? "translateY(7px) rotate(45deg)"
          : i === 2
            ? "translateY(-7px) rotate(-45deg)"
            : "none"
        : "none",
      opacity: open && i === 1 ? 0 : 1,
    }),
    menu: {
      borderTop: `1px solid ${C.line}`,
      backgroundColor: C.white,
      padding: "10px 20px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    menuLink: (active) => ({
      ...sharedStyles.typography.body,
      fontSize: "1.05rem",
      fontWeight: 600,
      color: active ? C.accent : C.navy,
      textDecoration: "none",
      padding: "12px 4px",
      borderBottom: `1px solid ${C.line}`,
    }),
  };

  return (
    <div style={styles.bar}>
      <style>{`.nm-nav:hover{ color:${C.accent} !important; }`}</style>
      <div style={styles.inner}>
        <Link to="/" aria-label="Nammu Home">
          <img src="/logo.png" alt="Nammu" style={styles.logo} />
        </Link>

        {!isMobile && (
          <nav style={styles.nav}>
            {NAV.map((item) => (
              <a
                key={item.id}
                className="nm-nav"
                href={`/#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(item.id);
                }}
                style={styles.navLink(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              style={{ ...styles.button, ...(isHover ? styles.buttonHover : {}) }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={openDemo}
            >
              Book a Demo
              <span aria-hidden="true" style={styles.buttonArrow}>
                →
              </span>
            </button>
          </nav>
        )}

        {isMobile && (
          <button
            style={styles.burger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={styles.burgerLine(menuOpen, i)} />
            ))}
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={styles.menu}>
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(item.id);
              }}
              style={styles.menuLink(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            style={{ ...styles.button, marginTop: "16px", justifyContent: "center" }}
            onClick={() => {
              setMenuOpen(false);
              openDemo();
            }}
          >
            Book a Demo
            <span aria-hidden="true" style={{ marginLeft: "8px" }}>
              →
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
