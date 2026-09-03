import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative bg-[#090a10]">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <FolderGit2 className="w-4 h-4" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Highlights of web applications built with modern frontend frameworks, AI model APIs, geospatial intelligence, and clean architecture.
          </p>
        </div>

        {/* Projects Cards Stack */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Detail View Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
