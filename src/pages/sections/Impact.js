import React from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, SectionHeading, Reveal } from "../../components/ui";

const C = sharedStyles.colors;

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ClockIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const TrendIcon = () => (
  <svg {...iconProps}>
    <polyline points="23 6 13.5 16.5 8.5 11.5 1 19" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg {...iconProps}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// [[PLACEHOLDER: figures are illustrative — replace with verified metrics.]]
const OUTCOMES = [
  {
    icon: ClockIcon,
    stat: "40%",
    label: "less time spent on manual work",
  },
  {
    icon: TrendIcon,
    stat: "20%",
    label: "lift in profitability across the business",
  },
  {
    icon: CheckCircleIcon,
    stat: "99.9%",
    label: "accuracy across AI and automation",
  },
];

const Impact = () => {
  const isMobile = useIsMobile();

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "20px",
      marginTop: "56px",
    },
    card: {
      backgroundColor: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: "16px",
      padding: isMobile ? "32px 30px" : "40px 36px",
      boxShadow: "0 4px 16px rgba(9,20,47,0.04)",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    iconBadge: {
      width: "46px",
      height: "46px",
      borderRadius: "12px",
      backgroundColor: C.accentSoft,
      color: C.accent,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "22px",
    },
    stat: {
      fontSize: isMobile ? "2.8rem" : "3.4rem",
      fontWeight: 700,
      color: C.navy,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      margin: "0 0 10px",
    },
    label: {
      ...sharedStyles.typography.body,
      fontSize: "1.1rem",
      color: C.slate,
      margin: 0,
    },
  };

  return (
    <Section background={C.white} id="impact">
      <SectionHeading
        eyebrow="Business impact"
        title="What changes when you run on Nammu."
      />
      <div style={styles.grid}>
        {OUTCOMES.map((o, i) => {
          const Icon = o.icon;
          return (
            <Reveal key={o.metric} delay={i * 80} style={{ height: "100%" }}>
              <div style={styles.card}>
                <div style={styles.iconBadge}>
                  <Icon />
                </div>
                <div style={styles.stat}>{o.stat}</div>
                <p style={styles.label}>{o.label}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Impact;
