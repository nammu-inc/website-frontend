import React from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile, useReveal } from "../../hooks";
import { Button } from "../../components/ui";
import { useDemo } from "../../components/DemoContext";
import HeroCollage from "./HeroCollage";

const C = sharedStyles.colors;

const iconProps = {
  width: 17,
  height: 17,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const SparkleIcon = () => (
  <svg {...iconProps}>
    <path d="M12 2 L13.6 8.4 L20 10 L13.6 11.6 L12 18 L10.4 11.6 L4 10 L10.4 8.4 Z" />
  </svg>
);
const CycleIcon = () => (
  <svg {...iconProps}>
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);
const LinkIcon = () => (
  <svg {...iconProps}>
    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
    <path d="M15 7h2a5 5 0 0 1 0 10h-2" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const CHIPS = [
  { icon: <SparkleIcon />, label: "AI-powered" },
  { icon: <CycleIcon />, label: "Sales & procurement" },
  { icon: <LinkIcon />, label: "ERP-integrated" },
];

const Hero = () => {
  const openDemo = useDemo();
  const isMobile = useIsMobile();
  const [textRef, textStyle] = useReveal(0);
  const [imgRef, imgStyle] = useReveal(120);

  const styles = {
    hero: {
      position: "relative",
      padding: isMobile
        ? "56px 24px 72px"
        : `80px ${sharedStyles.spacing.section.horizontal} 100px`,
      background: `linear-gradient(160deg, ${C.accentSoft} 0%, ${C.surface} 46%, ${C.white} 100%)`,
      overflow: "hidden",
    },
    inner: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      gap: isMobile ? "44px" : "64px",
    },
    left: {
      flex: "1 1 0",
      minWidth: 0,
      textAlign: isMobile ? "center" : "left",
    },
    title: {
      ...sharedStyles.typography.display,
      fontSize: isMobile ? "2.6rem" : "3.6rem",
      color: C.navy,
      margin: 0,
    },
    subtitle: {
      ...sharedStyles.typography.subtitle,
      color: C.slate,
      maxWidth: isMobile ? "100%" : "560px",
      margin: isMobile ? "20px auto 0" : "20px 0 0",
    },
    highlight: {
      color: C.navy,
      fontWeight: 700,
      whiteSpace: isMobile ? "normal" : "nowrap",
    },
    ctaRow: {
      display: "flex",
      gap: "14px",
      marginTop: "32px",
      justifyContent: isMobile ? "center" : "flex-start",
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "36px",
      justifyContent: isMobile ? "center" : "flex-start",
    },
    chip: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "9px 14px",
      borderRadius: "8px",
      border: `1px solid ${C.line}`,
      backgroundColor: "rgba(255,255,255,0.7)",
      color: C.ink,
      fontSize: "0.88rem",
      fontWeight: 600,
    },
    chipIcon: {
      color: C.accent,
      display: "inline-flex",
    },
    right: {
      flex: isMobile ? "1 1 0" : "1.1 1 0",
      minWidth: 0,
      width: "100%",
      maxWidth: isMobile ? "460px" : "none",
      alignSelf: "center",
    },
  };

  return (
    <div style={styles.hero}>
      <div style={styles.inner}>
        <div ref={textRef} style={{ ...styles.left, ...textStyle }}>
          <h1 style={styles.title}>We speak seafood.</h1>
          <p style={styles.subtitle}>
            Nammu is the{" "}
            <span style={styles.highlight}>
              seafood industry's trusted software partner
            </span>
            , offering a holistic AI sales and procurement platform, custom
            builds, and workflow automation.
          </p>
          <div style={styles.ctaRow}>
            <Button variant="accent" size="lg" arrow onClick={openDemo}>
              Request a Demo
            </Button>
          </div>
          <div style={styles.chips}>
            {CHIPS.map((c) => (
              <div key={c.label} style={styles.chip}>
                <span style={styles.chipIcon}>{c.icon}</span>
                {c.label}
              </div>
            ))}
          </div>
        </div>

        <div ref={imgRef} style={{ ...styles.right, ...imgStyle }}>
          <HeroCollage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
