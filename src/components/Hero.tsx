import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExplorePortfolio }) => {
  return (
    <section id="top" className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-[#faf9f6] text-[#242921] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-5 space-y-8 z-10">
            {/* Tagline Kicker */}
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#47543c] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#47543c]" />
              <span>Iloilo-Based Studio · Panay, Philippines</span>
            </div>

            {/* Main Headline matching picture */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal leading-[1.08] tracking-tight text-[#1a1e18]">
              Architecture.<br />
              Crafted with<br />
              <span className="italic font-garamond text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal text-[#47543c]">
                Purpose.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-[#4d5345] font-light leading-relaxed max-w-md">
              A design-build studio creating thoughtful spaces that elevate how you live. Practicing across Iloilo City, Jaro, Pavia, and Oton.
            </p>

            {/* Action Buttons matching picture */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplorePortfolio}
                className="px-7 py-3.5 bg-[#47543c] hover:bg-[#38432f] text-[#faf9f5] text-xs font-mono uppercase tracking-[0.2em] font-medium transition-all shadow-xs cursor-pointer flex items-center gap-2 group"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 border border-[#47543c] hover:bg-[#47543c] hover:text-[#faf9f5] text-[#47543c] text-xs font-mono uppercase tracking-[0.2em] font-medium transition-all cursor-pointer"
              >
                LET'S TALK
              </button>
            </div>
          </div>

          {/* Right Column: Hero Architecture Photograph matching picture */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/11] rounded-xs overflow-hidden shadow-xl bg-[#282d24]">
              <img
                src="/src/assets/images/linea_hero_villa_1791357367768.jpg"
                alt="Modern cantilevered architectural residence with reflecting pool at dusk"
                className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.98] hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              
              {/* Subtle architectural vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Minimal caption badge */}
              <div className="absolute bottom-4 right-4 bg-[#1c201a]/85 backdrop-blur-xs text-[#f5f3ec] text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 border border-white/10">
                Residence · Iloilo Province
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
