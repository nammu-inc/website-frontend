import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { sharedStyles } from "../styles";
import { useIsMobile } from "../hooks";
import { Button } from "../components/ui";
import { useDemo } from "../components/DemoContext";
import { CASE_STUDIES, findCaseStudy } from "../data/caseStudies";

const C = sharedStyles.colors;
const DEFAULT_TITLE = "Nammu | AI for Seafood";

// One case study at /case-studies/:slug. A narrow reading column: header, cover,
// body, then a demo CTA (every case study ends by offering to show the reader
// the same thing on their own business) and links to the other case studies.
// Unknown slugs go back to the section on home.
const CaseStudy = () => {
  const { slug } = useParams();
  const isMobile = useIsMobile();
  const openDemo = useDemo();
  const study = findCaseStudy(slug);

  useEffect(() => {
    if (!study) return;
    document.title = `${study.title} | Nammu`;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [study]);

  if (!study) return <Navigate to="/#case-studies" replace />;

  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug);

  const styles = {
    page: {
      background: `linear-gradient(180deg, ${C.surface} 0px, ${C.white} 420px)`,
      padding: isMobile ? "40px 20px 72px" : "72px 40px 112px",
    },
    column: { maxWidth: "720px", margin: "0 auto" },
    back: {
      ...sharedStyles.typography.small,
      color: C.slate,
      textDecoration: "none",
      fontWeight: 600,
    },
    eyebrow: {
      ...sharedStyles.typography.eyebrow,
      color: C.accent,
      margin: isMobile ? "28px 0 12px" : "40px 0 14px",
    },
    title: {
      ...sharedStyles.typography.h1,
      fontSize: isMobile ? "clamp(2rem, 8vw, 2.4rem)" : "2.75rem",
      color: C.navy,
      margin: 0,
      textWrap: "balance",
    },
    subtitle: {
      ...sharedStyles.typography.subtitle,
      color: C.slate,
      margin: "14px 0 0",
    },
    date: {
      ...sharedStyles.typography.small,
      color: C.slate,
      margin: "10px 0 0",
    },
    cover: {
      display: "block",
      width: "100%",
      height: "auto",
      borderRadius: "14px",
      border: `1px solid ${C.line}`,
      margin: isMobile ? "28px 0 8px" : "40px 0 12px",
      boxShadow: "0 16px 40px rgba(9,20,47,0.08)",
    },
    cta: {
      marginTop: "56px",
      padding: isMobile ? "28px 22px" : "32px 36px",
      borderRadius: "16px",
      background: `linear-gradient(160deg, ${C.accentSoft} 0%, ${C.surface} 100%)`,
      textAlign: "center",
    },
    ctaTitle: {
      ...sharedStyles.typography.h3,
      color: C.navy,
      margin: "0 0 18px",
    },
    more: { marginTop: "48px", borderTop: `1px solid ${C.line}`, paddingTop: "28px" },
    moreLabel: {
      ...sharedStyles.typography.eyebrow,
      fontSize: "0.78rem",
      color: C.slate,
      marginBottom: "12px",
    },
    moreLink: {
      ...sharedStyles.typography.body,
      display: "block",
      color: C.navy,
      fontWeight: 600,
      textDecoration: "none",
      padding: "6px 0",
    },
  };

  return (
    <article style={styles.page}>
      <style>{`
        .nm-article { color: ${C.ink}; font-size: 1.08rem; line-height: 1.75; }
        .nm-article p { margin: 0 0 1.25em; }
        .nm-article h2 {
          font-size: ${isMobile ? "1.45rem" : "1.65rem"};
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: ${C.navy};
          margin: 2em 0 0.6em;
        }
        .nm-article h3 { font-size: 1.2rem; font-weight: 600; color: ${C.navy}; margin: 1.6em 0 0.5em; }
        .nm-article a { color: ${C.accent}; text-underline-offset: 3px; }
        .nm-article figure { margin: 2em 0 0.75em; }
        .nm-article img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 12px;
          border: 1px solid ${C.line};
        }
        .nm-article p.nm-note {
          display: inline-block;
          font-size: 0.8rem;
          line-height: 1.45;
          font-weight: 600;
          color: ${C.ink};
          background: #fff2cc;
          padding: 3px 8px;
          border-radius: 4px;
          margin: 0 0 0.6em;
        }
        .nm-article p.nm-note + p > em:only-child { font-size: 0.95rem; color: ${C.slate}; }
        .nm-case-back:hover, .nm-case-more:hover { color: ${C.accent} !important; }
      `}</style>
      <div style={styles.column}>
        <Link to="/#case-studies" className="nm-case-back" style={styles.back}>
          ← All case studies
        </Link>
        <div style={styles.eyebrow}>Case study · {study.customer}</div>
        <h1 style={styles.title}>{study.title}</h1>
        {study.subtitle && <p style={styles.subtitle}>{study.subtitle}</p>}
        <p style={styles.date}>{study.date}</p>
        {study.cover && <img src={study.cover} alt="" style={styles.cover} />}

        <div
          className="nm-article"
          style={{ marginTop: "28px" }}
          dangerouslySetInnerHTML={{ __html: study.body }}
        />

        <div style={styles.cta}>
          <p style={styles.ctaTitle}>See what Nammu could do for your team.</p>
          <Button variant="accent" arrow onClick={openDemo}>
            Book a Demo
          </Button>
        </div>

        {others.length > 0 && (
          <div style={styles.more}>
            <div style={styles.moreLabel}>More case studies</div>
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/case-studies/${c.slug}`}
                className="nm-case-more"
                style={styles.moreLink}
              >
                {c.title} <span style={{ color: C.slate, fontWeight: 400 }}>· {c.customer}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default CaseStudy;
