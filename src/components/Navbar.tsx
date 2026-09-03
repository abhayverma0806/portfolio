import React, { useState, useEffect } from 'react';
import { Menu, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#training' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07080c]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <a href="#" className="group flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/15 group-hover:border-cyan-400/50 transition">
                <span className="font-display font-bold text-sm bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  AV
                </span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-[#07080c] animate-pulse"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white tracking-tight group-hover:text-cyan-300 transition text-base">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase hidden sm:inline">
                  CSE Student • 9.12 CGPA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions: Download CV button & Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCv}
                className="relative group overflow-hidden rounded-full p-[1px] font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 rounded-full group-hover:opacity-100 transition opacity-80"></span>
                <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d0f17] text-white group-hover:bg-opacity-80 transition">
                  <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition transform" />
                  <span>Download CV</span>
                </span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition border border-white/10"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        onOpenCv={onOpenCv}
      />
    </>
  );
};
