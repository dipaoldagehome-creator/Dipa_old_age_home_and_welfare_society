import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, HeartHandshake } from 'lucide-react';

const CARDS = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide an enriching, secure, and medically sound environment where seniors can live their golden years with absolute dignity and joy."
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be recognized globally as the gold standard for senior care, continually innovating in geriatric health and emotional well-being."
  },
  {
    icon: HeartHandshake,
    title: "Core Values",
    desc: "Compassion without borders, respect for every individual's history, transparent care, and uncompromising medical excellence."
  }
];

export const MissionVision = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50/50 rounded-l-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">Our Guiding Light</h2>
          <p className="text-foreground-muted text-lg font-light leading-relaxed">The principles that shape every decision, every medical plan, and every interaction at our facility.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-surface p-6 md:p-10 rounded-3xl shadow-soft border border-border hover:shadow-float hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center mb-8 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                <card.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{card.title}</h3>
              <p className="text-foreground-muted leading-relaxed font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

