import React from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, SectionHeading, Reveal } from "../../components/ui";
import brownLogo from "../../assets/Brown Logo.jpg";
import mitLogo from "../../assets/MIT Logo.jpg";
import seattleFishLogo from "../../assets/Seattle Fish Logo.png";
import nfiLogo from "../../assets/NFI Logo.jpg";
import ethanPhoto from "../../assets/Ethan.jpg";
import bertPhoto from "../../assets/Bert.jpg";
import griffinPhoto from "../../assets/Griffin.jpg";
import derekPhoto from "../../assets/Derek.jpeg";

const C = sharedStyles.colors;

// Credibility through people, not prose. Each person is a brief card: headshot,
// name, one or two accolades, and one or more relevant logos (no role/title).
// (No "Why Seafood" / mission essay — the capability panels already show those
// problems being solved.)
const FOUNDERS = [
  {
    name: "Ethan Huang",
    accolades: ["Brown University, Applied Math"],
    logos: [{ src: brownLogo, h: 30 }],
    photo: ethanPhoto,
    photoSize: "200%",
    photoPos: "40% 16%",
  },
  {
    name: "Bert Vandereydt",
    accolades: ["MIT, NFI Future Leader '26"],
    logos: [
      { src: mitLogo, h: 38 },
      { src: nfiLogo, h: 30 },
    ],
    photo: bertPhoto,
    photoSize: "175%",
    photoPos: "54% 24%",
  },
  {
    name: "Griffin McCauley",
    accolades: ["Brown University, Applied Math"],
    logos: [{ src: brownLogo, h: 30 }],
    photo: griffinPhoto,
    photoSize: "185%",
    photoPos: "52% 16%",
  },
];

const ADVISORS = [
  {
    name: "Derek Figueroa",
    accolades: [
      "Former CEO, Seattle Fish Company",
      "Former Chair, National Fisheries Institute",
    ],
    logos: [
      { src: seattleFishLogo, h: 32 },
      { src: nfiLogo, h: 30 },
    ],
    photo: derekPhoto,
    photoSize: "115%",
    photoPos: "62% 32%",
  },
];

const PersonAvatar = ({ size = 88 }) => (
  <div
    aria-hidden="true"
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: C.accentSoft,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <svg
      width={size * 0.55}
      height={size * 0.55}
      viewBox="0 0 24 24"
      fill="none"
      stroke={C.accent}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </div>
);

const PersonCard = ({ p, styles }) => (
  <div className="nm-team-card" style={styles.card}>
    <div style={styles.glow} aria-hidden="true" />
    <div style={styles.ring}>
      {p.photo ? (
        <div
          role="img"
          aria-label={p.name}
          style={{ ...styles.photoWrap, backgroundImage: `url(${p.photo})`, backgroundSize: p.photoSize || "cover", backgroundPosition: p.photoPos || "center" }}
        />
      ) : (
        <PersonAvatar size={112} />
      )}
    </div>
    <h3 style={styles.name}>{p.name}</h3>
    {p.role && <div style={styles.role}>{p.role}</div>}
    <ul style={styles.accolades}>
      {p.accolades.map((a) => (
        <li key={a} style={styles.accolade}>
          <span style={styles.accoladeDot} />
          {a}
        </li>
      ))}
    </ul>
    {p.logos && p.logos.length > 0 && (
      <div style={styles.logoRow}>
        {p.logos.map((l, i) => (
          <img
            key={i}
            src={l.src}
            alt=""
            aria-hidden="true"
            style={{ ...styles.logo, height: `${l.h}px` }}
          />
        ))}
      </div>
    )}
  </div>
);

const Team = () => {
  const isMobile = useIsMobile();

  const styles = {
    card: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      background: `linear-gradient(180deg, #f1f7fd 0%, ${C.white} 44%)`,
      border: `1px solid ${C.line}`,
      borderRadius: "20px",
      padding: "34px 26px 30px",
      boxShadow: "0 6px 22px rgba(9,20,47,0.06)",
      height: "100%",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    },
    glow: {
      position: "absolute",
      top: "-46px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "180px",
      height: "180px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(31,127,194,0.18), transparent 68%)",
      pointerEvents: "none",
    },
    ring: {
      position: "relative",
      padding: "3px",
      borderRadius: "50%",
      background: "linear-gradient(140deg, rgba(31,127,194,0.38), rgba(13,154,171,0.3))",
      flexShrink: 0,
    },
    photoWrap: {
      width: "112px",
      height: "112px",
      boxSizing: "border-box",
      borderRadius: "50%",
      border: `3px solid ${C.white}`,
      backgroundColor: C.surface,
      backgroundRepeat: "no-repeat",
    },
    name: {
      ...sharedStyles.typography.h3,
      fontSize: "1.22rem",
      color: C.navy,
      margin: "18px 0 0",
      position: "relative",
    },
    role: {
      ...sharedStyles.typography.eyebrow,
      color: C.accent,
      marginBottom: 0,
    },
    accolades: {
      listStyle: "none",
      padding: 0,
      margin: "13px 0 0",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center",
      position: "relative",
    },
    accolade: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "0.95rem",
      color: C.ink,
      fontWeight: 500,
    },
    accoladeDot: {
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      backgroundColor: C.accent,
      flexShrink: 0,
    },
    logo: {
      height: "24px",
      width: "auto",
      objectFit: "contain",
      opacity: 0.85,
      borderRadius: "4px",
    },
    logoRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "18px",
      marginTop: "18px",
      position: "relative",
    },
    foundersGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "24px",
      marginTop: "48px",
    },
    advisorWrap: { marginTop: isMobile ? "56px" : "76px" },
    advisorGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "24px",
      marginTop: "40px",
      maxWidth: "380px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  return (
    <Section background={C.white} id="team">
      <style>{`
        .nm-team-card:hover { transform: translateY(-4px); box-shadow: 0 16px 34px rgba(9,20,47,0.11); }
        @media (prefers-reduced-motion: reduce){ .nm-team-card:hover { transform: none; } }
      `}</style>
      <SectionHeading eyebrow="Our team" title="The people building Nammu." />
      <div style={styles.foundersGrid}>
        {FOUNDERS.map((p, i) => (
          <Reveal key={i} delay={i * 80} style={{ height: "100%" }}>
            <PersonCard p={p} styles={styles} />
          </Reveal>
        ))}
      </div>

      <div style={styles.advisorWrap}>
        <SectionHeading
          eyebrow="Advisors"
          title="Guided by industry leaders."
        />
        <div style={styles.advisorGrid}>
          {ADVISORS.map((p, i) => (
            <Reveal key={i} delay={i * 80} style={{ height: "100%" }}>
              <PersonCard p={p} styles={styles} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Team;
