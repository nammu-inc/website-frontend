import React from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, SectionHeading, Reveal, Button } from "../../components/ui";
import { useDemo } from "../../components/DemoContext";
import PlatformShowcase from "./PlatformShowcase";
import CustomBuildsAnimation from "./CustomBuildsAnimation";

const C = sharedStyles.colors;

const PLATFORM_FEATURES = [
  "Demand forecasting",
  "CRM",
  "Live inventory",
  "Automated outreach",
  "Direct order portal",
  "Business intelligence",
  "Order entry",
  "Nemo (AI chatbot)",
];

const CUSTOM_EXAMPLES = [
  "Inventory reconciliation",
  "Order entry",
  "Data pipeline",
  "Spreadsheet automation",
  "Custom reports & exports",
  "Price list updates",
  "ERP integrations",
  "Invoice processing",
];

const Check = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={C.accent}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: "2px" }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={C.accent}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: "3px" }}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ProductOverview = () => {
  const isMobile = useIsMobile();
  const openDemo = useDemo();

  const styles = {
    pathGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "24px",
      marginTop: "56px",
      alignItems: "stretch",
    },
    panel: {
      backgroundColor: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 4px 16px rgba(9,20,47,0.05)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      boxSizing: "border-box",
    },
    cardContent: {
      padding: isMobile ? "28px 24px" : "36px 40px",
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    pathLabel: {
      ...sharedStyles.typography.eyebrow,
      color: C.accent,
      marginBottom: "10px",
    },
    panelTitle: {
      ...sharedStyles.typography.h3,
      color: C.navy,
      margin: "0 0 8px",
    },
    panelBlurb: {
      ...sharedStyles.typography.body,
      color: C.slate,
      margin: "0 0 24px",
    },
    featureList: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "12px 20px",
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    feature: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start",
      fontSize: "0.98rem",
      color: C.ink,
      lineHeight: 1.4,
    },
    ctaWrap: { textAlign: "center", marginTop: "56px" },
  };

  return (
    <Section background={C.surface} id="product-overview">
      <SectionHeading
        eyebrow="What we build"
        title="Two ways to work with Nammu."
        subtitle="Whether you're ready for a full platform or just need one manual workflow automated, we meet you where you are."
      />

      <div style={styles.pathGrid}>
        {/* Path 1 — The Platform */}
        <Reveal style={{ height: "100%" }}>
          <div style={styles.panel}>
            <PlatformShowcase />
            <div style={styles.cardContent}>
              <div style={styles.pathLabel}>The Platform</div>
              <h3 style={styles.panelTitle}>
                Sales and procurement, in one place
              </h3>
              <p style={styles.panelBlurb}>
                Modular by design, so you use just the modules you need.
              </p>
              <ul style={styles.featureList}>
                {PLATFORM_FEATURES.map((f) => (
                  <li key={f} style={styles.feature}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Path 2 — Custom Builds */}
        <Reveal delay={100} style={{ height: "100%" }}>
          <div style={styles.panel}>
            <CustomBuildsAnimation />
            <div style={styles.cardContent}>
              <div style={styles.pathLabel}>Custom Builds</div>
              <h3 style={styles.panelTitle}>We'll build what you need</h3>
              <p style={styles.panelBlurb}>
                Tailored to the job, so you skip the manual work.
              </p>
              <ul style={styles.featureList}>
                {CUSTOM_EXAMPLES.map((e) => (
                  <li key={e} style={styles.feature}>
                    <Arrow />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <div style={styles.ctaWrap}>
        <Button variant="primary" size="lg" onClick={openDemo} arrow>
          Learn more
        </Button>
      </div>
    </Section>
  );
};

export default ProductOverview;
