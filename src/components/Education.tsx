import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-[#07080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Education</h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12 max-w-3xl">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#07080c] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition duration-200"></div>

              {/* Education Card */}
              <div className="p-6 rounded-2xl glass-card border border-white/10 group-hover:border-cyan-500/40 transition duration-300 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {edu.location}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-0.5">{edu.degree}</p>
                  </div>

                  <div className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono font-bold text-cyan-300 shrink-0">
                    {edu.grade}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
