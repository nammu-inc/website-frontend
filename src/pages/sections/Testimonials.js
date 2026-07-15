import React, { useEffect, useRef, useState } from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, Eyebrow } from "../../components/ui";
import stavisLogo from "../../assets/Stavis.png";
import nfiLogo from "../../assets/NFI Logo.jpg";
import cwLogo from "../../assets/cw-logo.png";

const C = sharedStyles.colors;

// Social proof right under the hero. Short, punchy pulls (the full quotes were
// too long for cards). A continuous, looping carousel driven by side arrows: the
// quotes form a ring (Tiffany -> Todd -> Rob -> Dick -> Tiffany ...), so every
// click advances exactly one card in the pressed direction with a seamless wrap.
//
// Implementation: the set is rendered three times and a transform slides the
// track by one card per step. After each step we silently recenter into the
// middle copy (transition off) so there is always a card waiting on both sides.
const TESTIMONIALS = [
  {
    quote:
      "Nammu made our team more efficient and productive, with clear visibility into ordering patterns so our sales team can focus on selling. They get the fast-paced seafood business.",
    author: "Todd Rushing",
    role: "VP Sales, Stavis Seafoods",
    logo: stavisLogo,
    company: "Stavis Seafoods",
  },
  {
    quote:
      "A clean, intuitive interface with easy customization, and a team that keeps innovating with updates and value adds. An excellent choice for sales teams seeking fast adoption.",
    author: "Rob Hallion",
    role: "President, Crocker & Winsor",
    logo: cwLogo,
    company: "Crocker & Winsor Seafoods",
  },
  {
    quote:
      "Nammu gives the NFI Sushi Council the infrastructure to organize and activate our membership, turning individual companies into a connected network with greater visibility and impact.",
    author: "Dick Jones",
    role: "Executive Director, NFI Sushi Council",
    logo: nfiLogo,
    company: "NFI Sushi Council",
  },
  {
    quote:
      "They took the time to understand our day-to-day sales needs and delivered a platform we use daily, with data that's easy to navigate and act on.",
    author: "Tiffany Walker",
    role: "Sales Manager, Stavis Seafoods",
    logo: stavisLogo,
    company: "Stavis Seafoods",
  },
];

const N = TESTIMONIALS.length;
const LOOP = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

const Testimonials = () => {
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(N); // start at the middle copy
  const [animate, setAnimate] = useState(true);
  const slidingRef = useRef(false);

  const go = (dir) => {
    if (slidingRef.current || !animate) return;
    slidingRef.current = true;
    setIndex((i) => i + dir);
  };

  // When a slide finishes, recenter into the middle copy without a transition so
  // the loop is endless and never runs out of cards on either side.
  const handleTransitionEnd = () => {
    slidingRef.current = false;
    setIndex((i) => {
      if (i >= 2 * N) {
        setAnimate(false);
        return i - N;
      }
      if (i < N) {
        setAnimate(false);
        return i + N;
      }
      return i;
    });
  };

  // Re-enable the transition on the frame after a silent recenter.
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const cardW = isMobile ? "min(82vw, 340px)" : "385px";
  const gap = isMobile ? 16 : 22;

  const styles = {
    heading: { textAlign: "center", maxWidth: "640px", margin: "0 auto" },
    // Outer wrapper is overflow-visible so the arrows can sit in the gutter.
    wrapper: { position: "relative", marginTop: isMobile ? "28px" : "36px" },
    // The window that clips the sliding track. Bottom padding keeps the card
    // shadow from being clipped by the overflow.
    viewport: { overflow: "hidden", padding: "6px 0 26px" },
    track: {
      display: "flex",
      alignItems: "stretch",
      gap: `${gap}px`,
      transform: `translateX(calc(-1 * ${index} * (${cardW} + ${gap}px)))`,
      transition: animate ? "transform 0.5s ease" : "none",
      willChange: "transform",
    },
    card: {
      flex: "0 0 auto",
      width: cardW,
      backgroundColor: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: "18px",
      padding: isMobile ? "24px" : "28px",
      boxShadow: "0 6px 22px rgba(9,20,47,0.06)",
      display: "flex",
      flexDirection: "column",
    },
    mark: { fontFamily: "Georgia, serif", fontSize: "44px", lineHeight: 0.6, color: C.accentSoft, userSelect: "none" },
    quote: { fontSize: "1.02rem", lineHeight: 1.5, color: C.ink, fontWeight: 500, margin: "12px 0 0", flex: 1 },
    author: { display: "flex", alignItems: "center", gap: "12px", marginTop: "22px" },
    logo: { height: "32px", maxWidth: "120px", objectFit: "contain" },
    name: { fontWeight: 700, color: C.navy, fontSize: "0.95rem" },
    role: { color: C.slate, fontSize: "0.82rem", marginTop: "1px" },
    arrowBase: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: `1px solid ${C.line}`,
      backgroundColor: C.white,
      color: C.navy,
      cursor: "pointer",
      padding: 0,
      boxShadow: "0 4px 14px rgba(9,20,47,0.12)",
    },
  };

  const Chevron = ({ dir }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: dir === "left" ? "rotate(180deg)" : "none" }}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );

  return (
    <Section background={C.surface} id="testimonials" style={{ paddingTop: isMobile ? "24px" : "40px", paddingBottom: isMobile ? "44px" : "64px" }}>
      <div style={styles.heading}>
        <Eyebrow>Trusted in the industry</Eyebrow>
      </div>

      <div style={styles.wrapper}>
        <div style={styles.viewport}>
          <div style={styles.track} onTransitionEnd={handleTransitionEnd}>
            {LOOP.map((t, i) => (
              <div key={`${t.author}-${i}`} style={styles.card} aria-hidden={i < N || i >= 2 * N}>
                <span aria-hidden="true" style={styles.mark}>“</span>
                <p style={styles.quote}>{t.quote}</p>
                <div style={styles.author}>
                  {t.logo && <img src={t.logo} alt={t.company} style={styles.logo} />}
                  <div>
                    <div style={styles.name}>{t.author}</div>
                    <div style={styles.role}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous quote"
          style={{ ...styles.arrowBase, left: "-22px" }}
        >
          <Chevron dir="left" />
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next quote"
          style={{ ...styles.arrowBase, right: "-22px" }}
        >
          <Chevron dir="right" />
        </button>
      </div>
    </Section>
  );
};

export default Testimonials;
