export interface Project {
  id: string;
  title: string;
  discipline: 'Architecture' | 'Interiors' | 'Design-Build';
  client: string;
  location: string;
  year: string;
  coverImage: string;
  heroImage: string;
  summary: string;
  description: string;
  dimensions?: string;
  materials: string[];
  specs: { label: string; value: string }[];
  impact: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'hilltop-residence',
    title: 'HILLTOP RESIDENCE',
    discipline: 'Architecture',
    client: 'Private Residence',
    location: 'Jaro, Iloilo',
    year: '2024',
    coverImage: '/src/assets/images/tropical_residence_jaro_1791356094107.jpg',
    heroImage: '/src/assets/images/tropical_residence_jaro_1791356094107.jpg',
    summary: 'A multi-generational residence organized around a shaded courtyard garden, combining board-marked concrete with deep timber eaves.',
    description: 'Designed to accommodate an Iloilo family, Hilltop Residence opens towards an inner sanctuary courtyard that pulls cool afternoon breezes through louvered mahogany screens and wide shaded verandas.',
    dimensions: '480 m² / 2-Storey Residence',
    materials: ['Local Board-Marked Concrete', 'Reclaimed Guijo & Yakal Timber', 'Honed Antique Basalt', 'Low-E Acoustic Glazing'],
    specs: [
      { label: 'Site Footprint', value: '620 m² Lot Area' },
      { label: 'Passive Ventilation', value: '100% Cross-ventilation in living wings' },
      { label: 'Solar Protection', value: '1.8m Cantilevered roof eaves' },
      { label: 'Completion', value: 'February 2024' }
    ],
    impact: 'Reduced active air-conditioning reliance by 65% throughout the dry season via deep eaves and courtyard micro-climates.'
  },
  {
    id: 'coastal-retreat',
    title: 'COASTAL RETREAT',
    discipline: 'Design-Build',
    client: 'Private Retreat',
    location: 'Oton, Iloilo',
    year: '2023',
    coverImage: '/src/assets/images/tropical_courtyard_villa_1791356142390.jpg',
    heroImage: '/src/assets/images/tropical_courtyard_villa_1791356142390.jpg',
    summary: 'A minimalist waterfront home that balances expansive ocean vistas with secluded courtyards.',
    description: 'Situated on the scenic Oton coastline, this residence balances panoramic horizon views with protected inner garden courtyards that buffer sea salt spray and create gentle microclimates.',
    dimensions: '360 m² Waterfront Villa',
    materials: ['Salt-Treated Teak Timber', 'Marine Grade Cast Concrete', 'Coral Stone Accents', 'Frameless Structural Glass'],
    specs: [
      { label: 'Coastal Setback', value: '35m Native vegetation buffer' },
      { label: 'Solar Orientation', value: 'Direct North-South prevailing breeze axis' },
      { label: 'Infinity Pool', value: '18m Brackish water lap pool' },
      { label: 'Completion', value: 'November 2023' }
    ],
    impact: 'Engineered to withstand Category 5 typhoons with zero damage while maintaining frameless glazed living vistas.'
  },
  {
    id: 'inner-courtyard-house',
    title: 'INNER COURTYARD HOUSE',
    discipline: 'Architecture',
    client: 'Private Residence',
    location: 'Pavia, Iloilo',
    year: '2023',
    coverImage: '/src/assets/images/tropical_loft_interior_1791356120289.jpg',
    heroImage: '/src/assets/images/tropical_loft_interior_1791356120289.jpg',
    summary: 'A tranquil sanctuary organized around an open-sky central garden with mature native trees.',
    description: 'Constructed using regionally sourced clay brickwork and permeable timber pergolas, this Pavia home filters intense sunlight while maintaining privacy and a continuous sensory connection to nature.',
    dimensions: '290 m² Courtyard Home',
    materials: ['Locally Fired Clay Brick', 'Treated Bamboo & Teak Screens', 'Polished Concrete Slabs', 'Limestone Accents'],
    specs: [
      { label: 'Courtyard Ratio', value: '35% of total footprint dedicated to living garden' },
      { label: 'Rainwater Retention', value: '10,000L Underground filtration cistern' },
      { label: 'Natural Shading', value: 'Mature Talisay and Calachuchi trees' },
      { label: 'Completion', value: 'June 2023' }
    ],
    impact: 'Maintains an ambient indoor temperature 4°C cooler than surrounding urban ambient levels without mechanical cooling.'
  },
  {
    id: 'urban-minimalist',
    title: 'URBAN MINIMALIST',
    discipline: 'Interiors',
    client: 'Heritage Atelier & Loft',
    location: 'Iloilo City',
    year: '2023',
    coverImage: '/src/assets/images/tropical_atelier_gallery_1791356156215.jpg',
    heroImage: '/src/assets/images/tropical_atelier_gallery_1791356156215.jpg',
    summary: 'An adaptive reuse atelier in the Calle Real heritage district blending raw concrete with bespoke brass detailing.',
    description: 'Set within an historic structure in Iloilo City, this interior project restores original timber roof trusses and introduces clean geometric steel partitions, custom walnut millwork, and warm architectural lighting.',
    dimensions: '310 m² Interior Atelier',
    materials: ['Restored Narra Trusses', 'Custom Terrazzo Slabs', 'Solid Brass Fixtures', 'Textured Lime Wash Plaster'],
    specs: [
      { label: 'Ceiling Clearance', value: '6.2m Double-height rafter span' },
      { label: 'Acoustic Comfort', value: 'NRC 0.72 with concealed acoustic plaster' },
      { label: 'Joinery Units', value: '100% Handcrafted by local Iloilo artisans' },
      { label: 'Completion', value: 'August 2023' }
    ],
    impact: 'Recognized for exemplary heritage restoration and sustainable reuse of local timber by regional preservation trusts.'
  }
];
