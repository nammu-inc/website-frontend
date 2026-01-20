import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles";
import stavisLogo from "../assets/Stavis.png";

const TestimonialSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const testimonials = [
    {
      quote:
        "We rely heavily on data to make decisions, and <strong>Nammu has made our team more efficient and productive</strong>. The platform gives clear visibility into customer behavior and ordering patterns while streamlining ordering and reducing manual work, so our sales team can focus on selling. What stands out most is the team's <strong>understanding of the fast-paced seafood business</strong> and a clean, intuitive interface with little to no learning curve. <strong>Nammu has helped bring our 98-year-old company into the future</strong>.",

      author: "Todd Rushing — VP Sales",
      company: "Stavis Seafoods",
    },
    {
      quote:
        "Working with the Nammu team has been a great experience. They took the time to <strong>understand our day-to-day sales needs</strong> and delivered a platform we use daily, with <strong>data that's easy to navigate and act on</strong>. We're grateful for the partnership and look forward to continuing to work together.",
      author: "Tiffany Walker - Sales Manager",
      company: "Stavis Seafoods",
    },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia(sharedStyles.breakpoints.mobile);
    setIsMobile(mediaQuery.matches);
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length, resetKey]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setResetKey((prev) => prev + 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setResetKey((prev) => prev + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setResetKey((prev) => prev + 1);
  };

  const styles = {
    section: {
      padding: `${sharedStyles.spacing.section.vertical} ${
        isMobile ? "30px" : sharedStyles.spacing.section.horizontal
      }`,
      backgroundColor: sharedStyles.colors.gray.light,
      textAlign: "center",
    },
    contentWrapper: {
      maxWidth: "1300px",
      margin: "0 auto",
    },
    title: {
      ...sharedStyles.typography.h2,
      color: sharedStyles.colors.primary.dark,
    },
    carouselWrapper: {
      position: "relative",
      maxWidth: "900px",
      margin: "45px auto 40px",
    },
    testimonialContainer: {
      backgroundColor: sharedStyles.colors.white,
      borderRadius: sharedStyles.elements.card.borderRadius,
      padding: isMobile ? "30px 60px" : "50px",
      boxShadow: sharedStyles.elements.card.boxShadow,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      textAlign: "center",
      minHeight: isMobile ? "350px" : "400px",
      position: "relative",
    },
    logoContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    logo: {
      maxWidth: "150px",
      maxHeight: "100px",
      width: "auto",
      height: "auto",
      objectFit: "contain",
    },
    companyName: {
      fontWeight: "600",
      color: sharedStyles.colors.text.dark,
      marginTop: "15px",
      fontSize: "1.1rem",
    },
    quote: {
      ...sharedStyles.typography.body,
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      lineHeight: "1.6",
      fontStyle: "italic",
      color: sharedStyles.colors.text.medium,
      maxWidth: "700px",
    },
    testimonialAuthor: {
      fontWeight: "600",
      color: sharedStyles.colors.text.dark,
      fontSize: "1rem",
    },
    arrow: {
      position: "absolute",
      top: isMobile ? "175px" : "200px",
      transform: "translateY(-50%)",
      background: sharedStyles.colors.white,
      border: `2px solid ${sharedStyles.colors.gray.light}`,
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      userSelect: "none",
      transition: "all 0.2s ease",
      zIndex: 10,
      opacity: 0.95,
    },
    arrowLeft: {
      left: isMobile ? "-8px" : "-22px",
    },
    arrowRight: {
      right: isMobile ? "-8px" : "-22px",
    },
    arrowIcon: {
      fontSize: "1.5rem",
      color: sharedStyles.colors.primary.dark,
      fontWeight: "700",
    },
    paginationDots: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
      marginTop: "30px",
    },
    paginationDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: sharedStyles.colors.white,
      border: `2px solid ${sharedStyles.colors.primary.light}`,
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    paginationDotActive: {
      backgroundColor: sharedStyles.colors.primary.light,
      transform: "scale(1.2)",
    },
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div id="testimonials" style={styles.section}>
      <style>
        {`
          #testimonials blockquote strong {
            font-weight: 700;
            color: ${sharedStyles.colors.text.dark};
          }
        `}
      </style>
      <div style={styles.contentWrapper}>
        <h2 style={styles.title}>
          Fresh perspectives straight from the source.
        </h2>
        <div style={styles.carouselWrapper}>
          <div style={styles.testimonialContainer}>
            {/* Navigation Arrows */}
            <button
              aria-label="Previous"
              onClick={goToPrevious}
              style={{ ...styles.arrow, ...styles.arrowLeft }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  sharedStyles.colors.primary.light;
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = sharedStyles.colors.white;
                e.currentTarget.style.transform = "translateY(-50%)";
              }}
            >
              <span style={styles.arrowIcon}>‹</span>
            </button>
            <button
              aria-label="Next"
              onClick={goToNext}
              style={{ ...styles.arrow, ...styles.arrowRight }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  sharedStyles.colors.primary.light;
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = sharedStyles.colors.white;
                e.currentTarget.style.transform = "translateY(-50%)";
              }}
            >
              <span style={styles.arrowIcon}>›</span>
            </button>

            <div style={styles.logoContainer}>
              <img
                src={stavisLogo}
                alt={currentTestimonial.company}
                style={styles.logo}
              />
              <div style={styles.companyName}>{currentTestimonial.company}</div>
            </div>
            <blockquote
              style={styles.quote}
              dangerouslySetInnerHTML={{
                __html: `"${currentTestimonial.quote}"`,
              }}
            />
            <div style={styles.testimonialAuthor}>
              {currentTestimonial.author}
            </div>
          </div>

          {/* Pagination Dots */}
          <div style={styles.paginationDots}>
            {testimonials.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.paginationDot,
                  ...(index === currentIndex ? styles.paginationDotActive : {}),
                }}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
