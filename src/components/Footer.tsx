import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IBLogo } from './IBLogo.tsx';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenAboutUs?: () => void;
  onNavigateHome?: (sec?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenConsultation,
  onOpenAboutUs,
  onNavigateHome
}) => {
  return (
    <footer className="bg-[#f5f7f2] text-[#242921] pt-20 pb-12 border-t border-[#dce3d5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#dce3d5]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <IBLogo className="h-12 w-auto" />
            </div>

            <p className="text-xs text-[#525d49] max-w-sm leading-relaxed font-light">
              An Iloilo-based architecture and design-build studio creating timeless spaces with purpose and precision.
            </p>

            {/* Direct Studio Email Enquiry */}
            <div className="pt-1 text-xs font-mono text-[#525d49]">
              <span className="text-[10px] uppercase tracking-wider text-[#798570] block">Enquiries:</span>
              <a 
                href="mailto:ib.designsph@gmail.com" 
                className="text-[#47543c] font-semibold hover:underline"
              >
                ib.designsph@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#525d49]">
              <a href="#instagram" className="hover:text-[#47543c] transition-colors">
                Instagram
              </a>
              <span className="text-[#c4cbbe]">·</span>
              <a href="#pinterest" className="hover:text-[#47543c] transition-colors">
                Pinterest
              </a>
              <span className="text-[#c4cbbe]">·</span>
              <a href="#linkedin" className="hover:text-[#47543c] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Studio Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#47543c] font-semibold block">
              STUDIO
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#333d2e]">
              <li>
                {onOpenAboutUs ? (
                  <button onClick={onOpenAboutUs} className="hover:text-[#47543c] transition-colors cursor-pointer text-left">
                    About Us
                  </button>
                ) : (
                  <a href="#about" className="hover:text-[#47543c] transition-colors">About Us</a>
                )}
              </li>
              <li>
                <a 
                  href="#philosophy" 
                  onClick={(e) => {
                    if (onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome('philosophy');
                    }
                  }}
                  className="hover:text-[#47543c] transition-colors"
                >
                  Our Philosophy
                </a>
              </li>
              <li>
                {onOpenAboutUs ? (
                  <button onClick={onOpenAboutUs} className="hover:text-[#47543c] transition-colors cursor-pointer text-left">
                    Ar. Rosie Joy Teves
                  </button>
                ) : (
                  <span className="text-[#64715a]">Ar. Rosie Joy Teves</span>
                )}
              </li>
              <li>
                {onOpenAboutUs ? (
                  <button onClick={onOpenAboutUs} className="hover:text-[#47543c] transition-colors cursor-pointer text-left">
                    IDr. Christian Delima
                  </button>
                ) : (
                  <span className="text-[#64715a]">IDr. Christian Delima</span>
                )}
              </li>
              <li>
                <a href="#careers" className="hover:text-[#47543c] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#47543c] font-semibold block">
              SERVICES
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#333d2e]">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    if (onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome('services');
                    }
                  }}
                  className="hover:text-[#47543c] transition-colors"
                >
                  Architecture
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    if (onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome('services');
                    }
                  }}
                  className="hover:text-[#47543c] transition-colors"
                >
                  Design-Build
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    if (onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome('services');
                    }
                  }}
                  className="hover:text-[#47543c] transition-colors"
                >
                  Interiors
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    if (onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome('services');
                    }
                  }}
                  className="hover:text-[#47543c] transition-colors"
                >
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#47543c] font-semibold block">
              INFO
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#333d2e]">
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => {
                    if (onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome('process');
                    }
                  }}
                  className="hover:text-[#47543c] transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#47543c] transition-colors cursor-pointer text-left">
                  FAQ & Briefing
                </button>
              </li>
              <li>
                <span className="text-[#64715a]">Sustainability</span>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#47543c] transition-colors cursor-pointer text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Let's Create Together Box in signature olive */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#47543c] font-semibold block">
              LET'S CREATE TOGETHER
            </span>
            <p className="text-xs text-[#525d49] leading-relaxed font-light">
              Tell us about your project and let's build something beautiful.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 text-center border border-[#47543c] hover:bg-[#47543c] hover:text-[#faf9f5] text-xs font-mono uppercase tracking-[0.16em] text-[#47543c] transition-all cursor-pointer shadow-2xs"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright in olive tones */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-widest text-[#66735d]">
          <div>
            © IB DESIGN · BUILD STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div>
            Iloilo City, Philippines · Jaro · Pavia · Oton
          </div>
        </div>
      </div>
    </footer>
  );
};
