"use client";

import { CallToAction } from '../components/CallToAction';
import { FeatureCard } from '../components/FeatureCard';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { InteractiveWorld } from '../components/InteractiveWorld';
import { JourneyWizard } from '../components/JourneyWizard';
import { Stats } from '../components/Stats';
import { useJourney } from '../components/JourneyContext';

const features = [
  {
    title: 'Universities',
    description: 'Discover institutions that fit your academic profile, budget, and long-term goals.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 2 7l10 4 10-4-10-4Z" />
        <path d="M5 10v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5" />
        <path d="M7 16v3" />
        <path d="M17 16v3" />
      </svg>
    ),
  },
  {
    title: 'Scholarships',
    description: 'Explore funding opportunities tailored to merit, need, and region-specific eligibility.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 4 7v6c0 4.2 2.8 7.8 8 8 5.2-.2 8-3.8 8-8V7l-8-4Z" />
        <path d="m8 12 2.4 2.4L16 9" />
      </svg>
    ),
  },
  {
    title: 'Careers',
    description: 'Connect your strengths to future-ready roles and emerging industries across the globe.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 5v14" />
        <path d="M16 5v14" />
        <path d="M4 10h16" />
      </svg>
    ),
  },
  {
    title: 'Courses',
    description: 'Compare programs and pathways that align with your academic background and ambitions.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16" />
        <path d="M7 3v18" />
        <path d="M17 3v18" />
        <path d="M4 18h16" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const { isWizardOpen } = useJourney();

  return (
    <main className="space-y-8 pb-8 sm:space-y-10 lg:space-y-12">
      <Hero />

      <section id="features" className="rounded-[2rem] border border-white/10 bg-slate-900/70 px-6 py-16 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Everything you need</span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Build a future with guidance that feels personal and precise.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From institutions to financial support, every recommendation is designed to match your profile.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <InteractiveWorld />
      <HowItWorks />
      <Stats />
      <CallToAction />

      {isWizardOpen && <JourneyWizard />}
    </main>
  );
}
