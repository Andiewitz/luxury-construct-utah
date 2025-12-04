import React from 'react';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="home" className="relative flex-grow flex items-center justify-center text-center z-10 pointer-events-none">
      {/* 
        pointer-events-auto is needed on the inner container so text is selectable 
        and buttons clickable, but the main container lets clicks pass through 
        to the background elements.
        
        MOBILE ADJUSTMENTS:
        1. Removed 'pt-20' on mobile (kept md:pt-20) to stop pushing content down.
        2. Added '-mt-20' (negative margin) on mobile to optically lift the center above the browser bottom bar.
      */}
      <div className="px-4 pt-0 md:pt-20 pointer-events-auto -mt-20 md:mt-0">
        <p className="font-display text-lg md:text-xl mb-4 md:mb-6 text-gray-600 dark:text-gray-400 tracking-wide uppercase opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          Built to Last, Designed to Impress
        </p>
        
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl max-w-4xl mx-auto leading-tight text-gray-900 dark:text-gray-100 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] translate-y-4">
          <span className="text-primary">
             Luxury
          </span> Construction & <br className="hidden md:block"/> 
          Landscaping Services in Salt Lake City
        </h1>

        {/* Reduced margin-top on mobile to keep things tight */}
        <div className="mt-8 md:mt-12 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards] translate-y-4">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center bg-blue-600 text-white font-semibold font-sans px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:bg-blue-700"
          >
            Get a Free Quote
            <span className="material-icons-outlined text-xl ml-2 group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
      
      {/* Inline Styles for one-off keyframes not in global config */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
};