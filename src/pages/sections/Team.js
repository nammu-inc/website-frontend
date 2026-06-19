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
    photoSize: "215%",
    photoPos: "40% 12%",
    linkedin: "https://www.linkedin.com/in/ethanhuang218/",
  },
  {
    name: "Bert Vandereydt",
    accolades: ["MIT PhD, NFI Future Leader '26"],
    logos: [
      { src: mitLogo, h: 38 },
      { src: nfiLogo, h: 30 },
    ],
    photo: bertPhoto,
    photoSize: "195%",
    photoPos: "54% 20%",
    linkedin: "https://www.linkedin.com/in/bertvandereydt/",
  },
  {
    name: "Griffin McCauley",
    accolades: ["Brown University, Applied Math"],
    logos: [{ src: brownLogo, h: 30 }],
    photo: griffinPhoto,
    photoSize: "185%",
    photoPos: "52% 16%",
    linkedin: "https://www.linkedin.com/in/griffin-mccauley-187b6423a/",
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
    photoPos: "62% 23%",
    linkedin: "https://www.linkedin.com/in/derekfigueroa/",
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

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.94H5.56v8.4h2.78zM6.95 8.7a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22zm11.39 9.64v-4.6c0-2.46-1.31-3.6-3.06-3.6a2.64 2.64 0 0 0-2.4 1.32v-1.13H10.1c.04.78 0 8.4 0 8.4h2.78v-4.69c0-.25.02-.5.09-.68.2-.5.66-1.01 1.42-1.01 1 0 1.4.76 1.4 1.88v4.5h2.55z" />
  </svg>
);

const PersonCard = ({ p, styles }) => (
  <div className="nm-team-card" style={styles.card}>
    <div style={styles.glow} aria-hidden="true" />
    {(() => {
      const photoEl = p.photo ? (
        <div
          role="img"
          aria-label={p.name}
          style={{ ...styles.photoWrap, backgroundImage: `url(${p.photo})`, backgroundSize: p.photoSize || "cover", backgroundPosition: p.photoPos || "center" }}
        />
      ) : (
        <PersonAvatar size={112} />
      );
      return (
        <div style={styles.ring}>
          {p.linkedin ? (
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} on LinkedIn`}
              style={{ display: "block", borderRadius: "50%" }}
            >
              {photoEl}
            </a>
          ) : (
            photoEl
          )}
        </div>
      );
    })()}
    <div style={styles.nameRow}>
      <h3 style={styles.name}>{p.name}</h3>
      {p.linkedin && (
        <a
          href={p.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.name} on LinkedIn`}
          className="nm-team-linkedin"
          style={styles.linkedin}
        >
          <LinkedInIcon size={17} />
        </a>
      )}
    </div>
    {p.role && <div style={styles.role}>{p.role}</div>}
    <ul style={styles.accolades}>
      {p.accolades.map((a) => (
        <li key={a} style={styles.accolade}>
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
      lineHeight: 1.1,
      color: C.navy,
      margin: 0,
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
      fontSize: "0.95rem",
      color: C.ink,
      fontWeight: 500,
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
    nameRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginTop: "18px",
    },
    linkedin: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: C.slate,
      transition: "color 0.2s ease",
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
        .nm-team-linkedin:hover { color: ${C.accent}; }
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
