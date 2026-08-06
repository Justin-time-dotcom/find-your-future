'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface CountrySelectorProps {
  selectedCountry: string | null;
  onSelect: (country: string | null) => void;
}

const countries = [
  { name: 'Kenya', flag: '🇰🇪', educationSystems: ['KCSE'] },
  { name: 'United Kingdom', flag: '🇬🇧', educationSystems: ['GCSE', 'A Levels'] },
  { name: 'United States', flag: '🇺🇸', educationSystems: ['SAT', 'ACT'] },
  { name: 'Canada', flag: '🇨🇦', educationSystems: ['Provincial Curriculum'] },
  { name: 'India', flag: '🇮🇳', educationSystems: ['CBSE', 'ICSE'] },
  { name: 'Nigeria', flag: '🇳🇬', educationSystems: ['WAEC'] },
  { name: 'South Africa', flag: '🇿🇦', educationSystems: ['NSC'] },
  { name: 'International', flag: '🌍', educationSystems: ['IB'] },
];

export function CountrySelector({ selectedCountry, onSelect }: CountrySelectorProps) {
  const [query, setQuery] = useState('');
  const filteredCountries = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return countries;
    return countries.filter((country) => country.name.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="country-search" className="text-sm font-medium text-slate-200">
          Search country
        </label>
        <input
          id="country-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type a country name"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-cyan-400"
          aria-label="Search country"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {filteredCountries.map((country) => {
          const isActive = selectedCountry === country.name;
          return (
            <motion.button
              key={country.name}
              type="button"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(country.name)}
              className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                isActive
                  ? 'border-cyan-400/40 bg-cyan-400/10 text-white shadow-lg shadow-cyan-500/10'
                  : 'border-white/10 bg-slate-900/60 text-slate-300 hover:border-white/20 hover:bg-slate-800/70'
              }`}
            >
              <span className="flex items-center gap-3 text-sm font-medium">
                <span className="text-lg">{country.flag}</span>
                {country.name}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {country.educationSystems.length > 1 ? 'Multiple' : 'Single'}
              </span>
            </motion.button>
          );
        })}
      </div>

      {!filteredCountries.length && (
        <p className="text-sm text-slate-400">No countries matched your search. Try a different name.</p>
      )}
    </div>
  );
}
