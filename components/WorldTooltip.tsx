'use client';

import { motion } from 'framer-motion';

interface Region {
  name: string;
  universities: string;
  description: string;
  accent: string;
  position: { x: number; y: number };
}

interface WorldTooltipProps {
  region: Region;
}

export function WorldTooltip({ region }: WorldTooltipProps) {
  return (
    <motion.div
      key={region.name}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mt-5 rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/40"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Region spotlight</p>
          <h4 className="mt-1 text-xl font-semibold text-white">{region.name}</h4>
        </div>
        <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
          {region.universities} universities
        </div>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-400">{region.description}</p>
    </motion.div>
  );
}
