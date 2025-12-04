import React from 'react';
import { Link } from 'react-router-dom';
import { FloatingBackground } from './FloatingBackground';
import { SEO } from './SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden text-center px-4">
      <SEO 
        title="404 - Page Not Found | Luxury Construction"
        description="The page you are looking for does not exist. Return to Luxury Construction home."
      />

      {/* Reuse the subtle luxury background */}
      <FloatingBackground hideGradient={true} />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="font-display text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-900 mb-8 select-none">
          404
        </h1>
        
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          Blueprint Not Found
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          It seems you've wandered off the construction site. The page you are looking for has been moved, removed, or never existed.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold font-sans px-8 py-3 rounded-full shadow-[0_0_20px_rgba(89,106,64,0.4)] transition-all duration-300 hover:-translate-y-1"
        >
          <span className="material-icons-outlined mr-2">arrow_back</span>
          Return to Home
        </Link>
      </div>
      
      {/* Decorative construction lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-white"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-white"></div>
      </div>
    </div>
  );
};
