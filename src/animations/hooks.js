import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Hook to easily trigger animations when an element comes into view
 * @param {string} margin - The margin around the viewport to trigger the animation (e.g., "-50px")
 * @param {boolean} once - Whether the animation should only trigger once
 * @returns {Object} { ref, isInView }
 */
export const useScrollAnimation = (margin = "-50px", once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin, once });
  return { ref, isInView };
};

/**
 * Hook for staggering children animations
 * Automatically returns the ref and the initial/animate props needed for the container
 */
export const useStaggerAnimation = (margin = "-50px", once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin, once });
  
  return { 
    ref, 
    containerProps: {
      initial: "hidden",
      animate: isInView ? "visible" : "hidden"
    } 
  };
};
