'use client';

import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const showcaseProjects = [
    {
      id: 'rumah-tinggal',
      number: '01',
      title: 'Private Residence — Modern Tropical Living',
      category: 'Residential Architecture & 3D Visualization',
      location: 'Pering, Gianyar, Bali',
      image: '/assets/images/gallery/enscape_render_07.jpg',
      scope: '3-Unit Tropical Cluster, Stone Masonry Courtyards, Living Lounges & Charcoal Ensuite',
      badge: 'Featured Project 2025',
    },
    {
      id: 'ruko',
      number: '02',
      title: 'Urban Shophouses — Modern Gable Living Complex',
      category: 'Residential & Commercial Architecture',
      location: 'Urban Living Complex',
      image: '/assets/images/ruko_exterior_angle1.jpg',
      scope: 'Facade Architecture, Terracotta Breeze Blocks & 3D Visualization',
      badge: 'Architecture 2025',
    },
    {
      id: 'gianyar',
      number: '03',
      title: 'Public Facility — Community & Wellness Pavilion',
      category: 'Hospitality Architecture',
      location: 'Gianyar, Bali',
      image: '/assets/images/fasilitas_aerial_overview.jpg',
      scope: 'Pitched-roof Clubhouse, Rooftop Deck, Poolside Leisure & Fitness Gym',
      badge: 'Project No. 245.170',
    },
    {
      id: 'interior',
      number: '04',
      title: 'Private Residence — Master Bedroom Suite & Custom Joinery',
      category: 'Interior Architecture & Bespoke Joinery',
      location: 'Pering, Gianyar, Bali',
      image: '/assets/images/gallery/enscape_render_05.jpg',
      scope: 'Fluted Oak Slat Accents, Custom TV Credenza, Fitted Wardrobes & Indirect Cove Lighting',
      badge: 'Bespoke Craft 2025',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  // Auto-advance every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseProjects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [showcaseProjects.length]);

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Row */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-700">
              Design And Build Studio
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#090D16] font-display leading-[1.08]">
            Shaping Spaces with Architectural Rigor &amp; Craft.
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            <strong className="text-[#090D16] font-semibold">NIRWIKARA Design And Build</strong> translates aspirational concepts into physically realized environments through measured blueprints, photorealistic 3D visualization, and meticulous joinery execution.
          </p>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="https://wa.me/qr/JQDCEWBBMW35I1?s=v"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#090D16] hover:bg-[#00AEEF] text-white transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            >
              <span>Commission a Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#featured"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs font-bold tracking-wider uppercase border border-slate-300 hover:border-[#00AEEF] hover:text-[#00AEEF] text-slate-700 transition-all duration-200 bg-white shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            >
              <span>Explore Selected Works</span>
            </a>
          </div>
        </div>

        {/* Cinematic Architectural Showcase Gallery Frame */}
        {/* Cinematic Architectural Showcase Gallery Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-slate-950">
          {/* Main Panorama Image Container - Guaranteed height so nothing gets cut off */}
          <div className="relative min-h-[460px] sm:min-h-[520px] lg:h-[600px] w-full overflow-hidden">
            {showcaseProjects.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover object-center absolute inset-0 transition-all duration-700 ease-out ${
                  activeIndex === index
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 pointer-events-none z-0'
                }`}
              />
            ))}

            {/* Gradient Veil for contrast (Subtle & clean) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 z-10 pointer-events-none"></div>

            {/* Navigation Arrow Controls (Overlay) */}
            <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2 sm:px-6 pointer-events-none">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
                }}
                className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/65 hover:bg-[#00AEEF] text-white backdrop-blur-md border border-white/20 transition-all active:scale-90 hover:scale-105 shadow-xl cursor-pointer touch-manipulation"
                aria-label="Previous Showcase Project"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev + 1) % showcaseProjects.length);
                }}
                className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/65 hover:bg-[#00AEEF] text-white backdrop-blur-md border border-white/20 transition-all active:scale-90 hover:scale-105 shadow-xl cursor-pointer touch-manipulation"
                aria-label="Next Showcase Project"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
