'use client';

import { useState, useEffect } from 'react';

export default function FeaturedWorks() {
  const [activeTownhouseImg, setActiveTownhouseImg] = useState('/assets/images/ruko_exterior_front.jpg');
  const [activeFasilitasImg, setActiveFasilitasImg] = useState('/assets/images/fasilitas_clubhouse_entrance.jpg');
  const [activeVillaImg, setActiveVillaImg] = useState('/assets/images/gallery/enscape_render_07.jpg');
  const [activeKostImg, setActiveKostImg] = useState('/assets/images/kost_exterior_angle1.jpg');
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Close modal on Escape key and prevent body scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalImage(null);
      }
    };

    if (modalImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalImage]);

  const kostImages = [
    { title: 'Front Facade & Courtyard', img: '/assets/images/kost_exterior_angle1.jpg' },
    { title: 'Garden & Balcony View', img: '/assets/images/kost_exterior_angle2.jpg' },
  ];

  const townhouseImages = [
    { title: 'Front Facade Elevation', img: '/assets/images/ruko_exterior_front.jpg' },
    { title: 'Street Perspective Angle', img: '/assets/images/ruko_exterior_angle1.jpg' },
    { title: 'Frontal Street View', img: '/assets/images/ruko_exterior_angle2.jpg' },
  ];

  const fasilitasSubImages = [
    { title: 'Clubhouse Facade', img: '/assets/images/fasilitas_clubhouse_entrance.jpg' },
    { title: 'Aerial Masterplan', img: '/assets/images/fasilitas_aerial_overview.jpg' },
    { title: 'Resort Pool Deck', img: '/assets/images/fasilitas_swimming_pool.jpg' },
    { title: 'Commercial Gym', img: '/assets/images/fasilitas_fitness_gym.jpg' },
    { title: 'Pilates Studio', img: '/assets/images/fasilitas_pilates_studio.jpg' },
  ];

  const villaSubImages = [
    { title: 'Cluster Street Elevation', img: '/assets/images/gallery/enscape_render_07.jpg' },
    { title: 'Twilight Facade Lighting', img: '/assets/images/gallery/enscape_render_09.jpg' },
    { title: 'Balinese Courtyard Porch', img: '/assets/images/gallery/enscape_render_06.jpg' },
    { title: 'Marble Living Lounge', img: '/assets/images/gallery/enscape_render_01.jpg' },
    { title: 'Open Kitchenette Pantry', img: '/assets/images/gallery/enscape_render_03.jpg' },
    { title: 'Master Suite Joinery', img: '/assets/images/gallery/enscape_render_05.jpg' },
    { title: 'Charcoal Marble Ensuite', img: '/assets/images/gallery/enscape_render_10.jpg' },
  ];

  return (
    <section id="featured" className="py-20 sm:py-24 bg-slate-50/70 border-y border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#00AEEF] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <span>Flagship Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#090D16] font-display">
            Architectural Monograph &amp; Case Studies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            In-depth analysis of our principal projects, highlighting the continuity between initial spatial programming, 3D visualization, and turnkey execution.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CASE STUDY 01: PRIVATE RESIDENCE — MODERN TROPICAL LIVING (PERING, GIANYAR) */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-10 lg:p-12 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Interactive Media Stage */}
            <div className="lg:col-span-7 space-y-4">
              <div
                className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md cursor-pointer group"
                onClick={() => setModalImage(activeVillaImg)}
              >
                <img
                  src={activeVillaImg}
                  alt="Private Residence Pering Gianyar Showcase"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-[#090D16] shadow-sm">
                  Private Residence • Pering, Gianyar
                </div>
                
                {/* Touch/Hover Enlarge Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#090D16]/85 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span>Enlarge</span>
                </div>
              </div>

              {/* Sub-gallery View Selector (7 images) - Scrollable swipe on mobile, grid on desktop */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-2 px-2 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-7">
                {villaSubImages.map((sub, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveVillaImg(sub.img)}
                    className={`relative w-20 sm:w-auto aspect-[4/3] flex-shrink-0 rounded-xl overflow-hidden border transition-all active:scale-95 touch-manipulation cursor-pointer ${
                      activeVillaImg === sub.img
                        ? 'border-[#00AEEF] ring-2 ring-[#00AEEF]/40 scale-[1.02] shadow-md'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View ${sub.title}`}
                  >
                    <img src={sub.img} alt={sub.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Architectural Monograph Details */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#00AEEF] tracking-wider uppercase">
                  Project No. 2026.082
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-display text-[#090D16] mt-1 leading-snug">
                  Private Residence — Modern Tropical Living
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-mono mt-1">
                  Pering, Gianyar, Bali • Residential Architecture &amp; Bespoke Interior
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A seamless synthesis of contemporary minimalist form and heritage Balinese craftsmanship. Each private residence features traditional carved stone relief entry gates (*Kori Agung*), serene river stone courtyards with frangipani trees, shaded pergolas, bookmatched marble TV walls, and hotel-grade spa bathrooms with concealed niche LED channels.
              </p>

              {/* Specification Table */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5 sm:space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Program</span>
                  <span className="text-[#090D16] font-semibold text-right">3-Unit Private Residential Cluster, Shaded Carport, Courtyard</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Finishes</span>
                  <span className="text-[#090D16] font-semibold text-right">River Stone Masonry, Teak Decking, Charcoal Marble</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Joinery</span>
                  <span className="text-[#090D16] font-semibold text-right">Fluted Oak Acoustic Panels, Built-in Wardrobes</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Deliverables</span>
                  <span className="text-[#090D16] font-semibold text-right">Full DED Blueprints, Enscape Visuals, Turnkey Execution</span>
                </div>
              </div>

              <div>
                <a
                  href="https://wa.me/qr/JQDCEWBBMW35I1?s=v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 py-3 rounded-xl bg-slate-100 hover:bg-[#00AEEF] hover:text-white text-[#090D16] text-xs font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 touch-manipulation shadow-sm cursor-pointer"
                >
                  <span>Inquire Residential Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* CASE STUDY 02: PUBLIC FACILITY — WELLNESS CLUBHOUSE & RESORT PAVILION */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-10 lg:p-12 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Interactive Media Stage */}
            <div className="lg:col-span-7 space-y-4">
              <div
                className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md cursor-pointer group"
                onClick={() => setModalImage(activeFasilitasImg)}
              >
                <img
                  src={activeFasilitasImg}
                  alt="Public Facility Showcase"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-[#090D16] shadow-sm">
                  Public Facility • Gianyar, Bali
                </div>
                
                {/* Touch/Hover Enlarge Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#090D16]/85 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span>Enlarge</span>
                </div>
              </div>

              {/* Sub-gallery View Selector */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-3">
                {fasilitasSubImages.map((sub, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveFasilitasImg(sub.img)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all active:scale-95 cursor-pointer ${
                      activeFasilitasImg === sub.img
                        ? 'border-[#00AEEF] ring-2 ring-[#00AEEF]/30 scale-[1.03] shadow-md'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View ${sub.title}`}
                  >
                    <img src={sub.img} alt={sub.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Architectural Monograph Details */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#00AEEF] tracking-wider uppercase">
                  Project No. 245.170
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-display text-[#090D16] mt-1 leading-snug">
                  Public Facility — Wellness Clubhouse &amp; Pavilion
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-mono mt-1">
                  Gianyar, Bali • Commercial Hospitality Architecture
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A contemporary resort-inspired community pavilion designed with a monumental pitched gable glass facade. The complex incorporates a rooftop outdoor timber deck for sunset gatherings, an outdoor geometric swimming pool, a double-height fitness gym, and an intimate reformer pilates studio overlooking the water.
              </p>

              {/* Specification Table */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5 sm:space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Program</span>
                  <span className="text-[#090D16] font-semibold text-right">Clubhouse, Rooftop Deck, Pool, Gym, Pilates</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Structure</span>
                  <span className="text-[#090D16] font-semibold text-right">Steel Framing &amp; Reinforced Concrete</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Primary Materials</span>
                  <span className="text-[#090D16] font-semibold text-right">Glazed Curtain Wall, Teak Decking, Honed Marble</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Deliverables</span>
                  <span className="text-[#090D16] font-semibold text-right">Architectural Masterplan, 3D Renders, Interior Specs</span>
                </div>
              </div>

              <div>
                <a
                  href="https://wa.me/qr/JQDCEWBBMW35I1?s=v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 py-3 rounded-xl bg-slate-100 hover:bg-[#00AEEF] hover:text-white text-[#090D16] text-xs font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 touch-manipulation shadow-sm cursor-pointer"
                >
                  <span>Inquire Public Facility Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* CASE STUDY 03: URBAN SHOPHOUSES — MODERN GABLE LIVING COMPLEX */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-10 lg:p-12 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Interactive Media Stage */}
            <div className="lg:col-span-7 space-y-4">
              <div
                className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md cursor-pointer group"
                onClick={() => setModalImage(activeTownhouseImg)}
              >
                <img
                  src={activeTownhouseImg}
                  alt="Urban Shophouses Elevation"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-[#090D16] shadow-sm">
                  Urban Shophouses
                </div>
                
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#090D16]/85 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span>Enlarge</span>
                </div>
              </div>

              {/* Sub-gallery View Selector (3 perspectives) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {townhouseImages.map((sub, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTownhouseImg(sub.img)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all active:scale-95 touch-manipulation cursor-pointer ${
                      activeTownhouseImg === sub.img
                        ? 'border-[#00AEEF] ring-2 ring-[#00AEEF]/40 scale-[1.02] shadow-md'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View ${sub.title}`}
                  >
                    <img src={sub.img} alt={sub.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Architectural Monograph Details */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#00AEEF] tracking-wider uppercase">
                  Project No. 2025.114
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-display text-[#090D16] mt-1 leading-snug">
                  Urban Shophouses — Modern Gable Living Complex
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-mono mt-1">
                  Commercial &amp; Multi-Unit Residential Architecture
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A contemporary multi-story residential and shophouse development marrying bold Scandinavian gable rooflines with tropical passive cooling strategies. Natural terracotta breeze blocks (roster) filter equatorial sunlight and maintain privacy while allowing refreshing airflow throughout all living levels.
              </p>

              {/* Specification Table */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5 sm:space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Typology</span>
                  <span className="text-[#090D16] font-semibold text-right">3-Story Gable Shophouse &amp; Multi-Unit Complex</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Facade Feature</span>
                  <span className="text-[#090D16] font-semibold text-right">Terracotta Breeze Blocks &amp; Steel Canopy</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Lighting</span>
                  <span className="text-[#090D16] font-semibold text-right">Concealed Warm Architectural LED Framing</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Execution</span>
                  <span className="text-[#090D16] font-semibold text-right">Architectural Design &amp; Turnkey Construction</span>
                </div>
              </div>

              <div>
                <a
                  href="https://wa.me/qr/JQDCEWBBMW35I1?s=v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 py-3 rounded-xl bg-slate-100 hover:bg-[#00AEEF] hover:text-white text-[#090D16] text-xs font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 touch-manipulation shadow-sm cursor-pointer"
                >
                  <span>Inquire Shophouse Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* CASE STUDY 04: EXCLUSIVE BOARDING HOUSE — MODERN BALINESE LIVING */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-10 lg:p-12 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Interactive Media Stage */}
            <div className="lg:col-span-7 space-y-4">
              <div
                className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md cursor-pointer group"
                onClick={() => setModalImage(activeKostImg)}
              >
                <img
                  src={activeKostImg}
                  alt="Exclusive Boarding House Elevation"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-[#090D16] shadow-sm">
                  Exclusive Boarding House • Bali
                </div>
                
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#090D16]/85 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span>Enlarge</span>
                </div>
              </div>

              {/* Sub-gallery View Selector (2 perspectives) */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {kostImages.map((sub, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveKostImg(sub.img)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all active:scale-95 touch-manipulation cursor-pointer ${
                      activeKostImg === sub.img
                        ? 'border-[#00AEEF] ring-2 ring-[#00AEEF]/40 scale-[1.02] shadow-md'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View ${sub.title}`}
                  >
                    <img src={sub.img} alt={sub.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Architectural Monograph Details */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#00AEEF] tracking-wider uppercase">
                  Project No. 2026.118
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-display text-[#090D16] mt-1 leading-snug">
                  Exclusive Boarding House — Modern Balinese Living
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-mono mt-1">
                  Bali • Exclusive Boarding House &amp; Rental Architecture
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A contemporary 2-story rental residence and exclusive boarding house development combining authentic Balinese warmth with functional modern spatial planning. Features traditional crown roof tiles, private balconies with minimalist steel railings, warm textured stucco walls, and natural river stone perimeter fencing for optimal privacy and lush tropical tranquility.
              </p>

              {/* Specification Table */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5 sm:space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Typology</span>
                  <span className="text-[#090D16] font-semibold text-right">2-Story Modern Balinese Exclusive Boarding House</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Facade Feature</span>
                  <span className="text-[#090D16] font-semibold text-right">Natural Stone Boundary Wall &amp; Exterior Balcony Walkway</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Roof &amp; Joinery</span>
                  <span className="text-[#090D16] font-semibold text-right">Traditional Balinese Crown Tile Roof &amp; Solid Timber Frames</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Execution</span>
                  <span className="text-[#090D16] font-semibold text-right">Architectural Blueprint Design &amp; Turnkey Construction</span>
                </div>
              </div>

              <div>
                <a
                  href="https://wa.me/qr/JQDCEWBBMW35I1?s=v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 py-3 rounded-xl bg-slate-100 hover:bg-[#00AEEF] hover:text-white text-[#090D16] text-xs font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 touch-manipulation shadow-sm cursor-pointer"
                >
                  <span>Inquire Boarding House Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Lightbox */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setModalImage(null)}
          >
            <div className="relative max-w-5xl w-full flex flex-col items-center my-auto">
              <div className="w-full flex justify-between items-center mb-3 gap-2">
                <span className="text-xs font-mono text-slate-400">
                  Tap image or close button
                </span>
                <button
                  type="button"
                  onClick={() => setModalImage(null)}
                  className="text-white hover:text-[#00AEEF] text-xs font-bold tracking-wider uppercase min-h-[44px] px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 active:scale-90 transition-all flex items-center gap-2 cursor-pointer touch-manipulation border border-white/15"
                  aria-label="Close Preview"
                >
                  <span className="hidden sm:inline">Close Preview</span>
                  <span className="text-base font-bold leading-none">✕</span>
                </button>
              </div>
              
              <img
                src={modalImage}
                alt="Enlarged Architectural Drawing"
                className="w-full max-h-[65vh] sm:max-h-[80vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl bg-white border border-slate-700 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
