import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Code2, Check, Copy, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Terminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'code'>('terminal');
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// Abhay Verma — Profile Config
const developer = {
  name: "${personalInfo.name}",
  university: "Lovely Professional University",
  degree: "B.Tech Computer Science",
  cgpa: 9.12,
  status: "Available for Opportunities (2026)",
  coreTech: ["React", "TypeScript", "Vite", "Python", "Groq API"],
  passion: ["AI-powered Apps", "Modern Web Engineering"]
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full max-w-lg mx-auto lg:max-w-none rounded-2xl glass-card border border-white/15 overflow-hidden shadow-2xl shadow-cyan-500/10"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f18]/90 border-b border-white/10 select-none">
        {/* macOS Style Window Controls */}
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-0.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition ${
              activeTab === 'terminal'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TerminalIcon className="w-3 h-3" />
            <span>terminal.sh</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition ${
              activeTab === 'code'
                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3 h-3" />
            <span>developer.ts</span>
          </button>
        </div>

        {/* Action button */}
        <button
          onClick={copyCode}
          className="text-slate-400 hover:text-white transition p-1"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Content Body */}
      <div className="p-5 font-mono text-xs sm:text-sm min-h-[300px] flex flex-col justify-between bg-[#08090e]/95 text-slate-300 leading-relaxed">
        {activeTab === 'terminal' ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-emerald-400">abhay@portfolio</span>
              <span className="text-slate-500">~ %</span>
              <span className="text-white font-semibold">init-system --verbose</span>
            </div>

            <div className="text-slate-400 pl-4 space-y-1 border-l border-white/10 text-xs">
              <p className="flex items-center gap-2 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                building...
              </p>
              <p className="flex items-center gap-2 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                learning...
              </p>
              <p className="flex items-center gap-2 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping"></span>
                shipping...
              </p>
            </div>

            <div className="pt-2 border-t border-white/5 space-y-1.5">
              <div className="flex justify-between items-center px-3 py-1.5 rounded bg-white/[0.02]">
                <span className="text-slate-300">React</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  ✓ <span className="text-[10px] text-emerald-500 font-sans">Ready</span>
                </span>
              </div>
              <div className="flex justify-between items-center px-3 py-1.5 rounded bg-white/[0.02]">
                <span className="text-slate-300">TypeScript</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  ✓ <span className="text-[10px] text-emerald-500 font-sans">Strict</span>
                </span>
              </div>
              <div className="flex justify-between items-center px-3 py-1.5 rounded bg-white/[0.02]">
                <span className="text-slate-300">AI / Groq API</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  ✓ <span className="text-[10px] text-emerald-500 font-sans">Integrated</span>
                </span>
              </div>
              <div className="flex justify-between items-center px-3 py-1.5 rounded bg-white/[0.02]">
                <span className="text-slate-300">Full Stack</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  ✓ <span className="text-[10px] text-emerald-500 font-sans">Active</span>
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-slate-400">
              <span className="text-cyan-400">abhay@portfolio</span>
              <span className="text-slate-500">~ %</span>
              <span className="w-2 h-4 bg-cyan-400 animate-pulse"></span>
            </div>
          </div>
        ) : (
          <div className="space-y-2 overflow-x-auto text-xs font-mono">
            <pre className="text-slate-300 leading-relaxed">{codeSnippet}</pre>
          </div>
        )}

        {/* Footer status bar */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500 font-sans">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            LPU • 9.12 CGPA
          </span>
          <span className="font-mono text-emerald-400 font-medium">● UTF-8 • React 18</span>
        </div>
      </div>
    </motion.div>
  );
};
