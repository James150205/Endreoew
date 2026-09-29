'use client';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Architectural Planning & Drafting',
      desc: 'Developing functional spatial layouts, measured floor plans, contemporary exterior facades, and Detailed Engineering Drawings (DED) ready for construction.',
      items: ['Spatial Layout Concepts', 'Contemporary Facade Design', 'Structural & Technical Drawings', 'Building Specifications'],
    },
    {
      number: '02',
      title: 'Photorealistic 3D Enscape Visuals',
      desc: 'True-to-scale 3D computer modeling simulating sun angles, natural daylight, physical material textures, and spatial ambiance prior to physical execution.',
      items: ['High-Definition 3D Renders', 'Material & Texture Simulation', 'Natural & Artificial Lighting Schemes', 'Interior & Exterior Perspectives'],
    },
    {
      number: '03',
      title: 'Interior Design & Custom Joinery',
      desc: 'Precision built-in furniture crafted at our dedicated workshop with ergonomic dimensions, premium laminate finishes, and seamless joinery.',
      items: ['Integrated TV Consoles & Displays', 'Bespoke Wardrobe Systems', 'Vertical Fluted Wood Wall Panels', 'Suspended Vanities & Desks'],
    },
    {
      number: '04',
      title: 'General Construction (Design & Build)',
      desc: 'End-to-end development of modern residences, private villas, and commercial retail units with streamlined single-contract project management.',
      items: ['High-Grade Civil & Structural Work', 'Refined Architectural Finishing', 'Dedicated On-Site Supervision', 'Milestone Progress Documentation'],
    },
    {
      number: '05',
      title: 'Complete Space Renovation',
      desc: 'Transforming aging structures into functional modern sanctuaries through layout reconfiguration, structural upgrades, and exterior facade remodeling.',
      items: ['Space Modernization & Remodeling', 'Floor & Room Expansions', 'Roofing & Utility Overhaul', 'Premium Surface Finishes'],
    },
    {
      number: '06',
      title: 'Architectural Lighting & Ceilings',
      desc: 'Designing ambient indirect cove lighting, recessed warm LED strips, and multi-tiered drop ceilings for relaxing and sophisticated spatial atmospheres.',
      items: ['Multi-tier Drop & Cove Ceilings', 'Concealed LED Strip Accents', '3000K Warm Ambient Schemes', 'Certified Electrical Infrastructure'],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[#00AEEF] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#090D16] font-display">
            Integrated Architectural &amp; Build Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            From measured 1:100 technical drafting and photorealistic 3D visualization to on-site custom joinery fabrication and turnkey delivery.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item) => (
            <div
              key={item.number}
              className="bg-slate-50/60 rounded-2xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#00AEEF] transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-[#00AEEF] bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Full Service
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#090D16] font-display mb-3 group-hover:text-[#00AEEF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-200/80">
                  <ul className="space-y-2 mb-5">
                    {item.items.map((sub, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]"></span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/6285713844349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white hover:bg-[#00AEEF] hover:text-white text-[#090D16] border border-slate-200 text-xs font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-sm group-hover:border-[#00AEEF]/40"
                >
                  <span>Inquire Capability</span>
                  <span className="text-sm leading-none">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
