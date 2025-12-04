import React from 'react';

export const Hero: React.FC = () => {
  return (
    <main id="home" className="relative flex-grow flex items-center justify-center text-center z-10 pointer-events-none">
      {/* 
        pointer-events-auto is needed on the inner container so text is selectable 
        and buttons clickable, but the main container lets clicks pass through 
        to the background elements.
      */}
      <div className="px-4 pt-20 pointer-events-auto">
        <p className="font-display text-lg md:text-xl mb-6 text-gray-600 dark:text-gray-400 tracking-wide uppercase opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          Built to Last, Designed to Impress
        </p>
        
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl max-w-4xl mx-auto leading-tight text-gray-900 dark:text-gray-100 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] translate-y-4">
          <span className="relative inline-block text-primary">
             Luxury
             {/* Decorative underline */}
             <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
             </svg>
          </span> Construct & <br className="hidden md:block"/> 
          Landscaping Services in Salt Lake City
        </h1>

        <div className="mt-12 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards] translate-y-4">
          <a
            href="#"
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