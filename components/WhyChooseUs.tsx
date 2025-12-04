import React from 'react';

const BENEFITS = [
  {
    id: "01",
    title: "Save Money",
    description: "Fixed quotes, no hidden costs, done right the first time. We value your budget as much as our craftsmanship.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Save Time",
    description: "On schedule, every time. We respect your timeline with efficient project management and dedicated crews.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "03",
    title: "Peace of Mind",
    description: "Clear communication, professional process, zero stress. We handle the permits, planning, and heavy lifting.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: "04",
    title: "Your Vision, Built Right",
    description: "We listen, plan, and deliver exactly what you need. Custom solutions tailored to your property and preferences.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    id: "05",
    title: "Built to Last",
    description: "Premium materials and expert craftsmanship that stands the test of time. Quality is our non-negotiable standard.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Why Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">
              Luxury Construct?
            </span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {BENEFITS.map((item, idx) => (
            <div 
              key={item.id} 
              className={`
                group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300
                ${idx === 3 ? 'lg:col-span-1' : ''} 
                ${idx === 4 ? 'lg:col-span-2' : ''}
              `}
            >
              <div className="absolute top-4 right-4 text-white/5 font-display text-6xl font-bold group-hover:text-amber-500/10 transition-colors">
                {item.id}
              </div>
              
              {/* Updated to Gold/Amber Colors */}
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                {item.icon}
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sustainability Banner (Glassmorphism) */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-900/20 backdrop-blur-xl border border-white/10"></div>
          <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
            
            {/* Icon Side - Kept Green for Eco theme */}
            <div className="flex-shrink-0">
               <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12ZM12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5Z" opacity="0.3"/>
                     <path d="M16.5 12.5C16.5 12.5 16 9 12 8C12 8 13.5 10 13 12C13 12 11 10.5 9 11.5C9 11.5 10 12.5 10 14C10 14 8 13.5 7.5 15.5C7.5 15.5 9.5 15 11 16C11 16 10.5 18 13 18C13 18 12.5 15.5 14.5 14.5C14.5 14.5 16.5 15 17 13.5C17 13.5 16.5 13.5 16.5 12.5Z"/>
                  </svg>
               </div>
            </div>

            {/* Text Side */}
            <div className="flex-grow text-center lg:text-left">
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                Our Commitment to Sustainability
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left">
                <div>
                  <h4 className="text-green-400 font-bold mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span> Eco-Friendly Materials
                  </h4>
                  <p className="text-gray-300 text-sm">Environmentally responsible concrete mixes reducing carbon emissions.</p>
                </div>
                <div>
                  <h4 className="text-green-400 font-bold mb-1 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-400"></span> Waste Reduction
                  </h4>
                  <p className="text-gray-300 text-sm">Efficient management practices to minimize construction waste.</p>
                </div>
                <div>
                  <h4 className="text-green-400 font-bold mb-1 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-400"></span> Energy-Efficient
                  </h4>
                  <p className="text-gray-300 text-sm">Processes designed to reduce overall energy consumption.</p>
                </div>
                <div>
                  <h4 className="text-green-400 font-bold mb-1 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-400"></span> Long-Lasting
                  </h4>
                  <p className="text-gray-300 text-sm">Durability reduces the need for frequent repairs and materials.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};