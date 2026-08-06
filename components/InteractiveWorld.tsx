'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { WorldMarker } from './WorldMarker';
import { WorldTooltip } from './WorldTooltip';

const regions = [
  {
    name: 'Africa',
    universities: '2,300',
    description: 'Universities shaping innovation and research across the continent.',
    accent: 'from-cyan-400/20 to-blue-500/20',
    position: { x: 56, y: 60 },
  },
  {
    name: 'Europe',
    universities: '5,400',
    description: 'Historic institutions and modern campuses with global reach.',
    accent: 'from-emerald-400/20 to-cyan-500/20',
    position: { x: 64, y: 36 },
  },
  {
    name: 'North America',
    universities: '4,100',
    description: 'Leading programs in technology, health, and entrepreneurship.',
    accent: 'from-blue-400/20 to-indigo-500/20',
    position: { x: 24, y: 38 },
  },
  {
    name: 'Asia',
    universities: '7,800',
    description: 'A vast network of academic excellence and diverse pathways.',
    accent: 'from-violet-400/20 to-cyan-500/20',
    position: { x: 76, y: 44 },
  },
  {
    name: 'South America',
    universities: '1,500',
    description: 'Growing opportunity with strong community and applied learning.',
    accent: 'from-amber-400/20 to-orange-500/20',
    position: { x: 34, y: 70 },
  },
  {
    name: 'Australia',
    universities: '600',
    description: 'High-quality education and strong industry connections.',
    accent: 'from-rose-400/20 to-fuchsia-500/20',
    position: { x: 86, y: 78 },
  },
];

export function InteractiveWorld() {
  const [activeRegion, setActiveRegion] = useState(regions[0]);

  const legend = useMemo(
    () => [
      { icon: '🎓', label: 'Universities' },
      { icon: '💸', label: 'Scholarships' },
      { icon: '🚀', label: 'Careers' },
    ],
    [],
  );

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 px-6 py-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-8 lg:px-12 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),transparent_35%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Explore the world of education</p>
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">Discover opportunity across every region.</h3>
          <p className="max-w-2xl text-lg text-slate-400">
            Hover or tap a continent to explore the academic ecosystems shaping futures around the world.
          </p>

          <div className="flex flex-wrap gap-3">
            {legend.map((item) => (
              <div key={item.label} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-300">
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="mx-auto flex max-w-[520px] items-center justify-center"
          >
            <svg viewBox="0 0 100 100" className="w-full max-w-[420px]">
              <circle cx="50" cy="50" r="29" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(96,165,250,0.4)" strokeWidth="0.45" />
              <path d="M30 33c4-8 12-13 20-13 8 0 15 4 20 12" fill="none" stroke="rgba(96,165,250,0.7)" strokeWidth="0.45" strokeLinecap="round" />
              <path d="M27 52c6 8 13 12 23 12 10 0 18-4 25-14" fill="none" stroke="rgba(20,184,166,0.7)" strokeWidth="0.45" strokeLinecap="round" />
              <path d="M34 24c4 4 6 8 6 14" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.4" strokeLinecap="round" />
              <path d="M64 22c4 3 7 8 7 15" fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="0.4" strokeLinecap="round" />
              <path d="M36 69c6 4 13 6 19 6 8 0 15-2 20-7" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.4" strokeLinecap="round" />
              {[...regions].map((region) => (
                <WorldMarker
                  key={region.name}
                  region={region}
                  isActive={activeRegion.name === region.name}
                  onHover={() => setActiveRegion(region)}
                  onClick={() => setActiveRegion(region)}
                />
              ))}
            </svg>
          </motion.div>

          <WorldTooltip region={activeRegion} />
        </div>
      </div>
    </section>
  );
}
