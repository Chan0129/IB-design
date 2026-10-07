import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll.tsx';

interface StudioSectionProps {
  onOpenConsultation: () => void;
  onOpenAboutUs?: () => void;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ onOpenConsultation, onOpenAboutUs }) => {
  const [phTime, setPhTime] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setPhTime(
        new Intl.DateTimeFormat('en-GB', { 
          timeZone: 'Asia/Manila', 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        }).format(now)
      );
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="studio" className="py-24 md:py-32 bg-[#f6f5ee] text-[#242921] border-b border-[#e5e2d6]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <RevealOnScroll>
          {/* Section Kicker */}
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6d7364] mb-8">
            About the Studio
          </div>

          {/* Established Emblem */}
          <div className="mb-10 inline-flex items-center gap-3 p-3.5 bg-[#edebe0] border border-[#dedbc8] text-xs font-mono text-[#4a5040]">
            <span className="w-2 h-2 bg-[#4a573e]" />
            <span>Founded in 2020 in Iloilo City, designing throughout Western Visayas.</span>
          </div>

          {/* Section Headline */}
          <div className="max-w-3xl mb-10">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#22271f]">
              We make room for<br />
              <span className="italic font-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#38432f]">
                what matters.
              </span>
            </h2>
          </div>

          {/* Editorial Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 mb-16">
            <div className="md:col-span-6 space-y-4 text-base md:text-lg text-[#3e4438] font-normal leading-relaxed">
              <p>
                IB is a full-service architecture and interiors studio based in Iloilo City. We design with a deep respect for context—creating homes, workspaces, and retreats that feel natural to their surroundings and meaningful to the people who inhabit them.
              </p>
            </div>
            <div className="md:col-span-6 space-y-6 text-base md:text-lg text-[#3e4438] font-normal leading-relaxed">
              <p>
                Our practice moves between broad spatial thinking and precise material detailing. From initial sketches to the final handover, we work closely with clients, craftspeople, and builders at every step.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {onOpenAboutUs && (
                  <button
                    onClick={onOpenAboutUs}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest font-semibold text-[#f5f3ec] bg-[#4a573e] hover:bg-[#3d4833] transition-colors"
                  >
                    <span>View About Us Page</span>
                    <span>→</span>
                  </button>
                )}
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-[#4a573e] hover:text-[#2d3624] group transition-colors"
                >
                  <span>Inquire with our studio</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Leadership Spotlight: Ar. Rosie Joy Teves & IDr. Christian Delima */}
          <div className="pt-12 pb-14 border-t border-[#dedbc8]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#797f70] block">
                  Leadership & Principals
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#242921] mt-1">
                  Ar. Rosie Joy Teves & IDr. Christian Delima
                </h3>
              </div>
              {onOpenAboutUs && (
                <button
                  onClick={onOpenAboutUs}
                  className="text-xs font-mono uppercase tracking-wider text-[#4a573e] hover:text-[#2d3624] font-semibold flex items-center gap-1.5 group"
                >
                  <span>Read full bios & credentials</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ar. Rosie Joy Teves */}
              <div className="p-6 bg-[#edebe0] border border-[#dedbc8] flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xs overflow-hidden shrink-0 bg-[#242921]">
                  <img
                    src="/src/assets/images/ar_rosie_portrait_editorial_1791358374465.jpg"
                    alt="Ar. Rosie Joy Teves"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#dfdccf] text-[#4a5040]">
                    Principal Architect · UAP · RLA
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-[#242921]">
                    Ar. Rosie Joy Teves
                  </h4>
                  <p className="text-xs text-[#52584a] leading-relaxed">
                    Directs architectural massing, passive climatic planning, and contextual structural engineering across Iloilo Province.
                  </p>
                </div>
              </div>

              {/* IDr. Christian Delima */}
              <div className="p-6 bg-[#edebe0] border border-[#dedbc8] flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xs overflow-hidden shrink-0 bg-[#242921]">
                  <img
                    src="/src/assets/images/christian_delima_1791356906189.jpg"
                    alt="IDr. Christian Delima"
                    className="w-full h-full object-cover filter grayscale contrast-[1.05]"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#dfdccf] text-[#4a5040]">
                    Principal Interior Designer · PIID · RLID
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-[#242921]">
                    IDr. Christian Delima
                  </h4>
                  <p className="text-xs text-[#52584a] leading-relaxed">
                    Directs spatial atmospheres, tactile materiality, bespoke joinery, and custom furniture curation across Panay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Practice Locations Strip in Iloilo */}
        <RevealOnScroll delayMs={150}>
          <div className="pt-12 border-t border-[#dedbc8] grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#797f70] block">Central Atelier</span>
              <p className="font-editorial text-lg font-bold text-[#242921]">Iloilo City Proper</p>
              <p className="text-xs text-[#5a6052] leading-relaxed">Calle Real Heritage District. Architectural concept & design synthesis.</p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#797f70] block">Heritage Workshop</span>
              <p className="font-editorial text-lg font-bold text-[#242921]">Jaro, Iloilo</p>
              <p className="text-xs text-[#5a6052] leading-relaxed">Seminario St. Custom timber joinery, lighting study & interior detailing.</p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#797f70] block">Material Hub</span>
              <p className="font-editorial text-lg font-bold text-[#242921]">Pavia & Oton, Iloilo</p>
              <p className="text-xs text-[#5a6052] leading-relaxed">Pavia–Oton Corridor. Full-scale material testing & fabrication management.</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs font-mono text-[#6c7263] pt-6 border-t border-[#dedbc8]/60">
            <span>Philippine Standard Time (PHT · UTC+8): <strong className="text-[#242921] font-semibold">{phTime || '--:--:--'}</strong></span>
            <span>Based in Iloilo City, serving Iloilo Province & Panay</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
