import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll.tsx';

interface DisciplinesSectionProps {
  onOpenConsultation: () => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({ onOpenConsultation }) => {
  const services = [
    {
      title: 'Architecture',
      description: 'Full architectural design from concept through construction documentation. Schematic design, 3D visualizations, structural coordination, and permitting across Iloilo City and Province.',
      points: [
        'Schematic design & tropical bioclimatic orientation',
        'Construction documentation & BIM LOD 400',
        'LGU permitting & structural engineering coordination',
        'On-site construction administration'
      ]
    },
    {
      title: 'Interiors',
      description: 'Custom interior millwork, finishes, fixture selections, furniture curation, and architectural lighting design tailored directly to the building envelope.',
      points: [
        'Bespoke cabinetry & native hardwood millwork',
        'Material palette selection (travertine, lime, terrazzo)',
        'Circadian lighting choreography',
        'Custom furniture design & art curation'
      ]
    },
    {
      title: 'Integrated Planning',
      description: 'Site feasibility, zoning analysis, tropical climatic orientation, and holistic environmental integration for estates and multi-structure properties.',
      points: [
        'Site microclimate & sun path analysis',
        'Passive airflow & rainwater harvesting strategy',
        'Masterplanning & phased estate development',
        'Heritage adaptive reuse feasibility studies'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#4a573e] text-[#f5f3ec]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <RevealOnScroll>
          {/* Section Kicker */}
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#f5f3ec]/65 mb-6">
            Services
          </div>

          {/* Section Headline */}
          <div className="max-w-3xl mb-8">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#f5f3ec]">
              The whole<br />
              <span className="italic font-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal">
                picture.
              </span>
            </h2>
          </div>

          <p className="text-base md:text-lg text-[#f5f3ec]/80 max-w-2xl font-light leading-relaxed mb-16">
            We work across scales—from preliminary masterplanning and full architectural design to custom interior cabinetry and lighting specification.
          </p>
        </RevealOnScroll>

        {/* 3 Services Blocks with hairline dividers */}
        <div className="space-y-14 md:space-y-16">
          {services.map((service, idx) => (
            <RevealOnScroll key={service.title} delayMs={idx * 100}>
              <div className="pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5">
                  <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-normal text-[#f5f3ec]">
                    {service.title}
                  </h3>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <p className="text-sm md:text-base text-[#f5f3ec]/85 font-light leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-mono text-[#f5f3ec]/70">
                    {service.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#f5f3ec]/60" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom Service Consultation CTA */}
        <div className="mt-16 pt-10 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#f5f3ec]/60 uppercase tracking-wider">
            Ready to scope architectural or interior services in Iloilo?
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#4a573e] bg-[#f5f3ec] hover:bg-white transition-colors"
          >
            Start Project Dialogue
          </button>
        </div>
      </div>
    </section>
  );
};
