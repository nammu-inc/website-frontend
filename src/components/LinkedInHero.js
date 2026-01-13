import React from "react";
import { sharedStyles } from "../styles";

const LinkedInHero = () => {
  const { colors } = sharedStyles;

  const logoPositions = [
    { top: "5%", left: "3%", size: 1.0, opacity: 0.4 },
    { top: "22%", left: "8%", size: 0.8, opacity: 0.3 },
    { top: "35%", left: "2%", size: 1.2, opacity: 0.35 },
    { top: "3%", left: "18%", size: 0.9, opacity: 0.3 },
    { top: "28%", left: "22%", size: 1.1, opacity: 0.4 },
    { top: "8%", right: "3%", size: 1.0, opacity: 0.35 },
    { top: "25%", right: "8%", size: 0.85, opacity: 0.3 },
    { top: "38%", right: "2%", size: 1.15, opacity: 0.4 },
    { top: "4%", right: "18%", size: 0.95, opacity: 0.3 },
    { top: "30%", right: "22%", size: 1.05, opacity: 0.35 },
    { bottom: "15%", left: "12%", size: 0.9, opacity: 0.3 },
    { bottom: "5%", left: "28%", size: 1.1, opacity: 0.35 },
    { bottom: "20%", right: "12%", size: 0.85, opacity: 0.3 },
    { bottom: "8%", right: "28%", size: 1.0, opacity: 0.4 },
    { top: "2%", left: "75%", size: 0.9, opacity: 0.3 },
    { top: "32%", left: "80%", size: 0.95, opacity: 0.32 },
    { top: "6%", right: "75%", size: 1.05, opacity: 0.33 },
    { top: "34%", right: "80%", size: 0.85, opacity: 0.3 },
    { bottom: "22%", left: "75%", size: 0.9, opacity: 0.31 },
    { bottom: "12%", right: "75%", size: 1.0, opacity: 0.34 },
    // Center area logos - reduced amount and lower opacity
    { top: "12%", left: "45%", size: 0.7, opacity: 0.2 },
    // { top: "32%", left: "52%", size: 0.65, opacity: 0.18 },
    { top: "16%", right: "48%", size: 0.75, opacity: 0.22 },
    { bottom: "18%", left: "50%", size: 0.7, opacity: 0.2 },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1584px",
        aspectRatio: "1584 / 396",
        backgroundColor: `linear-gradient(180deg, ${colors.secondary.light} 0%, ${colors.primary.light} 100%)`,
        background: `linear-gradient(180deg, ${colors.secondary.light} 0%, ${colors.primary.light} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        position: "relative",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      {/* Scattered logos */}
      {logoPositions.map((pos, idx) => (
        <img
          key={idx}
          src="/logo192.png"
          alt=""
          style={{
            position: "absolute",
            width: `${48 * pos.size}px`,
            height: `${48 * pos.size}px`,
            opacity: pos.opacity,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))",
            ...(pos.top ? { top: pos.top } : {}),
            ...(pos.bottom ? { bottom: pos.bottom } : {}),
            ...(pos.left ? { left: pos.left } : {}),
            ...(pos.right ? { right: pos.right } : {}),
          }}
          aria-hidden="true"
        />
      ))}

      <img
        src="/logo.png"
        alt="Nammu"
        style={{
          height: "clamp(80px, 10vw, 120px)",
          width: "auto",
          marginBottom: "clamp(16px, 2vw, 24px)",
          position: "relative",
          zIndex: 2,
        }}
      />
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontFamily: "'Filson Pro', 'Helvetica Neue', sans-serif",
          fontWeight: "400",
          color: colors.primary.dark,
          margin: "0",
          lineHeight: "1.2",
          letterSpacing: "-0.5px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        Reimagining Seafood Sales
      </h1>
    </div>
  );
};

export default LinkedInHero;
