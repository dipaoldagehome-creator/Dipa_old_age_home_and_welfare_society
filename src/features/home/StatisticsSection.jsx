import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Stethoscope, BedDouble, Clock, Heart } from 'lucide-react';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { SectionHeader } from '../../components/common/SectionHeader';
import { staggerContainer, fadeUp } from '../../animations/variants';

const STATS = [
  { icon: Users, count: 100, suffix: "+", label: "Happy Residents", desc: "Seniors enjoying their golden years in a secure community." },
  { icon: Award, count: 5, suffix: "+", label: "Years of Service", desc: "A deep legacy of trust, respect, and compassionate care." },
  { icon: Stethoscope, count: 15, suffix: "+", label: "Medical Staff", desc: "In-house doctors, trained nurses, and physiotherapists." },
  { icon: BedDouble, count: 25, suffix: "+", label: "Premium Beds", desc: "Fully equipped, highly sanitized, and wheelchair accessible." },
  { icon: Clock, count: 3, prefix: "< ", suffix: " Mins", label: "Emergency Response", desc: "Average time for our internal medical team to reach a resident." },
  { icon: Heart, count: 100, suffix: "%", label: "Family Satisfaction", desc: "Providing complete peace of mind for families worldwide." }
];

export const StatisticsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[800px] md:h-[800px] bg-primary-50/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Our Impact"
          title="Numbers That"
          highlight="Matter."
          description="Our commitment to excellence is reflected in our spotless track record and the continuous trust placed in us by hundreds of families."
        />

        <motion.div 
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group bg-surface p-6 md:p-8 md:p-10 rounded-3xl shadow-soft border border-border hover:shadow-float hover:-translate-y-2 hover:border-primary-200 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-20 w-20 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
                <stat.icon className="h-10 w-10" />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 flex items-center justify-center group-hover:text-primary-600 transition-colors">
                <AnimatedCounter from={0} to={stat.count} prefix={stat.prefix} suffix={stat.suffix} />
              </h3>
              <h4 className="text-lg font-bold text-foreground mb-3">{stat.label}</h4>
              <p className="text-foreground-muted font-light text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


