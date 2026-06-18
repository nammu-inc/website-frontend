import React from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile, useElementWidth } from "../../hooks";
import { Section, SectionHeading, Reveal, Eyebrow } from "../../components/ui";
import {
  AssistantGraphic,
  LeadsGraphic,
  ForecastGraphic,
  InventoryGraphic,
  OutreachGraphic,
} from "./CapabilityGraphics";

const C = sharedStyles.colors;

const CheckMark = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
    <circle cx="12" cy="12" r="11" fill={C.accentSoft} />
    <path d="M7 12.4 l3.2 3.2 l6.8 -7" fill="none" stroke={C.accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Poles of the "meet you where you are" spectrum: one workflow ↔ full platform.
const BoltIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13 2 L4.5 13.5 H11 L10 22 L19.5 9.5 H12.5 Z" />
  </svg>
);
const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const GridIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

// The capability graphics are built at a fixed design size (16:10) and scaled to
// fit their frame, so they keep their exact proportions and never clip/distort —
// crisp on desktop, cleanly shrunk on mobile.
const DESIGN_W = 600;
const DESIGN_H = 375;
const GraphicFrame = ({ Graphic, frameStyle }) => {
  const [ref, w] = useElementWidth();
  const scale = w ? w / DESIGN_W : 1;
  return (
    <div ref={ref} style={frameStyle}>
      <div style={{ position: "absolute", top: 0, left: 0, width: `${DESIGN_W}px`, height: `${DESIGN_H}px`, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <Graphic />
      </div>
    </div>
  );
};

// The ways we work with companies, presented as cards: a one-off automation, a
// fully custom build, or our off-the-shelf platform.
const MODES = [
  { icon: <BoltIcon />, label: "Workflow automation", desc: "Tedious manual work, like reconciling inventory, automated.", color: C.accent, soft: C.accentSoft },
  { icon: <CodeIcon />, label: "Custom software", desc: "Built to fit how you work, like a bespoke forecasting system.", color: C.teal, soft: C.secondary.light },
  { icon: <GridIcon />, label: "AI platform", desc: "A full sales and purchasing suite, use only what you need.", color: "#5b62e0", soft: "#e4e6fb" },
];

const CAPS = [
  {
    eyebrow: "AI assistant",
    title: "Ask for any report.",
    bullets: [
      "Build complex reports in plain language",
      "Answers that took days, back in seconds",
    ],
    Graphic: AssistantGraphic,
  },
  {
    eyebrow: "Lead tracking",
    title: "Win new accounts.",
    bullets: [
      "See exactly who your team is pursuing",
      "A steady pipeline of new business",
    ],
    Graphic: LeadsGraphic,
  },
  {
    eyebrow: "Live inventory",
    title: "Always know where you stand.",
    bullets: [
      "Save hours of manual reconciliation",
      "Inventory you can actually trust",
    ],
    Graphic: InventoryGraphic,
  },
  {
    eyebrow: "AI outreach",
    title: "Grow every account.",
    bullets: [
      "AI spots the opportunities you'd miss",
      "Bigger, more frequent orders",
    ],
    Graphic: OutreachGraphic,
  },
  {
    eyebrow: "Demand forecasting",
    title: "Optimize every purchase.",
    bullets: [
      "Automated forecasting, no spreadsheets",
      "Avoid stockouts and overbuying",
    ],
    Graphic: ForecastGraphic,
  },
];

const Capabilities = () => {
  const isMobile = useIsMobile();

  const rowPad = isMobile ? "52px" : "76px";

  const styles = {
    row: (reversed) => ({
      display: "flex",
      flexDirection: isMobile ? "column" : reversed ? "row-reverse" : "row",
      alignItems: isMobile ? "stretch" : "center",
      gap: isMobile ? "28px" : "clamp(40px, 6vw, 80px)",
    }),
    textCol: { flex: "1 1 0", minWidth: 0 },
    title: {
      ...sharedStyles.typography.h2,
      fontSize: isMobile ? "1.6rem" : "clamp(1.7rem, 2.6vw, 2.1rem)",
      color: C.navy,
      margin: "12px 0 0",
    },
    desc: {
      ...sharedStyles.typography.subtitle,
      fontSize: "clamp(1rem, 1.4vw, 1.12rem)",
      color: C.slate,
      margin: "16px 0 0",
      marginBottom: 0,
      maxWidth: "460px",
    },
    bullets: {
      listStyle: "none",
      padding: 0,
      margin: "20px 0 0",
      display: "flex",
      flexDirection: "column",
      gap: "13px",
      maxWidth: "440px",
    },
    bullet: {
      display: "flex",
      alignItems: "flex-start",
      gap: "11px",
      fontSize: "clamp(1.02rem, 1.4vw, 1.14rem)",
      lineHeight: 1.35,
      color: C.ink,
      fontWeight: 500,
    },
    graphicCol: { flex: "1 1 0", minWidth: 0, width: "100%" },
    frame: {
      position: "relative",
      width: "100%",
      aspectRatio: "16 / 10",
      borderRadius: "16px",
      overflow: "hidden",
      border: `1px solid ${C.line}`,
      boxShadow: "0 18px 44px rgba(9,20,47,0.12)",
      backgroundColor: C.white,
    },
    modesGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "20px",
      maxWidth: "900px",
      margin: "clamp(30px, 4.5vh, 46px) auto 0",
    },
    modeCard: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      padding: isMobile ? "22px" : "26px 24px",
      border: `1px solid ${C.line}`,
      borderRadius: "16px",
      backgroundColor: C.white,
      boxShadow: "0 4px 16px rgba(9,20,47,0.05)",
      textAlign: "left",
      height: "100%",
    },
    modeIcon: (color, soft) => ({
      width: "46px",
      height: "46px",
      borderRadius: "12px",
      backgroundColor: soft,
      color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }),
    modeTitle: { fontSize: "1.08rem", fontWeight: 700, color: C.navy },
    modeDesc: { fontSize: "0.92rem", color: C.slate, lineHeight: 1.45, margin: 0 },
    capLead: { display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", margin: "clamp(46px, 6.5vh, 66px) auto 0" },
    capLabel: { fontSize: "1.02rem", fontWeight: 700, color: C.navy },
    capChevron: { color: C.accent, display: "flex" },
  };

  return (
    <>
      <Section id="capabilities" background={C.white} style={{ paddingTop: isMobile ? "48px" : "76px", paddingBottom: isMobile ? "24px" : "40px" }}>
        <style>{`
          @keyframes nm-cap-bob { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(4px) } }
          .nm-cap-bob { animation: nm-cap-bob 1.6s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce){ .nm-cap-bob { animation: none; } }
        `}</style>
        <SectionHeading
          eyebrow="What we do"
          title="We meet you where you are."
          subtitle="Whether it's fixing one nagging process or revamping your tech stack."
        />

        <Reveal delay={80}>
          <div style={styles.modesGrid}>
            {MODES.map((m) => (
              <div key={m.label} style={styles.modeCard}>
                <span style={styles.modeIcon(m.color, m.soft)}>{m.icon}</span>
                <div style={styles.modeTitle}>{m.label}</div>
                <p style={styles.modeDesc}>{m.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div style={styles.capLead}>
          <span style={styles.capLabel}>A few examples</span>
          <span className="nm-cap-bob" style={styles.capChevron} aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
      </Section>

      {CAPS.map((cap, i) => {
        const Graphic = cap.Graphic;
        const reversed = i % 2 === 1;
        // Stacked (mobile/tablet) → center the copy so the full-width graphic
        // doesn't leave it stranded against the left edge with dead space on the
        // right. Desktop → the copy hugs the outer edge of its column (left on
        // normal rows, right on the reversed/animation-left rows) for symmetry.
        const textAlign = isMobile ? "center" : reversed ? "right" : "left";
        const itemsAlign = isMobile ? "center" : reversed ? "flex-end" : "flex-start";
        const bulletReverse = !isMobile && reversed;
        return (
          <Section
            key={cap.title}
            background={i % 2 === 0 ? C.surface : C.white}
            style={{ paddingTop: rowPad, paddingBottom: rowPad }}
          >
            <div style={styles.row(reversed)}>
              <div style={styles.textCol}>
                <Reveal style={{ display: "flex", flexDirection: "column", alignItems: itemsAlign, textAlign }}>
                  <Eyebrow>{cap.eyebrow}</Eyebrow>
                  <h2 style={styles.title}>{cap.title}</h2>
                  {cap.bullets ? (
                    <ul style={styles.bullets}>
                      {cap.bullets.map((b) => (
                        <li key={b} style={{ ...styles.bullet, width: "100%", flexDirection: bulletReverse ? "row-reverse" : "row", justifyContent: isMobile ? "center" : "flex-start" }}>
                          <CheckMark />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={styles.desc}>{cap.desc}</p>
                  )}
                </Reveal>
              </div>
              <div style={styles.graphicCol}>
                <Reveal delay={120}>
                  <GraphicFrame Graphic={Graphic} frameStyle={styles.frame} />
                </Reveal>
              </div>
            </div>
          </Section>
        );
      })}
    </>
  );
};

export default Capabilities;
