import React from "react";

const ContactSection = () => (
  <div style={styles.contact}>
    <h2 style={styles.title}>Get in Touch</h2>
    <p>
      Email us at <a href="mailto:info@nammu.com">team@nammu.com</a>
    </p>
  </div>
);

const styles = {
  contact: {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
};

export default ContactSection;
