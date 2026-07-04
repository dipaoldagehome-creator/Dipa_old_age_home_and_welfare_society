import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { fadeUp, staggerContainer } from '../../animations/variants';

export const SectionHeader = ({ badge, title, highlight, description, align = 'center', className }) => {
  return (
    <motion.div 
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "max-w-3xl mb-16",
        align === 'center' ? 'text-center mx-auto' : 'text-left',
        className
      )}
    >
      {badge && (
        <motion.div
          variants={fadeUp}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium tracking-wide uppercase shadow-sm"
          )}
        >
          {badge}
        </motion.div>
      )}
      
      <motion.h2 
        variants={fadeUp}
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight"
      >
        {title} {highlight && <span className="text-primary-500">{highlight}</span>}
      </motion.h2>
      
      {description && (
        <motion.p 
          variants={fadeUp}
          className="text-lg text-foreground-muted font-light leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

