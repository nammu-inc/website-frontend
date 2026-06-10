import React from "react";

// Standalone LinkedIn cover banner, served at /hero (1128 × 191). Light, sleek
// take: the Nammu logomark scattered like a school of fish across an ocean-tone
// gradient, with the wordmark on the right. Open /hero and screenshot it.

// [topPct, leftPct, size(px), opacity, flip]
const FISH = [
  [6, 3, 48, 0.55, false],
  [58, 8, 30, 0.4, true],
  [26, 14, 40, 0.6, false],
  [72, 19, 26, 0.35, true],
  [10, 25, 34, 0.5, false],
  [46, 31, 46, 0.62, true],
  [80, 37, 28, 0.4, false],
  [18, 43, 36, 0.5, true],
  [62, 49, 30, 0.42, false],
  [32, 55, 42, 0.55, true],
  [76, 60, 24, 0.3, false],
  [9, 62, 30, 0.45, true],
  [50, 67, 26, 0.35, false],
];

const LinkedInBanner = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#e9eef3",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "18px",
      padding: "40px 20px",
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    },
    caption: { color: "#5a6573", fontSize: "0.85rem", fontWeight: 600 },
    banner: {
      width: "1128px",
      height: "191px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg, #cbf2f7 0%, #c0dffa 100%)",
      boxShadow: "0 20px 50px rgba(9,20,47,0.18)",
    },
    fish: (f) => ({
      position: "absolute",
      top: `${f[0]}%`,
      left: `${f[1]}%`,
      width: `${f[2]}px`,
      height: `${f[2]}px`,
      objectFit: "contain",
      opacity: f[3],
      transform: f[4] ? "scaleX(-1)" : "none",
      filter: "drop-shadow(0 2px 4px rgba(9,20,47,0.12))",
    }),
    wordmarkWrap: {
      position: "absolute",
      right: "72px",
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: "12px",
    },
    wordmark: { height: "58px", width: "auto", display: "block" },
  };

  return (
    <div style={styles.page}>
      <div style={styles.caption}>
        LinkedIn cover · 1128 × 191 px · screenshot the banner below
      </div>
      <div style={styles.banner}>
        {FISH.map((f, i) => (
          <img key={i} src="/logo192.png" alt="" style={styles.fish(f)} />
        ))}
        <div style={styles.wordmarkWrap}>
          <img src="/logo.png" alt="Nammu" style={styles.wordmark} />
        </div>
      </div>
    </div>
  );
};

export default LinkedInBanner;
