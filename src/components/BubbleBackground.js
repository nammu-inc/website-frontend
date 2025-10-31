import React from "react";
import { sharedStyles } from "../styles";

const BubbleBackground = () => {
  // 16 fixed bubble locations manually specified
  const bubbles = [
    { id: 0, x: 8, y: 15, radius: 45, strokeColor: sharedStyles.colors.primary.medium, strokeWidth: 2.5 },
    { id: 1, x: 25, y: 8, radius: 35, strokeColor: sharedStyles.colors.secondary.light, strokeWidth: 2 },
    { id: 2, x: 45, y: 12, radius: 55, strokeColor: sharedStyles.colors.primary.light, strokeWidth: 3 },
    { id: 3, x: 65, y: 5, radius: 40, strokeColor: sharedStyles.colors.secondary.medium, strokeWidth: 2.5 },
    { id: 4, x: 85, y: 18, radius: 48, strokeColor: sharedStyles.colors.primary.medium, strokeWidth: 2 },
    { id: 5, x: 92, y: 35, radius: 32, strokeColor: sharedStyles.colors.secondary.light, strokeWidth: 2.5 },
    { id: 6, x: 12, y: 42, radius: 60, strokeColor: sharedStyles.colors.primary.light, strokeWidth: 3 },
    { id: 7, x: 32, y: 50, radius: 38, strokeColor: sharedStyles.colors.secondary.medium, strokeWidth: 2 },
    { id: 8, x: 55, y: 45, radius: 42, strokeColor: sharedStyles.colors.primary.medium, strokeWidth: 2.5 },
    { id: 9, x: 75, y: 52, radius: 50, strokeColor: sharedStyles.colors.secondary.light, strokeWidth: 2 },
    { id: 10, x: 95, y: 60, radius: 36, strokeColor: sharedStyles.colors.primary.light, strokeWidth: 2.5 },
    { id: 11, x: 18, y: 68, radius: 44, strokeColor: sharedStyles.colors.secondary.medium, strokeWidth: 3 },
    { id: 12, x: 42, y: 75, radius: 52, strokeColor: sharedStyles.colors.primary.medium, strokeWidth: 2 },
    { id: 13, x: 68, y: 82, radius: 39, strokeColor: sharedStyles.colors.secondary.light, strokeWidth: 2.5 },
    { id: 14, x: 88, y: 90, radius: 46, strokeColor: sharedStyles.colors.primary.light, strokeWidth: 2 },
    { id: 15, x: 5, y: 95, radius: 33, strokeColor: sharedStyles.colors.secondary.medium, strokeWidth: 2.5 },
  ];

  const styles = {
    container: {
      position: "absolute",
      top: 0, // Start at top of sections below hero
      left: 0,
      width: "100%",
      height: "100%", // Only cover sections below hero
      pointerEvents: "none",
      zIndex: 0,
      overflow: "hidden",
    },
    bubble: {
      position: "absolute",
      borderRadius: "50%",
      backgroundColor: "transparent",
      borderStyle: "solid",
    },
  };

  return (
    <div style={styles.container}>
      {bubbles.map((bubble) => {
        // No delay - bubbles start floating immediately
        // More varied durations - using different patterns for each bubble
        // Each bubble moves at a constant rate but different bubbles have different speeds
        // Increased max duration to slow down the fastest bubbles
        const baseDuration = 35 + (bubble.id * 1.7) % 35; // Vary duration between 35-70 seconds
        const animationDuration = Math.round(baseDuration * 10) / 10; // Round to 1 decimal
        
        // Calculate the animation so each bubble travels a proportional distance
        // Bubble starts at y% from top, needs to move y% of container height to reach top
        // Then after reset, moves full container height (100%) from bottom to top
        // We use a large fixed container height reference (500vh) to ensure bubbles clear top
        // But we scale the transform proportionally to each bubble's starting position
        const containerHeightRef = 500; // Reference height in vh
        const initialToTopPercent = bubble.y; // Percentage of animation for initial journey
        
        // Calculate transform: from y% position, need to move up by y% to reach 0% (top)
        // Using a proportional calculation based on container height reference
        const initialTransform = -(containerHeightRef * bubble.y / 100); // Move up by y% of reference
        const bottomTransform = containerHeightRef; // At bottom, 100% below reference
        const topTransform = -containerHeightRef; // At top, 100% above reference
        
        const animationName = `floatUp-${bubble.id}`;
        
        return (
          <React.Fragment key={bubble.id}>
            <style>
              {`
                @keyframes ${animationName} {
                  0% {
                    transform: translate(-50%, 0);
                  }
                  ${initialToTopPercent}% {
                    transform: translate(-50%, ${initialTransform}vh);
                  }
                  ${initialToTopPercent + 0.01}% {
                    transform: translate(-50%, ${bottomTransform}vh);
                  }
                  100% {
                    transform: translate(-50%, ${topTransform}vh);
                  }
                }
              `}
            </style>
            <div
              style={{
                ...styles.bubble,
                width: `${bubble.radius * 2}px`,
                height: `${bubble.radius * 2}px`,
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                borderColor: bubble.strokeColor,
                borderWidth: `${bubble.strokeWidth}px`,
                animation: `${animationName} ${animationDuration}s linear infinite`,
              }}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BubbleBackground;
