import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles";

const TestimonialSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Nammu helps our sales reps find opportunities we would have missed and turn insights into orders in minutes.",
      author: "Todd Rushing — VP Sales",
      company: "Stavis Seafoods",
    },
    {
      quote:
        "With Nammu, our team moves faster and spends more time selling. The recommendations feel tailor‑made for each customer.",
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
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const styles = {
    section: {
      padding: `${sharedStyles.spacing.section.vertical} ${
        isMobile ? "30px" : sharedStyles.spacing.section.horizontal
      }`,
      backgroundColor: "transparent",
      textAlign: "center",
      margin: "0 auto",
    },
    title: {
      ...sharedStyles.typography.h2,
      color: sharedStyles.colors.primary.dark,
      margin: "0 auto 40px",
    },
    carouselWrapper: {
      position: "relative",
      maxWidth: "900px",
      margin: "0 auto",
    },
    testimonialContainer: {
      backgroundColor: sharedStyles.colors.white,
      borderRadius: sharedStyles.elements.card.borderRadius,
      padding: isMobile ? "30px" : "50px",
      boxShadow: sharedStyles.elements.card.boxShadow,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
      textAlign: "center",
      minHeight: isMobile ? "300px" : "350px",
    },
    logoContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    logoPlaceholder: {
      width: "100px",
      height: "100px",
      backgroundColor: "#e0e0e0",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#888",
      fontWeight: "bold",
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
      marginTop: "20px",
      fontWeight: "600",
      color: sharedStyles.colors.text.dark,
      fontSize: "1rem",
    },
    arrow: {
      position: "absolute",
      top: "50%",
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
      left: isMobile ? "16px" : "-8px",
    },
    arrowRight: {
      right: isMobile ? "16px" : "-8px",
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
      border: `2px solid ${sharedStyles.colors.primary.dark}`,
      transform: "scale(1.2)",
    },
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div id="testimonials" style={styles.section}>
      <h2 style={styles.title}>Fresh perspectives straight from the source.</h2>
      <div style={styles.carouselWrapper}>
        <div style={styles.testimonialContainer}>
          <div style={styles.logoContainer}>
            <div style={styles.logoPlaceholder}>LOGO</div>
            <div style={styles.companyName}>{currentTestimonial.company}</div>
          </div>
          <blockquote style={styles.quote}>
            "{currentTestimonial.quote}"
          </blockquote>
          <div style={styles.testimonialAuthor}>
            {currentTestimonial.author}
          </div>
        </div>

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
  );
};

export default TestimonialSection;
