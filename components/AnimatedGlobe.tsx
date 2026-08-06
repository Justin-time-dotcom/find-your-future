'use client';

import { motion } from 'framer-motion';

const markers = [
  { left: '18%', top: '26%', label: 'Nairobi' },
  { left: '70%', top: '32%', label: 'London' },
  { left: '55%', top: '66%', label: 'Toronto' },
  { left: '82%', top: '54%', label: 'Sydney' },
];

export function AnimatedGlobe() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]" aria-hidden="true">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[90px]" />
        <svg viewBox="0 0 400 400" className="relative w-full drop-shadow-[0_0_60px_rgba(37,99,235,0.22)]">
          <circle cx="200" cy="200" r="150" fill="rgba(2, 6, 23, 0.9)" stroke="rgba(96, 165, 250, 0.65)" strokeWidth="2" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(20, 184, 166, 0.35)" strokeWidth="1.2" strokeDasharray="5 8" />
          <path d="M94 160c36-38 90-59 138-56 44 3 89 23 122 62" fill="none" stroke="rgba(96,165,250,0.8)" strokeWidth="2" strokeLinecap="round" />
          <path d="M99 241c34 33 84 57 132 58 50 2 95-16 138-60" fill="none" stroke="rgba(20,184,166,0.8)" strokeWidth="2" strokeLinecap="round" />
          <path d="M132 113c24 16 43 22 69 22 32 0 80-8 116-37" fill="none" stroke="rgba(245,158,11,0.38)" strokeWidth="2" strokeLinecap="round" />
          <path d="M112 290c31-14 57-16 84-12 26 4 49 15 75 37" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="170" cy="168" r="10" fill="#2563eb" />
          <circle cx="223" cy="232" r="12" fill="#14b8a6" />
          <circle cx="138" cy="235" r="7" fill="#f59e0b" />
          <circle cx="262" cy="160" r="8" fill="#f8fafc" />
          {markers.map((marker) => (
            <g key={marker.label}>
              <circle cx={marker.left} cy={marker.top} r="8" fill="#2563eb" opacity="0.95" />
              <circle cx={marker.left} cy={marker.top} r="14" fill="none" stroke="#60a5fa" strokeWidth="1.2" opacity="0.7" />
            </g>
          ))}
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-6 top-8 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-200"
      >
        Scholarships
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute bottom-10 right-6 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-2 text-xs font-medium text-blue-100"
      >
        Universities
      </motion.div>
    </div>
  );
}
