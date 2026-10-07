import React from 'react';
import { RevealOnScroll } from './RevealOnScroll.tsx';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      description: 'We listen, learn, and understand your vision, needs, and aspirations.',
    },
    {
      num: '02',
      title: 'DESIGN',
      description: 'We craft considered designs that balance creativity and practicality.',
    },
    {
      num: '03',
      title: 'PLAN',
      description: 'We refine every detail and plan with precision for a seamless build.',
    },
    {
      num: '04',
      title: 'BUILD',
      description: 'Our team brings the design to life with care, quality, and integrity.',
    },
    {
      num: '05',
      title: 'COMPLETE',
      description: "We deliver a space you'll love today and for years to come.",
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#faf9f5] text-[#242921] border-b border-[#dce3d5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Left Column: Heading */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#47543c] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#47543c]" />
                <span>OUR PROCESS</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight text-[#1c201a]">
                A clear process.<br />
                Exceptional<br />
                results.
              </h2>
            </div>

            {/* Right Column: Brief Intro */}
            <div className="lg:col-span-8 flex items-end">
              <p className="text-sm text-[#525d49] font-light max-w-xl leading-relaxed lg:pl-6">
                From initial site appraisal and schematic sketches to fabrication and turnkey handover, our design-build workflow provides clarity and rigor at each milestone.
              </p>
            </div>
          </div>

          {/* 5 Connected Steps Grid matching the picture */}
          <div className="relative">
            {/* Continuous thin horizontal connecting line */}
            <div className="hidden lg:block absolute top-[14px] left-[20px] right-[20px] h-[1.5px] bg-[#d2dbcb] z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="space-y-4 pt-1 group">
                  {/* Step Number Dot indicator */}
                  <div className="flex items-center gap-3">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#2a3424] bg-[#faf9f5] pr-2.5">
                      {step.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#47543c] lg:hidden" />
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#242921] group-hover:text-[#47543c] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#55614c] leading-relaxed font-normal">
                    {step.description}
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
