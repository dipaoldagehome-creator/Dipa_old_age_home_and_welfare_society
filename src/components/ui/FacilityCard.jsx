import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { cn } from '../../utils/cn';

/**
 * Premium Facility Card Component
 * Fully reusable with Framer Motion, Gradient Borders, and Glow Effects.
 */
export const FacilityCard = ({ 
  icon: Icon, 
  title, 
  description, 
  image, 
  actionText = "Learn More", 
  onAction,
  delay = 0,
  className 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.2 }}
      className={cn("relative group w-full h-full flex flex-col", className)}
    >
      {/* Ambient Glow Behind Card (Activates on Hover) */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-700 ease-in-out" />
      
      {/* 
        Gradient Border Wrapper 
        Uses p-[1px] to create the border effect, transitioning the background from solid to gradient on hover 
      */}
      <div className="relative flex-1 rounded-3xl p-[1px] bg-border group-hover:bg-gradient-to-br group-hover:from-primary-400 group-hover:via-secondary-500 group-hover:to-primary-600 transition-all duration-500 ease-out">
        
        {/* Inner Card Body */}
        <div className="relative h-full bg-surface rounded-[23px] overflow-hidden flex flex-col z-10">
          
          {/* Image Header */}
          <div className="relative h-56 w-full overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            {/* Vignette Overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            
            {/* Floating Glass Icon */}
            {Icon && (
              <div className="absolute bottom-5 left-5 h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-float group-hover:-translate-y-1.5 transition-transform duration-500 ease-out">
                <Icon className="h-7 w-7" />
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8 flex flex-col flex-1">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-foreground-muted font-light leading-relaxed mb-8 flex-1">
              {description}
            </p>
            
            {/* Button turns solid primary on card hover */}
            <Button 
              variant="outline" 
              onClick={onAction}
              className="w-full group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-500"
            >
              {actionText}
            </Button>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
