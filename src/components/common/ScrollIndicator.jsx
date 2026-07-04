import React from 'react';
import { motion } from 'framer-motion';

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Scroll Explore</span>
      <div className="flex h-14 w-8 justify-center rounded-full border-2 border-white/30 p-1.5">
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-secondary-500"
        />
      </div>
    </motion.div>
  );
};
