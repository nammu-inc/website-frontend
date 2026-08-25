import React, { useState } from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, SectionHeading, Reveal, Button } from "../../components/ui";

const C = sharedStyles.colors;

export const NEWSLETTER_NAME = "Between Tides";
const NOTIFY_EMAIL = "hello@nammu.ai";
const SEND_EMAIL_URL = "https://website-backend-blush.vercel.app/send-email";

// Decorative drift of the Nammu mark across the band. The mark is a fish, which
// suits a newsletter called Between Tides, so it's scattered like a loose school
// rather than stamped once. Kept very low contrast so it reads as texture and
// never competes with the headline. Thinned out on mobile, where there's no room
// beside the copy for anything to sit without crowding it.
const MARKS = [
  { top: "12%", left: "4%", size: 84, opacity: 0.1, rotate: -14 },
  { top: "58%", left: "11%", size: 52, opacity: 0.085, rotate: 9, mobileHide: true },
  { top: "16%", left: "83%", size: 64, opacity: 0.095, rotate: 16, mobileHide: true },
  // Mobile drops it below the button: at that width the desktop spot lands
  // behind the (translucent) email input and shows through it.
  { top: "62%", left: "78%", size: 96, opacity: 0.08, rotate: -7,
    mobileTop: "84%", mobileLeft: "72%" },
  { top: "40%", left: "3%", size: 40, opacity: 0.07, rotate: 22, mobileHide: true },
];

// Signup is a single email to the team, which for v1 is also the only record of
// it, so a failed send has to reach the subscriber rather than be swallowed:
// telling someone they're on the list when nothing was recorded is the one
// outcome worth avoiding.
const subscribe = async (email) => {
  const response = await fetch(SEND_EMAIL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: NOTIFY_EMAIL,
      subject: `${NEWSLETTER_NAME} signup: ${email}`,
      data: {
        email,
        newsletter: NEWSLETTER_NAME,
        source: "nammu.ai website",
        signedUpAt: new Date().toISOString(),
      },
    }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "Signup failed");
};

// Newsletter band: sits between the team story and the press coverage, where the
// reader has met us but isn't ready to book a call. A dark navy block gives the
// publication its own identity and breaks the white/surface alternation without
// re-using the light gradient the demo CTA already owns.
const Newsletter = () => {
  const isMobile = useIsMobile();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return;

    setIsSubmitting(true);
    setStatus(null);
    try {
      await subscribe(trimmed);
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Newsletter signup failed", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    form: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "12px",
      maxWidth: "520px",
      margin: "32px auto 0",
      width: "100%",
    },
    input: {
      flex: 1,
      minWidth: 0,
      padding: "14px 16px",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.24)",
      background: "rgba(255,255,255,0.08)",
      color: C.white,
      fontSize: "1rem",
      fontFamily: "inherit",
      boxSizing: "border-box",
      transition: "border-color 0.18s ease, box-shadow 0.18s ease",
    },
    message: (ok) => ({
      ...sharedStyles.typography.small,
      color: ok ? C.accentSoft : "#ffb4a8",
      margin: "16px 0 0",
      fontWeight: 500,
    }),
  };

  return (
    <Section
      id="newsletter"
      background={C.navy}
      style={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <style>{`
        .nm-newsletter-input::placeholder { color: rgba(255,255,255,0.45); }
        .nm-newsletter-input:focus {
          outline: none;
          border-color: ${C.accent};
          box-shadow: 0 0 0 3px rgba(31,127,194,0.3);
          background: rgba(255,255,255,0.12);
        }
      `}</style>

      {MARKS.filter((m) => !(isMobile && m.mobileHide)).map((m, i) => (
        <img
          key={i}
          src="/logo512.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: (isMobile && m.mobileTop) || m.top,
            left: (isMobile && m.mobileLeft) || m.left,
            width: `${isMobile ? m.size * 0.62 : m.size}px`,
            opacity: m.opacity,
            transform: `rotate(${m.rotate}deg)`,
            // Flatten the teal/navy gradient to flat white so every mark sits at
            // the same weight against the navy, whatever part of it overlaps.
            filter: "brightness(0) invert(1)",
            // Screen so a mark always lightens what's under it. Plain opacity
            // made the ones crossing the accent glow darker than their
            // surroundings, so they punched holes in it instead of floating over.
            mixBlendMode: "screen",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      ))}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-45%",
          left: "50%",
          width: "min(900px, 110%)",
          height: "520px",
          transform: "translateX(-50%)",
          background: `radial-gradient(ellipse at center, rgba(31,127,194,0.34) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Reveal style={{ position: "relative" }}>
        <SectionHeading
          light
          eyebrow="Newsletter"
          title={NEWSLETTER_NAME}
          subtitle="Notes on seafood market trends and the technology reshaping the industry."
        />

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            className="nm-newsletter-input"
            id="newsletter-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
            aria-label="Email address"
            required
            disabled={isSubmitting}
            style={styles.input}
          />
          <Button
            variant="accent"
            type="submit"
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {isSubmitting ? "Joining..." : "Join the list"}
          </Button>
        </form>

        {status === "success" && (
          <p style={styles.message(true)} role="status">
            You're on the list. Look for the next issue of {NEWSLETTER_NAME} in
            your inbox.
          </p>
        )}
        {status === "error" && (
          <p style={styles.message(false)} role="alert">
            Something went wrong on our end. Please try again, or email us at{" "}
            {NOTIFY_EMAIL}.
          </p>
        )}
      </Reveal>
    </Section>
  );
};

export default Newsletter;
