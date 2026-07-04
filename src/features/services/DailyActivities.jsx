import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, HeartHandshake, Coffee, Stethoscope, 
  Utensils, BookOpen, Puzzle, Music, 
  Sparkles, UtensilsCrossed 
} from 'lucide-react';
import { cn } from '../../utils/cn';

const ACTIVITIES = [
  { time: "06:30 AM", title: "Morning Yoga & Exercise", icon: Sun, desc: "Gentle stretching and breathing exercises in the garden." },
  { time: "07:30 AM", title: "Morning Prayer", icon: HeartHandshake, desc: "A peaceful start to the day with communal prayers and reflection." },
  { time: "08:00 AM", title: "Nutritious Breakfast", icon: Coffee, desc: "Freshly prepared, diet-specific breakfast in the main dining hall." },
  { time: "09:30 AM", title: "Routine Health Checkup", icon: Stethoscope, desc: "Daily vitals monitoring by our in-house nursing staff." },
  { time: "11:00 AM", title: "Library & Reading", icon: BookOpen, desc: "Quiet time with newspapers, magazines, and classic literature." },
  { time: "01:00 PM", title: "Lunch", icon: Utensils, desc: "A hearty, balanced meal focusing on geriatric nutrition." },
  { time: "04:00 PM", title: "Indoor Games & Social", icon: Puzzle, desc: "Chess, carrom, and group activities to keep the mind sharp." },
  { time: "05:30 PM", title: "Music & Art Therapy", icon: Music, desc: "Engaging sessions with classical music and creative arts." },
  { time: "07:00 PM", title: "Evening Meditation", icon: Sparkles, desc: "Guided relaxation to prepare the mind and body for rest." },
  { time: "08:00 PM", title: "Dinner", icon: UtensilsCrossed, desc: "Light, easily digestible evening meal followed by a stroll." },
];

export const DailyActivities = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-muted relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-20 right-0 w-72 h-72 md:w-[600px] md:h-[600px] bg-secondary-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-primary-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4"
          >
            A Day in the Life
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-muted font-light max-w-2xl mx-auto"
          >
            A thoughtfully curated daily routine designed to balance physical health, mental stimulation, and peaceful rest.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-[39px] md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-100 rounded-full" />

          <div className="space-y-12">
            {ACTIVITIES.map((activity, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={activity.time}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  className={cn(
                    "relative flex items-center w-full",
                    isEven ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  {/* Timeline Dot & Icon */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white border-4 border-primary-500 shadow-float z-10 group-hover:scale-110 transition-transform">
                    <activity.icon className="h-6 w-6 text-primary-500" />
                  </div>

                  {/* Animated Card */}
                  <div className={cn(
                    "w-full ml-24 md:ml-0 md:w-[45%]",
                    isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  )}>
                    <div className="bg-surface p-6 md:p-8 rounded-3xl shadow-soft border border-border hover:border-primary-300 hover:shadow-float hover:-translate-y-1 transition-all duration-300 group">
                      <span className={cn(
                        "inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-bold tracking-wide mb-4 transition-colors group-hover:bg-primary-500 group-hover:text-white"
                      )}>
                        {activity.time}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary-600 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-foreground-muted font-light leading-relaxed">
                        {activity.desc}
                      </p>
                    </div>
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


