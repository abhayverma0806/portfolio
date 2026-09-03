import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, BookOpen, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillCategoriesData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillCategoriesData.map(c => c.title)];

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Languages':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'Frameworks & Libraries':
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-violet-400" />;
      case 'Coursework':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'Soft Skills':
        return <HeartHandshake className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories = activeCategory === 'All'
    ? skillCategoriesData
    : skillCategoriesData.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-[#07080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span>Technical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Skills & Fundamentals</h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/[0.03] border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                  <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-cyan-300 transition">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-xs font-medium text-slate-200 hover:text-cyan-200 transition duration-200 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                          {skill.level}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{cat.skills.length} competencies</span>
                <span className="text-cyan-400/80 font-sans">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
