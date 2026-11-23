import React from "react";
import { Link } from "react-router-dom";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, SectionHeading, Reveal } from "../../components/ui";
import { CASE_STUDIES } from "../../data/caseStudies";

const C = sharedStyles.colors;
const CARD_W = 400;
const GAP = 24;

// Case studies: walkthroughs written with customers, hosted on nammu.ai. Sits
// between Press (outside coverage) and Newsletter (our own writing), on white
// so it reads apart from the gray Press band above and the blue wash below.
// Cards size to how many there are, so two sit centered rather than stretched.
const CaseStudies = () => {
  const isMobile = useIsMobile();
  if (CASE_STUDIES.length === 0) return null;
  const cols = Math.min(CASE_STUDIES.length, 3);

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : `repeat(${cols}, 1fr)`,
      gap: `${GAP}px`,
      maxWidth: isMobile ? "none" : `${cols * CARD_W + (cols - 1) * GAP}px`,
      margin: isMobile ? "32px auto 0" : "44px auto 0",
      textAlign: "left",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(9,20,47,0.06)",
      textDecoration: "none",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    cover: {
      display: "block",
      width: "100%",
      aspectRatio: "16 / 9",
      objectFit: "cover",
      backgroundColor: C.surface,
      borderBottom: `1px solid ${C.line}`,
    },
    body: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      padding: "20px 24px 22px",
    },
    customer: {
      ...sharedStyles.typography.eyebrow,
      fontSize: "0.75rem",
      color: C.accent,
      marginBottom: "10px",
    },
    title: {
      ...sharedStyles.typography.h3,
      fontSize: "1.2rem",
      color: C.navy,
      margin: "0 0 8px",
    },
    excerpt: {
      ...sharedStyles.typography.small,
      fontSize: "0.95rem",
      color: C.slate,
      margin: "0 0 16px",
    },
    read: {
      ...sharedStyles.typography.small,
      fontWeight: 700,
      color: C.accent,
      marginTop: "auto",
    },
  };

  return (
    <Section id="case-studies" style={{ textAlign: "center" }}>
      <style>{`
        .nm-case-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(9,20,47,0.1) !important;
        }
      `}</style>
      <Reveal>
        <SectionHeading
          eyebrow="Case studies"
          title="How seafood teams use Nammu."
          subtitle="Walkthroughs of what we built with our customers, in their words."
        />
        <div style={styles.grid}>
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.slug}
              to={`/case-studies/${c.slug}`}
              className="nm-case-card"
              style={styles.card}
            >
              {c.cover && (
                <img src={c.cover} alt="" loading="lazy" style={styles.cover} />
              )}
              <div style={styles.body}>
                <div style={styles.customer}>{c.customer}</div>
                <h3 style={styles.title}>{c.title}</h3>
                <p style={styles.excerpt}>{c.excerpt}</p>
                <span style={styles.read}>Read the case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};

export default CaseStudies;
