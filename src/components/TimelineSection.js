import React from "react";

const TimelineSection = () => (
  <div style={styles.timeline}>
    <h2 style={styles.title}>Our Timeline</h2>
    <div style={styles.columns}>
      <div style={styles.column}>
        <h3 style={styles.phaseTitle}>Phase 1: First Pilots</h3>
        <p style={styles.subheader}>Early 2025</p>
        <p style={styles.description}>
          Partnering with select distributors to refine our platform and prove
          its value.
        </p>
      </div>
      <div style={styles.column}>
        <h3 style={styles.phaseTitle}>Phase 2: Expand Pilots</h3>
        <p style={styles.subheader}>Late 2025</p>
        <p style={styles.description}>
          Broadening our reach to include more partners and enhance features
          based on feedback.
        </p>
      </div>
      <div style={styles.column}>
        <h3 style={styles.phaseTitle}>Phase 3: Launch Nammu</h3>
        <p style={styles.subheader}>2026</p>
        <p style={styles.description}>
          Officially bringing Nammu to market, empowering distributors to
          streamline operations.
        </p>
      </div>
    </div>
  </div>
);

const styles = {
  timeline: {
    padding: "50px 20px",
    backgroundColor: "#fff",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "30px",
  },
  columns: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  column: {
    flex: "1 1 calc(33.333% - 20px)", // Makes each column take up one-third of the available width
    maxWidth: "300px", // Optional: restrict column width for better readability
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  phaseTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#007bff",
  },
  subheader: {
    fontSize: "1.2rem",
    color: "#888",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default TimelineSection;
