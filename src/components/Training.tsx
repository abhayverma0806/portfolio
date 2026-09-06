import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, CheckCircle, Code, FileText, ExternalLink } from 'lucide-react';
import { trainingData } from '../data/portfolioData';

export const TrainingSection: React.FC = () => {
  return (
    <section id="training" className="py-20 relative bg-[#07080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <BookOpen className="w-4 h-4" />
            <span>Structured Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Training & Learning</h2>
        </div>

        {/* Training Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/30 transition duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Code className="w-4 h-4" />
                <span>Structured Skill Track</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">{trainingData.title}</h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {trainingData.period}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                <Clock className="w-3.5 h-3.5" />
                {trainingData.hours} Hours Completed
              </span>
              {trainingData.certificateUrl && (
                <a
                  href={trainingData.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition text-xs shadow-md shadow-cyan-500/20"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Certificate PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              Completed <strong className="text-white">{trainingData.hours} hours</strong> of intensive, structured coursework in computer programming, strengthening core algorithmic efficiency and problem-solving methodology:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {trainingData.topics.map((topic, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition flex items-center gap-3 text-xs font-medium text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
