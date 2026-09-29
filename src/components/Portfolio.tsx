'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const projects = [
    // --- Group 1: Rumah Tinggal — Pering, Gianyar (New Enscape Renders) ---
    {
      id: 1,
      title: 'Rumah Tinggal — Modern Tropical Cluster Street Elevation',
      category: 'Residential Architecture',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Cluster Residential Architecture',
      tag: 'August 2026',
      desc: 'Master street elevation of three contiguous modern tropical homes in Pering, Gianyar, uniting dark hip roofs, Balinese stone relief entry portals, and shaded vehicle pergolas.',
      image: '/assets/images/gallery/enscape_render_07.jpg',
      specs: 'Dark Hip Roof, Shaded Carport Pergola, Carved Balinese Relief Gates, Perimeter Palm Landscape',
    },
    {
      id: 2,
      title: 'Entrance Gate & Private Arrival Courtyard — Rumah Tinggal',
      category: 'Residential Architecture',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Courtyard Architecture',
      tag: 'Landscape & Entry',
      desc: 'Private arrival courtyard featuring natural river stone masonry, mature frangipani tree, teak entrance deck, and traditional Balinese relief carving.',
      image: '/assets/images/gallery/enscape_render_06.jpg',
      specs: 'River Stone Masonry, Frangipani Tree, Teak Decking Steps, Balinese Relief Gate',
    },
    {
      id: 3,
      title: 'Twilight Facade & Architectural Lighting Scheme',
      category: 'Residential Architecture',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Lighting & Facade',
      tag: 'Night Architecture',
      desc: 'Dusk visualization showing up-and-down architectural perimeter sconces, illuminated entry archways, and warm interior glow.',
      image: '/assets/images/gallery/enscape_render_09.jpg',
      specs: 'Up-Down Architectural Sconces, Integrated Carport Spotlights, Warm 3000K Perimeter LED',
    },
    {
      id: 4,
      title: 'Wide Perspective Streetscape — Residential Community',
      category: 'Residential Architecture',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Streetscape View',
      tag: 'Exterior Architecture',
      desc: 'Dynamic street angle highlighting rhythmic rooflines, clean white wall volumes, and private carport configurations with lush perimeter green buffers.',
      image: '/assets/images/gallery/enscape_render_08.jpg',
      specs: 'Rhythmic Pitched Rooflines, Private Parking Bays, Landscaped Planter Borders',
    },
    {
      id: 5,
      title: 'Open Living Lounge — Marble Media Wall & Fluted Oak',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Living Room Interior',
      tag: 'Custom Joinery',
      desc: 'Harmonious living room center featuring bookmatched marble TV backdrop, vertical fluted oak acoustic slats, floating console, and modern modular sofa.',
      image: '/assets/images/gallery/enscape_render_01.jpg',
      specs: 'Marble TV Backdrop, Fluted Oak Wall Slats, Floating Credenza, Recessed Ceiling LEDs',
    },
    {
      id: 6,
      title: 'Living Room Media Alcove & Integrated Display Shelving',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Living Room Interior',
      tag: 'Joinery Architecture',
      desc: 'Perspective showing open display shelving, curated art niche, and concealed bedroom door seamlessly integrated into the wall surface.',
      image: '/assets/images/gallery/enscape_render_02.jpg',
      specs: 'Open Oak Bookshelf, Concealed Flush Door, Wall Artwork Alcove, Dual Coffee Tables',
    },
    {
      id: 7,
      title: 'Open-Concept Living & Kitchenette Panorama',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Kitchen & Dining',
      tag: 'Space Planning',
      desc: 'Comprehensive perspective connecting the entertainment lounge to the compact kitchenette pantry featuring sage green ceramic tile backsplash.',
      image: '/assets/images/gallery/enscape_render_03.jpg',
      specs: 'Integrated Refrigerator Niche, Sage Green Tile Backsplash, Drop Ceiling Cove Lighting',
    },
    {
      id: 8,
      title: 'Spatial Circulation — Foyer to Lounge Flow',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Interior Circulation',
      tag: 'Spatial Design',
      desc: 'Wide-angle perspective illustrating seamless circulation from the private entrance hallway into the open-plan living and culinary zone.',
      image: '/assets/images/gallery/enscape_render_04.jpg',
      specs: 'Microcement Concrete Walls, Neutral Gray Floor Tiles, Minimalist Black Hardware',
    },
    {
      id: 9,
      title: 'Master Bedroom Suite & Bespoke Joinery Wardrobe',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Master Bedroom',
      tag: 'Custom Joinery',
      desc: 'Restful master suite with custom full-height wardrobe combining matte stone laminate panels, center oak garment niche, and floating TV console.',
      image: '/assets/images/gallery/enscape_render_05.jpg',
      specs: 'Full-Height Wardrobe, Oak Accent Niche, Wall-Mounted Credenza, Low Platform Bed',
    },
    {
      id: 10,
      title: 'Luxury Ensuite Bathroom — Charcoal Marble Shower',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Bathroom Architecture',
      tag: 'Luxury Finishes',
      desc: 'Minimalist spa bathroom finished with bookmatched charcoal marble slabs, matte black rain shower column, and frameless glass divider.',
      image: '/assets/images/gallery/enscape_render_10.jpg',
      specs: 'Charcoal Marble Slabs, Matte Black Rain Shower, Frameless Glass Partition, Elongated WC',
    },
    {
      id: 11,
      title: 'Recessed Shower Niche with Vertical Concealed LED',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Bathroom Detail',
      tag: 'Architectural Lighting',
      desc: 'Three-tier recessed shower wall niche with concealed vertical LED strip light providing atmospheric ambient glow.',
      image: '/assets/images/gallery/enscape_render_11.jpg',
      specs: 'Concealed LED Strip 4000K, Triple-Tier Toiletry Niche, Veined Marble Mitred Edges',
    },
    {
      id: 12,
      title: 'Ensuite Wet Area & Minimalist Sanitary Suite',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Rumah Tinggal Pering',
      type: 'Bathroom Architecture',
      tag: 'Sanitary Layout',
      desc: 'High-angle perspective displaying the complete ensuite arrangement, circular ceiling spotlight, and seamless transition between wet and dry zones.',
      image: '/assets/images/gallery/enscape_render_12.jpg',
      specs: 'Zero-threshold Shower Drain, Monolithic Marble Cladding, Minimalist Black Trim',
    },

    // --- Group 2: Public Facility — Community & Wellness Clubhouse ---
    {
      id: 13,
      title: 'Public Facility — Community & Wellness Clubhouse',
      category: 'Public Facility & Hospitality',
      projectGroup: 'Public Facility',
      type: 'Clubhouse Architecture',
      tag: 'Project No. 245.170',
      desc: 'Pitched-roof contemporary clubhouse featuring a monumental glass facade, rooftop wooden deck, and seamless integration between indoor and outdoor recreation.',
      image: '/assets/images/fasilitas_clubhouse_entrance.jpg',
      specs: 'Gable Glass Facade, Timber Rooftop Deck, Vehicle Drop-off, Ambient Contour Lighting',
    },
    {
      id: 14,
      title: 'Aerial Overview & Rooftop Terrace — Public Facility',
      category: 'Public Facility & Hospitality',
      projectGroup: 'Public Facility',
      type: 'Aerial Masterplan',
      tag: 'Gianyar, Bali',
      desc: 'Bird\'s-eye architectural rendering showcasing the pavilion roofline, rooftop outdoor picnic lounge, parking courts, and lush perimeter tropical greenery.',
      image: '/assets/images/fasilitas_aerial_overview.jpg',
      specs: 'Rooftop Lounge, Shaded Green Buffer, Architectural Aerial Visualization',
    },
    {
      id: 15,
      title: 'Resort Swimming Pool & Leisure Terrace',
      category: 'Public Facility & Hospitality',
      projectGroup: 'Public Facility',
      type: 'Poolside Architecture',
      tag: 'Exterior & Landscape',
      desc: 'Geometric outdoor swimming pool flanked by timber pool decks, full-height floor-to-ceiling glass pavilions, and sun-lounger zones.',
      image: '/assets/images/fasilitas_swimming_pool.jpg',
      specs: 'Infinity-edge Geometry, Poolside Wood Decking, Seamless Indoor-Outdoor Flow',
    },
    {
      id: 16,
      title: 'Commercial Fitness Center & High Ceiling Gym',
      category: 'Public Facility & Hospitality',
      projectGroup: 'Public Facility',
      type: 'Wellness Interior',
      tag: 'Interior Architecture',
      desc: 'Double-height fitness studio crowned by a warm sloped timber ceiling, cardio training machines, and expansive glazed walls capturing natural daylight.',
      image: '/assets/images/fasilitas_fitness_gym.jpg',
      specs: 'High Sloped Timber Ceiling, Commercial Cardio Equipment, Full-height Glass Facade',
    },
    {
      id: 17,
      title: 'Reformer Pilates & Mind-Body Studio',
      category: 'Public Facility & Hospitality',
      projectGroup: 'Public Facility',
      type: 'Wellness Interior',
      tag: 'Interior Architecture',
      desc: 'Dedicated reformer pilates studio finished with honed white marble flooring, clean structural columns, and direct serene vistas toward the swimming pool.',
      image: '/assets/images/fasilitas_pilates_studio.jpg',
      specs: 'Honed Marble Flooring, Pilates Reformer Stations, Poolfront Glazing',
    },

    // --- Group 3: Rukos — Modern Gable Living & Shophouse Complex ---
    {
      id: 18,
      title: 'Rukos Modern Gable — Front Facade Elevation',
      category: 'Residential Architecture',
      projectGroup: 'Rukos',
      type: 'Rukos & Shophouse',
      tag: 'October 2025',
      desc: 'Architectural front perspective of contemporary 3-story rukos uniting clean white geometric volumes, terracotta breeze blocks (roster), and warm cedar soffits.',
      image: '/assets/images/ruko_exterior_front.jpg',
      specs: 'Gable Silhouette, Terracotta Breeze Blocks, Warm Cedar Soffits, Linear Facade LEDs',
    },
    {
      id: 19,
      title: 'Dynamic Street Perspective — 3-Story Rukos Complex',
      category: 'Residential Architecture',
      projectGroup: 'Rukos',
      type: 'Rukos & Shophouse',
      tag: 'October 2025',
      desc: 'Low-angle perspective emphasizing the rhythmic pitched roofs, cantilevering glass-railing balconies, private carports, and integrated front landscape.',
      image: '/assets/images/ruko_exterior_angle1.jpg',
      specs: 'Glass Balustrades, Covered Ground Carports, Textured White Stucco, Perimeter Planters',
    },
    // --- Group 4: Master Suite Bespoke Interior (Enscape PDF Archive) ---
    {
      id: 21,
      title: 'Master Suite — Comprehensive Spatial Panorama',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Master Suite Interior',
      type: 'Primary Bedroom',
      tag: 'Interior Architecture',
      desc: 'Harmonious five-star residential interior integrating platform sleeping quarters, study vanity station, media entertainment center, and custom built-in wardrobe.',
      image: '/assets/images/project-5.jpg',
      specs: 'Natural Oak Fluting, Integrated Warm LED 3000K, Tailored Bedroom Architecture',
    },
    {
      id: 22,
      title: 'Suspended Vanity Desk & Backlit Display Shelves',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Master Suite Interior',
      type: 'Vanity Station',
      tag: 'Custom Joinery',
      desc: 'Suspended vanity desk integrated with thin-framed rounded mirror, vertical fluted oak slat accents, and multi-tier floating display with warm concealed LED strips.',
      image: '/assets/images/project-1.jpg',
      specs: 'Solid Oak Slats, Architectural HPL, Custom Mirror Frame, 3000K Concealed LED',
    },
    {
      id: 23,
      title: 'Media Backdrop & Sliding Door Wardrobe System',
      category: 'Interior & Custom Joinery',
      projectGroup: 'Master Suite Interior',
      type: 'Media & Storage',
      tag: 'Custom Joinery',
      desc: 'Textured fluted media wall featuring indirect plinth illumination for curated footwear collection, paired with a sliding wardrobe combining warm oak and matte charcoal.',
      image: '/assets/images/project-3.jpg',
      specs: 'Charcoal & Oak Slats, Sliding Wardrobe, Indirect LED Plinth Display',
    },

    // --- Group 5: Rumah Kost Eksklusif — Modern Balinese Rental Living ---
    {
      id: 24,
      title: 'Rumah Kost Eksklusif — Front Elevation & Courtyard',
      category: 'Residential Architecture',
      projectGroup: 'Rumah Kost Eksklusif',
      type: 'Kost & Rental Living',
      tag: 'New Project 2026',
      desc: 'Perspektif depan hunian rumah kost eksklusif 2 lantai memadukan arsitektur tradisional Bali, atap genteng mahkota, fasad bertekstur hangat, dan pagar batu alam alami.',
      image: '/assets/images/kost_exterior_angle1.jpg',
      specs: 'Atap Genteng Bali Tradisional, Dinding Batu Alam, Balkon Baja Minimalis, Pintu & Jendela Kayu Jati',
    },
    {
      id: 25,
      title: 'Sudut Fasad & Balkon Kamar — Rumah Kost Eksklusif',
      category: 'Residential Architecture',
      projectGroup: 'Rumah Kost Eksklusif',
      type: 'Kost & Rental Living',
      tag: 'Exterior Architecture',
      desc: 'Tampak sudut bangunan memperlihatkan akses koridor terbuka, balkon pribadi tiap kamar di lantai 2, pencahayaan alami optimal, dan lanskap taman tropis asri.',
      image: '/assets/images/kost_exterior_angle2.jpg',
      specs: 'Balkon Pribadi Kamar Lantai 2, Sirkulasi Udara Terbuka, Taman Tropis Depan, Finishing Cat Stucco Hangat',
    },
  ];

  const categories = [
    { id: 'All', label: 'All Works', count: 24 },
    { id: 'Residential Architecture', label: 'Residential', count: 12 },
    { id: 'Interior & Custom Joinery', label: 'Interior & Joinery', count: 8 },
    { id: 'Public Facility & Hospitality', label: 'Hospitality', count: 4 },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % filteredProjects.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null ? (prev - 1 + filteredProjects.length) % filteredProjects.length : 0));
      }
    };

    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImageIndex, filteredProjects.length]);

  const activeProject = activeImageIndex !== null ? filteredProjects[activeImageIndex] : null;

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#00AEEF] mb-2">
              Selected Works • 24 Curated Exhibits
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#090D16] font-display">
              Architecture, Interiors &amp; Hospitality Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Explore our expanded portfolio spanning Bali private tropical villa clusters, commercial hospitality wellness pavilions, rukos and multi-unit residences, and bespoke joinery interiors.
            </p>
          </div>

          {/* Mobile-optimized Filter Pills: horizontal swipe on mobile, wrapped flex on desktop */}
          <div className="w-full lg:w-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1.5 flex-nowrap sm:flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActiveImageIndex(null);
                  }}
                  className={`inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-95 touch-manipulation focus-visible:ring-2 focus-visible:ring-[#00AEEF] flex-shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-[#090D16] text-white shadow-md ring-1 ring-black/10'
                      : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200/90 hover:text-[#090D16]'
                  }`}
                  aria-label={`Filter by ${cat.label}`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-[#00AEEF] text-white'
                        : 'bg-slate-200/90 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group border border-slate-200/90 rounded-2xl overflow-hidden hover:border-[#00AEEF] transition-all duration-300 flex flex-col justify-between bg-white hover:shadow-xl"
            >
              {/* Image Container with click-to-zoom */}
              <div
                className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setActiveImageIndex(idx)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-[#090D16] text-[10px] font-bold px-2.5 py-1 rounded shadow-sm border border-slate-200">
                    {project.type}
                  </span>
                </div>

                {/* Top Right Project Tag */}
                <div className="absolute top-3 right-3">
                  <span className="bg-[#090D16]/85 backdrop-blur-sm text-[#00AEEF] text-[10px] font-mono font-medium px-2 py-0.5 rounded shadow-sm">
                    {project.tag}
                  </span>
                </div>

                {/* Subtle View Indicator */}
                <div className="absolute bottom-3 right-3 bg-[#090D16]/85 text-white px-2.5 py-1.5 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span>Zoom</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="text-[#00AEEF] font-semibold">{project.category}</span>
                    <span className="text-[11px] font-mono text-slate-500">{project.projectGroup}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#090D16] font-display group-hover:text-[#00AEEF] transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400 font-mono truncate max-w-[180px]">
                    {project.specs}
                  </span>
                  <a
                    href={`https://wa.me/6281234567890?text=Hello%20NIRWIKARA,%20I%20am%20interested%20in%20a%20concept%20similar%20to%20${encodeURIComponent(project.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#00AEEF] hover:text-white text-[#090D16] text-xs font-bold transition-all duration-200 active:scale-95 touch-manipulation whitespace-nowrap shadow-sm cursor-pointer"
                  >
                    <span>Inquire</span>
                    <span className="text-sm leading-none">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Lightbox Modal with Next/Prev Carousel & Keyboard Support */}
        {activeProject && activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setActiveImageIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full flex flex-col items-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="w-full flex justify-between items-center mb-3 text-white gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs font-mono text-[#00AEEF] font-bold flex-shrink-0">
                    {activeImageIndex + 1} / {filteredProjects.length}
                  </span>
                  <span className="text-xs text-slate-300 truncate font-medium">
                    • {activeProject.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveImageIndex(null)}
                  className="text-white hover:text-[#00AEEF] text-xs font-bold tracking-wider uppercase min-h-[44px] px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 active:scale-90 transition-all flex items-center gap-2 cursor-pointer touch-manipulation flex-shrink-0 border border-white/15"
                  aria-label="Close Lightbox"
                >
                  <span className="hidden sm:inline">Close</span>
                  <span className="text-base font-bold leading-none">✕</span>
                </button>
              </div>

              {/* Modal Main Stage with Navigation Arrows */}
              <div className="relative w-full flex items-center justify-center">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev !== null ? (prev - 1 + filteredProjects.length) % filteredProjects.length : 0
                    )
                  }
                  className="absolute left-2 sm:-left-12 z-20 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/75 hover:bg-[#00AEEF] text-white border border-white/25 active:scale-90 transition-all shadow-2xl cursor-pointer touch-manipulation"
                  aria-label="Previous Project"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full max-h-[58vh] sm:max-h-[72vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl bg-black border border-slate-800"
                />

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev !== null ? (prev + 1) % filteredProjects.length : 0
                    )
                  }
                  className="absolute right-2 sm:-right-12 z-20 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/75 hover:bg-[#00AEEF] text-white border border-white/25 active:scale-90 transition-all shadow-2xl cursor-pointer touch-manipulation"
                  aria-label="Next Project"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Modal Bottom Caption & CTA */}
              <div className="w-full mt-3.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-white">
                <p className="text-xs text-slate-300 leading-relaxed sm:max-w-xl">
                  {activeProject.desc}
                </p>
                <a
                  href={`https://wa.me/6281234567890?text=Hello%20NIRWIKARA,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(activeProject.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-xl bg-[#00AEEF] hover:bg-white hover:text-[#090D16] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 touch-manipulation shadow-lg flex-shrink-0"
                >
                  <span>Inquire This Project</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
