import type { Product } from '../types';

export const products: Product[] = [
  // WOODEN DOORS (5 items)
  {
    id: 'prod-w1',
    slug: 'burmese-teak-royal-double-door',
    name: 'Royal Burmese Teak Main Double Door',
    category: 'Wooden Doors',
    categorySlug: 'wooden-doors',
    shortDescription: 'Handcrafted solid Burmese teak main double door with deep timber grain and antique brass lockset.',
    fullDescription: 'The pinnacle of architectural grandeur. Sculpted from 100% seasoned Burmese Teak, this double entrance door set features traditional mortise-and-tenon craftsmanship, deep natural oil finish, and custom raised paneling designed to withstand decades of weather while maintaining regal elegance.',
    images: ['/images/products/burmese-teak.jpg', '/images/categories/wooden-doors.jpg'],
    featured: true,
    specifications: {
      material: 'Solid Burmese Teak Wood',
      finish: 'Hand-rubbed Satin Polyurethane Oil',
      thickness: '45 mm',
      warranty: '25 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Main Villa Entrance', 'Luxury Residence', 'Grand Heritage Home']
    },
    variants: [
      { name: 'Standard Double Entrance (6ft x 8ft)', finish: 'Satin Walnut', priceEstimate: 'Custom Consultation' },
      { name: 'Grand Mansion Double (7ft x 9ft)', finish: 'Natural Golden Teak', priceEstimate: 'Custom Consultation' }
    ],
    tags: ['Main Entrance', 'Teak', 'Double Door', 'Handcrafted']
  },
  {
    id: 'prod-w2',
    slug: 'walnut-panel-interior-door',
    name: 'Architectural Walnut Single Panel Door',
    category: 'Wooden Doors',
    categorySlug: 'wooden-doors',
    shortDescription: 'Solid hardwood core with rich dark American walnut veneer and minimalist modern frame.',
    fullDescription: 'Designed for modern interior spaces, this solid wood door offers superior sound dampening, rich dark grain depth, and satin tactile finish. Comes pre-bored for concealed European hinges and mortise latching systems.',
    images: ['/images/categories/wooden-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Seasoned Hardwood Core & American Walnut Veneer',
      finish: 'Matte Polyurethane Clear Coat',
      thickness: '38 mm',
      warranty: '15 Years Warranty',
      waterproof: false,
      termiteProof: true,
      suitableFor: ['Master Bedroom', 'Executive Office', 'Private Suite']
    },
    variants: [
      { name: 'Standard Interior (3ft x 7ft)', finish: 'Dark Walnut' },
      { name: 'Wide Interior (3.5ft x 7ft)', finish: 'Natural Walnut' }
    ],
    tags: ['Interior', 'Walnut', 'Single Panel']
  },
  {
    id: 'prod-w3',
    slug: 'sheesham-heritage-carved-door',
    name: 'Sheesham Solid Hardwood Carved Door',
    category: 'Wooden Doors',
    categorySlug: 'wooden-doors',
    shortDescription: 'Solid Indian Rosewood (Sheesham) entrance door with traditional diamond panel carvings.',
    fullDescription: 'Renowned for its distinct grain contrast and extreme density, Indian Sheesham wood provides heavy-duty security and striking visual texture. Each door panel is kiln-dried to under 10% moisture content to prevent twisting or shrinking.',
    images: ['/images/categories/wooden-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Kiln-Dried Solid Sheesham Wood',
      finish: 'Heritage Honey Polish',
      thickness: '40 mm',
      warranty: '20 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Main Entrance', 'Pooja Room Entry', 'Boutique Hotel']
    },
    tags: ['Sheesham', 'Carved', 'Heritage']
  },
  {
    id: 'prod-w4',
    slug: 'mahogany-french-glass-door',
    name: 'Mahogany French Double Door Set',
    category: 'Wooden Doors',
    categorySlug: 'wooden-doors',
    shortDescription: 'Solid mahogany frame with bevelled clear tempered glass panes for sunlit interiors.',
    fullDescription: 'Infuse natural ambient sunlight between living spaces with our solid Mahogany French door set. Features double-bevelled 6mm safety glass, perimeter acoustic seals, and brass drop bolts.',
    images: ['/images/categories/wooden-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Solid Mahogany Frame & Bevelled Tempered Glass',
      finish: 'Dark Mahogany Satin Stain',
      thickness: '42 mm',
      warranty: '15 Years Warranty',
      waterproof: false,
      termiteProof: true,
      suitableFor: ['Dining Room Divider', 'Patio Transition', 'Library Entrance']
    },
    tags: ['French Door', 'Mahogany', 'Glass Inset']
  },
  {
    id: 'prod-w5',
    slug: 'honne-wood-heavy-main-door',
    name: 'Honne Timber Heavy Duty Main Door',
    category: 'Wooden Doors',
    categorySlug: 'wooden-doors',
    shortDescription: 'Ultra-dense Honne wood structural main door with antique iron stud details.',
    fullDescription: 'Engineered specifically for South Indian climate conditions, Honne timber is celebrated for high oil content and natural resistance to humidity. Finished with UV-protective coats.',
    images: ['/images/categories/wooden-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Natural Seasoned Honne Wood',
      finish: 'Weather-Shield Exterior Polish',
      thickness: '45 mm',
      warranty: '20 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Main Entrance', 'Villa Outer Door']
    },
    tags: ['Honne Wood', 'Main Door', 'Weather Resistant']
  },

  // PVC DOORS (4 items)
  {
    id: 'prod-p1',
    slug: 'waterproof-pvc-bathroom-door-oak',
    name: 'Waterproof PVC Bathroom Door in Dark Oak',
    category: 'PVC Doors',
    categorySlug: 'pvc-doors',
    shortDescription: 'High-density extruded polymer door with dark oak woodgrain foil, 100% impervious to water.',
    fullDescription: 'Engineered for high-moisture environments like ensuite bathrooms, steam rooms, and coastal homes. Built with heavy-internal PVC ribs, sound-insulating hollow chambers, and scratch-resistant woodgrain foil.',
    images: ['/images/categories/pvc-doors.jpg'],
    featured: true,
    specifications: {
      material: 'High-Density PVC Polymer Compound',
      finish: 'Dark Oak Textured Foil',
      thickness: '30 mm',
      warranty: '10 Years Waterproof Guarantee',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Ensuite Bathroom', 'Utility Room', 'Poolside Cabin']
    },
    variants: [
      { name: 'Standard Bathroom (2.5ft x 6.5ft)', finish: 'Dark Oak' },
      { name: 'Custom Height (2.5ft x 7ft)', finish: 'Teak Grain' }
    ],
    tags: ['Waterproof', 'PVC', 'Bathroom', 'Oak Finish']
  },
  {
    id: 'prod-p2',
    slug: 'frosted-glass-pvc-interior-door',
    name: 'Designer Frosted Glass PVC Interior Door',
    category: 'PVC Doors',
    categorySlug: 'pvc-doors',
    shortDescription: 'Modern white PVC interior door with translucent geometric frosted glass panel inset.',
    fullDescription: 'Combines the lightweight maintenance-free convenience of PVC with privacy-focused frosted glass illumination. Excellent choice for kitchen partitions, bathrooms, and laundry suites.',
    images: ['/images/categories/pvc-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Extruded PVC Rigid Frame & 5mm Frosted Toughened Glass',
      finish: 'Satin Pure White / Warm Walnut',
      thickness: '32 mm',
      warranty: '10 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Kitchen Door', 'Bathroom Privacy Door', 'Store Room']
    },
    tags: ['Frosted Glass', 'PVC', 'Modern White']
  },
  {
    id: 'prod-p3',
    slug: 'heavy-duty-pvc-kitchen-door',
    name: 'Heavy-Duty Anti-Termite PVC Kitchen Door',
    category: 'PVC Doors',
    categorySlug: 'pvc-doors',
    shortDescription: 'Reinforced solid PVC profile with heat & steam resistance for commercial and home kitchens.',
    fullDescription: 'Built to withstand grease, oil splashes, direct water washing, and kitchen humidity. Never rots, warps, or requires repainting.',
    images: ['/images/categories/pvc-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Reinforced PVC Polymer Board',
      finish: 'Laminated Teak Wood Grain',
      thickness: '35 mm',
      warranty: '12 Years Guarantee',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Kitchen Exit', 'Pantry Door', 'Utility']
    },
    tags: ['Kitchen', 'Anti-Termite', 'Reinforced']
  },
  {
    id: 'prod-p4',
    slug: 'modern-louvered-pvc-utility-door',
    name: 'Modern Louvered PVC Ventilated Door',
    category: 'PVC Doors',
    categorySlug: 'pvc-doors',
    shortDescription: 'Louvered PVC design promoting continuous airflow while maintaining full visual privacy.',
    fullDescription: 'Ideal for laundry spaces, generator rooms, and utility closets requiring ventilation without compromising aesthetics or water resistance.',
    images: ['/images/categories/pvc-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Impact-Resistant PVC Slat Array',
      finish: 'Matte Grey / Ivory White',
      thickness: '30 mm',
      warranty: '10 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Utility Room', 'HVAC Closet', 'Laundry Room']
    },
    tags: ['Louvered', 'Ventilated', 'Utility']
  },

  // UPVC DOORS (4 items)
  {
    id: 'prod-u1',
    slug: 'german-profile-upvc-sliding-patio',
    name: 'German Profile uPVC Sliding Patio Doors',
    category: 'UPVC Doors',
    categorySlug: 'upvc-doors',
    shortDescription: 'Floor-to-ceiling multi-track uPVC sliding doors with double-glazed acoustic glass.',
    fullDescription: 'Experience panoramic outdoors views with complete thermal and acoustic isolation. Utilizing steel-reinforced German uPVC profiles, EPDM weather gaskets, and 5-point locking systems for maximum structural security.',
    images: ['/images/categories/upvc-doors.jpg'],
    featured: true,
    specifications: {
      material: 'Galvanized Steel Reinforced uPVC Profile & 24mm Double Glazing',
      finish: 'Charcoal Black / Golden Oak Lamination',
      thickness: '60 mm Profile Depth',
      warranty: '20 Years UV & Profile Warranty',
      waterproof: true,
      termiteProof: true,
      fireRetardant: true,
      suitableFor: ['Balcony Exit', 'Garden Villa Patio', 'Terrace Suite']
    },
    variants: [
      { name: '2-Track Sliding (6ft x 7ft)', finish: 'Charcoal Black' },
      { name: '3-Track Sliding with Mesh (9ft x 8ft)', finish: 'Golden Oak' }
    ],
    tags: ['Sliding Door', 'uPVC', 'Double Glazed', 'Acoustic']
  },
  {
    id: 'prod-u2',
    slug: 'upvc-high-security-entrance-door',
    name: 'High-Security uPVC Panel Entrance Door',
    category: 'UPVC Doors',
    categorySlug: 'upvc-doors',
    shortDescription: 'Heavy-duty insulated uPVC door with multi-point hook locks and decorative paneling.',
    fullDescription: 'Engineered for weatherproof exterior performance. Features internal steel cage reinforcement, anti-burglary cylinder lock, and weather-seal threshold.',
    images: ['/images/categories/upvc-doors.jpg'],
    featured: false,
    specifications: {
      material: 'High-Impact uPVC Board & Steel Core',
      finish: 'Dark Walnut Lamination',
      thickness: '50 mm',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Main Entrance', 'Backdoor Entry', 'Villa Side Door']
    },
    tags: ['uPVC Entrance', 'Security', 'Insulated']
  },
  {
    id: 'prod-u3',
    slug: 'upvc-soundproof-tilt-slide-balcony',
    name: 'Soundproof uPVC Tilt & Slide Balcony Door',
    category: 'UPVC Doors',
    categorySlug: 'upvc-doors',
    shortDescription: 'Dual-action tilt for storm ventilation and smooth slide operation for tight spaces.',
    fullDescription: 'Dramatically reduce city noise pollution by up to 42dB. Air-tight double gaskets keep out monsoon rain, dust, and wind vibration.',
    images: ['/images/categories/upvc-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Acoustic uPVC System & Argon-Filled Glazing',
      finish: 'Satin White / Anodized Bronze',
      thickness: '65 mm Profile',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['High-rise Apartment Balcony', 'Bedroom Terrace']
    },
    tags: ['Tilt & Slide', 'Soundproof', 'Balcony']
  },
  {
    id: 'prod-u4',
    slug: 'upvc-casement-villa-door-flyscreen',
    name: 'uPVC Casement Villa Door with Flyscreen',
    category: 'UPVC Doors',
    categorySlug: 'upvc-doors',
    shortDescription: 'Outward swinging uPVC door with integrated stainless steel mesh insect screen.',
    fullDescription: 'Enjoy fresh breezes without mosquitoes or dust entering your living room. Heavy-duty friction hinges support wide opening angles up to 180 degrees.',
    images: ['/images/categories/upvc-doors.jpg'],
    featured: false,
    specifications: {
      material: 'uPVC Profile & SS304 Stainless Mesh',
      finish: 'Teak Woodgrain Lamination',
      thickness: '55 mm Profile',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Garden Courtyard', 'Kitchen Terrace']
    },
    tags: ['Casement', 'Insect Mesh', 'uPVC']
  },

  // WPC DOORS (4 items)
  {
    id: 'prod-wp1',
    slug: 'engineered-wpc-bedroom-door-grooves',
    name: 'Engineered WPC Bedroom Door with Line Grooves',
    category: 'WPC Doors',
    categorySlug: 'wpc-doors',
    shortDescription: 'Warp-free wood plastic composite door with precision vertical CNC recessed groove styling.',
    fullDescription: 'The modern interior architect’s favorite material. Blending virgin PVC resin with refined wood flour, WPC provides zero-maintenance structural stability, 100% moisture immunity, and elegant contemporary linear design.',
    images: ['/images/categories/wpc-doors.jpg'],
    featured: true,
    specifications: {
      material: 'Virgin WPC (70% PVC + 30% Wood Fiber)',
      finish: 'Smooth Tactile Warm Beige / Teak Finish',
      thickness: '35 mm Solid Core',
      warranty: '15 Years Full Guarantee',
      waterproof: true,
      termiteProof: true,
      fireRetardant: true,
      suitableFor: ['Master Bedroom', 'Children Bedroom', 'Modern Apartment']
    },
    variants: [
      { name: 'Standard Bedroom (3ft x 7ft)', finish: 'Natural Oak' },
      { name: 'Tall Door (3ft x 8ft)', finish: 'Warm Beige' }
    ],
    tags: ['WPC', 'Bedroom Door', 'Vertical Grooves', 'Warp-Free']
  },
  {
    id: 'prod-wp2',
    slug: 'waterproof-wpc-frame-door-combo',
    name: 'Waterproof WPC Frame & Door Architrave Set',
    category: 'WPC Doors',
    categorySlug: 'wpc-doors',
    shortDescription: 'Complete solid WPC door panel with matching factory-curved WPC frame architrave.',
    fullDescription: 'Eliminate wood rot in door frames permanently. This all-in-one set includes the heavy density WPC door, solid WPC frame jam, rubber seal gasket, and decorative architrave moldings.',
    images: ['/images/categories/wpc-doors.jpg'],
    featured: false,
    specifications: {
      material: 'High-Density WPC Composite Monoblock',
      finish: 'Raw Paintable or PVC Foil Laminated',
      thickness: '38 mm',
      warranty: '20 Years Guarantee',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['All Interior Openings', 'Commercial Office']
    },
    tags: ['WPC Frame', 'Architrave', 'Full Set']
  },
  {
    id: 'prod-wp3',
    slug: 'acoustic-insulated-wpc-hotel-door',
    name: 'Acoustic Insulated WPC Hotel Suite Door',
    category: 'WPC Doors',
    categorySlug: 'wpc-doors',
    shortDescription: 'Heavy solid-core WPC door with honeycomb/foam core for 35dB noise reduction.',
    fullDescription: 'Specially engineered for privacy in luxury hotels and master suites. Features drop-down bottom door seal and fire-retardant self-extinguishing polymer matrix.',
    images: ['/images/categories/wpc-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Fire-Grade WPC Board with Sound Core',
      finish: 'Walnut Woodgrain PVC Foil',
      thickness: '40 mm',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      fireRetardant: true,
      suitableFor: ['Hotel Suite', 'Conference Room', 'Study Room']
    },
    tags: ['Acoustic WPC', 'Fire Retardant', 'Hotel Grade']
  },
  {
    id: 'prod-wp4',
    slug: 'matte-charcoal-wpc-interior-door',
    name: 'Matte Charcoal Grey WPC Interior Door',
    category: 'WPC Doors',
    categorySlug: 'wpc-doors',
    shortDescription: 'Sleek architectural matte dark grey finish with flush modern handles.',
    fullDescription: 'Bold contemporary aesthetics for luxury penthouse design. Resists fingerprints, scratches, cleaning detergents, and sunlight fading.',
    images: ['/images/categories/wpc-doors.jpg'],
    featured: false,
    specifications: {
      material: 'WPC Composite Board',
      finish: 'Matte Charcoal Grey Anti-Fingerprint Coating',
      thickness: '35 mm',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Modern Apartment', 'Studio', 'Executive Office']
    },
    tags: ['Charcoal Grey', 'Matte Finish', 'Modern WPC']
  },

  // PLYWOOD (5 items)
  {
    id: 'prod-pl1',
    slug: 'bwp-710-marine-plywood-gurjan',
    name: 'BWP 710 Marine Grade Plywood (100% Gurjan Core)',
    category: 'Plywood',
    categorySlug: 'plywood',
    shortDescription: 'IS 710 certified Boiling Waterproof Marine Plywood crafted from 100% select Gurjan timber veneers.',
    fullDescription: 'The ultimate benchmark in architectural timber strength. Bonded with unextended Phenol Formaldehyde (PF) synthetic resin under high pressure and temperature. Guaranteed against 72-hour boiling water immersion, wood borer, and termite attack.',
    images: ['/images/categories/plywood.jpg'],
    featured: true,
    specifications: {
      material: '100% Selected Gurjan Hardwood Veneers',
      finish: 'Unveneered Sanded Smooth Board',
      thickness: '18 mm (Also available in 6, 12, 16, 19, 25mm)',
      warranty: '25 Years Replacement Guarantee',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Luxury Kitchen Cabinets', 'Wardrobes', 'Maritime Woodwork', 'Heavy Structural Furniture']
    },
    variants: [
      { name: '8ft x 4ft Sheet (18mm Thickness)', priceEstimate: 'Custom Consultation' },
      { name: '8ft x 4ft Sheet (12mm Thickness)', priceEstimate: 'Custom Consultation' },
      { name: '8ft x 4ft Sheet (6mm Backer)', priceEstimate: 'Custom Consultation' }
    ],
    tags: ['IS 710', 'Marine Plywood', 'Gurjan Core', 'BWP Grade']
  },
  {
    id: 'prod-pl2',
    slug: 'fire-retardant-plywood-is5509',
    name: 'Fire-Retardant Architectural Plywood (IS 5509)',
    category: 'Plywood',
    categorySlug: 'plywood',
    shortDescription: 'Treated plywood engineered to resist flame spread and smoke generation for high-rise safety.',
    fullDescription: 'Treated with nano-chemical fire retardant salts under vacuum pressure. Delays flame penetration for over 45 minutes, allowing safe emergency evacuation in commercial and residential spaces.',
    images: ['/images/categories/plywood.jpg'],
    featured: false,
    specifications: {
      material: 'Hardwood Core with Fire-Retardant Chemical Impregnation',
      finish: 'Sanded Calibration Finish',
      thickness: '19 mm',
      warranty: '20 Years Warranty',
      waterproof: true,
      termiteProof: true,
      fireRetardant: true,
      suitableFor: ['High-Rise Apartments', 'Multiplexes', 'Commercial Fitouts']
    },
    tags: ['Fire Retardant', 'IS 5509', 'Safety Plywood']
  },
  {
    id: 'prod-pl3',
    slug: 'calibrated-commercial-pine-plywood',
    name: 'Calibrated Hardwood Commercial Plywood (BWR)',
    category: 'Plywood',
    categorySlug: 'plywood',
    shortDescription: 'Quadra-calibrated even-thickness plywood for seamless high-gloss laminate pressing.',
    fullDescription: 'Zero thickness variation across the entire 8x4 sheet guaranteed by computerized four-stage sanding. Perfect surface for acrylic, laminate, and veneer pressing without wave distortion.',
    images: ['/images/categories/plywood.jpg'],
    featured: false,
    specifications: {
      material: 'Pine & Hardwood Alternate Core Composition',
      finish: 'Four-Stage Calibrated Surface',
      thickness: '12 mm',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Wardrobe Shutters', 'TV Unit Panels', 'False Ceilings']
    },
    tags: ['Calibrated', 'BWR Grade', 'Laminate Base']
  },
  {
    id: 'prod-pl4',
    slug: 'burmese-teak-veneer-decorative-plywood',
    name: 'Burmese Teak Decorative Veneer Sheet (4mm)',
    category: 'Plywood',
    categorySlug: 'plywood',
    shortDescription: 'Natural crown-cut Burmese teak real wood veneer face pressed onto 4mm marine base.',
    fullDescription: 'Add authentic luxury wood grain to walls, doors, and furniture. Each sheet features book-matched natural teak timber veneer patterns harvested from sustainable forests.',
    images: ['/images/categories/plywood.jpg'],
    featured: false,
    specifications: {
      material: 'Natural Burmese Teak Veneer & Marine Plywood Base',
      finish: 'Raw Natural Wood Face (Ready for Lacquer/Polish)',
      thickness: '4 mm Sheet',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Feature Accent Walls', 'Luxury Door Facing', 'Executive Furniture']
    },
    tags: ['Veneer', 'Teak Veneer', 'Decorative Plywood']
  },
  {
    id: 'prod-pl5',
    slug: 'flexible-bending-plywood-sheet',
    name: 'Flexible Bending Plywood Sheet (8mm)',
    category: 'Plywood',
    categorySlug: 'plywood',
    shortDescription: 'Specially woven hardwood veneers designed to flex into smooth rounded organic curves.',
    fullDescription: 'Enables architects to construct curved reception desks, rounded pillars, arched doorways, and organic wave ceiling features without cracking or splitting.',
    images: ['/images/categories/plywood.jpg'],
    featured: false,
    specifications: {
      material: 'Specially Oriented Soft Hardwood Plies',
      finish: 'Raw Flexible Board',
      thickness: '8 mm',
      warranty: '10 Years Warranty',
      waterproof: false,
      termiteProof: true,
      suitableFor: ['Curved Reception Counters', 'Round Pillars', 'Arch Structures']
    },
    tags: ['Flexi Plywood', 'Curved Design', 'Architectural']
  },

  // FLUSH DOORS (4 items)
  {
    id: 'prod-f1',
    slug: 'architectural-flush-door-brass-inlay',
    name: 'Architectural Flush Door with Brass Inlays',
    category: 'Flush Doors',
    categorySlug: 'flush-doors',
    shortDescription: 'Solid pinewood core flush door with American walnut veneer and vertical brushed brass metal strips.',
    fullDescription: 'Seamless modern minimalist luxury. Constructed with vacuum-treated solid pine blockboard core, dual hardwood cross-bands, press-bonded walnut wood veneer, and dual flush-fitted satin brass accent lines.',
    images: ['/images/categories/flush-doors.jpg'],
    featured: true,
    specifications: {
      material: 'Solid Pine Blockboard Core & Natural Walnut Veneer',
      finish: 'Brass Inlay Trim + Clear Matte Lacquer',
      thickness: '38 mm',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Luxury Hotel Suite', 'Main Apartment Entry', 'Executive Suite']
    },
    variants: [
      { name: 'Double Brass Strip (3.5ft x 7ft)', finish: 'American Walnut' },
      { name: 'Single Offset Brass Strip (3ft x 7ft)', finish: 'Smoked Oak' }
    ],
    tags: ['Flush Door', 'Brass Inlay', 'Walnut Veneer', 'Architectural']
  },
  {
    id: 'prod-f2',
    slug: 'teak-veneer-solid-core-flush-door',
    name: 'Teak Veneer Solid Core Flush Door',
    category: 'Flush Doors',
    categorySlug: 'flush-doors',
    shortDescription: 'High-density seasoned wood block core topped with crown-cut teak veneer layers.',
    fullDescription: 'Offers unmatched warp resistance and screw-holding strength. Comes pre-sanded smooth, ready for clear varnish, PU polish, or custom staining.',
    images: ['/images/categories/flush-doors.jpg'],
    featured: false,
    specifications: {
      material: '100% Seasoned Hardwood Core & Natural Teak Face',
      finish: 'Natural Raw Sanded Teak',
      thickness: '35 mm',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Residential Bedrooms', 'Offices']
    },
    tags: ['Teak Flush Door', 'Solid Core', 'Veneer']
  },
  {
    id: 'prod-f3',
    slug: 'tubular-core-sound-dampening-flush-door',
    name: 'Tubular Core Sound-Dampening Flush Door',
    category: 'Flush Doors',
    categorySlug: 'flush-doors',
    shortDescription: 'German Sauerland tubular chipboard core delivering lightweight feel with 30dB acoustic insulation.',
    fullDescription: 'Uses precision circular hollow tubes to reduce door weight by 40% while preserving structural rigidity and sound isolation.',
    images: ['/images/categories/flush-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Sauerland Extruded Tubular Core & HDF Facing',
      finish: 'Primer Coated (Ready for Paint)',
      thickness: '40 mm',
      warranty: '12 Years Warranty',
      waterproof: false,
      termiteProof: true,
      suitableFor: ['Home Theater Room', 'Recording Studio', 'Bedroom']
    },
    tags: ['Tubular Core', 'Acoustic', 'Sound Dampening']
  },
  {
    id: 'prod-f4',
    slug: 'hpl-laminate-flush-door-scratchproof',
    name: 'High-Pressure Laminate (HPL) Flush Door',
    category: 'Flush Doors',
    categorySlug: 'flush-doors',
    shortDescription: 'Ultra-tough 1mm HPL press-laminated onto flush door for high-traffic commercial durability.',
    fullDescription: 'Scratch-proof, impact-resistant, and stain-proof surface designed for hospitals, educational institutes, and busy commercial offices.',
    images: ['/images/categories/flush-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Flush Wooden Core & 1.0mm Exterior HPL Sheet',
      finish: 'Textured Concrete / Woodgrain HPL',
      thickness: '35 mm',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Commercial Offices', 'Hospitals', 'Schools']
    },
    tags: ['HPL Laminate', 'Commercial', 'Scratchproof']
  },

  // DECORATIVE DOORS (4 items)
  {
    id: 'prod-d1',
    slug: 'hand-carved-royal-heritage-teak-door',
    name: 'Hand-Carved Royal Heritage Teak Door',
    category: 'Decorative Doors',
    categorySlug: 'decorative-doors',
    shortDescription: 'Masterpiece entrance door featuring hand-sculpted traditional Indian artistic motifs and brass bell studs.',
    fullDescription: 'Hand-carved by senior traditional artisan craftsmen over 120 dedicated hours. Carved out of a single continuous 50mm thick block of solid Grade-A Burmese Teak, depicting classic motifs of lotus blossoms, elephants, and divine protective symbols.',
    images: ['/images/categories/decorative-doors.jpg'],
    featured: true,
    specifications: {
      material: 'Grade-A Solid Burmese Teak Wood',
      finish: 'Traditional Heritage Oil & Brass Polish Highlights',
      thickness: '50 mm',
      warranty: '25 Years Heritage Guarantee',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Traditional Villa Entrance', 'Pooja Sanctum Entry', 'Heritage Resort']
    },
    variants: [
      { name: 'Single Grand Pooja Door (3.5ft x 7ft)', finish: 'Heritage Teak' },
      { name: 'Villa Entrance Double Door (6ft x 8ft)', finish: 'Antique Teak & Brass' }
    ],
    tags: ['Hand-Carved', 'Pooja Door', 'Traditional', 'Royal Teak']
  },
  {
    id: 'prod-d2',
    slug: 'cnc-engraved-3d-geometric-wooden-door',
    name: 'Modern CNC 3D Geometric Wooden Door',
    category: 'Decorative Doors',
    categorySlug: 'decorative-doors',
    shortDescription: 'High-precision 5-axis computer engraved parametric wave patterns in solid mahogany.',
    fullDescription: 'Combines digital parametric design with natural solid wood. The 3D carved surface creates dynamic shadows under warm ambient entryway downlights.',
    images: ['/images/categories/decorative-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Solid Mahogany Timber',
      finish: 'Satin Dark Espresso Lacquer',
      thickness: '45 mm',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Contemporary Villa Entry', 'Luxury Penthouse']
    },
    tags: ['CNC Carved', '3D Geometric', 'Modern Entry']
  },
  {
    id: 'prod-d3',
    slug: 'brass-inlay-mother-of-pearl-artisan-door',
    name: 'Brass & Mother of Pearl Artisan Main Door',
    category: 'Decorative Doors',
    categorySlug: 'decorative-doors',
    shortDescription: 'Bespoke walnut entrance door adorned with inlaid real mother-of-pearl floral elements and solid brass bands.',
    fullDescription: 'An opulent fusion of natural wood, hand-cut white mother-of-pearl shell inlays, and polished brass stripwork. Designed to be the crowning centerpiece of any luxury residence.',
    images: ['/images/categories/decorative-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Solid Walnut Wood, Brass Metal & Genuine Shell Inlay',
      finish: 'High-Gloss PU Protective Coat',
      thickness: '45 mm',
      warranty: '20 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Luxury Villa Main Gate', 'Boutique Residence']
    },
    tags: ['Mother of Pearl', 'Brass Inlay', 'Bespoke']
  },
  {
    id: 'prod-d4',
    slug: '3d-embossed-veneer-designer-door',
    name: '3D Embossed Textured Veneer Main Door',
    category: 'Decorative Doors',
    categorySlug: 'decorative-doors',
    shortDescription: 'Thermo-formed textured timber veneer with tactile deep grain contours.',
    fullDescription: 'Creates an impression of weathered reclaimed ancient timber with modern structural precision. Pre-fitted with heavy-duty hidden pivot hinges.',
    images: ['/images/categories/decorative-doors.jpg'],
    featured: false,
    specifications: {
      material: 'Embossed Natural Wood Veneer & Solid Hardwood Core',
      finish: 'Smoked Oak / Weathered Grey',
      thickness: '42 mm',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Modern Entryway', 'Penthouse']
    },
    tags: ['Embossed', 'Textured Veneer', 'Pivot Door']
  },

  // DOOR ACCESSORIES (4 items)
  {
    id: 'prod-a1',
    slug: 'satin-brass-architectural-mortise-handle',
    name: 'Satin Brass Architectural Mortise Handle Lockset',
    category: 'Door Accessories',
    categorySlug: 'door-accessories',
    shortDescription: 'Solid forged satin brass lever handle with heavy-duty computer key mortise cylinder.',
    fullDescription: 'Crafted from solid CZ121 architectural brass, hand-finished to a muted satin warm sheen with protective clear electroplating. Tested for over 200,000 operation cycles, guaranteeing silky smooth latch rotation and robust security.',
    images: ['/images/products/brass-handle.jpg', '/images/categories/door-accessories.jpg'],
    featured: true,
    specifications: {
      material: 'Solid Forged Satin CZ121 Brass',
      finish: 'Satin Brushed Gold Electroplate',
      thickness: 'Fits doors 35mm - 55mm thick',
      warranty: '10 Years Mechanical & Finish Guarantee',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Main Entrance Doors', 'Luxury Bedroom Doors', 'Executive Offices']
    },
    variants: [
      { name: 'Satin Brushed Brass Set', finish: 'Satin Gold' },
      { name: 'Matte Antique Bronze Set', finish: 'Antique Bronze' },
      { name: 'Matte Black PVD Set', finish: 'Matte Black' }
    ],
    tags: ['Mortise Handle', 'Satin Brass', 'Lockset', 'Hardware']
  },
  {
    id: 'prod-a2',
    slug: 'biometric-fingerprint-smart-digital-door-lock',
    name: 'Biometric Fingerprint Smart Digital Lock',
    category: 'Door Accessories',
    categorySlug: 'door-accessories',
    shortDescription: 'Keyless entry smart lock featuring 3D semiconductor fingerprint scanner, PIN, RFID card & mobile app.',
    fullDescription: 'Upgrade your main door security with instant 0.3-second fingerprint recognition. Includes emergency mechanical key override, anti-peeping PIN code input, intruder alarm, and battery status notifications.',
    images: ['/images/categories/door-accessories.jpg'],
    featured: false,
    specifications: {
      material: 'Zinc Alloy & Tempered Glass Touchpad',
      finish: 'Matte Black & Gold Accent',
      thickness: 'Fits doors 38mm - 80mm',
      warranty: '3 Years Replacement Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Main Villa Door', 'Apartment Entrance', 'Private Studio']
    },
    tags: ['Smart Lock', 'Biometric', 'Fingerprint', 'Keyless']
  },
  {
    id: 'prod-a3',
    slug: 'stainless-steel-ball-bearing-hinges-pack',
    name: 'Heavy-Duty SS304 Ball Bearing Hinges (Set of 3)',
    category: 'Door Accessories',
    categorySlug: 'door-accessories',
    shortDescription: 'Grade 304 stainless steel 4-inch hinges with dual ball bearings supporting up to 120kg door weight.',
    fullDescription: 'Eliminates door squeaking and sagging permanently. Precision CNC machined from 3mm thick solid stainless steel plate with rustproof satin PVD coating.',
    images: ['/images/categories/door-accessories.jpg'],
    featured: false,
    specifications: {
      material: 'Grade SS304 Stainless Steel',
      finish: 'Satin Brushed Steel / Black / Gold',
      thickness: '3.0 mm Leaf Thickness',
      warranty: '15 Years Warranty',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Heavy Solid Teak Doors', 'Main Entrance Doors']
    },
    tags: ['Hinges', 'SS304', 'Ball Bearing', 'Hardware']
  },
  {
    id: 'prod-a4',
    slug: 'vintage-solid-brass-lion-door-knocker',
    name: 'Solid Brass Antique Lion Head Door Knocker',
    category: 'Door Accessories',
    categorySlug: 'door-accessories',
    shortDescription: 'Traditional sand-cast heavy solid brass lion head knocker with deep resonant chime.',
    fullDescription: 'A classic symbol of strength and welcome. Hand-finished with antiqued patina highlights to match traditional solid teak main doors.',
    images: ['/images/categories/door-accessories.jpg'],
    featured: false,
    specifications: {
      material: 'Sand-Cast Solid Brass',
      finish: 'Antique Brass Patina',
      thickness: 'Heavy Duty 1.2 kg Solid Casting',
      warranty: 'Life-time Material Guarantee',
      waterproof: true,
      termiteProof: true,
      suitableFor: ['Main Wooden Entrance', 'Heritage Double Door']
    },
    tags: ['Door Knocker', 'Lion Head', 'Solid Brass', 'Vintage']
  }
];
