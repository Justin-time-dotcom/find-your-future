'use client';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center gap-2" aria-label={`Step ${currentStep + 1} of ${totalSteps}`}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index === currentStep;
        return (
          <div
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition ${isActive ? 'bg-cyan-400' : 'bg-slate-700'}`}
          />
        );
      })}
    </div>
  );
}
