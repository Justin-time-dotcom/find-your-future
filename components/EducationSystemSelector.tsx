'use client';

import { useMemo } from 'react';
import { getCountryById } from '../data/countries';
import { getEducationSystemById } from '../data/educationSystems';
import { EducationSystemCard } from './EducationSystemCard';
import { OtherEducationForm } from './OtherEducationForm';

interface EducationSystemSelectorProps {
  selectedCountry: string | null;
  selectedEducationSystem: string | null;
  onSelect: (system: string | null) => void;
}

export function EducationSystemSelector({ selectedCountry, selectedEducationSystem, onSelect }: EducationSystemSelectorProps) {
  const country = useMemo(() => {
    if (!selectedCountry) return null;
    return getCountryById(selectedCountry.toLowerCase().replace(/\s+/g, '-'));
  }, [selectedCountry]);

  const systems = useMemo(() => {
    if (!country) return { national: [], international: [], other: [] };

    const national = country.nationalEducationSystems.map((id) => getEducationSystemById(id)).filter(Boolean);
    const international = country.internationalEducationSystems.map((id) => getEducationSystemById(id)).filter(Boolean);
    const other = [getEducationSystemById('other')].filter(Boolean);

    return { national, international, other };
  }, [country]);

  if (!selectedCountry || !country) {
    return (
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-400">
        Choose a country first to unlock the relevant education systems.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-400">
        These options are tailored to {country.name} and organized by national and international recognition.
      </p>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">National education systems</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {systems.national.map((system) => (
              <EducationSystemCard
                key={system.id}
                system={system}
                isSelected={selectedEducationSystem === system.id}
                onSelect={() => onSelect(system.id)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">International education systems</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {systems.international.map((system) => (
              <EducationSystemCard
                key={system.id}
                system={system}
                isSelected={selectedEducationSystem === system.id}
                onSelect={() => onSelect(system.id)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Other / Not Listed</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {systems.other.map((system) => (
              <EducationSystemCard
                key={system.id}
                system={system}
                isSelected={selectedEducationSystem === system.id}
                onSelect={() => onSelect(system.id)}
              />
            ))}
          </div>
          {selectedEducationSystem === 'other' && (
            <div className="mt-4">
              <OtherEducationForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
