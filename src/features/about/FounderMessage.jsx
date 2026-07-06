import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const IMG_MAIN = "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1000&auto=format&fit=crop"; 
const IMG_SUB = "https://images.unsplash.com/photo-1581579205115-8c010a30b7e4?q=80&w=800&auto=format&fit=crop";

export const FounderMessage = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Beautiful Image Layout */}
          <div className="relative h-[600px] w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 top-0 h-[500px] w-4/5 rounded-3xl overflow-hidden shadow-soft"
            >
              <img src={IMG_MAIN} alt="Caring for a senior" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-primary-900/10" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute right-0 bottom-0 h-[300px] w-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-background"
            >
              <img src={IMG_SUB} alt="Medical Facility" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-10 right-10 bg-primary-500 rounded-full p-5 shadow-float"
            >
              <Quote className="h-8 w-8 text-white fill-current opacity-90" />
            </motion.div>
          </div>

          {/* Elegant Typography & Message */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-secondary-500 font-bold tracking-widest uppercase text-sm mb-4">Message from the Founder</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              A Home Built on <span className="text-primary-500">Love & Dignity.</span>
            </h2>
            
            <div className="space-y-6 text-foreground-muted text-lg font-light leading-relaxed">
              <p>
                "When we started Dipa Old Age Home & Welfare Society, our vision was simple: to create a sanctuary where our elders are not just looked after, but truly celebrated. 
              </p>
              <p>
                We understand the anxiety families face when they can no longer provide round-the-clock medical care at home. That is why we built a facility that combines state-of-the-art Elder care infrastructure with the warmth, compassion, and respect of a traditional family home.
              </p>
              <p className="font-medium text-foreground italic border-l-4 border-secondary-500 pl-4 py-1">
                Every resident is a grandparent to us. Their stories, their smiles, and their dignity are our greatest treasures."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

