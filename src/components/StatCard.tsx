import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  desc: string;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, desc, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="relative p-6 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition"></div>
      
      <div className="font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 group-hover:from-cyan-300 group-hover:to-violet-400 transition">
        {value}
      </div>

      <div className="mt-2 text-sm font-semibold text-white">
        {label}
      </div>

      <div className="mt-1 text-xs text-slate-400 font-mono">
        {desc}
      </div>
    </motion.div>
  );
};
