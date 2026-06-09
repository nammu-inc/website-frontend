import React from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, SectionHeading, Reveal } from "../../components/ui";

const C = sharedStyles.colors;

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const TrendIcon = () => (
  <svg {...iconProps}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const LayersIcon = () => (
  <svg {...iconProps}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const UsersIcon = () => (
  <svg {...iconProps}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const DatabaseIcon = () => (
  <svg {...iconProps}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 5v6c0 1.66-4 3-9 3s-9-1.34-9-3V5" />
    <path d="M21 11v6c0 1.66-4 3-9 3s-9-1.34-9-3v-6" />
  </svg>
);

const PROBLEMS = [
  {
    icon: TrendIcon,
    title: "Volatile supply and pricing",
    body: "Supply and price shift constantly. Meeting that pace requires real-time information, accurate forecasts, and intuitive workflows.",
  },
  {
    icon: LayersIcon,
    title: "Expansive product catalogs",
    body: "Seafood has its own vernacular, from container building to product transformations. It needs software built for it.",
  },
  {
    icon: UsersIcon,
    title: "Relationship-driven sales",
    body: "Deals close through trust built over years. Software should support those relationships, not interrupt them.",
  },
  {
    icon: DatabaseIcon,
    title: "Data trapped in legacy ERPs",
    body: "Legacy ERPs were built for accounting, not sales or purchasing. The data is there, but teams can't reach it in time.",
  },
];

const SeafoodProblem = () => {
  const isMobile = useIsMobile();

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "20px",
      marginTop: "56px",
    },
    card: {
      backgroundColor: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: "16px",
      padding: "28px 30px",
      boxShadow: "0 4px 16px rgba(9,20,47,0.04)",
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
      marginBottom: "18px",
    },
    cardTitle: {
      ...sharedStyles.typography.h3,
      color: C.navy,
      margin: "0 0 6px",
      fontSize: "1.2rem",
    },
    cardBody: {
      ...sharedStyles.typography.body,
      color: C.slate,
      margin: 0,
    },
    closing: {
      marginTop: isMobile ? "44px" : "60px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "stretch",
      borderRadius: "16px",
      overflow: "hidden",
      border: `1px solid ${C.line}`,
      boxShadow: "0 4px 16px rgba(9,20,47,0.06)",
      backgroundColor: C.white,
    },
    closingText: {
      flex: isMobile ? 1 : 1.4,
      minWidth: 0,
      padding: isMobile ? "30px 26px" : "44px 48px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: C.white,
    },
    closingTitle: {
      ...sharedStyles.typography.h3,
      color: C.navy,
      fontSize: isMobile ? "1.4rem" : "1.65rem",
      margin: 0,
    },
    closingP: {
      ...sharedStyles.typography.body,
      color: C.slate,
      margin: "14px 0 0",
    },
    closingImageWrap: {
      flex: 1,
      minWidth: 0,
    },
    closingImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      display: "block",
      minHeight: isMobile ? "200px" : "240px",
    },
  };

  return (
    <Section background={C.white}>
      <SectionHeading
        eyebrow="Why we exist"
        title="Generic software wasn't built for seafood."
      />

      <div style={styles.grid}>
        {PROBLEMS.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.title} delay={i * 80}>
              <div style={styles.card}>
                <div style={styles.iconBadge}>
                  <Icon />
                </div>
                <h3 style={styles.cardTitle}>{p.title}</h3>
                <p style={styles.cardBody}>{p.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div style={styles.closing}>
          <div style={styles.closingText}>
            <h2 style={styles.closingTitle}>
              The world's best protein deserves better software.
            </h2>
            <p style={styles.closingP}>
              Among the healthiest and most sustainable proteins on earth, yet
              one of the most underserved by technology. That's why Nammu exists.
            </p>
          </div>
          <div style={styles.closingImageWrap}>
            <img
              src="/heroimage.jpg"
              alt="Fresh seafood"
              style={styles.closingImage}
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default SeafoodProblem;
