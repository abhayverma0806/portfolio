import React from 'react';
import { User, GraduationCap, Brain, Trophy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { StatCard } from './StatCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#090a0f]">
      
      {/* Background Accent Mesh */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <User className="w-4 h-4" />
            <span>Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">About Me</h2>
        </div>

        {/* Content Box & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-8 space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              I am a <strong className="text-white">B.Tech Computer Science & Engineering</strong> student at <span className="text-cyan-300">Lovely Professional University</span> maintaining an academic record of <strong className="text-cyan-400 font-mono">9.12 CGPA</strong>. My focus centers on engineering scalable web applications and integrating cutting-edge <strong className="text-violet-300">AI-powered capabilities</strong>.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              With a disciplined foundation in programming languages (Python, Java, C++, JavaScript), data structures, and database systems, I thrive on practical software engineering and logical problem solving. Beyond code, I actively contribute to community outreach programs.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3 p-4 rounded-xl glass-card border border-white/10">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-mono">Education</h4>
                <p className="text-sm font-semibold text-white">B.Tech CSE @ LPU</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl glass-card border border-white/10">
              <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-mono">Core Focus</h4>
                <p className="text-sm font-semibold text-white">Full-Stack & AI Integration</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl glass-card border border-white/10">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-mono">Academic Standing</h4>
                <p className="text-sm font-semibold text-cyan-300 font-mono">9.12 CGPA</p>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCard
            value={personalInfo.stats[0].value}
            label={personalInfo.stats[0].label}
            desc={personalInfo.stats[0].desc}
            delay={0.1}
          />
          <StatCard
            value={personalInfo.stats[1].value}
            label={personalInfo.stats[1].label}
            desc={personalInfo.stats[1].desc}
            delay={0.2}
          />
          <StatCard
            value={personalInfo.stats[2].value}
            label={personalInfo.stats[2].label}
            desc={personalInfo.stats[2].desc}
            delay={0.3}
          />
          <StatCard
            value={personalInfo.stats[3].value}
            label={personalInfo.stats[3].label}
            desc={personalInfo.stats[3].desc}
            delay={0.4}
          />
        </div>

      </div>
    </section>
  );
};
