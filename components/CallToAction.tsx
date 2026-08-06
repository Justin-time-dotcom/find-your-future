'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function CallToAction() {
  return (
    <section id="cta" className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-blue-600/15 via-slate-900/90 to-cyan-500/15 px-6 py-16 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Ready to Discover Your Future?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Let us connect your ambitions with the right universities, scholarships, and opportunities.
        </p>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-8">
          <Link
            href="#hero"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Start Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
