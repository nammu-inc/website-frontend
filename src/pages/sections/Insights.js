import React, { useState } from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, SectionHeading, Reveal, Button, Chevron } from "../../components/ui";
import PostTag from "../../components/PostTag";
import { POSTS, NEWSLETTER_NAME } from "../../data/posts";

const C = sharedStyles.colors;

export { NEWSLETTER_NAME };
const NOTIFY_EMAIL = "hello@nammu.ai";
const SUBSCRIBE_URL =
  "https://website-backend-blush.vercel.app/newsletter-signup";

// Posts to the backend's dedicated /newsletter-signup route. /send-email is the
// demo-request route: it requires name + company and renders a "New Demo
// Request" template, so a one-field subscribe 400s there.
//
// For v1 this email is the only record of the signup, so a failed send has to
// reach the subscriber rather than be swallowed: telling someone they're on the
// list when nothing was recorded is the one outcome worth avoiding.
const subscribe = async (email) => {
  const response = await fetch(SUBSCRIBE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      newsletter: NEWSLETTER_NAME,
      source: "nammu.ai website",
    }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "Signup failed");
};

// Cards visible at once on desktop. More posts than this turns the row into a
// carousel (one card at a time on mobile).
const PER_VIEW = 3;
// Fewer posts than this and the cards stay hidden: one or two read as a thin
// section, so it shows just the Between Tides signup until there's a full row.
const MIN_POSTS = 3;
const CARD_W = 360;
const GAP = 20;

// Insights: everything we write ourselves, after the press coverage, where the
// reader has met us but isn't ready to book a call. Light like the rest of the
// page (the footer is the site's only dark block); a soft blue wash sets it
// apart from the surface gray of Press above and the white FAQ below.
//
// Centered like the other home sections and kept short: a one-line heading, the
// newest posts as a row of equal cards, then Between Tides in its own small
// panel. The panel says what the newsletter is, so it reads as one thing we
// publish rather than a label for the whole section. Past three posts the row
// becomes a carousel instead of a separate page. Below MIN_POSTS it's the plain
// newsletter signup alone.
const Insights = () => {
  const isMobile = useIsMobile();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [start, setStart] = useState(0);

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

  const previews = POSTS;
  const hasPreviews = previews.length >= MIN_POSTS;
  const isCarousel = previews.length > PER_VIEW;
  const perView = isMobile ? 1 : PER_VIEW;
  // The carousel slides one card per step; `start` is the first visible card.
  // Clamped so a resize from mobile to desktop can't leave empty slots.
  const maxStart = Math.max(previews.length - perView, 0);
  const first = Math.min(start, maxStart);
  const step = (d) => setStart(Math.min(Math.max(first + d, 0), maxStart));
  const rowCount = Math.min(previews.length, PER_VIEW);

  const styles = {
    // With previews, Between Tides gets its own panel under the cards: what it
    // is on the left, the signup form on the right.
    panel: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "stretch" : "center",
      justifyContent: "space-between",
      gap: isMobile ? "16px" : "32px",
      // Matches the card row's width, but never narrower than two cards so the
      // name and form still fit on one line.
      maxWidth: `${Math.max(rowCount, 2) * CARD_W}px`,
      margin: isMobile ? "28px auto 0" : "36px auto 0",
      padding: isMobile ? "22px 22px" : "22px 26px",
      backgroundColor: "rgba(255,255,255,0.7)",
      border: `1px solid ${C.line}`,
      borderRadius: "16px",
      textAlign: "left",
    },
    panelName: {
      ...sharedStyles.typography.body,
      fontSize: "1.02rem",
      fontWeight: 700,
      color: C.navy,
      margin: 0,
    },
    panelText: {
      ...sharedStyles.typography.small,
      color: C.slate,
      margin: "2px 0 0",
    },
    form: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "12px",
      maxWidth: hasPreviews ? (isMobile ? "none" : "420px") : "520px",
      margin: hasPreviews ? 0 : "32px auto 0",
      width: "100%",
    },
    input: {
      flex: 1,
      minWidth: 0,
      padding: hasPreviews ? "12px 14px" : "14px 16px",
      borderRadius: "10px",
      border: `1px solid ${C.line}`,
      background: C.white,
      color: C.ink,
      fontSize: "1rem",
      fontFamily: "inherit",
      boxSizing: "border-box",
      transition: "border-color 0.18s ease, box-shadow 0.18s ease",
    },
    message: (ok) => ({
      ...sharedStyles.typography.small,
      color: ok ? C.accentColors.success : "#b42318",
      margin: "16px 0 0",
      fontWeight: 500,
    }),
    // Cards size to how many there are, so one or two posts sit centered
    // rather than stretched across the full width.
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : `repeat(${rowCount}, 1fr)`,
      gap: `${GAP}px`,
      maxWidth: isMobile ? "none" : `${rowCount * CARD_W}px`,
      margin: isMobile ? "32px auto 0" : "40px auto 0",
      textAlign: "left",
    },
    // Carousel: the viewport clips the track; padding (offset by negative
    // margin) leaves room for the cards' hover lift and shadow.
    viewport: {
      overflow: "hidden",
      // Plus the side padding, so the cards line up with the panel below.
      maxWidth: isMobile ? "none" : `${PER_VIEW * CARD_W + 24}px`,
      margin: isMobile ? "20px -12px 0" : "28px auto 0",
      boxSizing: "border-box",
      padding: "12px 12px 28px",
      textAlign: "left",
    },
    track: {
      display: "flex",
      gap: `${GAP}px`,
      transform: `translateX(calc(${-first} * ((100% - ${(perView - 1) * GAP}px) / ${perView} + ${GAP}px)))`,
      transition: "transform 0.45s ease",
    },
    slide: {
      flex: `0 0 calc((100% - ${(perView - 1) * GAP}px) / ${perView})`,
      display: "flex",
    },
    controls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      marginTop: "4px",
    },
    arrow: (disabled) => ({
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      border: `1px solid ${C.line}`,
      backgroundColor: C.white,
      color: C.navy,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.4 : 1,
      boxShadow: "0 4px 14px rgba(9,20,47,0.06)",
    }),
    dots: { display: "flex", gap: "8px" },
    dot: (on) => ({
      width: on ? "22px" : "8px",
      height: "8px",
      borderRadius: "999px",
      backgroundColor: on ? C.accent : "#cdd6e0",
      border: "none",
      padding: 0,
      cursor: "pointer",
      transition: "all 0.3s ease",
    }),
    card: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: "16px",
      padding: "22px 24px",
      boxShadow: "0 10px 30px rgba(9,20,47,0.06)",
      textDecoration: "none",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    meta: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "14px",
    },
    date: { ...sharedStyles.typography.small, fontSize: "0.85rem", color: C.slate },
    title: {
      ...sharedStyles.typography.h3,
      fontSize: "1.15rem",
      color: C.navy,
      margin: "0 0 8px",
    },
    excerpt: {
      ...sharedStyles.typography.small,
      fontSize: "0.95rem",
      color: C.slate,
      margin: "0 0 14px",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    // Pinned to the card's bottom so the links line up across a row.
    read: {
      ...sharedStyles.typography.small,
      fontWeight: 700,
      color: C.accent,
      marginTop: "auto",
    },
  };

  // Off-screen carousel cards drop out of the tab order.
  const renderCard = (p, hidden = false) => (
    <a
      key={`${p.date}-${p.title}`}
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="nm-post-card"
      tabIndex={hidden ? -1 : undefined}
      style={{ ...styles.card, flex: 1 }}
    >
      <div style={styles.meta}>
        <PostTag post={p} />
        <span style={styles.date}>{p.date}</span>
      </div>
      <h3 style={styles.title}>{p.title}</h3>
      {p.excerpt && <p style={styles.excerpt}>{p.excerpt}</p>}
      <span style={styles.read}>Read →</span>
    </a>
  );

  return (
    <Section
      id="insights"
      style={{
        background: "linear-gradient(180deg, #f1f7fd 0%, #e6f0fa 100%)",
        textAlign: "center",
      }}
    >
      <style>{`
        .nm-newsletter-input::placeholder { color: #9aa4b1; }
        .nm-newsletter-input:focus {
          outline: none;
          border-color: ${C.accent};
          box-shadow: 0 0 0 3px rgba(31,127,194,0.16);
        }
        .nm-post-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(9,20,47,0.1) !important;
        }
      `}</style>

      <Reveal>
        {hasPreviews ? (
          <>
            <SectionHeading eyebrow="Insights" title="The latest from Nammu." />

            {isCarousel ? (
              <>
                <div style={styles.viewport}>
                  <div style={styles.track}>
                    {previews.map((p, i) => (
                      <div
                        key={`${p.date}-${p.title}`}
                        style={styles.slide}
                        aria-hidden={i < first || i >= first + perView}
                      >
                        {renderCard(p, i < first || i >= first + perView)}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={styles.controls}>
                  <button
                    aria-label="Previous posts"
                    style={styles.arrow(first === 0)}
                    disabled={first === 0}
                    onClick={() => step(-1)}
                  >
                    <Chevron dir="prev" />
                  </button>
                  <div style={styles.dots}>
                    {Array.from({ length: maxStart + 1 }, (_, i) => (
                      <button
                        key={i}
                        aria-label={`Show posts from ${i + 1}`}
                        style={styles.dot(i === first)}
                        onClick={() => setStart(i)}
                      />
                    ))}
                  </div>
                  <button
                    aria-label="Next posts"
                    style={styles.arrow(first === maxStart)}
                    disabled={first === maxStart}
                    onClick={() => step(1)}
                  >
                    <Chevron dir="next" />
                  </button>
                </div>
              </>
            ) : (
              <div style={styles.grid}>{previews.map((p) => renderCard(p))}</div>
            )}

            <div style={styles.panel}>
              <div>
                <p style={styles.panelName}>{NEWSLETTER_NAME}</p>
                <p style={styles.panelText}>
                  Our newsletter on seafood markets and technology.
                </p>
              </div>
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
                    ...(hasPreviews ? { padding: "11px 20px" } : {}),
                  }}
                >
                  {isSubmitting ? "Joining..." : "Join the list"}
                </Button>
              </form>
            </div>
          </>
        ) : (
          <>
            <SectionHeading
              eyebrow="Insights"
              title={NEWSLETTER_NAME}
              subtitle="Our newsletter on seafood markets and technology."
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
                  ...(hasPreviews ? { padding: "11px 20px" } : {}),
                }}
              >
                {isSubmitting ? "Joining..." : "Join the list"}
              </Button>
            </form>
          </>
        )}

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

export default Insights;
