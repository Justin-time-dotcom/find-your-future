'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { getCountryById } from '../data/countries';
import { getEducationSystemById } from '../data/educationSystems';
import { CountrySelector } from './CountrySelector';
import { EducationSystemSelector } from './EducationSystemSelector';
import { ProgressBar } from './ProgressBar';
import { useJourney } from './JourneyContext';
import { WizardNavigation } from './WizardNavigation';

const stepContent = [
  {
    title: 'Country Selection',
    description: 'Tell us where you completed your secondary education so we can tailor the path to your region.',
  },
  {
    title: 'Education System',
    description: 'Choose the curriculum or qualification framework you studied for more accurate recommendations.',
  },
  {
    title: 'Subject Grades',
    description: 'Add the subjects and grades that matter for your study and career recommendations.',
  },
  {
    title: 'Recommendations',
    description: 'We will use your selections to build your personalized future roadmap.',
  },
];

export function JourneyWizard() {
  const {
    currentStep,
    selectedCountry,
    selectedEducationSystem,
    customSubjects,
    customGrades,
    setCountry,
    setEducationSystem,
    setCustomSubjects,
    setCustomGrades,
    nextStep,
    previousStep,
    closeWizard,
    completeJourney,
  } = useJourney();

  const countryProfile = useMemo(() => (selectedCountry ? getCountryById(selectedCountry) : null), [selectedCountry]);
  const selectedSystem = useMemo(() => (selectedEducationSystem ? getEducationSystemById(selectedEducationSystem) : null), [selectedEducationSystem]);

  useEffect(() => {
    if (!countryProfile || customSubjects.length) return;
    setCustomSubjects(countryProfile.defaultRequiredSubjects);
  }, [countryProfile, customSubjects.length, setCustomSubjects]);

  const canContinue = useMemo(() => {
    if (currentStep === 0) return Boolean(selectedCountry);
    if (currentStep === 1) return Boolean(selectedEducationSystem);
    if (currentStep === 2) return customSubjects.length > 0;
    return true;
  }, [currentStep, selectedCountry, selectedEducationSystem, customSubjects.length]);

  const handleContinue = () => {
    if (currentStep === 3) {
      completeJourney();
      return;
    }

    if (canContinue) {
      nextStep();
    }
  };

  const handleGradeChange = (subject: string, grade: string) => {
    setCustomGrades({ ...customGrades, [subject]: grade });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 px-3 py-3 backdrop-blur-xl sm:px-4 sm:py-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        className="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-3xl flex-col rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-2xl shadow-slate-950/50"
      >
        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Start your journey</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">{stepContent[currentStep].title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">{stepContent[currentStep].description}</p>
            </div>
            <button
              type="button"
              onClick={closeWizard}
              aria-label="Close journey wizard"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="mt-6">
            <ProgressBar currentStep={currentStep} totalSteps={4} labels={['Country', 'Education System', 'Subject Grades', 'Recommendations']} />
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4 sm:p-5">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="country"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                >
                  <CountrySelector selectedCountry={selectedCountry} onSelect={setCountry} />
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key="system"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                >
                  <EducationSystemSelector selectedCountry={selectedCountry} selectedEducationSystem={selectedEducationSystem} onSelect={setEducationSystem} />
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="grades"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="space-y-4">
                    <p className="text-sm leading-7 text-slate-400">
                      Add your subject grades for a stronger recommendation profile.
                    </p>
                    <div className="grid gap-3">
                      {customSubjects.map((subject) => (
                        <label key={subject} className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                          <span className="font-medium">{subject}</span>
                          <input
                            value={customGrades[subject] ?? ''}
                            onChange={(event) => handleGradeChange(subject, event.target.value)}
                            placeholder="Enter grade"
                            className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
                            aria-label={`Grade for ${subject}`}
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="recommendations"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Country</p>
                      <p className="mt-1 text-lg font-semibold text-white">{countryProfile?.name ?? selectedCountry ?? 'Not selected yet'}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Education system</p>
                      <p className="mt-1 text-lg font-semibold text-white">{selectedSystem?.name ?? selectedEducationSystem ?? 'Not selected yet'}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Subject grades</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {customSubjects.length ? (
                          customSubjects.map((subject) => (
                            <span key={subject} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
                              {subject}: {customGrades[subject] || '—'}
                            </span>
                          ))
                        ) : (
                          <span className="text-sm text-slate-400">No grades entered yet</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="border-t border-white/10 bg-slate-900/95 px-4 py-4 sm:px-6 lg:px-8">
          <WizardNavigation
            currentStep={currentStep}
            totalSteps={4}
            onBack={currentStep === 0 ? closeWizard : previousStep}
            onContinue={handleContinue}
            onCancel={closeWizard}
            canContinue={canContinue}
          />
        </div>
      </motion.div>
    </div>
  );
}
