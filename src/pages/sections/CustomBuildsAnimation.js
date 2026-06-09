import React from "react";
import { sharedStyles } from "../../styles";

const C = sharedStyles.colors;

// A faux spreadsheet whose cells auto-populate in a cascading, glowing wave —
// a simple, flashy stand-in for "we automate the manual work." Fills the card,
// loops, honors reduced-motion (renders fully filled, static).
const COLS = ["Item", "Lbs", "Price", "✓"];
const ROWS = [
  ["20/30 Snow Crab", "482", "$8.87", "✓"],
  ["10/20 Bluefin Tuna", "270", "$12.40", "✓"],
  ["20/30 Lobster Loin", "364", "$9.15", "✓"],
  ["10/20 Sablefish", "153", "$6.20", "✓"],
  ["20/30 Halibut", "247", "$11.05", "✓"],
];

const STEP = 0.13; // seconds between cell fills
const DURATION = 6; // total loop seconds

const CustomBuildsAnimation = () => {
  const styles = {
    wrap: {
      position: "relative",
      width: "100%",
      aspectRatio: "16 / 10",
      overflow: "hidden",
      borderBottom: `1px solid ${C.line}`,
      backgroundColor: C.white,
      display: "flex",
      flexDirection: "column",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 16px",
      backgroundColor: C.navy,
      flexShrink: 0,
    },
    filename: {
      color: C.white,
      fontSize: "0.8rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      opacity: 0.95,
    },
    autoPill: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      backgroundColor: C.accent,
      color: C.white,
      fontSize: "0.68rem",
      fontWeight: 700,
      padding: "4px 10px",
      borderRadius: "999px",
      letterSpacing: "0.02em",
    },
    grid: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1.7fr 0.7fr 0.9fr 0.5fr",
      gridTemplateRows: `auto repeat(${ROWS.length}, 1fr)`,
    },
    headCell: {
      display: "flex",
      alignItems: "center",
      fontSize: "0.7rem",
      fontWeight: 700,
      color: C.slate,
      backgroundColor: C.surface,
      padding: "0 14px",
      borderBottom: `1px solid ${C.line}`,
      borderRight: `1px solid ${C.line}`,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
    },
    cell: {
      display: "flex",
      alignItems: "center",
      fontSize: "0.78rem",
      color: C.ink,
      padding: "0 14px",
      borderBottom: `1px solid ${C.line}`,
      borderRight: `1px solid ${C.line}`,
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  };

  return (
    <div style={styles.wrap}>
      <style>{`
        @keyframes nm-cellfill {
          0%, 5%   { opacity: 0; transform: scale(0.8); }
          9%       { opacity: 1; transform: scale(1.12); background-color: rgba(31,127,194,0.28); }
          16%      { transform: scale(1); background-color: rgba(31,127,194,0); }
          86%      { opacity: 1; }
          93%, 100%{ opacity: 0; }
        }
        @keyframes nm-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
        .nm-cellval {
          display: inline-block;
          border-radius: 4px;
          padding: 1px 4px;
          margin: -1px -4px;
          animation: nm-cellfill ${DURATION}s ease-in-out infinite;
        }
        .nm-autopill { animation: nm-pulse 1.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .nm-cellval { animation: none !important; opacity: 1 !important; }
          .nm-autopill { animation: none !important; }
        }
      `}</style>

      <div style={styles.toolbar}>
        <span style={styles.filename}>inventory.xlsx</span>
        <span style={styles.autoPill} className="nm-autopill">
          ⚡ Populating
        </span>
      </div>
      <div style={styles.grid}>
        {COLS.map((c, i) => (
          <div
            key={`h-${i}`}
            style={{
              ...styles.headCell,
              ...(i === COLS.length - 1 ? { borderRight: "none" } : {}),
              justifyContent: i === 0 ? "flex-start" : "center",
            }}
          >
            {c}
          </div>
        ))}
        {ROWS.map((row, r) =>
          row.map((val, c) => {
            const idx = r * row.length + c;
            const isLastCol = c === row.length - 1;
            const isLastRow = r === ROWS.length - 1;
            return (
              <div
                key={`${r}-${c}`}
                style={{
                  ...styles.cell,
                  ...(isLastCol ? { borderRight: "none" } : {}),
                  ...(isLastRow ? { borderBottom: "none" } : {}),
                  justifyContent: c === 0 ? "flex-start" : "center",
                  color: isLastCol ? C.secondary.medium : C.ink,
                  fontWeight: isLastCol ? 700 : 400,
                }}
              >
                <span
                  className="nm-cellval"
                  style={{ animationDelay: `${idx * STEP}s` }}
                >
                  {val}
                </span>
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
};

export default CustomBuildsAnimation;
