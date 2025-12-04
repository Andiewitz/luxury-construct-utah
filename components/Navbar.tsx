import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only set up intersection observer if we are on the home page
    if (location.pathname !== '/') {
      setActiveSection(''); // Clear active section on other pages
      return;
    }

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
  }, [location.pathname]);

  // Handle navigation logic
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    // Special case for Blog page navigation
    if (id === 'blog') {
      navigate('/blog');
      window.scrollTo(0, 0);
      return;
    }

    // If we are not on the home page, navigate to home with a scroll target
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      // We are already on home, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Helper class logic for links
  const getLinkClasses = (sectionId: string) => {
    // If we are on the blog page, only highlight the blog link
    const isActive = location.pathname === '/blog' 
      ? sectionId === 'blog'
      : activeSection === sectionId;

    return `
      relative flex items-center transition-colors duration-300
      text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wide md:normal-case md:tracking-normal
      hover:text-brand-gray-light cursor-pointer whitespace-nowrap
      ${isActive ? 'text-[#d4e5bc]' : ''}
      after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#d4e5bc] after:transition-all after:duration-300 
      ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
    `;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nav-dark text-white backdrop-blur-md transition-all duration-300 shadow-lg border-b border-white/5">
      <div className="container mx-auto px-4 py-4 relative flex justify-center items-center">
        
        {/* BRANDING: Visible on Desktop Only, positioned absolutely to keep nav centered */}
        <a 
          href="/" 
          className="hidden md:block absolute left-4 font-display font-bold text-xl lg:text-2xl text-amber-400 tracking-wider hover:text-amber-300 transition-colors"
        >
          LUXURY
        </a>

        <nav>
          {/* 
            Mobile: Tighter spacing (space-x-3) and smaller text to fit extra Blog item
            Desktop: Wider spacing (space-x-8) 
          */}
          <ul className="flex items-center space-x-3 sm:space-x-5 md:space-x-8">
            
            {/* HOME */}
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className={getLinkClasses('home')}
              >
                Home
              </a>
            </li>
            
            {/* SERVICES */}
            <li>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className={getLinkClasses('services')}
              >
                Services
              </a>
            </li>

            {/* ABOUT */}
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className={getLinkClasses('about')}
              >
                About
              </a>
            </li>

            {/* BLOG - NEW ITEM */}
            <li>
              <a 
                href="/blog" 
                onClick={(e) => handleNavClick(e, 'blog')}
                className={getLinkClasses('blog')}
              >
                Blog
              </a>
            </li>

            {/* TESTIMONIALS */}
            <li>
              <a 
                href="#testimonials" 
                onClick={(e) => handleNavClick(e, 'testimonials')}
                className={getLinkClasses('testimonials')}
              >
                Reviews
              </a>
            </li>

            {/* CONTACT */}
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
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