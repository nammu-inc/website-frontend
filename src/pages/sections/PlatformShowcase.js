import React, { useEffect, useState } from "react";
import { sharedStyles } from "../../styles";
import p1 from "../../assets/Platform1.png";
import p2 from "../../assets/Platform2.png";
import p3 from "../../assets/Platform3.png";
import p4 from "../../assets/Platform4.png";
import p5 from "../../assets/Platform5.png";

const C = sharedStyles.colors;

// Real product views; each is labeled so the rotating showcase doubles as a
// tour of the platform's breadth.
const SHOTS = [
  { src: p3, label: "Business intelligence" },
  { src: p1, label: "Sales dashboard" },
  { src: p5, label: "AI Chatbot" },
  { src: p2, label: "Automated outreach" },
  { src: p4, label: "CRM" },
];

const INTERVAL_MS = 3800;

const PlatformShowcase = () => {
  const [active, setActive] = useState(0);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % SHOTS.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [reduced]);

  const styles = {
    wrap: {
      position: "relative",
      width: "100%",
      aspectRatio: "16 / 10",
      overflow: "hidden",
      backgroundColor: "#0c2347",
      borderBottom: `1px solid ${C.line}`,
    },
    img: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
      transition: "opacity 0.8s ease",
    },
    caption: {
      position: "absolute",
      left: "14px",
      bottom: "14px",
      backgroundColor: "rgba(9,20,47,0.9)",
      color: C.white,
      fontSize: "0.8rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      padding: "7px 12px",
      borderRadius: "8px",
      backdropFilter: "blur(4px)",
    },
    dots: {
      position: "absolute",
      right: "14px",
      bottom: "16px",
      display: "flex",
      gap: "7px",
    },
    dot: (on) => ({
      width: on ? "18px" : "7px",
      height: "7px",
      borderRadius: "999px",
      backgroundColor: on ? C.white : "rgba(255,255,255,0.45)",
      border: "none",
      padding: 0,
      cursor: "pointer",
      transition: "all 0.3s ease",
    }),
  };

  return (
    <div style={styles.wrap}>
      {SHOTS.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={s.label}
          style={{ ...styles.img, opacity: i === active ? 1 : 0 }}
        />
      ))}
      <div style={styles.caption}>{SHOTS[active].label}</div>
      <div style={styles.dots}>
        {SHOTS.map((s, i) => (
          <button
            key={i}
            aria-label={s.label}
            style={styles.dot(i === active)}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlatformShowcase;
