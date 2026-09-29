'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'NIRWIKARA brought an exceptional level of architectural discipline to our rukos complex. Their working drawings at Scale 1:100 were flawless, and the final built elevation matches the 3D Enscape simulation with absolute fidelity.',
      author: 'Hendrik Pratama',
      role: 'Property Developer',
      commission: '3-Story Rukos Complex',
      year: '2025',
    },
    {
      quote:
        'The master suite joinery is of cabinetmaker quality. From the vertical fluted oak paneling to the concealed LED channels and suspended vanity, the attention to detail transformed our master bedroom into a serene sanctuary.',
      author: 'Dr. Stephanie Chandra',
      role: 'Private Residence Owner',
      commission: 'Bespoke Master Suite Renovation',
      year: '2025',
    },
    {
      quote:
        'Managing a commercial hospitality clubhouse project in Bali required strict coordination between structural engineering and resort aesthetic. NIRWIKARA handled both under one cohesive turnkey contract without delays.',
      author: 'Wayan Suryanatha',
      role: 'Hospitality Director',
      commission: 'Public Facility Clubhouse',
      year: '2024',
    },
  ];

  const standards = [
    {
      metric: '100%',
      title: 'Fixed Contract Transparency',
      desc: 'Itemized Bill of Quantities (RAB) with locked unit rates, eliminating hidden costs or mid-construction surprises.',
    },
    {
      metric: '1:1',
      title: 'Render-to-Site Fidelity',
      desc: 'Every detail in our 3D visualizations is backed by verified structural engineering and physical material specifications.',
    },
    {
      metric: '10-Yr',
      title: 'Structural Integrity Warranty',
      desc: 'All structural framing, concrete foundations, and roofing systems are backed by documented structural guarantees.',
    },
    {
      metric: 'Turnkey',
      title: 'Single-Source Accountability',
      desc: 'From architectural masterplanning and technical blueprints to interior joinery and handover, managed by one team.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[#00AEEF] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#090D16] font-display">
            Built on Rigor, Validated by Clients
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Direct perspectives from property developers, private homeowners, and commercial directors who commissioned our practice.
          </p>
        </div>

        {/* Testimonials 3-Column Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200/90 flex flex-col justify-between hover:border-[#00AEEF] transition-all duration-300"
            >
              <div>
                {/* Subtle Quote Symbol */}
                <span className="font-serif text-4xl text-[#00AEEF] leading-none select-none block mb-4">
                  “
                </span>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  {item.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#090D16]">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-[11px] font-mono text-[#00AEEF] mt-1">
                    {item.commission}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Operating Standards */}
        <div className="border-t border-slate-200/90 pt-16">
          <div className="max-w-xl mb-10">
            <span className="text-xs font-mono text-[#00AEEF] uppercase tracking-widest font-semibold">
              Execution Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#090D16] mt-1">
              Studio Operating Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((std, i) => (
              <div key={i} className="space-y-2 border-l-2 border-slate-200 pl-5 hover:border-[#00AEEF] transition-colors">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#090D16] font-display">
                  {std.metric}
                </span>
                <h4 className="text-sm font-bold text-[#090D16]">
                  {std.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
