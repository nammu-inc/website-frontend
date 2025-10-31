import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles";
import BCLogo from "../assets/BC.png";
import SeaSoftLogo from "../assets/SeaSoft.png";
import SAPLogo from "../assets/SAP.png";
import NetSuiteLogo from "../assets/NetSuite.png";
import NetYieldLogo from "../assets/NetYield.png";
import Product1 from "../assets/Product1.png";
import Product4 from "../assets/Product4.png";
import Product2 from "../assets/Product2.png";

const HowNammuWorksSection = () => {
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
      text: (
        <>
          Keep your team aligned with real-time data to set targets, track
          trends and guide strategy.
        </>
      ),
      image: Product1,
    },
    {
      title: "Execution",
      text: (
        <>
          Sell confidently with instant access to live inventory and
          customer-specific product recommendations.
        </>
      ),
      image: Product4,
    },
    {
      title: "Automation",
      text: (
        <>
          Enable customers to order autonomously, freeing up sales reps for
          higher-value tasks.
        </>
      ),
      image: Product2,
    },
  ];

  const styles = {
    section: {
      padding: `${sharedStyles.spacing.section.vertical} ${
        isMobile ? "20px" : sharedStyles.spacing.section.horizontal
      }`,
      paddingBottom: "30px",
      backgroundColor: "transparent",
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
      borderRadius: 0,
      overflow: "visible",
      boxShadow: "none",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "59px",
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
      gap: "16px",
      justifyContent: "center",
    },
    bullets: {
      listStyle: "none",
      padding: 0,
      margin: "48px 0 0",
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: isMobile ? "wrap" : "nowrap",
    },
    bulletItem: {
      flex: "1 1 0",
      textAlign: "center",
      color: sharedStyles.colors.text.medium,
      ...sharedStyles.typography.body,
      fontSize: "1.25rem",
      lineHeight: 1.7,
      maxWidth: "280px",
    },
    arrow: {
      flexShrink: 0,
      color: sharedStyles.colors.primary.medium,
      fontSize: "3.3rem", // larger for prominence
      fontWeight: "500", // slightly bolder
      margin: "0 28px", // more space around
      opacity: 0.92, // slightly more visible
      lineHeight: 1.1,
      textShadow: "0 2px 12px #c0dffa99", // subtle glow for prominence
    },
    carouselCard: {
      borderRadius: sharedStyles.elements.card.borderRadius,
      boxShadow: sharedStyles.elements.card.boxShadow,
      backgroundColor: "transparent",
      padding: "30px 56px",
      position: "relative",
      overflow: "hidden",
      minHeight: "170px",
    },
    stageCard: {
      borderRadius: sharedStyles.elements.card.borderRadius,
      boxShadow: sharedStyles.elements.card.boxShadow,
      backgroundColor: "transparent",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    cardContent: {
      paddingLeft: "44px",
      paddingRight: "44px",
      display: "flex",
      flexDirection: "column",
    },
    cardImage: {
      width: "100%",
      height: "auto",
      maxHeight: "240px",
      objectFit: "contain",
      borderRadius: "8px",
      marginBottom: "16px",
    },
    // removed carousel label row and separators
    carouselHeader: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.primary.dark,
      marginBottom: "10px",
      fontSize: "1.4rem",
    },
    carouselText: {
      ...sharedStyles.typography.body,
      color: sharedStyles.colors.text.medium,
      lineHeight: 1.7,
      textAlign: "center",
      maxWidth: "60ch",
      margin: "0 auto",
    },
    carouselBody: {
      position: "relative",
      zIndex: 1,
    },
    navigationControls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "4px",
    },
    navButton: {
      padding: "8px 16px",
      borderRadius: "20px",
      border: "none",
      backgroundColor: "transparent",
      color: sharedStyles.colors.text.light,
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: 600,
      transition: "all 0.2s ease",
      minWidth: "100px",
      textAlign: "center",
      boxSizing: "border-box",
      opacity: 0.7,
    },
    navButtonActive: {
      backgroundColor: sharedStyles.colors.primary.light,
      color: sharedStyles.colors.primary.dark,
      fontWeight: 600,
      minWidth: "100px",
      opacity: 1,
    },
    navButtonHover: {
      color: sharedStyles.colors.primary.medium,
    },
    cardArrow: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: sharedStyles.colors.white,
      border: `1px solid ${sharedStyles.colors.primary.light}`,
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      userSelect: "none",
      transition: "all 0.2s ease",
      zIndex: 10,
    },
    cardArrowLeft: {
      left: "24px",
    },
    cardArrowRight: {
      right: "24px",
    },
    cardArrowHover: {
      backgroundColor: sharedStyles.colors.primary.light,
      transform: "translateY(-50%) scale(1.1)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
    cardArrowIcon: {
      fontSize: "1.2rem",
      color: sharedStyles.colors.primary.dark,
      fontWeight: "600",
    },
  };

  const handleNavClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>How Nammu Works</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          margin: "48px 0 0 0",
          flexWrap: "nowrap",
          width: "100%",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            minWidth: "230px",
            backgroundColor: "transparent",
            border: `2px solid ${sharedStyles.colors.primary.light}`,
            borderRadius: "18px",
            padding: "20px 22px",
            boxShadow: "0 2px 10px 0 rgba(32, 155, 221, 0.07)",
            display: "flex",
            alignItems: "center",
            fontSize: "1.03rem",
            fontWeight: 500,
            color: sharedStyles.colors.text.dark,
            letterSpacing: "0.01em",
            transition: "box-shadow 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          Seamlessly integrates with your existing ERP
        </div>
        <span
          style={{
            fontSize: "2.8rem",
            color: sharedStyles.colors.primary.medium,
            fontWeight: 700,
            margin: "0 0 8px 0",
            alignSelf: "center",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          &rsaquo;
        </span>
        <div
          style={{
            minWidth: "230px",
            backgroundColor: "transparent",
            border: `2px solid ${sharedStyles.colors.primary.light}`,
            borderRadius: "18px",
            padding: "20px 22px",
            boxShadow: "0 2px 10px 0 rgba(32, 155, 221, 0.07)",
            display: "flex",
            alignItems: "center",
            fontSize: "1.03rem",
            fontWeight: 500,
            color: sharedStyles.colors.text.dark,
            letterSpacing: "0.01em",
            transition: "box-shadow 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          Transforms your data into intuitive visuals and insights
        </div>
        <span
          style={{
            fontSize: "2.8rem",
            color: sharedStyles.colors.primary.medium,
            fontWeight: 700,
            margin: "0 0 8px 0",
            alignSelf: "center",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          &rsaquo;
        </span>
        <div
          style={{
            minWidth: "230px",
            backgroundColor: "transparent",
            border: `2px solid ${sharedStyles.colors.primary.light}`,
            borderRadius: "18px",
            padding: "20px 22px",
            boxShadow: "0 2px 10px 0 rgba(32, 155, 221, 0.07)",
            display: "flex",
            alignItems: "center",
            fontSize: "1.03rem",
            fontWeight: 500,
            color: sharedStyles.colors.text.dark,
            letterSpacing: "0.01em",
            transition: "box-shadow 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          Supports every stage of the sales process
        </div>
      </div>

      <div style={styles.contentRow}>
        <div style={styles.leftColumn}>
          <LeftGraphic />
        </div>
        <div style={styles.rightColumn}>
          <div style={styles.navigationControls}>
            {carouselItems.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(idx)}
                style={{
                  ...styles.navButton,
                  ...(idx === currentIndex ? styles.navButtonActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (idx !== currentIndex) {
                    e.currentTarget.style.color =
                      sharedStyles.colors.primary.medium;
                  }
                }}
                onMouseLeave={(e) => {
                  if (idx !== currentIndex) {
                    e.currentTarget.style.color =
                      sharedStyles.colors.text.light;
                  }
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div style={styles.stageCard}>
            <button
              aria-label="Previous"
              onClick={handlePrev}
              style={{ ...styles.cardArrow, ...styles.cardArrowLeft }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  sharedStyles.colors.primary.light;
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  sharedStyles.colors.white;
                e.currentTarget.style.transform = "translateY(-50%)";
              }}
            >
              <span style={styles.cardArrowIcon}>‹</span>
            </button>
            <button
              aria-label="Next"
              onClick={handleNext}
              style={{ ...styles.cardArrow, ...styles.cardArrowRight }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  sharedStyles.colors.primary.light;
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  sharedStyles.colors.white;
                e.currentTarget.style.transform = "translateY(-50%)";
              }}
            >
              <span style={styles.cardArrowIcon}>›</span>
            </button>
            <div style={styles.cardContent}>
              <img
                src={currentItem.image}
                alt={currentItem.title}
                style={styles.cardImage}
              />
              <div style={styles.carouselText}>{currentItem.text}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowNammuWorksSection;

const LeftGraphic = () => {
  // Responsive SVG diagram: 5 left-stacked squares -> center circle -> right connector to Planning card
  const vb = { w: 1000, h: 800 };
  // Move top and bottom left column squares halfway right toward the right column (x: 190, midpoint of 120 and 260)
  const topSquares = [
    { x: 190, y: 120, size: 110 }, // Adjusted: halfway between 120 (left) and 260 (right)
    { x: 120, y: 340, size: 110 }, // Left column, middle (unchanged)
    { x: 190, y: 560, size: 110 }, // Adjusted: halfway between 120 (left) and 260 (right)
    { x: 260, y: 265, size: 110 }, // Right column, top (centered around y=400)
    { x: 260, y: 425, size: 110 }, // Right column, bottom (centered around y=400)
  ];
  const center = { x: 620, y: 400, r: 70 };

  // Simple staggered delays only (uniform cadence)

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
      <style>
        {`
          @keyframes nmFlow { to { stroke-dashoffset: -180; } }
          .nm-flow { animation: nmFlow 3s linear infinite; }
        `}
      </style>
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.08" />
        </filter>
        <linearGradient id="nodeFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c0dffa" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          {/* Only two lines, no polygon, for an "open" arrow end */}
          <line
            x1="2"
            y1="1"
            x2="9"
            y2="3"
            stroke="#209bdd"
            strokeWidth="1.5"
            opacity="0.9"
            strokeLinecap="round"
          />
          <line
            x1="2"
            y1="5"
            x2="9"
            y2="3"
            stroke="#209bdd"
            strokeWidth="1.5"
            opacity="0.9"
            strokeLinecap="round"
          />
        </marker>

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
      </defs>

      {/* Flowing connectors from left squares to center (cubic Béziers) */}
      {topSquares.map((sq, idx) => {
        const x1 = sq.x + sq.size; // right edge of square
        const y1 = sq.y + sq.size / 2;
        const x2 = center.x - center.r; // left edge of circle
        const y2 = center.y;
        const midX = (x1 + x2) / 2;
        const c1x = midX - 60;
        const c1y = y1;
        const c2x = midX + 60;
        const c2y = y2;
        const d = `M ${x1},${y1} C ${c1x},${c1y} ${c2x},${c2y} ${x2},${y2}`;
        return (
          <g key={`t-${idx}`}>
            <path
              d={d}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d={d}
              fill="none"
              stroke="#209bdd"
              strokeOpacity="0.7"
              strokeWidth="4"
              strokeLinecap="round"
              className="nm-flow"
              style={{
                strokeDasharray: "28 160",
                strokeDashoffset: 0,
                animationDelay: `${idx * 0.25}s`,
              }}
            />
          </g>
        );
      })}

      {/* Connector from center circle to right edge (toward Planning card) */}
      {(() => {
        const x1 = center.x + center.r;
        const y1 = center.y;
        const x2 = 950;
        const y2 = center.y;
        const d = `M ${x1},${y1} L ${x2},${y2}`;
        // Arrowhead paths that extend from the endpoint
        const arrowLeft = `M ${x2 - 8},${y2 - 4} L ${x2},${y2}`;
        const arrowRight = `M ${x2 - 8},${y2 + 4} L ${x2},${y2}`;
        return (
          <g>
            <path
              d={d}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
            />
            <path
              d={d}
              fill="none"
              stroke="#209bdd"
              strokeOpacity="0.7"
              strokeWidth="4"
              strokeLinecap="round"
              className="nm-flow"
              style={{
                strokeDasharray: "28 160",
                strokeDashoffset: 0,
                animationDelay: `0.6s`,
              }}
            />
            {/* Animated arrowhead paths that flow with the animation */}
            <path
              d={arrowLeft}
              fill="none"
              stroke="#209bdd"
              strokeWidth="1.5"
              strokeOpacity="0.9"
              strokeLinecap="round"
              className="nm-flow"
              style={{
                strokeDasharray: "4 4",
                strokeDashoffset: 0,
                animationDelay: `0.6s`,
              }}
            />
            <path
              d={arrowRight}
              fill="none"
              stroke="#209bdd"
              strokeWidth="1.5"
              strokeOpacity="0.9"
              strokeLinecap="round"
              className="nm-flow"
              style={{
                strokeDasharray: "4 4",
                strokeDashoffset: 0,
                animationDelay: `0.6s`,
              }}
            />
          </g>
        );
      })()}

      {/* Top squares (with logos) */}
      {topSquares.map((sq, idx) => {
        // Map logos: 0=BC, 1=SeaSoft, 2=SAP, 3=NetSuite, 4=NetYield (fallback to /logo.png if missing)
        const topImages = [
          BCLogo,
          SeaSoftLogo,
          SAPLogo,
          NetSuiteLogo,
          NetYieldLogo,
        ];
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
        <circle
          cx={center.x}
          cy={center.y}
          r={center.r}
          fill="url(#nodeFill)"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        <image
          href="/logo192.png"
          x={center.x - center.r + 22}
          y={center.y - center.r + 22}
          width={center.r * 2 - 44}
          height={center.r * 2 - 44}
          preserveAspectRatio="xMidYMid meet"
          clipPath="url(#clip-center)"
        />
      </g>

      {/* bottom rectangles removed in new layout */}
    </svg>
  );
};
