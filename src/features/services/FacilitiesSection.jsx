import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Apple, Users, BookOpen, Music, Accessibility } from 'lucide-react';
import { FacilityCard } from '../../components/ui/FacilityCard';

import ambulanceImg from '../../assets/services/ambulance_service_ind.png';
import dietaryImg from '../../assets/services/dietary_nutrition_ind.png';
import physiotherapyImg from '../../assets/services/physiotherapy_center_ind.png';
import libraryImg from '../../assets/services/library_room_ind.png';
import recreationImg from '../../assets/services/recreation_arts_ind.png';
import groundsImg from '../../assets/services/accessible_grounds_ind.png';

const FACILITIES = [
  {
    icon: Activity,
    title: "24/7 Ambulance Service",
    slug: "ambulance-service",
    description: "Round-the-clock emergency transport service equipped systems for immediate medical attention.",
    image: ambulanceImg,
  },
  {
    icon: Apple,
    title: "Dietary & Nutrition",
    slug: "dietary-nutrition",
    description: "Personalized meal plans created by clinical nutritionists, prepared in our strictly sanitized, hygienic kitchens.",
    image: dietaryImg,
  },
  {
    icon: Users,
    title: "Physiotherapy Center",
    slug: "physiotherapy",
    description: "Daily guided exercises, mobility training, and pain management by licensed geriatric physiotherapists.",
    image: physiotherapyImg,
  },
  {
    icon: BookOpen,
    title: "Library & Reading Room",
    slug: "library",
    description: "A quiet, comfortable space filled with classic literature, daily newspapers, and large-print books.",
    image: libraryImg,
  },
  {
    icon: Music,
    title: "Recreation & Arts",
    slug: "recreation",
    description: "Music therapy, art classes, and group activities designed to keep the mind sharp and spirits high.",
    image: recreationImg,
  },
  {
    icon: Accessibility,
    title: "Wheelchair Accessible Grounds",
    slug: "accessible-grounds",
    description: "Beautifully landscaped, anti-slip gardens designed specifically for safe, easy walking and wheelchair use.",
    image: groundsImg,
  }
];

export const FacilitiesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">World-Class Facilities</h2>
          <p className="text-lg text-foreground-muted font-light leading-relaxed">
            Every inch of our campus is designed with a singular focus: to provide absolute comfort, uncompromising safety, and joyous living for our residents.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility, index) => (
            <FacilityCard 
              key={facility.title}
              icon={facility.icon}
              title={facility.title}
              description={facility.description}
              image={facility.image}
              actionText="Explore More"
              onAction={() => navigate(`/services/${facility.slug}`)}
              delay={index * 0.15}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

