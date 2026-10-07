/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { WhatWeDoSection } from './components/WhatWeDoSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { PhilosophySection } from './components/PhilosophySection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { TestimonialBanner } from './components/TestimonialBanner.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';
import { StudioPortalModal } from './components/StudioPortalModal.tsx';
import { AboutPage } from './components/AboutPage.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { Project, PROJECTS } from './data/projects.ts';

function AppContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [portalOpen, setPortalOpen] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');

  useEffect(() => {
    // Check initial hash
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about' || hash === '#about-us') {
        setCurrentView('about');
      } else {
        setCurrentView('home');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenConsultation = () => {
    setConsultationOpen(true);
  };

  const handleOpenPortal = () => {
    setPortalOpen(true);
  };

  const handleNavigateAbout = () => {
    setCurrentView('about');
    window.location.hash = 'about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (sectionId?: string) => {
    setCurrentView('home');
    if (sectionId) {
      window.location.hash = sectionId;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1e241b] selection:bg-[#47543c] selection:text-[#faf9f5]">
      {/* Minimal Scroll Progress Bar */}
      {currentView === 'home' && <ScrollProgressBar />}

      {/* Navigation Header matching reference */}
      <Navbar 
        onOpenConsultation={handleOpenConsultation}
        onOpenPortal={handleOpenPortal}
        currentView={currentView}
        onNavigateAbout={handleNavigateAbout}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Content Area */}
      {currentView === 'about' ? (
        <main>
          <AboutPage 
            onBackToHome={() => handleNavigateHome()}
            onOpenConsultation={handleOpenConsultation}
            onNavigateSection={handleNavigateHome}
          />
        </main>
      ) : (
        <main>
          {/* 1. Hero: Architecture. Crafted with Purpose. (Split with modern villa) */}
          <Hero 
            onOpenConsultation={handleOpenConsultation}
            onExplorePortfolio={scrollToWorks}
          />

          {/* 2. What We Do: Horizontal services strip (Architecture, Design-Build, Interiors, Project Management) */}
          <WhatWeDoSection 
            onOpenConsultation={handleOpenConsultation}
          />

          {/* 3. Selected Work: Spaces that inspire everyday life (4-card portfolio) */}
          <PortfolioSection 
            onSelectProject={(project) => setSelectedProject(project)}
            onViewAllProjects={() => setSelectedProject(PROJECTS[0])}
          />

          {/* 4. Our Philosophy: We believe design should be timeless and personal (Still life + 4 principles) */}
          <PhilosophySection 
            onOpenConsultation={handleOpenConsultation}
            onOpenAboutUs={handleNavigateAbout}
          />

          {/* 5. Our Process: A clear process. Exceptional results. (5 horizontal numbered steps) */}
          <ProcessSection />

          {/* 6. Client Testimonial: Dark editorial banner with terracotta quote mark */}
          <TestimonialBanner />
        </main>
      )}

      {/* Footer: Multi-column studio coordinates & links matching reference */}
      <Footer 
        onOpenConsultation={handleOpenConsultation}
        onOpenAboutUs={handleNavigateAbout}
        onNavigateHome={handleNavigateHome}
      />

      {/* Interactive Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <ConsultationModal 
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <StudioPortalModal 
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
