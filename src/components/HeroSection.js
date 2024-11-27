import React from "react";

const HeroSection = () => (
  <div style={styles.hero}>
    <div style={styles.logoContainer}>
      <img src="logo.png" alt="Nammu Logo" style={styles.logo} />
    </div>
    <p style={styles.subtitle}>Transforming Food Distribution with AI</p>
    <div style={styles.valueAdds}>
      <div style={styles.valueAdd}>
        <h2 style={styles.valueTitle}>Streamline Key Operations</h2>
        <p style={styles.valueText}>
          Automate order entry, inventory updates, and product allocation,
          saving significant time and resources.
        </p>
      </div>
      <div style={styles.valueAdd}>
        <h2 style={styles.valueTitle}>Convert Data to Actionable Insights</h2>
        <p style={styles.valueText}>
          Provide real-time recommendations for pricing, sales, and purchasing
          decisions, driving efficiency and profit.
        </p>
      </div>
    </div>
  </div>
);

const styles = {
  hero: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#f4f4f9",
    color: "#333",
  },
  logoContainer: {
    marginBottom: "20px",
  },
  logo: {
    height: "120px", // Adjust as needed
  },
  subtitle: {
    fontSize: "2rem",
    fontWeight: "300",
    marginBottom: "40px",
    color: "#333",
    maxWidth: "800px",
    margin: "0 auto",
  },
  valueAdds: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
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
