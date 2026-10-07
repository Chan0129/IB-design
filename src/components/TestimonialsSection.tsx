import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "IB Design replaced our planned corporate office with a monolithic travertine and charred cedar sanctuary in Pavia. Footfall to our executive headquarters rose 310%, and acoustic background noise dropped below 28dB.",
      author: "Helena Vance",
      role: "Managing Partner",
      organization: "Panay Venture Holdings (Pavia, Iloilo)"
    },
    {
      quote: "Their team machined 4,000 rotary titanium audio dials with zero tolerance deviations across our entire production batch. The hand-feel is unmatched in modern consumer electronics.",
      author: "Marcus Lindqvist",
      role: "VP of Hardware Architecture",
      organization: "Aether Acoustic Labs (Global & Southeast Asia)"
    },
    {
      quote: "The Komorebi Pavilion in Jaro reduced our cooling energy requirements by 74% solely through passive aerodynamics and bioclimatic timber louvers in our tropical climate.",
      author: "Arch. Ramon Villanueva",
      role: "Spatial Heritage Director",
      organization: "Jaro Cultural & Arts Trust (Iloilo)"
    }
  ];

  return (
    <section className="py-24 border-t border-white/[0.08] bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
            06. Patrons & Partnerships
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
            Built for institutions who refuse compromise.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="p-8 border border-white/[0.08] bg-[#111219] flex flex-col justify-between"
            >
              <p className="text-sm md:text-base text-white/80 leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
              <div className="pt-6 border-t border-white/[0.06]">
                <p className="text-sm font-bold text-white font-display">{t.author}</p>
                <p className="text-xs text-white/50 mt-0.5">{t.role}</p>
                <p className="text-xs text-amber-400/90 font-mono mt-0.5">{t.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
