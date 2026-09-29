'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090D16] text-white pt-20 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Col 1: Studio Identity (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 p-1.5 flex items-center justify-center">
                <img
                  src="/assets/images/logo-icon.png"
                  alt="NIRWIKARA Logo Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold font-display tracking-tight text-white block">
                  NIRWIKARA
                </span>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#00AEEF] uppercase block">
                  Design And Build
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              An integrated architectural studio and turnkey general construction practice delivering measured structural engineering, photorealistic 3D visualization, and bespoke interior joinery.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Select 2025/2026 Commissions</span>
            </div>
          </div>

          {/* Col 2: Practice Areas (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00AEEF] font-bold">
              Practice Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>Architectural Masterplanning &amp; Drafting</li>
              <li>Scale 1:100 Detailed Engineering (DED)</li>
              <li>Photorealistic 3D Enscape Simulation</li>
              <li>Bespoke Oak Joinery &amp; Wardrobes</li>
              <li>Commercial Hospitality Architecture</li>
              <li>Turnkey General Construction</li>
            </ul>
          </div>

          {/* Col 3: Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00AEEF] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#featured" className="text-slate-300 hover:text-[#00AEEF] transition-colors cursor-pointer">
                  Featured Works
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-[#00AEEF] transition-colors cursor-pointer">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-300 hover:text-[#00AEEF] transition-colors cursor-pointer">
                  All Projects
                </a>
              </li>
              <li>
                <a href="#workflow" className="text-slate-300 hover:text-[#00AEEF] transition-colors cursor-pointer">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-300 hover:text-[#00AEEF] transition-colors cursor-pointer">
                  Endorsements
                </a>
              </li>
              <li>
                <a href="#studio" className="text-slate-300 hover:text-[#00AEEF] transition-colors cursor-pointer">
                  The Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Inquiries (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00AEEF] font-bold">
              Direct Inquiry
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              To discuss new land development, commercial pavilions, or interior commissions:
            </p>

            <div className="space-y-3 pt-1">
              <a
                href="https://wa.me/6281234567890?text=Hello%20NIRWIKARA%20Design%20And%20Build,%20I%20would%20like%20to%20discuss%20a%20project%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-[#00AEEF] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 border border-white/10 w-full justify-center active:scale-95 focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
              >
                <span>WhatsApp Principal</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <p className="text-[11px] font-mono text-slate-500">
                Mon — Sat: 08:30 — 18:00 WIB<br />
                Direct response within 2 hours
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} NIRWIKARA Design And Build. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Scale 1:100 DED</span>
            <span className="hover:text-slate-400 cursor-pointer">Photorealistic 3D Enscape</span>
            <span className="hover:text-slate-400 cursor-pointer">Turnkey Execution</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
