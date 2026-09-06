import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationData, skillCategoriesData, projectsData, achievementData, certificationsData, trainingData, communityData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0d0f17] border border-white/15 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#131623]/80 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
              <h2 className="text-lg font-semibold text-white font-display">Curriculum Vitae — {personalInfo.name}</h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-cyan-300 text-slate-300 transition"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save PDF
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Content Container */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-200 text-sm print:p-0 print:bg-white print:text-black">
            
            {/* CV Header */}
            <div className="border-b border-white/10 pb-6 print:border-black">
              <h1 className="text-3xl font-extrabold text-white font-display print:text-black">{personalInfo.name}</h1>
              <p className="text-cyan-400 font-medium mt-1 print:text-blue-600">{personalInfo.role}</p>
              
              <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-400 print:text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {personalInfo.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                  {personalInfo.linkedIn}
                </span>
                <span className="flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                  {personalInfo.github}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2 font-mono">Summary</h3>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm print:text-slate-800">
                {personalInfo.aboutBio}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">Education</h3>
              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start border-l-2 border-cyan-500/40 pl-3">
                    <div>
                      <h4 className="font-semibold text-white print:text-black">{edu.institution}</h4>
                      <p className="text-xs text-slate-400 print:text-slate-700">{edu.degree} — <span className="text-cyan-300 font-medium">{edu.grade}</span></p>
                    </div>
                    <div className="text-right text-xs text-slate-400">
                      <p>{edu.period}</p>
                      <p className="text-slate-500">{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Projects */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">Projects</h3>
              <div className="space-y-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="bg-white/[0.02] border border-white/10 rounded-xl p-4 print:border-slate-300 print:bg-slate-50">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-white print:text-black">{proj.title} <span className="text-xs font-normal text-slate-400">({proj.subtitle})</span></h4>
                      <span className="text-xs text-slate-400 font-mono">{proj.date}</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 print:text-slate-800">{proj.description}</p>
                    <ul className="mt-2 space-y-1 text-xs text-slate-400 list-disc list-inside">
                      {proj.features.slice(0, 4).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-[11px] font-mono rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 print:bg-slate-200 print:text-black">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">Technical Skills & Coursework</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {skillCategoriesData.map((cat) => (
                  <div key={cat.title} className="space-y-1">
                    <h5 className="font-medium text-slate-300 text-xs font-mono">{cat.title}:</h5>
                    <p className="text-slate-400">
                      {cat.skills.map((s) => s.name).join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">Achievements & Training</h3>
                <div className="space-y-2 text-xs">
                  <div className="border-l-2 border-violet-500/50 pl-3">
                    <p className="font-bold text-white print:text-black">{achievementData.title}</p>
                    <p className="text-slate-400">{achievementData.description}</p>
                  </div>
                  <div className="border-l-2 border-violet-500/50 pl-3 mt-2">
                    <a href={trainingData.certificateUrl || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition hover:underline">
                      <p className="font-bold text-white print:text-black">{trainingData.title} ({trainingData.hours} Hours) ↗</p>
                    </a>
                    <p className="text-slate-400">{trainingData.period}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">Certifications</h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {certificationsData.map((cert) => (
                    <li key={cert.id} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <a href={cert.certificateUrl || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition underline-offset-2 hover:underline">
                        <strong>{cert.title}</strong> — {cert.issuer} ({cert.date}) ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Community Impact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2 font-mono">Community Leadership</h3>
              <p className="text-xs text-slate-300">
                <strong>{communityData.role} — {communityData.organization}</strong> ({communityData.period}): {communityData.impactDescription} Drives included: {communityData.drives.join(', ')}.
              </p>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#131623]/80">
            <span className="text-xs text-slate-400 font-mono">Verified Source of Truth: Resume CV</span>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black transition shadow-lg shadow-cyan-500/20"
            >
              Close Viewer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
