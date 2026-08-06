'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 px-6 py-16 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:px-8 lg:px-12 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.2),_transparent_32%)]" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
            Trusted guidance for your next step
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Future Starts Here.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            Find universities, scholarships, careers and courses tailored specifically to your qualifications.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Start Your Journey
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
              >
                Explore Universities
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative mx-auto w-full max-w-xl"
          aria-hidden="true"
        >
          <div className="absolute inset-0 -translate-y-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-amber-400/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-slate-950/40">
            <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-emerald-400" />
            <div className="absolute left-10 top-6 h-3 w-3 rounded-full bg-amber-400" />
            <div className="absolute left-14 top-6 h-3 w-3 rounded-full bg-rose-400" />
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-8 rounded-[1.75rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8"
            >
              <svg viewBox="0 0 420 320" className="w-full">
                <circle cx="245" cy="150" r="110" fill="rgba(37,99,235,0.14)" stroke="rgba(96,165,250,0.9)" strokeWidth="3" />
                <path d="M140 140c25-45 95-72 154-38 31 18 47 48 58 79" fill="none" stroke="rgba(20,184,166,0.9)" strokeWidth="3" strokeLinecap="round" />
                <path d="M182 112c30-20 74-29 120-18" fill="none" stroke="rgba(245,158,11,0.8)" strokeWidth="3" strokeLinecap="round" />
                <path d="M170 218c22-28 55-42 97-41 28 0 56 9 83 26" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="245" cy="150" r="16" fill="#f59e0b" />
                <rect x="120" y="206" width="86" height="56" rx="14" fill="#111827" stroke="rgba(255,255,255,0.16)" />
                <path d="M141 222h43" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
                <path d="M141 238h33" stroke="#34d399" strokeWidth="4" strokeLinecap="round" />
                <rect x="270" y="84" width="64" height="44" rx="12" fill="#111827" stroke="rgba(255,255,255,0.16)" />
                <path d="M284 104h36" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
                <path d="M284 116h24" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" />
                <circle cx="320" cy="217" r="40" fill="rgba(37,99,235,0.2)" stroke="rgba(37,99,235,0.7)" strokeWidth="3" />
                <path d="M320 196v42" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
                <path d="M299 217h42" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
