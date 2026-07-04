import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const AnimatedCounter = ({ from = 0, to, duration = 2, prefix = '', suffix = '', className }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function for smooth deceleration (easeOutQuart)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};
