import React from "react";
import { sharedStyles } from "../../styles";
import { Section, SectionHeading, Reveal, Button } from "../../components/ui";
import { useDemo } from "../../components/DemoContext";

const C = sharedStyles.colors;

// Mid-scroll conversion band: after the viewer has seen the capabilities, this
// continues the "we meet you where you are / many ways to work with us" narrative
// rather than re-pitching a fixed demo (we already say "Book a Demo" in the nav
// and hero). The framing is consultative — tell us your problem, we'll figure out
// what fits — so it reads as an open conversation, not "watch this one product."
// Kept light (soft accent tint, not a hard navy block) so it's a gentle divider.
const CTA = () => {
  const openDemo = useDemo();

  return (
    <Section
      background={C.surface}
      style={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        background: "linear-gradient(120deg, #eef5fc 0%, #e7f0fa 100%)",
        borderTop: `1px solid ${C.line}`,
        borderBottom: `1px solid ${C.line}`,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "min(760px, 88%)",
          height: "360px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(ellipse at center, ${C.white} 0%, transparent 70%)`,
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
      <Reveal style={{ position: "relative" }}>
        <SectionHeading
          eyebrow="Work with us"
          title="Let's find what fits your operation."
          subtitle="Tell us how your business runs today, and we'll find where we can help most."
        />
        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <Button variant="accent" size="lg" arrow onClick={openDemo}>
            Let's talk
          </Button>
        </div>
      </Reveal>
    </Section>
  );
};

export default CTA;
