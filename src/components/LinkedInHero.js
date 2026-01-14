import React from "react";
import { sharedStyles } from "../styles";

const LinkedInHero = () => {
  const { colors } = sharedStyles;

  const logoPositions = [
    // Left side
    { top: "5%", left: "3%", size: 1.0, opacity: 0.4 },
    { top: "22%", left: "8%", size: 0.8, opacity: 0.3 },
    { top: "35%", left: "2%", size: 1.2, opacity: 0.35 },
    { top: "28%", left: "22%", size: 1.1, opacity: 0.4 },
    { bottom: "15%", left: "12%", size: 0.9, opacity: 0.3 },
    { bottom: "5%", left: "28%", size: 1.1, opacity: 0.35 },
    // Center-left area
    { top: "8%", left: "35%", size: 0.9, opacity: 0.3 },
    { top: "25%", left: "38%", size: 1.0, opacity: 0.35 },
    { top: "38%", left: "35%", size: 1.1, opacity: 0.32 },
    { bottom: "18%", left: "40%", size: 0.95, opacity: 0.3 },
    // Center area
    { top: "12%", left: "50%", size: 0.7, opacity: 0.25 },
    { bottom: "20%", left: "55%", size: 0.7, opacity: 0.24 },
    // Right side - fewer to avoid logo/slogan area
    { top: "2%", right: "25%", size: 0.8, opacity: 0.25 },
    { top: "35%", right: "28%", size: 0.85, opacity: 0.24 },
    { bottom: "12%", right: "32%", size: 0.8, opacity: 0.23 },
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
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: "clamp(20px, 5vw, 60px)",
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
          height: "clamp(50px, 6vw, 80px)",
          width: "auto",
          marginBottom: "clamp(10px, 1.5vw, 16px)",
          position: "relative",
          zIndex: 2,
        }}
      />
      <h1
        style={{
          fontSize: "clamp(1.2rem, 2.8vw, 2rem)",
          fontFamily: "'Filson Pro', 'Helvetica Neue', sans-serif",
          fontWeight: "400",
          color: colors.primary.dark,
          margin: "0",
          lineHeight: "1.2",
          letterSpacing: "-0.5px",
          textAlign: "right",
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
