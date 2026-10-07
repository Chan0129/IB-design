import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll.tsx';

interface PhilosophySectionProps {
  onOpenConsultation: () => void;
  onOpenAboutUs?: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onOpenConsultation,
  onOpenAboutUs,
}) => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#eef2e7] text-[#242921] border-b border-[#d8e0d0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Still life ikebana & stones photo matching picture */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden shadow-md bg-[#d8e0d0] border border-[#cbd5c2]">
                <img
                  src="/src/assets/images/philosophy_ikebana_1791357390048.jpg"
                  alt="Minimalist ceramic vase with branches and stones"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#47543c]/5 pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Philosophy Narrative & Principles */}
            <div className="lg:col-span-7 space-y-8">
              {/* Kicker in signature olive tone */}
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#47543c] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#47543c]" />
                <span>OUR PHILOSOPHY</span>
              </div>

              {/* Headline matching picture */}
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] tracking-tight text-[#1c201a]">
                We believe design should<br />
                <span className="italic font-garamond text-3xl sm:text-4xl md:text-5xl font-normal text-[#39452f]">
                  be timeless and personal.
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-4">
                  <p className="text-sm md:text-base text-[#46513d] font-light leading-relaxed">
                    Good design is more than form — it's how a space makes you feel. We create architecture that respects its surroundings, reflects your lifestyle, and stands the test of time.
                  </p>
                  <p className="text-xs text-[#5f6c54] leading-relaxed">
                    Rooted in Iloilo City, our studio balances tropical climate responsiveness with refined material detailing.
                  </p>
                </div>

                {/* Bulleted Dash List in signature olive matching picture */}
                <div className="md:col-span-5 space-y-3 font-editorial text-sm sm:text-base text-[#242921]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#47543c] font-mono font-bold">—</span>
                    <span>Context First</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#47543c] font-mono font-bold">—</span>
                    <span>Intentional Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#47543c] font-mono font-bold">—</span>
                    <span>Honest Materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#47543c] font-mono font-bold">—</span>
                    <span>Lasting Value</span>
                  </div>
                </div>
              </div>

              {/* Leadership note on Ar. Rosie Joy Teves & IDr. Christian Delima */}
              <div className="pt-6 border-t border-[#d2dbcb] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      src="/src/assets/images/ar_rosie_portrait_editorial_1791358374465.jpg"
                      alt="Ar. Rosie Joy Teves"
                      className="w-9 h-9 rounded-full object-cover object-top border-2 border-[#eef2e7] shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      src="/src/assets/images/christian_delima_1791356906189.jpg"
                      alt="IDr. Christian Delima"
                      className="w-9 h-9 rounded-full object-cover border-2 border-[#eef2e7] shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-xs font-mono text-[#525e49]">
                    Led by <strong className="text-[#242921]">Ar. Rosie Joy Teves</strong> (Architecture) & <strong className="text-[#242921]">IDr. Christian Delima</strong> (Interiors)
                  </div>
                </div>
                {onOpenAboutUs && (
                  <button
                    onClick={onOpenAboutUs}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#47543c] hover:text-[#2d3624] font-semibold transition-colors group cursor-pointer"
                  >
                    <span>Read About Us</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
