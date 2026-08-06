'use client';

import { motion } from 'framer-motion';

interface EducationSystemSelectorProps {
  selectedCountry: string | null;
  selectedEducationSystem: string | null;
  onSelect: (system: string | null) => void;
}

const systemsByCountry: Record<string, string[]> = {
  Kenya: ['KCSE'],
  'United Kingdom': ['GCSE', 'A Levels'],
  'United States': ['SAT', 'ACT'],
  Canada: ['Provincial Curriculum'],
  India: ['CBSE', 'ICSE'],
  Nigeria: ['WAEC'],
  'South Africa': ['NSC'],
  International: ['IB'],
};

export function EducationSystemSelector({ selectedCountry, selectedEducationSystem, onSelect }: EducationSystemSelectorProps) {
  const systems = selectedCountry ? systemsByCountry[selectedCountry] ?? [] : [];

  if (!selectedCountry) {
    return (
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-400">
        Choose a country first to unlock the relevant education systems.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-400">
        The systems below are tailored to your selected country and will help us personalize your journey.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {systems.map((system) => {
          const isActive = selectedEducationSystem === system;
          return (
            <motion.button
              key={system}
              type="button"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(system)}
              className={`rounded-2xl border px-4 py-4 text-left transition ${
                isActive
                  ? 'border-cyan-400/40 bg-cyan-400/10 text-white shadow-lg shadow-cyan-500/10'
                  : 'border-white/10 bg-slate-900/60 text-slate-300 hover:border-white/20 hover:bg-slate-800/70'
              }`}
            >
              <p className="font-semibold">{system}</p>
              <p className="mt-1 text-sm text-slate-400">Relevant to {selectedCountry}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
