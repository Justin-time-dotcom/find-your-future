'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo } from 'react';
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
    title: 'Review',
    description: 'We will use your selections to build your personalized future roadmap.',
  },
];

export function JourneyWizard() {
  const { currentStep, selectedCountry, selectedEducationSystem, setCountry, setEducationSystem, nextStep, previousStep, closeWizard, completeJourney } = useJourney();

  const canContinue = useMemo(() => {
    if (currentStep === 0) return Boolean(selectedCountry);
    if (currentStep === 1) return Boolean(selectedEducationSystem);
    return true;
  }, [currentStep, selectedCountry, selectedEducationSystem]);

  const handleContinue = () => {
    if (currentStep === 2) {
      completeJourney();
      return;
    }

    if (canContinue) {
      nextStep();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        className="relative w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/50 sm:p-8"
      >
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
          <ProgressBar currentStep={currentStep} totalSteps={3} labels={['Country', 'Education System', 'Grades']} />
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
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
                key="review"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Country</p>
                    <p className="mt-1 text-lg font-semibold text-white">{selectedCountry ?? 'Not selected yet'}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Education system</p>
                    <p className="mt-1 text-lg font-semibold text-white">{selectedEducationSystem ?? 'Not selected yet'}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <WizardNavigation
          currentStep={currentStep}
          totalSteps={3}
          onBack={currentStep === 0 ? closeWizard : previousStep}
          onContinue={handleContinue}
          onCancel={closeWizard}
          canContinue={canContinue}
        />
      </motion.div>
    </div>
  );
}
