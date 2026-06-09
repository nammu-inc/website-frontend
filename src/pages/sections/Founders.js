import React from "react";
import { sharedStyles } from "../../styles";
import { useIsMobile } from "../../hooks";
import { Section, SectionHeading, Reveal, Button } from "../../components/ui";
import { useDemo } from "../../components/DemoContext";
import founders1 from "../../assets/founders1.jpeg";
import founders2 from "../../assets/founders2.jpeg";
import founders3 from "../../assets/founders3.jpeg";
import founders4 from "../../assets/founders4.jpeg";
import founders5 from "../../assets/founders5.jpeg";
import founders6 from "../../assets/founders6.jpeg";

const C = sharedStyles.colors;

// Real founder photos from across the industry: expos, conferences, customers.
// founders4 is a tall full-body shot, so it anchors the collage as a vertical
// image; the rest tile around it (see DESKTOP_LAYOUT / MOBILE_LAYOUT below).
const FOUNDER_PHOTOS = [
  { src: founders4, alt: "Repping Nammu at a seafood industry event" },
  { src: founders1, alt: "Founders at Seafood Expo Global" },
  { src: founders2, alt: "With industry leaders" },
  { src: founders3, alt: "Founders on the show floor" },
  { src: founders5, alt: "Nammu sponsoring the NFI Global Seafood Market Conference" },
  { src: founders6, alt: "The Nammu team at a conference" },
];

// 8-column grid for finer control of the bottom row. Top: founders4 (vertical,
// 2 cols, both rows) + three 2-col cells. Bottom: founders5 and founders6 split
// the remaining 6 cols evenly (3 each). Fixed tracks keep every cell flush.
const DESKTOP_LAYOUT = [
  { gridColumn: "1 / 3", gridRow: "1 / 3" }, // founders4 (vertical)
  { gridColumn: "3 / 5", gridRow: "1" },
  { gridColumn: "5 / 7", gridRow: "1" },
  { gridColumn: "7 / 9", gridRow: "1" },
  { gridColumn: "3 / 6", gridRow: "2" },
  { gridColumn: "6 / 9", gridRow: "2" },
];

const MOBILE_LAYOUT = [
  { gridColumn: "1", gridRow: "1 / 3" }, // founders4 (vertical)
  { gridColumn: "2", gridRow: "1" },
  { gridColumn: "2", gridRow: "2" },
  { gridColumn: "1", gridRow: "3" },
  { gridColumn: "2", gridRow: "3" },
  { gridColumn: "1 / 3", gridRow: "4" },
];

const Founders = () => {
  const isMobile = useIsMobile();
  const openDemo = useDemo();

  const styles = {
    wrap: { textAlign: "center" },
    gallery: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(8, 1fr)",
      gridTemplateRows: isMobile ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
      // Fixed tracks guarantee every column/row is flush, regardless of each
      // photo's native aspect ratio.
      aspectRatio: isMobile ? "1 / 2" : "2 / 1",
      gap: "16px",
      marginTop: "44px",
    },
    galleryImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "12px",
      display: "block",
      border: `1px solid ${C.line}`,
      boxShadow: "0 8px 24px rgba(9,20,47,0.10)",
    },
  };

  const layout = isMobile ? MOBILE_LAYOUT : DESKTOP_LAYOUT;

  return (
    <Section background={C.surface} id="founders">
      <div style={styles.wrap}>
        <SectionHeading
          eyebrow="In the field"
          title="We're part of the seafood community."
          subtitle="We meet you where you are. Book a demo at the next event, or we'll come to you."
        />
        <Reveal>
          <div style={styles.gallery}>
            {FOUNDER_PHOTOS.map((p, i) => (
              <img
                key={i}
                src={p.src}
                alt={p.alt}
                style={{ ...styles.galleryImg, ...layout[i] }}
              />
            ))}
          </div>
        </Reveal>
        <div style={{ marginTop: "40px" }}>
          <Button variant="primary" size="lg" onClick={openDemo} arrow>
            Book a demo
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Founders;
