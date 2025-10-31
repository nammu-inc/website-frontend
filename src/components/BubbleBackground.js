import React, { useEffect, useRef, useState } from "react";
import { sharedStyles } from "../styles";

const BubbleBackground = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const [initialized, setInitialized] = useState(false);

  // 16 fixed bubble configurations - memoize to prevent recreation
  const bubbleConfigs = React.useMemo(() => [
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
  ], []);

  // Pixels per second for bubble movement
  const PIXELS_PER_SECOND = 50;

  // Measure container height
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Initialize bubbles with their starting positions and random speeds
  useEffect(() => {
    if (containerHeight > 0 && !initialized) {
      setBubbles(bubbleConfigs.map(config => ({
        ...config,
        currentY: (config.y / 100) * containerHeight,
        isFirstCycle: true,
        speedMultiplier: 0.5 + Math.random() * 1.0,
      })));
      setInitialized(true);
    }
  }, [containerHeight, initialized, bubbleConfigs]);

  // Animate bubbles
  useEffect(() => {
    if (bubbles.length === 0 || containerHeight === 0) return;

    const animate = () => {
      const now = performance.now();
      
      setBubbles(prevBubbles => prevBubbles.map(bubble => {
        if (!bubble.lastUpdate) {
          return { ...bubble, lastUpdate: now };
        }

        const deltaTime = (now - bubble.lastUpdate) / 1000; // Convert to seconds
        const speed = PIXELS_PER_SECOND * bubble.speedMultiplier;
        const movement = speed * deltaTime;
        
        let newY = bubble.currentY - movement;
        let isFirstCycle = bubble.isFirstCycle;
        let speedMultiplier = bubble.speedMultiplier;
        
        if (newY < -bubble.radius * 2) {
          newY = containerHeight + bubble.radius * 2;
          isFirstCycle = false;
          speedMultiplier = 0.5 + Math.random() * 1.0;
        }
        
        return {
          ...bubble,
          currentY: newY,
          isFirstCycle,
          speedMultiplier,
          lastUpdate: now,
        };
      }));

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [bubbles.length, containerHeight]);

  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 0,
      overflow: "hidden",
    },
    bubble: {
      position: "absolute",
      borderRadius: "50%",
      backgroundColor: "transparent",
      borderStyle: "solid",
      transition: "none",
    },
  };

  return (
    <div ref={containerRef} style={styles.container}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          style={{
            ...styles.bubble,
            width: `${bubble.radius * 2}px`,
            height: `${bubble.radius * 2}px`,
            left: `${bubble.x}%`,
            top: `${bubble.currentY}px`,
            transform: 'translateX(-50%)',
            borderColor: bubble.strokeColor,
            borderWidth: `${bubble.strokeWidth}px`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
