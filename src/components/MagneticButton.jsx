import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = '', style = {}, ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Magnetic pull factor (lower is stronger)
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: 'relative', display: 'inline-block', ...style }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {/* Optional: Add a subtle inner animation for children as well */}
      <motion.div
        animate={{ x: x * 0.5, y: y * 0.5 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
