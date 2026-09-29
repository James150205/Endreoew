'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };

    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  const navLinks = [
    { name: 'Featured Works', href: '#featured' },
    { name: 'Capabilities', href: '#services' },
    { name: 'All Projects', href: '#portfolio' },
    { name: 'Methodology', href: '#workflow' },
    { name: 'Studio', href: '#studio' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-slate-100 py-3 sm:py-3.5'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-100/80 py-3.5 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group active:scale-95 transition-transform">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 p-1.5 flex items-center justify-center group-hover:border-[#00AEEF] transition-colors shadow-sm">
              <img
                src="/assets/images/logo-icon.png"
                alt="NIRWIKARA Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#090D16] font-display leading-none">
                NIRWIKARA
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-[#00AEEF] uppercase mt-1">
                Design And Build
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-[13px] font-semibold tracking-wide text-slate-600 hover:text-[#00AEEF] transition-colors relative py-1 group/link active:scale-95 cursor-pointer"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00AEEF] transition-all duration-200 group-hover/link:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4 xl:gap-5">
            <a
              href="https://wa.me/6281234567890?text=Hello%20NIRWIKARA%20Design%20And%20Build,%20I%20would%20like%20to%20inquire%20about%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#090D16] hover:bg-[#00AEEF] text-white transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            >
              <span>Inquire Project</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 active:scale-90 transition-all border border-slate-200/60 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[60px] z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 shadow-2xl p-6 space-y-4 max-h-[calc(100vh-60px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-800 hover:text-[#00AEEF] hover:bg-slate-50 active:bg-slate-100 rounded-xl transition-colors active:scale-98 cursor-pointer"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-400 text-xs">&rarr;</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href="https://wa.me/6281234567890?text=Hello%20NIRWIKARA%20Design%20And%20Build,%20I%20would%20like%20to%20inquire%20about%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-2.5 text-center w-full py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#090D16] text-white hover:bg-[#00AEEF] active:scale-95 transition-all shadow-md"
              >
                <span>Start Direct Consultation</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
