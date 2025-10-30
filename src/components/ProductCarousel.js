import React, { useState, useEffect } from "react";
import { sharedStyles } from "../styles";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";
import Product4 from "../assets/Product4.png";
import Product5 from "../assets/Product5.png";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = [Product1, Product2, Product3, Product4, Product5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [screenshots.length]);

  const getCardPosition = (idx, currentIdx, total) => {
    const offset = idx - currentIdx;
    let wrappedOffset = offset;
    if (wrappedOffset > total / 2) wrappedOffset -= total;
    if (wrappedOffset < -total / 2) wrappedOffset += total;

    if (wrappedOffset === 0) {
      return {
        transform: "translateX(-50%) scale(1)",
        opacity: 1,
        zIndex: 3,
      };
    } else if (wrappedOffset === -1 || wrappedOffset === total - 1) {
      return {
        transform: "translateX(calc(-50% - 55%)) scale(0.65)",
        opacity: 0.6,
        zIndex: 2,
      };
    } else if (wrappedOffset === 1 || wrappedOffset === -(total - 1)) {
      return {
        transform: "translateX(calc(-50% + 55%)) scale(0.65)",
        opacity: 0.6,
        zIndex: 2,
      };
    } else {
      return {
        transform: "translateX(-50%) scale(0.7)",
        opacity: 0,
        zIndex: 1,
      };
    }
  };

  const styles = {
    wrapper: {
      width: "100%",
      maxWidth: "840px",
      margin: "48px auto 0",
      position: "relative",
      overflow: "visible",
      paddingBottom: "56.25%",
      height: 0,
    },
    container: {
      position: "absolute",
      inset: 0,
    },
    slide: {
      position: "absolute",
      top: 0,
      left: "50%",
      width: "90%",
      height: "90%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: sharedStyles.elements.card.borderRadius,
      boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
      border: `1px solid ${sharedStyles.colors.secondary.dark}`,
      transition: "transform 800ms ease, opacity 800ms ease",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {screenshots.map((src, idx) => (
          <div
            key={src}
            style={{
              ...styles.slide,
              ...getCardPosition(idx, currentIndex, screenshots.length),
            }}
          >
            <img
              src={src}
              alt={`Product Screenshot ${idx + 1}`}
              style={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
