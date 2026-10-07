import React from 'react';
import { RevealOnScroll } from './RevealOnScroll.tsx';

interface WhatWeDoSectionProps {
  onOpenConsultation: () => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ onOpenConsultation }) => {
  const services = [
    {
      title: 'ARCHITECTURE',
      description: 'Bespoke architectural design rooted in context, crafted around you.',
      icon: (
        <svg className="w-5 h-5 stroke-[1.25] text-[#47543c]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <line x1="4" y1="12" x2="20" y2="12" strokeDasharray="2 2" />
          <line x1="12" y1="4" x2="12" y2="20" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      title: 'DESIGN-BUILD',
      description: 'Seamless from concept to completion with a single, dedicated team.',
      icon: (
        <svg className="w-5 h-5 stroke-[1.25] text-[#47543c]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M12 12l8-4.5" />
          <path d="M12 12v9" />
          <path d="M12 12L4 7.5" />
        </svg>
      ),
    },
    {
      title: 'INTERIORS',
      description: 'Curated interiors that balance beauty, function, and timelessness.',
      icon: (
        <svg className="w-5 h-5 stroke-[1.25] text-[#47543c]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      title: 'PROJECT MANAGEMENT',
      description: 'Meticulous planning and transparent execution every step of the way.',
      icon: (
        <svg className="w-5 h-5 stroke-[1.25] text-[#47543c]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9" />
          <path d="M12 3c4.97 0 9 4.03 9 9-4.97 0-9-4.03-9-9z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-[#f4f6f0] border-y border-[#dce3d5] text-[#242921]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Vertical Kicker */}
            <div className="lg:col-span-1 hidden lg:flex items-center justify-center pt-8">
              <div className="flex items-center gap-3 -rotate-90 origin-center whitespace-nowrap text-[10px] font-mono uppercase tracking-[0.3em] text-[#47543c] font-semibold">
                <span className="w-4 h-[1.5px] bg-[#47543c]" />
                <span>WHAT WE DO</span>
              </div>
            </div>

            {/* Mobile Kicker */}
            <div className="lg:hidden flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#47543c] font-semibold mb-2">
              <span className="w-3 h-[1.5px] bg-[#47543c]" />
              <span>WHAT WE DO</span>
            </div>

            {/* 4 Service Columns with hairlines */}
            <div className="lg:col-span-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#dce3d5]">
              {services.map((srv, idx) => (
                <div 
                  key={idx} 
                  className={`py-8 sm:py-0 px-0 sm:px-8 first:sm:pl-0 last:sm:pr-0 space-y-4 group cursor-pointer hover:bg-[#ebf0e5]/60 transition-colors p-4 rounded-xs`}
                  onClick={onOpenConsultation}
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xs bg-[#e4eade] group-hover:bg-[#d8e2d0] transition-colors shadow-2xs">
                    {srv.icon}
                  </div>

                  <h3 className="font-editorial text-sm font-semibold uppercase tracking-[0.15em] text-[#1f241a] group-hover:text-[#47543c] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-[#525d49] leading-relaxed font-normal">
                    {srv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
