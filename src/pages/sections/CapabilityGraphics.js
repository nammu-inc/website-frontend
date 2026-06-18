import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { sharedStyles } from "../../styles";
import lineageLogo from "../../assets/LineageLogo.webp";
import businessCentralLogo from "../../assets/Business Central.png";

const C = sharedStyles.colors;

// Animated, code-built graphics for each home capability section. Each fills a
// 16:10 frame, uses brand colors, and honors prefers-reduced-motion. These are
// deliberately first-pass / illustrative — easy to refine.

const root = {
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  backgroundColor: C.white,
  padding: "clamp(16px, 3vw, 26px)",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  fontFamily: "inherit",
};

const cardHead = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "16px",
};

const headTitle = {
  fontSize: "0.95rem",
  fontWeight: 700,
  color: C.navy,
  letterSpacing: "-0.01em",
};

const Spark = ({ size = 12, color = C.accent }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M12 2 L13.7 8.3 L20 10 L13.7 11.7 L12 18 L10.3 11.7 L4 10 L10.3 8.3 Z" />
  </svg>
);

// A1) AI assistant — Nemo builds a complex report, then exports to Excel ----
// A full chat. A complex, plain-language request -> Nemo works -> a real report
// (margin by species, vs last year, flagged accounts) -> export to .xlsx.
const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ASSIST_Q1 = "Build a Q2 margin report by SKU, compare to last year, and flag accounts trending down.";
const ASSIST_Q2 = "Export this to Excel";
const ASSIST_TYPE_MS = 36; // per-character typing speed
const ASSIST_WORK = ["Pulled 4,210 Q2 orders", "Joined 2025 actuals", "Computed margin by SKU"];
const ASSIST_ROWS = [
  ["20/30 Skin-On Salmon Filet", "18.2%", "+2.1", true],
  ["U/10 Dry Sea Scallops", "21.9%", "+1.4", true],
  ["16/20 Black Tiger Shrimp", "15.0%", "-0.6", false],
  ["8/10 Snow Crab Cluster", "12.4%", "+0.8", true],
];

const nemoAvatar = (
  <span style={{ width: "20px", height: "20px", borderRadius: "6px", background: `linear-gradient(135deg, ${C.accent}, ${C.teal})`, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <Spark size={11} color={C.white} />
  </span>
);

const userBubble = (text) => (
  <div style={{ display: "flex", justifyContent: "flex-end" }}>
    <span style={{ maxWidth: "84%", backgroundColor: C.navy, color: C.white, fontSize: "0.72rem", fontWeight: 500, lineHeight: 1.35, padding: "8px 11px", borderRadius: "12px 12px 3px 12px" }}>{text}</span>
  </div>
);

export const AssistantGraphic = () => {
  const reduced = reduceMotion();
  // Phases: 0 typing Q1 · 1 sent/working · 2 report · 3 typing Q2 · 4 export sent · 5 file
  const [phase, setPhase] = useState(reduced ? 5 : 0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (reduced) return;
    const timers = [];
    let cancelled = false;
    const wait = (ms, fn) => timers.push(setTimeout(fn, ms));

    // Type `text` into the input one character at a time, then call `done`.
    const type = (text, done) => {
      let i = 0;
      setTyped("");
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setTyped(text.slice(0, i));
        if (i < text.length) wait(ASSIST_TYPE_MS, tick);
        else wait(750, done);
      };
      wait(450, tick);
    };

    const run = () => {
      if (cancelled) return;
      setTyped("");
      setPhase(0);
      type(ASSIST_Q1, () => {
        setTyped("");
        setPhase(1); // request sent → Nemo working
        wait(2600, () => {
          setPhase(2); // report built
          wait(3400, () => {
            setPhase(3); // user types the export request
            type(ASSIST_Q2, () => {
              setTyped("");
              setPhase(4); // export sent
              wait(1500, () => {
                setPhase(5); // file ready
                wait(3600, run); // loop
              });
            });
          });
        });
      });
    };

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduced]);

  const typing = phase === 0 || phase === 3;
  const shown = typing ? typed : "Ask Nemo to build any report…";

  // Keep the caret end of the typed text in view as it grows (like a real input
  // scrolling), without truncating, so the text fills the bar left-to-right.
  const textRef = useRef(null);
  const [shift, setShift] = useState(0);
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el || !el.parentElement) return;
    const over = el.scrollWidth - el.parentElement.clientWidth;
    setShift(over > 0 ? over : 0);
  }, [typed, typing]);

  const nemoRow = (children, align = "flex-start") => (
    <div style={{ display: "flex", gap: "7px", alignItems: align, animation: reduced ? "none" : "nm-as-in 0.4s ease both" }}>
      {nemoAvatar}
      {children}
    </div>
  );

  return (
    <div style={{ ...root, padding: "clamp(13px, 2.4vw, 20px)" }}>
      <style>{`
        @keyframes nm-as-in { from { opacity:0; transform:translateY(7px) } to { opacity:1; transform:translateY(0) } }
        @keyframes nm-as-pop { 0%{ transform:scale(0); opacity:0 } 60%{ transform:scale(1.15) } 100%{ transform:scale(1); opacity:1 } }
        @keyframes nm-as-dl { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(2px) } }
        @keyframes nm-as-caret { 0%,100%{ opacity:1 } 50%{ opacity:0 } }
        @media (prefers-reduced-motion: reduce){ .nm-as-in,.nm-as-pop,.nm-as-dl,.nm-as-caret{ animation:none!important } }
      `}</style>

      <div style={{ ...cardHead, marginBottom: "11px" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <img src="/logo512.png" alt="Nammu" style={{ width: "24px", height: "24px", flexShrink: 0, display: "block" }} />
          <span>
            <span style={{ ...headTitle, display: "block", lineHeight: 1.1, fontSize: "0.9rem" }}>Nemo</span>
            <span style={{ fontSize: "0.55rem", color: C.slate, fontWeight: 600 }}>AI assistant</span>
          </span>
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "0.58rem", fontWeight: 700, color: "#157347" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1aa35a", display: "inline-block" }} />
          Online
        </span>
      </div>

      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-end", overflow: "hidden" }}>
        {/* Complex, plain-language request */}
        {(phase === 1 || phase === 2) && userBubble(ASSIST_Q1)}

        {/* Nemo working — a multi-step build */}
        {phase === 1 &&
          nemoRow(
            <div style={{ flex: 1, minWidth: 0, backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "12px 12px 12px 3px", padding: "10px 12px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {ASSIST_WORK.map((w, i) => (
                  <div key={w} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.64rem", color: C.ink, fontWeight: 500 }}>
                    <span style={{ width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "#157347", color: C.white, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.52rem", flexShrink: 0, animation: reduced ? "none" : `nm-as-pop 0.4s ease ${0.5 + i * 0.7}s both` }}>✓</span>
                    {w}
                  </div>
                ))}
              </div>
            </div>,
          )}

        {/* The report Nemo built — stays visible through the export turn */}
        {phase >= 2 &&
          nemoRow(
            <div style={{ flex: 1, minWidth: 0, backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "12px 12px 12px 3px", padding: "10px 11px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "9px" }}>
                <Spark size={11} color={C.teal} />
                <span style={{ fontSize: "0.64rem", fontWeight: 700, color: C.navy }}>Q2 margin by SKU</span>
                <span style={{ fontSize: "0.54rem", fontWeight: 600, color: C.slate }}>vs 2025</span>
              </div>
              <div style={{ display: "flex", fontSize: "0.5rem", color: C.slate, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", paddingBottom: "5px" }}>
                <span style={{ flex: 1 }}>SKU</span>
                <span style={{ width: "44px", textAlign: "right" }}>Margin</span>
                <span style={{ width: "42px", textAlign: "right" }}>vs LY</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {ASSIST_ROWS.map(([name, margin, d, up]) => (
                  <div key={name} style={{ display: "flex", alignItems: "center", borderTop: `1px solid ${C.line}`, padding: "5px 0", fontSize: "0.62rem" }}>
                    <span style={{ flex: 1, color: C.ink, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</span>
                    <span style={{ width: "44px", textAlign: "right", color: C.navy, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{margin}</span>
                    <span style={{ width: "42px", textAlign: "right", fontWeight: 700, color: up ? "#157347" : "#d6453c", fontVariantNumeric: "tabular-nums" }}>{up ? "▲" : "▼"} {d.replace("-", "")}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "9px", backgroundColor: "#fcecec", color: "#c0392b", fontSize: "0.56rem", fontWeight: 700, padding: "4px 9px", borderRadius: "999px" }}>
                ⚑ 3 accounts trending down
              </div>
            </div>,
          )}

        {/* Export request */}
        {(phase === 4 || phase === 5) && userBubble(ASSIST_Q2)}

        {/* Downloadable spreadsheet */}
        {phase === 5 &&
          nemoRow(
            <div style={{ flex: 1, minWidth: 0, backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "12px 12px 12px 3px", padding: "10px 11px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "30px", height: "30px", borderRadius: "7px", backgroundColor: "#1d6f42", color: C.white, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.58rem", fontWeight: 800, flexShrink: 0, letterSpacing: "-0.02em" }}>XLS</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "0.66rem", fontWeight: 700, color: C.navy, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>q2-margin-by-sku.xlsx</div>
                <div style={{ fontSize: "0.55rem", color: C.slate, fontWeight: 600, marginTop: "1px" }}>Ready to download</div>
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", backgroundColor: C.accent, color: C.white, fontSize: "0.62rem", fontWeight: 700, padding: "6px 11px", borderRadius: "7px", flexShrink: 0 }}>
                <span className="nm-as-dl" style={{ display: "inline-block", animation: reduced ? "none" : "nm-as-dl 1.4s ease-in-out infinite" }}>↓</span>
                Download
              </span>
            </div>,
          )}
      </div>

      {/* Plain-language input — the user types the request live */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "11px",
          backgroundColor: C.white,
          border: `1px solid ${typing ? C.accent : C.line}`,
          borderRadius: "9px",
          padding: "8px 11px",
          boxShadow: typing ? "0 0 0 3px rgba(31,127,194,0.12)" : "none",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Spark size={13} />
        <span style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
          <span
            ref={textRef}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              transform: `translateX(${-shift}px)`,
              fontSize: "0.72rem",
              color: typing && typed ? C.navy : C.slate,
              fontWeight: typing && typed ? 500 : 400,
            }}
          >
            {shown}
            {typing && (
              <span className="nm-as-caret" style={{ color: C.accent, fontWeight: 400, marginLeft: "1px", animation: reduced ? "none" : "nm-as-caret 1s step-end infinite" }}>|</span>
            )}
          </span>
        </span>
        <span style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "7px", backgroundColor: C.accent, color: C.white, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem" }}>↑</span>
      </div>
    </div>
  );
};

// A2) Real-time reporting — a live BI dashboard echoing the hero screenshot --
// A company's revenue trends up top (2026 vs 2025 vs projected), a SKU table
// below (YTD, vs last-year YTD, margin) — the everyday view, always current.
const DASH_X = [6, 47, 88, 129, 170, 211, 252, 293];
const DASH_26 = [70, 56, 63, 41, 49, 31, 38, 23];
const DASH_25 = [63, 67, 56, 60, 53, 58, 50, 56];
const DASH_PROJ = [211, 31, 252, 22, 293, 12];
const dpts = (ys) => DASH_X.map((x, i) => `${x},${ys[i]}`).join(" ");

const DASH_SKUS = [
  ["20/30 Snow Crab Tentacle", "$40.9K", "+2.0K", true, "16.0%"],
  ["U/10 Boneless Mussel Steak", "$21.9K", "+21.9K", true, "21.9%"],
  ["20/30 Skin-On King Crab Ring", "$21.0K", "-27.3K", false, "0.5%"],
  ["XL Deveined Coho Salmon Tube", "$19.0K", "-20.0K", false, "19.8%"],
];

export const DashboardGraphic = () => {
  const reduced = reduceMotion();
  return (
    <div style={{ ...root, padding: "clamp(13px, 2.4vw, 20px)" }}>
      <style>{`
        @keyframes nm-bi-draw { from { stroke-dashoffset: 480 } to { stroke-dashoffset: 0 } }
        @keyframes nm-bi-pt { 0%,100%{ r:2.8; opacity:1 } 50%{ r:4.2; opacity:.6 } }
        @keyframes nm-bi-live { 0%,100%{opacity:1} 50%{opacity:.4} }
        @media (prefers-reduced-motion: reduce){ .nm-bi-draw{stroke-dashoffset:0!important;animation:none!important} .nm-bi-pt,.nm-bi-live{animation:none!important} }
      `}</style>

      {/* Header: company + period */}
      <div style={{ ...cardHead, marginBottom: "10px" }}>
        <span>
          <span style={{ fontSize: "0.55rem", color: C.slate, fontWeight: 600 }}>Company</span>
          <span style={{ ...headTitle, display: "block", lineHeight: 1.1 }}>East Provisions</span>
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "0.6rem", fontWeight: 700, color: C.navy, backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "6px", padding: "3px 9px" }}>Full year · 2026</span>
          <span className="nm-bi-live" style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "0.58rem", fontWeight: 700, color: "#157347" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1aa35a", display: "inline-block" }} />
            LIVE
          </span>
        </span>
      </div>

      {/* Top: KPI column + revenue trends chart */}
      <div style={{ display: "flex", gap: "9px", marginBottom: "10px" }}>
        <div style={{ width: "33%", display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "8px", padding: "7px 9px" }}>
            <div style={{ fontSize: "0.53rem", color: C.slate, fontWeight: 600 }}>Revenue</div>
            <div style={{ fontSize: "0.86rem", color: C.navy, fontWeight: 700 }}>$1.24M</div>
            <div style={{ marginTop: "4px", height: "4px", borderRadius: "999px", backgroundColor: C.line, overflow: "hidden" }}>
              <div style={{ width: "74%", height: "100%", borderRadius: "999px", background: `linear-gradient(90deg, ${C.accent}, ${C.teal})` }} />
            </div>
            <div style={{ fontSize: "0.5rem", color: C.slate, fontWeight: 600, marginTop: "3px" }}>2025 · $1.15M</div>
          </div>
          <div style={{ display: "flex", gap: "6px" }}>
            {[["Margin", "14.6%"], ["Orders", "318"]].map(([l, v]) => (
              <div key={l} style={{ flex: 1, backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "8px", padding: "6px 8px" }}>
                <div style={{ fontSize: "0.5rem", color: C.slate, fontWeight: 600 }}>{l}</div>
                <div style={{ fontSize: "0.72rem", color: C.navy, fontWeight: 700 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "3px" }}>
            <span style={{ fontSize: "0.6rem", fontWeight: 700, color: C.slate }}>Revenue trends</span>
            <span style={{ display: "inline-flex", gap: "8px" }}>
              {[["2026", C.accent], ["2025", C.slate], ["Proj.", C.teal]].map(([y, c]) => (
                <span key={y} style={{ display: "inline-flex", alignItems: "center", gap: "3px", fontSize: "0.5rem", fontWeight: 700, color: C.slate }}>
                  <span style={{ width: "9px", height: "2px", backgroundColor: c, borderRadius: "2px", display: "inline-block" }} />
                  {y}
                </span>
              ))}
            </span>
          </div>
          <div style={{ flex: 1, minHeight: "62px" }}>
            <svg viewBox="0 0 300 90" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
              {[18, 45, 72].map((y) => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke={C.line} strokeWidth="1" />
              ))}
              <polyline points={dpts(DASH_25)} fill="none" stroke={C.slate} strokeWidth="1.6" strokeDasharray="2 4" strokeLinecap="round" opacity="0.5" />
              <polyline points={dpts(DASH_PROJ)} fill="none" stroke={C.teal} strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" opacity="0.8" />
              <polyline
                className="nm-bi-draw"
                points={dpts(DASH_26)}
                fill="none"
                stroke={C.accent}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ strokeDasharray: 480, strokeDashoffset: reduced ? 0 : 480, animation: reduced ? "none" : "nm-bi-draw 1.8s ease-out forwards" }}
              />
              {DASH_X.map((x, i) => (
                <circle key={x} cx={x} cy={DASH_26[i]} r="2.8" fill={C.white} stroke={C.accent} strokeWidth="1.8" />
              ))}
              <circle className="nm-bi-pt" cx={DASH_X[5]} cy={DASH_26[5]} r="2.8" fill={C.accent} style={{ animation: reduced ? "none" : "nm-bi-pt 1.8s ease-in-out infinite" }} />
            </svg>
          </div>
        </div>
      </div>

      {/* SKU table — YTD, vs last year, margin */}
      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: "0.5rem", color: C.slate, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", paddingBottom: "5px" }}>
          <span style={{ flex: 1 }}>Item details</span>
          <span style={{ width: "52px", textAlign: "right" }}>YTD</span>
          <span style={{ width: "62px", textAlign: "right" }}>v. 2025</span>
          <span style={{ width: "44px", textAlign: "right" }}>Margin</span>
        </div>
        {DASH_SKUS.map(([name, ytd, delta, up, margin]) => (
          <div key={name} style={{ display: "flex", alignItems: "center", flex: 1, borderTop: `1px solid ${C.line}`, fontSize: "0.62rem" }}>
            <span style={{ flex: 1, color: C.ink, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "6px" }}>{name}</span>
            <span style={{ width: "52px", textAlign: "right", color: C.navy, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{ytd}</span>
            <span style={{ width: "62px", textAlign: "right", fontWeight: 700, color: up ? "#157347" : "#d6453c", fontVariantNumeric: "tabular-nums" }}>{up ? "▲" : "▼"} {delta.replace("-", "")}</span>
            <span style={{ width: "44px", textAlign: "right", color: C.slate, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{margin}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// B) Lead tracking ---------------------------------------------------------
// Two views, crossfading on a loop: a Kanban pipeline (New -> Contacted ->
// Qualified -> Converted, echoing Platform4) and a US map of accounts by
// location (echoing hero4). A Board/Map toggle tracks the active view.
const LEAD_COLS = [
  { t: "New", c: C.accent, cards: [["Northshore Catch", "SENA"], ["Seafarer's Choice", "Barcelona"], ["Mariner's Pride", "SENA"]] },
  { t: "Contacted", c: C.teal, cards: [["Harbor Tide Co.", "SENA"], ["Coral Bay Fisheries", "Barcelona"], ["Pelagic Source", "Barcelona"]] },
  { t: "Qualified", c: C.navy, cards: [["Deep Blue Harvest", "SENA"], ["Ocean Crest Foods", "Barcelona"]] },
  { t: "Converted", c: "#157347", cards: [["Coastal Crown", "SENA"]] },
];

// Lower-48 silhouette traced from real lat/lon landmarks (x = 15 + (lon+125)*5,
// y = 20 + (49-lat)*6.25) so the proportions and coastlines read clearly as the
// U.S.: flat northern border, a Great Lakes notch, the Maine point, the East
// Coast, the Florida peninsula, the Gulf with a Mississippi-delta nub, the
// south-Texas tip, then the tilted West Coast.
const US_PATH =
  "M25 20 L165 20 L185 20 L205 40 L225 34 L240 52 L245 57 L300 32 L305 45 L290 64 L270 70 L260 89 L262 104 L240 121 L235 139 L240 164 L235 170 L227 151 L215 139 L205 136 L197 139 L192 148 L188 140 L172 141 L165 143 L153 153 L152 164 L125 143 L108 128 L85 131 L67 123 L55 123 L48 114 L28 90 L18 74 L20 51 L17 26 Z";

const LEAD_PINS = [
  { x: 29, y: 29, label: "Northshore Catch" },
  { x: 54, y: 112, label: null },
  { x: 115, y: 78, label: null },
  { x: 163, y: 140, label: "Gulf Star Foods" },
  { x: 202, y: 64, label: null },
  { x: 218, y: 116, label: null },
  { x: 264, y: 76, label: "Coastal Crown" },
  { x: 230, y: 150, label: null },
  { x: 88, y: 52, label: null },
  { x: 148, y: 100, label: null },
  { x: 238, y: 70, label: null },
  { x: 186, y: 126, label: null },
];

// Detail shown when a lead card is clicked — mirrors LeadCard.png, compacted.
const LEAD_DETAIL = {
  name: "Harbor Tide Seafood Co.",
  status: "Contacted",
  tag: "SENA",
  fields: [
    ["Location", "Gloucester, MA"],
    ["Products of interest", "Scallops & Lobster"],
    ["Est. annual revenue", "$780K"],
    ["Primary contact", "Tim Torres"],
  ],
  task: ["Call Tim", "Discuss volume pricing · Jun 21"],
};

// A pointer cursor used to click through the interactive graphics.
const Cursor = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" style={{ filter: "drop-shadow(0 1px 1.5px rgba(9,20,47,0.4))" }}>
    <path d="M5 2.5 L5 19.8 L9.3 15.5 L12.4 21.8 L15.1 20.5 L12 14.3 L17.6 14.3 Z" fill="#0b1730" stroke="#ffffff" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

const LeadToggle = ({ isBoard }) => {
  const opt = (label, on) => ({
    fontSize: "0.56rem",
    fontWeight: 700,
    color: on ? C.white : C.slate,
    backgroundColor: on ? C.accent : "transparent",
    borderRadius: "5px",
    padding: "3px 8px",
    transition: "all 0.3s ease",
  });
  return (
    <span style={{ display: "inline-flex", gap: "2px", backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "7px", padding: "2px" }}>
      <span style={opt("Board", isBoard)}>Board</span>
      <span style={opt("Map", !isBoard)}>Map</span>
    </span>
  );
};

export const LeadsGraphic = () => {
  const reduced = reduceMotion();
  // 0 idle · 1 cursor → card · 2 click · 3 detail open · 4 cursor → task ·
  // 5 check off task · 6 detail closes · 7 map
  const [phase, setPhase] = useState(reduced ? 5 : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = [];
    let cancelled = false;
    const wait = (ms, fn) => timers.push(setTimeout(fn, ms));
    const run = () => {
      if (cancelled) return;
      setPhase(0);
      wait(600, () => {
        setPhase(1);
        wait(950, () => {
          setPhase(2);
          wait(450, () => {
            setPhase(3);
            wait(850, () => {
              setPhase(4);
              wait(750, () => {
                setPhase(5);
                wait(1150, () => {
                  setPhase(6);
                  wait(650, () => {
                    setPhase(7);
                    wait(3800, run);
                  });
                });
              });
            });
          });
        });
      });
    };
    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduced]);

  const isBoard = phase <= 6;
  const atCard = phase >= 1;
  const clicking = phase === 2;
  const showDetail = phase >= 3 && phase <= 6;
  const popCursor = phase >= 3 && phase <= 5;
  const cursorAtCheckbox = phase >= 4;
  const taskChecked = phase >= 5;
  const checkClick = phase === 5;
  const closing = phase === 6;
  const pad = "clamp(13px, 2.4vw, 20px)";
  const pane = (on) => ({
    position: "absolute",
    inset: 0,
    padding: pad,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    opacity: on ? 1 : 0,
    transition: "opacity 0.55s ease",
    pointerEvents: "none",
  });

  return (
    <div style={{ ...root, padding: 0, position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes nm-lead-card { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:translateY(0) } }
        @keyframes nm-lead-pin { 0%{ opacity:0; transform:translateY(-5px) scale(.5) } 70%{ transform:translateY(0) scale(1.12) } 100%{ opacity:1; transform:translateY(0) scale(1) } }
        @keyframes nm-lead-ring { 0%{ transform:scale(.6); opacity:.6 } 100%{ transform:scale(2.2); opacity:0 } }
        @keyframes nm-lead-click { 0%{ transform:scale(.3); opacity:.55 } 100%{ transform:scale(2.4); opacity:0 } }
        @keyframes nm-lead-pop { from{ opacity:0; transform:translateY(6px) scale(.97) } to{ opacity:1; transform:translateY(0) scale(1) } }
        @media (prefers-reduced-motion: reduce){ .nm-lead-card,.nm-lead-pin,.nm-lead-ring,.nm-lead-click,.nm-lead-pop{ animation:none!important; opacity:1!important; transform:none!important } }
      `}</style>

      {/* View 1 — Kanban pipeline */}
      <div style={pane(isBoard)}>
        <div style={{ ...cardHead, marginBottom: "9px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", flex: 1, minWidth: 0 }}>
            <span style={headTitle}>Leads</span>
            <span style={{ flex: 1, maxWidth: "120px", backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "6px", padding: "3px 8px", fontSize: "0.52rem", color: C.slate, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Search 17 leads…</span>
          </span>
          <LeadToggle isBoard />
        </div>

        {/* Pipeline progress toward target */}
        <div style={{ marginBottom: "11px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.52rem", fontWeight: 700, color: C.slate, marginBottom: "4px" }}>
            <span><span style={{ color: "#157347" }}>4 converted</span> · 3.8 in pipeline</span>
            <span>2026 target: 8</span>
          </div>
          <div style={{ height: "5px", borderRadius: "999px", backgroundColor: C.line, overflow: "hidden", display: "flex" }}>
            <div style={{ width: "50%", backgroundColor: "#157347" }} />
            <div style={{ width: "30%", backgroundColor: C.teal }} />
          </div>
        </div>

        {/* Columns */}
        <div style={{ flex: 1, minHeight: 0, display: "flex", gap: "6px", position: "relative" }}>
          {LEAD_COLS.map((col, ci) => (
            <div key={col.t} style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: col.c, color: C.white, borderRadius: "6px", padding: "4px 6px", marginBottom: "5px" }}>
                <span style={{ fontSize: "0.5rem", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{col.t}</span>
                <span style={{ fontSize: "0.46rem", fontWeight: 700, backgroundColor: "rgba(255,255,255,0.25)", borderRadius: "999px", padding: "1px 5px", flexShrink: 0 }}>{col.cards.length}</span>
              </div>
              {col.cards.map(([name, tag], ki) => {
                const lit = name === "Harbor Tide Co." && phase >= 2;
                return (
                  <div
                    key={name}
                    style={{
                      backgroundColor: C.white,
                      border: `1px solid ${lit ? C.accent : C.line}`,
                      borderRadius: "6px",
                      padding: "6px",
                      marginBottom: "5px",
                      boxShadow: lit ? "0 0 0 2px rgba(31,127,194,0.18), 0 2px 6px rgba(9,20,47,0.12)" : "0 1px 2px rgba(9,20,47,0.05)",
                      animation: reduced ? "none" : `nm-lead-card 0.45s ease ${0.1 + (ci * 2 + ki) * 0.08}s both`,
                      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    <div style={{ fontSize: "0.5rem", fontWeight: 700, color: C.navy, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "4px" }}>{name}</div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "3px", fontSize: "0.44rem", fontWeight: 700, color: C.slate, backgroundColor: C.surface, borderRadius: "999px", padding: "1px 5px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: col.c, display: "inline-block" }} />
                      {tag}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}

          {/* A cursor moving to the Harbor Tide card and clicking to open it */}
          {!reduced && phase <= 2 && (
            <>
              {clicking && (
                <span style={{ position: "absolute", left: "34%", top: "31px", width: "17px", height: "17px", borderRadius: "50%", border: `2px solid ${C.accent}`, transformOrigin: "center", animation: "nm-lead-click 0.5s ease-out", zIndex: 9, pointerEvents: "none" }} />
              )}
              <span
                style={{
                  position: "absolute",
                  left: atCard ? "35%" : "48%",
                  top: atCard ? "33px" : "70px",
                  zIndex: 10,
                  lineHeight: 0,
                  transform: clicking ? "translate(1px, 1px)" : "none",
                  transition: atCard
                    ? "left 0.7s ease, top 0.7s ease, transform 0.12s ease"
                    : "transform 0.12s ease",
                  pointerEvents: "none",
                }}
              >
                <Cursor />
              </span>
            </>
          )}
        </div>

        {/* Lead detail — opens when the card is clicked */}
        {showDetail && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(9,20,47,0.12)", padding: pad, zIndex: 12, opacity: closing ? 0 : 1, transition: "opacity 0.4s ease" }}>
            <div style={{ width: "100%", maxWidth: "360px", backgroundColor: C.white, border: `1px solid ${C.line}`, borderRadius: "10px", boxShadow: "0 20px 44px rgba(9,20,47,0.25)", padding: "12px 13px", animation: reduced ? "none" : "nm-lead-pop 0.32s ease both" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "7px" }}>
                <span style={{ fontSize: "0.74rem", fontWeight: 700, color: C.navy, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{LEAD_DETAIL.name}</span>
                <span style={{ fontSize: "0.5rem", fontWeight: 700, color: C.white, backgroundColor: C.teal, borderRadius: "999px", padding: "2px 8px", flexShrink: 0 }}>{LEAD_DETAIL.status}</span>
              </div>
              <span style={{ display: "inline-block", fontSize: "0.46rem", fontWeight: 700, color: C.accent, backgroundColor: C.accentSoft, borderRadius: "999px", padding: "2px 7px", marginBottom: "10px" }}>{LEAD_DETAIL.tag}</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px 12px", marginBottom: "10px" }}>
                {LEAD_DETAIL.fields.map(([l, v]) => (
                  <div key={l} style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "0.44rem", fontWeight: 700, color: C.slate, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "2px" }}>{l}</div>
                    <div style={{ fontSize: "0.58rem", fontWeight: 600, color: C.navy, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start", gap: "7px", borderTop: `1px solid ${C.line}`, paddingTop: "9px" }}>
                <span style={{ position: "relative", width: "12px", height: "12px", borderRadius: "3px", flexShrink: 0, marginTop: "1px", border: `1.5px solid ${taskChecked ? C.accent : C.slate}`, backgroundColor: taskChecked ? C.accent : "transparent", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.2s ease, border-color 0.2s ease" }}>
                  {taskChecked && (
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 12 10 17 19 7" /></svg>
                  )}
                  {checkClick && (
                    <span style={{ position: "absolute", inset: "-5px", borderRadius: "50%", border: `2px solid ${C.accent}`, transformOrigin: "center", animation: "nm-lead-click 0.5s ease-out", pointerEvents: "none" }} />
                  )}
                </span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: "0.56rem", fontWeight: 700, color: taskChecked ? C.slate : C.navy, textDecoration: taskChecked ? "line-through" : "none", transition: "color 0.2s ease" }}>{LEAD_DETAIL.task[0]}</span>
                  <span style={{ display: "block", fontSize: "0.5rem", color: C.slate, fontWeight: 500 }}>{LEAD_DETAIL.task[1]}</span>
                </span>
                {!reduced && popCursor && (
                  <span style={{ position: "absolute", left: "-2px", top: "-1px", zIndex: 5, lineHeight: 0, transform: cursorAtCheckbox ? (checkClick ? "translate(1px, 1px)" : "translate(0, 0)") : "translate(56px, -30px)", transition: "transform 0.55s ease", pointerEvents: "none" }}>
                    <Cursor />
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* View 2 — accounts on a map */}
      <div style={pane(!isBoard)}>
        <div style={{ ...cardHead, marginBottom: "9px" }}>
          <span style={headTitle}>Accounts by region</span>
          <LeadToggle isBoard={false} />
        </div>
        <div style={{ flex: 1, minHeight: 0 }}>
          <svg viewBox="0 0 320 185" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
            <path d={US_PATH} fill={C.surface} stroke={C.line} strokeWidth="1.4" strokeLinejoin="round" />
            {LEAD_PINS.map((p, i) => {
              const rightSide = p.x > 250;
              return (
                <g key={i} style={{ animation: reduced ? "none" : `nm-lead-pin 0.5s ease ${0.15 + i * 0.13}s both` }}>
                  {i === 6 && (
                    <circle cx={p.x} cy={p.y} r="7" fill="none" stroke={C.accent} strokeWidth="1.5" style={{ transformOrigin: `${p.x}px ${p.y}px`, animation: reduced ? "none" : "nm-lead-ring 2.4s ease-out infinite" }} />
                  )}
                  <circle cx={p.x} cy={p.y} r="6.5" fill={C.accent} stroke={C.white} strokeWidth="1.4" />
                  <circle cx={p.x} cy={p.y} r="2.4" fill={C.white} />
                  {p.label && (
                    <text x={p.x + (rightSide ? -10 : 10)} y={p.y + 3} textAnchor={rightSide ? "end" : "start"} fontSize="7.5" fontWeight="700" fill={C.navy} style={{ fontFamily: "inherit" }}>{p.label}</text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

// C) Demand forecasting ----------------------------------------------------
// A purchasing list of shrimp SKUs (on hand, price, margin, and a long/short
// position) -> the buyer clicks the short SKU to open its detail: an inventory
// draw-down chart that hands off (at "Now") to a projection hitting the reorder
// point, plus a recommended order quantity + date.
const FC_NOW = 167; // x of the "now" divider
const FC_REORDER = 84; // y of the reorder threshold
const FC_CROSS = 245; // x where the projection meets the reorder line
const FC_HIST = "6,22 30,30 54,26 78,40 102,46 126,42 150,52 167,56";
const FC_PROJ = "167,56 205,70 245,84 290,98";

const FC_SKUS = [
  ["16/20 White Shrimp", "14,200 lb", "$6.80", "18%", "Long"],
  ["21/25 Black Tiger Shrimp", "2,400 lb", "$5.40", "22%", "Short"],
  ["26/30 Gulf Brown Shrimp", "8,900 lb", "$4.95", "15%", "Healthy"],
  ["U/15 Easy-Peel Shrimp", "1,150 lb", "$9.20", "27%", "Short"],
  ["31/40 Vannamei Shrimp", "11,600 lb", "$4.10", "13%", "Healthy"],
];
const FC_TARGET = 1; // the short SKU the cursor clicks into
const FC_STATUS = {
  Short: { bg: "#fcecec", color: "#c0392b" },
  Long: { bg: "#fdf1dd", color: "#b7791f" },
  Healthy: { bg: "#e3f5ea", color: "#157347" },
};
const FC_DETAIL = {
  name: "21/25 Black Tiger Shrimp",
  kpis: [
    ["Avg burn rate", "1,800", "lb / wk"],
    ["On hand", "2,400", "lb"],
    ["Weeks of cover", "~1.3", "wks left"],
  ],
  rec: "9,000 lb · by Jul 8",
};

export const ForecastGraphic = () => {
  const reduced = reduceMotion();
  const pct = (x) => `${(x / 300) * 100}%`;
  // 0 idle · 1 cursor → SKU row · 2 click · 3 SKU detail
  const [phase, setPhase] = useState(reduced ? 3 : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = [];
    let cancelled = false;
    const wait = (ms, fn) => timers.push(setTimeout(fn, ms));
    const run = () => {
      if (cancelled) return;
      setPhase(0);
      wait(800, () => {
        setPhase(1);
        wait(1000, () => {
          setPhase(2);
          wait(520, () => {
            setPhase(3);
            wait(4800, run);
          });
        });
      });
    };
    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduced]);

  const isList = phase <= 2;
  const atRow = phase >= 1;
  const clicking = phase === 2;
  const showDetail = phase === 3;
  const pad = "clamp(13px, 2.4vw, 20px)";
  const pane = (on) => ({ position: "absolute", inset: 0, padding: pad, boxSizing: "border-box", display: "flex", flexDirection: "column", opacity: on ? 1 : 0, transition: "opacity 0.45s ease", pointerEvents: "none" });

  return (
    <div style={{ ...root, padding: 0, position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes nm-fc-click { 0%{ transform:scale(.3); opacity:.55 } 100%{ transform:scale(2.4); opacity:0 } }
        @keyframes nm-fc-view { from { opacity:0 } to { opacity:1 } }
        @media (prefers-reduced-motion: reduce){ .nm-fc-click{animation:none!important;opacity:1!important} }
      `}</style>

      {/* List view — shrimp SKUs with a long/short position */}
      <div style={pane(isList)}>
        <div style={{ ...cardHead, marginBottom: "10px" }}>
          <span style={headTitle}>Purchasing</span>
          <span style={{ fontSize: "0.56rem", fontWeight: 700, color: C.slate, backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "6px", padding: "3px 8px" }}>Shrimp · {FC_SKUS.length} SKUs</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: "0.45rem", fontWeight: 700, color: C.slate, textTransform: "uppercase", letterSpacing: "0.03em", padding: "0 4px 5px" }}>
          <span style={{ flex: 1.9, minWidth: 0 }}>SKU</span>
          <span style={{ flex: 1, textAlign: "right" }}>On hand</span>
          <span style={{ flex: 0.8, textAlign: "right" }}>Price</span>
          <span style={{ flex: 0.85, textAlign: "right" }}>Margin</span>
          <span style={{ flex: 1.05, textAlign: "right" }}>Position</span>
        </div>
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
          {FC_SKUS.map(([name, onHand, price, margin, status], i) => {
            const isTarget = i === FC_TARGET;
            const lit = isTarget && phase >= 2;
            const st = FC_STATUS[status];
            return (
              <div key={name} style={{ position: "relative", display: "flex", alignItems: "center", flex: 1, borderTop: i === 0 ? "none" : `1px solid ${C.line}`, padding: "0 4px", backgroundColor: lit ? C.accentSoft : "transparent", borderRadius: lit ? "5px" : 0, transition: "background-color 0.2s ease" }}>
                <span style={{ flex: 1.9, minWidth: 0, fontSize: "0.56rem", fontWeight: 700, color: C.navy, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</span>
                <span style={{ flex: 1, textAlign: "right", fontSize: "0.55rem", fontWeight: 600, color: C.ink, fontVariantNumeric: "tabular-nums" }}>{onHand}</span>
                <span style={{ flex: 0.8, textAlign: "right", fontSize: "0.55rem", fontWeight: 600, color: C.ink, fontVariantNumeric: "tabular-nums" }}>{price}</span>
                <span style={{ flex: 0.85, textAlign: "right", fontSize: "0.55rem", fontWeight: 600, color: C.ink, fontVariantNumeric: "tabular-nums" }}>{margin}</span>
                <span style={{ flex: 1.05, textAlign: "right" }}>
                  <span style={{ display: "inline-block", fontSize: "0.46rem", fontWeight: 700, color: st.color, backgroundColor: st.bg, borderRadius: "999px", padding: "2px 7px" }}>{status}</span>
                </span>
                {!reduced && isTarget && isList && (
                  <>
                    {clicking && (
                      <span style={{ position: "absolute", left: "26%", top: "50%", width: "16px", height: "16px", marginTop: "-8px", marginLeft: "-8px", borderRadius: "50%", border: `2px solid ${C.accent}`, transformOrigin: "center", animation: "nm-fc-click 0.5s ease-out", zIndex: 6, pointerEvents: "none" }} />
                    )}
                    <span style={{ position: "absolute", left: atRow ? "27%" : "62%", top: atRow ? "32%" : "165%", zIndex: 7, lineHeight: 0, transform: clicking ? "translate(1px, 1px)" : "none", transition: atRow ? "left 0.7s ease, top 0.7s ease, transform 0.12s ease" : "transform 0.12s ease", pointerEvents: "none" }}>
                      <Cursor />
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail view — the clicked SKU: draw-down chart + recommendation */}
      {showDetail && (
        <div style={{ position: "absolute", inset: 0, padding: pad, boxSizing: "border-box", display: "flex", flexDirection: "column", animation: reduced ? "none" : "nm-fc-view 0.4s ease both" }}>
          <div style={{ ...cardHead, marginBottom: "11px" }}>
            <span style={{ ...headTitle, fontSize: "0.82rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "8px" }}>{FC_DETAIL.name}</span>
            <span style={{ display: "inline-flex", gap: "2px", backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "7px", padding: "2px", flexShrink: 0 }}>
              {["4 wk", "13 wk"].map((r, i) => (
                <span key={r} style={{ fontSize: "0.56rem", fontWeight: 700, color: i === 1 ? C.white : C.slate, backgroundColor: i === 1 ? C.accent : "transparent", borderRadius: "5px", padding: "3px 8px" }}>{r}</span>
              ))}
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px", marginBottom: "11px" }}>
            {FC_DETAIL.kpis.map(([l, v, d]) => (
              <div key={l} style={{ flex: 1, backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "8px", padding: "6px 9px" }}>
                <div style={{ fontSize: "0.52rem", color: C.slate, fontWeight: 600 }}>{l}</div>
                <div style={{ fontSize: "0.8rem", color: C.navy, fontWeight: 700, marginTop: "1px" }}>{v}</div>
                <div style={{ fontSize: "0.5rem", color: C.slate, fontWeight: 600, marginTop: "1px" }}>{d}</div>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
            <svg viewBox="0 0 300 110" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
              {[24, 56, 88].map((y) => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke={C.line} strokeWidth="1" />
              ))}
              <line x1="0" y1={FC_REORDER} x2="300" y2={FC_REORDER} stroke="#d6453c" strokeWidth="1.3" strokeDasharray="4 3" opacity="0.7" />
              <line x1={FC_NOW} y1="6" x2={FC_NOW} y2="104" stroke={C.line} strokeWidth="1.4" strokeDasharray="3 3" />
              <polyline points={FC_HIST} fill="none" stroke={C.accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points={FC_PROJ} fill="none" stroke={C.teal} strokeWidth="2.4" strokeDasharray="5 4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx={FC_NOW} cy="56" r="3.4" fill={C.accent} />
              <circle cx={FC_CROSS} cy={FC_REORDER} r="4" fill="#d6453c" stroke={C.white} strokeWidth="1.6" />
            </svg>

            <span style={{ position: "absolute", left: `calc(${pct(FC_NOW)} + 5px)`, bottom: "2px", fontSize: "0.5rem", fontWeight: 700, color: C.slate }}>Now</span>
            <span style={{ position: "absolute", left: pct(FC_CROSS), top: `${(FC_REORDER / 110) * 100}%`, transform: "translate(-50%, -155%)", fontSize: "0.5rem", fontWeight: 700, color: "#c0392b", whiteSpace: "nowrap" }}>Jul 8</span>
          </div>

          <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px", backgroundColor: C.accentSoft, borderRadius: "8px", padding: "7px 11px" }}>
            <Spark size={12} color={C.accent} />
            <span style={{ fontSize: "0.6rem", fontWeight: 700, color: C.navy }}>Recommended order</span>
            <span style={{ marginLeft: "auto", fontSize: "0.66rem", fontWeight: 800, color: C.accent, whiteSpace: "nowrap" }}>{FC_DETAIL.rec}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// D) Live inventory — a real-time pipeline; click a SKU for its details ------
const INV_ROWS = [
  { name: "16/20 White Shrimp", onHand: 14060, avail: 11800, incoming: 6000, eta: "Jul 12" },
  { name: "U/10 Sea Scallops", onHand: 3975, avail: 3100, incoming: 2000, eta: "Jul 14" },
  { name: "20/30 Snow Crab", onHand: 12480, avail: 9600, incoming: 4000, eta: "Jul 9" },
  { name: "8/10 Black Tiger Shrimp", onHand: 2400, avail: 1500, incoming: 9000, eta: "Jul 7" },
];
const INV_TARGET = 0; // the SKU the cursor clicks into
const INV_DETAIL = {
  name: "16/20 White Shrimp",
  kpis: [["On hand", "14,060", "lb"], ["Available", "11,800", "lb"], ["Committed", "2,260", "lb"]],
  locations: [
    ["Boston, MA", "9,400 lb"],
    ["Newark, NJ", "4,660 lb"],
  ],
  // A ledger of how on-hand progressed to today's number (newest first).
  ledger: [
    { date: "Jul 5", text: "Sold to Ocean Crest", delta: -1200, balance: 14060 },
    { date: "Jul 2", text: "Received shipment", delta: 3000, balance: 15260 },
    { date: "Jul 1", text: "Opening balance", delta: null, balance: 12260 },
  ],
};
const INV_LABEL = { fontSize: "0.5rem", fontWeight: 700, color: C.slate, textTransform: "uppercase", letterSpacing: "0.03em" };
const invFmt = (n) => n.toLocaleString("en-US");

export const InventoryGraphic = () => {
  const reduced = reduceMotion();
  const [vals, setVals] = useState(() => INV_ROWS.map((r) => ({ ...r })));
  const [up, setUp] = useState({ r: -1, field: "", dir: 0, key: 0 });
  // 0 list (live) · 1 cursor → SKU · 2 click · 3 detail
  const [phase, setPhase] = useState(reduced ? 3 : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = [];
    let cancelled = false;
    let key = 0;
    const wait = (ms, fn) => timers.push(setTimeout(fn, ms));
    const flash = (r, field, set, dir) => {
      setVals((prev) => { const n = prev.map((x) => ({ ...x })); n[r][field] = set; return n; });
      key += 1;
      setUp({ r, field, dir, key });
    };
    const run = () => {
      if (cancelled) return;
      setVals(INV_ROWS.map((r) => ({ ...r })));
      setUp({ r: -1, field: "", dir: 0, key: 0 });
      setPhase(0);
      wait(750, () => {
        flash(2, "onHand", 12320, -1); // Snow Crab sale
        wait(1400, () => {
          flash(3, "avail", 1800, 1); // Black Tiger freed up
          wait(1300, () => {
            setPhase(1); // cursor → SKU
            wait(950, () => {
              setPhase(2); // click
              wait(520, () => {
                setPhase(3); // detail
                wait(4600, run);
              });
            });
          });
        });
      });
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, [reduced]);

  const isList = phase <= 2;
  const atRow = phase >= 1;
  const clicking = phase === 2;
  const showDetail = phase === 3;
  const pad = "clamp(13px, 2.4vw, 20px)";
  const pane = (on) => ({ position: "absolute", inset: 0, padding: pad, boxSizing: "border-box", display: "flex", flexDirection: "column", opacity: on ? 1 : 0, transition: "opacity 0.45s ease", pointerEvents: "none" });

  const liveBadge = (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "0.58rem", fontWeight: 700, color: "#157347", backgroundColor: "#e3f5ea", borderRadius: "999px", padding: "3px 9px", flexShrink: 0 }}>
      <span className="nm-inv-pulse" style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1aa35a", animation: reduced ? "none" : "nm-inv-pulse 1.6s ease-in-out infinite" }} />
      LIVE
    </span>
  );

  const numCell = (ri, field) => {
    const value = vals[ri][field];
    const isUp = up.r === ri && up.field === field && !reduced;
    const upColor = up.dir > 0 ? "#157347" : C.accent;
    return (
      <span style={{ width: "54px", position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "flex-end", gap: "3px", flexShrink: 0 }}>
        {isUp && (
          <span key={`f${up.key}`} style={{ position: "absolute", inset: "-3px -4px", borderRadius: "5px", backgroundColor: up.dir > 0 ? "rgba(21,115,71,0.13)" : "rgba(31,127,194,0.13)", animation: "nm-inv-flash 1.5s ease-out forwards", pointerEvents: "none", zIndex: 0 }} />
        )}
        <span style={{ width: "7px", textAlign: "center", fontSize: "0.46rem", fontWeight: 700, color: upColor, position: "relative", zIndex: 1, visibility: isUp ? "visible" : "hidden" }}>{up.dir > 0 ? "▲" : "▼"}</span>
        <span style={{ position: "relative", zIndex: 1, fontSize: "0.62rem", fontWeight: 700, color: C.navy, fontVariantNumeric: "tabular-nums" }}>{invFmt(value)}</span>
      </span>
    );
  };

  const incCell = (ri) => {
    const v = vals[ri].incoming;
    const eta = vals[ri].eta;
    return (
      // Identical structure to numCell (slot + value as a direct, center-aligned
      // flex child) so the number lines up with On hand / Available; the ETA date
      // is positioned absolutely just below it.
      <span style={{ width: "54px", flexShrink: 0, position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "flex-end", gap: "3px" }}>
        <span style={{ width: "7px", flexShrink: 0 }} />
        {v ? (
          <span style={{ fontSize: "0.62rem", fontWeight: 700, color: C.navy, fontVariantNumeric: "tabular-nums" }}>{invFmt(v)}</span>
        ) : (
          <span style={{ fontSize: "0.55rem", fontWeight: 600, color: "#c2c9d2" }}>·</span>
        )}
        {v && eta && <span style={{ position: "absolute", right: 0, top: "calc(50% + 6px)", fontSize: "0.44rem", fontWeight: 600, color: C.slate, whiteSpace: "nowrap", lineHeight: 1 }}>{eta}</span>}
      </span>
    );
  };

  return (
    <div style={{ ...root, padding: 0, position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes nm-inv-flash { 0%{ opacity:0 } 14%{ opacity:1 } 100%{ opacity:0 } }
        @keyframes nm-inv-flow { 0%{ left:0%; opacity:0 } 12%{ opacity:1 } 88%{ opacity:1 } 100%{ left:100%; opacity:0 } }
        @keyframes nm-inv-pulse { 0%,100%{ opacity:1 } 50%{ opacity:.35 } }
        @keyframes nm-inv-click { 0%{ transform:scale(.3); opacity:.55 } 100%{ transform:scale(2.4); opacity:0 } }
        @keyframes nm-inv-view { from { opacity:0 } to { opacity:1 } }
        @media (prefers-reduced-motion: reduce){ .nm-inv-flow,.nm-inv-pulse,.nm-inv-click{ animation:none!important } }
      `}</style>

      {/* List view — live inventory pipeline */}
      <div style={pane(isList)}>
        <div style={{ ...cardHead, marginBottom: "9px" }}>
          <span style={headTitle}>Live inventory</span>
          {liveBadge}
        </div>

        {/* Pipeline: real sources auto-syncing in */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "11px" }}>
          <span style={{ fontSize: "0.5rem", fontWeight: 700, color: C.slate, whiteSpace: "nowrap" }}>Auto-synced from</span>
          <img src={businessCentralLogo} alt="Microsoft Business Central" style={{ height: "16px", width: "auto", display: "block" }} />
          <img src={lineageLogo} alt="Lineage" style={{ height: "16px", width: "auto", display: "block" }} />
          <span style={{ position: "relative", flex: 1, height: "2px", backgroundColor: C.line, borderRadius: "2px", minWidth: "18px" }}>
            {!reduced && [0, 1, 2].map((d) => (
              <span key={d} style={{ position: "absolute", top: "50%", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: C.accent, transform: "translateY(-50%)", animation: `nm-inv-flow 1.8s linear ${d * 0.6}s infinite` }} />
            ))}
          </span>
        </div>

        {/* Live table */}
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: "0.45rem", fontWeight: 700, color: C.slate, textTransform: "uppercase", letterSpacing: "0.03em", padding: "0 2px 5px" }}>
            <span style={{ flex: 1, minWidth: 0 }}>SKU (lb)</span>
            <span style={{ width: "54px", textAlign: "right", flexShrink: 0 }}>On hand</span>
            <span style={{ width: "54px", textAlign: "right", flexShrink: 0 }}>Available</span>
            <span style={{ width: "54px", textAlign: "right", flexShrink: 0 }}>Incoming</span>
          </div>
          {INV_ROWS.map((r, ri) => {
            const isTarget = ri === INV_TARGET;
            const lit = isTarget && phase >= 2;
            return (
              <div key={r.name} style={{ position: "relative", display: "flex", alignItems: "center", flex: 1, borderTop: `1px solid ${C.line}`, padding: "0 2px", backgroundColor: lit ? C.accentSoft : "transparent", borderRadius: lit ? "5px" : 0, transition: "background-color 0.2s ease" }}>
                <span style={{ flex: 1, minWidth: 0, fontSize: "0.62rem", fontWeight: 600, color: C.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "6px" }}>{r.name}</span>
                {numCell(ri, "onHand")}
                {numCell(ri, "avail")}
                {incCell(ri)}
                {!reduced && isTarget && isList && (
                  <>
                    {clicking && (
                      <span style={{ position: "absolute", left: "24%", top: "50%", width: "16px", height: "16px", marginTop: "-8px", marginLeft: "-8px", borderRadius: "50%", border: `2px solid ${C.accent}`, transformOrigin: "center", animation: "nm-inv-click 0.5s ease-out", zIndex: 6, pointerEvents: "none" }} />
                    )}
                    <span style={{ position: "absolute", left: atRow ? "25%" : "60%", top: atRow ? "34%" : "165%", zIndex: 7, lineHeight: 0, transform: clicking ? "translate(1px, 1px)" : "none", transition: atRow ? "left 0.7s ease, top 0.7s ease, transform 0.12s ease" : "transform 0.12s ease", pointerEvents: "none" }}>
                      <Cursor />
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail view — one SKU's inventory */}
      {showDetail && (
        <div style={{ position: "absolute", inset: 0, padding: pad, boxSizing: "border-box", display: "flex", flexDirection: "column", animation: reduced ? "none" : "nm-inv-view 0.4s ease both" }}>
          <div style={{ ...cardHead, marginBottom: "10px" }}>
            <span style={{ ...headTitle, fontSize: "0.82rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "8px" }}>{INV_DETAIL.name}</span>
            {liveBadge}
          </div>

          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            {INV_DETAIL.kpis.map(([l, v, d]) => (
              <div key={l} style={{ flex: 1, backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "8px", padding: "6px 9px" }}>
                <div style={{ fontSize: "0.52rem", color: C.slate, fontWeight: 600 }}>{l}</div>
                <div style={{ fontSize: "0.82rem", color: C.navy, fontWeight: 700, marginTop: "1px" }}>{v}</div>
                <div style={{ fontSize: "0.5rem", color: C.slate, fontWeight: 600, marginTop: "1px" }}>{d}</div>
              </div>
            ))}
          </div>

          {/* Stored at — Lineage cold storage */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
            <span style={INV_LABEL}>Stored at</span>
            <img src={lineageLogo} alt="Lineage" style={{ height: "12px", width: "auto", display: "block" }} />
          </div>
          {INV_DETAIL.locations.map(([loc, qty]) => (
            <div key={loc} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${C.line}`, padding: "5px 2px", fontSize: "0.6rem" }}>
              <span style={{ color: C.ink, fontWeight: 600 }}>{loc}</span>
              <span style={{ color: C.navy, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{qty}</span>
            </div>
          ))}

          {/* Recent activity — a ledger of how on-hand got here (from Business Central) */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", margin: "10px 0 3px" }}>
            <span style={INV_LABEL}>Recent activity</span>
            <img src={businessCentralLogo} alt="Business Central" style={{ height: "13px", width: "auto", display: "block" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: "0.43rem", fontWeight: 700, color: C.slate, textTransform: "uppercase", letterSpacing: "0.03em", padding: "0 2px 3px" }}>
            <span style={{ width: "34px", flexShrink: 0 }} />
            <span style={{ flex: 1 }} />
            <span style={{ width: "50px", textAlign: "right", flexShrink: 0 }}>Change</span>
            <span style={{ width: "52px", textAlign: "right", flexShrink: 0 }}>Balance</span>
          </div>
          {INV_DETAIL.ledger.map((e, ei) => (
            <div key={ei} style={{ display: "flex", alignItems: "center", borderTop: `1px solid ${C.line}`, padding: "5px 2px", fontSize: "0.6rem" }}>
              <span style={{ width: "34px", fontSize: "0.52rem", fontWeight: 600, color: C.slate, flexShrink: 0 }}>{e.date}</span>
              <span style={{ flex: 1, minWidth: 0, color: C.ink, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "6px" }}>{e.text}</span>
              <span style={{ width: "50px", textAlign: "right", fontWeight: 700, fontVariantNumeric: "tabular-nums", color: e.delta > 0 ? "#157347" : e.delta < 0 ? "#d6453c" : C.slate, flexShrink: 0 }}>{e.delta == null ? "—" : (e.delta > 0 ? "+" : "−") + invFmt(Math.abs(e.delta))}</span>
              <span style={{ width: "52px", textAlign: "right", fontWeight: 700, color: C.navy, fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>{invFmt(e.balance)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// E) AI outreach — Nemo watches accounts and cues up the next action --------
const OUT_ACCOUNTS = [
  { name: "East Coast Provisions", ytd: "$420K", n: "2", text: "SKUs due to reorder", tone: "teal" },
  { name: "Bayside Seafood Group", ytd: "$310K", n: "3", text: "new SKUs they'll likely buy", tone: "teal" },
  { name: "Harbor Fish Market", ytd: "$185K", n: "1", text: "go-to item is slipping", tone: "amber" },
  { name: "Coastal Catch Co.", ytd: "$95K", n: null, text: "No order in 3 weeks", tone: "amber" },
];
const OUT_TARGET = 3; // the lapsing account — "No order in 3 weeks"
const OUT_TONES = {
  teal: { accent: C.teal, soft: "rgba(13,154,171,0.10)", border: "rgba(13,154,171,0.40)", fg: "#ffffff" },
  amber: { accent: "#c98a00", soft: "rgba(224,168,0,0.14)", border: "rgba(224,168,0,0.50)", fg: "#ffffff" },
};
const OUT_DETAIL = {
  account: "Coastal Catch Co.",
  tag: "At risk",
  // Order cadence: regularly-spaced past orders (days ago, oldest first), then a
  // long overdue gap to today — the visual shows the gap is far wider than usual.
  cadence: { usual: "~weekly", orders: [49, 42, 35, 28, 21], fromLabel: "Apr 30", sinceLabel: "Today · 21 days" },
  to: "Dave Olsen · Buyer",
  subject: "Checking in",
  body: "Hi Dave — we haven't seen your usual order in a few weeks and wanted to check in. Everything good on your end? Happy to get 16/20 shrimp and cod back on this week's truck.",
};

const OutChevron = ({ color }) => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
);
const EnvelopeIcon = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>);
const ChatIcon = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" /></svg>);
const PhoneIcon = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>);
const OUT_CHANNELS = [{ id: "email", icon: <EnvelopeIcon /> }, { id: "text", icon: <ChatIcon /> }, { id: "call", icon: <PhoneIcon /> }];

export const OutreachGraphic = () => {
  const reduced = reduceMotion();
  // 0 list · 1 cursor → insight · 2 click · 3 detail (AI drafts the email) · 4 click Send · 5 sent
  const [phase, setPhase] = useState(reduced ? 3 : 0);
  const [typedBody, setTypedBody] = useState(reduced ? OUT_DETAIL.body : "");
  const [bodyDone, setBodyDone] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const timers = [];
    let cancelled = false;
    const wait = (ms, fn) => timers.push(setTimeout(fn, ms));
    const run = () => {
      if (cancelled) return;
      setTypedBody("");
      setBodyDone(false);
      setPhase(0);
      wait(900, () => {
        setPhase(1);
        wait(1000, () => {
          setPhase(2);
          wait(520, () => {
            setPhase(3); // detail opens; the AI drafts the body
            const body = OUT_DETAIL.body;
            let i = 0;
            const tick = () => {
              if (cancelled) return;
              i += 1;
              setTypedBody(body.slice(0, i));
              if (i < body.length) wait(16, tick);
              else {
                setBodyDone(true); // draft finished → Send becomes active
                wait(750, () => {
                  setPhase(4); // cursor clicks Send → sending
                  wait(900, () => {
                    setPhase(5); // sent ✓
                    wait(2000, run);
                  });
                });
              }
            };
            wait(450, tick);
          });
        });
      });
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, [reduced]);

  const isList = phase <= 2;
  const atCell = phase >= 1;
  const clicking = phase === 2;
  const showDetail = phase >= 3;
  const drafting = phase === 3 && !bodyDone;
  const detailCursor = phase >= 4;
  const sendPressing = phase === 4;
  const sending = phase === 4;
  const sent = phase === 5;
  const pad = "clamp(13px, 2.4vw, 20px)";
  const pane = (on) => ({ position: "absolute", inset: 0, padding: pad, boxSizing: "border-box", display: "flex", flexDirection: "column", opacity: on ? 1 : 0, transition: "opacity 0.45s ease", pointerEvents: "none" });

  const insightCell = (acct, lit) => {
    const t = OUT_TONES[acct.tone];
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 7px", borderRadius: "5px", borderTop: `1px solid ${t.border}`, borderRight: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}`, borderLeft: `3px solid ${t.accent}`, backgroundColor: t.soft, boxShadow: lit ? "0 1px 5px rgba(9,20,47,0.14)" : "none", transition: "box-shadow 0.2s ease" }}>
        <img src="/logo512.png" width="14" height="14" alt="" style={{ flexShrink: 0, objectFit: "contain", display: "block" }} />
        <span style={{ flex: 1, minWidth: 0, fontSize: "0.6rem", color: C.ink, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {acct.n && <b style={{ color: t.accent }}>{acct.n} </b>}{acct.text}
        </span>
        <span style={{ flexShrink: 0, width: "17px", height: "17px", borderRadius: "50%", backgroundColor: t.accent, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <OutChevron color={t.fg} />
        </span>
      </div>
    );
  };

  return (
    <div style={{ ...root, padding: 0, position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes nm-out-click { 0%{ transform:scale(.3); opacity:.55 } 100%{ transform:scale(2.4); opacity:0 } }
        @keyframes nm-out-view { from { opacity:0 } to { opacity:1 } }
        @keyframes nm-out-caret { 0%,100%{ opacity:1 } 50%{ opacity:0 } }
        @keyframes nm-out-pulse { 0%,100%{ opacity:1 } 50%{ opacity:.45 } }
        @keyframes nm-out-dot { 0%,100%{ opacity:.3; transform:translateY(0) } 50%{ opacity:1; transform:translateY(-2px) } }
        @media (prefers-reduced-motion: reduce){ .nm-out-click,.nm-out-caret{ animation:none!important } }
      `}</style>

      {/* List — accounts with Nemo's next action */}
      <div style={pane(isList)}>
        <div style={{ ...cardHead, marginBottom: "9px" }}>
          <span style={headTitle}>My accounts</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "0.56rem", fontWeight: 700, color: C.teal, backgroundColor: "rgba(13,154,171,0.10)", borderRadius: "999px", padding: "3px 9px" }}>
            <img src="/logo512.png" width="11" height="11" alt="" style={{ display: "block" }} /> Nemo insights
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.45rem", fontWeight: 700, color: C.slate, textTransform: "uppercase", letterSpacing: "0.03em", padding: "0 2px 5px" }}>
          <span style={{ flex: 1.15, minWidth: 0 }}>Account</span>
          <span style={{ flex: 1.85, minWidth: 0 }}>Next action</span>
        </div>
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
          {OUT_ACCOUNTS.map((acct, ri) => {
            const isTarget = ri === OUT_TARGET;
            const lit = isTarget && phase >= 2;
            return (
              <div key={acct.name} style={{ position: "relative", display: "flex", alignItems: "center", flex: 1, borderTop: `1px solid ${C.line}`, padding: "0 2px", gap: "8px" }}>
                <span style={{ flex: 1.15, minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: "0.62rem", fontWeight: 700, color: C.navy, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{acct.name}</span>
                  <span style={{ display: "block", fontSize: "0.5rem", fontWeight: 600, color: C.slate }}>{acct.ytd} YTD</span>
                </span>
                <span style={{ flex: 1.85, minWidth: 0 }}>{insightCell(acct, lit)}</span>
                {!reduced && isTarget && isList && (
                  <>
                    {clicking && (
                      <span style={{ position: "absolute", left: "84%", top: "50%", width: "16px", height: "16px", marginTop: "-8px", marginLeft: "-8px", borderRadius: "50%", border: "2px solid #c98a00", transformOrigin: "center", animation: "nm-out-click 0.5s ease-out", zIndex: 6, pointerEvents: "none" }} />
                    )}
                    <span style={{ position: "absolute", left: atCell ? "85%" : "60%", top: atCell ? "40%" : "165%", zIndex: 7, lineHeight: 0, transform: clicking ? "translate(1px, 1px)" : "none", transition: atCell ? "left 0.7s ease, top 0.7s ease, transform 0.12s ease" : "transform 0.12s ease", pointerEvents: "none" }}>
                      <Cursor />
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail — the insight + the outreach Nemo drafted to act on it */}
      {showDetail && (
        <div style={{ position: "absolute", inset: 0, padding: pad, boxSizing: "border-box", display: "flex", flexDirection: "column", animation: reduced ? "none" : "nm-out-view 0.4s ease both" }}>
          <div style={{ ...cardHead, marginBottom: "8px" }}>
            <span style={{ ...headTitle, fontSize: "0.82rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "8px" }}>{OUT_DETAIL.account}</span>
            <span style={{ fontSize: "0.54rem", fontWeight: 700, color: C.white, backgroundColor: "#c98a00", borderRadius: "999px", padding: "3px 9px", flexShrink: 0 }}>{OUT_DETAIL.tag}</span>
          </div>

          {(() => {
            const cad = OUT_DETAIL.cadence;
            const span = cad.orders[0];
            const last = cad.orders[cad.orders.length - 1];
            const xPct = (d) => ((span - d) / span) * 100;
            return (
              <div style={{ marginBottom: "11px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "7px" }}>
                  <img src="/logo512.png" width="14" height="14" alt="" style={{ display: "block", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.56rem", fontWeight: 700, color: C.navy }}>Order cadence</span>
                  <span style={{ marginLeft: "auto", fontSize: "0.52rem", fontWeight: 600, color: C.slate }}>Usually {cad.usual}</span>
                </div>
                <div style={{ position: "relative", height: "24px" }}>
                  <div style={{ position: "absolute", top: "12px", left: 0, right: 0, height: "2px", backgroundColor: C.line }} />
                  <div style={{ position: "absolute", top: "11px", height: "4px", left: `${xPct(last)}%`, right: 0, backgroundColor: "#d6453c", borderRadius: "2px" }} />
                  {cad.orders.map((d, i) => (
                    <div key={i} style={{ position: "absolute", top: "6px", left: `${xPct(d)}%`, width: "2px", height: "13px", marginLeft: "-1px", backgroundColor: C.slate, borderRadius: "1px" }} />
                  ))}
                  <div style={{ position: "absolute", top: "3px", right: 0, width: "2px", height: "19px", backgroundColor: "#d6453c", borderRadius: "1px" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.5rem", fontWeight: 600, color: C.slate, marginTop: "3px" }}>
                  <span>{cad.fromLabel}</span>
                  <span style={{ color: "#d6453c", fontWeight: 700 }}>{cad.sinceLabel}</span>
                </div>
              </div>
            );
          })()}

          <div style={{ flex: 1, minHeight: 0, border: `1px solid ${C.line}`, borderRadius: "10px", padding: "10px 12px", display: "flex", flexDirection: "column", backgroundColor: C.white }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "8px" }}>
              <img src="/logo512.png" width="17" height="17" alt="" style={{ display: "block", flexShrink: 0, animation: drafting && !reduced ? "nm-out-pulse 1.1s ease-in-out infinite" : "none" }} />
              <span style={{ fontSize: "0.6rem", fontWeight: 700, color: C.teal }}>{bodyDone ? "Drafted by Nemo" : "Nemo is drafting"}</span>
              {drafting && (
                <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", paddingBottom: "2px" }}>
                  {[0, 1, 2].map((d) => (
                    <span key={d} style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: C.teal, animation: reduced ? "none" : `nm-out-dot 1s ease-in-out ${d * 0.18}s infinite` }} />
                  ))}
                </span>
              )}
              <span style={{ marginLeft: "auto", fontSize: "0.54rem", fontWeight: 600, color: C.slate, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>To: {OUT_DETAIL.to}</span>
            </div>
            <div style={{ fontSize: "0.64rem", fontWeight: 700, color: C.navy, marginBottom: "5px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{OUT_DETAIL.subject}</div>
            <div style={{ flex: 1, minHeight: 0, fontSize: "0.58rem", color: C.slate, lineHeight: 1.45, overflow: "hidden" }}>
              {typedBody}
              {drafting && <span className="nm-out-caret" style={{ color: C.teal, fontWeight: 400, animation: reduced ? "none" : "nm-out-caret 1s step-end infinite" }}>|</span>}
            </div>
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "6px", marginTop: "9px" }}>
              <div style={{ display: "inline-flex", gap: "3px", backgroundColor: C.surface, border: `1px solid ${C.line}`, borderRadius: "7px", padding: "2px" }}>
                {OUT_CHANNELS.map((ch) => (
                  <span key={ch.id} style={{ width: "21px", height: "18px", borderRadius: "5px", display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: ch.id === "email" ? C.accent : "transparent", color: ch.id === "email" ? C.white : C.slate }}>{ch.icon}</span>
                ))}
              </div>
              <span style={{ position: "relative", flexShrink: 0, marginLeft: "auto", backgroundColor: sent ? "#157347" : bodyDone ? C.accent : C.line, color: bodyDone || sent ? C.white : C.slate, fontSize: "0.62rem", fontWeight: 700, padding: "6px 13px", borderRadius: "7px", transition: "background-color 0.25s ease, color 0.25s ease", whiteSpace: "nowrap" }}>
                {sent ? "Sent ✓" : sending ? "Sending…" : "Send →"}
                {sendPressing && (
                  <span style={{ position: "absolute", right: "8px", bottom: "5px", width: "13px", height: "13px", borderRadius: "50%", border: "2px solid #ffffff", transformOrigin: "center", animation: "nm-out-click 0.5s ease-out", pointerEvents: "none" }} />
                )}
              </span>
              {!reduced && detailCursor && (
                <span style={{ position: "absolute", right: "8px", bottom: "-8px", zIndex: 8, lineHeight: 0, transform: sendPressing ? "translate(1px, 1px)" : "none", transition: "transform 0.12s ease", pointerEvents: "none" }}>
                  <Cursor />
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
