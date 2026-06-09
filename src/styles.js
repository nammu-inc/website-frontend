export const sharedStyles = {
  // Color palette
  // Modern tech / crisp: navy anchor + one desaturated accent + neutral grays.
  colors: {
    primary: {
      dark: "#09142f", // navy — headings, dark sections
      medium: "#1f7fc2", // accent (desaturated from old #209bdd)
      light: "#c0dffa", // accent-soft — tints, gradient stops
    },
    secondary: {
      dark: "#024149",
      medium: "#0d9aab", // teal — used sparingly
      light: "#cbf2f7",
    },
    // Semantic neutrals
    navy: "#09142f",
    accent: "#1f7fc2",
    accentSoft: "#c0dffa",
    teal: "#0d9aab",
    ink: "#1c2430", // body text
    slate: "#5a6573", // secondary text
    line: "#e6eaef", // hairlines / borders
    surface: "#f7f9fc", // off-white section background
    gray: {
      light: "#f7f9fc",
    },
    white: "#ffffff",
    text: {
      dark: "#1c2430",
      medium: "#3a4452",
      light: "#5a6573",
    },
    accentColors: {
      success: "#155724",
      successBg: "#d4edda",
    },
  },

  // Typography
  typography: {
    display: {
      fontSize: "3.5rem",
      fontWeight: "700",
      lineHeight: "1.08",
      letterSpacing: "-0.02em",
      marginBottom: "24px",
    },
    h1: {
      fontSize: "2.75rem",
      fontWeight: "700",
      lineHeight: "1.12",
      letterSpacing: "-0.02em",
      marginBottom: "24px",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "700",
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
      marginBottom: "16px",
    },
    h3: {
      fontSize: "1.4rem",
      fontWeight: "600",
      lineHeight: "1.3",
      letterSpacing: "-0.01em",
      marginBottom: "12px",
    },
    subtitle: {
      fontSize: "1.15rem",
      lineHeight: "1.6",
      marginBottom: "30px",
    },
    body: {
      fontSize: "1.05rem",
      lineHeight: "1.6",
    },
    small: {
      fontSize: "0.9rem",
      lineHeight: "1.5",
    },
    eyebrow: {
      fontSize: "0.85rem",
      fontWeight: "600",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },

  // Spacing
  spacing: {
    section: {
      vertical: "120px",
      horizontal: "160px",
    },
    component: {
      gap: "40px",
    },
    element: {
      padding: "30px",
    },
  },

  // Shared layout
  layout: {
    maxWidth: "1200px",
  },

  elements: {
    card: {
      borderRadius: "16px",
      boxShadow: "0 4px 16px rgba(9, 20, 47, 0.06)",
      backgroundColor: "#ffffff",
      border: "1px solid #e6eaef",
    },
    button: {
      padding: "13px 24px",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
      letterSpacing: "-0.01em",
    },
    input: {
      padding: "12px 15px",
      borderRadius: "8px",
      border: "1px solid #e6eaef",
      fontSize: "1rem",
      fontFamily: "inherit",
    },
  },

  breakpoints: {
    mobile: "(max-width: 900px)",
    widescreen: "(min-width: 1500px)",
  },
};
