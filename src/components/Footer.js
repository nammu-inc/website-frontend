import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sharedStyles } from "../styles";
import { useIsMobile } from "../hooks";

const C = sharedStyles.colors;

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Footer = () => {
  const isMobile = useIsMobile();
  const year = new Date().getFullYear();
  const [hover, setHover] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
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
            subject: `Message from ${formData.name}`,
            data: formData,
          }),
        },
      );
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Network error");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const dim = "rgba(255,255,255,0.6)";

  const styles = {
    footer: {
      backgroundColor: C.navy,
      padding: isMobile ? "48px 24px 30px" : "64px 40px 34px",
    },
    inner: { maxWidth: sharedStyles.layout.maxWidth, margin: "0 auto" },
    top: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "stretch",
      gap: isMobile ? "36px" : "64px",
    },
    brand: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "22px",
      flex: "1 1 0",
      minWidth: 0,
    },
    logo: {
      height: isMobile ? "60px" : "84px",
      width: "auto",
      objectFit: "contain",
      alignSelf: "flex-start",
      display: "block",
    },
    slogan: {
      fontSize: isMobile ? "1.25rem" : "1.5rem",
      fontWeight: 500,
      letterSpacing: "-0.01em",
      color: "rgba(255,255,255,0.85)",
      margin: 0,
    },
    contactRow: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginTop: isMobile ? "4px" : "auto",
    },
    email: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      color: C.white,
      textDecoration: "none",
      fontSize: "0.95rem",
      fontWeight: 500,
      transition: "color 0.2s ease",
    },
    social: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      border: "none",
      backgroundColor: C.accentSoft,
      color: C.navy,
      transition: "all 0.2s ease",
    },
    formCard: {
      flex: "1.2 1 0",
      minWidth: 0,
      width: "100%",
      boxSizing: "border-box",
      maxWidth: isMobile ? "none" : "520px",
      backgroundColor: C.white,
      borderRadius: "16px",
      padding: isMobile ? "22px 20px" : "26px 26px",
    },
    form: { display: "flex", flexDirection: "column", gap: "11px" },
    row: {
      display: "flex",
      gap: "11px",
      flexDirection: isMobile ? "column" : "row",
    },
    group: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      flex: 1,
      minWidth: 0,
    },
    label: { fontWeight: 600, fontSize: "0.78rem", color: C.ink },
    submit: {
      ...sharedStyles.elements.button,
      backgroundColor: hover === "submit" ? "#aed2f5" : C.accentSoft,
      color: C.navy,
      width: "100%",
      boxSizing: "border-box",
      marginTop: "3px",
      opacity: isSubmitting ? 0.7 : 1,
      cursor: isSubmitting ? "not-allowed" : "pointer",
    },
    note: {
      ...sharedStyles.typography.small,
      textAlign: "center",
      borderRadius: "9px",
      padding: "10px",
      fontWeight: 500,
    },
    success: {
      backgroundColor: C.accentColors.successBg,
      color: C.accentColors.success,
    },
    error: { backgroundColor: "#FDECEC", color: "#C0392B" },
    divider: {
      height: "1px",
      backgroundColor: "rgba(255,255,255,0.1)",
      margin: isMobile ? "32px 0 20px" : "44px 0 22px",
    },
    bottom: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      gap: "12px",
    },
    copy: {
      ...sharedStyles.typography.small,
      color: "rgba(255,255,255,0.45)",
      margin: 0,
    },
    legal: { display: "flex", alignItems: "center", gap: "10px" },
    legalLink: {
      color: dim,
      textDecoration: "none",
      fontSize: "0.88rem",
      transition: "color 0.2s ease",
    },
    legalDot: { color: "rgba(255,255,255,0.3)" },
  };

  return (
    <footer style={styles.footer}>
      <style>{`
        .nm-footer-form input, .nm-footer-form textarea {
          padding: 10px 12px;
          border-radius: 9px;
          border: 1px solid ${C.line};
          font-size: 0.95rem;
          font-family: inherit;
          color: ${C.ink};
          background: ${C.white};
          width: 100%;
          box-sizing: border-box;
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }
        .nm-footer-form textarea { min-height: 64px; resize: vertical; }
        .nm-footer-form input:focus, .nm-footer-form textarea:focus {
          outline: none;
          border-color: ${C.accent};
          box-shadow: 0 0 0 3px rgba(31,127,194,0.16);
        }
        .nm-footer-form input::placeholder, .nm-footer-form textarea::placeholder { color: #9aa4b1; }
      `}</style>

      <div style={styles.inner}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <img src="/invertedlogo.png" alt="Nammu" style={styles.logo} />
            <p style={styles.slogan}>We speak seafood.</p>
            <div style={styles.contactRow}>
              <a
                href="mailto:hello@nammu.ai"
                style={{
                  ...styles.email,
                  color: hover === "email" ? C.accentSoft : C.white,
                }}
                onMouseEnter={() => setHover("email")}
                onMouseLeave={() => setHover(null)}
              >
                <MailIcon />
                hello@nammu.ai
              </a>
              <a
                href="https://www.linkedin.com/company/nammu-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nammu on LinkedIn"
                style={{
                  ...styles.social,
                  backgroundColor: hover === "li" ? "#aed2f5" : C.accentSoft,
                }}
                onMouseEnter={() => setHover("li")}
                onMouseLeave={() => setHover(null)}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div style={styles.formCard}>
            <form className="nm-footer-form" onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.row}>
                <div style={styles.group}>
                  <label style={styles.label} htmlFor="ft-name">
                    Name*
                  </label>
                  <input
                    id="ft-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div style={styles.group}>
                  <label style={styles.label} htmlFor="ft-email">
                    Email*
                  </label>
                  <input
                    id="ft-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div style={styles.row}>
                <div style={styles.group}>
                  <label style={styles.label} htmlFor="ft-company">
                    Company
                  </label>
                  <input
                    id="ft-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div style={styles.group}>
                  <label style={styles.label} htmlFor="ft-phone">
                    Phone
                  </label>
                  <input
                    id="ft-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div style={styles.group}>
                <label style={styles.label} htmlFor="ft-message">
                  Message
                </label>
                <textarea
                  id="ft-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                style={styles.submit}
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => setHover("submit")}
                onMouseLeave={() => setHover(null)}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
              {submitStatus === "success" && (
                <div style={{ ...styles.note, ...styles.success }}>
                  Thanks! We'll be in touch within one business day.
                </div>
              )}
              {submitStatus === "error" && (
                <div style={{ ...styles.note, ...styles.error }}>
                  Something went wrong. Please try again or email hello@nammu.ai.
                </div>
              )}
            </form>
          </div>
        </div>

        <div style={styles.divider} />

        <div style={styles.bottom}>
          <p style={styles.copy}>© {year} Nammu, Inc. All rights reserved.</p>
          <div style={styles.legal}>
            <Link
              to="/privacy"
              style={{ ...styles.legalLink, color: hover === "priv" ? C.white : dim }}
              onMouseEnter={() => setHover("priv")}
              onMouseLeave={() => setHover(null)}
            >
              Privacy Policy
            </Link>
            <span style={styles.legalDot}>·</span>
            <Link
              to="/terms"
              style={{ ...styles.legalLink, color: hover === "terms" ? C.white : dim }}
              onMouseEnter={() => setHover("terms")}
              onMouseLeave={() => setHover(null)}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
