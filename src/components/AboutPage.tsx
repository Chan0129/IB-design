import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Award, Compass, Layers, MapPin, Sparkles, CheckCircle2, Mail, Phone } from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenConsultation: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onOpenConsultation,
  onNavigateSection,
}) => {
  const [phTime, setPhTime] = useState('');
  const [activeLeaderTab, setActiveLeaderTab] = useState<'both' | 'rosie' | 'christian'>('both');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const updateTimes = () => {
      const now = new Date();
      setPhTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Manila',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(now)
      );
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f3ec] text-[#242921]">
      {/* Top Breadcrumb & Return Bar */}
      <div className="pt-24 md:pt-28 pb-6 border-b border-[#e5e2d6] bg-[#edebe0]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#686f5f]">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 hover:text-[#242921] transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Home</span>
            </button>
            <span className="text-[#a4a99d]">/</span>
            <span className="text-[#242921] font-semibold">About Us</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#686f5f]">
            <span className="w-2 h-2 rounded-full bg-[#4a573e] animate-pulse" />
            <span>Iloilo City Atelier · PHT (UTC+8): <strong className="text-[#242921] font-medium">{phTime || '--:--:--'}</strong></span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-[#e5e2d6] bg-[#f6f5ee]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6d7364] mb-6">
            Practice Overview · Established in Iloilo City
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[#22271f]">
                Two disciplines.<br />
                <span className="italic font-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#38432f]">
                  One singular vision.
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-4 text-sm md:text-base text-[#4a5042] font-normal leading-relaxed">
              <p>
                IB Design brings together licensed architecture and certified interior design under one roof in Iloilo City, shaping enduring places throughout Iloilo Province and Western Visayas.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#f5f3ec] bg-[#4a573e] hover:bg-[#3b4731] transition-colors"
                >
                  <span>Commission the Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-[#dedbc8]">
            <div>
              <span className="font-editorial text-3xl md:text-4xl font-bold text-[#242921] block">2020</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6d7364]">Founded in Iloilo</span>
            </div>
            <div>
              <span className="font-editorial text-3xl md:text-4xl font-bold text-[#242921] block">45+</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6d7364]">Commissions Realized</span>
            </div>
            <div>
              <span className="font-editorial text-3xl md:text-4xl font-bold text-[#242921] block">2</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6d7364]">Licensed Principals</span>
            </div>
            <div>
              <span className="font-editorial text-3xl md:text-4xl font-bold text-[#242921] block">100%</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6d7364]">Site-Context Specific</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile: Ar. Rosie Joy Teves & IDr. Christian Delima */}
      <section className="py-20 md:py-28 bg-[#edebe0] border-b border-[#dedbc8]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6d7364] block mb-3">
                Studio Leadership
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#242921]">
                The Principals
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 bg-[#dfdccf] p-1 border border-[#cdc9ba]">
              <button
                onClick={() => setActiveLeaderTab('both')}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeLeaderTab === 'both' ? 'bg-[#47543c] text-[#f5f3ec] shadow-xs' : 'text-[#5a6052] hover:text-[#47543c]'
                }`}
              >
                All Leadership
              </button>
              <button
                onClick={() => setActiveLeaderTab('rosie')}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeLeaderTab === 'rosie' ? 'bg-[#47543c] text-[#f5f3ec] shadow-xs' : 'text-[#5a6052] hover:text-[#47543c]'
                }`}
              >
                Ar. Rosie Joy Teves
              </button>
              <button
                onClick={() => setActiveLeaderTab('christian')}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeLeaderTab === 'christian' ? 'bg-[#47543c] text-[#f5f3ec] shadow-xs' : 'text-[#5a6052] hover:text-[#47543c]'
                }`}
              >
                IDr. Christian Delima
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Principal 1: Ar. Rosie Joy Teves */}
            {(activeLeaderTab === 'both' || activeLeaderTab === 'rosie') && (
              <div className="bg-[#f6f5ee] border border-[#dedbc8] overflow-hidden flex flex-col transition-all duration-300">
                {/* Photo Header */}
                <div className="relative aspect-[4/3] bg-[#2a3026] overflow-hidden">
                  <img
                    src="/src/assets/images/ar_rosie_portrait_editorial_1791358374465.jpg"
                    alt="Ar. Rosie Joy Teves - Principal Architect"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#242921]/90 backdrop-blur-xs text-[#f5f3ec] text-[10px] font-mono uppercase tracking-widest px-3 py-1 border border-white/10">
                    Principal Architect
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#f5f3ec]/95 text-[#242921] text-[10px] font-mono tracking-widest px-2.5 py-1">
                    UAP · RLA
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-[#6c7263] mb-1">
                        Architecture & Spatial Planning
                      </div>
                      <h3 className="font-editorial text-3xl font-bold text-[#22271f] tracking-tight">
                        Ar. Rosie Joy Teves
                      </h3>
                      <p className="text-xs font-mono text-[#52584a] mt-1">
                        Registered & Licensed Architect (PRC) · United Architects of the Philippines
                      </p>
                    </div>

                    <blockquote className="border-l-2 border-[#4a573e] pl-4 italic font-garamond text-lg text-[#3d4435] leading-snug">
                      “Architecture in Iloilo is an ongoing dialogue with wind, shadow, and memory. We do not impose rigid forms; we listen to the orientation of the land and craft sheltering envelopes built for tropical longevity.”
                    </blockquote>

                    <div className="space-y-3 text-sm text-[#464c3e] leading-relaxed">
                      <p>
                        With comprehensive experience leading residential, adaptive reuse, and civic projects across Iloilo City, Jaro, and Pavia, <strong>Ar. Rosie Joy Teves</strong> directs IB Design’s architectural practice. Her methodology balances passive cooling strategies, deep roof overhangs, and clean, monolithic silhouettes that withstand Philippine typhoons and sun exposure.
                      </p>
                      <p>
                        From site zoning and local regulatory compliance in Iloilo Province to structural coordinating and parametric drafting, Ar. Teves ensures that every project is engineered with unwavering structural integrity and environmental empathy.
                      </p>
                    </div>

                    {/* Core Competencies */}
                    <div className="pt-4 border-t border-[#e2dfd2]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#797f70] block mb-2.5">
                        Areas of Leadership
                      </span>
                      <div className="flex flex-wrap gap-2 text-xs font-mono">
                        <span className="px-2.5 py-1 bg-[#edebe1] text-[#3d4336] border border-[#dedbc8]">Tropical Massing</span>
                        <span className="px-2.5 py-1 bg-[#edebe1] text-[#3d4336] border border-[#dedbc8]">Passive Ventilation</span>
                        <span className="px-2.5 py-1 bg-[#edebe1] text-[#3d4336] border border-[#dedbc8]">Local Permitting</span>
                        <span className="px-2.5 py-1 bg-[#edebe1] text-[#3d4336] border border-[#dedbc8]">Structural Coordination</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-[#e2dfd2] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#6c7263]">Iloilo City Studio</span>
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#4a573e] hover:text-[#2d3624] transition-colors"
                    >
                      <span>Inquire with Ar. Teves</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Principal 2: IDr. Christian Delima */}
            {(activeLeaderTab === 'both' || activeLeaderTab === 'christian') && (
              <div className="bg-[#f6f5ee] border border-[#dedbc8] overflow-hidden flex flex-col transition-all duration-300">
                {/* Photo Header */}
                <div className="relative aspect-[4/3] bg-[#2a3026] overflow-hidden">
                  <img
                    src="/src/assets/images/christian_delima_1791356906189.jpg"
                    alt="IDr. Christian Delima - Principal Interior Designer"
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#242921]/90 backdrop-blur-xs text-[#f5f3ec] text-[10px] font-mono uppercase tracking-widest px-3 py-1 border border-white/10">
                    Principal Interior Designer
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#f5f3ec]/95 text-[#242921] text-[10px] font-mono tracking-widest px-2.5 py-1">
                    PIID · RLID
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-[#6c7263] mb-1">
                        Interior Environments & Materiality
                      </div>
                      <h3 className="font-editorial text-3xl font-bold text-[#22271f] tracking-tight">
                        IDr. Christian Delima
                      </h3>
                      <p className="text-xs font-mono text-[#52584a] mt-1">
                        Registered & Licensed Interior Designer (PRC) · Philippine Institute of Interior Designers
                      </p>
                    </div>

                    <blockquote className="border-l-2 border-[#4a573e] pl-4 italic font-garamond text-lg text-[#3d4435] leading-snug">
                      “A space is not merely decorated; it is inhabited. We design intimate moments between tactile surfaces, morning light, and acoustic calmness, using locally harvested timbers, raw stone, and bespoke joinery.”
                    </blockquote>

                    <div className="space-y-3 text-sm text-[#464c3e] leading-relaxed">
                      <p>
                        As Design Director of Interior Environments, <strong>IDr. Christian Delima</strong> oversees the sensory experience of every IB space. His work harmonizes architectural proportions with tailored millwork, curated lighting, and tactile finishes that feel grounded in Visayan identity while adhering to international minimalist discipline.
                      </p>
                      <p>
                        Working directly with master woodworkers in Jaro and stone fabricators along the Pavia–Oton corridor, IDr. Delima details custom furniture, acoustic paneling, and custom fittings that transform concrete shells into serene, livable sanctuaries.
                      </p>
                    </div>

                    {/* Core Competencies */}
                    <div className="pt-4 border-t border-[#e2dfd2]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#797f70] block mb-2.5">
                        Areas of Leadership
                      </span>
                      <div className="flex flex-wrap gap-2 text-xs font-mono">
                        <span className="px-2.5 py-1 bg-[#edebe1] text-[#3d4336] border border-[#dedbc8]">Bespoke Millwork</span>
                        <span className="px-2.5 py-1 bg-[#edebe1] text-[#3d4336] border border-[#dedbc8]">Tactile Materiality</span>
                        <span className="px-2.5 py-1 bg-[#edebe1] text-[#3d4336] border border-[#dedbc8]">Acoustic & Lighting</span>
                        <span className="px-2.5 py-1 bg-[#edebe1] text-[#3d4336] border border-[#dedbc8]">Furniture Synthesis</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-[#e2dfd2] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#6c7263]">Iloilo City Studio</span>
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#4a573e] hover:text-[#2d3624] transition-colors"
                    >
                      <span>Inquire with IDr. Delima</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Philosophy: The Integration of Architecture & Interiors */}
      <section className="py-20 md:py-28 bg-[#f5f3ec] border-b border-[#dedbc8]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6d7364] block mb-3">
              Our Collaborative Core
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#242921]">
              Why having both Ar. Rosie Joy Teves & IDr. Christian Delima changes your project.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#edebe0] border border-[#dedbc8] space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#4a573e] text-[#f5f3ec] flex items-center justify-center font-mono text-sm font-semibold">
                01
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#242921]">
                Zero Handoff Friction
              </h3>
              <p className="text-sm text-[#4c5244] leading-relaxed">
                In standard practice, architects finish the building and hand it over to separate interior designers, resulting in mismatched proportions and costly revisions. At IB Design, Ar. Teves and IDr. Delima design simultaneously from sketch one.
              </p>
            </div>

            <div className="p-8 bg-[#edebe0] border border-[#dedbc8] space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#4a573e] text-[#f5f3ec] flex items-center justify-center font-mono text-sm font-semibold">
                02
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#242921]">
                Climate & Comfort In Sync
              </h3>
              <p className="text-sm text-[#4c5244] leading-relaxed">
                The architecture captures prevailing sea winds and shields against harsh tropical sun; the interior joinery channels that ventilation to cool living areas naturally without relying purely on air conditioning.
              </p>
            </div>

            <div className="p-8 bg-[#edebe0] border border-[#dedbc8] space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#4a573e] text-[#f5f3ec] flex items-center justify-center font-mono text-sm font-semibold">
                03
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#242921]">
                Local Material Mastery
              </h3>
              <p className="text-sm text-[#4c5244] leading-relaxed">
                We maintain direct partnerships with indigenous craftsmen, local timber sawmills, and quarry operators across Iloilo Province, curating authentic materials that develop graceful patina over decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Locations in Iloilo */}
      <section className="py-20 md:py-24 bg-[#f8f7f2] border-b border-[#dedbc8]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6d7364] block mb-2">
              Our Physical Presence
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#242921]">
              Rooted in Iloilo, Built to Last
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-[#edebe0] border border-[#dedbc8] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#4a573e] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Headquarters & Atelier</span>
              </div>
              <h4 className="font-editorial text-xl font-bold text-[#242921]">Iloilo City Proper</h4>
              <p className="text-xs text-[#52584a] leading-relaxed">
                Calle Real Heritage Zone. Client consultations, schematic design, and digital model synthesis.
              </p>
            </div>

            <div className="p-6 bg-[#edebe0] border border-[#dedbc8] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#4a573e] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Joinery Workshop</span>
              </div>
              <h4 className="font-editorial text-xl font-bold text-[#242921]">Jaro, Iloilo</h4>
              <p className="text-xs text-[#52584a] leading-relaxed">
                Seminario District. Custom timber detailing, acoustic mockup prototyping, and millwork crafts.
              </p>
            </div>

            <div className="p-6 bg-[#edebe0] border border-[#dedbc8] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#4a573e] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Fabrication & Testing</span>
              </div>
              <h4 className="font-editorial text-xl font-bold text-[#242921]">Pavia & Oton, Iloilo</h4>
              <p className="text-xs text-[#52584a] leading-relaxed">
                Pavia–Oton Industrial Corridor. Concrete casting trials, stone finishing, and site staging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-[#4a573e] text-[#f5f3ec]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#f5f3ec]/70 block">
            Collaborate With Us
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white max-w-2xl mx-auto">
            Ready to design your place with Ar. Rosie Joy Teves and IDr. Christian Delima?
          </h2>
          <p className="text-sm md:text-base text-[#f5f3ec]/85 max-w-xl mx-auto font-light leading-relaxed">
            We are currently accepting residential, boutique hospitality, and commercial briefs across Iloilo City and Panay Island.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#242921] bg-[#f5f3ec] hover:bg-white transition-colors"
            >
              Start Consultation
            </button>
            <button
              onClick={onBackToHome}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#f5f3ec] border border-[#f5f3ec]/40 hover:border-white transition-colors"
            >
              Explore Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
