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

    const sections = document.querySelectorAll('main[id], section[id], footer[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Handle smooth scrolling and prevent HashRouter 404s
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper class logic for links
  const getLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `
      relative flex items-center transition-colors duration-300
      text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-wide md:normal-case md:tracking-normal
      hover:text-brand-gray-light cursor-pointer
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
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className={getLinkClasses('home')}
              >
                Home
              </a>
            </li>
            
            {/* SERVICES */}
            <li>
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, 'services')}
                className={getLinkClasses('services')}
              >
                Services
              </a>
            </li>

            {/* ABOUT */}
            <li>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className={getLinkClasses('about')}
              >
                About
              </a>
            </li>

            {/* TESTIMONIALS (Was Portfolio) */}
            <li>
              <a 
                href="#testimonials" 
                onClick={(e) => scrollToSection(e, 'testimonials')}
                className={getLinkClasses('testimonials')}
              >
                Testimonials
              </a>
            </li>

            {/* CONTACT */}
            <li>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className={getLinkClasses('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};