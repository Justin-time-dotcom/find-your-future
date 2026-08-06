'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CountryCard } from './CountryCard';

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
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredCountries = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return countries;
    return countries.filter((country) => country.name.toLowerCase().includes(normalized));
  }, [query]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [query]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filteredCountries.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex((current) => (current + 1) % filteredCountries.length);
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedIndex((current) => (current - 1 + filteredCountries.length) % filteredCountries.length);
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      const selected = filteredCountries[highlightedIndex];
      if (selected) {
        onSelect(selected.name);
      }
    }

    if (event.key === 'Escape') {
      setQuery('');
      inputRef.current?.blur();
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="country-search" className="text-sm font-medium text-slate-200">
          Search country
        </label>
        <input
          ref={inputRef}
          id="country-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a country name"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-cyan-400"
          aria-label="Search country"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {filteredCountries.map((country, index) => {
          const isActive = selectedCountry === country.name;
          return (
            <CountryCard
              key={country.name}
              country={country}
              isSelected={isActive}
              isHighlighted={index === highlightedIndex}
              onSelect={onSelect}
            />
          );
        })}
      </div>

      {!filteredCountries.length && (
        <p className="text-sm text-slate-400">No countries matched your search. Try a different name.</p>
      )}
    </div>
  );
}
