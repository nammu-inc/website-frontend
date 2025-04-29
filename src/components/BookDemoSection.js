import React, { useState } from "react";
import { sharedStyles } from "../styles";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const BookDemoSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mediaQuery.matches);
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/public/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "hello@nammu.ai",
          subject: `Demo Request from ${formData.name}`,
          data: formData,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Network response was not ok");
      }

      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    section: {
      padding: `${sharedStyles.spacing.section.vertical} ${
        isMobile ? "20px" : sharedStyles.spacing.section.horizontal
      }`,
      backgroundColor: sharedStyles.colors.primary,
      margin: "0 auto",
    },
    container: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "stretch",
      maxWidth: "1200px",
      margin: "0 auto",
      gap: sharedStyles.spacing.component.gap,
    },
    contentColumn: {
      flex: "1 1 450px",
      textAlign: "left",
      padding: "20px 0",
      color: sharedStyles.colors.white,
    },
    formColumn: {
      flex: "1 1 450px",
      padding: sharedStyles.spacing.element.padding,
      backgroundColor: sharedStyles.colors.white,
      borderRadius: sharedStyles.elements.card.borderRadius,
      boxShadow: sharedStyles.elements.card.boxShadow,
    },
    title: {
      ...sharedStyles.typography.h2,
      color: sharedStyles.colors.white,
      textAlign: "left",
      marginBottom: "20px",
    },
    subtitle: {
      ...sharedStyles.typography.subtitle,
      color: sharedStyles.colors.white,
      opacity: 0.9,
      marginBottom: "20px",
      lineHeight: "1.5",
    },
    earlyAccessBlock: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      padding: "25px",
      borderRadius: "8px",
      marginBottom: "25px",
    },
    earlyAccessTitle: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.white,
      marginBottom: "15px",
    },
    benefitsList: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      margin: "15px 0",
    },
    benefitItem: {
      display: "flex",
      alignItems: "flex-start",
    },
    benefitIcon: {
      color: sharedStyles.colors.white,
      marginRight: "10px",
      fontSize: "1.2rem",
      marginTop: "2px",
    },
    benefitText: {
      color: sharedStyles.colors.white,
      opacity: 0.9,
    },
    contactInfo: {
      marginTop: "25px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    contactLabel: {
      fontWeight: "600",
      color: sharedStyles.colors.white,
    },
    contactLink: {
      color: sharedStyles.colors.white,
      textDecoration: "underline",
      fontWeight: "500",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      padding: "20px",
    },
    formTitle: {
      ...sharedStyles.typography.h3,
      color: sharedStyles.colors.primary,
      marginBottom: "20px",
      textAlign: "center",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      textAlign: "left",
    },
    label: {
      fontWeight: "500",
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
    button: {
      ...sharedStyles.elements.button,
      backgroundColor: sharedStyles.colors.primary,
      color: sharedStyles.colors.white,
      marginTop: "10px",
    },
    buttonHover: {
      backgroundColor: sharedStyles.colors.secondary,
    },
    successMessage: {
      backgroundColor: sharedStyles.colors.accent.successBg,
      color: sharedStyles.colors.accent.success,
      padding: "15px",
      borderRadius: "6px",
      marginTop: "20px",
      textAlign: "center",
      fontWeight: "500",
    },
    errorMessage: {
      backgroundColor: "#FFEBEE",
      color: "#D32F2F",
      padding: "15px",
      borderRadius: "6px",
      marginTop: "20px",
      textAlign: "center",
      fontWeight: "500",
    },
  };

  const CheckIcon = () => <span style={styles.benefitIcon}>✓</span>;

  return (
    <div style={styles.section}>
      <div style={styles.container}>
        <div style={styles.contentColumn}>
          <h2 style={styles.title}>Join Our Early Access Program</h2>
          <p style={styles.subtitle}>
            We're inviting select food distributors to transform their
            operations with our AI platform.
          </p>

          <div style={styles.earlyAccessBlock}>
            <h3 style={styles.earlyAccessTitle}>Exclusive Benefits</h3>
            <div style={styles.benefitsList}>
              <div style={styles.benefitItem}>
                <CheckIcon />
                <span style={styles.benefitText}>Preferred pricing</span>
              </div>
              <div style={styles.benefitItem}>
                <CheckIcon />
                <span style={styles.benefitText}>Personalized solutions</span>
              </div>
              <div style={styles.benefitItem}>
                <CheckIcon />
                <span style={styles.benefitText}>On-demand support</span>
              </div>
            </div>
          </div>

          <div style={styles.contactInfo}>
            <div style={styles.contactLabel}>Contact us directly:</div>
            <a href="mailto:hello@nammu.ai" style={styles.contactLink}>
              hello@nammu.ai
            </a>
          </div>
        </div>

        <div style={styles.formColumn}>
          <h3 style={styles.formTitle}>Request a Demo</h3>

          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
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

            <div style={styles.formGroup}>
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

            <div style={styles.formGroup}>
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

            <div style={styles.formGroup}>
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
                ...styles.button,
                ...(isSubmitting
                  ? { opacity: 0.7, cursor: "not-allowed" }
                  : {}),
              }}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Demo"}
            </button>

            {submitStatus === "success" && (
              <div style={styles.successMessage}>
                Thank you! Your request has been sent. We'll contact you within
                1 business day.
              </div>
            )}

            {submitStatus === "error" && (
              <div style={styles.errorMessage}>
                There was an error sending your request. Please try again or
                contact us directly at hello@nammu.ai.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemoSection;
