import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll.tsx';

export const TestimonialBanner: React.FC = () => {
  const testimonials = [
    {
      quote: "IB Design turned our vision into a home that feels both extraordinary and effortlessly ours. The process was inspiring from start to finish.",
      client: "MARIA & ANDREAS",
      project: "HILLTOP RESIDENCE, JARO, ILOILO",
    },
    {
      quote: "The seamless collaboration between Ar. Rosie Joy Teves and IDr. Christian Delima saved us months of revisions. Every shadow and material texture feels deliberate.",
      client: "DR. RAFAEL & ELENA MONTINOLA",
      project: "COASTAL RETREAT, OTON, ILOILO",
    },
    {
      quote: "Our courtyard house in Pavia captures the evening sea breeze perfectly without AC. Their respect for local brick and climate is second to none.",
      client: "VICENTE & CARLA TAN",
      project: "INNER COURTYARD HOUSE, PAVIA",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 md:py-28 bg-[#283322] text-[#f7f8f4] overflow-hidden border-t border-[#374430]">
      {/* Subtle organic botanical shadow gradient */}
      <div 
        className="absolute top-0 right-0 bottom-0 w-2/5 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 75% 50%, rgba(151,173,137,0.18), transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Quotation mark & statement in signature olive tones */}
            <div className="lg:col-span-8 flex items-start gap-6">
              <span className="font-serif text-5xl sm:text-6xl text-[#97ad89] leading-none select-none font-bold shrink-0 mt-1">
                “
              </span>
              <div className="space-y-4">
                <blockquote className="font-editorial text-xl sm:text-2xl md:text-3xl font-light text-[#f0f3eb] leading-relaxed">
                  {testimonials[activeIndex].quote}
                </blockquote>
              </div>
            </div>

            {/* Attribution */}
            <div className="lg:col-span-4 lg:text-right space-y-1.5 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#3d4b35]">
              <div className="text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#f7f8f4]">
                {testimonials[activeIndex].client}
              </div>
              <div className="text-[11px] font-mono tracking-wider text-[#9fb095]">
                {testimonials[activeIndex].project}
              </div>
            </div>
          </div>

          {/* Carousel dots in olive tones matching picture */}
          <div className="mt-12 flex items-center justify-center lg:justify-end gap-2.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-7 h-1.5 bg-[#97ad89] rounded-full'
                    : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50 rounded-full'
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
