import React from 'react';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';

export const StatsSection = () => {
  return (
    <section className="bg-primary-900 py-20 relative overflow-hidden">
      {/* Subtle background texture/gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center md:divide-x md:divide-white/10">
          
          <div className="px-4">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-500 mb-3">
              <AnimatedCounter from={0} to={15} suffix="+" />
            </h3>
            <p className="text-white/80 font-medium tracking-wide uppercase text-sm">Years Experience</p>
          </div>
          
          <div className="px-4">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-500 mb-3">
              <AnimatedCounter from={0} to={500} suffix="+" />
            </h3>
            <p className="text-white/80 font-medium tracking-wide uppercase text-sm">Families Served</p>
          </div>
          
          <div className="px-4">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-500 mb-3">
              <AnimatedCounter from={0} to={50} suffix="+" />
            </h3>
            <p className="text-white/80 font-medium tracking-wide uppercase text-sm">Medical Staff</p>
          </div>
          
          <div className="px-4">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-500 mb-3">
              <AnimatedCounter from={0} to={100} suffix="%" />
            </h3>
            <p className="text-white/80 font-medium tracking-wide uppercase text-sm">Secure Care</p>
          </div>

        </div>
      </div>
    </section>
  );
};

