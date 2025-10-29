import React, { useState } from "react";
import { sharedStyles } from "../styles";

const DemoRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch(
        `https://website-backend-blush.vercel.app/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "hello@nammu.ai",
            subject: `Demo Request from ${formData.name}`,
            data: formData,
          }),
        }
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Network response was not ok");
      }
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: isOpen ? "flex" : "none",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    content: {
      width: "90%",
      maxWidth: "560px",
      background: sharedStyles.colors.white,
      borderRadius: sharedStyles.elements.card.borderRadius,
      boxShadow: sharedStyles.elements.card.boxShadow,
      overflow: "hidden",
    },
    header: {
      padding: "16px 20px",
      borderBottom: "1px solid #eee",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      ...sharedStyles.typography.h3,
      margin: 0,
      color: sharedStyles.colors.primary.dark,
    },
    closeBtn: {
      background: "transparent",
      border: "none",
      fontSize: "1.4rem",
      cursor: "pointer",
      lineHeight: 1,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "20px",
    },
    group: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      textAlign: "left",
    },
    label: {
      fontWeight: 500,
      fontSize: sharedStyles.typography.small.fontSize,
      color: sharedStyles.colors.text.medium,
    },
    input: {
      ...sharedStyles.elements.input,
    },
    textarea: {
      ...sharedStyles.elements.input,
      minHeight: "100px",
      resize: "vertical",
    },
    submit: {
      ...sharedStyles.elements.button,
      backgroundColor: sharedStyles.colors.primary.dark,
      color: sharedStyles.colors.white,
      marginTop: "6px",
    },
    success: {
      backgroundColor: sharedStyles.colors.accent.successBg,
      color: sharedStyles.colors.accent.success,
      padding: "12px",
      borderRadius: "6px",
      textAlign: "center",
      fontWeight: 500,
    },
    error: {
      backgroundColor: "#FFEBEE",
      color: "#D32F2F",
      padding: "12px",
      borderRadius: "6px",
      textAlign: "center",
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.content} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h3 style={styles.title}>Request a Demo</h3>
          <button
            style={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.group}>
            <label style={styles.label} htmlFor="name">
              Full Name*
            </label>
            <input
              style={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.group}>
            <label style={styles.label} htmlFor="email">
              Email Address*
            </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.group}>
            <label style={styles.label} htmlFor="company">
              Company Name*
            </label>
            <input
              style={styles.input}
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.group}>
            <label style={styles.label} htmlFor="message">
              Tell us about your business
            </label>
            <textarea
              style={styles.textarea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What challenges are you looking to solve?"
            />
          </div>
          <button
            style={{
              ...styles.submit,
              ...(isSubmitting ? { opacity: 0.7, cursor: "not-allowed" } : {}),
            }}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send request"}
          </button>
          {submitStatus === "success" && (
            <div style={styles.success}>
              Thank you! Your request has been sent. We'll contact you within 1
              business day.
            </div>
          )}
          {submitStatus === "error" && (
            <div style={styles.error}>
              There was an error sending your request. Please try again or
              contact us at hello@nammu.ai.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DemoRequestModal;
