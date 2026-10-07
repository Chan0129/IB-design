export interface MaterialSpecimen {
  id: string;
  name: string;
  category: 'Structural Metal' | 'Natural Stone' | 'Acoustic Composite' | 'Architectural Glass' | 'Timber Core';
  origin: string;
  density: string;
  embodiedCarbon: string;
  tactileFinish: string;
  acousticAbsorption: string;
  thermalConductivity: string;
  signatureApplication: string;
  description: string;
  accentColor: string;
}

export const MATERIAL_SPECIMENS: MaterialSpecimen[] = [
  {
    id: 'travertine-monolith',
    name: 'Honed Roman Travertine',
    category: 'Natural Stone',
    origin: 'Tivoli, Italy (Carbon-Offset Extraction)',
    density: '2,420 kg/m³',
    embodiedCarbon: '0.08 kg CO₂e/kg',
    tactileFinish: 'Micro-filled matte satin with open cross-cut fissures',
    acousticAbsorption: 'NRC 0.12 (Reflective anchor)',
    thermalConductivity: '1.8 W/m·K (Passive thermal ballast)',
    signatureApplication: 'Monolithic reception plinths and zero-joint floor slabs',
    description: 'Extracted from historic geothermal quarries with low-impact waterjet splitting. Offers an ancient textural grounding against precision aircraft-grade metals.',
    accentColor: '#d6c7b2'
  },
  {
    id: 'titanium-grade-5',
    name: 'Anodized Grade 5 Titanium',
    category: 'Structural Metal',
    origin: 'Sendai, Japan (Precision CNC Mill)',
    density: '4,430 kg/m³',
    embodiedCarbon: '14.2 kg CO₂e/kg (100% Recyclable)',
    tactileFinish: 'Ultra-fine glass bead blast with charcoal vapor deposition',
    acousticAbsorption: 'Non-porous specular damping',
    thermalConductivity: '6.7 W/m·K (Low heat transfer)',
    signatureApplication: 'Tactile tactile controller housings and cantilever facade clips',
    description: 'Provides unmatched strength-to-weight ratios with exceptional corrosion resistance and a cold, silky surface feel that does not smudge or oxidize over decades.',
    accentColor: '#9398a6'
  },
  {
    id: 'blackened-brass',
    name: 'Micro-Perforated Blackened Brass',
    category: 'Structural Metal',
    origin: 'Birmingham, UK (Hand Patinated)',
    density: '8,500 kg/m³',
    embodiedCarbon: '3.8 kg CO₂e/kg',
    tactileFinish: 'Hand-rubbed liver-of-sulfur patina with micro-wax seal',
    acousticAbsorption: 'NRC 0.72 (Sub-millimeter resonant resonator backing)',
    thermalConductivity: '115 W/m·K',
    signatureApplication: 'HVAC return grilles, acoustic privacy screens, and lighting reflectors',
    description: 'Laser-perforated with 0.8mm micro-apertures spaced at 2mm intervals. Visually solid from 1 meter away while acoustically transparent to sound waves.',
    accentColor: '#bfa76f'
  },
  {
    id: 'fluted-smoked-glass',
    name: 'Smoked Ribbed Borosilicate Glass',
    category: 'Architectural Glass',
    origin: 'Murano, Italy (Annealed Casting)',
    density: '2,230 kg/m³',
    embodiedCarbon: '0.95 kg CO₂e/kg',
    tactileFinish: 'Continuous 12mm fluted reeding with optical bronze tint',
    acousticAbsorption: 'STC 38 dB sound transmission loss',
    thermalConductivity: '1.05 W/m·K',
    signatureApplication: 'Studio partitions, light diffusion shafts, and backlit display vitrines',
    description: 'Refracts hard direct artificial and natural light into soft linear gradients. Conceals background workspaces while preserving full daylight transmission.',
    accentColor: '#7b858f'
  },
  {
    id: 'charred-cedar',
    name: 'Yakisugi Charred Hinoki Cedar',
    category: 'Timber Core',
    origin: 'Wakayama, Japan (Sustainable Forestry)',
    density: '480 kg/m³',
    embodiedCarbon: '-1.4 kg CO₂e/kg (Carbon Negative Sink)',
    tactileFinish: 'Heavy alligator-scale carbonized surface with natural cedar oil',
    acousticAbsorption: 'NRC 0.45 (Natural diffusion)',
    thermalConductivity: '0.11 W/m·K (Excellent insulation)',
    signatureApplication: 'External pavilion louvers and meditative interior feature walls',
    description: 'Charred using traditional flame pyrolysis, providing natural resistance to rot, UV degradation, and insects without chemical sealants or synthetic toxins.',
    accentColor: '#3d3f47'
  }
];
