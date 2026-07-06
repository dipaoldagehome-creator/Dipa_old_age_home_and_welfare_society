import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Stethoscope, Utensils, Sparkles, UserRoundCheck, ShieldCheck, Home } from 'lucide-react';
import { cn } from '../../utils/cn';
import { SectionHeader } from '../../components/common/SectionHeader';
import { staggerContainer, fadeUp } from '../../animations/variants';

const FEATURES = [
  { icon: Clock, title: "24x7 Care & Support", desc: "Assistance ensuring any of our members are ever left unattended in their time of need.", className: "lg:col-span-1" },
  { icon: Stethoscope, title: "Medical Support", desc: "Oncall doctors, regular health check-ups, and immediate emergency response protocols.", className: "lg:col-span-1" },
  { icon: Utensils, title: "Nutritious Diet", desc: "Customized, highly nutritious, and hygienic meals prepared by expert dieticians tailored to senior health.", className: "lg:col-span-1" },
  { icon: Sparkles, title: "Clean Environment", desc: "Daily deep cleaning and sanitization routines maintaining a hospital-grade sterile yet warm environment.", className: "lg:col-span-1" },
  { icon: UserRoundCheck, title: "Experienced Staff", desc: "Highly trained, compassionate nurses and caregivers specialized in geriatric care and emotional support.", className: "lg:col-span-1" },
  { icon: ShieldCheck, title: "Absolute Safety", desc: "CCTV surveillance, anti-slip flooring, and secure perimeters giving families total peace of mind.", className: "lg:col-span-1" },
  { icon: Home, title: "Family Atmosphere", desc: "We don't just provide medical care; we foster a lively community of joy, respect, and deep familial bonds.", className: "md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto" }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-secondary-50/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-primary-50/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Why Choose Us"
          title="The Gold Standard in"
          highlight="Senior Care."
          description="We go beyond basic assistance. We provide a holistic ecosystem designed to enrich the body, mind, and soul of every resident."
        />

        <motion.div 
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className={cn(
                "group relative bg-surface p-6 md:p-8 rounded-3xl shadow-soft border border-border transition-all duration-500 hover:shadow-float hover:-translate-y-2 hover:border-primary-100 overflow-hidden",
                feature.className
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


