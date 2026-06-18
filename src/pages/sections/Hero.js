import React, { useEffect, useState } from "react";
import { sharedStyles } from "../../styles";
import { useReveal, useIsMobile } from "../../hooks";
import { Button } from "../../components/ui";
import { useDemo } from "../../components/DemoContext";

const C = sharedStyles.colors;
const LOGO = `${process.env.PUBLIC_URL}/logo512.png`;

// What Nammu does, in the viewer's terms. Cycled so the pitch reads as "here's
// what we do for you" (capabilities that resonate), not "here's a platform."
const PHRASES = [
  "grow your business",
  "win new accounts",
  "boost your margins",
  "move more product",
  "forecast demand",
  "automate busywork",
];

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// A repeating wave stroke tiled as a background image for the flowing current.
const waveBg = (color) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='70'><path d='M0 35 Q60 10 120 35 T240 35' fill='none' stroke='${color}' stroke-width='2.5'/></svg>`,
  )}")`;

// The Nammu mark itself, swimming across the hero's lower "water" like a school
// of little fish. (The logo faces left, so left-swimmers are unflipped.)
const Fish = ({ top, size, opacity, dur, delay, dir }) => (
  <div
    className="nm-fish"
    style={{
      position: "absolute",
      top,
      left: 0,
      animation: `${dir === "ltr" ? "nm-swim-ltr" : "nm-swim-rtl"} ${dur}s linear ${delay}s infinite`,
    }}
  >
    <img
      src={LOGO}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      style={{ opacity, transform: dir === "ltr" ? "scaleX(-1)" : "none", display: "block" }}
    />
  </div>
);

const FISH = [
  { top: "56%", size: 38, opacity: 0.24, dur: 34, delay: -5, dir: "rtl" },
  { top: "70%", size: 28, opacity: 0.2, dur: 27, delay: -13, dir: "ltr" },
  { top: "80%", size: 46, opacity: 0.15, dur: 40, delay: -3, dir: "rtl" },
  { top: "63%", size: 22, opacity: 0.22, dur: 23, delay: -18, dir: "ltr" },
  { top: "86%", size: 32, opacity: 0.16, dur: 36, delay: -9, dir: "rtl" },
];

// Ambient bubbles drifting up through the whole hero, for underwater life.
const RISERS = [
  { left: "6%", size: 12, dur: 15, delay: -3, dx: "10px", op: 0.4 },
  { left: "15%", size: 7, dur: 19, delay: -11, dx: "-8px", op: 0.32 },
  { left: "25%", size: 9, dur: 13, delay: -6, dx: "12px", op: 0.36 },
  { left: "35%", size: 5, dur: 22, delay: -15, dx: "-6px", op: 0.3 },
  { left: "45%", size: 11, dur: 16, delay: -1, dx: "8px", op: 0.34 },
  { left: "55%", size: 6, dur: 18, delay: -9, dx: "-10px", op: 0.3 },
  { left: "65%", size: 10, dur: 14, delay: -5, dx: "10px", op: 0.38 },
  { left: "75%", size: 7, dur: 20, delay: -13, dx: "-7px", op: 0.32 },
  { left: "85%", size: 13, dur: 17, delay: -2, dx: "9px", op: 0.34 },
  { left: "93%", size: 6, dur: 23, delay: -8, dx: "-9px", op: 0.3 },
];

const Riser = ({ left, size, dur, delay, dx, op }) => (
  <span
    className="nm-riser"
    aria-hidden="true"
    style={{
      position: "absolute",
      bottom: "3%",
      left,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      background: "radial-gradient(circle at 36% 30%, rgba(255,255,255,0.9), rgba(192,223,250,0.45) 55%, rgba(31,127,194,0.12) 100%)",
      border: "1px solid rgba(255,255,255,0.5)",
      boxShadow: "inset 0 -1px 2px rgba(31,127,194,0.15)",
      "--dx": dx,
      "--op": op,
      animation: `nm-rise ${dur}s ease-in ${delay}s infinite`,
    }}
  />
);

// The cycling phrase rides inside a glassy **bubble that's the width of the
// phrase** — it carries the words up into place while the outgoing bubble floats
// away. An inline-grid stacks all phrases as invisible sizers (incl. the capsule
// padding) so the slot is as wide as the longest one and the line never jumps.
const CAP_PAD = "0.12em 0.72em";

const BubblePhrase = () => {
  const reduced = reduceMotion();
  const [idx, setIdx] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    if (reduced) return;
    let clear;
    const id = setInterval(() => {
      setIdx((i) => {
        setPrev(i);
        return (i + 1) % PHRASES.length;
      });
      clear = setTimeout(() => setPrev(null), 420); // drop the old bubble once it has faded
    }, 3000);
    return () => {
      clearInterval(id);
      clearTimeout(clear);
    };
  }, [reduced]);

  // Capsules are absolutely positioned to fill the box, so they take NO part in
  // sizing — only the invisible sizers set the width. Result: a truly constant
  // pill width across every phrase, and "Helping your team" never shifts.
  const capsule = (extra) => ({
    position: "absolute",
    inset: 0,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    padding: CAP_PAD,
    borderRadius: "999px",
    color: C.accent,
    fontWeight: 700,
    background:
      "radial-gradient(75% 65% at 28% 18%, rgba(255,255,255,0.9), transparent 72%), linear-gradient(180deg, rgba(223,239,253,0.6), rgba(31,127,194,0.1))",
    border: "1px solid rgba(255,255,255,0.75)",
    boxShadow:
      "0 6px 18px rgba(31,127,194,0.16), inset 0 1px 2px rgba(255,255,255,0.95), inset 0 -4px 9px rgba(31,127,194,0.1)",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    ...extra,
  });

  // Glassy detail: a soft top sheen + a small bright catch-light.
  const shine = (
    <>
      <span aria-hidden="true" style={{ position: "absolute", top: "12%", left: "8%", width: "48%", height: "32%", borderRadius: "999px", background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0))", filter: "blur(1.5px)", pointerEvents: "none" }} />
      <span aria-hidden="true" style={{ position: "absolute", top: "26%", right: "12%", width: "7px", height: "7px", borderRadius: "50%", background: "rgba(255,255,255,0.85)", filter: "blur(0.5px)", pointerEvents: "none" }} />
    </>
  );

  return (
    <span style={{ position: "relative", display: "inline-grid", verticalAlign: "baseline" }}>
      {/* Invisible sizers fix the bubble's width to the longest phrase, so it's a
          constant-width pill and "Helping your team" never shifts. */}
      {PHRASES.map((p, i) => (
        <span key={i} aria-hidden="true" style={{ gridArea: "1 / 1", visibility: "hidden", whiteSpace: "nowrap", fontWeight: 700, padding: CAP_PAD }}>
          {p}
        </span>
      ))}

      {/* Outgoing bubble pops away quickly (in place) so it never overlaps the
          incoming one at a readable opacity. */}
      {!reduced && prev !== null && (
        <span key={`p${prev}`} aria-hidden="true" style={capsule({ zIndex: 1, animation: "nm-bub-out 0.3s ease-out forwards" })}>
          <span style={{ position: "relative", zIndex: 1 }}>{PHRASES[prev]}</span>
          {shine}
        </span>
      )}

      {/* Incoming bubble carries the new words up into place (slightly delayed). */}
      <span key={`c${idx}`} style={capsule({ zIndex: 2, animation: reduced ? "none" : "nm-bub-in 0.55s cubic-bezier(.2,.8,.25,1) 0.12s both" })}>
        <span style={{ position: "relative", zIndex: 1 }}>{PHRASES[idx]}</span>
        {shine}
      </span>
    </span>
  );
};

const Hero = () => {
  const openDemo = useDemo();
  const reduced = reduceMotion();
  const isMobile = useIsMobile();
  const [ref, revealStyle] = useReveal(0);

  const blob = (extra) => ({
    position: "absolute",
    width: "44vw",
    maxWidth: "600px",
    aspectRatio: "1",
    borderRadius: "50%",
    filter: "blur(64px)",
    ...extra,
  });

  const waveLayer = (bottom, color, opacity, dur, reverse) => ({
    position: "absolute",
    left: 0,
    right: 0,
    bottom,
    height: "70px",
    backgroundImage: waveBg(color),
    backgroundRepeat: "repeat-x",
    backgroundSize: "240px 70px",
    opacity,
    animation: reduced ? "none" : `nm-waveflow ${dur}s linear infinite`,
    animationDirection: reverse ? "reverse" : "normal",
  });

  const styles = {
    hero: {
      position: "relative",
      minHeight: "clamp(580px, 86vh, 840px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "clamp(80px, 12vh, 130px) clamp(22px, 6vw, 40px) clamp(120px, 15vh, 180px)",
      background: `linear-gradient(172deg, ${C.accentSoft} 0%, ${C.surface} 46%, #e4eefa 100%)`,
      overflow: "hidden",
    },
    inner: { position: "relative", zIndex: 3, maxWidth: "820px", margin: "0 auto" },
    title: {
      ...sharedStyles.typography.display,
      fontSize: "clamp(1.6rem, 7.4vw, 4.6rem)",
      color: C.navy,
      margin: 0,
      textAlign: "center",
      // Single line on desktop (the gradient "AI" reads cleanly); allowed to wrap
      // on narrower screens so it never overflows the viewport.
      whiteSpace: isMobile ? "normal" : "nowrap",
    },
    typeLine: {
      ...sharedStyles.typography.subtitle,
      fontSize: "clamp(1.4rem, 3.1vw, 1.95rem)",
      color: C.slate,
      fontWeight: 500,
      lineHeight: 1.3,
      margin: "clamp(22px, 3.4vh, 32px) auto 0",
      marginBottom: 0,
      maxWidth: "800px",
      textAlign: "center",
    },
    ctaRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginTop: "clamp(32px, 5vh, 44px)",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.hero}>
      <style>{`
        @keyframes nm-bub-in { 0%{ opacity:0; transform: translateY(22px) scale(.9) } 65%{ opacity:1; transform: translateY(-2px) scale(1.02) } 100%{ opacity:1; transform: translateY(0) scale(1) } }
        @keyframes nm-bub-out { 0%{ opacity:1; transform: translateY(0) scale(1) } 100%{ opacity:0; transform: translateY(-5px) scale(1.12) } }
        @keyframes nm-blob-a { 0%,100%{ transform: translate(0,0) scale(1) } 50%{ transform: translate(38px,28px) scale(1.12) } }
        @keyframes nm-blob-b { 0%,100%{ transform: translate(0,0) scale(1) } 50%{ transform: translate(-42px,-24px) scale(1.1) } }
        @keyframes nm-blob-c { 0%,100%{ transform: translate(0,0) scale(1) } 50%{ transform: translate(26px,-30px) scale(1.14) } }
        @keyframes nm-waveflow { from{ background-position-x: 0 } to{ background-position-x: 240px } }
        @keyframes nm-swim-ltr { from{ transform: translateX(-12vw) } to{ transform: translateX(108vw) } }
        @keyframes nm-swim-rtl { from{ transform: translateX(108vw) } to{ transform: translateX(-12vw) } }
        @keyframes nm-rise { 0%{ transform: translate(0,0) scale(.5); opacity:0 } 12%{ opacity:var(--op) } 88%{ opacity:var(--op) } 100%{ transform: translate(var(--dx), -64vh) scale(1); opacity:0 } }
        @keyframes nm-cta-pulse { 0%,100%{ box-shadow: 0 8px 24px rgba(31,127,194,0.26) } 50%{ box-shadow: 0 10px 34px rgba(31,127,194,0.42) } }
        @media (prefers-reduced-motion: reduce){
          .nm-blob,.nm-wave,.nm-fish,.nm-riser,.nm-cta{ animation:none!important }
        }
      `}</style>

      {/* Backdrop: aurora + flowing current + swimming fish */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }} aria-hidden="true">
        <div className="nm-blob" style={blob({ top: "-14%", left: "-6%", background: `radial-gradient(circle, ${C.accent}, transparent 68%)`, opacity: 0.42, animation: reduced ? "none" : "nm-blob-a 22s ease-in-out infinite" })} />
        <div className="nm-blob" style={blob({ top: "2%", right: "-4%", background: `radial-gradient(circle, ${C.teal}, transparent 70%)`, opacity: 0.34, animation: reduced ? "none" : "nm-blob-b 26s ease-in-out infinite" })} />
        <div className="nm-blob" style={blob({ bottom: "-16%", left: "32%", width: "40vw", background: `radial-gradient(circle, ${C.accentSoft}, transparent 70%)`, opacity: 0.55, animation: reduced ? "none" : "nm-blob-c 30s ease-in-out infinite" })} />
        <div className="nm-wave" style={waveLayer("26%", C.teal, 0.18, 15, false)} />
        <div className="nm-wave" style={waveLayer("17%", C.accent, 0.14, 22, true)} />
        <div className="nm-wave" style={waveLayer("9%", C.teal, 0.1, 12, false)} />
        {!reduced && FISH.map((f, i) => <Fish key={i} {...f} />)}
        {!reduced && RISERS.map((b, i) => <Riser key={i} {...b} />)}
      </div>

      {/* Soft spotlight behind the content so the text reads off the busy backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "44%",
          left: "50%",
          width: "min(960px, 92%)",
          height: "clamp(320px, 52vh, 520px)",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.32) 38%, rgba(255,255,255,0) 66%)",
          filter: "blur(8px)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Wave divider: dissolves the hero into the (white) capabilities section */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: "-1px", height: "clamp(70px, 9vw, 120px)", lineHeight: 0, zIndex: 1 }} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" width="100%" height="100%" style={{ display: "block" }}>
          <path d="M0,52 C240,112 480,12 720,42 C960,72 1200,112 1440,52 L1440,120 L0,120 Z" fill={C.accentSoft} opacity="0.55" />
          <path d="M0,74 C240,124 480,34 720,64 C960,94 1200,122 1440,74 L1440,120 L0,120 Z" fill={C.surface} />
        </svg>
      </div>

      <div ref={ref} style={{ ...styles.inner, ...revealStyle }}>
        <h1 style={styles.title}>
          Bringing{" "}
          <span style={{ background: `linear-gradient(120deg, ${C.accent}, ${C.teal})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", WebkitTextFillColor: "transparent" }}>AI</span>{" "}
          to Seafood
        </h1>

        <p style={styles.typeLine}>
          Helping your team <BubblePhrase />
        </p>

        <div style={styles.ctaRow}>
          <Button
            variant="accent"
            size="lg"
            arrow
            onClick={openDemo}
            className={reduced ? undefined : "nm-cta"}
            style={{ animation: reduced ? "none" : "nm-cta-pulse 3s ease-in-out infinite" }}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
