import React, { Suspense, lazy } from 'react';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';

const FacilitiesSection = lazy(() => import('../features/services/FacilitiesSection').then(module => ({ default: module.FacilitiesSection })));
const DailyActivities = lazy(() => import('../features/services/DailyActivities').then(module => ({ default: module.DailyActivities })));

export default function ServicesPage() {
  return (
    <PageTransition>
      <SEO 
        title="Services & Facilities"
        description="Explore our world-class medical facilities, personalized diet plans, and holistic daily activities designed exclusively for senior wellness."
      />
      
      <section className="pt-32 md:pt-40 pb-12 md:pb-20 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">Services & <span className="text-primary-500">Care.</span></h1>
          <p className="text-lg text-foreground-muted font-light max-w-2xl mx-auto">
            From 24/7 medical supervision to engaging recreational activities, we provide a holistic ecosystem.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="h-48 w-full flex items-center justify-center animate-pulse bg-surface-muted" />}>
        <FacilitiesSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-48 w-full flex items-center justify-center animate-pulse bg-surface-muted" />}>
        <DailyActivities />
      </Suspense>
    </PageTransition>
  );
}

