import React from 'react';
import { motion } from 'framer-motion';

const TIMELINE_DATA = [
  { year: "2008", title: "The Foundation", desc: "Started as a small 10-bed facility with a single doctor and immense passion for elder care." },
  { year: "2013", title: "Medical Wing Expansion", desc: "Added 24/7 ICU-equivalent monitoring units and specialized geriatric care equipment." },
  { year: "2018", title: "Holistic Wellness Center", desc: "Integrated physiotherapy, yoga, and mental health counseling into daily routines." },
  { year: "2024", title: "Award of Excellence", desc: "Recognized as the premier senior care facility in West Bengal for outstanding service." }
];

export const Timeline = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">Our Journey</h2>
          <p className="mt-4 text-lg text-foreground-muted font-light">Over a decade of unwavering commitment to senior health.</p>
        </div>

        <div className="relative">
          {/* Center Line for Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary-100 hidden md:block" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Content */}
                  <div className="w-full md:w-1/2 p-4 md:px-12">
                    <div className="bg-surface p-6 md:p-8 rounded-3xl shadow-soft border border-border hover:border-primary-200 transition-colors">
                      <span className="text-secondary-500 font-bold text-xl mb-2 block">{item.year}</span>
                      <h4 className="text-2xl font-serif font-bold text-foreground mb-3">{item.title}</h4>
                      <p className="text-foreground-muted font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Node / Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-50 border-4 border-primary-500 items-center justify-center z-10 shadow-lg">
                    <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

