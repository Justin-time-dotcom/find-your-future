'use client';

import { motion } from 'framer-motion';

interface CountryCardProps {
  country: { name: string; flag: string; educationSystems: string[] };
  isSelected: boolean;
  isHighlighted: boolean;
  onSelect: (country: string) => void;
}

export function CountryCard({ country, isSelected, isHighlighted, onSelect }: CountryCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(country.name)}
      className={`group flex items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
        isSelected
          ? 'border-cyan-400/40 bg-cyan-400/10 text-white shadow-[0_0_0_1px_rgba(20,184,166,0.15),0_10px_30px_rgba(20,184,166,0.18)]'
          : 'border-white/10 bg-slate-900/60 text-slate-300 hover:border-white/20 hover:bg-slate-800/70'
      } ${isHighlighted ? 'ring-1 ring-cyan-400/30' : ''}`}
    >
      <span className="flex items-center gap-3 text-sm font-medium">
        <span className="text-lg">{country.flag}</span>
        <span>{country.name}</span>
      </span>
      <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
        {isSelected ? (
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300"
          >
            ✓
          </motion.span>
        ) : null}
      </span>
    </motion.button>
  );
}
