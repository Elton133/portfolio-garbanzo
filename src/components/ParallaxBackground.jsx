import { motion } from 'framer-motion';

export default function ParallaxBackground() {
  return (
    <div className="parallax-bg-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>

      {/* Golden Orb 1 */}
      <motion.div
        animate={{
          y: ['-20px', '20px'],
          x: ['-10px', '10px'],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          x: { duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          scale: { duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          opacity: { duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--orange-yellow-crayola) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Jet Black Orb 2 */}
      <motion.div
        animate={{
          y: ['20px', '-20px'],
          x: ['10px', '-10px'],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          y: { duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          x: { duration: 9, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          scale: { duration: 11, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          opacity: { duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--vegas-gold) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
}
