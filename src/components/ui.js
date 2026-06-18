import React from "react";
import { Link } from "react-router-dom";
import { sharedStyles } from "../styles";
import { useIsMobile, useReveal } from "../hooks";

const C = sharedStyles.colors;

// Section: full-bleed band with consistent vertical rhythm and optional background.
export const Section = ({ children, background = C.white, style = {}, id }) => {
  const isMobile = useIsMobile();
  return (
    <section
      id={id}
      style={{
        padding: `${isMobile ? "72px" : sharedStyles.spacing.section.vertical} ${
          isMobile ? "24px" : "40px"
        }`,
        backgroundColor: background,
        ...style,
      }}
    >
      <div style={{ maxWidth: sharedStyles.layout.maxWidth, margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
};

// Reveal: wraps children in a scroll-triggered fade/slide.
export const Reveal = ({ children, delay = 0, style = {} }) => {
  const [ref, revealStyle] = useReveal(delay);
  return (
    <div ref={ref} style={{ ...revealStyle, ...style }}>
      {children}
    </div>
  );
};

export const Eyebrow = ({ children, color = C.accent, style = {} }) => (
  <div style={{ ...sharedStyles.typography.eyebrow, color, ...style }}>
    {children}
  </div>
);

// SectionHeading: centered eyebrow + title + optional subtitle.
export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  style = {},
}) => (
  <div
    style={{
      textAlign: align,
      maxWidth: align === "center" ? "760px" : "none",
      margin: align === "center" ? "0 auto" : "0",
      ...style,
    }}
  >
    {eyebrow && (
      <Eyebrow color={light ? C.accentSoft : C.accent} style={{ marginBottom: "14px" }}>
        {eyebrow}
      </Eyebrow>
    )}
    <h2
      style={{
        ...sharedStyles.typography.h2,
        fontSize: "clamp(1.65rem, 4.2vw, 2.1rem)",
        color: light ? C.white : C.navy,
        margin: 0,
      }}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        style={{
          ...sharedStyles.typography.subtitle,
          color: light ? "rgba(255,255,255,0.78)" : C.slate,
          margin: "16px auto 0",
          maxWidth: "680px",
          marginBottom: 0,
        }}
      >
        {subtitle}
      </p>
    )}
  </div>
);

// PageHero: the top band of a dedicated (non-home) page — eyebrow + big title +
// subtitle over the same restrained light gradient as the home hero.
export const PageHero = ({ eyebrow, title, subtitle, children }) => {
  const isMobile = useIsMobile();
  return (
    <section
      style={{
        background: `linear-gradient(160deg, ${C.accentSoft} 0%, ${C.surface} 52%, ${C.white} 100%)`,
        padding: isMobile
          ? "clamp(56px, 11vw, 76px) 24px clamp(48px, 9vw, 64px)"
          : "clamp(88px, 9vw, 120px) 40px clamp(72px, 8vw, 96px)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        {eyebrow && (
          <Eyebrow style={{ marginBottom: "16px" }}>{eyebrow}</Eyebrow>
        )}
        <h1
          style={{
            ...sharedStyles.typography.display,
            fontSize: isMobile
              ? "clamp(2.1rem, 9vw, 2.9rem)"
              : "clamp(2.6rem, 4.4vw, 3.5rem)",
            color: C.navy,
            margin: 0,
            textWrap: "balance",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              ...sharedStyles.typography.subtitle,
              fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
              color: C.slate,
              margin: "20px auto 0",
              maxWidth: "640px",
              textWrap: "pretty",
            }}
          >
            {subtitle}
          </p>
        )}
        {children && <div style={{ marginTop: "32px" }}>{children}</div>}
      </div>
    </section>
  );
};

// Button: crisp primary / secondary actions.
export const Button = ({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  onClick,
  href,
  to,
  style = {},
  ...rest
}) => {
  const [hover, setHover] = React.useState(false);

  const variants = {
    primary: {
      base: { backgroundColor: C.navy, color: C.white, border: "none" },
      hover: {
        backgroundColor: C.accent,
        transform: "translateY(-1px)",
        boxShadow: "0 8px 20px rgba(9,20,47,0.16)",
      },
    },
    accent: {
      base: { backgroundColor: C.accent, color: C.white, border: "none" },
      hover: {
        backgroundColor: "#1a6ea8",
        transform: "translateY(-1px)",
        boxShadow: "0 8px 20px rgba(31,127,194,0.28)",
      },
    },
    secondary: {
      base: {
        backgroundColor: "transparent",
        color: C.navy,
        border: `1px solid ${C.line}`,
      },
      hover: {
        backgroundColor: C.surface,
        borderColor: C.slate,
        transform: "translateY(-1px)",
      },
    },
    ghostLight: {
      base: {
        backgroundColor: "transparent",
        color: C.white,
        border: "1px solid rgba(255,255,255,0.4)",
      },
      hover: {
        backgroundColor: "rgba(255,255,255,0.1)",
        borderColor: C.white,
      },
    },
  };

  const v = variants[variant] || variants.primary;
  const sizeStyle =
    size === "lg" ? { padding: "16px 30px", fontSize: "1.08rem" } : {};
  const merged = {
    ...sharedStyles.elements.button,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    textDecoration: "none",
    ...v.base,
    ...sizeStyle,
    ...(hover ? v.hover : {}),
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            marginLeft: "9px",
            transform: hover ? "translateX(4px)" : "none",
            transition: "transform 0.2s ease",
          }}
        >
          →
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} style={merged} {...handlers} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} style={merged} {...handlers} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} style={merged} {...handlers} {...rest}>
      {content}
    </button>
  );
};
