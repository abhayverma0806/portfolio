import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { StudyAiPreview } from './StudyAiPreview';
import { RescueCorePreview } from './RescueCorePreview';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
    >
      {/* Top Header */}
      <div className="p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {project.date}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition duration-200">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-cyan-400 mt-0.5">{project.subtitle}</p>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Conceptual Interactive UI Preview Window */}
        <div className="mt-4 pt-2">
          <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1 text-cyan-400">
              <Sparkles className="w-3 h-3" /> Live Application Mockup Preview
            </span>
            <span>Click card for full specs</span>
          </div>

          <div className="transform group-hover:scale-[1.01] transition-transform duration-300">
            {project.id === 'study-ai' ? <StudyAiPreview /> : <RescueCorePreview />}
          </div>
        </div>

        {/* Key Features List */}
        <div className="pt-4 border-t border-white/10 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Key Capabilities</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {project.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer / Buttons */}
      <div className="px-6 sm:px-8 py-5 border-t border-white/10 bg-[#0b0d15]/80 flex flex-wrap items-center justify-between gap-4">
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300 group-hover:border-cyan-500/30 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition"
            title="GitHub Repository"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-white/10 border border-white/10 transition"
            title="Live Demo"
            aria-label="Live Demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={() => onSelect(project)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/30 transition duration-200"
          >
            <span>View Specs</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
          </button>
        </div>

      </div>
    </motion.div>
  );
};
