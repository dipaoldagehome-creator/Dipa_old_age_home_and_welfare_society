import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Heart, ShieldCheck, Car, Stethoscope, Wind, HeartHandshake } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { AnimatedText } from '../../components/common/AnimatedText';
import { StatBadge } from '../../components/common/StatBadge';
import { ScrollIndicator } from '../../components/common/ScrollIndicator';

// Use a local image to guarantee it loads and prevent the text from blending into a white background
import HERO_BG from '../../assets/GalleryImages/photo1.jpeg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] lg:h-screen lg:min-h-[850px] w-full overflow-hidden bg-background mt-0 sm:mt-2 lg:mt-0">
      
      {/* Background Image & Architectural Overlays */}
      <div className="absolute inset-0 z-0 ">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          src={HERO_BG}
          alt="Premium Healthcare Environment" 
          className="h-full w-full object-cover"
          loading="eager" // SEO: prioritize hero image
          fetchPriority="high"
        />
        
        {/* Luxury Warm Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-primary-900/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-transparent h-1/3 top-auto" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/40 to-transparent md:w-4/5" />
      </div>

      {/* Animated Floating Shapes (Glassmorphism blobs) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 60, 0], y: [0, -40, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-72 h-72 md:h-[600px] md:w-[600px] rounded-full bg-secondary-500/20 blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-72 h-72 md:h-[700px] md:w-[700px] rounded-full bg-primary-500/20 blur-[140px]"
        />
      </div>

      {/* Main Foreground Content - Mobile: justify-start with dedicated top & bottom padding; Desktop: vertically centered */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start lg:justify-center px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10 lg:pt-0 mt-0 lg:-mt-10 xl:-mt-24 pb-20 sm:pb-16 lg:pb-0">
        
        <div className="max-w-4xl">
          
          {/* Animated Headline with fluid responsive typography */}
          <AnimatedText 
            el="h1"
            text="Compassionate Care & Dignity in Every Moment."
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] xl:text-[80px] font-bold font-serif leading-[1.15] sm:leading-[1.1] text-white"
            delay={0.3}
          />
          
          {/* Animated Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-4 sm:mt-6 md:mt-8 max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-white/90"
          >
            Experience a premium, warm, and secure environment designed exclusively for the wellbeing of our seniors. Your family is our family.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-6 sm:mt-8 md:mt-12 flex flex-col sm:flex-row gap-3.5 sm:gap-4 md:gap-5"
          >
            <Button 
              size="lg" 
              variant="primary" 
              leftIcon={<Phone className="h-5 w-5" />}
              onClick={() => window.location.href = 'tel:+916290485202'}
            >
              Emergency Admission
            </Button>
            <Button 
              size="lg" 
              variant="glass" 
              leftIcon={<Heart className="h-5 w-5 fill-current" />}
              onClick={() => {
                const el = document.getElementById('donate');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.href = '/#donate';
              }}
            >
              Make a Donation
            </Button>
          </motion.div>
          
          {/* Mobile Stats (Visible only on small/medium screens) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 gap-2.5 sm:gap-3 lg:hidden"
          >
            <div className="flex flex-col gap-1 rounded-xl bg-black/20 p-2.5 sm:p-3 backdrop-blur-md border border-white/10">
               <Car className="h-5 w-5 text-secondary-400" />
               <span className="text-sm font-bold text-white leading-none">24*7</span>
               <span className="text-[10px] uppercase tracking-wider text-white/60">Private Car & Driver</span>
            </div>
            <div className="flex flex-col gap-1 rounded-xl bg-black/20 p-2.5 sm:p-3 backdrop-blur-md border border-white/10">
               <Stethoscope className="h-5 w-5 text-secondary-400" />
               <span className="text-sm font-bold text-white leading-none">24*7</span>
               <span className="text-[10px] uppercase tracking-wider text-white/60">Doctor On Call</span>
            </div>
            <div className="flex flex-col gap-1 rounded-xl bg-black/20 p-2.5 sm:p-3 backdrop-blur-md border border-white/10">
               <ShieldCheck className="h-5 w-5 text-secondary-400" />
               <span className="text-sm font-bold text-white leading-none">100%</span>
               <span className="text-[10px] uppercase tracking-wider text-white/60">Secure & Eco-Friendly</span>
            </div>
            <div className="flex flex-col gap-1 rounded-xl bg-black/20 p-2.5 sm:p-3 backdrop-blur-md border border-white/10">
               <Wind className="h-5 w-5 text-secondary-400" />
               <span className="text-sm font-bold text-white leading-none">24*7</span>
               <span className="text-[10px] uppercase tracking-wider text-white/60">Oxygen Service</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-1 rounded-xl bg-black/20 p-2.5 sm:p-3 backdrop-blur-md border border-white/10">
               <HeartHandshake className="h-5 w-5 text-secondary-400" />
               <span className="text-sm font-bold text-white leading-none">24*7</span>
               <span className="text-[10px] uppercase tracking-wider text-white/60">Trained Nurse</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Sidebar for Desktop */}
        <div className="absolute right-4 bottom-16 hidden flex-col items-end gap-3 lg:flex xl:right-8">
          <StatBadge 
            icon={Car} 
            number="24x7" 
            label="Private Car Available with Driver" 
            delay={2.0} 
            className="w-[300px]"
          />
          <StatBadge 
            icon={Stethoscope} 
            number="24x7" 
            label="Doctors Available On Call" 
            delay={2.1} 
            className="w-[300px] mr-6"
          />
          <StatBadge 
            icon={ShieldCheck} 
            number="100%" 
            label="Secure & Eco-Friendly Environment" 
            delay={2.2} 
            className="w-[300px] mr-12"
          />
          <StatBadge 
            icon={Wind} 
            number="24x7" 
            label="Oxygen Service" 
            delay={2.3} 
            className="w-[300px] mr-6"
          />
          <StatBadge 
            icon={HeartHandshake} 
            number="24x7" 
            label="Trained Nurse Availability" 
            delay={2.4} 
            className="w-[300px]"
          />
        </div>

      </div>

      <div className="hidden lg:block">
        <ScrollIndicator />
      </div>
    </section>
  );
};
