import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090a10] border-t border-white/5 overflow-hidden">
      
      {/* Background Accent Gradient */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Text & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Let's build something <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">meaningful.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              "I'm always interested in learning, building impactful projects, and connecting with people working on interesting technology."
            </p>

            {/* Direct Links Grid */}
            <div className="space-y-3 pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3.5 p-4 rounded-xl glass-card border border-white/10 hover:border-cyan-500/40 transition group"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-mono">Email Directly</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3.5 p-4 rounded-xl glass-card border border-white/10 hover:border-cyan-500/40 transition group"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-mono">Phone Contact</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">{personalInfo.phone}</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl glass-card border border-white/10 hover:border-cyan-500/40 transition group"
              >
                <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:scale-105 transition">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-mono">LinkedIn Profile</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">linkedin.com/in/abhay-verma-a9367337a</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl glass-card border border-white/10 hover:border-cyan-500/40 transition group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-mono">GitHub Repositories</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">github.com/abhayverma0806</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl glass-card border border-white/10 relative">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-white">Message Sent Successfully!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you for reaching out, Abhay will get back to you shortly at your provided email address.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-semibold text-cyan-300 border border-white/10 transition"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold font-display text-white">Send a Message</h3>

                    {/* Name field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-medium">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition ${
                          errors.name ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-medium">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition ${
                          errors.email ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-medium">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Abhay, I'd like to talk about an opportunity or project..."
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition ${
                          errors.message ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 hover:from-cyan-300 hover:to-violet-400 font-semibold text-sm text-black shadow-lg shadow-cyan-500/20 transition duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
