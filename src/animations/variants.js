/**
 * REUSABLE ANIMATION VARIANTS
 * Usage: <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once: true}} />
 */

// --- ENTRANCE ANIMATIONS ---

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", bounce: 0.3, duration: 0.8 } 
  }
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", bounce: 0.3, duration: 0.8 } 
  }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", bounce: 0.3, duration: 0.8 } 
  }
};

export const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", bounce: 0.3, duration: 0.8 } 
  }
};

// --- SCALE & ZOOM ---

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: "spring", bounce: 0.4, duration: 0.8 } 
  }
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

// --- ROTATE ---

export const rotateIn = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    scale: 1, 
    transition: { type: "spring", bounce: 0.3, duration: 0.8 } 
  }
};

// --- ORCHESTRATION ---

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

// --- ADVANCED REVEALS ---

export const textReveal = {
  hidden: { opacity: 0, y: "120%" },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } // Custom cubic-bezier for snappy reveal
  }
};

export const imageRevealCurtain = {
  hidden: { scaleY: 1, transformOrigin: "top" },
  visible: { 
    scaleY: 0, 
    transition: { duration: 1, ease: [0.85, 0, 0.15, 1] } 
  }
};

// --- INTERACTIVE HOVERS (Use with whileHover / whileTap) ---

export const buttonHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const buttonTap = {
  scale: 0.95
};

export const cardHover = {
  y: -8,
  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.08)",
  transition: { type: "spring", stiffness: 300, damping: 20 }
};
