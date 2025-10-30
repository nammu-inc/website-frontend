import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles";
import BCLogo from "../assets/BC.png";
import SeaSoftLogo from "../assets/SeaSoft.png";
import SAPLogo from "../assets/SAP.png";
import NetSuiteLogo from "../assets/NetSuite.png";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product4 from "../assets/Product4.png";

const TeamEmpowerSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mq.matches);
    const handle = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  const carouselItems = [
    {
      title: "Planning",
      text:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    },
    {
      title: "Execution",
      text:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    },
    {
      title: "Automation",
      text:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    },
  ];

  const styles = {
    section: {
      padding: `${sharedStyles.spacing.section.vertical} ${
        isMobile ? "20px" : sharedStyles.spacing.section.horizontal
      }`,
      backgroundColor: sharedStyles.colors.white,
      margin: "0 auto",
    },
    title: {
      ...sharedStyles.typography.h2,
      color: sharedStyles.colors.primary.dark,
      textAlign: "center",
      marginBottom: "40px",
    },
    contentRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: sharedStyles.spacing.component.gap,
      alignItems: "stretch",
    },
    leftColumn: {
      flex: "1 1 45%",
      borderRadius: sharedStyles.elements.card.borderRadius,
      overflow: "hidden",
      boxShadow: sharedStyles.elements.card.boxShadow,
      backgroundColor: sharedStyles.colors.gray.light,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: isMobile ? "320px" : "480px",
    },
    portrait: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      aspectRatio: "3 / 4",
    },
    rightColumn: {
      flex: "1 1 55%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      justifyContent: "space-between",
    },
    bullets: {
      listStyle: "none",
      padding: 0,
      margin: "20px 0 34px",
      display: "flex",
      flexDirection: "column",
      gap: "28px",
    },
    bulletItem: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
      color: sharedStyles.colors.text.medium,
      ...sharedStyles.typography.body,
      fontSize: "1.15rem",
      lineHeight: 1.6,
    },
    bulletDot: {
      width: "10px",
      height: "10px",
      marginTop: "8px",
      borderRadius: "50%",
      backgroundColor: sharedStyles.colors.primary.medium,
      flex: "0 0 10px",
    },
    carouselCard: {
      borderRadius: sharedStyles.elements.card.borderRadius,
      boxShadow: sharedStyles.elements.card.boxShadow,
      backgroundColor: sharedStyles.elements.card.backgroundColor,
      padding: "30px 56px",
      position: "relative",
      overflow: "hidden",
      minHeight: "170px",
    },
    carouselTopRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "18px",
    },
    carouselLabels: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: sharedStyles.colors.text.light,
      ...sharedStyles.typography.small,
      flexWrap: "nowrap",
    },
    labelItem: (active) => ({
      color: active
        ? sharedStyles.colors.primary.dark
        : sharedStyles.colors.text.light,
      fontWeight: active ? 700 : 500,
      whiteSpace: "nowrap",
      cursor: "default",
      padding: active ? "6px 10px" : "6px 10px",
      borderRadius: "999px",
      backgroundColor: active ? sharedStyles.colors.primary.light : "transparent",
    }),
    dotSeparator: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: sharedStyles.colors.text.light,
      opacity: 0.8,
      display: "inline-block",
    },
    stepIndicator: {
      ...sharedStyles.typography.small,
      color: sharedStyles.colors.text.light,
      whiteSpace: "nowrap",
      marginLeft: "12px",
    },
    carouselHeader: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.primary.dark,
      marginBottom: "10px",
    },
    carouselText: {
      ...sharedStyles.typography.body,
      color: sharedStyles.colors.text.medium,
      lineHeight: 1.7,
      marginTop: "6px",
      maxWidth: "60ch",
    },
    carouselBody: {
      position: "relative",
      zIndex: 1,
    },
    navButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: sharedStyles.colors.white,
      border: "1px solid #ddd",
      width: "36px",
      height: "36px",
      borderRadius: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      userSelect: "none",
      zIndex: 2,
    },
    navPrev: {
      left: "12px",
    },
    navNext: {
      right: "12px",
    },
    navArrow: {
      fontSize: "18px",
      color: sharedStyles.colors.primary.dark,
      lineHeight: 1,
    },
  };

  const goPrev = () =>
    setCurrentIndex((i) => (i <= 0 ? 0 : i - 1));
  const goNext = () =>
    setCurrentIndex((i) => (i >= 2 ? 2 : i + 1));

  const { title, text } = carouselItems[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === 2;
  const stepLabel = `${currentIndex + 1}/3`;

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>
        Nammu empowers every member of your team
        <br />
        to perform at their best.
      </h2>
      <div style={styles.contentRow}>
        <div style={styles.leftColumn}>
          <LeftGraphic />
        </div>
        <div style={styles.rightColumn}>
          <ul style={styles.bullets}>
            <li style={styles.bulletItem}>
              <span style={styles.bulletDot} />
              <span>Seamlessly integrates with your existing ERP</span>
            </li>
            <li style={styles.bulletItem}>
              <span style={styles.bulletDot} />
              <span>
                Transforms your data into intuitive visuals and actionable insights
              </span>
            </li>
            <li style={styles.bulletItem}>
              <span style={styles.bulletDot} />
              <span>Supports every stage of the sales process</span>
            </li>
          </ul>

          <div style={styles.carouselCard}>
            <div style={styles.carouselTopRow}>
              <div style={styles.carouselLabels}>
                <span style={styles.labelItem(currentIndex === 0)}>Planning</span>
                <span style={styles.dotSeparator} />
                <span style={styles.labelItem(currentIndex === 1)}>Execution</span>
                <span style={styles.dotSeparator} />
                <span style={styles.labelItem(currentIndex === 2)}>Automation</span>
              </div>
              <span style={styles.stepIndicator}>{stepLabel}</span>
            </div>
            {!isFirst && (
              <button
                aria-label="Previous"
                onClick={goPrev}
                style={{ ...styles.navButton, ...styles.navPrev }}
              >
                <span style={styles.navArrow}>‹</span>
              </button>
            )}
            {!isLast && (
              <button
                aria-label="Next"
                onClick={goNext}
                style={{ ...styles.navButton, ...styles.navNext }}
              >
                <span style={styles.navArrow}>›</span>
              </button>
            )}

            <div style={styles.carouselBody}>
              <div style={styles.carouselText}>{text}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamEmpowerSection;

const LeftGraphic = () => {
  // Responsive SVG diagram: 4 top squares -> center circle -> 3 bottom rectangles
  const vb = { w: 1000, h: 800 };
  const topSquares = [
    { x: 120, y: 90, size: 110 },
    { x: 330, y: 90, size: 110 },
    { x: 540, y: 90, size: 110 },
    { x: 750, y: 90, size: 110 },
  ];
  const center = { x: 500, y: 380, r: 58 };
  const bottomY = 620; // unified vertical position, slightly closer to center
  // Even horizontal spacing across 1000 viewBox width:
  // widths: 220, 240, 220 → total 680; gaps (left, between, between, right) all 80
  const bottomRects = [
    { x: 80, y: bottomY, w: 220, h: 120, rx: 12 }, // left
    { x: 380, y: bottomY, w: 240, h: 120, rx: 12 }, // middle
    { x: 700, y: bottomY, w: 220, h: 120, rx: 12 }, // right
  ];

  return (
    <svg
      role="img"
      aria-label="Data flow graphic"
      viewBox={`0 0 ${vb.w} ${vb.h}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block" }}
    >
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.08" />
        </filter>
        <linearGradient id="nodeFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c0dffa" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        {/* Clip paths for top squares (rounded) */}
        {topSquares.map((sq, idx) => (
          <clipPath id={`clip-top-${idx}`} key={`clip-top-${idx}`}>
            <rect x={sq.x} y={sq.y} width={sq.size} height={sq.size} rx={12} />
          </clipPath>
        ))}

        {/* Clip path for center circle */}
        <clipPath id="clip-center">
          <circle cx={center.x} cy={center.y} r={center.r} />
        </clipPath>

        {/* Clip paths for bottom rectangles (rounded) */}
        {bottomRects.map((br, idx) => (
          <clipPath id={`clip-bottom-${idx}`} key={`clip-bottom-${idx}`}>
            <rect x={br.x} y={br.y} width={br.w} height={br.h} rx={br.rx} />
          </clipPath>
        ))}
      </defs>

      {/* Flowing connectors from top squares to center (cubic Béziers) */}
      {topSquares.map((sq, idx) => {
        const x1 = sq.x + sq.size / 2;
        const y1 = sq.y + sq.size;
        const x2 = center.x;
        const y2 = center.y - center.r;
        const midY = (y1 + y2) / 2;
        const c1x = x1;
        const c1y = midY - 40; // pull upward a bit
        const c2x = x2;
        const c2y = midY + 40; // pull downward toward center
        const d = `M ${x1},${y1} C ${c1x},${c1y} ${c2x},${c2y} ${x2},${y2}`;
        return (
          <path
            key={`t-${idx}`}
            d={d}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}

      {/* Flowing connectors from center to bottom rectangles (cubic Béziers) */}
      {bottomRects.map((br, idx) => {
        const x1 = center.x;
        const y1 = center.y + center.r;
        const x2 = br.x + br.w / 2;
        const y2 = br.y;
        const midY = (y1 + y2) / 2;
        const horizontalPull = (x2 - x1) * 0.25; // subtle horizontal curve
        const c1x = x1 + horizontalPull;
        const c1y = midY - 40;
        const c2x = x2 - horizontalPull;
        const c2y = midY + 40;
        const d = `M ${x1},${y1} C ${c1x},${c1y} ${c2x},${c2y} ${x2},${y2}`;
        return (
          <path
            key={`b-${idx}`}
            d={d}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}

      {/* Top squares (with logos) */}
      {topSquares.map((sq, idx) => {
        // Map logos: 0=BC, 1=SeaSoft, 2=SAP, 3=NetSuite (fallback to /logo.png if missing)
        const topImages = [BCLogo, SeaSoftLogo, SAPLogo, NetSuiteLogo];
        const href = topImages[idx] || "/logo.png";
        const pad = 14; // inset padding to keep aspect logos comfortable
        return (
          <g key={`sq-${idx}`} filter="url(#softShadow)">
            <rect
              x={sq.x}
              y={sq.y}
              width={sq.size}
              height={sq.size}
              rx={12}
              fill="url(#nodeFill)"
              stroke="#e5e7eb"
            />
            <image
              href={href}
              x={sq.x + pad}
              y={sq.y + pad}
              width={sq.size - pad * 2}
              height={sq.size - pad * 2}
              preserveAspectRatio="xMidYMid meet"
              clipPath={`url(#clip-top-${idx})`}
            />
          </g>
        );
      })}

      {/* Center circle with logo192 (padded) */}
      <g filter="url(#softShadow)">
        <circle cx={center.x} cy={center.y} r={center.r} fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
        <image
          href="/logo192.png"
          x={center.x - center.r + 14}
          y={center.y - center.r + 14}
          width={center.r * 2 - 28}
          height={center.r * 2 - 28}
          preserveAspectRatio="xMidYMid meet"
          clipPath="url(#clip-center)"
        />
      </g>

      {/* Bottom rectangles (with product images + labels underneath) */}
      {bottomRects.map((br, idx) => {
        // Map images (order request): left=Product1, middle=Product4, right=Product2
        const productImages = [Product1, Product4, Product2];
        const href = productImages[idx] || Product1;
        const bottomLabels = ["Planning", "Execution", "Automation"];
        return (
          <g key={`br-${idx}`} filter="url(#softShadow)">
            <rect
              x={br.x}
              y={br.y}
              width={br.w}
              height={br.h}
              rx={br.rx}
              fill="#ffffff"
              stroke="#e5e7eb"
            />
            <image
              href={href}
              x={br.x}
              y={br.y}
              width={br.w}
              height={br.h}
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#clip-bottom-${idx})`}
            />
            {/* Label centered under each rectangle */}
            <text
              x={br.x + br.w / 2}
              y={br.y + br.h + 22}
              textAnchor="middle"
              fill="#09142f"
              fontSize="16"
              fontWeight="600"
            >
              {bottomLabels[idx]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};


