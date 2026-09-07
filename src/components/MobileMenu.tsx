import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  onOpenCv?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg md:hidden flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <a href="#" onClick={onClose} className="text-lg font-bold font-display text-white">
            {personalInfo.name}
          </a>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 px-6 py-8 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.name === 'Contact' ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="text-xl font-semibold text-cyan-300 bg-cyan-500/15 border border-cyan-500/40 rounded-xl py-3 px-4 shadow-[0_0_12px_rgba(6,182,212,0.2)] hover:bg-cyan-500 hover:text-black transition"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="text-xl font-medium text-slate-300 hover:text-cyan-400 transition py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          <div className="space-y-4 pt-6">
            <a
              href="/Abhay_Verma_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Abhay_Verma_CV.pdf"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white shadow-lg shadow-cyan-500/25"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </a>

            <div className="flex items-center justify-center gap-6 pt-4 text-slate-400 text-xs font-mono">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
