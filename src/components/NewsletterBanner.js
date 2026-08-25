import React, { useState } from "react";
import { sharedStyles } from "../styles";
import { useIsMobile } from "../hooks";
import { NEWSLETTER_NAME } from "../pages/sections/Newsletter";

const C = sharedStyles.colors;

// Bumping the suffix re-shows the banner to everyone who dismissed the old one,
// which is what we want if the message ever changes.
const DISMISS_KEY = "nm-banner-between-tides-v1";

// Storage throws outright in some privacy modes, so every access is guarded and
// failure just means the banner shows again next visit. That's the safe default:
// an extra impression beats a blank crash on load.
const readDismissed = () => {
  try {
    return window.localStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
};

// Thin promo strip above the nav. Sits in normal flow rather than fixed, so it
// scrolls away on the first swipe while the sticky header stays put: the
// newsletter gets one impression without permanently costing viewport height.
const NewsletterBanner = () => {
  const isMobile = useIsMobile();
  const [dismissed, setDismissed] = useState(readDismissed);

  if (dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Dismissal just won't persist across reloads.
    }
  };

  const goToSignup = () => {
    const el = document.getElementById("newsletter");
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    const input = el.querySelector("#newsletter-email");
    if (input) window.setTimeout(() => input.focus({ preventScroll: true }), reduced ? 0 : 600);
  };

  const styles = {
    bar: {
      position: "relative",
      backgroundColor: C.navy,
      color: C.white,
      padding: isMobile ? "9px 44px 9px 16px" : "10px 48px",
      textAlign: "center",
      fontSize: isMobile ? "0.82rem" : "0.88rem",
      lineHeight: 1.4,
    },
    cta: {
      background: "none",
      border: "none",
      padding: 0,
      font: "inherit",
      color: C.accentSoft,
      fontWeight: 600,
      cursor: "pointer",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
    },
    close: {
      position: "absolute",
      top: "50%",
      right: isMobile ? "10px" : "16px",
      transform: "translateY(-50%)",
      width: "26px",
      height: "26px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: "none",
      border: "none",
      color: "rgba(255,255,255,0.6)",
      fontSize: "1.1rem",
      lineHeight: 1,
      cursor: "pointer",
      transition: "color 0.18s ease, background-color 0.18s ease",
    },
  };

  return (
    <div style={styles.bar}>
      <style>{`
        .nm-banner-close:hover {
          color: #fff !important;
          background-color: rgba(255,255,255,0.12) !important;
        }
      `}</style>
      <strong style={{ fontWeight: 600 }}>{NEWSLETTER_NAME}</strong>
      {isMobile ? ": " : ", our newsletter on seafood markets and technology. "}
      <button type="button" style={styles.cta} onClick={goToSignup}>
        Subscribe
        <span aria-hidden="true" style={{ marginLeft: "5px" }}>
          →
        </span>
      </button>
      <button
        type="button"
        className="nm-banner-close"
        style={styles.close}
        onClick={dismiss}
        aria-label="Dismiss newsletter banner"
      >
        ×
      </button>
    </div>
  );
};

export default NewsletterBanner;
