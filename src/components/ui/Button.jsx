import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const buttonVariants = {
  primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-soft hover:-translate-y-1 hover:shadow-float",
  secondary: "bg-secondary-500 text-white hover:bg-secondary-600 shadow-soft hover:-translate-y-1 hover:shadow-float",
  outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
  ghost: "text-foreground hover:bg-surface-muted",
  glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:-translate-y-1"
};

const sizeVariants = {
  sm: "h-9 px-4 text-xs",
  md: "h-12 px-6 py-3 text-sm",
  lg: "h-14 px-8 py-4 text-base md:text-lg",
  icon: "h-12 w-12 flex items-center justify-center"
};

export const Button = forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md',
  children,
  leftIcon,
  rightIcon,
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
        buttonVariants[variant],
        sizeVariants[size],
        className
      )}
      {...props}
    >
      {leftIcon && <span className="mr-2.5">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2.5">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = "Button";
