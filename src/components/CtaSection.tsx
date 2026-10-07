import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll.tsx';

interface CtaSectionProps {
  onOpenConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#8d5746] text-[#f5f3ec]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <RevealOnScroll>
          {/* Section Kicker */}
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#f5f3ec]/70 mb-6">
            Start a Project
          </div>

          {/* Headline */}
          <div className="max-w-3xl mb-8">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#f5f3ec]">
              Have a place<br />
              <span className="italic font-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal">
                in mind?
              </span>
            </h2>
          </div>

          <p className="text-base md:text-lg text-[#f5f3ec]/85 max-w-xl font-light leading-relaxed mb-12">
            Whether you're starting with raw land or an existing structure, we'd love to hear about what you're hoping to build.
          </p>

          {/* Action Links */}
          <div className="space-y-4 mb-20">
            <div>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-3 text-lg md:text-xl font-editorial font-medium border-b border-[#f5f3ec]/60 pb-1 hover:border-[#f5f3ec] transition-all group"
              >
                <span>Start a Conversation</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </button>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6 text-xs font-mono tracking-widest uppercase text-[#f5f3ec]/80">
              <a href="mailto:ib.designsph@gmail.com" className="hover:text-white transition-colors">
                ib.designsph@gmail.com
              </a>
              <span className="hidden sm:inline text-[#f5f3ec]/40">·</span>
              <a href="tel:+63333200000" className="hover:text-white transition-colors">
                +63 (033) 320 0000
              </a>
              <span className="hidden sm:inline text-[#f5f3ec]/40">·</span>
              <span>Iloilo City, Philippines</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Famous Design Quote Banner in Screenshot */}
        <RevealOnScroll delayMs={150}>
          <div className="pt-12 border-t border-white/20">
            <blockquote className="font-editorial text-2xl sm:text-3xl md:text-4xl italic text-[#f5f3ec] leading-snug">
              “Details are not the details.<br />
              They make the design.”
            </blockquote>
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#f5f3ec]/60 mt-3">
              — Charles Eames
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
