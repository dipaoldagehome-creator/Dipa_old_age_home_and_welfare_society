import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import { Button } from '../components/ui/Button';

// Image imports
import photo1 from '../assets/GalleryImages/photo1.jpeg';
import photo2 from '../assets/GalleryImages/photo2.jpeg';
import photo4 from '../assets/GalleryImages/photo4.jpeg';
import photo5 from '../assets/GalleryImages/photo5.jpeg';
import photo6 from '../assets/GalleryImages/photo6.jpeg';
import photo7 from '../assets/GalleryImages/photo7.jpeg';

// Comprehensive details for each service
const SERVICES_DATA = {
  "ambulance-service": {
    title: "24/7 Ambulance Service",
    shortDesc: "Round-the-clock emergency transport service equipped with advanced life support.",
    image: photo1,
    content: [
      "Our 24/7 Ambulance Service provides immediate medical transportation for our residents in times of emergency. Recognizing that every second counts, we maintain a fleet of fully-equipped ambulances on standby, parked directly on the premises.",
      "Each ambulance is outfitted with Advanced Life Support (ALS) systems, including oxygen cylinders, defibrillators, cardiac monitors, and emergency medical kits. This ensures that critical care begins the moment our team reaches the resident.",
      "Our trained paramedics and emergency medical technicians (EMTs) are available around the clock to provide pre-hospital care and ensure a safe, rapid transfer to our partnered super-specialty hospitals when required."
    ],
    features: [
      "On-campus standby for immediate response",
      "Advanced Life Support (ALS) equipment",
      "Trained paramedics and EMTs on duty",
      "Direct tie-ups with leading super-specialty hospitals"
    ]
  },
  "dietary-nutrition": {
    title: "Dietary & Nutrition",
    shortDesc: "Personalized, wholesome meal plans tailored to individual health requirements.",
    image: photo2,
    content: [
      "Proper nutrition is a cornerstone of senior health and vitality. At Dipa Old Age Home, our culinary and nutrition teams work closely to design meals that are both delicious and nutritionally optimized for geriatric needs.",
      "Upon admission, each resident undergoes a comprehensive dietary assessment by our clinical nutritionists. We cater to specific medical conditions such as diabetes, hypertension, renal issues, and food allergies, ensuring every meal supports their treatment plan.",
      "Our kitchens maintain the highest standards of hygiene. Meals are prepared using fresh, locally sourced ingredients, avoiding excessive sodium, refined sugars, and unhealthy fats while maximizing flavor and nutritional density."
    ],
    features: [
      "Customized meal plans by clinical dietitians",
      "Special diets for diabetics, cardiac, and renal care",
      "Strictly sanitized, state-of-the-art kitchen",
      "Fresh, locally sourced organic ingredients"
    ]
  },
  "physiotherapy": {
    title: "Physiotherapy Center",
    shortDesc: "Comprehensive physical therapy to maintain mobility, strength, and pain relief.",
    image: photo4,
    content: [
      "Maintaining mobility and independence is crucial for a high quality of life in later years. Our dedicated Physiotherapy Center is fully equipped with modern rehabilitative apparatus specifically chosen for geriatric care.",
      "Our licensed physiotherapists conduct daily sessions focusing on pain management, joint flexibility, muscle strengthening, and balance training to prevent falls. We treat chronic conditions like arthritis, osteoporosis, and post-stroke rehabilitation.",
      "Whether it involves guided exercises, ultrasound therapy, or gentle massages, our compassionate therapists work one-on-one with residents to ensure gradual, safe, and effective physical improvements."
    ],
    features: [
      "Daily guided mobility and strength exercises",
      "Post-operative and post-stroke rehabilitation",
      "Pain management for arthritis and joint issues",
      "Modern rehabilitative equipment"
    ]
  },
  "library": {
    title: "Library & Reading Room",
    shortDesc: "A serene space for literature lovers to relax, read, and engage their minds.",
    image: photo5,
    content: [
      "Our Library & Reading Room is a quiet sanctuary for intellectual stimulation and relaxation. We believe that a sharp, engaged mind is key to a fulfilling life, which is why we offer a diverse and constantly updated collection of reading materials.",
      "The library features classic literature, spiritual texts, biographies, and regional fiction. For our visually impaired residents, we stock large-print books and audiobooks. Daily regional and national newspapers are provided to keep everyone connected with the world.",
      "Comfortable ergonomic seating, excellent natural lighting, and a peaceful atmosphere make this one of the most beloved spots on our campus. We also host weekly book club meetings and reading sessions."
    ],
    features: [
      "Extensive collection of books and daily newspapers",
      "Large-print books and audiobooks available",
      "Ergonomic reading chairs and excellent lighting",
      "Weekly book club discussions"
    ]
  },
  "recreation": {
    title: "Recreation & Arts",
    shortDesc: "Engaging group activities, music, and art therapy to lift spirits and build community.",
    image: photo6,
    content: [
      "Life at Dipa Old Age Home is vibrant and joyful, thanks to our robust Recreation & Arts program. We understand that emotional and social well-being is just as important as physical health.",
      "Our residents enjoy a wide array of activities including music therapy, singing sessions, indoor games (like chess, carrom, and bingo), and art classes. These activities are carefully designed to improve cognitive function, reduce anxiety, and foster a strong sense of community.",
      "We celebrate all major festivals, birthdays, and special occasions together, creating a familial bond among residents and staff. Regular cultural evenings feature performances by both invited artists and the residents themselves."
    ],
    features: [
      "Music therapy and group singing sessions",
      "Art, craft, and cognitive skill-building classes",
      "Indoor games and community bonding activities",
      "Grand celebrations of festivals and birthdays"
    ]
  },
  "accessible-grounds": {
    title: "Wheelchair Accessible Grounds",
    shortDesc: "Beautiful, safe, and barrier-free outdoor spaces for peaceful evening walks.",
    image: photo7,
    content: [
      "Nature has a profoundly calming effect on the human mind. Our campus boasts beautifully landscaped gardens that provide a breath of fresh air and a serene environment for all our residents.",
      "Safety is our top priority. The entire outdoor area is designed with barrier-free, anti-slip pathways that are wide enough for easy wheelchair maneuverability. Ramps with gentle gradients connect all outdoor spaces seamlessly.",
      "Strategically placed resting benches, shaded pavilions, and lush greenery invite residents to enjoy their morning tea, meditate, or simply watch the sunset in a completely secure, enclosed environment."
    ],
    features: [
      "Lush, beautifully landscaped therapeutic gardens",
      "Anti-slip, barrier-free walking pathways",
      "Fully wheelchair accessible with gentle ramps",
      "Shaded resting pavilions and seating areas"
    ]
  }
};

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = SERVICES_DATA[slug];

  // If URL slug doesn't match any service, redirect to the main services page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <PageTransition>
      <SEO 
        title={`${service.title} - Dipa Old Age Home`}
        description={service.shortDesc}
      />
      
      {/* Hero Section for Individual Service */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 bg-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="inline-flex items-center text-primary-300 hover:text-secondary-400 transition-colors mb-6 font-medium text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-primary-100 font-light max-w-2xl mx-auto leading-relaxed">
              {service.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Content Area (Text) */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="prose prose-lg prose-primary max-w-none text-foreground-muted">
                {service.content.map((paragraph, idx) => (
                  <p key={idx} className="mb-6 leading-relaxed font-light text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 bg-surface-muted rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar Area (Sticky CTA/Image) */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-3xl overflow-hidden shadow-soft border border-border">
                  <img 
                    src={service.image} 
                    alt={`${service.title} at Dipa Old Age Home`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="bg-primary-900 rounded-3xl p-8 text-white shadow-lg text-center">
                  <h4 className="text-xl font-bold mb-3">Need Immediate Assistance?</h4>
                  <p className="text-primary-200 text-sm mb-6 font-light">
                    Our team is ready to answer your questions and help you with the admission process.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => window.location.href = 'tel:+919831524258'}
                    leftIcon={<Phone className="w-5 h-5" />}
                  >
                    Call Us Now
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
