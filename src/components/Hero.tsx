import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenCv?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-mesh">
      
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-cyan-300 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>{personalInfo.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
              Building thoughtful software with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                code, AI & creativity.
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.shortIntro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 transition duration-200"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition" />
              </a>

              <a
                href="/Abhay_Verma_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Abhay_Verma_CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/10 border border-white/15 backdrop-blur-md transition duration-200"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-sm text-slate-400 font-mono">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 hover:text-cyan-300 transition"
              >
                <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-300" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>

              <span className="text-slate-600">→</span>

              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 hover:text-cyan-300 transition"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-300" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>

              <span className="text-slate-600">→</span>

              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-2 hover:text-cyan-300 transition"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-cyan-300" />
                <span>Email</span>
              </a>
            </div>

          </motion.div>

          {/* Right Hero Column — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative flex flex-col items-center">

              {/* Outer glow ring */}
              <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-cyan-500/30 via-violet-500/20 to-blue-500/30 blur-2xl animate-pulse" />

              {/* Photo ring border */}
              <div className="relative p-[3px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_40px_rgba(6,182,212,0.4)]">
                <div className="rounded-full overflow-hidden w-60 h-60 sm:w-72 sm:h-72 bg-slate-900">
                  <img
                    src="/abhay.png"
                    alt="Abhay Verma"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-3 -right-4 sm:right-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 backdrop-blur-md text-cyan-300 text-xs font-semibold shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                CSE · 9.12 CGPA
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-4 sm:left-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/40 backdrop-blur-md text-violet-300 text-xs font-semibold shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                AI · ML · Dev
              </motion.div>

              {/* Name card beneath photo */}
              <div className="mt-6 text-center">
                <p className="text-white font-bold text-lg font-display tracking-tight">{personalInfo.name}</p>
                <p className="text-slate-400 text-sm font-mono mt-0.5">{personalInfo.role}</p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
