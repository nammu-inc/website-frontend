import React, { useState } from "react";
import { sharedStyles } from "../styles";
import { useIsMobile } from "../hooks";
import { Button } from "./ui";

const C = sharedStyles.colors;

// Replace with your booking page link (e.g. Calendly, Cal.com, etc.)
const BOOKING_PAGE_URL = "https://calendar.app.google/7euKD4X9tD61rPTf9";

const DemoRequestModal = ({ isOpen, onClose }) => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        },
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Network response was not ok");
      }
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
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
      background: "rgba(9,20,47,0.55)",
      backdropFilter: "blur(5px)",
      WebkitBackdropFilter: "blur(5px)",
      display: isOpen ? "flex" : "none",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2000,
      padding: "20px",
    },
    content: {
      position: "relative",
      width: "100%",
      maxWidth: "480px",
      maxHeight: "92vh",
      overflowY: "auto",
      background: C.white,
      borderRadius: "20px",
      boxShadow: "0 40px 90px rgba(9,20,47,0.4)",
      padding: isMobile ? "30px 24px 28px" : "36px 36px 32px",
      animation: "nm-modal-in 0.26s cubic-bezier(.2,.7,.2,1) both",
    },
    closeBtn: {
      position: "absolute",
      top: "16px",
      right: "16px",
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      background: C.surface,
      border: `1px solid ${C.line}`,
      color: C.slate,
      fontSize: "1.25rem",
      lineHeight: 1,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s ease",
    },
    title: {
      ...sharedStyles.typography.h3,
      color: C.navy,
      fontSize: "1.6rem",
      margin: "0 0 4px",
    },
    sub: {
      ...sharedStyles.typography.small,
      color: C.slate,
      margin: "0 0 24px",
    },
    form: { display: "flex", flexDirection: "column", gap: "14px" },
    row: {
      display: "flex",
      gap: "12px",
      flexDirection: isMobile ? "column" : "row",
    },
    group: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      textAlign: "left",
      flex: 1,
      minWidth: 0,
    },
    label: { fontWeight: 600, fontSize: "0.82rem", color: C.ink },
    bookRow: {
      marginTop: "18px",
      paddingTop: "18px",
      borderTop: `1px solid ${C.line}`,
      textAlign: "center",
      fontSize: "0.92rem",
      color: C.slate,
    },
    bookLink: {
      color: C.accent,
      fontWeight: 600,
      textDecoration: "none",
      whiteSpace: "nowrap",
    },
    success: {
      backgroundColor: C.accentColors.successBg,
      color: C.accentColors.success,
      padding: "14px",
      borderRadius: "10px",
      textAlign: "center",
      fontWeight: 500,
    },
    error: {
      backgroundColor: "#FDECEC",
      color: "#C0392B",
      padding: "14px",
      borderRadius: "10px",
      textAlign: "center",
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <style>{`
        @keyframes nm-modal-in {
          from { opacity: 0; transform: translateY(14px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .nm-modal input, .nm-modal textarea {
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid ${C.line};
          font-size: 1rem;
          font-family: inherit;
          color: ${C.ink};
          background: ${C.white};
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .nm-modal textarea { min-height: 80px; resize: vertical; }
        .nm-modal input:focus, .nm-modal textarea:focus {
          outline: none;
          border-color: ${C.accent};
          box-shadow: 0 0 0 3px rgba(31,127,194,0.16);
        }
        .nm-modal input::placeholder, .nm-modal textarea::placeholder { color: #9aa4b1; }
        @media (prefers-reduced-motion: reduce) { .nm-modal { animation: none !important; } }
      `}</style>

      <div
        className="nm-modal"
        style={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <h3 style={styles.title}>Book a demo</h3>
        <p style={styles.sub}>
          We'll be in touch within one business day.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <div style={styles.group}>
              <label style={styles.label} htmlFor="name">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.group}>
              <label style={styles.label} htmlFor="company">
                Company Name*
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.group}>
              <label style={styles.label} htmlFor="email">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.group}>
              <label style={styles.label} htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={styles.group}>
            <label style={styles.label} htmlFor="message">
              What problems are you hoping to solve?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button
            variant="accent"
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              marginTop: "4px",
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Sending..." : "Request demo"}
          </Button>

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

        <div style={styles.bookRow}>
          Prefer to pick a time?{" "}
          <a
            href={BOOKING_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.bookLink}
          >
            Book a meeting →
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoRequestModal;
