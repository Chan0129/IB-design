import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { IBLogo } from './IBLogo.tsx';
import { useAuth } from '../context/AuthContext.tsx';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenPortal?: () => void;
  currentView?: 'home' | 'about';
  onNavigateAbout?: () => void;
  onNavigateHome?: (sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation,
  onOpenPortal,
  currentView = 'home',
  onNavigateAbout,
  onNavigateHome
}) => {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (currentView === 'about') {
        setActiveId('about');
        return;
      }

      const sections = [
        { id: 'top', navKey: 'home' },
        { id: 'services', navKey: 'services' },
        { id: 'works', navKey: 'portfolio' },
        { id: 'philosophy', navKey: 'philosophy' },
        { id: 'process', navKey: 'process' },
        { id: 'contact', navKey: 'contact' }
      ];
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      
      let current = 'home';
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          current = sec.navKey;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    setMobileMenuOpen(false);
    if (target === 'about') {
      e.preventDefault();
      if (onNavigateAbout) onNavigateAbout();
      return;
    }

    if (currentView === 'about' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome(target);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (currentView === 'about' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#eae7df] py-3.5 shadow-xs' 
          : 'bg-[#faf9f6] border-b border-[#eae7df] py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Mark: Replaced text with uploaded IB monogram logo */}
        <a 
          href="#top"
          onClick={handleLogoClick}
          className="flex items-center hover:opacity-85 transition-opacity cursor-pointer py-1 group"
          aria-label="IB Design Home"
        >
          <IBLogo className="h-10 sm:h-11 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
        </a>

        {/* Center Nav Links matching picture: HOME, ABOUT, SERVICES, PORTFOLIO, PROCESS, PHILOSOPHY, CONTACT */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-[0.2em] font-medium text-[#5c6155]">
          <a 
            href="#top"
            onClick={(e) => handleLinkClick(e, 'top')}
            className={`transition-colors relative py-1 hover:text-[#47543c] ${
              activeId === 'home' && currentView === 'home' ? 'text-[#47543c] font-semibold' : ''
            }`}
          >
            HOME
            {activeId === 'home' && currentView === 'home' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#47543c]" />
            )}
          </a>

          <button 
            type="button"
            onClick={(e) => handleLinkClick(e, 'about')}
            className={`transition-colors relative py-1 uppercase hover:text-[#47543c] cursor-pointer ${
              currentView === 'about' ? 'text-[#47543c] font-semibold' : ''
            }`}
          >
            ABOUT
            {currentView === 'about' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#47543c]" />
            )}
          </button>

          <a 
            href="#services"
            onClick={(e) => handleLinkClick(e, 'services')}
            className={`transition-colors relative py-1 hover:text-[#47543c] ${
              activeId === 'services' && currentView === 'home' ? 'text-[#47543c] font-semibold' : ''
            }`}
          >
            SERVICES
            {activeId === 'services' && currentView === 'home' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#47543c]" />
            )}
          </a>

          <a 
            href="#works"
            onClick={(e) => handleLinkClick(e, 'works')}
            className={`transition-colors relative py-1 hover:text-[#47543c] ${
              activeId === 'portfolio' && currentView === 'home' ? 'text-[#47543c] font-semibold' : ''
            }`}
          >
            PORTFOLIO
            {activeId === 'portfolio' && currentView === 'home' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#47543c]" />
            )}
          </a>

          <a 
            href="#process"
            onClick={(e) => handleLinkClick(e, 'process')}
            className={`transition-colors relative py-1 hover:text-[#47543c] ${
              activeId === 'process' && currentView === 'home' ? 'text-[#47543c] font-semibold' : ''
            }`}
          >
            PROCESS
            {activeId === 'process' && currentView === 'home' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#47543c]" />
            )}
          </a>

          <a 
            href="#philosophy"
            onClick={(e) => handleLinkClick(e, 'philosophy')}
            className={`transition-colors relative py-1 hover:text-[#47543c] ${
              activeId === 'philosophy' && currentView === 'home' ? 'text-[#47543c] font-semibold' : ''
            }`}
          >
            PHILOSOPHY
            {activeId === 'philosophy' && currentView === 'home' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#47543c]" />
            )}
          </a>

          <button 
            type="button"
            onClick={onOpenConsultation}
            className="transition-colors relative py-1 uppercase hover:text-[#47543c] cursor-pointer"
          >
            CONTACT
          </button>
        </nav>

        {/* Right Button matching picture: Outlined sharp button "LET'S DESIGN" in signature olive */}
        <div className="flex items-center gap-3">
          {onOpenPortal && (
            <button
              onClick={onOpenPortal}
              className="text-[11px] font-mono uppercase tracking-wider text-[#556448] hover:text-[#1c201a] transition-colors cursor-pointer flex items-center gap-1.5 px-2 py-1"
              title="Studio Enquiries Portal & Sign In"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#47543c]" />
              <span className="hidden xl:inline">{user ? 'Studio Portal' : 'Portal'}</span>
            </button>
          )}

          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 border border-[#47543c] hover:bg-[#47543c] hover:text-[#faf9f5] text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#47543c] transition-all cursor-pointer shadow-xs"
          >
            <span>LET'S DESIGN</span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#242921] hover:text-[#47543c] transition-colors lg:hidden cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf9f6] border-b border-[#eae7df] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5 text-xs uppercase tracking-[0.18em] font-medium text-[#4b5044]">
            <a 
              href="#top" 
              onClick={(e) => handleLinkClick(e, 'top')}
              className="py-1 hover:text-[#1c2018]"
            >
              HOME
            </a>
            <button 
              type="button"
              onClick={(e) => handleLinkClick(e, 'about')}
              className="py-1 text-left uppercase hover:text-[#1c2018] cursor-pointer"
            >
              ABOUT (Ar. Rosie Joy Teves & IDr. Christian Delima)
            </button>
            <a 
              href="#services" 
              onClick={(e) => handleLinkClick(e, 'services')}
              className="py-1 hover:text-[#1c2018]"
            >
              SERVICES
            </a>
            <a 
              href="#works" 
              onClick={(e) => handleLinkClick(e, 'works')}
              className="py-1 hover:text-[#1c2018]"
            >
              PORTFOLIO
            </a>
            <a 
              href="#process" 
              onClick={(e) => handleLinkClick(e, 'process')}
              className="py-1 hover:text-[#1c2018]"
            >
              PROCESS
            </a>
            <a 
              href="#philosophy" 
              onClick={(e) => handleLinkClick(e, 'philosophy')}
              className="py-1 hover:text-[#1c2018]"
            >
              PHILOSOPHY
            </a>
            <button 
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="py-1 text-left uppercase hover:text-[#1c2018] cursor-pointer"
            >
              CONTACT
            </button>
          </nav>

          <div className="pt-3 border-t border-[#eae7df]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 border border-[#242921] bg-[#242921] text-[#faf9f6] text-xs font-mono uppercase tracking-[0.2em] cursor-pointer"
            >
              <span>LET'S DESIGN</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
