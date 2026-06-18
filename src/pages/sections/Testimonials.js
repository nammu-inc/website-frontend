import React from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, Eyebrow } from "../../components/ui";
import stavisLogo from "../../assets/Stavis.png";
import nfiLogo from "../../assets/NFI Logo.jpg";

const C = sharedStyles.colors;

// Social proof right under the hero. Short, punchy pulls (the full quotes were
// too long for cards). On desktop all three cards show at once (3-up grid); on
// mobile they swipe horizontally. No edge fade — full cards are always visible.
const TESTIMONIALS = [
  {
    quote:
      "Nammu gives the NFI Sushi Council the infrastructure to organize and activate our membership, turning individual companies into a connected network with greater visibility and impact.",
    author: "Dick Jones",
    role: "Executive Director, NFI Sushi Council",
    logo: nfiLogo,
    company: "NFI Sushi Council",
  },
  {
    quote:
      "Nammu made our team more efficient and productive, with clear visibility into ordering patterns so our sales team can focus on selling. They get the fast-paced seafood business.",
    author: "Todd Rushing",
    role: "VP Sales, Stavis Seafoods",
    logo: stavisLogo,
    company: "Stavis Seafoods",
  },
  {
    quote:
      "They took the time to understand our day-to-day sales needs and delivered a platform we use daily, with data that's easy to navigate and act on.",
    author: "Tiffany Walker",
    role: "Sales Manager, Stavis Seafoods",
    logo: stavisLogo,
    company: "Stavis Seafoods",
  },
];

const Testimonials = () => {
  const isMobile = useIsMobile();

  const styles = {
    heading: { textAlign: "center", maxWidth: "640px", margin: "0 auto" },
    track: isMobile
      ? {
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "4px 0 6px",
          marginTop: "28px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }
      : {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "22px",
          marginTop: "36px",
        },
    card: {
      ...(isMobile ? { flex: "0 0 auto", width: "min(82vw, 340px)", scrollSnapAlign: "start" } : {}),
      backgroundColor: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: "18px",
      padding: isMobile ? "24px" : "28px",
      boxShadow: "0 6px 22px rgba(9,20,47,0.06)",
      display: "flex",
      flexDirection: "column",
    },
    mark: { fontFamily: "Georgia, serif", fontSize: "44px", lineHeight: 0.6, color: C.accentSoft, userSelect: "none" },
    quote: { fontSize: "1.02rem", lineHeight: 1.5, color: C.ink, fontWeight: 500, margin: "12px 0 0", flex: 1 },
    author: { display: "flex", alignItems: "center", gap: "12px", marginTop: "22px" },
    logo: { height: "32px", maxWidth: "120px", objectFit: "contain" },
    name: { fontWeight: 700, color: C.navy, fontSize: "0.95rem" },
    role: { color: C.slate, fontSize: "0.82rem", marginTop: "1px" },
  };

  return (
    <Section background={C.surface} id="testimonials" style={{ paddingTop: isMobile ? "24px" : "40px", paddingBottom: isMobile ? "44px" : "64px" }}>
      <style>{`.nm-tscroll::-webkit-scrollbar{ display:none; }`}</style>

      <div style={styles.heading}>
        <Eyebrow>Trusted in the industry</Eyebrow>
      </div>

      <div className="nm-tscroll" style={styles.track}>
        {TESTIMONIALS.map((t) => (
          <div key={t.author} style={styles.card}>
            <span aria-hidden="true" style={styles.mark}>“</span>
            <p style={styles.quote}>{t.quote}</p>
            <div style={styles.author}>
              <img src={t.logo} alt={t.company} style={styles.logo} />
              <div>
                <div style={styles.name}>{t.author}</div>
                <div style={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
