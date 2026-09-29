'use client';

export default function Workflow() {
  const steps = [
    {
      number: '01',
      phase: 'Discovery & Schematics',
      title: 'Spatial Programming & Concept',
      desc: 'We begin with a rigorous analysis of your site topography, solar orientation, and functional lifestyle requirements to formulate the initial architectural massing.',
      deliverables: ['Site Feasibility Report', 'Spatial Program Schematics', 'Preliminary Moodboards'],
    },
    {
      number: '02',
      phase: 'Technical Documentation',
      title: 'Measured Blueprints & DED',
      desc: 'Translating concepts into construction-ready working drawings at Scale 1:100, including structural engineering, MEP schematics, and itemized Bill of Quantities (RAB).',
      deliverables: ['Scale 1:100 Architectural Plans', 'Structural & MEP Drawings', 'Transparent Itemized Budget'],
    },
    {
      number: '03',
      phase: 'Digital Simulation',
      title: 'Photorealistic 3D Visualization',
      desc: 'True-to-scale Enscape simulations rendering natural daylight conditions, material tactile textures, and spatial proportions before a single brick is laid.',
      deliverables: ['High-Res Exterior Elevations', 'Interior Material Studies', '360° Spatial Walkthroughs'],
    },
    {
      number: '04',
      phase: 'Site Execution',
      title: 'Precision Build & Custom Joinery',
      desc: 'Direct execution by certified structural engineers alongside our dedicated joinery atelier for bespoke cabinetry, fluted wood paneling, and drop ceilings.',
      deliverables: ['On-Site Quality Supervision', 'Bespoke Workshop Joinery', 'Weekly Milestone Reports'],
    },
    {
      number: '05',
      phase: 'Handover & Stewardship',
      title: 'Commissioning & Warranty',
      desc: 'Comprehensive multi-point structural inspection followed by formal project handover, as-built documentation, and comprehensive structural warranty.',
      deliverables: ['As-Built Drawing Package', 'Maintenance Manual', 'Official Structural Warranty'],
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-slate-50/80 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#00AEEF] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#090D16] font-display">
            A Rigorous, Five-Stage Project Lifecycle
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Eliminating budget overruns and construction discrepancies through a transparent, architect-led design and build delivery system.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-[#00AEEF] transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-[#090D16] group-hover:text-[#00AEEF] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#090D16] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Key Deliverables</p>
                <ul className="space-y-1.5">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <span className="text-[#00AEEF] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
