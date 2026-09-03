import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame } from 'lucide-react';
import { achievementData } from '../data/portfolioData';

export const Achievement: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative bg-[#07080c] border-t border-white/5 overflow-hidden">
      
      {/* Radial Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Hackathon Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Competitive Achievement</h2>
        </div>

        {/* Central Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121524] via-[#0e101b] to-[#0a0c14] border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden text-center"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono mb-6">
            <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>{achievementData.subtitle} • {achievementData.date}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
            {achievementData.title}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            {achievementData.description}
          </p>

          {/* Visual Centerpiece Metric */}
          <div className="my-8 py-6 px-8 inline-block rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
              Final Hackathon Rank
            </div>
            <div className="text-5xl sm:text-7xl font-extrabold font-display bg-gradient-to-r from-amber-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent tracking-tight">
              {achievementData.metric}
            </div>
            <div className="mt-2 text-xs font-mono text-cyan-400">
              800+ Total Competitors • Built HomeServiceHub
            </div>
          </div>

          <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
            {achievementData.highlight}
          </p>

        </motion.div>

      </div>
    </section>
  );
};
