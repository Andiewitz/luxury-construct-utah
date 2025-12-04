import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    id: '01',
    title: 'Initial Consultation',
    description: 'We begin by understanding your needs, preferences, and project goals. During this consultation, we discuss your ideas, assess the site, and provide expert recommendations to help shape your project.'
  },
  {
    id: '02',
    title: 'Detailed Proposal',
    description: 'Based on the initial consultation, we create a detailed proposal outlining the scope of work, materials, timeline, and cost estimates. We ensure that you have a clear understanding of what to expect throughout the project.'
  },
  {
    id: '03',
    title: 'Design and Planning',
    description: 'Our team collaborates with you to finalize the design and plan for your concrete project. We take into account factors such as site conditions, functionality, and aesthetic preferences to develop a comprehensive plan.'
  },
  {
    id: '04',
    title: 'Construction and Execution',
    description: 'With the plan in place, our skilled contractors proceed with the construction phase. We adhere to strict quality standards and employ best practices to ensure that every aspect of the project is executed flawlessly.'
  },
  {
    id: '05',
    title: 'Inspection and Quality Assurance',
    description: 'Upon completion, we conduct thorough inspections to verify that the work meets our high standards and your expectations. We address any concerns promptly to ensure your complete satisfaction.'
  },
  {
    id: '06',
    title: 'Final Walkthrough and Handover',
    description: 'We walk you through the finished project, highlighting the features and ensuring that you are fully satisfied with the results. Your approval marks the successful completion of the project.'
  }
];

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // LOGIC: Start drawing when the section is 50% (Middle) of the viewport.
      // Previously 0.75 (Bottom), which made the line stay too low ("at the floor").
      const startTrigger = windowHeight * 0.5;
      
      // Calculate pixels passed relative to that trigger
      const pixelsPassed = startTrigger - rect.top;
      
      // DENOMINATOR: 
      // We want the line to finish roughly when the bottom of the content enters the viewport.
      // Math: (H - 0.5WH) approx.
      const trackHeight = rect.height - (windowHeight * 0.5);
      
      const progress = pixelsPassed / trackHeight;

      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      
      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 pb-48 bg-background-light dark:bg-background-dark relative overflow-hidden" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        
        {/* Header */}
        <div className="text-center mb-24 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-light-primary dark:text-text-dark-primary mb-4">
            Our Process: From Consultation to Completion
          </h2>
          <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            We believe that clear communication and meticulous planning are key to successful concrete projects. Our streamlined process ensures that every stage of your project is handled with care and professionalism.
          </p>
        </div>

        {/* The Central Line Container */}
        <div className="absolute left-4 sm:left-1/2 top-[220px] bottom-0 w-1 -ml-0.5 sm:ml-0 h-[calc(100%-220px)] z-0">
          {/* Background Track (Faint) */}
          <div className="absolute inset-0 bg-brand-gray-light dark:bg-gray-800 w-px sm:w-0.5 mx-auto opacity-30"></div>
          
          {/* The Active "Black" Line (Draws on Scroll) */}
          <div 
            className="absolute top-0 left-0 right-0 bg-gray-900 dark:bg-primary w-0.5 sm:w-1 mx-auto shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          >
             {/* Glowing Head of the line */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 translate-y-1/2"></div>
          </div>
        </div>

        {/* The Nodes - Increased vertical spacing for a longer section */}
        <ol className="space-y-16 sm:space-y-32 relative z-10" itemScope itemType="https://schema.org/HowTo">
          {STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            // Calculate if the line has passed this node
            const isActive = scrollProgress * STEPS.length > index; 

            return (
              <li 
                key={step.id}
                className={`flex flex-col sm:flex-row items-center sm:items-start ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                itemProp="step" 
                itemScope 
                itemType="https://schema.org/HowToStep"
              >
                {/* Text Content Side */}
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-16 text-left sm:text-right' : 'sm:pl-16 text-left'}`}>
                  <div 
                    className={`group relative p-8 bg-white dark:bg-card-dark rounded-xl shadow-sm hover:shadow-xl border border-transparent hover:border-primary/20 transition-all duration-300
                      ${isActive ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-8'}
                      min-h-[180px] flex flex-col justify-center
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-2 sm:hidden">
                       <span className="font-display text-4xl font-bold text-gray-200 dark:text-gray-700 group-hover:text-primary/20 transition-colors">
                        {step.id}
                      </span>
                       <h3 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary" itemProp="name">
                        {step.title}
                      </h3>
                    </div>

                    <h3 className="hidden sm:block font-display text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3 group-hover:text-primary transition-colors" itemProp="name">
                      {step.title}
                    </h3>
                    
                    {/* Description: Visible by default */}
                    <div className="relative">
                      <p 
                        className="text-sm md:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed"
                        itemProp="text"
                      >
                        {step.description}
                      </p>
                    </div>
                    
                    <meta itemProp="position" content={(index + 1).toString()} />
                  </div>
                </div>

                {/* Center Node / Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div 
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 flex items-center justify-center bg-background-light dark:bg-background-dark z-20 transition-all duration-500
                      ${isActive 
                        ? 'border-primary scale-110 shadow-[0_0_20px_rgba(89,106,64,0.4)]' 
                        : 'border-brand-gray-light dark:border-gray-700 scale-100 grayscale'}
                    `}
                  >
                    <span className={`font-display font-bold text-sm sm:text-lg ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Empty Spacer Side for Desktop layout balance */}
                <div className="hidden sm:block w-1/2"></div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};