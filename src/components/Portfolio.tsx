'use client';

import { useState, useEffect } from 'react';
import { ProjectItem, defaultProjects } from '@/data/defaultProjects';
import { getStoredProjects, PORTFOLIO_UPDATED_EVENT } from '@/utils/portfolioStorage';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [projects, setProjects] = useState<ProjectItem[]>(defaultProjects);

  useEffect(() => {
    // Load persisted projects
    setProjects(getStoredProjects());

    // Listen for real-time updates from /admin
    const handleUpdate = () => {
      setProjects(getStoredProjects());
    };

    window.addEventListener(PORTFOLIO_UPDATED_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(PORTFOLIO_UPDATED_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const categories = [
    { id: 'All', label: 'All Works', count: projects.length },
    {
      id: 'Residential Architecture',
      label: 'Residential',
      count: projects.filter((p) => p.category === 'Residential Architecture').length,
    },
    {
      id: 'Interior & Custom Joinery',
      label: 'Interior & Joinery',
      count: projects.filter((p) => p.category === 'Interior & Custom Joinery').length,
    },
    {
      id: 'Public Facility & Hospitality',
      label: 'Hospitality',
      count: projects.filter((p) => p.category === 'Public Facility & Hospitality').length,
    },
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
              Explore our expanded portfolio spanning Bali private tropical residences, commercial hospitality wellness pavilions, urban shophouses and multi-unit residences, and bespoke joinery interiors.
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
                    href="https://wa.me/6285713844349"
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
                  href="https://wa.me/6285713844349"
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
