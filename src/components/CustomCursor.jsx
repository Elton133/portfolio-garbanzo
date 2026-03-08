import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import '../style.css'; // Make sure it picks up the root css

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Use motion values for smooth tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Add a spring configuration for the "trailing" ring effect
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch capable, if so don't render custom cursor
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const mouseMove = (e) => {
      // Offset by half the size of the cursor to center it (assuming 32x32px default)
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over an interactive element
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.project-link') ||
        target.closest('.content-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '12px', // Center the 8px dot inside the 32px ring area
          translateY: '12px',
        }}
      />
      <motion.div
        ref={cursorRef}
        className="custom-cursor-ring"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? 'hsla(45, 100%, 71%, 0.1)' : 'transparent',
          borderColor: isHovering ? 'hsla(45, 100%, 71%, 0)' : 'hsl(45, 100%, 71%)',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
