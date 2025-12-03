import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FloatingBackground } from './components/FloatingBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-background-light dark:bg-background-dark font-sans text-text-light dark:text-text-dark">
      {/* Navbar sits on top of everything */}
      <Navbar />

      {/* Hero Section Container - Full Height */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Parallax Background Layer */}
        <FloatingBackground />

        {/* Hero Content */}
        <Hero />
      </section>

      {/* Services Section - Content Below Fold */}
      <Services />
    </div>
  );
};

export default App;