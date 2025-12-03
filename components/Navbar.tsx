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
      ${isActive ? 'text-primary' : ''}
      after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 
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
            
            {/* SERVICES */}
            <li className="relative group">
              <a href="#services" className={getLinkClasses('services')}>
                Services
                {/* Chevron only shows on tablet/desktop to save space on mobile */}
                <span className="hidden sm:block material-icons-outlined text-base ml-1 transition-transform duration-300 group-hover:rotate-180">
                  expand_more
                </span>
              </a>
              
              {/* Dropdown Menu (Desktop Hover) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 hidden md:block">
                <div className="bg-background-light dark:bg-slate-900 text-text-light dark:text-text-dark rounded-lg shadow-xl py-2 overflow-hidden border border-gray-100 dark:border-gray-800">
                  <a href="#services" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors">
                    Residential Concrete
                  </a>
                  <a href="#services" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors">
                    Commercial Concrete
                  </a>
                  <a href="#services" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors">
                    Landscaping Design
                  </a>
                  <a href="#services" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors">
                    Hardscaping
                  </a>
                </div>
              </div>
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