import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar, Droplet, Eye, Activity, Sparkles } from 'lucide-react';
import { communityData } from '../data/portfolioData';

export const BeyondCode: React.FC = () => {
  const getDriveIcon = (drive: string) => {
    if (drive.toLowerCase().includes('blood')) return <Droplet className="w-4 h-4 text-red-400" />;
    if (drive.toLowerCase().includes('eye')) return <Eye className="w-4 h-4 text-cyan-400" />;
    if (drive.toLowerCase().includes('health')) return <Activity className="w-4 h-4 text-emerald-400" />;
    return <Sparkles className="w-4 h-4 text-violet-400" />;
  };

  return (
    <section id="community" className="py-20 relative bg-[#090a10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Community Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Beyond Code</h2>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-10 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/30 transition duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-300 border border-rose-500/20">
                {communityData.role}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {communityData.period}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white">
              {communityData.organization}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Organized and coordinated <strong className="text-white">4 comprehensive community service drives</strong> designed to deliver tangible health, wellness, and sanitation support:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {communityData.drives.map((drive, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                >
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    {getDriveIcon(drive)}
                  </div>
                  <span>{drive}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metric Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-transparent p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center">
            <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-3">
              <Users className="w-8 h-8" />
            </div>
            
            <div className="text-5xl font-extrabold font-display text-white tracking-tight">
              {communityData.impactMetric}
            </div>

            <div className="mt-2 text-xs font-mono uppercase tracking-wider text-cyan-300">
              Community Members Impacted
            </div>

            <p className="mt-3 text-xs text-slate-400 max-w-xs">
              Direct beneficiary count across blood donation, health checks, eye care, and sanitation drives.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
