import React, { useEffect, useState } from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, SectionHeading, Reveal } from "../../components/ui";
import intrafishLogo from "../../assets/Intrafish Logo.png";
import perishableLogo from "../../assets/Perishable News Logo.png";
import expanaLogo from "../../assets/Expana Logo.png";
import seafoodNewsLogo from "../../assets/Seafood News Logo.jpg";
import seafoodSourceLogo from "../../assets/Seafood Source Logo.png";
import yahooLogo from "../../assets/Yahoo Logo.png";
import undercurrentLogo from "../../assets/Undercurrent Logo.jpg";

const C = sharedStyles.colors;

// SeafoodNews is an Expana publication, so its coverage carries the Expana logo.
// Logos run in full brand color. Per-logo heights even out the apparent size
// (each artwork has different internal padding). The Expana asset ships on a
// dark background, so it gets rounded corners (`tile`) to read intentionally.
const LOGO = {
  IntraFish: { src: intrafishLogo, height: 20 },
  SeafoodNews: { src: expanaLogo, height: 30, tile: true },
};

// "As seen in" strip — every outlet that has covered Nammu (broader than the few
// articles featured in the carousel). Per-logo heights even out apparent size;
// each sits in a white chip so the mixed wordmarks / marks read consistently.
const STRIP_LOGOS = [
  { name: "Perishable News", src: perishableLogo, h: 20 },
  { name: "Seafood News", src: seafoodNewsLogo, h: 27 },
  { name: "SeafoodSource", src: seafoodSourceLogo, h: 26 },
  { name: "Yahoo", src: yahooLogo, h: 34 },
  { name: "IntraFish", src: intrafishLogo, h: 18 },
  { name: "Undercurrent News", src: undercurrentLogo, h: 30 },
  { name: "Expana", src: expanaLogo, h: 20 },
];

// Real coverage, newest first.
const ARTICLES = [
  {
    outlet: "IntraFish",
    date: "June 15, 2026",
    headline:
      "'It's not like chicken': The AI startup betting on seafood's messiest data problem",
    excerpt:
      "A feature on Nammu and its bet that seafood's complexity is exactly what makes it ripe for better software, helping distributors turn the data already inside their business into clearer purchasing patterns, declining-account alerts, and margin opportunities.",
    url: "https://www.intrafish.com/markets/its-not-like-chicken-the-ai-startup-betting-on-seafoods-messiest-data-problem/2-1-1981623",
  },
  {
    outlet: "IntraFish",
    date: "April 15, 2026",
    headline: "AI seafood platform Nammu taps Derek Figueroa as strategic advisor",
    excerpt:
      "Nammu names Derek Figueroa, former Seattle Fish Company CEO and National Fisheries Institute chair, as a strategic advisor, deepening its roots across the seafood industry.",
    url: "https://www.intrafish.com/people/ai-seafood-platform-nammu-taps-derek-figueroa-as-strategic-advisor/2-1-1974846",
  },
  {
    outlet: "SeafoodNews",
    date: "March 13, 2026",
    headline:
      "Nammu Announces Full-Team Rollout at Stavis Seafoods, Advancing Sales Modernization Efforts",
    excerpt:
      "Coverage of Nammu's full-team deployment at Stavis Seafoods, freeing salespeople from manual spreadsheet work to focus on customer follow-ups and opportunities.",
    url: "https://www.seafoodnews.com/Story/1336829/Nammu-Announces-Full-Team-Rollout-at-Stavis-Seafoods-Advancing-Sales-Modernization-Efforts",
  },
];

const ROTATE_MS = 7000;

const Chevron = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dir === "prev" ? "rotate(180deg)" : "none" }}>
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

// Press, folded into the home page as a section (no longer its own /press page),
// shown as a carousel (one article at a time, auto-advancing).
const Press = () => {
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setActive((i) => (i + 1) % ARTICLES.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [reduced]);

  const go = (i) => setActive((i + ARTICLES.length) % ARTICLES.length);
  const a = ARTICLES[active];
  const logo = LOGO[a.outlet];

  const styles = {
    card: {
      position: "relative",
      maxWidth: "760px",
      margin: "30px auto 0",
      backgroundColor: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: "20px",
      boxShadow: "0 10px 36px rgba(9,20,47,0.07)",
      padding: isMobile ? "30px 26px" : "44px 52px",
      minHeight: isMobile ? "0" : "260px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textDecoration: "none",
    },
    meta: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "18px",
      minHeight: "30px",
    },
    logo: (l) => ({
      height: `${l.height}px`,
      width: "auto",
      maxWidth: "150px",
      objectFit: "contain",
      borderRadius: l.tile ? "8px" : 0,
      display: "block",
    }),
    dot: { width: "4px", height: "4px", borderRadius: "50%", backgroundColor: C.line },
    date: { ...sharedStyles.typography.eyebrow, color: C.slate },
    headline: {
      ...sharedStyles.typography.h3,
      fontSize: isMobile ? "1.3rem" : "clamp(1.4rem, 2.1vw, 1.7rem)",
      color: C.navy,
      margin: "0 0 14px",
    },
    excerpt: {
      ...sharedStyles.typography.body,
      fontSize: "1.05rem",
      color: C.slate,
      margin: "0 0 22px",
    },
    read: {
      ...sharedStyles.typography.body,
      fontSize: "0.95rem",
      fontWeight: 700,
      color: C.accent,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      marginTop: "28px",
    },
    arrow: {
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      border: `1px solid ${C.line}`,
      backgroundColor: C.white,
      color: C.navy,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 14px rgba(9,20,47,0.06)",
    },
    dots: { display: "flex", gap: "8px" },
    dot2: (on) => ({
      width: on ? "22px" : "8px",
      height: "8px",
      borderRadius: "999px",
      backgroundColor: on ? C.accent : "#cdd6e0",
      border: "none",
      padding: 0,
      cursor: "pointer",
      transition: "all 0.3s ease",
    }),
    inquiries: {
      textAlign: "center",
      marginTop: "36px",
      ...sharedStyles.typography.body,
      color: C.slate,
    },
    link: { color: C.accent, fontWeight: 600, textDecoration: "none" },
    stripWrap: { display: "flex", flexDirection: "column", alignItems: "center", gap: "13px", margin: "24px auto 0", maxWidth: "960px" },
    stripLabel: { ...sharedStyles.typography.eyebrow, color: C.slate },
    stripRow: { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "12px" },
    chip: { display: "inline-flex", alignItems: "center", justifyContent: "center", height: "44px", padding: "0 15px", backgroundColor: C.white, border: `1px solid ${C.line}`, borderRadius: "10px", boxShadow: "0 2px 8px rgba(9,20,47,0.05)" },
  };

  return (
    <Section background={C.surface} id="press">
      <style>{`
        @keyframes nm-pfade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce){ .nm-pfade { animation: none !important; } }
      `}</style>

      <SectionHeading eyebrow="Press" title="Nammu in the news." />

      <Reveal>
        <div style={styles.stripWrap}>
          <span style={styles.stripLabel}>As seen in</span>
          <div style={styles.stripRow}>
            {STRIP_LOGOS.map((l) => (
              <span key={l.name} style={styles.chip}>
                <img src={l.src} alt={l.name} style={{ height: `${l.h}px`, width: "auto", objectFit: "contain", display: "block" }} />
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <a href={a.url} target="_blank" rel="noopener noreferrer" style={styles.card}>
          <div key={active} className="nm-pfade" style={{ animation: "nm-pfade 0.6s ease" }}>
            <div style={styles.meta}>
              <img src={logo.src} alt={a.outlet} style={styles.logo(logo)} />
              <span style={styles.dot} />
              <span style={styles.date}>{a.date}</span>
            </div>
            <h3 style={styles.headline}>{a.headline}</h3>
            <p style={styles.excerpt}>{a.excerpt}</p>
            <span style={styles.read}>Read article →</span>
          </div>
        </a>

        <div style={styles.controls}>
          <button aria-label="Previous article" style={styles.arrow} onClick={() => go(active - 1)}>
            <Chevron dir="prev" />
          </button>
          <div style={styles.dots}>
            {ARTICLES.map((item, i) => (
              <button key={i} aria-label={`Show article ${i + 1}`} style={styles.dot2(i === active)} onClick={() => setActive(i)} />
            ))}
          </div>
          <button aria-label="Next article" style={styles.arrow} onClick={() => go(active + 1)}>
            <Chevron dir="next" />
          </button>
        </div>
      </Reveal>

      <p style={styles.inquiries}>
        Press inquiries:{" "}
        <a href="mailto:hello@nammu.ai" style={styles.link}>
          hello@nammu.ai
        </a>
      </p>
    </Section>
  );
};

export default Press;
