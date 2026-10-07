import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/projects.ts';
import { RevealOnScroll } from './RevealOnScroll.tsx';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  onSelectProject,
  onViewAllProjects 
}) => {
  return (
    <section id="works" className="py-24 md:py-32 bg-[#faf9f5] text-[#242921] border-b border-[#dce3d5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
            {/* Left Column: Heading & View All link */}
            <div className="lg:col-span-4 space-y-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#47543c] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#47543c]" />
                <span>SELECTED WORK</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] tracking-tight text-[#1c201a]">
                Spaces<br />
                that inspire<br />
                everyday life.
              </h2>

              <div className="pt-2">
                <button
                  onClick={onViewAllProjects || (() => onSelectProject(PROJECTS[0]))}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] font-medium text-[#47543c] border-b border-[#47543c]/40 pb-0.5 hover:border-[#47543c] transition-all group cursor-pointer"
                >
                  <span>VIEW ALL PROJECTS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Brief Intro paragraph */}
            <div className="lg:col-span-8 flex items-end">
              <p className="text-sm text-[#525d49] font-light max-w-xl leading-relaxed lg:pl-10">
                A selection of private residences, coastal retreats, and architectural spaces designed with context, climatic clarity, and enduring craftsmanship across Western Visayas.
              </p>
            </div>
          </div>

          {/* 4 Cards Grid matching the mockup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer space-y-3"
              >
                {/* Image Container with portrait ratio */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xs bg-[#242921]">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#47543c]/10 group-hover:bg-transparent transition-colors" />

                  {/* Corner quick inspect icon */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#47543c] text-[#242921] group-hover:text-white transition-all shadow-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Title & Location */}
                <div className="space-y-1 pt-1">
                  <h3 className="font-editorial text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#1f241a] group-hover:text-[#47543c] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#67735d] tracking-wide">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
