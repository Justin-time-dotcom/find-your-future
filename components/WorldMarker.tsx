'use client';

import { motion } from 'framer-motion';

interface Region {
  name: string;
  universities: string;
  description: string;
  accent: string;
  position: { x: number; y: number };
}

interface WorldMarkerProps {
  region: Region;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
}

export function WorldMarker({ region, isActive, onHover, onClick }: WorldMarkerProps) {
  return (
    <g onMouseEnter={onHover} onClick={onClick} className="cursor-pointer" role="button" tabIndex={0} aria-label={`Explore ${region.name}`}>
      <circle cx={region.position.x} cy={region.position.y} r={isActive ? 2.6 : 2.1} fill={isActive ? '#14b8a6' : '#2563eb'} />
      <circle cx={region.position.x} cy={region.position.y} r={isActive ? 4.6 : 3.8} fill="none" stroke={isActive ? '#14b8a6' : '#60a5fa'} strokeWidth="0.3" opacity={isActive ? 1 : 0.6} />
      <motion.circle
        cx={region.position.x}
        cy={region.position.y}
        r={isActive ? 3.4 : 2.8}
        fill="none"
        stroke="#f8fafc"
        strokeOpacity={0.4}
        animate={{ scale: isActive ? [1, 1.2, 1] : 1, opacity: isActive ? [0.6, 1, 0.6] : 0.5 }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />
    </g>
  );
}
