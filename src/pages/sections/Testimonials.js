import React from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, SectionHeading, Reveal } from "../../components/ui";
import stavisLogo from "../../assets/Stavis.png";
import nfiLogo from "../../assets/NFI Logo.jpg";

const C = sharedStyles.colors;

// Featured quote leads — an industry-association endorsement carries broad weight.
const FEATURED = {
  quote:
    "Nammu gives the NFI Sushi Council the infrastructure to organize, engage, and activate our membership in a far more meaningful way. As we grow the council, the platform helps us turn individual companies into a connected network with a stronger collective voice, greater visibility, and more impact across the sushi and seafood industry.",
  author: "Dick Jones",
  role: "Executive Director, NFI Sushi Council",
  logo: nfiLogo,
  company: "NFI Sushi Council",
};

const QUOTES = [
  {
    quote:
      "Nammu has made our team more efficient and productive, with clear visibility into customer behavior and ordering patterns so our sales team can focus on selling. What stands out most is the team's understanding of the fast-paced seafood business. Nammu has helped bring our 98-year-old company into the future.",
    author: "Todd Rushing",
    role: "VP Sales, Stavis Seafoods",
    logo: stavisLogo,
  },
  {
    quote:
      "Working with the Nammu team has been a great experience. They took the time to understand our day-to-day sales needs and delivered a platform we use daily, with data that's easy to navigate and act on. We're grateful for the partnership and look forward to continuing to work together.",
    author: "Tiffany Walker",
    role: "Sales Manager, Stavis Seafoods",
    logo: stavisLogo,
  },
];

// Leads with the credible source: logo, then name + company/role. In seafood,
// who is vouching matters more than the wording of the quote.
const Author = ({ logo, company, author, role, logoHeight = 46, nameSize = "1.15rem" }) => (
  <div>
    <img
      src={logo}
      alt={company || author}
      style={{
        height: `${logoHeight}px`,
        maxWidth: "180px",
        objectFit: "contain",
        objectPosition: "left",
        display: "block",
        marginBottom: "16px",
      }}
    />
    <div style={{ fontWeight: 700, color: C.navy, fontSize: nameSize, lineHeight: 1.2 }}>
      {author}
    </div>
    <div style={{ color: C.slate, fontSize: "1rem", marginTop: "3px" }}>{role}</div>
  </div>
);

const Testimonials = () => {
  const isMobile = useIsMobile();

  const styles = {
    featured: {
      backgroundColor: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: "22px",
      boxShadow: "0 10px 36px rgba(9,20,47,0.07)",
      padding: isMobile ? "32px 26px" : "48px 56px",
      marginTop: "48px",
    },
    featuredQuote: {
      fontSize: "1.05rem",
      lineHeight: 1.6,
      color: C.slate,
      fontWeight: 400,
      margin: "22px 0 0",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "20px",
      marginTop: "20px",
    },
    card: {
      backgroundColor: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: "18px",
      padding: isMobile ? "26px 24px" : "32px 34px",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      boxSizing: "border-box",
    },
    cardQuote: {
      ...sharedStyles.typography.body,
      fontSize: "1.05rem",
      lineHeight: 1.6,
      color: C.slate,
      margin: "22px 0 0",
    },
  };

  return (
    <Section background={C.surface} id="testimonials">
      <SectionHeading
        eyebrow="Trusted in the industry"
        title="Built with the people who move seafood."
      />

      {/* Featured testimonial — lead with the source */}
      <Reveal>
        <div style={styles.featured}>
          <Author
            logo={FEATURED.logo}
            company={FEATURED.company}
            author={FEATURED.author}
            role={FEATURED.role}
            logoHeight={60}
            nameSize="1.4rem"
          />
          <p style={styles.featuredQuote}>{FEATURED.quote}</p>
        </div>
      </Reveal>

      {/* Supporting testimonials */}
      <div style={styles.grid}>
        {QUOTES.map((t, i) => (
          <Reveal key={t.author} delay={i * 80} style={{ height: "100%" }}>
            <div style={styles.card}>
              <Author
                logo={t.logo}
                company={t.company}
                author={t.author}
                role={t.role}
              />
              <p style={styles.cardQuote}>{t.quote}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
