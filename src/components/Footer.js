import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mq.matches);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const currentYear = new Date().getFullYear();

  const styles = {
    section: {
      padding: `60px ${
        isMobile ? "30px" : sharedStyles.spacing.section.horizontal
      }`,
      borderTop: `2px solid ${sharedStyles.colors.primary.dark}`,
      backgroundColor: sharedStyles.colors.primary.dark,
    },
    footerInner: {
      maxWidth: "1400px",
      margin: "0 auto",
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: isMobile ? "20px" : "40px",
    },
    logoSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
    },
    logo: {
      height: isMobile ? "32px" : "40px",
      width: "auto",
    },
    socialLinks: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    linkedinLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: sharedStyles.colors.white,
      color: sharedStyles.colors.primary.dark,
      textDecoration: "none",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    linkedinLinkHover: {
      backgroundColor: sharedStyles.colors.primary.medium,
      color: sharedStyles.colors.white,
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    rightSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "12px",
    },
    emailContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    email: {
      color: sharedStyles.colors.white,
      fontSize: "0.95rem",
      textDecoration: "none",
      transition: "color 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    emailHover: {
      color: sharedStyles.colors.primary.light,
    },
    copy: {
      textAlign: "right",
      color: sharedStyles.colors.white,
      fontSize: "0.9rem",
      opacity: 0.8,
      display: "flex",
      alignItems: "center",
      height: "32px",
    },
  };

  const LinkedInIcon = () => (
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const MailIcon = () => (
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const [linkedinHover, setLinkedinHover] = useState(false);
  const [emailHover, setEmailHover] = useState(false);

  return (
    <div id="demo" style={styles.section}>
      <div style={styles.footerInner}>
        <div style={styles.content}>
          <div style={styles.logoSection}>
            <img src="invertedlogo.png" alt="Nammu" style={styles.logo} />
            <div style={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/company/nammu-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nammu LinkedIn"
                style={{
                  ...styles.linkedinLink,
                  ...(linkedinHover ? styles.linkedinLinkHover : {}),
                }}
                onMouseEnter={() => setLinkedinHover(true)}
                onMouseLeave={() => setLinkedinHover(false)}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div style={styles.rightSection}>
            <a
              href="mailto:hello@nammu.ai"
              style={{
                ...styles.email,
                ...(emailHover ? styles.emailHover : {}),
              }}
              onMouseEnter={() => setEmailHover(true)}
              onMouseLeave={() => setEmailHover(false)}
            >
              <MailIcon />
              hello@nammu.ai
            </a>
            <div style={styles.copy}>© {currentYear} Nammu, Inc.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
