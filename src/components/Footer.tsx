import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050609] border-t border-white/10 py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Left Info */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-base font-bold font-display text-white">{personalInfo.name}</h3>
            <p className="text-slate-400 font-sans text-xs">Computer Science & Engineering Student • LPU</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-slate-300">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-cyan-400 transition flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition text-slate-400"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 Abhay Verma. Built with curiosity and code.</p>
          <p className="text-[11px] text-slate-600">Vite • React • TypeScript • Tailwind CSS • Framer Motion</p>
        </div>

      </div>
    </footer>
  );
};
