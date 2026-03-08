import { motion } from 'framer-motion';

const variants = {
  initial: {
    y: 50,
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
  exit: {
    y: -50,
    scale: 0.95,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

function PageTransition({ children, className = '', id = '' }) {
  return (
    <motion.article
      className={className}
      data-page={id}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.article>
  );
}

export default PageTransition;
