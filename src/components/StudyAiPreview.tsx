import React, { useState } from 'react';
import { FileText, Bot, Sparkles, HelpCircle, CheckCircle, Send, BookOpen } from 'lucide-react';

export const StudyAiPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'quiz' | 'summary'>('chat');
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState([
    { role: 'user', text: 'Explain how binary search trees maintain O(log N) operations.' },
    { role: 'ai', text: 'In a balanced Binary Search Tree (BST), every left node is smaller and right node is larger. Search divides the space in half at each step, giving O(log N) time complexity.' }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    const userMsg = chatMessage;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatMessage('');
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        text: `Groq API processed your query regarding "${userMsg.slice(0, 30)}...". Context pulled from study material.`
      }]);
    }, 600);
  };

  return (
    <div className="w-full bg-[#0b0d14] rounded-xl border border-white/10 overflow-hidden shadow-2xl font-sans text-xs">
      
      {/* Top Application Bar */}
      <div className="bg-[#121522] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold font-display text-white text-xs">studyAI Dashboard</span>
          <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-300 font-mono">
            Groq Llama-3 70B
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition ${
              activeTab === 'chat' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
            }`}
          >
            AI Chat
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition ${
              activeTab === 'quiz' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
            }`}
          >
            Quiz
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition ${
              activeTab === 'summary' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
            }`}
          >
            Summary
          </button>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 h-64 sm:h-72">
        
        {/* PDF Context Sidebar */}
        <div className="hidden md:block md:col-span-4 bg-[#0d0f19] p-3 border-r border-white/10 space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-cyan-400">
              <FileText className="w-3.5 h-3.5" />
              Source PDF
            </span>
            <span className="text-[10px] text-emerald-400">● 100% Parsed</span>
          </div>

          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-2">
            <p className="font-semibold text-slate-200 text-[11px]">Data_Structures_Guide.pdf</p>
            <div className="space-y-1 text-[10px] text-slate-400 font-mono">
              <p>• Chapter 4: Trees & Graphs</p>
              <p>• Chapter 5: Sorting Algorithms</p>
              <p>• Chapter 6: Dynamic Programming</p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-cyan-500/5 border border-cyan-500/20 text-[10px] text-slate-300">
            <p className="text-cyan-300 font-semibold mb-1 flex items-center gap-1">
              <BookOpen className="w-3 h-3" /> Context Memory Active
            </p>
            Groq API indexing 14,250 tokens in memory for prompt responses.
          </div>
        </div>

        {/* Dynamic Center Area */}
        <div className="col-span-1 md:col-span-8 p-3 flex flex-col justify-between bg-[#080a10]">
          
          {activeTab === 'chat' && (
            <div className="flex-1 flex flex-col justify-between space-y-2">
              <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2 ${
                      m.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {m.role === 'ai' && (
                      <div className="p-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div
                      className={`p-2.5 rounded-xl max-w-[85%] leading-normal ${
                        m.role === 'user'
                          ? 'bg-cyan-500 text-black font-medium'
                          : 'bg-white/[0.04] border border-white/10 text-slate-200'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask studyAI about your lecture notes..."
                  className="flex-1 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/15 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold flex items-center gap-1 transition"
                >
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-cyan-400" />
                  Auto-Generated Quiz Card
                </span>
                <span className="text-[10px] text-cyan-400 font-mono">Q1 of 5</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <p className="text-slate-200 font-medium">Which data structure operates on a First In, First Out (FIFO) protocol?</p>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-400 text-cyan-200 font-semibold flex items-center justify-between">
                    <span>A) Queue</span>
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400">
                    <span>B) Stack</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400">
                    <span>C) Binary Tree</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400">
                    <span>D) Hash Map</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'summary' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">AI Executive Summary</span>
                <span className="text-[10px] text-slate-400 font-mono">Generated in 180ms</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-slate-300">
                <p>• <strong>Binary Trees:</strong> Hierarchical structure where each node has at most two children.</p>
                <p>• <strong>Balanced Trees:</strong> Guarantees O(log N) lookup and insertion efficiency.</p>
                <p>• <strong>Graph Traversals:</strong> BFS uses queues for shortest paths; DFS uses stacks for depth exploration.</p>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
