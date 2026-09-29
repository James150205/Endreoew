'use client';

import { useState } from 'react';

export default function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href="https://wa.me/6281234567890?text=Hello%20NIRWIKARA%20Design%20And%20Build,%20I%20would%20like%20to%20inquire%20about%20an%20architectural%20or%20interior%20project."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-2.5 sm:gap-3 bg-[#090D16] hover:bg-[#00AEEF] text-white px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-white/10 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,174,239,0.3)] hover:-translate-y-0.5 active:scale-95 touch-manipulation cursor-pointer"
        aria-label="Direct Architectural Inquiry via WhatsApp"
      >
        {/* Architectural Compass / Blueprint Icon */}
        <div className="w-6 h-6 flex items-center justify-center text-[#00AEEF] group-hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>

        <div className="flex flex-col text-left pr-1">
          <span className="text-[11px] font-bold tracking-wider uppercase font-display leading-tight">
            Inquire Project
          </span>
          <span className="text-[9px] font-mono text-slate-400 group-hover:text-white/80 transition-colors">
            Direct to Principal
          </span>
        </div>

        {/* Live Indicator */}
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      </a>
    </div>
  );
}
