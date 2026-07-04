import React from 'react';
import { SEO } from '../components/common/SEO';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, MessageCircle, AlertCircle, Send, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';
import { PageTransition } from '../components/common/PageTransition';

const ContactInfoCard = ({ icon: Icon, title, content, subContent, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, type: "spring", bounce: 0.3 }}
    className="bg-surface p-6 rounded-2xl shadow-soft border border-border flex items-start gap-5 hover:shadow-float hover:-translate-y-1 hover:border-primary-200 transition-all duration-300 group"
  >
    <div className="p-3 bg-primary-50 text-primary-600 rounded-xl group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-bold text-foreground mb-1 group-hover:text-primary-600 transition-colors">{title}</h4>
      <p className="text-foreground-muted font-medium">{content}</p>
      {subContent && <p className="text-sm text-foreground-muted/70 mt-1.5">{subContent}</p>}
    </div>
  </motion.div>
);

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Thank you! Your message has been sent successfully.");
    reset();
  };

  return (
    <PageTransition>
      <SEO 
        title="Contact Us"
        description="Get in touch with Dipa Old Age Home. Contact us for inquiries, admissions, or volunteering. Located in Panchasayar, Kolkata."
      />

      <section className="pt-32 md:pt-40 pb-12 md:pb-20 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-primary-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-secondary-50/50 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium tracking-wide uppercase"
          >
            Get In Touch
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
          >
            We're Here to <span className="text-primary-500">Help.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground-muted font-light max-w-2xl mx-auto"
          >
            Whether you have a question about admissions, facilities, or just want to schedule a visit, our team is ready to assist you.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-5 space-y-5">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Contact Information</h3>
                <p className="text-foreground-muted font-light">Reach out to us directly through any of the channels below.</p>
              </motion.div>
              
              <ContactInfoCard icon={Phone} title="Main Reception" content="+91 8777265019" subContent="General inquiries and support" delay={0.1} />
              <ContactInfoCard icon={Phone} title="Admissions Office" content="+91 9123857892" subContent="New admissions and facility details" delay={0.15} />
              <ContactInfoCard icon={AlertCircle} title="24/7 Emergency" content="+91 6290485202" subContent="Immediate medical or urgent assistance" delay={0.2} />
              <ContactInfoCard icon={MessageCircle} title="WhatsApp Support" content="+91 9832270555" subContent="Quick messages and updates" delay={0.3} />
              <ContactInfoCard icon={Mail} title="Email Address" content="dipaoldagehome@gmail.com" delay={0.4} />
              <ContactInfoCard icon={Clock} title="Business & Visiting Hours" content="Mon - Sun: 9:00 AM - 8:00 PM" subContent="Please call ahead to schedule a facility tour." delay={0.5} />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-surface p-6 md:p-8 md:p-12 rounded-3xl shadow-2xl border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50/50 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                
                <h3 className="text-3xl font-serif font-bold text-foreground mb-8 relative z-10">Send us a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-foreground">Full Name *</label>
                      <input 
                        id="name"
                        {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name too short" } })}
                        className={cn(
                          "w-full px-5 py-3.5 bg-surface-muted border rounded-xl outline-none transition-all duration-300 focus:bg-surface focus:shadow-float",
                          errors.name ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" : "border-border focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
                        )}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-foreground">Phone Number *</label>
                      <input 
                        id="phone"
                        {...register("phone", { 
                          required: "Phone number is required", 
                          pattern: { value: /^[0-9+\s-]{10,15}$/, message: "Invalid phone number" } 
                        })}
                        className={cn(
                          "w-full px-5 py-3.5 bg-surface-muted border rounded-xl outline-none transition-all duration-300 focus:bg-surface focus:shadow-float",
                          errors.phone ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" : "border-border focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
                        )}
                        placeholder="+91 9876543210"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-foreground">Email Address</label>
                    <input 
                      id="email"
                      {...register("email", { 
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" } 
                      })}
                      className={cn(
                        "w-full px-5 py-3.5 bg-surface-muted border rounded-xl outline-none transition-all duration-300 focus:bg-surface focus:shadow-float",
                        errors.email ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" : "border-border focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
                      )}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-foreground">Subject</label>
                    <select 
                      id="subject"
                      {...register("subject")}
                      className="w-full px-5 py-3.5 bg-surface-muted border border-border rounded-xl outline-none transition-all duration-300 focus:bg-surface focus:shadow-float focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 appearance-none"
                    >
                      <option value="admission">Admissions Inquiry</option>
                      <option value="visit">Schedule a Visit</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-foreground">Message *</label>
                    <textarea 
                      id="message"
                      {...register("message", { required: "Please enter your message", minLength: { value: 10, message: "Message must be at least 10 characters long" } })}
                      className={cn(
                        "w-full px-5 py-4 bg-surface-muted border rounded-xl outline-none transition-all duration-300 focus:bg-surface focus:shadow-float resize-none h-40",
                        errors.message ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" : "border-border focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
                      )}
                      placeholder="How can we help you?"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto mt-4 px-10 gap-2 disabled:opacity-70" disabled={isSubmitting}>
                    {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" />Sending...</> : <><Send className="w-5 h-5" />Send Message</>}
                  </Button>
                </form>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[600px] bg-surface-muted border-t border-border">
        <div className="absolute top-10 left-10 md:top-1/2 md:-translate-y-1/2 z-10 hidden md:block">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-border/50 max-w-sm"
          >
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6 shadow-inner">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Our Location</h3>
            <p className="text-foreground-muted leading-relaxed font-light mb-6">
              2088 Nayabad Main Road, <br/>
              Nabamalancha Dreamland - 1, <br/>
              Panchasayar, Kolkata, <br/>
              West Bengal 700094
            </p>
            <a href="https://www.google.com/maps?q=22.478256,88.4109247" target="_blank" rel="noreferrer" aria-label="Get Directions" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors">
              Get Directions &rarr;
            </a>
          </motion.div>
        </div>
        <iframe 
          src="https://maps.google.com/maps?q=22.478256,88.4109247&hl=en&z=17&output=embed" 
          width="100%" height="100%" style={{ border: 0, filter: 'contrast(1.05) opacity(0.95)' }} 
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Dipa Old Age Home Location Map" className="w-full h-full object-cover"
        />
      </section>
    </PageTransition>
  );
}

