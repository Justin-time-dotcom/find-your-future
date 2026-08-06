'use client';

import { motion } from 'framer-motion';

const steps = [
  'Choose Country',
  'Select Education System',
  'Enter Individual Subject Grades',
  'Receive Personalized Recommendations',
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="rounded-[2rem] border border-white/10 bg-slate-900/70 px-6 py-16 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">How it works</span>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Your journey becomes clear in four thoughtful steps.
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          We guide you from discovery to next action, turning qualifications into a confident pathway.
        </p>
      </div>

      <div className="mt-12 space-y-6 lg:space-y-0">
        {steps.map((step, index) => {
          const descriptions = [
            'Select the country where you completed your secondary education to begin matching the right opportunities.',
            'Choose the curriculum or education framework you studied so recommendations stay relevant and accurate.',
            'Enter each subject grade individually to create a truly personalized profile.',
            'Receive universities, scholarships, careers, and courses aligned to your qualifications and goals.',
          ];

          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/20 lg:flex-row lg:items-start lg:justify-between lg:gap-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">Step {index + 1}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{step}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">{descriptions[index]}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden h-px flex-1 border-t border-dashed border-slate-700 lg:block" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
