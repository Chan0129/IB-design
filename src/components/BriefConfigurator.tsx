import React, { useState, useMemo } from 'react';
import { Sliders, ArrowRight, Check, Compass, Sparkles } from 'lucide-react';

export interface BriefConfiguration {
  typology: string;
  scope: string;
  materialTier: string;
  timeline: string;
  estimatedWeeks: number;
  teamSize: string;
  phases: string[];
}

interface BriefConfiguratorProps {
  onTransferBrief: (config: BriefConfiguration) => void;
}

export const BriefConfigurator: React.FC<BriefConfiguratorProps> = ({ onTransferBrief }) => {
  const [typology, setTypology] = useState<'architecture' | 'hardware' | 'interior' | 'brand'>('architecture');
  const [scope, setScope] = useState<'compact' | 'medium' | 'flagship'>('medium');
  const [materialTier, setMaterialTier] = useState<'premium' | 'circular' | 'bespoke'>('circular');
  const [timeline, setTimeline] = useState<'accelerated' | 'standard' | 'extended'>('standard');

  const typologies = [
    { id: 'architecture', label: 'Spatial Architecture', desc: 'Pavilions, headquarters & civic structures' },
    { id: 'hardware', label: 'Industrial Hardware', desc: 'Tactile consumer objects, dials & electronics' },
    { id: 'interior', label: 'Spatial Interiors', desc: 'Monastic ateliers, acoustic studios & galleries' },
    { id: 'brand', label: 'Brand & Environment', desc: 'Spatial typography, wayfinding & soundscapes' }
  ];

  const scopes = [
    { id: 'compact', label: 'Compact / Prototype', desc: 'Under 3,000 sq ft / Proof-of-Concept batch' },
    { id: 'medium', label: 'Standard Commission', desc: '3,000 – 15,000 sq ft / Pilot production run' },
    { id: 'flagship', label: 'Flagship / Masterplan', desc: 'Over 15,000 sq ft / Global enterprise scale' }
  ];

  const materialTiers = [
    { id: 'premium', label: 'Class-A Architectural', desc: 'Anodized alloys, milled brass, honed travertine' },
    { id: 'circular', label: 'Net-Zero Circular', desc: 'Carbon-negative timber, recycled bio-composites' },
    { id: 'bespoke', label: 'Laboratory Formulations', desc: 'Custom proprietary alloy & acoustic matrix casting' }
  ];

  const timelines = [
    { id: 'accelerated', label: 'Accelerated Sprint', desc: '10–14 Weeks (Dedicated sprint pod)' },
    { id: 'standard', label: 'Standard Rigor', desc: '18–24 Weeks (Full physical mockups & testing)' },
    { id: 'extended', label: 'Extended Innovation', desc: '30+ Weeks (Deep material R&D & patents)' }
  ];

  const calculatedBrief = useMemo((): BriefConfiguration => {
    let weeks = 20;
    if (timeline === 'accelerated') weeks = 12;
    if (timeline === 'extended') weeks = 32;

    let team = '1 Partner, 2 Computational Architects, 1 Material Specialist';
    if (typology === 'hardware') {
      team = '1 Lead Industrial Designer, 1 DFM Engineer, 1 CMF Specialist';
    } else if (typology === 'interior') {
      team = '1 Spatial Director, 1 Acoustic Physicist, 2 Millwork Detailers';
    } else if (typology === 'brand') {
      team = '1 Spatial Typographer, 1 Creative Technologist, 1 Sound Designer';
    }

    if (scope === 'flagship') {
      team += ', 1 Technical Principal';
    }

    const phases = [
      'Phase 01: Bioclimatic & Spatial Invariant Modeling',
      'Phase 02: 1:1 Scale Tactile CNC Mockups & Acoustic Tuning',
      'Phase 03: Executive Engineering Schematics & Material Specs',
      'Phase 04: On-Site Fabrication Supervision & Quality Certification'
    ];

    const currentTypology = typologies.find(t => t.id === typology)?.label || 'Architecture';
    const currentScope = scopes.find(s => s.id === scope)?.label || 'Medium';
    const currentTier = materialTiers.find(m => m.id === materialTier)?.label || 'Circular';
    const currentTimeline = timelines.find(t => t.id === timeline)?.label || 'Standard';

    return {
      typology: currentTypology,
      scope: currentScope,
      materialTier: currentTier,
      timeline: currentTimeline,
      estimatedWeeks: weeks,
      teamSize: team,
      phases
    };
  }, [typology, scope, materialTier, timeline]);

  return (
    <section id="estimator" className="py-24 border-t border-white/[0.08] bg-[#0c0d12]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
            05. Interactive Project Estimator
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
            Configure your studio commission brief.
          </h2>
          <p className="text-sm md:text-base text-white/60 mt-3 leading-relaxed">
            Select parameters to simulate the studio resource allocation, delivery phases, and technical milestones for your venture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Configurator */}
          <div className="lg:col-span-7 space-y-8 p-6 md:p-8 bg-[#12131b] border border-white/[0.08]">
            {/* 1. Typology */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-3">
                1. Project Typology
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {typologies.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTypology(t.id as any)}
                    className={`text-left p-3.5 border transition-all ${
                      typology === t.id
                        ? 'border-white bg-white/10 text-white'
                        : 'border-white/[0.06] bg-[#161722] text-white/60 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-semibold block">{t.label}</span>
                    <span className="text-[11px] text-white/40 block mt-0.5">{t.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale / Scope */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-3">
                2. Scope & Physical Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scopes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScope(s.id as any)}
                    className={`text-left p-3.5 border transition-all ${
                      scope === s.id
                        ? 'border-white bg-white/10 text-white'
                        : 'border-white/[0.06] bg-[#161722] text-white/60 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-semibold block">{s.label}</span>
                    <span className="text-[11px] text-white/40 block mt-0.5 leading-snug">{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Materiality */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-3">
                3. Materiality & Circular Commitment
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {materialTiers.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMaterialTier(m.id as any)}
                    className={`text-left p-3.5 border transition-all ${
                      materialTier === m.id
                        ? 'border-white bg-white/10 text-white'
                        : 'border-white/[0.06] bg-[#161722] text-white/60 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-semibold block">{m.label}</span>
                    <span className="text-[11px] text-white/40 block mt-0.5 leading-snug">{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Timeline */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-3">
                4. Delivery Velocity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {timelines.map((tm) => (
                  <button
                    key={tm.id}
                    onClick={() => setTimeline(tm.id as any)}
                    className={`text-left p-3.5 border transition-all ${
                      timeline === tm.id
                        ? 'border-white bg-white/10 text-white'
                        : 'border-white/[0.06] bg-[#161722] text-white/60 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-semibold block">{tm.label}</span>
                    <span className="text-[11px] text-white/40 block mt-0.5 leading-snug">{tm.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Calculated Projection */}
          <div className="lg:col-span-5 p-6 md:p-8 bg-[#141520] border border-white/15 sticky top-28 space-y-6">
            <div className="border-b border-white/[0.08] pb-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                Simulated Brief Output
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-1">
                {calculatedBrief.typology} — {calculatedBrief.scope}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 bg-[#191a27] border border-white/[0.06]">
                <span className="text-white/40 uppercase block">Project Duration</span>
                <span className="text-white text-base font-bold tabular-nums mt-1 block">
                  ~{calculatedBrief.estimatedWeeks} Weeks
                </span>
              </div>
              <div className="p-3 bg-[#191a27] border border-white/[0.06]">
                <span className="text-white/40 uppercase block">Material Standard</span>
                <span className="text-white text-sm font-semibold truncate mt-1 block">
                  {calculatedBrief.materialTier.split(' ')[0]} Tier
                </span>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-white/40 uppercase block mb-1">Allocated Studio Pod</span>
              <p className="text-xs text-white/80 font-mono bg-[#191a27] p-3 border border-white/[0.06] leading-relaxed">
                {calculatedBrief.teamSize}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-white/40 uppercase block mb-2">Milestone Deliverables</span>
              <div className="space-y-1.5 text-xs text-white/70">
                {calculatedBrief.phases.map((phase, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{phase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => onTransferBrief(calculatedBrief)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-white/90 transition-all shadow-md active:scale-[0.99]"
              >
                <span>Transfer Brief to Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-white/40 text-center font-mono mt-2">
                Pre-fills your inquiry with this configuration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
