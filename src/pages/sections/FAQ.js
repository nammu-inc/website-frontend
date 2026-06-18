import React, { useState } from "react";
import { sharedStyles } from "../../styles";
import { Section, SectionHeading, Reveal } from "../../components/ui";

const C = sharedStyles.colors;

const FAQS = [
  {
    q: "What if we're not ready for a full platform?",
    a: "That's common in this industry. We also do workflow automation and custom builds without committing to a full platform.",
  },
  {
    q: "Which systems does Nammu integrate with?",
    a: "The systems seafood teams already run, including Microsoft Business Central, SAP, NetSuite, SeaSoft, NetYield, and QuickBooks, plus cold-storage partners like Lineage and AmeriCold. Using something else? We'll connect to it.",
  },
  {
    q: "How long does it take to get started?",
    a: "We move quickly. Where a typical ERP transition takes 9 to 12 months, most teams are up and running on Nammu in 1 month.",
  },
  {
    q: "Do we have to replace our ERP?",
    a: "No. Nammu layers on top of your existing ERP and delivers value without a migration.",
  },
  {
    q: "What makes Nammu seafood specific?",
    a: "Our focus on seafood goes beyond the companies we serve. The product handles the seafood-specific nuances generic software ignores, like catch weight, product transformations, and container building.",
  },
];

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.line}` }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "20px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            color: C.navy,
            letterSpacing: "-0.01em",
          }}
        >
          {q}
        </span>
        <span
          style={{
            fontSize: "1.5rem",
            color: C.accent,
            lineHeight: 1,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p
          style={{
            ...sharedStyles.typography.body,
            color: C.slate,
            margin: 0,
            padding: "0 4px 22px",
            maxWidth: "640px",
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  const styles = {
    wrap: {
      maxWidth: "760px",
      margin: "48px auto 0",
    },
  };

  return (
    <Section background={C.white} id="faq">
      <SectionHeading eyebrow="FAQ" title="Your common questions, answered." />
      <Reveal>
        <div style={styles.wrap}>
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
};

export default FAQ;
