'use client';

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[-8%] top-[-8%] h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-6%] h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute left-[10%] top-[24%] h-24 w-24 rounded-full bg-slate-400/10 blur-2xl" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>
  );
}
