import React, { useState, useEffect } from 'react';

interface SectionMarker {
  id: string;
  label: string;
}

const SECTIONS: SectionMarker[] = [
  { id: 'top', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'works', label: 'Portfolio' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'process', label: 'Process' },
];

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
      setScrollProgress(progress);

      const scrollPosition = currentScroll + window.innerHeight * 0.35;
      
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      {/* Background track */}
      <div className="w-full h-[3px] bg-[#47543c]/15 relative backdrop-blur-xs">
        {/* Fill bar in signature olive green */}
        <div 
          className="h-full bg-[#47543c] transition-all duration-150 ease-out origin-left shadow-xs"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Section waypoint notches along the track */}
        <div className="absolute inset-0 flex justify-between px-2 pointer-events-auto">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group relative -top-1 px-1 py-1 focus:outline-hidden cursor-pointer"
              title={`Jump to ${sec.label}`}
              aria-label={`Jump to ${sec.label}`}
            >
              <span className={`block w-1.5 h-1.5 transition-all ${
                activeSection === sec.label 
                  ? 'bg-[#47543c] scale-125' 
                  : 'bg-[#47543c]/30 group-hover:bg-[#47543c]'
              }`} />
              
              <span className="opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap bg-[#2a3324] px-1.5 py-0.5 text-[#f5f3ec] shadow-sm">
                {sec.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
