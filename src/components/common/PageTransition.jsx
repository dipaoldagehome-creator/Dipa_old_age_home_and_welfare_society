import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15, filter: "blur(4px)" },
  in: { opacity: 1, y: 0, filter: "blur(0px)" },
  out: { opacity: 0, y: -15, filter: "blur(4px)" }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
};

/**
 * Wrap this component around your page content to get smooth enter/exit transitions.
 * Note: Requires <AnimatePresence mode="wait"> inside your router/layout to trigger 'exit' animations correctly.
 */
export const PageTransition = ({ children, className }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
};
