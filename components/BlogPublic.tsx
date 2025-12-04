import React from 'react';
import { Navbar } from './Navbar';
import { Contact } from './Contact';
import { FloatingBackground } from './FloatingBackground';
import { SEO } from './SEO';

export const BlogPublic: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-sans text-text-light dark:text-text-dark">
      <SEO 
        title="Blog - Luxury Construction | Coming Soon"
        description="Our insights on luxury landscaping, heated driveways, and concrete maintenance are coming soon. Stay tuned for expert advice."
        canonical="https://tecontractorsinutah.com/blog"
      />

      <Navbar />

      <section className="relative flex-grow flex items-center justify-center min-h-[70vh] overflow-hidden bg-gray-950 text-white pt-20">
        <FloatingBackground hideGradient={false} />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="mb-8 flex justify-center">
             <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_40px_rgba(89,106,64,0.4)] animate-pulse">
                <span className="material-icons-outlined text-5xl text-primary">construction</span>
             </div>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Sorry, Still Under <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">
              Construction!
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            We are currently pouring the digital foundation for our new insights section. 
            Our team is working hard to bring you expert advice on luxury construction and landscaping soon.
          </p>
          
          <a 
            href="/" 
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(89,106,64,0.4)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(89,106,64,0.6)]"
          >
             Return Home
          </a>
        </div>
      </section>

      <Contact />
    </div>
  );
};
