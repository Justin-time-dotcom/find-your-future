'use client';

import { useEffect, useState } from 'react';

const metrics = [
  { value: 1000, suffix: '+', label: 'Universities' },
  { value: 50000, suffix: '+', label: 'Courses' },
  { value: 10000, suffix: '+', label: 'Scholarships' },
  { value: 100, suffix: '+', label: 'Countries' },
];

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return value;
}

function AnimatedMetric({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const count = useCountUp(value);

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6 text-center">
      <p className="text-4xl font-semibold text-white sm:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/70 px-6 py-16 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-8 lg:px-12">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <AnimatedMetric key={metric.label} value={metric.value} suffix={metric.suffix} label={metric.label} />
        ))}
      </div>
    </section>
  );
}
