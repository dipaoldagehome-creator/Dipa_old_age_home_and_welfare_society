import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, HandHeart, QrCode, Building, Wallet, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const BENEFITS = [
  "Ensures nutritious daily meals.",
  "Maintains a sterile, safe environment.",
  "Supports recreational therapies."
];

export const DonationSection = () => {
  return (
    <section id="donate" className="py-16 md:py-24 relative overflow-hidden bg-primary-900 text-white">
      {/* Animated Background Gradients using Framer Motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-72 h-72 md:w-[800px] md:h-[800px] bg-primary-600/40 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 w-72 h-72 md:w-[800px] md:h-[800px] bg-secondary-500/30 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Column: Appeal & Benefits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary-400 bg-primary-800/50 backdrop-blur-sm text-primary-100 text-sm font-medium tracking-wide uppercase"
            >
              <Heart className="w-4 h-4 text-secondary-400" fill="currentColor" />
              Support Our Cause
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
            >
              Make a <span className="text-secondary-400">Difference</span> Today.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-100 font-light mb-10 leading-relaxed max-w-xl"
            >
              Your generous contribution directly helps us provide continuous medical care, nutritious meals, and a loving home for seniors who have nowhere else to turn.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-12"
            >
              {BENEFITS.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-primary-50">
                  <CheckCircle2 className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                  <span className="font-light tracking-wide">{benefit}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-secondary-500 hover:bg-secondary-600 text-white border-none shadow-float gap-2">
                <HandHeart className="w-5 h-5" />
                Become a Volunteer
              </Button>
              <Button variant="outline" size="lg" className="border-primary-400 text-white hover:bg-primary-800 gap-2 transition-colors">
                <Phone className="w-5 h-5" />
                +91 9831524258
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Payment Details Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="w-full max-w-md mx-auto lg:ml-auto"
          >
            {/* Luxury Glass/Solid Card */}
            <div className="bg-surface text-foreground rounded-3xl p-6 md:p-8 md:p-10 shadow-2xl relative overflow-hidden">

              <h3 className="text-2xl font-serif font-bold mb-8 text-center text-primary-950">Donation Details</h3>

              <div className="space-y-6">
                {/* Bank Details */}
                <div className="bg-surface-muted p-6 rounded-2xl border border-border group hover:border-primary-200 transition-colors">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-primary-100 rounded-xl text-primary-600">
                      <Building className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-foreground">Direct Bank Transfer</h4>
                  </div>
                  <div className="space-y-3 text-sm text-foreground-muted font-mono bg-white p-4 rounded-xl border border-border/50">
                    <p className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span>Account Name:</span> <strong className="text-foreground">DIPA OLD AGE HOME</strong>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span>Account No:</span> <strong className="text-foreground tracking-widest">XXXX XXXX XXXX</strong>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span>IFSC Code:</span> <strong className="text-foreground tracking-widest">XXXX0000000</strong>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span>Bank Name:</span> <strong className="text-foreground">State Bank of India</strong>
                    </p>
                  </div>
                </div>

                {/* UPI / QR Code */}
                <div className="bg-surface-muted p-6 rounded-2xl border border-border flex items-center justify-between group hover:border-primary-200 transition-colors">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2.5 bg-primary-100 rounded-xl text-primary-600">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-foreground">UPI Transfer</h4>
                    </div>
                    <p className="text-sm font-mono text-foreground-muted pl-14">dipaoldagehome@upi</p>
                  </div>

                  {/* QR Code Placeholder */}
                  <div className="w-24 h-24 bg-white border border-border rounded-xl flex flex-col items-center justify-center p-2 shadow-sm">
                    <QrCode className="w-10 h-10 text-primary-900 mb-1" />
                    <span className="text-[10px] font-bold text-primary-900 tracking-wider">SCAN TO PAY</span>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <p className="text-xs text-center text-foreground-muted mt-8 flex items-center justify-center gap-1.5 font-medium">
                <Heart className="w-3 h-3 text-secondary-500" fill="currentColor" />
                All donations are tax-exempted under Section 80G.
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


