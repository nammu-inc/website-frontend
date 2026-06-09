import React, { useRef } from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpeg";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";

const C = sharedStyles.colors;

// A layered editorial collage of real seafood-industry photos. One large focal
// card plus two offset cards, with soft float animation and subtle pointer
// parallax for depth. Sleek and composed, not a carousel. Honors reduced-motion.
//
// [[PLACEHOLDER: hero1/2/3 are client-supplied stand-ins; swap for final
// licensed/retouched shots when ready.]]

// A packed asymmetric mosaic: one large focal card on the left, a stacked
// column on the right. Small gaps (no heavy overlap) keep it tidy. Each card
// floats and parallaxes by its own depth.
const CARDS = [
  {
    img: hero3,
    pos: { left: "0%", top: "0%" },
    size: { width: "56%", height: "60%" },
    depth: 6,
    dur: 8.5,
    delay: 0,
    z: 3,
    label: "Processing floor",
  },
  {
    img: hero5,
    pos: { right: "0%", top: "0%" },
    size: { width: "40%", height: "31%" },
    depth: 16,
    dur: 7.5,
    delay: -1,
    z: 2,
    label: "Fishing boat at the harbor",
  },
  {
    img: hero1,
    pos: { right: "0%", top: "35%" },
    size: { width: "40%", height: "30%" },
    depth: 13,
    dur: 8,
    delay: -3,
    z: 2,
    label: "Fresh catch on the line",
  },
  {
    img: hero4,
    pos: { left: "0%", top: "64%" },
    size: { width: "56%", height: "36%" },
    depth: 10,
    dur: 9,
    delay: -5,
    z: 2,
    label: "Unloading the catch at the dock",
  },
  {
    img: hero2,
    pos: { right: "0%", top: "69%" },
    size: { width: "40%", height: "31%" },
    depth: 18,
    dur: 7,
    delay: -2,
    z: 1,
    label: "Aquaculture tanks",
  },
];

const HeroCollage = () => {
  const isMobile = useIsMobile();
  const stageRef = useRef(null);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMove = (e) => {
    if (reduced || isMobile) return;
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--px", (x * 2).toFixed(3));
    el.style.setProperty("--py", (y * 2).toFixed(3));
  };

  const handleLeave = () => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  };

  const styles = {
    stage: {
      position: "relative",
      width: "100%",
      aspectRatio: "1 / 1",
      "--px": "0",
      "--py": "0",
    },
    glow: {
      position: "absolute",
      inset: "8% 8% 8% 8%",
      background: `radial-gradient(circle at 60% 40%, ${C.accentSoft}, transparent 70%)`,
      filter: "blur(40px)",
      opacity: 0.7,
      zIndex: 0,
    },
    card: (card) => ({
      position: "absolute",
      ...card.pos,
      ...card.size,
      zIndex: card.z,
      borderRadius: "14px",
      overflow: "hidden",
      border: "3px solid #ffffff",
      boxShadow: "0 16px 38px rgba(9,20,47,0.18)",
      transform: `translate(calc(var(--px, 0) * ${card.depth}px), calc(var(--py, 0) * ${card.depth}px))`,
      transition: "transform 0.4s cubic-bezier(.2,.7,.2,1)",
      willChange: "transform",
    }),
    float: (card) => ({
      width: "100%",
      height: "100%",
      animation: reduced
        ? "none"
        : `nm-float ${card.dur}s ease-in-out ${card.delay}s infinite`,
    }),
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
  };

  return (
    <div
      ref={stageRef}
      style={styles.stage}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <style>{`
        @keyframes nm-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }
      `}</style>
      <div style={styles.glow} aria-hidden="true" />
      {CARDS.map((card, i) => (
        <div key={i} style={styles.card(card)}>
          <div style={styles.float(card)}>
            <img src={card.img} alt={card.label} style={styles.img} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCollage;
