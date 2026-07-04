import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { SectionHeader } from '../../components/common/SectionHeader';
import { fadeUp } from '../../animations/variants';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const TESTIMONIALS = [
  { name: "Rajesh Banerjee", relation: "Son of Resident", rating: 5, text: "The level of care and compassion my mother receives here is unparalleled. It truly feels like an extension of our own family. The medical staff is incredibly proactive.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
  { name: "Anita Dasgupta", relation: "Daughter of Resident", rating: 5, text: "After visiting five different facilities, Dipa Old Age Home stood out immediately. The cleanliness, the warm atmosphere, and the transparent communication give us total peace of mind.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  { name: "Dr. Sandeep Mitra", relation: "Visiting Geriatrician", rating: 5, text: "As a medical professional, I am highly impressed by their ICU-level setup and rapid emergency response times. They maintain the highest standard of geriatric care in the city.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
  { name: "Meera Sen", relation: "Wife of Resident", rating: 5, text: "My husband requires continuous monitoring, and the nurses here are angels. They don't just administer medicine; they sit, talk, and laugh with him.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
  { name: "Karan Roy", relation: "Grandson of Resident", rating: 5, text: "Seeing my grandfather so happy and engaged in the daily music therapy sessions brings tears to my eyes. The holistic approach here is truly life-changing.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 rounded-l-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-secondary-50/50 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Family Reviews"
          title="Words of"
          highlight="Trust."
          description="Don't just take our word for it. Hear directly from the families who have entrusted us with the care of their most cherished members."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full relative py-4"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={true}
            className="pb-16"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={index} className="px-4 py-4">
                <div className="bg-surface rounded-3xl p-6 md:p-8 md:p-10 shadow-soft border border-border relative h-full flex flex-col group hover:border-primary-300 hover:shadow-float transition-all duration-300">
                  <Quote className="absolute top-6 right-8 w-24 h-24 text-primary-50 opacity-70 rotate-6 pointer-events-none transition-transform group-hover:scale-110 group-hover:-rotate-6 duration-500" />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-secondary-500 text-secondary-500 drop-shadow-sm" />
                      ))}
                    </div>
                    <p className="text-foreground-muted font-light leading-relaxed text-lg mb-8 flex-1 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-primary-50">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground font-serif text-lg">{testimonial.name}</h4>
                        <p className="text-primary-600 text-sm font-medium">{testimonial.relation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};


