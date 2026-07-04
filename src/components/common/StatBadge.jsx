import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const StatBadge = ({ number, label, icon: Icon, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.3 }}
      className={cn(
        "flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3 shadow-float",
        className
      )}
    >
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/30 text-white border border-white/10 shrink-0">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div>
        <h4 className="text-xl font-bold font-serif text-white leading-tight">{number}</h4>
        <p className="text-xs font-medium text-white/80 mt-0.5 leading-snug">{label}</p>
      </div>
    </motion.div>
  );
};
