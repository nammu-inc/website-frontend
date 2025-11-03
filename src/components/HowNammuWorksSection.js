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
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mq.matches);
    const handle = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [resetKey]);

  const carouselItems = [
    {
      title: "Planning",
      text: (
        <>
          Use real-time data to align your team, track trends, and guide
          strategy.
        </>
      ),
      image: Product1,
    },
    {
      title: "Execution",
      text: (
        <>
          Sell confidently with live inventory and smart product
          recommendations.
        </>
      ),
      image: Product4,
    },
    {
      title: "Automation",
      text: (
        <>
          Enable customers to order autonomously, freeing up time for
          higher-value tasks.
        </>
      ),
      image: Product2,
    },
  ];

  const styles = {
    section: {
      padding: `${sharedStyles.spacing.section.vertical} ${
        isMobile ? "30px" : sharedStyles.spacing.section.horizontal
      }`,
      backgroundColor: sharedStyles.colors.gray.light,
    },
    contentWrapper: {
      maxWidth: "1300px",
      margin: "0 auto",
    },
    title: {
      ...sharedStyles.typography.h2,
      color: sharedStyles.colors.primary.dark,
      textAlign: "center",
    },
    contentRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: sharedStyles.spacing.component.gap,
      alignItems: "stretch",
      marginBottom: "40px",
    },
    leftColumn: {
      flex: isMobile ? "0 0 auto" : "1",
      borderRadius: 0,
      overflow: "visible",
      boxShadow: "none",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: isMobile ? "center" : "flex-start",
      justifyContent: "center",
      minHeight: isMobile ? "200px" : "480px",
      transform: isMobile ? "rotate(90deg)" : "none",
      margin: isMobile ? "40px 0" : "0",
      width: isMobile ? "100%" : "auto",
    },
    portrait: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      aspectRatio: "3 / 4",
    },
    rightColumn: {
      flex: isMobile ? "0 0 auto" : "1",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      justifyContent: "center",
      width: isMobile ? "100%" : "auto",
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
    processCard: {
      flex: "1 1 0",
      minWidth: isMobile ? "auto" : "200px",
      maxWidth: "240px",
      padding: "24px 32px",
      textAlign: "center",
      backgroundColor: sharedStyles.colors.primary.light,
      position: "relative",
      clipPath: isMobile
        ? "none"
        : "polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%, 20px 50%)",
      borderRadius: isMobile ? "24px" : "0",
      border: isMobile
        ? `2px solid ${sharedStyles.colors.primary.light}`
        : "none",
      boxShadow: sharedStyles.elements.card.boxShadow,
    },
    processCardsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: isMobile ? "30px" : "0",
      flexDirection: isMobile ? "column" : "row",
      maxWidth: "1100px",
      margin: isMobile ? "32px auto" : "48px auto",
    },
    processCardText: {
      fontSize: "1rem",
      fontWeight: 500,
      color: sharedStyles.colors.text.dark,
      lineHeight: "1.5",
      margin: 0,
    },
    carouselCard: {
      borderRadius: sharedStyles.elements.card.borderRadius,
      boxShadow: sharedStyles.elements.card.boxShadow,
      backgroundColor: sharedStyles.colors.white,
      padding: "30px 56px",
      position: "relative",
      overflow: "hidden",
      minHeight: "170px",
    },
    stageCard: {
      borderRadius: sharedStyles.elements.card.borderRadius,
      boxShadow: sharedStyles.elements.card.boxShadow,
      backgroundColor: sharedStyles.colors.white,
      padding: "0",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "visible",
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    cardImageWrapper: {
      position: "relative",
      width: "100%",
      aspectRatio: "2",
      overflow: "hidden",
      borderTopLeftRadius: sharedStyles.elements.card.borderRadius,
      borderTopRightRadius: sharedStyles.elements.card.borderRadius,
    },
    cardImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
      display: "block",
      borderTopLeftRadius: sharedStyles.elements.card.borderRadius,
      borderTopRightRadius: sharedStyles.elements.card.borderRadius,
    },
    carouselTextCaption: {
      backgroundColor: sharedStyles.colors.primary.dark,
      color: sharedStyles.colors.white,
      padding: isMobile ? "12px 16px" : "16px 20px",
      ...sharedStyles.typography.body,
      fontSize: isMobile ? "0.95rem" : "1rem",
      lineHeight: 1.5,
      textAlign: "center",
      borderBottomLeftRadius: sharedStyles.elements.card.borderRadius,
      borderBottomRightRadius: sharedStyles.elements.card.borderRadius,
    },
    paginationDots: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
      marginTop: "16px",
    },
    paginationDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: sharedStyles.colors.white,
      border: `2px solid ${sharedStyles.colors.primary.light}`,
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    paginationDotActive: {
      backgroundColor: sharedStyles.colors.primary.light,
      transform: "scale(1.2)",
    },
    // removed carousel label row and separators
    carouselHeader: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.primary.dark,
      marginBottom: "10px",
      fontSize: "1.4rem",
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
      backgroundColor: sharedStyles.colors.white,
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
      backgroundColor: sharedStyles.colors.primary.dark,
      color: sharedStyles.colors.white,
      fontWeight: 600,
      minWidth: "100px",
      opacity: 1,
    },
    navButtonHover: {
      color: sharedStyles.colors.primary.dark,
    },
    cardArrow: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: sharedStyles.colors.white,
      border: `2px solid ${sharedStyles.colors.gray.light}`,
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      userSelect: "none",
      transition: "all 0.2s ease",
      zIndex: 10,
      opacity: 0.95,
    },
    cardArrowLeft: {
      left: isMobile ? "16px" : "-8px",
    },
    cardArrowRight: {
      right: isMobile ? "16px" : "-8px",
    },
    cardArrowHover: {
      backgroundColor: sharedStyles.colors.primary.light,
      transform: "translateY(-50%) scale(1.1)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
    cardArrowIcon: {
      fontSize: "1.5rem",
      color: sharedStyles.colors.primary.dark,
      fontWeight: "700",
    },
  };

  const handleNavClick = (index) => {
    setCurrentIndex(index);
    setResetKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
    setResetKey((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
    setResetKey((prev) => prev + 1);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <section style={styles.section}>
      <div style={styles.contentWrapper}>
        <h2 style={styles.title}>Purpose-built for seafood sales workflows.</h2>
        <div style={styles.processCardsContainer}>
          <div style={styles.processCard}>
            <p style={styles.processCardText}>
              Seamlessly integrates with your existing ERP
            </p>
          </div>
          <div style={styles.processCard}>
            <p style={styles.processCardText}>
              Transforms your data into intuitive insights
            </p>
          </div>
          <div style={styles.processCard}>
            <p style={styles.processCardText}>
              Supports every stage of the sales process
            </p>
          </div>
        </div>

        <div style={styles.contentRow}>
          <div style={styles.leftColumn}>
            <LeftGraphic isMobile={isMobile} />
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
                        sharedStyles.colors.primary.dark;
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
                  e.currentTarget.style.transform =
                    "translateY(-50%) scale(1.1)";
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
                  e.currentTarget.style.transform =
                    "translateY(-50%) scale(1.1)";
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
                <div style={styles.cardImageWrapper}>
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    style={styles.cardImage}
                  />
                </div>
                <div style={styles.carouselTextCaption}>{currentItem.text}</div>
              </div>
            </div>
            <div style={styles.paginationDots}>
              {carouselItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleNavClick(idx)}
                  style={{
                    ...styles.paginationDot,
                    ...(idx === currentIndex ? styles.paginationDotActive : {}),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowNammuWorksSection;

const LeftGraphic = ({ isMobile }) => {
  // Responsive SVG diagram: 5 left-stacked squares -> center circle -> right connector to Planning card
  const vb = { x: 90, y: 90, w: 720, h: 610 };
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
      viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMinYMid meet"
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
            stroke="#cbd5e1"
            strokeWidth="1.5"
            opacity="0.9"
            strokeLinecap="round"
          />
          <line
            x1="2"
            y1="5"
            x2="9"
            y2="3"
            stroke="#cbd5e1"
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
        const x2 = 800;
        const y2 = center.y;
        const d = `M ${x1},${y1} L ${x2},${y2}`;
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
              transform={
                isMobile
                  ? `rotate(-90 ${sq.x + sq.size / 2} ${sq.y + sq.size / 2})`
                  : ""
              }
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
          transform={isMobile ? `rotate(-90 ${center.x} ${center.y})` : ""}
        />
      </g>

      {/* bottom rectangles removed in new layout */}
    </svg>
  );
};
