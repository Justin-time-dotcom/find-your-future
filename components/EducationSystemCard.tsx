'use client';

import { motion } from 'framer-motion';
import type { EducationSystem } from '../data/educationSystems';

interface EducationSystemCardProps {
  system: EducationSystem;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function EducationSystemCard({ system, isSelected, onSelect }: EducationSystemCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(system.id)}
      className={`rounded-[1.25rem] border p-4 text-left transition ${
        isSelected
          ? 'border-cyan-400/40 bg-cyan-400/10 text-white shadow-[0_0_0_1px_rgba(20,184,166,0.15),0_10px_30px_rgba(20,184,166,0.18)]'
          : 'border-white/10 bg-slate-900/70 text-slate-300 hover:border-white/20 hover:bg-slate-800/70'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-base font-semibold">{system.name}</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">{system.description}</p>
        </div>
        <span className="text-xl">{system.category === 'international' ? '🌐' : system.category === 'national' ? '🏫' : '🧩'}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
        <span className="rounded-full border border-white/10 px-2.5 py-1">Graduation age {system.graduationAge}</span>
        <span className="rounded-full border border-white/10 px-2.5 py-1">{system.subjectCount} subjects</span>
        <span className="rounded-full border border-white/10 px-2.5 py-1">{system.gradingScale}</span>
      </div>
    </motion.button>
  );
}
