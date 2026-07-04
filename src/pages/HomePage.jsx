import React, { Suspense, lazy } from 'react';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import { HeroSection } from '../features/home/HeroSection';

// Lazy load below-the-fold components
const WhyChooseUs = lazy(() => import('../features/home/WhyChooseUs').then(module => ({ default: module.WhyChooseUs })));
const StatisticsSection = lazy(() => import('../features/home/StatisticsSection').then(module => ({ default: module.StatisticsSection })));
const TestimonialsSection = lazy(() => import('../features/home/TestimonialsSection').then(module => ({ default: module.TestimonialsSection })));
const DonationSection = lazy(() => import('../features/home/DonationSection').then(module => ({ default: module.DonationSection })));

export default function HomePage() {
  return (
    <PageTransition>
      <SEO 
        title="Welcome"
        description="Dipa Old Age Home provides a compassionate, safe, and vibrant community for seniors to enjoy their golden years with dignity, respect, and joy in Kolkata."
      />
      {/* Hero loaded immediately */}
      <HeroSection />
      
      {/* Lazy loaded sections */}
      <Suspense fallback={<div className="h-48 w-full flex items-center justify-center animate-pulse bg-surface-muted" />}>
        <WhyChooseUs />
      </Suspense>
      
      <Suspense fallback={<div className="h-48 w-full flex items-center justify-center animate-pulse bg-surface-muted" />}>
        <StatisticsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-48 w-full flex items-center justify-center animate-pulse bg-surface-muted" />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-48 w-full flex items-center justify-center animate-pulse bg-surface-muted" />}>
        <DonationSection />
      </Suspense>
    </PageTransition>
  );
}
