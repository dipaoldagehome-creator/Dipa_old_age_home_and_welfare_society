import React, { Suspense, lazy } from 'react';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';

// Lazy load sections
const MissionVision = lazy(() => import('../features/about/MissionVision').then(module => ({ default: module.MissionVision })));
const FounderMessage = lazy(() => import('../features/about/FounderMessage').then(module => ({ default: module.FounderMessage })));
const Timeline = lazy(() => import('../features/about/Timeline').then(module => ({ default: module.Timeline })));

export default function AboutPage() {
  return (
    <PageTransition>
      <SEO 
        title="About Us"
        description="Learn about the history, mission, and core values of Dipa Old Age Home. Discover how we are setting the gold standard in senior care."
      />
      
      <section className="pt-32 md:pt-40 pb-12 md:pb-20 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">Our <span className="text-primary-500">Story.</span></h1>
          <p className="text-lg text-foreground-muted font-light max-w-2xl mx-auto">
            Founded on the principles of compassion and dignity, we have been a sanctuary for seniors.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="h-48 w-full flex items-center justify-center animate-pulse bg-surface-muted" />}>
        <MissionVision />
      </Suspense>

      <Suspense fallback={<div className="h-48 w-full flex items-center justify-center animate-pulse bg-surface-muted" />}>
        <FounderMessage />
      </Suspense>

      <Suspense fallback={<div className="h-48 w-full flex items-center justify-center animate-pulse bg-surface-muted" />}>
        <Timeline />
      </Suspense>
    </PageTransition>
  );
}

