import React, { useState } from 'react';
import { MATERIAL_SPECIMENS, MaterialSpecimen } from '../data/materials.ts';
import { Microscope, ArrowUpRight, Scale, Activity } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll.tsx';

interface MaterialsInspectorProps {
  onOpenConsultation: () => void;
}

export const MaterialsInspector: React.FC<MaterialsInspectorProps> = ({ onOpenConsultation }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialSpecimen>(MATERIAL_SPECIMENS[0]);

  return (
    <section id="materials" className="py-24 border-t border-white/[0.08] bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
                04. Materials R&D Laboratory
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
                Physical material archive & acoustic specimens.
              </h2>
            </div>
            <p className="text-sm md:text-base text-white/60 max-w-md">
              Before breaking ground or machining a chassis, we test real tactile specimens for carbon footprint, sound absorption, and sensory resonance.
            </p>
          </div>
        </RevealOnScroll>

        {/* Workbench Layout: Image Specimen + Interactive Inspector with Scroll Reveal */}
        <RevealOnScroll delayMs={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-white/[0.08] bg-[#111219]">
            {/* Left Column: Specimen Showcase Image */}
            <div className="lg:col-span-5 relative bg-black flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[420px] w-full overflow-hidden">
                <img
                  src="/src/assets/images/ib_material_lab_1791344124247.jpg"
                  alt="IB Design Material Research Laboratory specimens"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono uppercase text-amber-400">Atelier Material Bench</span>
                  <p className="text-sm text-white/90 font-medium">Specimen Batch 2026.04 · Physical Sample Archive</p>
                </div>
              </div>

              {/* Material Selector List */}
              <div className="p-4 bg-[#0d0e14] border-t border-white/[0.08] space-y-1">
                <span className="text-[11px] font-mono uppercase text-white/40 px-2 block mb-2">Select Active Specimen</span>
                <div className="grid grid-cols-1 gap-1">
                  {MATERIAL_SPECIMENS.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`w-full text-left px-3 py-2 text-xs font-mono transition-colors flex items-center justify-between ${
                        selectedMaterial.id === mat.id
                          ? 'bg-white/10 text-white font-semibold'
                          : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      <span>{mat.name}</span>
                      <span className="text-white/40 text-[10px]">{mat.category}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Deep Physical Analysis & Data */}
            <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-1">
                      <span>{selectedMaterial.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Origin: {selectedMaterial.origin}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-display">
                      {selectedMaterial.name}
                    </h3>
                  </div>
                  <div 
                    className="w-4 h-4 rounded-none border border-white/20"
                    style={{ backgroundColor: selectedMaterial.accentColor }}
                    title="Specimen Tone"
                  />
                </div>

                <p className="text-sm text-white/80 leading-relaxed mb-8">
                  {selectedMaterial.description}
                </p>

                {/* Physical Specifications Table */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white/50">
                    Engineering & Performance Metrics
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 bg-[#161722] border border-white/[0.05]">
                      <span className="text-white/40 block">Density Mass</span>
                      <span className="text-white text-sm font-semibold tabular-nums mt-0.5 block">{selectedMaterial.density}</span>
                    </div>

                    <div className="p-3 bg-[#161722] border border-white/[0.05]">
                      <span className="text-white/40 block">Embodied Carbon</span>
                      <span className="text-amber-400 text-sm font-semibold tabular-nums mt-0.5 block">{selectedMaterial.embodiedCarbon}</span>
                    </div>

                    <div className="p-3 bg-[#161722] border border-white/[0.05]">
                      <span className="text-white/40 block">Acoustic Absorption</span>
                      <span className="text-white text-sm font-semibold tabular-nums mt-0.5 block">{selectedMaterial.acousticAbsorption}</span>
                    </div>

                    <div className="p-3 bg-[#161722] border border-white/[0.05]">
                      <span className="text-white/40 block">Thermal Conductivity</span>
                      <span className="text-white text-sm font-semibold tabular-nums mt-0.5 block">{selectedMaterial.thermalConductivity}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#161722] border border-white/[0.05] space-y-2 text-xs">
                    <div>
                      <span className="text-white/40 font-mono block">Tactile Finish & Hand-Feel</span>
                      <span className="text-white/90 mt-0.5 block">{selectedMaterial.tactileFinish}</span>
                    </div>
                    <div className="pt-2 border-t border-white/[0.05]">
                      <span className="text-white/40 font-mono block">Architectural Application</span>
                      <span className="text-white/90 mt-0.5 block">{selectedMaterial.signatureApplication}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-white/50 font-mono">
                  Order physical sample swatch box for architectural review
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-white/90 transition-all shadow-sm"
                >
                  <span>Request Material Kit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
