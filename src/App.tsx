import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { TrainingSection } from './components/Training';
import { Certifications } from './components/Certifications';
import { Achievement } from './components/Achievement';
import { BeyondCode } from './components/BeyondCode';
import { EducationSection } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export const App: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Sticky Top Header */}
      <Navbar onOpenCv={() => setCvModalOpen(true)} />

      {/* Main Page Content Sections */}
      <main>
        <Hero onOpenCv={() => setCvModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <TrainingSection />
        <Certifications />
        <Achievement />
        <BeyondCode />
        <EducationSection />
        <Contact />
      </main>

      {/* Recruiter CV Viewer Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
