import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '../../utils/cn';

export const TrustBadge = ({ rating, reviews, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 shadow-soft",
        className
      )}
    >
      <div className="flex text-secondary-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <div className="h-5 w-px bg-white/30" />
      <span className="text-sm font-semibold text-white tracking-wide">
        {rating} Google Rating ({reviews}+ Reviews)
      </span>
    </motion.div>
  );
};
