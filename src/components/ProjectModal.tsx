import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenConsultation }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#f6f5ee] text-[#242921] border border-[#dedbc8] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#f6f5ee]/95 border-b border-[#dedbc8] backdrop-blur-sm">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#6c7263]">
            <span className="text-[#242921] font-semibold">{project.discipline}</span>
            <span aria-hidden="true">·</span>
            <span>{project.location}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#555a4d] hover:text-[#242921] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-[#edebe0] overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-editorial font-normal text-[#22271f]">
              {project.title}
            </h2>
            <p className="text-base text-[#4a5041] mt-3 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Quick Context Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#edebe0] border border-[#dedbc8] text-xs font-mono">
            <div>
              <span className="text-[#747b6b] uppercase block">Location</span>
              <span className="text-[#22271f] font-semibold mt-0.5 block">{project.location}</span>
            </div>
            <div>
              <span className="text-[#747b6b] uppercase block">Typology</span>
              <span className="text-[#22271f] font-semibold mt-0.5 block">{project.discipline}</span>
            </div>
            <div>
              <span className="text-[#747b6b] uppercase block">Scale / Footprint</span>
              <span className="text-[#22271f] font-semibold mt-0.5 block">{project.dimensions || 'Custom Built'}</span>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-3 text-sm md:text-base text-[#4a5041] leading-relaxed">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#6c7263]">Design Brief & Spatial Logic</h3>
            <p>{project.description}</p>
          </div>

          {/* Technical Specs */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#6c7263] mb-3">Architectural Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.specs.map((spec, idx) => (
                <div key={idx} className="p-3 bg-[#edebe0] border border-[#dedbc8] flex items-center justify-between text-xs">
                  <span className="text-[#646a5b] font-mono">{spec.label}</span>
                  <span className="text-[#22271f] font-semibold font-mono">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Material Palette */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#6c7263] mb-3">Selected Materials</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {project.materials.map((mat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#3e4437] py-1 border-b border-[#dedbc8]/60">
                  <span className="w-1.5 h-1.5 bg-[#4a573e]" />
                  <span>{mat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Measured Impact */}
          <div className="p-4 bg-[#edebe0] border-l-2 border-[#4a573e]">
            <p className="text-[11px] font-mono text-[#4a573e] uppercase tracking-wider mb-1 font-semibold">Tropical Performance</p>
            <p className="text-sm text-[#383e32]">{project.impact}</p>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-[#dedbc8] flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-[#6c7263] font-mono">
              Have a similar architectural site in Iloilo?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#f5f3ec] bg-[#4a573e] hover:bg-[#3d4833] transition-colors"
            >
              <span>Inquire for Similar Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
