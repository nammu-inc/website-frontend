export const sharedStyles = {
  // Color palette
  colors: {
    primary: {
      dark: "#09142f",
      medium: "#209bdd",
      light: "#c0dffa",
    },
    secondary: {
      dark: "#024149",
      medium: "#0d9aab",
      light: "#cbf2f7",
    },
    gray: {
      light: "#e9ecef",
    },
    white: "#ffffff",
    text: {
      dark: "#333333",
      medium: "#444444",
      light: "#555555",
    },
    accent: {
      success: "#155724",
      successBg: "#d4edda",
    },
  },

  // Typography
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: "600",
      lineHeight: "1.2",
      marginBottom: "40px",
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: "600",
      lineHeight: "1.3",
      marginBottom: "20px",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "600",
      lineHeight: "1.3",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "1.2rem",
      lineHeight: "1.6",
      marginBottom: "30px",
    },
    body: {
      fontSize: "1.05rem",
      lineHeight: "1.5",
    },
    small: {
      fontSize: "0.9rem",
      lineHeight: "1.4",
    },
  },

  // Spacing
  spacing: {
    section: {
      vertical: "60px",
      horizontal: "160px",
    },
    component: {
      gap: "40px",
    },
    element: {
      padding: "30px",
    },
  },

  elements: {
    card: {
      borderRadius: "10px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
      backgroundColor: "#ffffff",
    },
    button: {
      padding: "14px 24px",
      borderRadius: "6px",
      fontSize: "1rem",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    input: {
      padding: "12px 15px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      fontSize: "1rem",
      fontFamily: "inherit",
    },
  },

  breakpoints: {
    mobile: "(max-width: 768px)",
    widescreen: "(min-width: 1400px)",
  },
};
