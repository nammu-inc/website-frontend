import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set initial state
    setIsMobile(mediaQuery.matches);

    // Add event listener for viewport changes
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup event listener on unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div
      style={{
        ...styles.hero,
        backgroundImage: `url(${
          isMobile ? "mobileheroimage.jpg" : "heroimage.jpg"
        })`,
      }}
    >
      <div style={styles.logoContainer}>
        <img
          src="invertedlogo.png"
          alt="Nammu Logo"
          style={{
            ...styles.logo,
            height: isMobile ? "80px" : "120px",
          }}
        />
      </div>
      <p
        style={{
          ...styles.subtitle,
          fontSize: isMobile ? "1.5rem" : "2rem", // Adjust font size based on viewport
        }}
      >
        Transforming Food Distribution with AI
      </p>
      <div
        style={{
          ...styles.valueAdds,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div style={styles.valueAdd}>
          <h2 style={styles.valueTitle}>Streamline Key Operations</h2>
          <p style={styles.valueText}>
            Automate order entry, inventory updates, and product allocation,
            saving significant time and resources.
          </p>
        </div>
        <div style={styles.valueAdd}>
          <h2 style={styles.valueTitle}>Convert Data to Insights</h2>
          <p style={styles.valueText}>
            Provide real-time recommendations for pricing, sales, and purchasing
            decisions, driving efficiency and profit.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#333",
    position: "relative",
    backgroundBlendMode: "overlay",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },

  logoContainer: {
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "2rem",
    fontWeight: "300",
    marginBottom: "40px",
    color: "#fff",
    maxWidth: "800px",
    margin: "0 auto",
  },
  valueAdds: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "40px",
  },
  valueAdd: {
    flex: "1 1 calc(50% - 20px)",
    maxWidth: "450px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  valueTitle: {
    fontSize: "1.5rem",
    margin: "10px 0",
    fontWeight: "bold",
  },
  valueText: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
};

export default HeroSection;
