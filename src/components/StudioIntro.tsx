'use client';

export default function StudioIntro() {
  return (
    <section id="studio" className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold text-[#00AEEF] tracking-widest uppercase">
              The Studio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#090D16] leading-tight">
              Bridging Visionary Design &amp; Built Reality.
            </h2>
            <div className="w-16 h-1 bg-[#00AEEF]"></div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Founded on the belief that enduring spaces demand both visionary conceptual design and unwavering physical craftsmanship, <strong className="text-[#090D16]">NIRWIKARA Design And Build</strong> operates as an integrated architectural atelier and general construction practice.
            </p>
            <p>
              By fusing measured 1:100 technical drafting, photorealistic 3D Enscape simulation, and in-house joinery workshop production under a single dedicated stewardship, we eliminate the traditional friction between architect and builder—ensuring that every line drawn on paper is executed with precision on site.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left border-t border-slate-100">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#090D16] font-display">1:1</p>
                <p className="text-xs text-slate-500 mt-1">Render-to-Site Fidelity</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#090D16] font-display">Turnkey</p>
                <p className="text-xs text-slate-500 mt-1">Design &amp; Build Delivery</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#090D16] font-display">100%</p>
                <p className="text-xs text-slate-500 mt-1">Cost &amp; Schedule Transparency</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
