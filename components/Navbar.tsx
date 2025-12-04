import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Threshold 0.2 means trigger when 20% of the section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px 0px 0px' }
    );

    const sections = document.querySelectorAll('main[id], section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Helper class logic for links
  const getLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `
      relative flex items-center transition-colors duration-300
      text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-wide md:normal-case md:tracking-normal
      hover:text-brand-gray-light
      ${isActive ? 'text-[#d4e5bc]' : ''}
      after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#d4e5bc] after:transition-all after:duration-300 
      ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
    `;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nav-dark text-white backdrop-blur-md transition-all duration-300 shadow-lg border-b border-white/5">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-center items-center">
          {/* 
            Mobile: Tighter spacing (space-x-4) and smaller text (handled in getLinkClasses)
            Desktop: Wider spacing (space-x-10) and standard text size
          */}
          <ul className="flex items-center space-x-4 sm:space-x-6 md:space-x-10">
            
            {/* HOME */}
            <li>
              <a href="#home" className={getLinkClasses('home')}>
                Home
              </a>
            </li>
            
            {/* SERVICES - Simplified, removed dropdown */}
            <li>
              <a href="#services" className={getLinkClasses('services')}>
                Services
              </a>
            </li>

            {/* ABOUT */}
            <li>
              <a href="#" className={getLinkClasses('about')}>
                About
              </a>
            </li>

            {/* PORTFOLIO */}
            <li>
              <a href="#" className={getLinkClasses('portfolio')}>
                Portfolio
              </a>
            </li>

            {/* CONTACT */}
            <li>
              <a href="#" className={getLinkClasses('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};